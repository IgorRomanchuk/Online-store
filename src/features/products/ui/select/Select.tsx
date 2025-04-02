import {
  filterProductsByPrice,
  filterProductsByRating,
} from '@app/store/productsSlice'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import s from './select.module.scss'

export default function BasicSelect() {
  const [sort, setSort] = useState('')

  const dispatch = useDispatch()

  const handleChange = (event: SelectChangeEvent) => setSort(event.target.value)

  const onFilterByRating = () => {
    dispatch(filterProductsByRating({ firstValue: -1, secondValue: 1 }))
  }

  const onFilterByPrice = (firstValue: number, secondValue: number) => {
    dispatch(filterProductsByPrice({ firstValue, secondValue }))
  }

  return (
    <Box className={s.container}>
      <FormControl fullWidth variant="standard">
        <InputLabel
          style={{ fontWeight: '600', color: 'black' }}
          id="demo-simple-select-label"
        >
          Sort By
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sort}
          size="small"
          label="Sort By"
          onChange={handleChange}
          style={{
            border: 'none',
            outline: 'none',
          }}
        >
          <MenuItem onClick={onFilterByRating} value="Avg. Customer Review">
            Avg. Customer Review
          </MenuItem>
          <MenuItem
            onClick={() => onFilterByPrice(-1, 1)}
            value="Price: High to Low"
          >
            Price: High to Low
          </MenuItem>
          <MenuItem
            onClick={() => onFilterByPrice(1, -1)}
            value="Price: Low to High"
          >
            Price: Low to High
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}
