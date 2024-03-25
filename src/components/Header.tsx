import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { useNavigate } from 'react-router-dom'

import { useAppSelector } from '../hooks'
import s from './header.module.css'

const Header = () => {
  const count = useAppSelector((state) => state.cart.cart)
  const active = useAppSelector((state) => state.navigation.nav)

  const navigate = useNavigate()

  return (
    <header className={s.header}>
      <div className={s.container}>
        <h1 className={s.title}>
          <button
            className={s.button}
            onClick={() => {
              navigate('/home')
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
                }}
              >
                Home
              </button>
            </li>
            <li
              style={{ color: `${active === 'products' ? 'black' : 'white'}` }}
            >
              <button
                onClick={() => {
                  navigate('/products')
                }}
              >
                Products
              </button>
            </li>
            <li
              className={s.cartContainer}
              onClick={() => {
                navigate('/cart')
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
      </div>
    </header>
  )
}

export default Header
