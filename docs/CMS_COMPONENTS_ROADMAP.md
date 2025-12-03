# CMS Components Implementation Roadmap

## Overview
This document outlines the plan for converting all static sections in the Diora Spa project into reusable CMS-driven components.

## Current Status

✅ **Completed**
- HeroSection - Full carousel with multiple slides support
- Component Registry - Already set up
- DynamicPageRenderer - Ready to use
- CMS Integration Guide - Complete

⏳ **Planned Components**
1. FeatureSection (Why Choose Us)
2. IngredientsSection (Premium Ingredients)
3. ServicesGridSection (Services Preview)
4. TeamCarouselSection (Meet Our Team)
5. ReviewsSection (Customer Reviews)
6. AboutSection (About Diora Spa)
7. ContactSection (Contact Information)
8. BlogSection (Blog Posts)

## Component Breakdown

### 1. FeatureSection
**Use Case**: "Why Choose Diora Spa" section

**Props Interface**:
```typescript
interface FeatureItem {
  title: string;
  description: string;
  image?: string;
  icon?: string;
}

interface FeatureSectionProps {
  title: string;
  subtitle?: string;
  features: FeatureItem[];
  backgroundColor?: string;
  layout?: 'grid-3' | 'grid-4' | 'list'; // default: 'grid-3'
}
```

**CMS Schema Example**:
```json
{
  "key": "FeatureSection",
  "type": "FeatureSection",
  "name": "Why Choose Us",
  "items": [
    {
      "key": "title",
      "type": "heading",
      "level": 2,
      "content": "Why Choose Diora spa"
    },
    {
      "key": "features",
      "type": "array",
      "items": [
        {
          "key": "feature1",
          "type": "feature",
          "title": "Premium Products",
          "description": "We use only the finest organic products",
          "image": "https://cms.example.com/premium.jpg"
        }
      ]
    }
  ]
}
```

**File Location**: `src/components/sections/FeatureSection.tsx`

---

### 2. IngredientsSection
**Use Case**: Display premium ingredients with benefits

**Props Interface**:
```typescript
interface Ingredient {
  name: string;
  benefit: string;
  image: string;
}

interface IngredientsSectionProps {
  title: string;
  subtitle?: string;
  ingredients: Ingredient[];
  columns?: 5 | 6 | 4; // default: 5
  backgroundColor?: string;
}
```

**CMS Schema Example**:
```json
{
  "key": "IngredientsSection",
  "type": "IngredientsSection",
  "name": "Our Ingredients",
  "items": [
    {
      "key": "title",
      "type": "heading",
      "content": "Our Ingredients"
    },
    {
      "key": "ingredients",
      "type": "array",
      "items": [
        {
          "name": "White Truffle Extract",
          "benefit": "Rich in fatty acids and vitamins",
          "image": "https://cms.example.com/truffle.png"
        }
      ]
    }
  ]
}
```

**File Location**: `src/components/sections/IngredientsSection.tsx`

---

### 3. ServicesGridSection
**Use Case**: Display available services with pricing

**Props Interface**:
```typescript
interface Service {
  title: string;
  description: string;
  image: string;
  price: string;
  link?: string;
}

interface ServicesGridSectionProps {
  title: string;
  subtitle?: string;
  services: Service[];
  columns?: 2 | 3 | 4; // default: 2
  backgroundColor?: string;
}
```

**CMS Schema Example**:
```json
{
  "key": "ServicesSection",
  "type": "ServicesGridSection",
  "name": "Our Services",
  "items": [
    {
      "key": "title",
      "type": "heading",
      "content": "Our Services"
    },
    {
      "key": "services",
      "type": "array",
      "items": [
        {
          "title": "Head Spa",
          "description": "Curated rituals to deeply relax",
          "image": "https://cms.example.com/headspa.jpg",
          "price": "from $25",
          "link": "/pricing"
        }
      ]
    }
  ]
}
```

**File Location**: `src/components/sections/ServicesGridSection.tsx`

---

### 4. TeamCarouselSection
**Use Case**: Display team members in a carousel

**Props Interface**:
```typescript
interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
}

interface TeamCarouselSectionProps {
  title: string;
  teamMembers: TeamMember[];
  backgroundColor?: string;
  itemsPerSlide?: 3 | 4; // default: 4
}
```

