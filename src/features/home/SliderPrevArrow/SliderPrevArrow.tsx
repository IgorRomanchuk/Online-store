import { CustomArrowProps } from 'react-slick'

export const SliderPrevArrow = ({
  className,
  style,
  onClick,
}: CustomArrowProps) => (
  <div
    className={className}
    style={{ ...style, left: '1%', zIndex: '100' }}
    onClick={onClick}
  />
)
