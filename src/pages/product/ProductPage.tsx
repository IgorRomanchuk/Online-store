import { ProductBody } from '@features/product/components/ProductBody/ProductBody'
import { fetchProduct } from '@features/product/store/productSlice'
import LinearProgress from '@mui/material/LinearProgress'
import { useAppDispatch } from '@shared/hooks/useAppDispatch'
import { useAppSelector } from '@shared/hooks/useAppSelector'
import { FetchStatus } from '@shared/models/fetchStatus.enum'
import ProductCard from '@shared/ui/product-card'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import s from './product.module.scss'

export const ProductPage = () => {
  const navigate = useNavigate()

  const { productId } = useParams()

  const { product, status } = useAppSelector((state) => state.product)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchProduct(Number(productId)))
  }, [])

  if (status === FetchStatus.LOADING) {
    return <LinearProgress className={s.linearProgress} />
  }

  return (
    <div className={s.container}>
      {Object.keys(product).length && (
        <>
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
        </>
      )}
    </div>
  )
}
