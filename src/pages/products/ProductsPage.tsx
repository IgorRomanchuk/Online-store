import { setActiveNav } from '@app/store/navSlice'
import {
  addSelectedCategory,
  fetchProducts,
  removeSelectedCategory,
} from '@app/store/productsSlice'
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import LinearProgress from '@mui/material/LinearProgress'
import { useAppDispatch } from '@shared/hooks/useAppDispatch'
import { useAppSelector } from '@shared/hooks/useAppSelector'
import { ProductModel } from '@shared/models/product.model'
import SelectProducts from 'features/products/SelectProducts'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ProductCard from 'shared/ui/product-card'

import s from './products.module.scss'

export const ProductsPage = () => {
  const dispatch = useAppDispatch()

  const location = useLocation()

  const { products, category, status, error } = useAppSelector(
    (state) => state.products,
  )

  useEffect(() => {
    dispatch(setActiveNav(location.pathname.replace('/', '')))
    if (!products.length) dispatch(fetchProducts())
  }, [])

  if (error) {
    return <h1 style={{ marginTop: '100px' }}>An error occurred: {error}</h1>
  }

  return (
    <>
      {status === 'loading' ? (
        <LinearProgress />
      ) : (
        <div className={s.container}>
          <div className={s.wrap}>
            <SelectProducts />
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
              products.map((item: ProductModel) => (
                <ProductCard
                  key={item.id}
                  product={item}
                  rating
                  addProductButton
                />
              ))}
          </div>
        </div>
      )}
    </>
  )
}
