import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  onLoad?: () => void;
  onError?: () => void;
}

/**
 * Optimized image component with lazy loading, responsive sizing, and format detection
 */
export function OptimizedImage({
  src,
  alt,
  className,
  width,
  height,
  priority = false,
  sizes,
  quality = 80,
  placeholder = 'empty',
  onLoad,
  onError
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState<string>('');
  const imgRef = useRef<HTMLImageElement>(null);

  // Generate responsive srcSet based on the source image
  const generateSrcSet = (baseSrc: string) => {
    const ext = baseSrc.split('.').pop()?.toLowerCase();
    const baseName = baseSrc.replace(/\.[^/.]+$/, '');
    
    // For now, return the original src since we don't have multiple sizes generated yet
    // In a full implementation, you'd have the build process generate these sizes
    return baseSrc;
  };

  const generateSizes = () => {
    if (sizes) return sizes;
    
    // Default responsive sizes
    return '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw';
  };

  useEffect(() => {
    if (priority) {
      // Load immediately for priority images
      setCurrentSrc(src);
    } else {
      // Set up intersection observer for lazy loading
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setCurrentSrc(src);
              observer.disconnect();
            }
          });
        },
        {
          rootMargin: '50px'
        }
      );

      if (imgRef.current) {
        observer.observe(imgRef.current);
      }

      return () => observer.disconnect();
    }
  }, [src, priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  // Placeholder while loading
  if (!currentSrc && !priority) {
    return (
      <div
        ref={imgRef}
        className={cn(
          'bg-muted animate-pulse',
          className
        )}
        style={{
          width: width ? `${width}px` : '100%',
          height: height ? `${height}px` : '200px'
        }}
        aria-label={`Loading ${alt}`}
      />
    );
  }

  return (
    <div className={cn('relative overflow-hidden', className)}>
      {/* Blur placeholder */}
      {placeholder === 'blur' && !isLoaded && (
        <div
          className="absolute inset-0 bg-muted blur-sm"
          style={{
            backgroundImage: `url(${src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(5px) brightness(0.8)',
            transform: 'scale(1.1)'
          }}
        />
      )}

      {/* Main image */}
      <img
        ref={imgRef}
        src={currentSrc}
        alt={alt}
        width={width}
        height={height}
        srcSet={generateSrcSet(currentSrc)}
        sizes={generateSizes()}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
        className={cn(
          'transition-opacity duration-300',
          {
            'opacity-0': !isLoaded && !hasError,
            'opacity-100': isLoaded || hasError
          },
          className
        )}
        style={{
          objectFit: 'cover',
          objectPosition: 'center'
        }}
      />

      {/* Error fallback */}
      {hasError && (
        <div
          className={cn(
            'absolute inset-0 flex items-center justify-center bg-muted text-muted-foreground text-sm',
            className
          )}
        >
          Failed to load image
        </div>
      )}
    </div>
  );
}

/**
 * Hero image component with specific optimizations for large banner images
 */
export function HeroImage({
  src,
  alt,
  className,
  ...props
}: Omit<OptimizedImageProps, 'priority' | 'sizes'>) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      className={className}
      priority={true}
      sizes="100vw"
      quality={85}
      {...props}
    />
  );
}

/**
 * Gallery image component with lazy loading optimizations
 */
export function GalleryImage({
  src,
  alt,
  className,
  ...props
}: OptimizedImageProps) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      className={className}
      priority={false}
      placeholder="blur"
      quality={75}
      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
      {...props}
    />
  );
}

/**
 * Avatar/team member image component
 */
export function AvatarImage({
  src,
  alt,
  className,
  ...props
}: OptimizedImageProps) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      className={cn('rounded-full', className)}
      quality={80}
      sizes="(max-width: 768px) 25vw, 200px"
      {...props}
    />
  );
}