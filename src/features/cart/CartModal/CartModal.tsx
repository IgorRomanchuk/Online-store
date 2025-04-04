import { refreshCart } from '@app/store/cartSlice'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import { useAppDispatch } from '@shared/hooks/useAppDispatch'
import { useAppSelector } from '@shared/hooks/useAppSelector'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import s from './cart-modal.module.scss'

export const CartModal = () => {
  const [open, setOpen] = useState(false)

  const navigate = useNavigate()

  const dispatch = useAppDispatch()

  const { cart } = useAppSelector((state) => state.cart)

  const onPurchaseClick = () => {
    if (cart.length) {
      setOpen(true)
      dispatch(refreshCart())
    }
  }

  return (
    <>
      <button onClick={onPurchaseClick} className={s.purchaseButton}>
        Purchase
      </button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={s.modalBox}>
          <Typography id="modal-modal-description">
            Thank you for your order!
          </Typography>
          <button
            onClick={() => navigate('../products')}
            className={s.backToShopping}
          >
            Back to shopping
          </button>
        </Box>
      </Modal>
    </>
  )
}
