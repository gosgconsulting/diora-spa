import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { payloadApi, PayloadAPIError } from '@/services/payloadApi'
import type {
  Service,
  Feature,
  TeamMember,
  Testimonial,
  Ingredient,
  HeaderGlobal,
  FooterGlobal,
  Page,
  PayloadResponse
} from '@/types/payload'

// Query keys for React Query
export const payloadKeys = {
  services: ['services'] as const,
  service: (id: string) => ['services', id] as const,
  features: ['features'] as const,
  teamMembers: ['teamMembers'] as const,
  testimonials: (featured?: boolean) => ['testimonials', { featured }] as const,
  ingredients: ['ingredients'] as const,
  header: ['globals', 'header'] as const,
  footer: ['globals', 'footer'] as const,
  pages: ['pages'] as const,
  page: (slug: string) => ['pages', slug] as const,
}

// Default query options for PayloadCMS data
const defaultOptions = {
  staleTime: 5 * 60 * 1000, // 5 minutes
  gcTime: 30 * 60 * 1000, // 30 minutes (formerly cacheTime)
  retry: (failureCount: number, error: Error) => {
    // Don't retry on 404s
    if (error instanceof PayloadAPIError && error.status === 404) {
      return false
    }
    return failureCount < 3
  },
}

// Collections hooks
export function useServices(options?: UseQueryOptions<PayloadResponse<Service>, PayloadAPIError>) {
  return useQuery({
    queryKey: payloadKeys.services,
    queryFn: () => payloadApi.getServices(),
    ...defaultOptions,
    ...options,
  })
}

export function useService(id: string, options?: UseQueryOptions<Service, PayloadAPIError>) {
  return useQuery({
    queryKey: payloadKeys.service(id),
    queryFn: () => payloadApi.getService(id),
    enabled: !!id,
    ...defaultOptions,
    ...options,
  })
}

export function useFeatures(options?: UseQueryOptions<PayloadResponse<Feature>, PayloadAPIError>) {
  return useQuery({
    queryKey: payloadKeys.features,
    queryFn: () => payloadApi.getFeatures(),
    ...defaultOptions,
    ...options,
  })
}

export function useTeamMembers(options?: UseQueryOptions<PayloadResponse<TeamMember>, PayloadAPIError>) {
  return useQuery({
    queryKey: payloadKeys.teamMembers,
    queryFn: () => payloadApi.getTeamMembers(),
    ...defaultOptions,
    ...options,
  })
}

export function useTestimonials(
  featured?: boolean,
  options?: UseQueryOptions<PayloadResponse<Testimonial>, PayloadAPIError>
) {
  return useQuery({
    queryKey: payloadKeys.testimonials(featured),
    queryFn: () => payloadApi.getTestimonials(10, 1, featured),
    ...defaultOptions,
    ...options,
  })
}

export function useIngredients(options?: UseQueryOptions<PayloadResponse<Ingredient>, PayloadAPIError>) {
  return useQuery({
    queryKey: payloadKeys.ingredients,
    queryFn: () => payloadApi.getIngredients(),
    ...defaultOptions,
    ...options,
  })
}

// Globals hooks
export function useHeader(options?: UseQueryOptions<HeaderGlobal, PayloadAPIError>) {
  return useQuery({
    queryKey: payloadKeys.header,
    queryFn: () => payloadApi.getHeader(),
    ...defaultOptions,
    ...options,
  })
}

export function useFooter(options?: UseQueryOptions<FooterGlobal, PayloadAPIError>) {
  return useQuery({
    queryKey: payloadKeys.footer,
    queryFn: () => payloadApi.getFooter(),
    ...defaultOptions,
    ...options,
  })
}

// Pages hooks
export function usePages(options?: UseQueryOptions<PayloadResponse<Page>, PayloadAPIError>) {
  return useQuery({
    queryKey: payloadKeys.pages,
    queryFn: () => payloadApi.getPages(),
    ...defaultOptions,
    ...options,
  })
}

export function usePage(slug: string, options?: UseQueryOptions<Page, PayloadAPIError>) {
  return useQuery({
    queryKey: payloadKeys.page(slug),
    queryFn: () => payloadApi.getPage(slug),
    enabled: !!slug,
    ...defaultOptions,
    ...options,
  })
}

// Utility hooks for common use cases
export function useFeaturedTestimonials(options?: UseQueryOptions<PayloadResponse<Testimonial>, PayloadAPIError>) {
  return useTestimonials(true, options)
}

export function useHomepageData() {
  const services = useServices()
  const features = useFeatures()
  const teamMembers = useTeamMembers()
  const testimonials = useFeaturedTestimonials()
  const ingredients = useIngredients()

  return {
    services,
    features,
    teamMembers,
    testimonials,
    ingredients,
    isLoading: services.isLoading || features.isLoading || teamMembers.isLoading || testimonials.isLoading || ingredients.isLoading,
    isError: services.isError || features.isError || teamMembers.isError || testimonials.isError || ingredients.isError,
    error: services.error || features.error || teamMembers.error || testimonials.error || ingredients.error,
  }
}