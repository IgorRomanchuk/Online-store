import { removeProduct } from '@app/store/cartSlice'
import { addProduct } from '@app/store/cartSlice'
import { selectProduct } from '@app/store/productsSlice'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import { useAppDispatch } from '@shared/hooks/useAppDispatch'
import { ProductModel } from '@shared/models/product.model'
import AddItemButton from '@shared/ui/add-item-button'
import { FC, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import Ratings from 'shared/ui/rating'

import { ChangeCountButtons } from './Change-count-buttons/ChangeCountButtons'
import s from './product-card.module.scss'

interface Props {
  product: ProductModel
  horizontal?: boolean
  body?: ReactNode
  rating?: boolean
  closable?: boolean
  countButtons?: boolean
  addProductButton?: boolean
  imageHeight?: number
  imageWidth?: number
  description?: boolean
  ratingSize?: number
}

export const ProductCard: FC<Props> = ({
  product,
  body,
  horizontal = false,
  rating = false,
  closable = false,
  countButtons = false,
  addProductButton = false,
  description = false,
  imageHeight = 200,
  imageWidth = 150,
  ratingSize = 20,
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
        <img src={image} alt={title} height={imageHeight} width={imageWidth} />
      </div>

      {body ? (
        body
      ) : (
        <>
          <div className={s.box}>
            <div>
              {rating && (
                <Ratings rating={product.rating.rate} ratingSize={ratingSize} />
              )}
              <h3 onClick={navigateToProduct} className={s.title}>
                {title}
              </h3>
              {description && (
                <p className={s.description}>{product.description}</p>
              )}
            </div>
            <div>
              <p className={s.price}>{`${price} $`}</p>
              {countButtons && count && (
                <ChangeCountButtons id={id} count={count} />
              )}
              {addProductButton && (
                <AddItemButton
                  onAddItem={() => dispatch(addProduct(product))}
                />
              )}
            </div>
          </div>
          {closable && (
            <button className={s.closeButton}>
              <HighlightOffIcon
                onClick={() => dispatch(removeProduct({ id }))}
              />
            </button>
          )}
        </>
      )}
    </div>
  )
}
