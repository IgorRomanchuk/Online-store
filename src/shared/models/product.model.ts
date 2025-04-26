export type ProductModel = {
  category: string
  count?: number
  description: string
  id: number
  image: string
  price: number
  rating: {
    rate: number
    count: number
  }
  title: string
}
