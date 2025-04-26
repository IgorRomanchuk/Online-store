import MainDetailsCart from 'features/cart/components/MainDetailsCart'
import PurchaseBox from 'features/cart/components/PurchaseBox'

import s from './cart-page.module.scss'

export const CartPage = () => {
  return (
    <div className={s.container}>
      <MainDetailsCart />
      <PurchaseBox />
    </div>
  )
}
