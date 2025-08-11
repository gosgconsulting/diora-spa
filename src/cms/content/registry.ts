import { z } from 'zod'
import { HomepageContent, homepageDefaults } from '@/cms/content/schemas/homepage'
import { PricingContent, pricingDefaults } from '@/cms/content/schemas/pricing'
import { GalleryContent, galleryDefaults } from '@/cms/content/schemas/gallery'
import { BlogContent, blogDefaults } from '@/cms/content/schemas/blog'
import { HeaderContent, headerDefaults, FooterContent, footerDefaults } from '@/cms/content/schemas/layout'

export type PageSchemaEntry<T> = {
  title: string
  schema: z.ZodType<T>
  defaults: T
}

export const registry = {
  homepage: {
    title: 'Homepage',
    schema: HomepageContent,
    defaults: homepageDefaults,
  },
  pricing: {
    title: 'Pricing',
    schema: PricingContent,
    defaults: pricingDefaults,
  },
  gallery: {
    title: 'Gallery',
    schema: GalleryContent,
    defaults: galleryDefaults,
  },
  blog: {
    title: 'Blog',
    schema: BlogContent,
    defaults: blogDefaults,
  },
  header: {
    title: 'Header',
    schema: HeaderContent,
    defaults: headerDefaults,
  },
  footer: {
    title: 'Footer',
    schema: FooterContent,
    defaults: footerDefaults,
  }
} as const

export type Registry = typeof registry


