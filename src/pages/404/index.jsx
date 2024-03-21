import { useNavigate } from 'react-router-dom'

import s from './404.module.css'

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <div style={{ marginTop: '100px' }}>
      <h3>
        Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve
        mistyped the URL? Be sure to check your spelling.
      </h3>
      <button className={s.button} onClick={() => navigate('/')}>
        Go to home
      </button>
    </div>
  )
}

export default NotFound
