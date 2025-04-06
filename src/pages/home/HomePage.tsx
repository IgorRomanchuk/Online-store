import { setActiveNav } from '@app/store/navSlice'
import HomeMainDetail from '@features/home/HomeMainDetail'
import HomeSlider from '@features/home/HomeSlider/HomeSlider'
import { useAppDispatch } from '@shared/hooks/useAppDispatch'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import s from './home-page.module.scss'

export const HomePage = () => {
  const dispatch = useAppDispatch()

  const location = useLocation()

  useEffect(() => {
    dispatch(setActiveNav(location.pathname.replace('/', '')))
  }, [])

  return (
    <div className={s.container}>
      <HomeMainDetail />
      <HomeSlider />
    </div>
  )
}
