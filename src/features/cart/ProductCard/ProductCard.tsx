import { changeCount, removeProduct } from '@app/store/cartSlice'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle'
import { useAppDispatch } from '@shared/hooks/useAppDispatch'
import { ProductModel } from '@shared/models/product.model'
import { FC } from 'react'

import s from './product-card.module.scss'

interface Props {
  product: ProductModel
}

export const ProductCard: FC<Props> = ({ product }) => {
  const { image, title, price, id, count } = product

  const dispatch = useAppDispatch()

  return (
    <div className={s.container}>
      <div className={s.imageContainer}>
        <img src={image} alt={title} height={200} width={150} />
      </div>
      <div className={s.box}>
        <h3 className={s.title}>{title}</h3>
        <p className={s.price}>{`${price} $`}</p>
        <div className={s.changeCountButtons}>
          <RemoveCircleIcon
            className={s.addButton}
            onClick={() => dispatch(changeCount({ type: 'remove', id }))}
          />
          <p className={s.count}>{count}</p>
          <AddCircleIcon
            className={s.removeButton}
            onClick={() => dispatch(changeCount({ type: 'add', id }))}
          />
        </div>
      </div>
      <button className={s.closeButton}>
        <HighlightOffIcon onClick={() => dispatch(removeProduct({ id }))} />
      </button>
    </div>
  )
}
