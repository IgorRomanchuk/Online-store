import CartPage from '@pages/cart'
import HomePage from '@pages/home'
import NotFoundPage from '@pages/not-found'
import ProductPage from '@pages/product'
import ProductsPage from '@pages/products'
import Layout from '@shared/ui/layout'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/home" />} />
        <Route path="home" element={<HomePage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="products/:productId" element={<ProductPage />} />
        <Route path="cart" element={<CartPage />} />

        <Route path="not-found" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="not-found" replace />} />
      </Route>
    </Routes>
  </BrowserRouter>
)

export default AppRoutes