**CMS Schema Example**:
```json
{
  "key": "TeamSection",
  "type": "TeamCarouselSection",
  "name": "Meet Our Team",
  "items": [
    {
      "key": "title",
      "type": "heading",
      "content": "Meet Our Team"
    },
    {
      "key": "team",
      "type": "array",
      "items": [
        {
          "name": "Kris",
          "role": "Lash & Head Spa Specialist",
          "description": "Trained in advanced lash artistry",
          "image": "https://cms.example.com/kris.jpg"
        }
      ]
    }
  ]
}
```

**File Location**: `src/components/sections/TeamCarouselSection.tsx`

---

### 5. ReviewsSection
**Use Case**: Display customer reviews from multiple sources

**Props Interface**:
```typescript
interface Review {
  author: string;
  rating: number;
  text: string;
  source: 'Google' | 'TripAdvisor' | 'Custom';
  date?: string;
}

interface ReviewsSectionProps {
  title: string;
  reviews: Review[];
  groupBySource?: boolean; // default: true
  backgroundColor?: string;
  backgroundImage?: string;
}
```

**CMS Schema Example**:
```json
{
  "key": "ReviewsSection",
  "type": "ReviewsSection",
  "name": "Reviews",
  "items": [
    {
      "key": "title",
      "type": "heading",
      "content": "Customer Reviews"
    },
    {
      "key": "reviews",
      "type": "array",
      "items": [
        {
          "author": "Marie L.",
          "rating": 5,
          "text": "Magnifique collection, très belle qualité",
          "source": "Google",
          "date": "Il y a 3 jours"
        }
      ]
    }
  ]
}
```

**File Location**: `src/components/sections/ReviewsSection.tsx`

---

### 6. AboutSection
**Use Case**: Display about/story section with image

**Props Interface**:
```typescript
interface AboutSectionProps {
  title: string;
  image: string;
  content: string | string[]; // Single text or array of paragraphs
  button?: {
    text: string;
    link: string;
  };
  layout?: 'image-left' | 'image-right'; // default: 'image-left'
  backgroundColor?: string;
}
```

**CMS Schema Example**:
```json
{
  "key": "AboutSection",
  "type": "AboutSection",
  "name": "About Us",
  "items": [
    {
      "key": "image",
      "type": "image",
      "src": "https://cms.example.com/about.jpg",
      "alt": "About image"
    },
    {
      "key": "title",
      "type": "heading",
      "content": "About Diora spa"
    },
    {
      "key": "content",
      "type": "array",
      "items": [
        {
          "type": "text",
          "content": "At Diora Spa, beauty is more than appearance"
        }
      ]
    },
    {
      "key": "button",
      "type": "button",
      "text": "Learn More",
      "link": "/about"
    }
  ]
}
```

**File Location**: `src/components/sections/AboutSection.tsx`

---

### 7. ContactSection
**Use Case**: Display contact information

**Props Interface**:
```typescript
interface ContactInfo {
  icon: 'phone' | 'email' | 'location' | 'clock';
  label: string;
  value: string;
  link?: string;
}

interface ContactSectionProps {
  title: string;
  contactInfo: ContactInfo[];
  socialLinks?: Array<{
    platform: string;
    url: string;
  }>;
  backgroundColor?: string;
}
```

**CMS Schema Example**:
```json
{
  "key": "ContactSection",
  "type": "ContactSection",
  "name": "Contact Us",
  "items": [
    {
      "key": "title",
      "type": "heading",
      "content": "Contact Us"
    },
    {
      "key": "contactInfo",
      "type": "array",
      "items": [
        {
          "icon": "phone",
          "label": "Phone",
          "value": "+65 9224 6789",
          "link": "tel:+6592246789"
        }
      ]
    }
  ]
}
```

**File Location**: `src/components/sections/ContactSection.tsx`

---

### 8. BlogSection
**Use Case**: Display blog posts from WordPress or custom API

**Props Interface**:
```typescript
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  link: string;
  date?: string;
  category?: string;
}

interface BlogSectionProps {
  title: string;
  posts: BlogPost[];
  postsPerRow?: 2 | 3 | 4; // default: 3
  backgroundColor?: string;
}
```

**CMS Schema Example**:
```json
{
  "key": "BlogSection",
  "type": "BlogSection",
  "name": "Blog",
  "items": [
    {
      "key": "title",
      "type": "heading",
      "content": "Latest Blog Posts"
    },
    {
      "key": "posts",
      "type": "array",
      "items": [
        {
          "title": "How to Care for Your Lashes",
          "excerpt": "Tips for maintaining beautiful lashes",
          "image": "https://cms.example.com/blog1.jpg",
          "link": "/blog/lash-care",
          "date": "2025-01-15"
        }
      ]
    }
  ]
}
```

