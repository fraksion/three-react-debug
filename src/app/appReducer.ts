import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Theme } from 'types'
import { RootState } from './store'

interface ViewerManagerSlice {
  theme: Theme
}

const initialState: ViewerManagerSlice = {
  theme: 'light',
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload
      window.localStorage.setItem('theme', action.payload)
    },
  },
})

/* ------------ Actions ------------ */

export const { setTheme } = appSlice.actions

/* ------------ Selectors ------------ */

export const getCurrentTheme = (state: RootState) => state.app.theme

export default appSlice.reducer
