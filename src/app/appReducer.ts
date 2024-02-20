import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Theme } from 'types'
import { RootState } from './store'

interface ViewerManagerSlice {
  theme: Theme
  showExplorer: boolean
}

const initialState: ViewerManagerSlice = {
  theme: 'light',
  showExplorer: false,
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload
      window.localStorage.setItem('theme', action.payload)
    },
    toggleExplorer: (state, action: PayloadAction<boolean>) => {
      state.showExplorer = action.payload
    },
  },
})

/* ------------ Actions ------------ */

export const { setTheme, toggleExplorer } = appSlice.actions

/* ------------ Selectors ------------ */

export const getCurrentTheme = (state: RootState) => state.app.theme
export const getExplorerState = (state: RootState) => state.app.showExplorer

export default appSlice.reducer
