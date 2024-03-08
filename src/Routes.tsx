import { Navigate, useRoutes } from 'react-router-dom'

import About from './components/About'
import Home from './components/Home'
import Products from './components/Products'
import Layout from './layouts/Layout'

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
      ],
    },
  ])
}

export default Routes
