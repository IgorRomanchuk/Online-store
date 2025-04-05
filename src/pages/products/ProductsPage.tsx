import { setActiveNav } from '@app/store/navSlice'
import { fetchProducts } from '@app/store/productsSlice'
import CheckboxForm from '@features/products/CheckboxForm'
import Products from '@features/products/Proucts'
import LinearProgress from '@mui/material/LinearProgress'
import { useAppDispatch } from '@shared/hooks/useAppDispatch'
import { useAppSelector } from '@shared/hooks/useAppSelector'
import SelectProducts from 'features/products/SelectProducts'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import s from './products.module.scss'

export const ProductsPage = () => {
  const { products, status, error } = useAppSelector((state) => state.products)

  const dispatch = useAppDispatch()

  const location = useLocation()

  useEffect(() => {
    dispatch(setActiveNav(location.pathname.replace('/', '')))
    if (!products.length) dispatch(fetchProducts())
  }, [])

  if (error) {
    return <h1 style={{ marginTop: '100px' }}>An error occurred: {error}</h1>
  }

  if (status === 'loading') {
    return <LinearProgress className={s.linearProgress} />
  }

  return (
    <div>
      <div className={s.wrap}>
        <SelectProducts />
        <CheckboxForm />
      </div>
      <Products />
    </div>
  )
}
