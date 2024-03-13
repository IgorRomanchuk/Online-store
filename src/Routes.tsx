import { Navigate, useRoutes } from 'react-router-dom'

import Layout from './layouts/Layout'
import About from './pages/About'
import Home from './pages/Home'
import Products from './pages/products/Products'
import ShoppingCart from './pages/ShoppingCart'

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
          element: <ShoppingCart />,
        },
      ],
    },
  ])
}

export default Routes
