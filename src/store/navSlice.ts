import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Product } from '../types/Product'

const initialState: any = {
  nav: null,
}

const navSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setActiveNav(state, action) {
      state.nav = action.payload
    },
  },
})

export const { setActiveNav } = navSlice.actions

export default navSlice.reducer
