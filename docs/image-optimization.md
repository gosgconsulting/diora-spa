# Image Optimization Guide

This project includes comprehensive image optimization to ensure fast loading times and better user experience.

## 🚀 Features

### Automatic Build-Time Optimization
- **Smart Resizing**: Images are automatically resized to optimal dimensions based on their usage
- **Format Optimization**: JPEG quality optimization and PNG compression
- **WebP Generation**: Modern WebP format variants are generated automatically
- **File Size Limits**: Images are compressed to meet web-friendly file size targets

### Runtime Optimization
- **Lazy Loading**: Images load only when they're about to enter the viewport
- **Responsive Images**: Automatic `srcset` generation for different screen sizes
- **Format Detection**: Serves the best supported format (WebP, AVIF, or fallback)
- **Progressive Loading**: Blur placeholder during image loading

## 📁 Image Categories & Limits

The system automatically categorizes images and applies appropriate optimizations:

| Category | Max Dimensions | File Size Limit | Usage |
|----------|---------------|-----------------|-------|
| **Hero** | 1920×1080 | 500KB | Large banner images (home.png) |
| **Service** | 800×600 | 200KB | Service showcase images |
| **Gallery** | 600×600 | 150KB | Portfolio/gallery images |
| **Team** | 400×400 | 100KB | Team member photos |
| **Ingredient** | 200×200 | 50KB | Small ingredient icons |
| **Pricing** | 800×1200 | 300KB | Pricing/menu images |
| **Logo** | 500×500 | 100KB | Logo and brand images |

## 🛠️ How to Use

### 1. Manual Optimization Script
Run the optimization script on all existing images:

```bash
# Install dependencies first
npm install

# Run optimization
node scripts/optimize-images.js
```

This will:
- Create backups in `src/assets-backup/`
- Optimize images in place
- Show detailed statistics

### 2. Automatic Build Optimization
Images are automatically optimized during the build process:

```bash
# Build with optimization
npm run build
```

The Vite plugin will:
- Process images during build
- Generate WebP variants
- Apply compression
- Show optimization results

### 3. Optimized Image Components

Use the provided React components for best performance:

```tsx
import { OptimizedImage, HeroImage, GalleryImage, AvatarImage } from '@/components/OptimizedImage';

// Hero images (priority loading)
<HeroImage
  src="/assets/hero.jpg"
  alt="Hero banner"
  className="w-full h-96 object-cover"
/>

// Gallery images (lazy loading with blur placeholder)
<GalleryImage
  src="/assets/gallery/image.jpg"
  alt="Gallery image"
  className="w-full h-64 object-cover"
/>

// Team member photos (rounded, optimized sizing)
<AvatarImage
  src="/assets/team/member.jpg"
  alt="Team member"
  className="w-32 h-32"
/>

// General optimized images
<OptimizedImage
  src="/assets/service.jpg"
  alt="Service image"
  className="w-full h-48 object-cover"
  priority={false} // Set to true for above-the-fold images
  placeholder="blur" // Shows blur effect while loading
/>
```

### 4. Runtime Image Optimization

For user-uploaded images or dynamic optimization:

```tsx
import { optimizeImageFile } from '@/utils/imageOptimization';

// Optimize a file upload
const handleFileUpload = async (file: File) => {
  const optimizedBlob = await optimizeImageFile(file, {
    maxWidth: 800,
    maxHeight: 600,
    targetSizeKB: 200,
    format: 'image/jpeg'
  });
  
  if (optimizedBlob) {
    // Use optimized image
    const optimizedFile = new File([optimizedBlob], file.name, {
      type: optimizedBlob.type
    });
  }
};
```

## 📊 Best Practices

### 1. Image Naming Convention
- **Hero images**: Include "hero" or "home" in filename
- **Gallery images**: Place in `gallery/` folder
- **Team photos**: Place in `team-members/` folder
- **Service images**: Include "service", "spa", "wax", "laser", or "lash"
- **Ingredients**: Place in `ingredients/` folder

