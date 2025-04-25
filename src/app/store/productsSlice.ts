import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductsApi } from '@shared/api/products.api'
import { FetchStatus } from '@shared/models/fetchStatus.enum'
import { ProductModel } from '@shared/models/product.model'
import { ProductsState } from '@shared/models/product.model'

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
  ProductModel[],
  undefined,
  { rejectValue: string }
>('products/fetchProducts', async function (_, { rejectWithValue }) {
  try {
    return await ProductsApi.get()
  } catch (err: any) {
    return rejectWithValue(
      err instanceof Error ? err.message : 'Failed to fetch products',
    )
  }
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
    selectProduct(state, action: PayloadAction<ProductModel>) {
      state.product = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = FetchStatus.LOADING
        state.error = null
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = FetchStatus.RESOLVED
        state.products = action.payload
        state.cloneProducts = action.payload

        state.products.map((item) => {
          if (!state.category.includes(item.category)) {
            state.category.push(item.category)
          }
        })
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = FetchStatus.REJECTED
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
