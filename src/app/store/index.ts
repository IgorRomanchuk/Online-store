import navSlice from '@app/store/navSlice'
import cartSlice from '@features/cart/store/cartSlice'
import productSlice from '@features/product/store/productSlice'
import productsSlice from '@features/products/store/productsSlice'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    products: productsSlice,
    product: productSlice,
    cart: cartSlice,
    navigation: navSlice,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