### 2. Source Image Guidelines
- **Resolution**: Start with high-quality source images (2x target size)
- **Format**: Use PNG for images with transparency, JPEG for photos
- **Color Space**: Use sRGB color space for web compatibility
- **Dimensions**: Maintain proper aspect ratios for your design

### 3. Performance Tips
- Use `priority={true}` for above-the-fold images
- Use `placeholder="blur"` for better perceived performance
- Implement proper `alt` text for accessibility
- Use responsive `sizes` attribute for different breakpoints

### 4. File Organization
```
src/assets/
├── gallery/           # Gallery images (auto-optimized to 600×600, 150KB)
├── team-members/      # Team photos (auto-optimized to 400×400, 100KB)
├── ingredients/       # Ingredient icons (auto-optimized to 200×200, 50KB)
├── eye-lash-pricing/ # Pricing images (auto-optimized to 800×1200, 300KB)
├── head-spa-pricing/ # Service pricing (auto-optimized to 800×1200, 300KB)
└── home.png          # Hero image (auto-optimized to 1920×1080, 500KB)
```

## 🔧 Configuration

### Vite Plugin Options
Customize optimization in `vite.config.ts`:

```tsx
imageOptimization({
  quality: {
    jpeg: 80,    // JPEG quality (0-100)
    png: 90,     // PNG quality (0-100)
    webp: 75     // WebP quality (0-100)
  },
  generateWebP: true,  // Generate WebP variants
  generateAVIF: false, // Generate AVIF variants (experimental)
  maxSizes: {
    hero: { width: 1920, height: 1080 },
    service: { width: 800, height: 600 },
    // ... customize sizes
  }
})
```

### Script Options
Customize the standalone script in `scripts/optimize-images.js`:

```javascript
// Modify OPTIMIZATION_SETTINGS and SIZE_THRESHOLDS
const OPTIMIZATION_SETTINGS = {
  hero: {
    maxWidth: 1920,
    maxHeight: 1080,
    quality: 85,
    format: 'jpeg'
  },
  // ... other categories
};
```

## 📈 Monitoring & Analytics

### Build Output
The optimization process shows detailed statistics:
```
🖼️  Starting image optimization...
✓ home.png: 1920x1080 → 1920x1080, 2048.0KB → 423.5KB (79.3% saved)
✓ service1.jpg: 1200x800 → 800x533, 856.2KB → 167.8KB (80.4% saved)
🎉 Optimization complete! 47/50 images optimized
```

### Runtime Monitoring
Use browser DevTools to monitor:
- **Network tab**: Check image file sizes and load times
- **Lighthouse**: Audit image optimization scores
- **Performance tab**: Monitor Largest Contentful Paint (LCP)

## 🚨 Troubleshooting

### Common Issues

1. **Images not optimizing**
   - Check file paths match the category patterns
   - Ensure images are in `src/assets/` directory
   - Verify file extensions are supported (.jpg, .jpeg, .png, .webp)

2. **Build errors**
   - Make sure Sharp is installed: `npm install sharp`
   - Check file permissions for write access
   - Verify image files aren't corrupted

3. **WebP not generating**
   - Sharp version may not support WebP
   - Update Sharp: `npm install sharp@latest`
   - Check browser support for WebP format

4. **Large bundle sizes**
   - Run the optimization script before building
   - Check if large images are being imported as modules
   - Use dynamic imports for non-critical images

### Performance Checklist
- [ ] Hero images under 500KB
- [ ] Gallery images under 150KB  
- [ ] Team photos under 100KB
- [ ] All images have proper `alt` attributes
- [ ] Critical images use `priority={true}`
- [ ] Non-critical images use lazy loading
- [ ] WebP variants are generated
- [ ] Responsive `sizes` attributes are set

## 🎯 Results

After optimization, you should see:
- **70-90% file size reduction** for most images
- **Faster page load times**, especially on mobile
- **Better Lighthouse scores** for performance
- **Improved Core Web Vitals** (LCP, CLS)
- **Reduced bandwidth usage** for users

The optimization system ensures your spa website loads quickly while maintaining visual quality, providing an excellent user experience across all devices.
