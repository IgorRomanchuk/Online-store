import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchProducts } from '../store/productsSlice'
import s from './products.module.css'

const Products = () => {
  const dispatch: any = useDispatch()
  const products = useSelector((state: any) => state.products.products)
  const status = useSelector((state: any) => state.products.status)
  console.log(products)

  useEffect(() => {
    if (!products.length) dispatch(fetchProducts())
  }, [])
  return (
    <div className={s.productsContainer}>
      {products.length &&
        status === 'resolve' &&
        products.map((item: any) => (
          <div key={item.id} className={s.cardProduct}>
            <div className={s.imageContainer}>
              <img src={item.image} alt={item.title} height={200} width={150} />
            </div>
            <div>
              <p className={s.title}>{item.title}</p>
              <p className={s.price}>{`${item.price} $`}</p>
            </div>
            <button className={s.button}>Add to cart</button>
          </div>
        ))}
    </div>
  )
}

export default Products
