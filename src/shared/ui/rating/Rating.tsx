import { FC } from 'react'
import Ratings from 'react-ratings-declarative'

import s from './rating.module.scss'

interface Props {
  rating: number
  ratingSize?: number
}

export const Rating: FC<Props> = ({ rating, ratingSize = 20 }) => {
  return (
    <div className={s.ratingContainer}>
      <Ratings
        rating={rating}
        widgetRatedColors="rgb(255 160 44)"
        widgetSpacings="0"
      >
        {[...Array(5)].map((_, i) => (
          <Ratings.Widget key={i} widgetDimension={`${ratingSize}px`} />
        ))}
      </Ratings>
      <span className={s.rateTitle}>{rating}</span>
    </div>
  )
}
