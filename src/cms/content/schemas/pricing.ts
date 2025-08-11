import { z } from 'zod'

export const Image = z.object({ src: z.string(), alt: z.string().optional() })
export const Service = z.object({ name: z.string(), description: z.string(), image: Image, duration: z.string() })

export const PricingContent = z.object({
  title: z.string().default('Pricing'),
  left: z.object({ title: z.string(), image: Image, items: z.array(Service) }),
  right: z.object({ title: z.string(), image: Image, items: z.array(Service) })
})

export type PricingContent = z.infer<typeof PricingContent>

export const pricingDefaults: PricingContent = {
  title: 'Pricing',
  left: {
    title: 'Hair Wash Services',
    image: { src: '/cms/hair-wash.jpg', alt: 'Hair Wash Services' },
    items: [
      { name: 'Signature Hair Wash', description: 'Deep cleansing shampoo with scalp massage and conditioning treatment', image: { src: '/cms/hair-wash.jpg', alt: 'Signature Hair Wash' }, duration: '45 min' },
      { name: 'Therapeutic Hair Treatment', description: 'Intensive nourishing treatment with premium oils and proteins', image: { src: '/cms/hair-wash.jpg', alt: 'Therapeutic Hair Treatment' }, duration: '60 min' },
      { name: 'Luxury Hair Spa', description: 'Complete hair rejuvenation package with wash, mask, and styling', image: { src: '/cms/hair-wash.jpg', alt: 'Luxury Hair Spa' }, duration: '90 min' }
    ]
  },
  right: {
    title: 'Waxing Services',
    image: { src: '/cms/waxing.jpg', alt: 'Waxing Services' },
    items: [
      { name: 'Eyebrow Shaping', description: 'Professional eyebrow waxing and shaping for perfect definition', image: { src: '/cms/waxing.jpg', alt: 'Eyebrow Shaping' }, duration: '20 min' },
      { name: 'Full Leg Waxing', description: 'Complete leg waxing service using gentle, skin-friendly wax', image: { src: '/cms/waxing.jpg', alt: 'Full Leg Waxing' }, duration: '45 min' },
      { name: 'Brazilian Waxing', description: 'Professional Brazilian wax with aftercare treatment', image: { src: '/cms/waxing.jpg', alt: 'Brazilian Waxing' }, duration: '30 min' },
      { name: 'Full Body Waxing', description: 'Comprehensive body waxing package for silky smooth skin', image: { src: '/cms/waxing.jpg', alt: 'Full Body Waxing' }, duration: '120 min' }
    ]
  }
}


