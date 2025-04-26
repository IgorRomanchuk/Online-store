import { ProductModel } from '@shared/models/product.model'

export type ProductState = {
  product: ProductModel
  status: string | null
  error: string | null
}
