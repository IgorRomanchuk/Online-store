import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { useAppDispatch } from '../../hooks'
import { setActiveNav } from '../../store/navSlice'
import s from './index.module.scss'
import SimpleSlider from './slider/SimpleSlider'

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
          <SimpleSlider />
        </div>
      </div>
    </div>
  )
}

export default Home
