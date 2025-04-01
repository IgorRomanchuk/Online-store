import { ProductModel } from './product.model'

export type CartState = {
  cart: ProductModel[]
  sum: number
}
