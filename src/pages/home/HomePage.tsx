import HomeMainDetail from '@features/home/HomeMainDetail'
import HomeSlider from '@features/home/HomeSlider/HomeSlider'

import s from './home-page.module.scss'

export const HomePage = () => {
  return (
    <div className={s.container}>
      <HomeMainDetail />
      <HomeSlider />
    </div>
  )
}
