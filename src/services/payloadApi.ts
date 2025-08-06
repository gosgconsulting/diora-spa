import type {
  Service,
  Feature,
  TeamMember,
  Testimonial,
  Ingredient,
  HeaderGlobal,
  FooterGlobal,
  Page,
  PayloadResponse,
  PayloadSingleResponse,
  PayloadError
} from '@/types/payload'

// Environment configuration
const PAYLOAD_API_URL = import.meta.env.VITE_PAYLOAD_API_URL || 'http://localhost:3000/api'

class PayloadAPIError extends Error {
  constructor(
    message: string,
    public status?: number,
    public errors?: PayloadError['errors']
  ) {
    super(message)
    this.name = 'PayloadAPIError'
  }
}

class PayloadAPIClient {
  private baseURL: string

  constructor(baseURL: string = PAYLOAD_API_URL) {
    this.baseURL = baseURL.replace(/\/$/, '') // Remove trailing slash
  }

  private async request<T>(endpoint: string): Promise<T> {
    const url = `${this.baseURL}${endpoint}`
    
    try {
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new PayloadAPIError(
          errorData.message || `HTTP ${response.status}: ${response.statusText}`,
          response.status,
          errorData.errors
        )
      }

      return await response.json()
    } catch (error) {
      if (error instanceof PayloadAPIError) {
        throw error
      }
      
      // Network or other errors
      throw new PayloadAPIError(
        error instanceof Error ? error.message : 'Unknown error occurred'
      )
    }
  }

  // Collections
  async getServices(limit = 10, page = 1): Promise<PayloadResponse<Service>> {
    return this.request<PayloadResponse<Service>>(`/services?limit=${limit}&page=${page}`)
  }

  async getService(id: string): Promise<Service> {
    return this.request<Service>(`/services/${id}`)
  }

  async getFeatures(limit = 10, page = 1): Promise<PayloadResponse<Feature>> {
    return this.request<PayloadResponse<Feature>>(`/features?limit=${limit}&page=${page}`)
  }

  async getTeamMembers(limit = 10, page = 1): Promise<PayloadResponse<TeamMember>> {
    return this.request<PayloadResponse<TeamMember>>(`/team-members?limit=${limit}&page=${page}`)
  }

  async getTestimonials(limit = 10, page = 1, featured?: boolean): Promise<PayloadResponse<Testimonial>> {
    const featuredQuery = featured !== undefined ? `&where[featured][equals]=${featured}` : ''
    return this.request<PayloadResponse<Testimonial>>(`/testimonials?limit=${limit}&page=${page}${featuredQuery}`)
  }

  async getIngredients(limit = 10, page = 1): Promise<PayloadResponse<Ingredient>> {
    return this.request<PayloadResponse<Ingredient>>(`/ingredients?limit=${limit}&page=${page}`)
  }

  // Globals
  async getHeader(): Promise<HeaderGlobal> {
    return this.request<HeaderGlobal>('/globals/header')
  }

  async getFooter(): Promise<FooterGlobal> {
    return this.request<FooterGlobal>('/globals/footer')
  }

  // Pages
  async getPages(limit = 10, page = 1): Promise<PayloadResponse<Page>> {
    return this.request<PayloadResponse<Page>>(`/pages?limit=${limit}&page=${page}`)
  }

  async getPage(slug: string): Promise<Page> {
    const response = await this.request<PayloadResponse<Page>>(`/pages?where[slug][equals]=${slug}&limit=1`)
    if (response.docs.length === 0) {
      throw new PayloadAPIError(`Page with slug "${slug}" not found`, 404)
    }
    return response.docs[0]
  }

  async getPageById(id: string): Promise<Page> {
    return this.request<Page>(`/pages/${id}`)
  }

  // Utility method to get full media URL
  getMediaURL(mediaItem: { url?: string } | string): string {
    if (typeof mediaItem === 'string') {
      return mediaItem.startsWith('http') ? mediaItem : `${this.baseURL}${mediaItem}`
    }
    
    if (mediaItem?.url) {
      return mediaItem.url.startsWith('http') ? mediaItem.url : `${this.baseURL}${mediaItem.url}`
    }
    
    return ''
  }
}

// Create and export singleton instance
export const payloadApi = new PayloadAPIClient()

// Export error class for error handling
export { PayloadAPIError }

// Export types for convenience
export type { PayloadResponse, PayloadError }