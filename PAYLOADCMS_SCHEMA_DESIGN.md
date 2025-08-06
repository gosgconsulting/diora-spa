# PAYLOADCMS SCHEMA DESIGN

## 🎯 GOAL
Transform Lovable website data into PayloadCMS collections for dynamic content management

## 📋 COLLECTIONS DESIGN

### **1. SERVICES COLLECTION**
**Purpose:** Spa service offerings with pricing
**Based on:** `src/data/services.ts`

```typescript
// Collection: services
{
  slug: 'services',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'price', 'image']
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Service Title'
    },
    {
      name: 'description', 
      type: 'textarea',
      required: true,
      label: 'Service Description'
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Service Image'
    },
    {
      name: 'price',
      type: 'text',
      required: true,
      label: 'Price (e.g., "from $25")'
    }
  ]
}
```

### **2. FEATURES COLLECTION**
**Purpose:** Spa features/benefits (Why Choose Us section)
**Based on:** `src/data/features.ts`

```typescript
// Collection: features  
{
  slug: 'features',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'icon']
  },
  fields: [
    {
      name: 'title',
      type: 'text', 
      required: true,
      label: 'Feature Title'
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      label: 'Feature Description'
    },
    {
      name: 'icon',
      type: 'select',
      required: true,
      label: 'Icon',
      options: [
        { label: 'Sparkles', value: 'sparkles' },
        { label: 'Heart', value: 'heart' },
        { label: 'Shield', value: 'shield' },
        { label: 'Star', value: 'star' },
        { label: 'Leaf', value: 'leaf' }
      ]
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Feature Image'
    }
  ]
}
```

### **3. TEAM MEMBERS COLLECTION**
**Purpose:** Staff information and roles
**Based on:** `src/data/teamMembers.ts`

```typescript
// Collection: teamMembers
{
  slug: 'teamMembers',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'role', 'experience']
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Full Name'
    },
    {
      name: 'role', 
      type: 'text',
      required: true,
      label: 'Job Role/Title'
    },
    {
      name: 'experience',
      type: 'text',
      required: true,
      label: 'Years of Experience'
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Profile Photo'
    },
    {
      name: 'bio',
      type: 'textarea',
      label: 'Short Biography'
    }
  ]
}
```

### **4. TESTIMONIALS COLLECTION**
**Purpose:** Customer reviews and ratings
**Based on:** `src/data/testimonials.ts`

```typescript
// Collection: testimonials
{
  slug: 'testimonials',
  admin: {
    useAsTitle: 'author',
    defaultColumns: ['author', 'rating', 'featured']
  },
  fields: [
    {
      name: 'text',
      type: 'textarea',
      required: true,
      label: 'Review Text'
    },
    {
      name: 'author',
      type: 'text',
      required: true,
      label: 'Customer Name'
    },
    {
      name: 'rating',
      type: 'number',
      required: true,
      min: 1,
      max: 5,
      label: 'Star Rating (1-5)'
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Feature on Homepage',
      defaultValue: false
    },
    {
      name: 'date',
      type: 'date',
      label: 'Review Date'
    }
  ]
}
```

### **5. INGREDIENTS COLLECTION**
**Purpose:** Natural ingredients used in treatments
**Based on:** `src/data/ingredients.ts`

```typescript
// Collection: ingredients
{
  slug: 'ingredients',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'benefit']
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Ingredient Name'
    },
    {
      name: 'benefit',
      type: 'text',
      required: true,
      label: 'Key Benefit'
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Ingredient Image'
    },
    {
      name: 'description',
      type: 'richText',
      label: 'Detailed Description'
    }
  ]
}
```

## 🌐 GLOBALS DESIGN

### **1. HEADER GLOBAL**
**Purpose:** Site navigation and branding

```typescript
// Global: header
{
  slug: 'header',
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      label: 'Site Logo'
    },
    {
      name: 'navigation',
      type: 'array',
      label: 'Navigation Menu',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true
        },
        {
          name: 'href',
          type: 'text',
          required: true
        }
      ]
    },
    {
      name: 'ctaButton',
      type: 'group',
      label: 'Call to Action Button',
      fields: [
        {
          name: 'text',
          type: 'text',
          defaultValue: 'Book Now'
        },
        {
          name: 'href',
          type: 'text',
          defaultValue: '/book'
        }
      ]
    }
  ]
}
```

### **2. FOOTER GLOBAL**
**Purpose:** Footer content and links

```typescript
// Global: footer
{
  slug: 'footer',
  fields: [
    {
      name: 'companyInfo',
      type: 'group',
      fields: [
        {
          name: 'name',
          type: 'text',
          defaultValue: 'Diora Spa'
        },
        {
          name: 'description',
          type: 'textarea'
        },
        {
          name: 'address',
          type: 'textarea'
        },
        {
          name: 'phone',
          type: 'text'
        },
        {
          name: 'email',
          type: 'email'
        }
      ]
    },
    {
      name: 'socialMedia',
      type: 'array',
      label: 'Social Media Links',
      fields: [
        {
          name: 'platform',
          type: 'select',
          options: ['facebook', 'twitter', 'instagram', 'youtube']
        },
        {
          name: 'url',
          type: 'url'
        }
      ]
    },
    {
      name: 'copyright',
      type: 'text',
      defaultValue: '© 2024 Diora Spa. All rights reserved.'
    }
  ]
}
```

## 🧩 BLOCKS DESIGN (for flexible page composition)

### **1. HERO BLOCK**
```typescript
{
  slug: 'heroBlock',
  fields: [
    {
      name: 'welcomeText',
      type: 'text',
      defaultValue: 'Welcome to'
    },
    {
      name: 'mainTitle', 
      type: 'text',
      required: true,
      defaultValue: 'Diora spa'
    },
    {
      name: 'subtitle',
      type: 'text',
      defaultValue: 'by Michelle Tran'
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      required: true
    }
  ]
}
```

### **2. SERVICES BLOCK**
```typescript
{
  slug: 'servicesBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Our Services'
    },
    {
      name: 'description',
      type: 'textarea'
    },
    {
      name: 'services',
      type: 'relationship',
      relationTo: 'services',
      hasMany: true,
      label: 'Select Services to Display'
    }
  ]
}
```

## 📄 PAGES COLLECTION

```typescript
// Collection: pages
{
  slug: 'pages',
  admin: {
    useAsTitle: 'title'
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true
    },
    {
      name: 'blocks',
      type: 'blocks',
      blocks: [
        // Import all block types
        'heroBlock',
        'servicesBlock', 
        'featuresBlock',
        'teamBlock',
        'testimonialsBlock'
      ]
    },
    {
      name: 'seo',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text'
        },
        {
          name: 'description',
          type: 'textarea'
        }
      ]
    }
  ]
}
```

## 🚀 IMPLEMENTATION PRIORITY

1. **Phase 2.1:** Collections (Services, Features, Team, Testimonials)
2. **Phase 2.2:** Media Collection setup  
3. **Phase 2.3:** Globals (Header, Footer)
4. **Phase 2.4:** Blocks for flexible composition
5. **Phase 2.5:** Pages collection with block composition

## ✅ SUCCESS CRITERIA

- [ ] All existing content can be managed through PayloadCMS admin
- [ ] Content structure matches current website exactly
- [ ] Media assets properly organized and accessible
- [ ] Flexible page composition through blocks
- [ ] SEO metadata manageable