import { useRoutes } from 'react-router-dom'

import Home from './components/Home'

function Routes() {
  return useRoutes([
    {
      path: '/',
      element: <Home />,
    },
  ])
}

export default Routes
