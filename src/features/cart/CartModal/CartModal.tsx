import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import s from './cart-modal.module.scss'

interface Props {
  open: boolean
  setOpen: (e: boolean) => void
}

export const CartModal: FC<Props> = ({ open, setOpen }) => {
  const navigate = useNavigate()

  const handleClose = () => setOpen(false)

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={s.modalBox}>
          <Typography id="modal-modal-description">
            Thank you for your order!
          </Typography>
          <button onClick={() => navigate('../products')} className={s.button}>
            Back to shopping
          </button>
        </Box>
      </Modal>
    </>
  )
}
