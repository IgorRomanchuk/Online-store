import HomeSlider from '@features/home/ui/Slider/HomeSlider'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { setActiveNav } from '../../app/store/navSlice'
import { useAppDispatch } from '../../shared/hooks/useAppDispatch'
import s from './index.module.scss'

const Home = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const location = useLocation()

  useEffect(() => {
    dispatch(setActiveNav(location.pathname.replace('/', '')))
  }, [])

  return (
    <div className={s.container}>
      <div className={s.wrap}>
        <div className={s.titleContainer}>
          <h1 className={s.title}>The best products only from us</h1>
          <button
            className={s.button}
            onClick={() => {
              navigate('../products')
              dispatch(setActiveNav('products'))
            }}
          >
            Start shopping
          </button>
        </div>
        <div style={{ margin: 'auto 0' }}>
          <HomeSlider />
        </div>
      </div>
    </div>
  )
}

export default Home
