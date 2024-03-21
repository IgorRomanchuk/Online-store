import { configureStore } from '@reduxjs/toolkit'

import cartSlice from './cartSlice'
import navSlice from './navSlice'
import productsSlice from './productsSlice'

const store = configureStore({
  reducer: {
    products: productsSlice,
    cart: cartSlice,
    navigation: navSlice,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
