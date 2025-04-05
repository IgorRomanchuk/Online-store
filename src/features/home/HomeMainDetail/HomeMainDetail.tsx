import { setActiveNav } from '@app/store/navSlice'
import { useAppDispatch } from '@shared/hooks/useAppDispatch'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import s from './home-main-detail.module.scss'

export const HomeMainDetail = () => {
  const navigate = useNavigate()

  const dispatch = useAppDispatch()

  const location = useLocation()

  const navigateToProducts = () => {
    navigate('../products')
    dispatch(setActiveNav('products'))
  }

  useEffect(() => {
    dispatch(setActiveNav(location.pathname.replace('/', '')))
  }, [])

  return (
    <div className={s.titleContainer}>
      <h1 className={s.title}>The best products only from us</h1>
      <button className={s.button} onClick={navigateToProducts}>
        Start shopping
      </button>
    </div>
  )
}
