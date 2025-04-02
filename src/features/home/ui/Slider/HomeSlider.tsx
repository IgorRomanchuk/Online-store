import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { sliderImages } from '@shared/constants/slider-images'
import Slider, { CustomArrowProps } from 'react-slick'

import s from './home-slider.module.scss'

function SampleNextArrow(props: CustomArrowProps) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, right: '1%', zIndex: '100' }}
      onClick={onClick}
    />
  )
}

function SamplePrevArrow(props: CustomArrowProps) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, left: '1%', zIndex: '100' }}
      onClick={onClick}
    />
  )
}

function HomeSlider() {
  const settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    autoplaySpeed: 4000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }
  return (
    <div className={s.container}>
      <Slider {...settings}>
        {sliderImages.map((item) => (
          <div className={s.imageContainer} key={item.src}>
            <img src={item.src} className={s.image} alt="image" />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default HomeSlider
