import { Outlet, useNavigate } from 'react-router-dom'

const Layout = () => {
  const navigate = useNavigate()

  return (
    <>
      <nav>
        <ul>
          <li onClick={() => navigate('/home')}>Home</li>
          <li onClick={() => navigate('/products')}>Products</li>
          <li onClick={() => navigate('/about')}>About us</li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}

export default Layout