**File Location**: `src/components/sections/BlogSection.tsx`

---

## Implementation Priority

**Phase 1 (High Priority)** - Core sections
1. ✅ HeroSection
2. FeatureSection
3. ServicesGridSection
4. AboutSection

**Phase 2 (Medium Priority)** - Interactive sections
5. TeamCarouselSection
6. ReviewsSection
7. IngredientsSection

**Phase 3 (Lower Priority)** - Additional sections
8. ContactSection
9. BlogSection

## File Structure After Complete Implementation

```
src/components/sections/
├── HeroSection.tsx              ✅ Done
├── FeatureSection.tsx           ⏳ Planned
├── ServicesGridSection.tsx      ⏳ Planned
├── AboutSection.tsx             ⏳ Planned
├── TeamCarouselSection.tsx      ⏳ Planned
├── ReviewsSection.tsx           ⏳ Planned
├── IngredientsSection.tsx       ⏳ Planned
├── ContactSection.tsx           ⏳ Planned
└── BlogSection.tsx              ⏳ Planned

docs/
├── HEROSECTION_COMPONENT.md     ✅ Done
├── HEROSECTION_IMPLEMENTATION.md ✅ Done
├── HEROSECTION_TESTING.md       ✅ Done
├── CMS_COMPONENTS_ROADMAP.md    ← You are here
├── FEATURESSECTION_COMPONENT.md ⏳ Planned
└── ...
```

## Common Component Patterns

All section components follow these patterns:

```tsx
// Pattern 1: Props Interface
interface SectionProps {
  title: string;
  subtitle?: string;
  items: ItemType[];
  backgroundColor?: string;
  // ... section-specific props
}

// Pattern 2: Component Structure
export default function Section(props: SectionProps) {
  const {
    title,
    subtitle,
    items,
    backgroundColor = '#FAF8F4',
  } = props;

  return (
    <section style={{ backgroundColor }}>
      <div className="container mx-auto px-4 py-16">
        {/* Title Section */}
        {title && <h2 className="font-dream text-5xl font-medium">{title}</h2>}
        
        {/* Content Section */}
        {/* Component-specific rendering */}
      </div>
    </section>
  );
}

// Pattern 3: Export
export default Section;
```

## CMS Data Mapping Rules

All sections receive data with this structure:

```typescript
interface ComponentData {
  key: string;           // Unique identifier
  name: string;          // Display name
  type: string;          // Maps to registry key
  props?: object;        // Props for component
  items?: Array<{        // Alternative data structure
    key: string;
    type: string;
    // ... item-specific fields
  }>;
}
```

## Integration Checklist for Each Component

- [ ] Create component file in `src/components/sections/`
- [ ] Define TypeScript interfaces
- [ ] Build component with all props support
- [ ] Add component to registry in `componentRegistry.js`
- [ ] Create documentation file in `docs/`
- [ ] Add testing examples
- [ ] Test with mock CMS data
- [ ] Verify responsive design
- [ ] Check accessibility (a11y)
- [ ] Optimize images and performance
- [ ] Add to this roadmap

## Success Criteria

Each component should meet these criteria:
- ✅ TypeScript with full type safety
- ✅ Zero console errors/warnings
- ✅ Responsive across all breakpoints
- ✅ Lazy loading for images
- ✅ Proper accessibility attributes
- ✅ Follows design system colors/fonts
- ✅ Complete documentation
- ✅ Testing examples included
- ✅ Registered in componentRegistry

## Next Steps

1. **Complete Phase 1**: Build FeatureSection next
2. **Update Schema**: Add component definitions to header-cms-schema.json
3. **Update DynamicPageRenderer**: Ensure it handles all props correctly
4. **Create API Integration**: Connect to actual CMS backend
5. **Build Admin Dashboard**: For managing page layouts and content

## Questions & Notes

- Should sections support custom CSS classes via CMS?
- What's the strategy for component versioning?
- How will we handle A/B testing across sections?
- Should we add analytics tracking to sections?

---

**Last Updated**: 2025-01-15
**Status**: Roadmap Complete - Ready for Phase 1 Completion
