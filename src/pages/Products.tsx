import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchProducts } from '../store/productsSlice'

const Products = () => {
  const dispatch: any = useDispatch()
  const products = useSelector((state: any) => state.products.products)

  useEffect(() => {
    if (!products.length) dispatch(fetchProducts())
  }, [])
  return <div>Products</div>
}

export default Products
