import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

import { Product } from '../types/Product'
import { ProductsState } from '../types/Product'

const initialState: ProductsState = {
  products: [],
  product: null,
  category: [],
  selectedCategories: [],
  cloneProducts: [],
  status: null,
  error: null,
}

export const fetchProducts = createAsyncThunk<
  Product[],
  undefined,
  { rejectValue: string }
>('products/fetchProducts', async function (_, { rejectWithValue }) {
  return axios
    .get('https://fakestoreapi.com/products')
    .then((res) => res.data)
    .catch((err) => rejectWithValue(err.message))
})

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addSelectedCategory(state, action) {
      state.selectedCategories.push(action.payload)
      productsSlice.caseReducers.filterByCategory(state)
    },

    removeSelectedCategory(state, action: PayloadAction<string>) {
      state.selectedCategories = state.selectedCategories.filter(
        (item) => item !== action.payload,
      )
      productsSlice.caseReducers.filterByCategory(state)
    },
    filterProductsByPrice(
      state,
      action: PayloadAction<{ firstValue: number; secondValue: number }>,
    ) {
      state.products.sort((a, b) =>
        a.price > b.price
          ? action.payload.firstValue
          : action.payload.secondValue,
      )
      state.cloneProducts.sort((a, b) =>
        a.price > b.price
          ? action.payload.firstValue
          : action.payload.secondValue,
      )
    },
    filterProductsByRating(
      state,
      action: PayloadAction<{ firstValue: number; secondValue: number }>,
    ) {
      state.products.sort((a, b) =>
        a.rating.rate > b.rating.rate
          ? action.payload.firstValue
          : action.payload.secondValue,
      )
      state.cloneProducts.sort((a, b) =>
        a.rating.rate > b.rating.rate
          ? action.payload.firstValue
          : action.payload.secondValue,
      )
    },
    filterByCategory(state) {
      state.products = state.cloneProducts.filter((item) =>
        state.selectedCategories.includes(item.category),
      )
      if (!state.products.length) state.products = state.cloneProducts
    },
    selectProduct(state, action: PayloadAction<Product>) {
      state.product = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'resolved'
        state.products = action.payload
        state.cloneProducts = action.payload
        // add category
        state.products.map((item) => {
          if (!state.category.includes(item.category)) {
            state.category.push(item.category)
          }
        })
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'rejected'
        state.error = action.payload as string
      })
  },
})

export const {
  filterProductsByPrice,
  filterProductsByRating,
  filterByCategory,
  addSelectedCategory,
  removeSelectedCategory,
  selectProduct,
} = productsSlice.actions

export default productsSlice.reducer
