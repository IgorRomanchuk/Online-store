import { setActiveNav } from '@app/store/navSlice'
import { useAppDispatch } from '@shared/hooks/useAppDispatch'
import { useNavigate } from 'react-router-dom'

import s from './not-found.module.scss'

export const NotFoundPage = () => {
  const navigate = useNavigate()

  const dispatch = useAppDispatch()

  const navigateToHome = () => {
    navigate('/')
    dispatch(setActiveNav('home'))
  }

  return (
    <div className={s.container}>
      <h3>
        Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve
        mistyped the URL? Be sure to check your spelling.
      </h3>
      <button className={s.button} onClick={navigateToHome}>
        Go to home
      </button>
    </div>
  )
}
