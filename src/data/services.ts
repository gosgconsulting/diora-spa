import hairWashImage from "@/assets/hair-wash.jpg"
import waxingImage from "@/assets/waxing.jpg"

export interface Service {
  title: string
  description: string
  image: string
  price: string
}

export const services: Service[] = [
  {
    title: "Hair Wash",
    description: "Luxurious hair cleansing and scalp massage with premium organic products",
    image: hairWashImage,
    price: "from $25"
  },
  {
    title: "Waxing", 
    description: "Professional waxing services using gentle, skin-friendly formulations",
    image: waxingImage,
    price: "from $35"
  }
]