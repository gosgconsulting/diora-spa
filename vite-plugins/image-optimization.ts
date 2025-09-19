import { Plugin } from 'vite';
import sharp from 'sharp';
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname, extname, basename } from 'path';

interface ImageOptimizationOptions {
  // Image quality settings by type
  quality?: {
    jpeg?: number;
    png?: number;
    webp?: number;
  };
  // Size limits by category
  maxSizes?: {
    hero?: { width: number; height: number };
    service?: { width: number; height: number };
    gallery?: { width: number; height: number };
    team?: { width: number; height: number };
    ingredient?: { width: number; height: number };
    pricing?: { width: number; height: number };
    logo?: { width: number; height: number };
  };
  // Generate WebP variants
  generateWebP?: boolean;
  // Generate AVIF variants (if supported)
  generateAVIF?: boolean;
  // File size limits in bytes
  fileSizeLimits?: {
    hero?: number;
    service?: number;
    gallery?: number;
    team?: number;
    ingredient?: number;
    pricing?: number;
    logo?: number;
  };
}

const defaultOptions: Required<ImageOptimizationOptions> = {
  quality: {
    jpeg: 80,
    png: 90,
    webp: 75
  },
  maxSizes: {
    hero: { width: 1920, height: 1080 },
    service: { width: 800, height: 600 },
    gallery: { width: 600, height: 600 },
    team: { width: 400, height: 400 },
    ingredient: { width: 200, height: 200 },
    pricing: { width: 800, height: 1200 },
    logo: { width: 500, height: 500 }
  },
  generateWebP: true,
  generateAVIF: false, // Enable when more widely supported
  fileSizeLimits: {
    hero: 500 * 1024,      // 500KB
    service: 200 * 1024,   // 200KB
    gallery: 150 * 1024,   // 150KB
    team: 100 * 1024,      // 100KB
    ingredient: 50 * 1024, // 50KB
    pricing: 300 * 1024,   // 300KB
    logo: 100 * 1024       // 100KB
  }
};

function getImageCategory(filePath: string): keyof typeof defaultOptions.maxSizes {
  const path = filePath.toLowerCase();
  
  if (path.includes('home.png') || path.includes('hero')) return 'hero';
  if (path.includes('team-members')) return 'team';
  if (path.includes('ingredients')) return 'ingredient';
  if (path.includes('gallery')) return 'gallery';
  if (path.includes('pricing') || path.includes('menu')) return 'pricing';
  if (path.includes('3.png') || path.includes('logo')) return 'logo';
  if (path.includes('service') || path.includes('spa') || path.includes('wax') || path.includes('laser') || path.includes('lash')) return 'service';
  
  return 'service';
}

export function imageOptimization(options: ImageOptimizationOptions = {}): Plugin {
  const opts = { ...defaultOptions, ...options };
  const processedImages = new Set<string>();

  return {
    name: 'image-optimization',
    buildStart() {
      console.log('🖼️  Image optimization plugin started');
    },
    async load(id) {
      // Only process image files in src/assets
      if (!id.includes('src/assets') || !id.match(/\.(jpe?g|png|webp)$/i)) {
        return null;
      }

      // Avoid processing the same image multiple times
      if (processedImages.has(id)) {
        return null;
      }

      try {
        const category = getImageCategory(id);
        const maxSize = opts.maxSizes[category]!;
        const quality = opts.quality;
        const fileSizeLimit = opts.fileSizeLimits[category]!;

        // Read original image
        const imageBuffer = readFileSync(id);
        const image = sharp(imageBuffer);
        const metadata = await image.metadata();

        console.log(`📐 Processing ${basename(id)} (${category}): ${metadata.width}x${metadata.height}`);

        let needsOptimization = false;
        let pipeline = sharp(imageBuffer);

        // Check if resizing is needed
        if (metadata.width! > maxSize.width || metadata.height! > maxSize.height) {
          pipeline = pipeline.resize(maxSize.width, maxSize.height, {
            fit: 'inside',
            withoutEnlargement: true
          });
          needsOptimization = true;
        }

        // Check if file size optimization is needed
        if (imageBuffer.length > fileSizeLimit) {
          needsOptimization = true;
        }

        if (needsOptimization) {
          const ext = extname(id).toLowerCase();
          const outputDir = dirname(id);
          const baseName = basename(id, ext);

          // Optimize original format
          let optimizedBuffer: Buffer;
          
          if (ext === '.jpg' || ext === '.jpeg') {
            optimizedBuffer = await pipeline
              .jpeg({
                quality: quality.jpeg,
                progressive: true,
                mozjpeg: true
              })
              .toBuffer();
          } else if (ext === '.png') {
            optimizedBuffer = await pipeline
              .png({
                quality: quality.png,
                compressionLevel: 9,
                progressive: true
              })
              .toBuffer();
          } else {
            optimizedBuffer = imageBuffer; // No optimization for other formats
          }

          // Write optimized original
          if (optimizedBuffer.length < imageBuffer.length) {
            writeFileSync(id, optimizedBuffer);
            const saving = ((imageBuffer.length - optimizedBuffer.length) / imageBuffer.length * 100).toFixed(1);
            console.log(`✓ Optimized ${basename(id)}: ${(imageBuffer.length/1024).toFixed(1)}KB → ${(optimizedBuffer.length/1024).toFixed(1)}KB (${saving}% saved)`);
          }

          // Generate WebP variant if enabled
          if (opts.generateWebP && ext !== '.webp') {
            const webpPath = join(outputDir, `${baseName}.webp`);
            try {
              const webpBuffer = await pipeline
                .webp({ quality: quality.webp, effort: 6 })
                .toBuffer();
              
              writeFileSync(webpPath, webpBuffer);
              console.log(`✓ Generated WebP: ${basename(webpPath)} (${(webpBuffer.length/1024).toFixed(1)}KB)`);
            } catch (error) {
              console.warn(`⚠️  Failed to generate WebP for ${basename(id)}`);
            }
          }

          // Generate AVIF variant if enabled
          if (opts.generateAVIF && ext !== '.avif') {
            const avifPath = join(outputDir, `${baseName}.avif`);
            try {
              const avifBuffer = await pipeline
                .avif({ quality: quality.webp, effort: 6 })
                .toBuffer();
              
              writeFileSync(avifPath, avifBuffer);
              console.log(`✓ Generated AVIF: ${basename(avifPath)} (${(avifBuffer.length/1024).toFixed(1)}KB)`);
            } catch (error) {
              console.warn(`⚠️  Failed to generate AVIF for ${basename(id)}`);
            }
          }
        }

        processedImages.add(id);
        return null; // Let Vite handle the actual file loading
      } catch (error) {
        console.error(`❌ Failed to process ${basename(id)}:`, error);
        return null;
      }
    },
    buildEnd() {
      console.log(`🎉 Image optimization complete! Processed ${processedImages.size} images`);
    }
  };
}