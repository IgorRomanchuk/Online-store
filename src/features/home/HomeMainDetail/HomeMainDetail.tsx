import { setActiveNav } from '@app/store/navSlice'
import { useAppDispatch } from '@shared/hooks/useAppDispatch'
import { useNavigate } from 'react-router-dom'

import s from './home-main-detail.module.scss'

export const HomeMainDetail = () => {
  const navigate = useNavigate()

  const dispatch = useAppDispatch()

  const navigateToProducts = () => {
    navigate('../products')
    dispatch(setActiveNav('products'))
  }

  return (
    <div className={s.titleContainer}>
      <h1 className={s.title}>The best products only from us</h1>
      <button className={s.button} onClick={navigateToProducts}>
        Start shopping
      </button>
    </div>
  )
}
