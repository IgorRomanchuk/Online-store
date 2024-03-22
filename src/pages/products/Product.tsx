import { useEffect } from 'react'
import Ratings from 'react-ratings-declarative'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../hooks'
import { addProduct } from '../../store/cartSlice'
import { selectProduct } from '../../store/productsSlice'
import { fetchProducts } from '../../store/productsSlice'
import s from './product.module.scss'

const Product = () => {
  const navigate = useNavigate()
  const { productId } = useParams()
  const { product, products } = useAppSelector((state) => state.products)
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (!products.length) dispatch(fetchProducts())
    if (!product && products.length > 0) {
      const index = products.findIndex((item: any) => {
        if (item.id == productId) {
          return true
        }
      })
      if (index === -1) {
        navigate('/404')
      } else {
        dispatch(selectProduct(products[index]))
      }
    }
  }, [products])
  return (
    <>
      {product && (
        <div className={s.container}>
          <div className={s.productsContainer}>
            <button
              className={`${s.button} ${s.back}`}
              onClick={() => navigate('../products')}
            >
              Back to all products
            </button>

            <div className={s.cardProduct}>
              <div className={s.imageContainer}>
                <img
                  src={product.image}
                  alt={product.title}
                  height={400}
                  width={350}
                />
              </div>
              <div
                style={{
                  textAlign: 'left',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <p className={s.title}>{product.title}</p>
                  <p className={s.description}>{product.description}</p>

                  <Ratings
                    rating={product.rating.rate}
                    widgetRatedColors="rgb(255 160 44)"
                    widgetSpacings="0"
                  >
                    {[...Array(5)].map((_, i) => (
                      <Ratings.Widget key={i} widgetDimension="30px" />
                    ))}
                  </Ratings>
                  <span style={{ marginLeft: '5px' }}>
                    {product.rating.rate}
                  </span>
                  <p className={s.price}>{`${product.price} $`}</p>
                </div>

                <button
                  onClick={() => {
                    dispatch(addProduct(product))
                  }}
                  className={s.button}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Product
