import { Navigate, useRoutes } from 'react-router-dom'

import Layout from './layouts/Layout'
import NotFound from './pages/404'
import Cart from './pages/cart/Cart'
import Home from './pages/home/Home'
import Product from './pages/products/Product'
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
          path: 'products/:productId',
          element: <Product />,
        },
        {
          path: 'cart',
          element: <Cart />,
        },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="404" replace /> },
      ],
    },
  ])
}

export default Routes
