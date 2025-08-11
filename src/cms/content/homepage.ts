import heroImage from '@/assets/hero-spa.jpg'
import hairWashImage from '@/assets/hair-wash.jpg'
import waxingImage from '@/assets/waxing.jpg'

export const hero = {
  background: heroImage as string,
  heading: 'Diora spa',
  subheading: 'by Michelle Tran',
  height: 600
}

export const services = [
  {
    title: 'Hair Wash',
    description: 'Luxurious hair cleansing and scalp massage with premium organic products',
    image: { src: hairWashImage as string, alt: 'Hair Wash' },
    price: 'from $25'
  },
  {
    title: 'Waxing',
    description: 'Professional waxing services using gentle, skin-friendly formulations',
    image: { src: waxingImage as string, alt: 'Waxing' },
    price: 'from $35'
  }
]

export const features = [
  {
    title: 'Premium Products',
    description: 'We use only the finest organic and natural beauty products for all treatments.',
    image: { src: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&h=300&fit=crop', alt: 'Premium Products' }
  },
  {
    title: 'Caring Approach',
    description: 'Our experienced therapists provide personalized care tailored to your needs.',
    image: { src: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop', alt: 'Caring Approach' }
  },
  {
    title: 'Safe & Hygienic',
    description: 'Maintaining the highest standards of cleanliness and safety protocols.',
    image: { src: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=300&fit=crop', alt: 'Safe & Hygienic' }
  }
]

export const ingredients = [
  { name: 'Lavender Oil', benefit: 'Calming and relaxing properties' },
  { name: 'Argan Oil', benefit: 'Deep nourishment and hydration' },
  { name: 'Tea Tree', benefit: 'Natural antibacterial benefits' },
  { name: 'Chamomile', benefit: 'Soothing and anti-inflammatory' }
]

export const teamMembers = [
  { name: 'Sarah Johnson', role: 'Senior Spa Director', experience: '12 years experience' },
  { name: 'Maria Rodriguez', role: 'Hair Specialist', experience: '8 years experience' },
  { name: 'Emily Chen', role: 'Waxing Expert', experience: '6 years experience' },
  { name: 'Anna Williams', role: 'Wellness Therapist', experience: '10 years experience' }
]


