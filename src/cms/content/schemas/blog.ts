import { z } from 'zod'

export const Image = z.object({ src: z.string(), alt: z.string().optional() })

export const BlogPost = z.object({
  title: z.string(),
  excerpt: z.string(),
  image: Image,
  date: z.string(),
  author: z.string(),
  category: z.string().optional()
})

export const BlogContent = z.object({
  title: z.string().default('Our Blog'),
  intro: z.string().optional(),
  posts: z.array(BlogPost)
})

export type BlogContent = z.infer<typeof BlogContent>

export const blogDefaults: BlogContent = {
  title: 'Our Blog',
  intro: 'Stay updated with the latest beauty tips, treatment insights, and wellness advice from our expert team',
  posts: [
    { title: 'The Ultimate Guide to Hair Care: Why Professional Hair Washing Matters', excerpt: 'Discover the benefits of professional hair washing treatments and how they can transform your hair health. Learn about the techniques and products that make all the difference.', image: { src: '/cms/hair-wash.jpg', alt: 'Hair Wash' }, date: 'March 15, 2024', author: 'Sarah Johnson', category: 'Hair Care' },
    { title: 'Waxing vs. Shaving: Making the Right Choice for Your Skin', excerpt: 'Compare the long-term benefits of professional waxing over traditional shaving methods. Understand which option is best for different skin types and areas.', image: { src: '/cms/waxing.jpg', alt: 'Waxing' }, date: 'March 12, 2024', author: 'Maria Rodriguez', category: 'Beauty Tips' },
    { title: 'Natural Ingredients in Spa Treatments: What Makes Them Special', excerpt: 'Explore the power of natural ingredients in spa treatments. From lavender to argan oil, learn how these elements enhance your beauty routine naturally.', image: { src: '/cms/ingredients.jpg', alt: 'Ingredients' }, date: 'March 8, 2024', author: 'Emily Chen', category: 'Natural Beauty' },
    { title: 'Creating Your Perfect Spa Day: A Complete Wellness Guide', excerpt: 'Plan the ultimate spa experience with our comprehensive guide. Learn how to combine treatments for maximum relaxation and rejuvenation benefits.', image: { src: '/cms/hero-spa.jpg', alt: 'Spa' }, date: 'March 5, 2024', author: 'Anna Williams', category: 'Wellness' },
  ]
}


