# Diora Spa - Stackbit Configuration Guide

This document provides instructions for setting up and using the Stackbit configuration for the Diora Spa website.

## Content Structure

The content for this website is organized as follows:

### Page Models

- **HomePage** (`/content/pages/index.json`): The main landing page
- **PricingPage** (`/content/pages/pricing.json`): Pricing information
- **GalleryPage** (`/content/pages/gallery.json`): Photo gallery
- **BlogPage** (`/content/pages/blog.json`): Blog listing page
- **BlogPost** (`/content/blog/{slug}.json`): Individual blog posts
- **ServicePage** (`/content/services/{slug}.json`): Individual service pages

### Data Models

- **Service** (`/content/data/services/{slug}.json`): Service information
- **Feature** (`/content/data/features/{slug}.json`): Feature highlights
- **Ingredient** (`/content/data/ingredients/{slug}.json`): Ingredient information
- **TeamMember** (`/content/data/team/{slug}.json`): Team member profiles
- **Testimonial** (`/content/data/testimonials/{slug}.json`): Customer testimonials
- **PricingPlan** (`/content/data/pricing/{slug}.json`): Pricing plan details
- **GalleryItem** (`/content/data/gallery/{slug}.json`): Gallery images

## Setup Instructions

1. **Install Dependencies**:
   ```bash
   npm install --save-dev @stackbit/types @stackbit/cms-git
   ```
   or if using Bun:
   ```bash
   bun add @stackbit/types @stackbit/cms-git --dev
   ```

2. **Content Creation**:
   - Create content files in the appropriate directories following the structure defined in `stackbit.config.ts`
   - Use references to link content between files (see examples in the sample files)

3. **URL Structure**:
   - The URL structure is defined in the `urlPath` property of each page model
   - Dynamic URLs use the `{slug}` placeholder which is replaced with the actual slug value from the content

## Using Stackbit

1. **Start Stackbit**:
   ```bash
   npx @stackbit/cli dev
   ```

2. **Content Editing**:
   - Use the Stackbit visual editor to edit content
   - Changes will be saved to the corresponding JSON files in the content directory

3. **Page Preview**:
   - Stackbit will automatically preview your pages as you edit them
   - The preview is based on the URL structure defined in the configuration

## References

- [Stackbit Documentation](https://docs.stackbit.com/)
- [Git Content Source](https://docs.stackbit.com/reference/stackbit-config/content-sources/git-content-source/)
- [Stackbit Models](https://docs.stackbit.com/reference/stackbit-config/models/)
