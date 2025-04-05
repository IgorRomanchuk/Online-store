import Box from '@mui/material/Box'
import Snackbar from '@mui/material/Snackbar'
import { FC, useState } from 'react'

import s from './add-item-button.module.scss'

interface Props {
  onAddItem: () => void
}

export const AddItemButton: FC<Props> = ({ onAddItem }) => {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(true)
    onAddItem()
  }

  return (
    <Box className={s.wrap}>
      <button onClick={handleClick} className={s.button}>
        Add to cart
      </button>

      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        autoHideDuration={1000}
        onClose={() => setOpen(false)}
        message="Product added to car"
      />
    </Box>
  )
}
