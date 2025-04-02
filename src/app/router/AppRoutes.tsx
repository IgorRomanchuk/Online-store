import Cart from '@pages/cart'
import Home from '@pages/home'
import NotFound from '@pages/not-found'
import Product from '@pages/product'
import Products from '@pages/products'
import Layout from '@shared/ui/layout/Layout'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/home" />} />
        <Route path="home" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:productId" element={<Product />} />
        <Route path="cart" element={<Cart />} />

        <Route path="not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="not-found" replace />} />
      </Route>
    </Routes>
  </BrowserRouter>
)

export default AppRoutes
