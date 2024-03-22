import AddCircleIcon from '@mui/icons-material/AddCircle'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle'
import { useEffect, useState } from 'react'

import { useAppDispatch, useAppSelector } from '../../hooks'
import {
  changeCount,
  refreshCart,
  removeProduct,
  sumProducts,
} from '../../store/cartSlice'
import { Product } from '../../types/Product'
import s from './index.module.scss'
import BasicModal from './modal/Modal'

const Cart = () => {
  const [open, setOpen] = useState(false)

  const cart = useAppSelector((state) => state.cart.cart)
  const sum = useAppSelector((state) => state.cart.sum)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(sumProducts())
  })
  return (
    <div className={s.container}>
      <div className={s.productsContainer}>
        {cart &&
          cart.map((item: Product) => (
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
            className={`${s.button} ${s.priceButton}`}
          >
            Purchase
          </button>
        </div>
      </div>
      <BasicModal open={open} setOpen={setOpen} />
    </div>
  )
}

export default Cart
