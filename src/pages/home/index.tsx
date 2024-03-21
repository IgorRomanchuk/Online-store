import { useNavigate } from 'react-router-dom'

import s from './index.module.css'
import SimpleSlider from './slider/SimpleSlider'

const Home = () => {
  const navigate = useNavigate()
  return (
    <div className={s.container}>
      <div className={s.wrap}>
        <div className={s.titleContainer}>
          <h1 className={s.title}>The best products only from us</h1>
          <button className={s.button} onClick={() => navigate('../products')}>
            Start shopping
          </button>
        </div>
        <div>
          <SimpleSlider />
        </div>
      </div>
    </div>
  )
}

export default Home
