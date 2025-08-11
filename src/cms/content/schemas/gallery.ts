import { z } from 'zod'

export const Image = z.object({ src: z.string(), alt: z.string().optional() })

export const GalleryContent = z.object({
  title: z.string().default('Gallery'),
  intro: z.string().optional(),
  sections: z.array(z.object({
    title: z.string(),
    description: z.string().optional(),
    images: z.array(Image)
  }))
})

export type GalleryContent = z.infer<typeof GalleryContent>

export const galleryDefaults: GalleryContent = {
  title: 'Gallery',
  intro: 'Take a visual journey through our serene spa environment and professional treatments',
  sections: [
    { title: 'Hair Washing Treatments', description: 'Experience our luxurious hair cleansing and scalp massage treatments', images: [
      { src: '/cms/hair-wash.jpg', alt: 'Hair washing treatment' },
      { src: '/cms/hero-spa.jpg', alt: 'Spa ambiance' },
      { src: '/cms/ingredients.jpg', alt: 'Natural hair products' },
      { src: '/cms/team.jpg', alt: 'Hair specialist at work' },
      { src: '/cms/hair-wash.jpg', alt: 'Scalp massage therapy' },
      { src: '/cms/hero-spa.jpg', alt: 'Relaxing hair treatment' }
    ] },
    { title: 'Waxing Treatments', description: 'Professional waxing services in our comfortable and hygienic environment', images: [
      { src: '/cms/waxing.jpg', alt: 'Professional waxing service' },
      { src: '/cms/hero-spa.jpg', alt: 'Waxing treatment room' },
      { src: '/cms/ingredients.jpg', alt: 'Waxing products' },
      { src: '/cms/team.jpg', alt: 'Waxing specialist' },
      { src: '/cms/waxing.jpg', alt: 'Eyebrow waxing' },
      { src: '/cms/hero-spa.jpg', alt: 'Post-treatment care' }
    ] }
  ]
}


