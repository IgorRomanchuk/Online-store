import { Navigate, useRoutes } from 'react-router-dom'

import Layout from './layouts/Layout'
import About from './pages/About'
import Cart from './pages/cart/Cart'
import Home from './pages/Home'
import Products from './pages/products/Products'

function Routes() {
  return useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <Navigate to="home" /> },
        {
          path: 'home',
          element: <Home />,
        },
        {
          path: 'products',
          element: <Products />,
        },
        {
          path: 'about',
          element: <About />,
        },
        {
          path: 'cart',
          element: <Cart />,
        },
      ],
    },
  ])
}

export default Routes
