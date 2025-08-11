import { z } from 'zod'

export const NavItem = z.object({ label: z.string(), href: z.string() })

export const HeaderContent = z.object({
  menu: z.array(NavItem)
})
export type HeaderContent = z.infer<typeof HeaderContent>
export const headerDefaults: HeaderContent = {
  menu: [
    { label: 'Home', href: '/' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Blog', href: '/blog' }
  ]
}

export const SocialLink = z.object({ icon: z.enum(['facebook','twitter','instagram','youtube']), href: z.string() })
export const FooterContent = z.object({
  siteTitle: z.string().default('Diora spa'),
  siteSubtitle: z.string().default('by Michelle Tran'),
  contact: z.object({ address: z.string(), phone: z.string(), email: z.string() }),
  hours: z.array(z.object({ label: z.string(), value: z.string() })),
  socials: z.array(SocialLink)
})
export type FooterContent = z.infer<typeof FooterContent>
export const footerDefaults: FooterContent = {
  siteTitle: 'Diora spa',
  siteSubtitle: 'by Michelle Tran',
  contact: { address: '123 Wellness Ave, Spa District', phone: '(555) 123-4567', email: 'hello@dioraspa.com' },
  hours: [
    { label: 'Monday to Friday', value: '9:00 AM - 6:00 PM' },
    { label: 'Saturday, Sunday', value: '9:00 AM - 12:00 noon' }
  ],
  socials: [
    { icon: 'facebook', href: '#' },
    { icon: 'twitter', href: '#' },
    { icon: 'instagram', href: '#' },
    { icon: 'youtube', href: '#' }
  ]
}


