import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    sum: 0,
  },
  reducers: {
    sumProducts(state) {
      state.sum = state.cart.reduce(
        (acc, value) => acc + value.price * value.count,
        0,
      )
    },
    addProduct(state, action) {
      const index = state.cart.findIndex((item) => {
        if (item.id === action.payload.id) {
          return true
        }
      })
      if (index === -1) {
        state.cart.push({ ...action.payload, count: 1 })
      } else {
        state.cart[index].count++
      }
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    removeProduct(state, action) {
      const index = state.cart.findIndex((item) => {
        if (item.id === action.payload.id) {
          return true
        }
      })
      state.cart.splice(index, 1)
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    changeCount(state, action) {
      const index = state.cart.findIndex((item) => {
        if (item.id === action.payload.id) {
          return true
        }
      })
      if (action.payload.type === 'add') {
        state.cart[index].count++
      } else {
        state.cart[index].count--
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
