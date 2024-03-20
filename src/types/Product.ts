export type Product = {
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

export type ProductsState = {
  products: Product[]
  category: string[]
  selectedCategories: string[]
  cloneProducts: Product[]
  status: string | null
  error: string | null
}
