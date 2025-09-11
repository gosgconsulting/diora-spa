// Client-side image optimization utilities
// For runtime image processing and optimization

/**
 * Resizes an image to fit within specified dimensions while maintaining aspect ratio
 */
export function resizeImage(
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
  image: HTMLImageElement,
  maxWidth: number,
  maxHeight: number
): { width: number; height: number; wasResized: boolean } {
  let width = image.naturalWidth;
  let height = image.naturalHeight;
  let wasResized = false;

  // Calculate new dimensions if resizing is needed
  if (width > maxWidth || height > maxHeight) {
    const aspectRatio = width / height;
    
    if (width > height) {
      width = Math.min(width, maxWidth);
      height = Math.round(width / aspectRatio);
      
      if (height > maxHeight) {
        height = maxHeight;
        width = Math.round(height * aspectRatio);
      }
    } else {
      height = Math.min(height, maxHeight);
      width = Math.round(height * aspectRatio);
      
      if (width > maxWidth) {
        width = maxWidth;
        height = Math.round(width / aspectRatio);
      }
    }
    
    wasResized = true;
  }

  canvas.width = width;
  canvas.height = height;
  ctx.drawImage(image, 0, 0, width, height);
  
  return { width, height, wasResized };
}

/**
 * Compresses an image to a target file size
 */
export function compressImage(
  canvas: HTMLCanvasElement,
  targetSizeKB: number,
  format: 'image/jpeg' | 'image/png' | 'image/webp' = 'image/jpeg'
): Promise<Blob | null> {
  return new Promise((resolve) => {
    let quality = 0.9;
    const minQuality = 0.1;
    const step = 0.1;
    
    const tryCompress = () => {
      canvas.toBlob(
        (blob) => {
          if (!blob) {
            resolve(null);
            return;
          }
          
          const sizeKB = blob.size / 1024;
          
          if (sizeKB <= targetSizeKB || quality <= minQuality) {
            resolve(blob);
          } else {
            quality = Math.max(quality - step, minQuality);
            tryCompress();
          }
        },
        format,
        quality
      );
    };
    
    tryCompress();
  });
}

/**
 * Optimizes an image file for web use
 */
export async function optimizeImageFile(
  file: File,
  options: {
    maxWidth?: number;
    maxHeight?: number;
    targetSizeKB?: number;
    format?: 'image/jpeg' | 'image/png' | 'image/webp';
  } = {}
): Promise<Blob | null> {
  const {
    maxWidth = 1920,
    maxHeight = 1080,
    targetSizeKB = 500,
    format = 'image/jpeg'
  } = options;

  return new Promise((resolve, reject) => {
    const img = new Image();
    
    img.onload = async () => {
      try {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        if (!ctx) {
          reject(new Error('Could not get canvas context'));
          return;
        }
        
        // Resize image
        const { wasResized } = resizeImage(canvas, ctx, img, maxWidth, maxHeight);
        
        // Compress to target size
        const optimizedBlob = await compressImage(canvas, targetSizeKB, format);
        
        if (optimizedBlob) {
          console.log(`Image optimized: ${file.size / 1024}KB → ${optimizedBlob.size / 1024}KB${wasResized ? ' (resized)' : ''}`);
        }
        
        resolve(optimizedBlob);
        
        // Clean up
        URL.revokeObjectURL(img.src);
        canvas.remove();
      } catch (error) {
        reject(error);
      }
    };
    
    img.onerror = () => {
      reject(new Error('Failed to load image'));
    };
    
    img.src = URL.createObjectURL(file);
  });
}

/**
 * Creates a responsive image component data
 */
export function createResponsiveImageData(
  originalSrc: string,
  alt: string,
  sizes?: {
    mobile?: { width: number; height: number };
    tablet?: { width: number; height: number };
    desktop?: { width: number; height: number };
  }
) {
  return {
    src: originalSrc,
    alt,
    loading: 'lazy' as const,
    decoding: 'async' as const,
    sizes: sizes || {
      mobile: { width: 400, height: 300 },
      tablet: { width: 800, height: 600 },
      desktop: { width: 1200, height: 900 }
    }
  };
}

/**
 * Preloads critical images
 */
export function preloadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

/**
 * Lazy loads images with intersection observer
 */
export function setupLazyLoading() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach((img) => {
      imageObserver.observe(img);
    });
  }
}

// Image format detection and conversion utilities
export const imageUtils = {
  /**
   * Checks if browser supports WebP
   */
  supportsWebP(): Promise<boolean> {
    return new Promise((resolve) => {
      const webP = new Image();
      webP.onload = webP.onerror = () => {
        resolve(webP.height === 2);
      };
      webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    });
  },

  /**
   * Checks if browser supports AVIF
   */
  supportsAVIF(): Promise<boolean> {
    return new Promise((resolve) => {
      const avif = new Image();
      avif.onload = avif.onerror = () => {
        resolve(avif.height === 2);
      };
      avif.src = 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgABogQEAwgMg8f8D///8WfhwB8+ErK42A=';
    });
  },

  /**
   * Gets the best supported image format
   */
  async getBestFormat(): Promise<'webp' | 'avif' | 'jpeg'> {
    if (await this.supportsAVIF()) return 'avif';
    if (await this.supportsWebP()) return 'webp';
    return 'jpeg';
  }
};