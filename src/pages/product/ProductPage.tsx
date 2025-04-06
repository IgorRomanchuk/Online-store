import { selectProduct } from '@app/store/productsSlice'
import { fetchProducts } from '@app/store/productsSlice'
import { ProductBody } from '@features/product/ProductBody/ProductBody'
import { useAppDispatch } from '@shared/hooks/useAppDispatch'
import { useAppSelector } from '@shared/hooks/useAppSelector'
import { ProductModel } from '@shared/models/product.model'
import ProductCard from '@shared/ui/product-card'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import s from './product.module.scss'

export const ProductPage = () => {
  const navigate = useNavigate()

  const { productId } = useParams()

  const { product, products } = useAppSelector((state) => state.products)

  const dispatch = useAppDispatch()

  const getProduct = () => {
    const index = products.findIndex(
      (product: ProductModel) => productId && product.id === +productId,
    )
    if (index === -1) {
      navigate('/not-found')
    } else {
      dispatch(selectProduct(products[index]))
    }
  }

  useEffect(() => {
    if (!products.length) {
      dispatch(fetchProducts())
    } else {
      getProduct()
    }
  }, [products])

  return (
    <>
      {product && (
        <div className={s.container}>
          <button className={s.button} onClick={() => navigate('/products')}>
            Back to all products
          </button>

          <ProductCard
            imageHeight={400}
            imageWidth={350}
            product={product}
            horizontal
            body={<ProductBody product={product} />}
          />
        </div>
      )}
    </>
  )
}
