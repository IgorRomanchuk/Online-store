import { addProduct } from '@features/cart/store/cartSlice'
import { useAppDispatch } from '@shared/hooks/useAppDispatch'
import { ProductModel } from '@shared/models/product.model'
import AddItemButton from '@shared/ui/add-item-button'
import Rating from '@shared/ui/rating'
import { FC } from 'react'

import s from './product-body.module.scss'

interface Props {
  product: ProductModel
}

export const ProductBody: FC<Props> = ({ product }) => {
  const dispatch = useAppDispatch()

  const { title, description, rating, price } = product

  return (
    <div>
      <p className={s.title}>{title}</p>
      <p className={s.description}>{description}</p>
      <div className={s.ratingContainer}>
        <Rating rating={rating.rate} ratingSize={30} />
      </div>
      <p className={s.price}>{`${price} $`}</p>
      <AddItemButton onAddItem={() => dispatch(addProduct(product))} />
    </div>
  )
}
