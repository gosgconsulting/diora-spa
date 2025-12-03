# HeroSection Component - Testing & Examples

## Quick Test

To quickly test the HeroSection component, you can add it directly to your Homepage or create a test page:

```tsx
import HeroSection from '@/components/sections/HeroSection';
import logo from '@/assets/3.png';
import heroImage from '@/assets/home.png';

export default function TestHero() {
  return (
    <>
      {/* Test 1: Minimal Hero (no slides, just logo) */}
      <HeroSection
        logo={logo}
        welcomeText="Welcome to"
        logoAlt="Diora Spa"
      />

      {/* Test 2: Single Slide with Logo and Button */}
      <HeroSection
        slides={[
          {
            src: heroImage,
            alt: 'Diora Spa Hero',
            type: 'image',
            settings: { layout: 'full' }
          }
        ]}
        logo={logo}
        welcomeText="Welcome to"
        button={{
          content: 'Explore Services',
          link: '/pricing',
          type: 'button'
        }}
      />

      {/* Test 3: Multiple Slides (Carousel) */}
      <HeroSection
        slides={[
          {
            src: 'https://via.placeholder.com/1920x900/3a2c1b/FAF8F4?text=Slide+1',
            alt: 'Slide 1',
            type: 'image',
            settings: { layout: 'full' }
          },
          {
            src: 'https://via.placeholder.com/1920x900/4a3c2b/FAF8F4?text=Slide+2',
            alt: 'Slide 2',
            type: 'image',
            settings: { layout: 'full' }
          },
          {
            src: 'https://via.placeholder.com/1920x900/2a1c0b/FAF8F4?text=Slide+3',
            alt: 'Slide 3',
            type: 'image',
            settings: { layout: 'full' }
          }
        ]}
        logo={logo}
        welcomeText="Welcome to Diora Spa"
        button={{
          content: 'Book Now',
          link: '/booking',
          type: 'button'
        }}
      />

      {/* Test 4: Custom Height */}
      <HeroSection
        slides={[
          {
            src: heroImage,
            alt: 'Short Hero',
            type: 'image',
            settings: { layout: 'full' }
          }
        ]}
        minHeight="h-[500px]"
        welcomeText="Quick Introduction"
      />
    </>
  );
}
```

## Integration with DynamicPageRenderer

To test with the DynamicPageRenderer, prepare data matching the CMS schema:

```tsx
import DynamicPageRenderer from '@/components/DynamicPageRenderer';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TestDynamicPage() {
  const pageComponents = [
    {
      key: 'hero-1',
      type: 'HeroSection',
      name: 'Hero',
      props: {
        slides: [
          {
            src: 'https://via.placeholder.com/1920x900/3a2c1b/white?text=Welcome',
            alt: 'Welcome Slide',
            type: 'image',
            settings: { layout: 'full' }
          },
          {
            src: 'https://via.placeholder.com/1920x900/4a3c2b/white?text=Our+Services',
            alt: 'Services Slide',
            type: 'image',
            settings: { layout: 'full' }
          }
        ],
        logo: require('@/assets/3.png'),
        welcomeText: 'Welcome to',
        button: {
          content: 'Discover More',
          link: '/services',
          type: 'button'
        }
      }
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <DynamicPageRenderer components={pageComponents} />
      <Footer />
    </div>
  );
}
```

## CMS Schema Format Examples

### Example 1: Basic Hero with Single Image
```json
{
  "key": "SimpleHero",
  "name": "Hero",
  "type": "HeroSection",
  "items": [
    {
      "key": "slides",
      "type": "array",
      "items": [
        {
          "alt": "Main Hero Image",
          "key": "slide1",
          "src": "https://cms.example.com/uploads/hero-main.jpg",
          "type": "image",
          "settings": {
            "layout": "full"
          }
        }
      ]
    }
  ]
}
```

### Example 2: Carousel Hero with Button
```json
{
  "key": "CarouselHero",
  "name": "Hero Carousel",
  "type": "HeroSection",
  "items": [
    {
      "key": "slides",
      "type": "array",
      "items": [
        {
          "alt": "Spring Collection",
          "key": "slide1",
          "src": "https://cms.example.com/uploads/spring-2025.jpg",
          "type": "image",
          "settings": {
            "layout": "full"
          }
        },
        {
          "alt": "Summer Essentials",
          "key": "slide2",
          "src": "https://cms.example.com/uploads/summer-2025.jpg",
          "type": "image",
          "settings": {
            "layout": "full"
          }
        },
        {
          "alt": "Fall Collection",
          "key": "slide3",
          "src": "https://cms.example.com/uploads/fall-2025.jpg",
          "type": "image",
          "settings": {
            "layout": "full"
          }
        }
      ]
    },
    {
      "key": "button",
      "link": "/shop",
      "type": "button",
      "content": "Shop Now"
    }
  ]
}
```

