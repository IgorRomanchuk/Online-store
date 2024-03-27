import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import LinearProgress from '@mui/material/LinearProgress'
import { useEffect } from 'react'
import Ratings from 'react-ratings-declarative'
import { useNavigate } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../hooks'
import { addProduct } from '../../store/cartSlice'
import { setActiveNav } from '../../store/navSlice'
import {
  addSelectedCategory,
  fetchProducts,
  removeSelectedCategory,
  selectProduct,
} from '../../store/productsSlice'
import { Product } from '../../types/Product'
import s from './index.module.scss'
import Select from './Select'

const Products = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { products, category, status, error } = useAppSelector(
    (state) => state.products,
  )
  useEffect(() => {
    const url = window.location.href.split('/')
    dispatch(setActiveNav(url[url.length - 1]))
    if (!products.length) dispatch(fetchProducts())
  }, [])
  if (error) {
    return <h1 style={{ marginTop: '100px' }}>An error occed: {error}</h1>
  }
  return (
    <>
      {status === 'loading' ? (
        <LinearProgress />
      ) : (
        <div className={s.container}>
          <div className={s.wrap}>
            <Select />
            <FormGroup style={{ flexDirection: 'row' }}>
              {category.map((item: string) => (
                <FormControlLabel
                  key={item}
                  control={<Checkbox />}
                  label={item}
                  onClick={(e) => {
                    if ((e.target as HTMLInputElement).checked) {
                      dispatch(addSelectedCategory(item))
                    } else {
                      dispatch(removeSelectedCategory(item))
                    }
                  }}
                />
              ))}
            </FormGroup>
          </div>
          <div className={s.productsContainer}>
            {products.length &&
              products.map((item: Product) => (
                <div key={item.id} className={s.cardProduct}>
                  <div className={s.imageContainer}>
                    <img
                      onClick={() => {
                        dispatch(selectProduct(item))
                        navigate(`./${item.id}`)
                      }}
                      style={{ cursor: 'pointer' }}
                      src={item.image}
                      alt={item.title}
                      height={200}
                      width={150}
                    />
                  </div>
                  <div>
                    <Ratings
                      rating={item.rating.rate}
                      widgetRatedColors="rgb(255 160 44)"
                      widgetSpacings="0"
                    >
                      {[...Array(5)].map((_, i) => (
                        <Ratings.Widget key={i} widgetDimension="20px" />
                      ))}
                    </Ratings>
                    <span style={{ marginLeft: '5px' }}>
                      {item.rating.rate}
                    </span>
                    <p
                      onClick={() => {
                        dispatch(selectProduct(item))
                        navigate(`./${item.id}`)
                      }}
                      className={s.title}
                    >
                      {item.title}
                    </p>
                    <p className={s.price}>{`${item.price} $`}</p>
                  </div>
                  <button
                    onClick={() => {
                      dispatch(addProduct(item))
                    }}
                    className={s.button}
                  >
                    Add to cart
                  </button>
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  )
}

export default Products
