import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import s from './header.module.css'

const Header = () => {
  const [active, setActive] = useState('')

  const count = useSelector((state: any) => state.cart.cart)

  const navigate = useNavigate()

  useEffect(() => {
    const url = window.location.href.split('/')
    setActive(url[url.length - 1])
  }, [])
  return (
    <header className={s.header}>
      <h1 className={s.title}>
        <button className={s.button} onClick={() => navigate('/home')}>
          OnlineStore
        </button>
      </h1>
      <nav>
        <ul className={s.navigation}>
          <li style={{ color: `${active === 'home' ? 'black' : 'white'}` }}>
            <button
              onClick={() => {
                navigate('/home')
                setActive('home')
              }}
            >
              Home
            </button>
          </li>
          <li style={{ color: `${active === 'products' ? 'black' : 'white'}` }}>
            <button
              onClick={() => {
                navigate('/products')
                setActive('products')
              }}
            >
              Products
            </button>
          </li>
          <li style={{ color: `${active === 'about' ? 'black' : 'white'}` }}>
            <button
              onClick={() => {
                navigate('/about')
                setActive('about')
              }}
            >
              About us
            </button>
          </li>
          <li
            className={s.cartContainer}
            onClick={() => {
              navigate('/cart')
              setActive('cart')
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
