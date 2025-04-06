import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { useAppSelector } from '@shared/hooks/useAppSelector'
import s from '@shared/ui/header/header.module.scss'
import { GetNavItemsModel } from '@shared/ui/header/modals/get-nav-items.model'
import { useNavigate } from 'react-router-dom'

export const getNavItems = (): GetNavItemsModel[] => {
  const navigate = useNavigate()

  const count = useAppSelector((state) => state.cart.cart)
  const active = useAppSelector((state) => state.navigation.nav)

  return [
    {
      value: 'home',
      title: 'Home',
    },
    {
      value: 'products',
      title: 'Products',
    },
    {
      node: (
        <li className={s.cartContainer}>
          <button onClick={() => navigate('/cart')}>
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
      ),
    },
  ]
}
