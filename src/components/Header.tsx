import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import s from './header.module.css'

const Header = () => {
  const [active, setActive] = useState('')

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
          <li className={s.cartContainer}>
            <button
              onClick={() => {
                navigate('/cart')
                setActive('cart')
              }}
            >
              <ShoppingCartOutlinedIcon
                style={{
                  color: `${active === 'cart' ? 'black' : 'white'}`,
                }}
              />
            </button>
            <div className={s.countProduct}></div>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
