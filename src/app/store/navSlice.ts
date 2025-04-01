import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Nav = {
  nav: string | null
}

const initialState: Nav = {
  nav: null,
}

const navSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setActiveNav(state, action: PayloadAction<string | null>) {
      state.nav = action.payload
    },
  },
})

export const { setActiveNav } = navSlice.actions

export default navSlice.reducer
