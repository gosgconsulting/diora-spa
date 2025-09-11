const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, '../src/assets');
const maxSizeKB = 500; // Target max size: 500KB
const quality = 80; // JPEG quality

async function optimizeImage(filePath) {
  try {
    const stats = fs.statSync(filePath);
    const sizeMB = stats.size / (1024 * 1024);
    
    if (sizeMB > 0.5) { // Only optimize if > 500KB
      console.log(`Optimizing ${filePath} (${sizeMB.toFixed(2)}MB)`);
      
      const ext = path.extname(filePath).toLowerCase();
      const outputPath = filePath.replace(ext, '_optimized' + ext);
      
      if (ext === '.jpg' || ext === '.jpeg') {
        await sharp(filePath)
          .resize(1920, 1080, { 
            fit: 'inside', 
            withoutEnlargement: true 
          })
          .jpeg({ quality })
          .toFile(outputPath);
      } else if (ext === '.png') {
        await sharp(filePath)
          .resize(1920, 1080, { 
            fit: 'inside', 
            withoutEnlargement: true 
          })
          .png({ quality })
          .toFile(outputPath);
      }
      
      const newStats = fs.statSync(outputPath);
      const newSizeMB = newStats.size / (1024 * 1024);
      
      console.log(`  Reduced from ${sizeMB.toFixed(2)}MB to ${newSizeMB.toFixed(2)}MB`);
      
      // Replace original if smaller
      if (newStats.size < stats.size) {
        fs.renameSync(outputPath, filePath);
        console.log(`  ✓ Replaced original`);
      } else {
        fs.unlinkSync(outputPath);
        console.log(`  ✗ Kept original (optimization didn't reduce size)`);
      }
    }
  } catch (error) {
    console.error(`Error optimizing ${filePath}:`, error.message);
  }
}

async function processDirectory(dir) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      await processDirectory(fullPath);
    } else if (/\.(jpg|jpeg|png)$/i.test(item)) {
      await optimizeImage(fullPath);
    }
  }
}

console.log('Starting image optimization...');
processDirectory(assetsDir)
  .then(() => console.log('Image optimization complete!'))
  .catch(console.error);
