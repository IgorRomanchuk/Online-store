import { ProductState } from '@features/product/models/productStore.model'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { ProductsApi } from '@shared/api/products.api'
import { FetchStatus } from '@shared/models/fetchStatus.enum'
import { ProductModel } from '@shared/models/product.model'

const initialState: ProductState = {
  product: {} as ProductModel,
  status: null,
  error: null,
}

export const fetchProduct = createAsyncThunk<
  ProductModel,
  number,
  { rejectValue: string }
>('product/fetchProduct', async function (productId, { rejectWithValue }) {
  try {
    return await ProductsApi.getProductById(productId)
  } catch (err) {
    return rejectWithValue(
      err instanceof Error ? err.message : 'Failed to fetch product',
    )
  }
})

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.status = FetchStatus.LOADING
        state.error = null
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.status = FetchStatus.RESOLVED
        state.product = action.payload
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.status = FetchStatus.REJECTED
        state.error = action.payload as string
      })
  },
})

export default productSlice.reducer
