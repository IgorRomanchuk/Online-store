import { changeCount, removeProduct } from '@app/store/cartSlice'
import { addProduct } from '@app/store/cartSlice'
import { selectProduct } from '@app/store/productsSlice'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import { useAppDispatch } from '@shared/hooks/useAppDispatch'
import { ProductModel } from '@shared/models/product.model'
import AddItemButton from '@shared/ui/add-item-button'
import Ratings from '@shared/ui/product-card/Ratings'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { ChangeCountButtons } from './Change-count-buttons/ChangeCountButtons'
import s from './product-card.module.scss'

interface Props {
  product: ProductModel
  horizontal?: boolean
  rating?: boolean
  closable?: boolean
  countButtons?: boolean
  addProductButton?: boolean
}

export const ProductCard: FC<Props> = ({
  product,
  horizontal = false,
  rating = false,
  closable = false,
  countButtons = false,
  addProductButton = false,
}) => {
  const { image, title, price, id, count } = product

  const dispatch = useAppDispatch()

  const navigate = useNavigate()

  const navigateToProduct = () => {
    dispatch(selectProduct(product))
    navigate(`/products/${id}`)
  }

  return (
    <div className={`${s.container} ${horizontal ? s.row : s.column}`}>
      <div
        onClick={navigateToProduct}
        style={{ paddingRight: `${horizontal ? '20px' : '0'}` }}
        className={s.imageContainer}
      >
        <img src={image} alt={title} height={200} width={150} />
      </div>
      {rating && product.rating.rate && (
        <Ratings rating={product.rating.rate} />
      )}
      <div className={s.box}>
        <h3 onClick={navigateToProduct} className={s.title}>
          {title}
        </h3>
        <p className={s.price}>{`${price} $`}</p>
        {countButtons && count && <ChangeCountButtons id={id} count={count} />}
      </div>
      {closable && (
        <button className={s.closeButton}>
          <HighlightOffIcon onClick={() => dispatch(removeProduct({ id }))} />
        </button>
      )}
      {addProductButton && (
        <AddItemButton onAddItem={() => dispatch(addProduct(product))} />
      )}
    </div>
  )
}
