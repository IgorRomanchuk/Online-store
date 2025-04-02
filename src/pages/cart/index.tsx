import {
  changeCount,
  refreshCart,
  removeProduct,
  sumProducts,
} from '@app/store/cartSlice'
import { setActiveNav } from '@app/store/navSlice'
import CartModal from '@features/cart/ui/CartModal/Modal'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle'
import { useAppDispatch } from '@shared/hooks/useAppDispatch'
import { useAppSelector } from '@shared/hooks/useAppSelector'
import { ProductModel } from '@shared/models/product.model'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import s from './index.module.scss'

const Cart = () => {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const { cart, sum } = useAppSelector((state) => state.cart)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setActiveNav(location.pathname.replace('/', '')))
  }, [])

  useEffect(() => {
    dispatch(sumProducts())
  }, [cart])
  return (
    <div className={s.container}>
      <div className={s.productsContainer}>
        {cart &&
          cart.map((item: ProductModel) => (
            <div key={item.id} className={s.cardProduct}>
              <div className={s.imageContainer}>
                <img
                  src={item.image}
                  alt={item.title}
                  height={200}
                  width={150}
                />
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexDirection: 'column',
                }}
              >
                <h3 className={s.title}>{item.title}</h3>
                <p className={s.price}>{`${item.price} $`}</p>
                <div className={s.changeButtons}>
                  <RemoveCircleIcon
                    className={s.addButton}
                    onClick={() =>
                      dispatch(changeCount({ type: 'remove', id: item.id }))
                    }
                  />
                  <p className={s.count}>{item.count}</p>
                  <AddCircleIcon
                    className={s.removeButton}
                    onClick={() =>
                      dispatch(changeCount({ type: 'add', id: item.id }))
                    }
                  />
                </div>
              </div>
              <button className={s.closeButton}>
                <HighlightOffIcon
                  onClick={() => dispatch(removeProduct({ id: item.id }))}
                />
              </button>
            </div>
          ))}
      </div>
      <div className={s.purchaseContainer}>
        <div className={s.purchaseCard}>
          <p className={s.purchasePrice}>Total: {sum ? sum.toFixed(2) : 0} $</p>
          <button
            onClick={() => {
              if (cart.length) {
                setOpen(true)
                dispatch(refreshCart())
              }
            }}
            className={s.priceButton}
          >
            Purchase
          </button>
        </div>
      </div>
      {open && <CartModal open={open} setOpen={setOpen} />}
    </div>
  )
}

export default Cart
