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
    category: [],
    selectedCategories: [],
    newArr: [],
    loading: true,
    error: null,
  },
  reducers: {
    addSelectedCategory(state, action) {
      state.selectedCategories.push(action.payload)
      productsSlice.caseReducers.filterByCategory(state)
    },

    removeSelectedCategory(state, action) {
      state.selectedCategories = state.selectedCategories.filter(
        (item) => item !== action.payload,
      )
      productsSlice.caseReducers.filterByCategory(state)
    },
    filterProductsByPrice(state, action) {
      state.products.sort((a, b) =>
        a.price > b.price
          ? action.payload.firstValue
          : action.payload.secondValue,
      )
      state.newArr.sort((a, b) =>
        a.price > b.price
          ? action.payload.firstValue
          : action.payload.secondValue,
      )
    },
    filterProductsByRating(state, action) {
      state.products.sort((a, b) =>
        a.rating.rate > b.rating.rate
          ? action.payload.firstValue
          : action.payload.secondValue,
      )
      state.newArr.sort((a, b) =>
        a.rating.rate > b.rating.rate
          ? action.payload.firstValue
          : action.payload.secondValue,
      )
    },
    filterByCategory(state) {
      state.products = state.newArr.filter((item) =>
        state.selectedCategories.includes(item.category),
      )
      if (!state.products.length) state.products = state.newArr
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true
    }),
      builder.addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false
        state.products = action.payload
        state.newArr = action.payload
        // add category
        state.products.map((item) => {
          if (!state.category.includes(item.category)) {
            state.category.push(item.category)
          }
        })
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

export const {
  filterProductsByPrice,
  filterProductsByRating,
  filterByCategory,
  addSelectedCategory,
  removeSelectedCategory,
} = productsSlice.actions

export default productsSlice.reducer
