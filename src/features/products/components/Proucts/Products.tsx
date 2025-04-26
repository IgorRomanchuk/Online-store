import { useAppSelector } from '@shared/hooks/useAppSelector'
import { ProductModel } from '@shared/models/product.model'
import ProductCard from '@shared/ui/product-card'

import s from './products.module.scss'

export const Products = () => {
  const { products } = useAppSelector((state) => state.products)

  return (
    <div className={s.productsContainer}>
      {products.length &&
        products.map((item: ProductModel) => (
          <ProductCard key={item.id} product={item} rating addProductButton />
        ))}
    </div>
  )
}
