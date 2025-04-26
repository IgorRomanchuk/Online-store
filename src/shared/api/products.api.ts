import { ProductModel } from '@shared/models/product.model'
import axios from 'axios'

export const ProductsApi = {
  get: async (): Promise<ProductModel[]> => {
    return (
      await axios.get<ProductModel[]>('https://fakestoreapi.com/products')
    ).data
  },
  getProductById: async (productId: number): Promise<ProductModel> => {
    return (
      await axios.get<ProductModel>(
        `https://fakestoreapi.com/products/${productId}`,
      )
    ).data
  },
}
