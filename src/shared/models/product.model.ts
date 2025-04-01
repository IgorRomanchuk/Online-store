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

export type ProductsState = {
  products: ProductModel[]
  product: ProductModel | null
  category: string[]
  selectedCategories: string[]
  cloneProducts: ProductModel[]
  status: string | null
  error: string | null
}
