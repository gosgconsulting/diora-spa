import heroImage from "@/assets/hero-spa.jpg"

export interface HeroSectionProps {
  welcomeText?: string
  mainTitle?: string
  subtitle?: string
  backgroundImage?: string
}

export default function HeroSection({
  welcomeText = "Welcome to",
  mainTitle = "Diora spa",
  subtitle = "by Michelle Tran",
  backgroundImage = heroImage
}: HeroSectionProps) {
  return (
    <section className="relative h-[600px] flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="relative text-center text-white">
        <div className="space-y-2">
          <p className="font-coco text-2xl md:text-xl font-bold tracking-[0.55em] uppercase">
            {welcomeText}
          </p>
          <h1 className="font-dream text-8xl md:text-9xl font-medium leading-tight">
            {mainTitle}
          </h1>
          <p className="font-signature text-xl md:text-5xl italic">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  )
}