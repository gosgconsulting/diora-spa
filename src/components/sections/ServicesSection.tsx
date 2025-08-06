import { Button } from "@/components/ui/button"
import { useServices } from "@/hooks/usePayload"
import { payloadApi } from "@/services/payloadApi"
import type { Service } from "@/types/payload"

// Fallback to local data during development
import { services as fallbackServices } from "@/data"

export interface ServicesSectionProps {
  title?: string
  description?: string
  usePayloadData?: boolean
}

export default function ServicesSection({
  title = "Our Services",
  description = "Experience our signature treatments crafted with care and expertise",
  usePayloadData = false
}: ServicesSectionProps) {
  const { data: payloadData, isLoading, error } = useServices({
    enabled: usePayloadData
  })

  // Use PayloadCMS data if available and enabled, otherwise fall back to local data
  const services = usePayloadData && payloadData?.docs ? 
    payloadData.docs : 
    fallbackServices

  if (usePayloadData && isLoading) {
    return (
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-montserrat text-4xl font-medium text-black mb-4">{title}</h2>
            <p className="font-montserrat text-lg text-muted-foreground max-w-2xl mx-auto">
              Loading services...
            </p>
          </div>
        </div>
      </section>
    )
  }

  if (usePayloadData && error) {
    console.error('Failed to load services from PayloadCMS:', error)
    // Fall back to local data on error
  }

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-montserrat text-4xl font-medium text-black mb-4">{title}</h2>
          <p className="font-montserrat text-lg text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => {
            // Handle both PayloadCMS and local data formats
            const imageUrl = usePayloadData && 'image' in service && typeof service.image === 'object' 
              ? payloadApi.getMediaURL(service.image)
              : service.image

            return (
              <div key={service.id || index} className="space-y-4">
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                  <img 
                    src={imageUrl} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30"></div>
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-6">
                    <h3 className="font-montserrat text-2xl font-semibold mb-3">{service.title}</h3>
                    <p className="font-montserrat text-sm leading-relaxed">{service.description}</p>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white font-montserrat text-xl font-bold">
                    {service.price}
                  </div>
                </div>
                <div className="flex justify-center">
                  <Button className="font-montserrat px-6 py-2 rounded-full w-fit">Explore More</Button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}