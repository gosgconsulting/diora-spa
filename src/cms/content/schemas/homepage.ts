import { z } from 'zod'
import heroImage from "@/assets/hero-spa.jpg";
import hairWashImage from "@/assets/hair-wash.jpg";
import waxingImage from "@/assets/waxing.jpg";

export const Image = z.object({ src: z.string(), alt: z.string().optional() })
export const Service = z.object({ title: z.string(), description: z.string(), image: Image, price: z.string().optional() })
export const Feature = z.object({ title: z.string(), description: z.string(), image: Image })
export const Ingredient = z.object({ name: z.string(), benefit: z.string(), image: Image.optional() })
export const TeamMember = z.object({ name: z.string(), role: z.string(), experience: z.string().optional(), image: Image.optional() })

export const HomepageContent = z.object({
  hero: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    background: Image
  }),
  services: z.array(Service),
  features: z.array(Feature),
  ingredients: z.array(Ingredient),
  teamMembers: z.array(TeamMember)
})

export type HomepageContent = z.infer<typeof HomepageContent>

export const homepageDefaults: HomepageContent = {
  hero: {
    title: 'Diora spa',
    subtitle: 'by Michelle Tran',
    background: { src: heroImage, alt: 'Hero' }
  },
  services: [
    { title: 'Hair Wash', description: 'Luxurious hair cleansing and scalp massage with premium organic products', image: { src: hairWashImage, alt: 'Hair Wash' }, price: 'from $25' },
    { title: 'Waxing', description: 'Professional waxing services using gentle, skin-friendly formulations', image: { src: waxingImage, alt: 'Waxing' }, price: 'from $35' },
  ],
  features: [
    { title: 'Premium Products', description: 'We use only the finest organic and natural beauty products for all treatments.', image: { src: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&h=300&fit=crop', alt: 'Premium' } },
    { title: 'Caring Approach', description: 'Our experienced therapists provide personalized care tailored to your needs.', image: { src: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop', alt: 'Caring' } },
    { title: 'Safe & Hygienic', description: 'Maintaining the highest standards of cleanliness and safety protocols.', image: { src: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=300&fit=crop', alt: 'Hygienic' } },
  ],
  ingredients: [
    { name: 'Lavender Oil', benefit: 'Calming and relaxing properties' },
    { name: 'Argan Oil', benefit: 'Deep nourishment and hydration' },
    { name: 'Tea Tree', benefit: 'Natural antibacterial benefits' },
    { name: 'Chamomile', benefit: 'Soothing and anti-inflammatory' },
  ],
  teamMembers: [
    { name: 'Sarah Johnson', role: 'Senior Spa Director', experience: '12 years experience' },
    { name: 'Maria Rodriguez', role: 'Hair Specialist', experience: '8 years experience' },
    { name: 'Emily Chen', role: 'Waxing Expert', experience: '6 years experience' },
    { name: 'Anna Williams', role: 'Wellness Therapist', experience: '10 years experience' },
  ]
}


