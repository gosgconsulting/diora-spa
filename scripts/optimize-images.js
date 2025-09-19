#!/usr/bin/env node

import sharp from 'sharp';
import { glob } from 'glob';
import { fileURLToPath } from 'url';
import { dirname, join, extname, basename } from 'path';
import fs from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

// Image optimization settings
const OPTIMIZATION_SETTINGS = {
  // Hero and large images
  hero: {
    maxWidth: 1920,
    maxHeight: 1080,
    quality: 85,
    format: 'jpeg'
  },
  // Service images
  service: {
    maxWidth: 800,
    maxHeight: 600,
    quality: 80,
    format: 'jpeg'
  },
  // Gallery images
  gallery: {
    maxWidth: 600,
    maxHeight: 600,
    quality: 75,
    format: 'jpeg'
  },
  // Team member photos
  team: {
    maxWidth: 400,
    maxHeight: 400,
    quality: 80,
    format: 'jpeg'
  },
  // Ingredient images (small circular)
  ingredient: {
    maxWidth: 200,
    maxHeight: 200,
    quality: 75,
    format: 'jpeg'
  },
  // Pricing and menu images
  pricing: {
    maxWidth: 800,
    maxHeight: 1200,
    quality: 80,
    format: 'jpeg'
  },
  // Logo and icons
  logo: {
    maxWidth: 500,
    maxHeight: 500,
    quality: 90,
    format: 'png' // Keep transparency for logos
  }
};

// File size thresholds (in bytes)
const SIZE_THRESHOLDS = {
  hero: 500 * 1024,      // 500KB max for hero images
  service: 200 * 1024,    // 200KB max for service images
  gallery: 150 * 1024,    // 150KB max for gallery images
  team: 100 * 1024,       // 100KB max for team photos
  ingredient: 50 * 1024,  // 50KB max for ingredient images
  pricing: 300 * 1024,    // 300KB max for pricing images
  logo: 100 * 1024        // 100KB max for logos
};

function getImageCategory(filePath) {
  const path = filePath.toLowerCase();
  
  if (path.includes('home.png') || path.includes('hero')) return 'hero';
  if (path.includes('team-members')) return 'team';
  if (path.includes('ingredients')) return 'ingredient';
  if (path.includes('gallery')) return 'gallery';
  if (path.includes('pricing') || path.includes('menu')) return 'pricing';
  if (path.includes('3.png') || path.includes('logo')) return 'logo';
  if (path.includes('service') || path.includes('spa') || path.includes('wax') || path.includes('laser') || path.includes('lash')) return 'service';
  
  return 'service'; // Default category
}

async function getImageStats(filePath) {
  try {
    const stats = await fs.stat(filePath);
    const metadata = await sharp(filePath).metadata();
    
    return {
      size: stats.size,
      width: metadata.width,
      height: metadata.height,
      format: metadata.format
    };
  } catch (error) {
    console.error(`Error getting stats for ${filePath}:`, error.message);
    return null;
  }
}

