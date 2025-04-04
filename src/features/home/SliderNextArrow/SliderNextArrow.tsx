import { CustomArrowProps } from 'react-slick'

export const SliderNextArrow = ({
  className,
  style,
  onClick,
}: CustomArrowProps) => (
  <div
    className={className}
    style={{ ...style, right: '1%', zIndex: '100' }}
    onClick={onClick}
  />
)
