import { ProductModel } from './product.model'

export type CartState = {
  cart: Required<ProductModel>[]
  sum: number
}
