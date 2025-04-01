import { Navigate, useRoutes } from 'react-router-dom'

import Cart from '../../pages/cart'
import Home from '../../pages/home'
import NotFound from '../../pages/not-found'
import Product from '../../pages/product/Product'
import Products from '../../pages/products'
import Layout from '../../shared/ui/layout/Layout'

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
        { path: 'not-found', element: <NotFound /> },
        { path: '*', element: <Navigate to="404" replace /> },
      ],
    },
  ])
}

export default Routes
