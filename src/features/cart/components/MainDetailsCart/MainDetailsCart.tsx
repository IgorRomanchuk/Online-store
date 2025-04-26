import { setActiveNav } from '@app/store/navSlice'
import { sumProducts } from '@features/cart/store/cartSlice'
import { useAppDispatch } from '@shared/hooks/useAppDispatch'
import { useAppSelector } from '@shared/hooks/useAppSelector'
import { ProductModel } from '@shared/models/product.model'
import ProductCard from '@shared/ui/product-card'
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
        <ProductCard
          horizontal
          product={product}
          key={product.id}
          closable
          countButtons
        />
      ))}
    </div>
  )
}
