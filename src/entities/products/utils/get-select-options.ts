import {
  filterProductsByPrice,
  filterProductsByRating,
} from '@app/store/productsSlice'
import { SelectOptionsModel } from '@entities/products/models/select-options.model'
import { useDispatch } from 'react-redux'

export const getSelectOptions = (): SelectOptionsModel[] => {
  const dispatch = useDispatch()

  const onFilterByRating = () => {
    dispatch(filterProductsByRating({ firstValue: -1, secondValue: 1 }))
  }

  const onFilterByPrice = (firstValue: number, secondValue: number) => {
    dispatch(filterProductsByPrice({ firstValue, secondValue }))
  }

  return [
    {
      onClick: onFilterByRating,
      value: 'Avg. Customer Review',
    },
    {
      onClick: () => onFilterByPrice(-1, 1),
      value: 'Price: High to Low',
    },
    {
      onClick: () => onFilterByPrice(1, -1),
      value: 'Price: Low to High',
    },
  ]
}
