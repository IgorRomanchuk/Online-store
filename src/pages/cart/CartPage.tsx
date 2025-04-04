import MainDetailsCart from '@features/cart/MainDetailsCart'
import PurchaseBox from '@features/cart/PurchaseBox'

import s from './cart-page.module.scss'

export const CartPage = () => {
  return (
    <div className={s.container}>
      <MainDetailsCart />
      <PurchaseBox />
    </div>
  )
}
