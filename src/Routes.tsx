import { Navigate, useRoutes } from 'react-router-dom'

import Layout from './layouts/Layout'
import Cart from './pages/cart/Cart'
import Home from './pages/home/Home'
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
          path: 'cart',
          element: <Cart />,
        },
      ],
    },
  ])
}

export default Routes
