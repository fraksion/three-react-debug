import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ViewerManagerProps } from 'types'
import { RootState } from './store'

interface ViewerManagerSlice {
  viewerManager: ViewerManagerProps | null
}

const initialState: ViewerManagerSlice = {
  viewerManager: null,
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setViewerManager: (state, action: PayloadAction<ViewerManagerProps>) => {
      state.viewerManager = action.payload
    },
  },
})

/* ------------ Actions ------------ */

export const { setViewerManager } = appSlice.actions

/* ------------ Selectors ------------ */

export const getviewerManager = (state: RootState) => state.app.viewerManager

export default appSlice.reducer
