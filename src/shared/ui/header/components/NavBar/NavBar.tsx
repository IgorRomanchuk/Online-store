import { useAppSelector } from '@shared/hooks/useAppSelector'
import { getNavItems } from '@shared/ui/header/utils/nav-items'
import { useNavigate } from 'react-router-dom'

import s from './nav-bar.module.scss'

export const NavBar = () => {
  const navItems = getNavItems()

  const active = useAppSelector((state) => state.navigation.nav)

  const navigate = useNavigate()

  return (
    <nav>
      <ul className={s.navigation}>
        {navItems.map(({ node, title, value }) =>
          node ? (
            node
          ) : (
            <li
              key={value}
              style={{
                color: `${active === value ? 'black' : 'white'}`,
              }}
            >
              <button onClick={() => navigate(`/${value}`)}>{title}</button>
            </li>
          ),
        )}
      </ul>
    </nav>
  )
}