async function optimizeImage(inputPath, outputPath, category) {
  try {
    const settings = OPTIMIZATION_SETTINGS[category];
    const sizeThreshold = SIZE_THRESHOLDS[category];
    
    // Get original stats
    const originalStats = await getImageStats(inputPath);
    if (!originalStats) return false;
    
    // Skip if already optimized and under threshold
    if (originalStats.size <= sizeThreshold && 
        originalStats.width <= settings.maxWidth && 
        originalStats.height <= settings.maxHeight) {
      console.log(`✓ ${basename(inputPath)} already optimized`);
      return true;
    }
    
    let pipeline = sharp(inputPath);
    
    // Resize if needed
    if (originalStats.width > settings.maxWidth || originalStats.height > settings.maxHeight) {
      pipeline = pipeline.resize(settings.maxWidth, settings.maxHeight, {
        fit: 'inside',
        withoutEnlargement: true
      });
    }
    
    // Apply format-specific optimizations
    if (settings.format === 'jpeg') {
      pipeline = pipeline.jpeg({
        quality: settings.quality,
        progressive: true,
        mozjpeg: true
      });
    } else if (settings.format === 'png') {
      pipeline = pipeline.png({
        quality: settings.quality,
        compressionLevel: 9,
        progressive: true
      });
    } else if (settings.format === 'webp') {
      pipeline = pipeline.webp({
        quality: settings.quality,
        effort: 6
      });
    }
    
    // Save optimized image
    await pipeline.toFile(outputPath);
    
    // Get new stats
    const newStats = await getImageStats(outputPath);
    if (!newStats) return false;
    
    const sizeSaving = ((originalStats.size - newStats.size) / originalStats.size * 100).toFixed(1);
    
    console.log(`✓ ${basename(inputPath)}: ${originalStats.width}x${originalStats.height} → ${newStats.width}x${newStats.height}, ${(originalStats.size/1024).toFixed(1)}KB → ${(newStats.size/1024).toFixed(1)}KB (${sizeSaving}% saved)`);
    
    return true;
  } catch (error) {
    console.error(`✗ Failed to optimize ${basename(inputPath)}:`, error.message);
    return false;
  }
}

async function createBackup(sourcePath) {
  const backupDir = join(projectRoot, 'src/assets-backup');
  await fs.mkdir(backupDir, { recursive: true });
  
  const relativePath = sourcePath.replace(join(projectRoot, 'src/assets/'), '');
  const backupPath = join(backupDir, relativePath);
  
  // Create backup directory structure
  await fs.mkdir(dirname(backupPath), { recursive: true });
  
  try {
    await fs.copyFile(sourcePath, backupPath);
    return true;
  } catch (error) {
    console.error(`Failed to backup ${sourcePath}:`, error.message);
    return false;
  }
}

async function optimizeAllImages() {
  console.log('🖼️  Starting image optimization...\n');
  
  // Find all images
  const imagePattern = join(projectRoot, 'src/assets/**/*.{jpg,jpeg,png,webp}');
  const imagePaths = await glob(imagePattern);
  
  console.log(`Found ${imagePaths.length} images to process\n`);
  
  let optimized = 0;
  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;
  
  for (const imagePath of imagePaths) {
    const category = getImageCategory(imagePath);
    
    // Create backup first
    const backupSuccess = await createBackup(imagePath);
    if (!backupSuccess) {
      console.log(`⚠️  Skipping ${basename(imagePath)} - backup failed`);
      continue;
    }
    
    // Get original size for statistics
    const originalStats = await getImageStats(imagePath);
    if (originalStats) {
      totalOriginalSize += originalStats.size;
    }
    
    // Optimize in place
    const tempPath = imagePath + '.optimized';
    const success = await optimizeImage(imagePath, tempPath, category);
    
    if (success) {
      // Replace original with optimized
      await fs.rename(tempPath, imagePath);
      optimized++;
      
      // Update total optimized size
      const newStats = await getImageStats(imagePath);
      if (newStats) {
        totalOptimizedSize += newStats.size;
      }
    } else {
      // Clean up temp file if optimization failed
      try {
        await fs.unlink(tempPath);
      } catch (e) {
        // Ignore cleanup errors
      }
    }
  }
  
  const totalSaving = totalOriginalSize > 0 ? 
    ((totalOriginalSize - totalOptimizedSize) / totalOriginalSize * 100).toFixed(1) : 0;
  
  console.log(`\n🎉 Optimization complete!`);
  console.log(`📊 Results:`);
  console.log(`   • ${optimized}/${imagePaths.length} images optimized`);
  console.log(`   • Total size: ${(totalOriginalSize/1024/1024).toFixed(1)}MB → ${(totalOptimizedSize/1024/1024).toFixed(1)}MB`);
  console.log(`   • Space saved: ${totalSaving}%`);
  console.log(`   • Backups saved in: src/assets-backup/`);
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  optimizeAllImages().catch(console.error);
}

export { optimizeAllImages, optimizeImage, getImageCategory };