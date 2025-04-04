import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { sliderSettings } from '@entities/home/constants/slider-settings'
import { sliderImages } from '@shared/constants/slider-images'
import Slider from 'react-slick'

import s from './home-slider.module.scss'

const HomeSlider = () => (
  <div className={s.container}>
    <Slider {...sliderSettings}>
      {sliderImages.map((image) => (
        <div className={s.imageContainer} key={image.src}>
          <img src={image.src} className={s.image} alt="image" />
        </div>
      ))}
    </Slider>
  </div>
)

export default HomeSlider
