import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async function () {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    return data
  },
)

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    status: null,
    error: null,
  },
  reducers: {
    getProducts(state, action) {
      return state
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.status = 'loading'
    }),
      builder.addCase(fetchProducts.fulfilled, (state, action) => {
        console.log(action.payload)
        state.status = 'resolve'
        state.products = action.payload
      })
  },
  // extraReducers: {
  // [fetchProducts.pending]: (state) => {
  //   state.status = 'loading'
  //   state.error = null
  // },
  // [fetchProducts.fulfilled]: (state, action) => {
  //   state.status = 'resolve'
  //   state.products = action.payload
  // },
  // [fetchProducts.rejected]: (state, action) => {},
  // },
})

export const { getProducts } = productsSlice.actions

export default productsSlice.reducer
