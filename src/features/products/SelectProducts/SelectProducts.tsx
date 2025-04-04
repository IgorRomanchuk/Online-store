import { SelectOptionsModel } from '@entities/products/models/get-select-options.model'
import { getSelectOptions } from '@entities/products/utils/get-select-options'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { useState } from 'react'

import s from './select-products.module.scss'

export const SelectProducts = () => {
  const [value, setValue] = useState('')

  const handleChange = (event: SelectChangeEvent) =>
    setValue(event.target.value)

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
          value={value}
          size="small"
          label="Sort By"
          onChange={handleChange}
        >
          {getSelectOptions().map(({ value, onClick }: SelectOptionsModel) => (
            <MenuItem key={value} onClick={onClick} value={value}>
              {value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}
