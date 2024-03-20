import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Product } from './productsSlice'

type Cart = {
  cart: Product[]
  sum: number
}

const initialState: Cart = {
  cart: JSON.parse(localStorage.getItem('cart') || '[]') || [],
  sum: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    sumProducts(state) {
      state.sum = state.cart.reduce(
        (acc: number, value: Product) => acc + value.price * value.count!,
        0,
      )
    },
    addProduct(state, action: PayloadAction<Product>) {
      const index = state.cart.findIndex((item: Product) => {
        if (item.id === action.payload.id) {
          return true
        }
      })
      if (index === -1) {
        state.cart.push({ ...action.payload, count: 1 })
      } else {
        state.cart[index].count!++
      }
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    removeProduct(state, action: PayloadAction<{ id: number }>) {
      const index = state.cart.findIndex((item: Product) => {
        if (item.id === action.payload.id) {
          return true
        }
      })
      state.cart.splice(index, 1)
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    changeCount(state, action: PayloadAction<{ type: string; id: number }>) {
      const index = state.cart.findIndex((item: Product) => {
        if (item.id === action.payload.id) {
          return true
        }
      })
      if (action.payload.type === 'add') {
        state.cart[index].count!++
      } else {
        state.cart[index].count!--
        if (!state.cart[index].count) {
          state.cart.splice(index, 1)
        }
      }
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    refreshCart(state) {
      state.cart = []
      localStorage.removeItem('cart')
    },
  },
})

export const {
  addProduct,
  changeCount,
  removeProduct,
  sumProducts,
  refreshCart,
} = cartSlice.actions

export default cartSlice.reducer
