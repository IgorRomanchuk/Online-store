import {
  addSelectedCategory,
  removeSelectedCategory,
} from '@features/products/store/productsSlice'
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import { useAppDispatch } from '@shared/hooks/useAppDispatch'
import { useAppSelector } from '@shared/hooks/useAppSelector'
import { MouseEvent } from 'react'

export const CheckboxForm = () => {
  const dispatch = useAppDispatch()

  const { category } = useAppSelector((state) => state.products)

  const handleSelectCategory = (
    e: MouseEvent<HTMLLabelElement>,
    category: string,
  ) => {
    if ((e.target as HTMLInputElement).checked) {
      dispatch(addSelectedCategory(category))
    } else {
      dispatch(removeSelectedCategory(category))
    }
  }

  return (
    <FormGroup style={{ flexDirection: 'row' }}>
      {category.map((value: string) => (
        <FormControlLabel
          key={value}
          control={<Checkbox />}
          label={value}
          onClick={(e) => handleSelectCategory(e, value)}
        />
      ))}
    </FormGroup>
  )
}
