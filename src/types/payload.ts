// PayloadCMS API Response Types
// These types match the schema design in PAYLOADCMS_SCHEMA_DESIGN.md

export interface MediaItem {
  id: string
  url: string
  filename: string
  mimeType: string
  width?: number
  height?: number
  alt?: string
}

export interface Service {
  id: string
  title: string
  description: string
  image: MediaItem
  price: string
  createdAt: string
  updatedAt: string
}

export interface Feature {
  id: string
  title: string
  description: string
  icon: 'sparkles' | 'heart' | 'shield' | 'star' | 'leaf'
  image?: MediaItem
  createdAt: string
  updatedAt: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  experience: string
  image?: MediaItem
  bio?: string
  createdAt: string
  updatedAt: string
}

export interface Testimonial {
  id: string
  text: string
  author: string
  rating: number
  featured: boolean
  date?: string
  createdAt: string
  updatedAt: string
}

export interface Ingredient {
  id: string
  name: string
  benefit: string
  image?: MediaItem
  description?: string
  createdAt: string
  updatedAt: string
}

// Globals
export interface HeaderGlobal {
  id: string
  logo?: MediaItem
  navigation: Array<{
    label: string
    href: string
  }>
  ctaButton: {
    text: string
    href: string
  }
  updatedAt: string
}

export interface FooterGlobal {
  id: string
  companyInfo: {
    name: string
    description?: string
    address?: string
    phone?: string
    email?: string
  }
  socialMedia: Array<{
    platform: 'facebook' | 'twitter' | 'instagram' | 'youtube'
    url: string
  }>
  copyright: string
  updatedAt: string
}

// Blocks
export interface HeroBlock {
  blockType: 'heroBlock'
  welcomeText?: string
  mainTitle: string
  subtitle?: string
  backgroundImage: MediaItem
}

export interface ServicesBlock {
  blockType: 'servicesBlock'
  title?: string
  description?: string
  services: Service[]
}

export interface FeaturesBlock {
  blockType: 'featuresBlock'
  title?: string
  description?: string
  features: Feature[]
}

export interface TeamBlock {
  blockType: 'teamBlock'
  title?: string
  teamMembers: TeamMember[]
}

export interface TestimonialsBlock {
  blockType: 'testimonialsBlock'
  title?: string
  testimonials: Testimonial[]
}

export type Block = HeroBlock | ServicesBlock | FeaturesBlock | TeamBlock | TestimonialsBlock

// Pages
export interface Page {
  id: string
  title: string
  slug: string
  blocks: Block[]
  seo?: {
    title?: string
    description?: string
  }
  createdAt: string
  updatedAt: string
}

// API Response wrappers
export interface PayloadResponse<T> {
  docs: T[]
  totalDocs: number
  limit: number
  page: number
  totalPages: number
  hasNextPage: boolean
  hasPrevPage: boolean
}

export interface PayloadSingleResponse<T> {
  id: string
  data: T
}

// API Error type
export interface PayloadError {
  message: string
  errors?: Array<{
    field: string
    message: string
  }>
}