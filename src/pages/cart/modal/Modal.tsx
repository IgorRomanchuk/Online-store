import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router-dom'

import s from './modal.module.scss'

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '15px',
  boxShadow: 24,
  p: 3,
  textAlign: 'center',
}

interface IProps {
  open: boolean
  setOpen: (e: boolean) => void
}

export default function BasicModal({ open, setOpen }: IProps) {
  const navigate = useNavigate()

  const handleClose = () => setOpen(false)

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 1, textAlign: 'center', fontWeight: 500 }}
          >
            Thank you for your order!
          </Typography>
          <button onClick={() => navigate('../products')} className={s.button}>
            Back to shopping
          </button>
        </Box>
      </Modal>
    </div>
  )
}
