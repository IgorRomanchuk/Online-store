import { sumProducts } from '@app/store/cartSlice'
import { setActiveNav } from '@app/store/navSlice'
import { ProductCard } from '@features/cart/ProductCard/ProductCard'
import { useAppDispatch } from '@shared/hooks/useAppDispatch'
import { useAppSelector } from '@shared/hooks/useAppSelector'
import { ProductModel } from '@shared/models/product.model'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import s from './main-details-cart.module.scss'

export const MainDetailsCart = () => {
  const location = useLocation()

  const dispatch = useAppDispatch()

  const { cart } = useAppSelector((state) => state.cart)

  useEffect(() => {
    dispatch(setActiveNav(location.pathname.replace('/', '')))
  }, [])

  useEffect(() => {
    dispatch(sumProducts())
  }, [cart])

  return (
    <div className={s.productsContainer}>
      {cart.map((product: ProductModel) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  )
}
