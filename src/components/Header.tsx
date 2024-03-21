import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../hooks'
import { setActiveNav } from '../store/navSlice'
import s from './header.module.css'

const Header = () => {
  const count = useAppSelector((state) => state.cart.cart)
  const active = useAppSelector((state) => state.navigation.nav)

  const navigate = useNavigate()

  const dispatch = useAppDispatch()

  useEffect(() => {
    const url = window.location.href.split('/')
    dispatch(setActiveNav(url[url.length - 1]))
  }, [])
  return (
    <header className={s.header}>
      <h1 className={s.title}>
        <button
          className={s.button}
          onClick={() => {
            navigate('/home')
            dispatch(setActiveNav('home'))
          }}
        >
          OnlineStore
        </button>
      </h1>
      <nav>
        <ul className={s.navigation}>
          <li style={{ color: `${active === 'home' ? 'black' : 'white'}` }}>
            <button
              onClick={() => {
                navigate('/home')
                dispatch(setActiveNav('home'))
              }}
            >
              Home
            </button>
          </li>
          <li style={{ color: `${active === 'products' ? 'black' : 'white'}` }}>
            <button
              onClick={() => {
                navigate('/products')
                dispatch(setActiveNav('products'))
              }}
            >
              Products
            </button>
          </li>
          <li
            className={s.cartContainer}
            onClick={() => {
              navigate('/cart')
              dispatch(setActiveNav('cart'))
            }}
          >
            <button>
              <ShoppingCartOutlinedIcon
                style={{
                  color: `${active === 'cart' ? 'black' : 'white'}`,
                }}
              />
            </button>
            {count.length > 0 && (
              <div className={s.countProduct}>{count.length}</div>
            )}
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
