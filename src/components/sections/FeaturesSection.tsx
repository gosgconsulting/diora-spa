import { Button } from "@/components/ui/button"
import { Sparkles, Heart, Shield, Star, Leaf } from "lucide-react"
import { useFeatures } from "@/hooks/usePayload"
import { payloadApi } from "@/services/payloadApi"
import type { Feature } from "@/types/payload"

// Fallback to local data during development
import { features as fallbackFeatures } from "@/data"

export interface FeaturesSectionProps {
  title?: string
  description?: string
  backgroundColor?: string
  usePayloadData?: boolean
}

// Icon mapping for PayloadCMS icon strings
const iconMap = {
  sparkles: Sparkles,
  heart: Heart,
  shield: Shield,
  star: Star,
  leaf: Leaf,
}

export default function FeaturesSection({
  title = "Why Choose Diora spa",
  description = "Discover what makes our spa experience truly exceptional",
  backgroundColor = "#4B3022",
  usePayloadData = false
}: FeaturesSectionProps) {
  const { data: payloadData, isLoading, error } = useFeatures({
    enabled: usePayloadData
  })

  // Use PayloadCMS data if available and enabled, otherwise fall back to local data
  const features = usePayloadData && payloadData?.docs ? 
    payloadData.docs : 
    fallbackFeatures

  if (usePayloadData && isLoading) {
    return (
      <section className="py-16" style={{ backgroundColor }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-dream text-5xl font-medium text-white mb-4">{title}</h2>
            <p className="font-coco text-lg text-white/90 max-w-2xl mx-auto">
              Loading features...
            </p>
          </div>
        </div>
      </section>
    )
  }

  if (usePayloadData && error) {
    console.error('Failed to load features from PayloadCMS:', error)
    // Fall back to local data on error
  }

  return (
    <section className="py-16" style={{ backgroundColor }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-dream text-5xl font-medium text-white mb-4">{title}</h2>
          <p className="font-coco text-lg text-white/90 max-w-2xl mx-auto">
            {description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            // Handle both PayloadCMS and local data formats
            let imageUrl: string
            let IconComponent = null

            if (usePayloadData && 'icon' in feature && 'image' in feature) {
              // PayloadCMS format
              const payloadFeature = feature as Feature
              IconComponent = iconMap[payloadFeature.icon]
              imageUrl = payloadFeature.image ? payloadApi.getMediaURL(payloadFeature.image) : ""
            } else {
              // Local data format - use hardcoded images
              const images = [
                "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&h=300&fit=crop",
                "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop", 
                "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=300&fit=crop"
              ]
              imageUrl = images[index] || images[0]
            }

            return (
              <div key={feature.id || index} className="text-center">
                <div className="mb-6">
                  <img 
                    src={imageUrl} 
                    alt={feature.title}
                    className="w-full h-48 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <h3 className="font-serif text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="font-montserrat text-white/90 mb-6 leading-relaxed">{feature.description}</p>
                <Button size="lg" className="font-montserrat font-medium bg-transparent text-white border border-white hover:bg-white/10">
                  Learn More
                </Button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}