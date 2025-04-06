import NavBar from '@shared/ui/header/components/NavBar'
import { useNavigate } from 'react-router-dom'

import s from './header.module.scss'

export const Header = () => {
  const navigate = useNavigate()

  return (
    <header className={s.header}>
      <div className={s.container}>
        <h1 className={s.title}>
          <button className={s.button} onClick={() => navigate('/home')}>
            OnlineStore
          </button>
        </h1>
        <NavBar />
      </div>
    </header>
  )
}
