import { useNavigate } from 'react-router-dom'

import { useAppDispatch } from '../../hooks'
import { setActiveNav } from '../../store/navSlice'
import s from './index.module.scss'

const NotFound = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  return (
    <div className={s.container}>
      <h3>
        Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve
        mistyped the URL? Be sure to check your spelling.
      </h3>
      <button
        className={s.button}
        onClick={() => {
          navigate('/')
          dispatch(setActiveNav('home'))
        }}
      >
        Go to home
      </button>
    </div>
  )
}

export default NotFound
