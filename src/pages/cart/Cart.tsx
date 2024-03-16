import AddCircleIcon from '@mui/icons-material/AddCircle'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  changeCount,
  refreshCart,
  removeProduct,
  sumProducts,
} from '../../store/cartSlice'
import s from './cart.module.css'
import BasicModal from './modal/Modal'

const Cart = () => {
  const [open, setOpen] = useState(false)

  const cart = useSelector((state: any) => state.cart.cart)
  const sum = useSelector((state: any) => state.cart.sum)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(sumProducts())
  })
  return (
    <div className={s.container}>
      <div className={s.productsContainer}>
        {cart &&
          cart.map((item: any) => (
            <div key={item.id} className={s.cardProduct}>
              <div className={s.imageContainer}>
                <img
                  src={item.image}
                  alt={item.title}
                  height={200}
                  width={150}
                />
              </div>
              <div>
                <h3 className={s.title}>{item.title}</h3>
                <p className={s.price}>{`${item.price} $`}</p>
                <div className={s.changeButtons}>
                  <RemoveCircleIcon
                    onClick={() =>
                      dispatch(changeCount({ type: 'remove', id: item.id }))
                    }
                  />
                  <p className={s.count}>{item.count}</p>
                  <AddCircleIcon
                    onClick={() =>
                      dispatch(changeCount({ type: 'add', id: item.id }))
                    }
                  />
                </div>
              </div>
              <HighlightOffIcon
                onClick={() => dispatch(removeProduct({ id: item.id }))}
              />
            </div>
          ))}
      </div>
      <div className={s.purchaseContainer}>
        <div className={s.purchaseCard}>
          <p className={s.purchasePrice}>Total: {sum ? sum.toFixed(2) : 0} $</p>
          <button
            onClick={() => {
              setOpen(true)
              dispatch(refreshCart())
            }}
            className={`${s.button} ${s.buttonPrice}`}
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
