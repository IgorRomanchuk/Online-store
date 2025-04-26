import CartModal from '@features/cart/components/CartModal'
import { useAppSelector } from '@shared/hooks/useAppSelector'

import s from './purchase-box.module.scss'

export const PurchaseBox = () => {
  const { sum } = useAppSelector((state) => state.cart)

  return (
    <div className={s.purchaseContainer}>
      <div className={s.purchaseCard}>
        <p className={s.purchasePrice}>Total: {sum ? sum.toFixed(2) : 0} $</p>
        <CartModal />
      </div>
    </div>
  )
}
