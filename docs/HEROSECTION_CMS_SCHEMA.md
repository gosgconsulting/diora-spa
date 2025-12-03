# HeroSection - Integration with CMS Schema

This guide shows how the HeroSection component maps to CMS schema data and how to use it in your CMS.

## Schema Structure

The HeroSection component accepts data structured like this:

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
          "alt": "description",
          "key": "slide1",
          "src": "https://url.to/image1.jpg",
          "type": "image",
          "settings": {
            "layout": "full"
          }
        }
      ]
    },
    {
      "key": "button",
      "link": "/path/to/page",
      "type": "button",
      "content": "Button Text"
    }
  ]
}
```

## Props Mapping

The CMS data maps to component props like this:

```
CMS Data                    →  Component Prop
─────────────────────────────────────────────
items[0] (key: "slides")    →  slides array
  ├─ src                    →  slides[].src
  ├─ alt                    →  slides[].alt
  ├─ type                   →  slides[].type
  └─ settings               →  slides[].settings

items[1] (key: "button")    →  button object
  ├─ content                →  button.content
  ├─ link                   →  button.link
  └─ type                   →  button.type

props (if provided)         →  Other props
  ├─ logo                   →  logo
  ├─ logoAlt                →  logoAlt
  ├─ welcomeText            →  welcomeText
  ├─ minHeight              →  minHeight
  └─ backgroundColor        →  backgroundColor