## Testing Checklist

### Visual Testing
- [ ] Logo displays correctly
- [ ] Welcome text is visible and properly styled
- [ ] Hero image(s) load without CORS errors
- [ ] Button appears in correct position (bottom center)
- [ ] Overlay text is readable over images
- [ ] Navigation arrows appear only with 2+ slides
- [ ] Navigation arrows are disabled at start/end (loop mode active)

### Responsive Testing
- [ ] Mobile (320px): Logo and text stack properly, button readable
- [ ] Tablet (768px): Medium-sized logo, proper spacing
- [ ] Desktop (1024px+): Full-sized hero, all elements visible
- [ ] Text size adjusts appropriately for screen size

### Carousel Testing (Multiple Slides)
- [ ] Next button advances to next slide
- [ ] Previous button goes to previous slide
- [ ] Last slide loops to first slide
- [ ] First slide loops to last slide
- [ ] All slides load correctly
- [ ] Image transitions are smooth

### Button Testing
- [ ] Button is clickable
- [ ] Button navigates to correct link
- [ ] Button styling matches design system
- [ ] Button is visible on all slide backgrounds

### Accessibility Testing
- [ ] Navigation buttons have aria-labels
- [ ] Images have descriptive alt text
- [ ] Logo has meaningful alt text
- [ ] Tab navigation works properly
- [ ] Color contrast is sufficient

### Performance Testing
- [ ] Images load lazily (not blocking page load)
- [ ] No console errors or warnings
- [ ] Smooth carousel transitions (no jank)
- [ ] Page loads quickly with multiple slides

### Error Handling
- [ ] Missing images show fallback/placeholder
- [ ] Empty slides array renders minimal hero
- [ ] Missing button doesn't break layout
- [ ] Missing logo doesn't break layout

## Mock Data for Testing

Use these placeholder images for testing without needing external URLs:

```tsx
const mockSlides = [
  {
    src: 'https://via.placeholder.com/1920x900/3a2c1b/FAF8F4?text=Slide+1',
    alt: 'Slide 1',
    type: 'image',
    settings: { layout: 'full' }
  },
  {
    src: 'https://via.placeholder.com/1920x900/4a3c2b/FAF8F4?text=Slide+2',
    alt: 'Slide 2',
    type: 'image',
    settings: { layout: 'full' }
  },
  {
    src: 'https://via.placeholder.com/1920x900/2a1c0b/FAF8F4?text=Slide+3',
    alt: 'Slide 3',
    type: 'image',
    settings: { layout: 'full' }
  }
];

const mockButton = {
  content: 'Discover More',
  link: '/services',
  type: 'button'
};
```

## Browser DevTools Tips

### Testing Responsive Behavior
```javascript
// In browser console to test responsive
window.addEventListener('resize', () => {
  console.log(`Window size: ${window.innerWidth}x${window.innerHeight}`);
});
```

### Checking Image Loading
```javascript
// Check all images in hero section
const images = document.querySelectorAll('[role="region"] img');
images.forEach(img => {
  console.log(`Image: ${img.alt || 'no alt'}`);
  console.log(`Status: ${img.complete ? 'loaded' : 'loading'}`);
  console.log(`Size: ${img.width}x${img.height}`);
});
```

### Carousel State
```javascript
// In browser console
const carousel = document.querySelector('[role="region"]');
console.log('Carousel attributes:', carousel?.attributes);
```

## Common Issues & Solutions

### Issue: Images not loading
**Solution**: Check CORS headers on image server
```tsx
// Ensure image URLs are CORS-enabled
src: 'https://cors-enabled-server.com/image.jpg'
```

### Issue: Carousel not advancing
**Solution**: Verify slides array has multiple items
```tsx
// Good - 2+ slides
slides={[{...}, {...}]}

// Won't show arrows - only 1 slide
slides={[{...}]}
```

### Issue: Button not visible
**Solution**: Ensure image has sufficient contrast
```tsx
// Add darker overlay if image is light
// Component already includes bg-black/20 overlay
```

### Issue: Text not readable
**Solution**: Check background image brightness
```tsx
// Light image? Darker overlay already included
// For very light images, consider custom background
backgroundColor="#3a2c1b"
```

## Performance Benchmarks

Expected metrics:
- **First Paint**: < 500ms
- **Largest Contentful Paint (LCP)**: < 2.5s (with lazy loading)
- **Interactive**: < 3.5s
- **Cumulative Layout Shift (CLS)**: < 0.1
- **Time to Interactive (TTI)**: < 4s

## Next Testing Phase

Once HeroSection is verified working:
1. Create remaining section components
2. Build full page with multiple sections
3. Test CMS data integration
4. Implement caching strategies
5. Performance optimization
