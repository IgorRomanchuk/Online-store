import SliderNextArrow from 'features/home/SliderNextArrow'
import SliderPrevArrow from 'features/home/SliderPrevArrow'

export const sliderSettings = {
  arrows: false,
  infinite: true,
  speed: 500,
  autoplaySpeed: 4000,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SliderNextArrow />,
  prevArrow: <SliderPrevArrow />,
}