```

## Complete CMS Schema Examples

### Example 1: Single Slide Hero with Logo

```json
{
  "key": "SimpleHero",
  "name": "Hero",
  "type": "HeroSection",
  "props": {
    "logo": "https://cms.example.com/logo.png",
    "logoAlt": "Diora Spa Logo",
    "welcomeText": "Welcome to"
  },
  "items": [
    {
      "key": "slides",
      "type": "array",
      "items": [
        {
          "alt": "Diora Spa Hero Image",
          "key": "slide1",
          "src": "https://cms.example.com/hero-main.jpg",
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
  "props": {
    "logo": "https://cms.example.com/diora-logo.png",
    "logoAlt": "Diora Spa",
    "welcomeText": "Welcome to",
    "minHeight": "h-[900px]",
    "backgroundColor": "#FAF8F4"
  },
  "items": [
    {
      "key": "slides",
      "type": "array",
      "items": [
        {
          "alt": "Slide 1: Spring Collection",
          "key": "slide1",
          "src": "https://cms.example.com/spring-hero.jpg",
          "type": "image",
          "settings": {
            "layout": "full"
          }
        },
        {
          "alt": "Slide 2: Summer Special",
          "key": "slide2",
          "src": "https://cms.example.com/summer-hero.jpg",
          "type": "image",
          "settings": {
            "layout": "full"
          }
        },
        {
          "alt": "Slide 3: Fall Collection",
          "key": "slide3",
          "src": "https://cms.example.com/fall-hero.jpg",
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

### Example 3: Minimal Hero (No Image)

```json
{
  "key": "MinimalHero",
  "name": "Welcome Banner",
  "type": "HeroSection",
  "props": {
    "logo": "https://cms.example.com/logo.png",
    "welcomeText": "Welcome to Diora Spa",
    "backgroundColor": "#3a2c1b"
  }
}
```

### Example 4: Hero with Custom Sizing

```json
{
  "key": "CustomHero",
  "name": "Custom Hero",
  "type": "HeroSection",
  "props": {
    "logo": "https://cms.example.com/logo.png",
    "minHeight": "h-[600px]",
    "backgroundColor": "#FAF8F4"
  },
  "items": [
    {
      "key": "slides",
      "type": "array",
      "items": [
        {
          "alt": "Featured Service",
          "key": "slide1",
          "src": "https://cms.example.com/service-hero.jpg",
          "type": "image",
          "settings": {
            "layout": "full"
          }
        }
      ]
    },
    {
      "key": "button",
      "link": "/services/head-spa",
      "type": "button",
      "content": "Book Head Spa"
    }
  ]
}
```

## Adding to header-cms-schema.json

To add HeroSection to your schema file, add this entry to the array in `/schemas/header-cms-schema.json`:

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
          "alt": "",
          "key": "slide1",
          "src": "https://cms.sparti.ai/uploads/file-example.jpg",
          "type": "image",
          "settings": {
            "layout": "full"
          }
        },
        {
          "alt": "",
          "key": "slide2",
          "src": "https://cms.sparti.ai/uploads/file-example2.jpg",
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

## CMS Admin Configuration

When building your CMS admin interface, the HeroSection should accept:

### Input Fields

**Basic Settings**:
- [ ] Type selector (auto-set to "HeroSection")
- [ ] Component name/title text field
- [ ] Component key text field

**Logo Settings**:
- [ ] Logo image upload
- [ ] Logo alt text input
- [ ] Logo preview

**Welcome Text**:
- [ ] Welcome text input field
- [ ] Text preview

**Slides**:
- [ ] Add slide button
- [ ] For each slide:
  - [ ] Image upload
  - [ ] Alt text input
  - [ ] Layout selector (currently: "full")
  - [ ] Remove slide button
  - [ ] Reorder slides (drag/sort)

**Call-to-Action Button**:
- [ ] Button text input
- [ ] Link input (with page selector)
- [ ] Button preview

**Advanced Settings**:
- [ ] Height selector (h-[600px], h-[900px], h-[1200px], custom)
- [ ] Background color picker
- [ ] Enable/disable button toggle

### Validation Rules

```javascript
// Validation schema for CMS
{
  type: "HeroSection",
  props: {
    logo: {
      type: "url",
      required: false
    },
    logoAlt: {
      type: "string",
      required: false
    },
    welcomeText: {
      type: "string",
      required: false
    },
    minHeight: {
      type: "string",
      enum: ["h-[500px]", "h-[600px]", "h-[900px]", "h-[1000px]", "h-[1200px]"],
      required: false
    },
    backgroundColor: {
      type: "string",
      pattern: "^#[0-9A-F]{6}$",
      required: false
    }
  },
  items: {
    slides: {
      type: "array",
      required: false,
      items: {
        src: {
          type: "url",
          required: true
        },
        alt: {
          type: "string",
          required: true
        },
        type: {
          type: "string",
          enum: ["image"],
          required: true
        }
      }
    },
    button: {
      type: "object",
      required: false,
      properties: {
        content: {
          type: "string",
          required: true
        },
        link: {
          type: "string",
          required: true
        },
        type: {
          type: "string",
          enum: ["button"],
          required: true
        }
      }
    }
  }
}
```

## API Response Format

When your CMS API returns a page with HeroSection, it should look like:

```json
{
  "id": "home",
  "slug": "home",
  "title": "Home Page",
  "layout": {
    "components": [
      {
        "key": "hero-1",
        "type": "HeroSection",
        "name": "Hero",
        "props": {
          "logo": "https://cms.example.com/logo.png",
          "logoAlt": "Diora Spa",
          "welcomeText": "Welcome to"
        },
        "items": [
          {
            "key": "slides",
            "type": "array",
            "items": [
              {
                "alt": "Hero Image",
                "key": "slide1",
                "src": "https://cms.example.com/hero.jpg",
                "type": "image",
                "settings": {
                  "layout": "full"
                }
              }
            ]
          },
          {
            "key": "button",
            "link": "/services",
            "type": "button",
            "content": "Book Now"
          }
        ]
      },
      {
        "key": "features-1",
        "type": "FeatureSection",
        "name": "Why Choose Us"
        // ... other sections
      }
    ]
  }
}
```

## Data Transformation Examples

### From Admin Input to Component Props

```javascript
// Admin input (form data)
const adminData = {
  logo: "https://cdn.example.com/logo.png",
  welcomeText: "Welcome to Diora",
  slides: [
    {
      image: "https://cdn.example.com/slide1.jpg",
      imageAlt: "Slide 1"
    },
    {
      image: "https://cdn.example.com/slide2.jpg",
      imageAlt: "Slide 2"
    }
  ],
  cta: {
    text: "Book Now",
    url: "/booking"
  }
};

// Transform to component schema
const componentSchema = {
  type: "HeroSection",
  props: {
    logo: adminData.logo,
    welcomeText: adminData.welcomeText
  },
  items: [
    {
      key: "slides",
      type: "array",
      items: adminData.slides.map((slide, i) => ({
        key: `slide${i + 1}`,
        src: slide.image,
        alt: slide.imageAlt,
        type: "image",
        settings: { layout: "full" }
      }))
    },
    {
      key: "button",
      content: adminData.cta.text,
      link: adminData.cta.url,
      type: "button"
    }
  ]
};

// Component receives as props
// const heroProps = componentSchema;
// <HeroSection {...heroProps.props} slides={...} button={...} />
```

## Testing with curl

Test your CMS API returns correct HeroSection data:

```bash
curl -X GET \
  https://your-cms-api.com/api/pages/home \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer YOUR_API_KEY' \
  | jq '.layout.components[] | select(.type=="HeroSection")'
```

Expected output:
```json
{
  "key": "hero-1",
  "type": "HeroSection",
  "items": [
    {
      "key": "slides",
      "type": "array",
      "items": [...]
    },
    {
      "key": "button",
      "content": "...",
      "link": "...",
      "type": "button"
    }
  ]
}
```

## Best Practices

1. **Image Optimization**: Ensure images are optimized (< 2MB per slide)
2. **Alt Text**: Always provide descriptive alt text for accessibility
3. **Responsive Images**: Use responsive image URLs if possible
4. **Button Links**: Validate button links exist before saving
5. **Logo Size**: Logo should be optimized for web (PNG with transparency recommended)
6. **Multiple Slides**: Test carousel with 2-5 slides
7. **Preview**: Show live preview in CMS admin

## Troubleshooting CMS Integration

### Issue: Component not rendering
- Check that `type` is exactly "HeroSection"
- Verify component is in registry
- Check browser console for errors

### Issue: Images not loading
- Verify CORS is enabled on image server
- Check image URLs are publicly accessible
- Test URLs in browser directly

### Issue: Props not applied
- Ensure props are at correct level (root or nested)
- Check prop names match component interface
- Verify data types are correct (string, boolean, array, etc.)

### Issue: Button not working
- Verify link is valid page path
- Check button is not hidden by overflow
- Ensure button type is "button"

---

**Integration Status**: Ready for CMS backend connection

See also:
- Component documentation: `HEROSECTION_COMPONENT.md`
- Implementation guide: `HEROSECTION_IMPLEMENTATION.md`
- Testing guide: `HEROSECTION_TESTING.md`
