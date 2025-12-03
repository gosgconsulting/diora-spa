# HeroSection Component Documentation

## Overview
The `HeroSection` component is a flexible, CMS-driven hero banner that supports carousel functionality with multiple slides. It's designed to work with the CMS schema structure for maximum flexibility.

## Location
`/src/components/sections/HeroSection.tsx`

## Features
- ✅ Multiple slide support with carousel
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Optional welcome text and logo
- ✅ CTA button support
- ✅ Automatic navigation controls (when multiple slides exist)
- ✅ Lazy loading for images
- ✅ TypeScript support with proper interfaces

## Props

```typescript
interface HeroSectionProps {
  slides?: Slide[];           // Array of slide objects
  button?: HeroButton;        // CTA button configuration
  logo?: string;              // Logo image URL
  logoAlt?: string;          // Alt text for logo
  welcomeText?: string;      // Welcome text (e.g., "Welcome to")
  minHeight?: string;        // CSS height class (default: "h-[900px]")
  backgroundColor?: string;  // Background color for fallback (default: "#FAF8F4")
}

interface Slide {
  src: string;               // Image URL
  alt?: string;             // Alt text for image
  type: "image";            // Type identifier
  settings?: {
    layout?: "full";        // Layout type
  };
}

interface HeroButton {
  content: string;          // Button text (e.g., "Discover Collection")
  link: string;            // Navigation link (e.g., "/category/nouveautes")
  type: "button";          // Type identifier
}
```

## CMS Schema Integration

The component is designed to work with CMS schema structure. Here's an example from `/schemas/header-cms-schema.json`:

```json
{
  "key": "HeroCarouselSection",
  "name": "Hero",
  "type": "HeroSection",
  "items": [
    {
      "key": "slides",
      "type": "array",
      "items": [
        {
          "alt": "Hero slide 1",
          "key": "slide1",
          "src": "https://cms.sparti.ai/uploads/file-1762771499925-353147918.jpg",
          "type": "image",
          "settings": {
            "layout": "full"
          }
        },
        {
          "alt": "Hero slide 2",
          "key": "slide2",
          "src": "https://cms.sparti.ai/uploads/file-1762771511005-717730757.jpg",
          "type": "image",
          "settings": {
            "layout": "full"
          }
        }
      ]
    },
    {
      "key": "button",
      "link": "/category/nouveautes",
      "type": "button",
      "content": "Discover the collection"
    }
  ]
}
```

## Usage Examples

### Basic Usage (Static)
```tsx
import HeroSection from '@/components/sections/HeroSection';
import logo from '@/assets/logo.png';

function App() {
  return (
    <HeroSection
      logo={logo}
      welcomeText="Welcome to"
      logoAlt="Diora Spa"
    />
  );
}
```

### With Single Image
```tsx
<HeroSection
  slides={[
    {
      src: 'https://example.com/hero-image.jpg',
      alt: 'Hero Image',
      type: 'image',
      settings: { layout: 'full' }
    }
  ]}
  logo={logo}
  welcomeText="Welcome to"
  button={{
    content: 'Explore More',
    link: '/services',
    type: 'button'
  }}
/>
```

### With Multiple Slides (Carousel)
```tsx
<HeroSection
  slides={[
    {
      src: 'https://example.com/slide1.jpg',
      alt: 'Slide 1',
      type: 'image',
      settings: { layout: 'full' }
    },
    {
      src: 'https://example.com/slide2.jpg',
      alt: 'Slide 2',
      type: 'image',
      settings: { layout: 'full' }
    },
    {
      src: 'https://example.com/slide3.jpg',
      alt: 'Slide 3',
      type: 'image',
      settings: { layout: 'full' }
    }
  ]}
  logo={logo}
  welcomeText="Welcome to"
  button={{
    content: 'Book Now',
    link: '/booking',
    type: 'button'
  }}
  minHeight="h-[900px]"
/>
```

### From Dynamic Renderer
```tsx
import DynamicPageRenderer from '@/components/DynamicPageRenderer';

// When receiving data from CMS with components array
const components = [
  {
    key: 'HeroCarouselSection',
    name: 'Hero',
    type: 'HeroSection',
    props: {
      slides: [...],
      button: {...},
      logo: '...'
    }
  },
  // ... other sections
];

function Page() {
  return <DynamicPageRenderer components={components} />;
}
```

## Styling

The component uses Tailwind CSS classes and custom colors:

- **Background Color**: `#FAF8F4` (light cream)
- **Text Color**: `white` (overlay text)
- **Button Color**: `#3a2c1b` (dark brown)
- **Button Text**: `#FAF8F4` (light cream)

## Responsive Design

- **Mobile**: Single column, smaller logo and text
- **Tablet**: Medium sizing, optimized spacing
- **Desktop**: Full size with larger logo

### Height Customization
```tsx
// Default: h-[900px]
<HeroSection minHeight="h-[600px]" {...props} />
<HeroSection minHeight="h-[1000px]" {...props} />
```

## Navigation Controls

- **Single Slide**: No navigation buttons shown
- **Multiple Slides**: Previous/Next buttons appear at left and right
- Navigation buttons are disabled when at the beginning/end of carousel
- Carousel loops infinitely (wraps from last to first slide)

## Performance Optimizations

- Images use `loading="lazy"` for deferred loading
- Images use `decoding="async"` for non-blocking decoding
- Carousel uses Embla Carousel internally (efficient DOM manipulation)

## Accessibility

- Navigation buttons have proper `aria-label` attributes
- Images have descriptive `alt` text
- Keyboard navigation supported through carousel library
- Semantic HTML structure

## Integration with Dynamic Page Renderer

The component is registered in `/src/utils/componentRegistry.js` and will be automatically used by `DynamicPageRenderer` when the CMS provides data with `type: "HeroSection"`.

### Data Flow:
```
CMS API → fetchPageContent() → DynamicPageRenderer → HeroSection Component
                                  (maps type to registry)
```

## Related Components

- **DynamicPageRenderer**: Renders multiple sections dynamically
- **Header**: Navigation header (typically above HeroSection)
- **Footer**: Footer section (typically below other sections)

## Future Enhancements

Potential improvements for v2:
- [ ] Video background support
- [ ] Parallax scrolling effect
- [ ] Text animation options
- [ ] Custom slide transition effects
- [ ] SEO metadata support (meta title, description from CMS)
- [ ] Analytics event tracking

## Troubleshooting

### Images not loading
- Check image URLs are correct and accessible
- Verify CORS settings if using external URLs
- Check browser console for specific error messages

### Carousel not working with single slide
- This is expected behavior - carousel only shows navigation with 2+ slides
- For single slides, just the overlay content is displayed

### Styling issues
- Ensure Tailwind CSS is properly configured
- Verify custom fonts (font-coco, font-garet) are imported
- Check that parent container has proper sizing
