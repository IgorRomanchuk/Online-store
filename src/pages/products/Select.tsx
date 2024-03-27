import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import * as React from 'react'
import { useDispatch } from 'react-redux'

import {
  filterProductsByPrice,
  filterProductsByRating,
} from '../../store/productsSlice'
import s from './select.module.scss'

export default function BasicSelect() {
  const dispatch = useDispatch()
  const [sort, setSort] = React.useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setSort(event.target.value as string)
  }

  return (
    <Box
      className={s.container}
      sx={{
        display: 'inline-block',
        minWidth: 150,
        marginTop: '20px',
        marginBottom: '5px',
        marginRight: '20px',
        outline: 'none',
      }}
    >
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
          <MenuItem
            onClick={() =>
              dispatch(
                filterProductsByRating({ firstValue: -1, secondValue: 1 }),
              )
            }
            value={'Avg. Customer Review'}
          >
            Avg. Customer Review
          </MenuItem>
          <MenuItem
            onClick={() =>
              dispatch(
                filterProductsByPrice({ firstValue: -1, secondValue: 1 }),
              )
            }
            value={'Price: High to Low'}
          >
            Price: High to Low
          </MenuItem>
          <MenuItem
            onClick={() =>
              dispatch(
                filterProductsByPrice({ firstValue: 1, secondValue: -1 }),
              )
            }
            value={'Price: Low to High'}
          >
            Price: Low to High
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}
