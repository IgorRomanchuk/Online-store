import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import { useEffect } from 'react'
import Ratings from 'react-ratings-declarative'
import { useDispatch, useSelector } from 'react-redux'

import Select from '../../components/common/Select'
import {
  addSelectedCategory,
  fetchProducts,
  removeSelectedCategory,
} from '../../store/productsSlice'
import s from './products.module.css'

const Products = () => {
  const dispatch: any = useDispatch()
  const products = useSelector((state: any) => state.products.products)
  const category = useSelector((state: any) => state.products.category)

  useEffect(() => {
    if (!products.length) dispatch(fetchProducts())
  }, [])
  return (
    <div className={s.container}>
      <div style={{ display: 'flex', alignItems: 'end' }}>
        <Select />
        <FormGroup style={{ flexDirection: 'row' }}>
          {category.map((item: string) => (
            <FormControlLabel
              key={item}
              control={<Checkbox />}
              label={item}
              onClick={(e: any) => {
                if (e.target.checked) {
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
          products.map((item: any) => (
            <div key={item.id} className={s.cardProduct}>
              <div className={s.imageContainer}>
                <img
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
                  <Ratings.Widget widgetDimension="20px" />
                </Ratings>
                <span style={{ marginLeft: '5px' }}>{item.rating.rate}</span>
                <p className={s.title}>{item.title}</p>
                <p className={s.price}>{`${item.price} $`}</p>
              </div>
              <button className={s.button}>Add to cart</button>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Products
