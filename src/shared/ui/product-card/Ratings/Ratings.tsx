import { FC } from 'react'
import Ratings from 'react-ratings-declarative'

import s from './ratings.module.scss'

interface Props {
  rating: number
}

export const Rating: FC<Props> = ({ rating }) => {
  return (
    <div className={s.ratingContainer}>
      <Ratings
        rating={rating}
        widgetRatedColors="rgb(255 160 44)"
        widgetSpacings="0"
      >
        {[...Array(5)].map((_, i) => (
          <Ratings.Widget key={i} widgetDimension="20px" />
        ))}
      </Ratings>
      <span className={s.rateTitle}>{rating}</span>
    </div>
  )
}
