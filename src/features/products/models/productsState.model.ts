import { ProductModel } from '@shared/models/product.model'

export type ProductsState = {
  products: ProductModel[]
  product: ProductModel | null
  category: string[]
  selectedCategories: string[]
  cloneProducts: ProductModel[]
  status: string | null
  error: string | null
}
