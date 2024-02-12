import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'

interface AppSlice {
  modelName: string
}

const initialState: AppSlice = {
  modelName: '',
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.modelName = action.payload
    },
  },
})

/* ------------ Actions ------------ */

export const { setName } = appSlice.actions

/* ------------ Selectors ------------ */

export const getModelName = (state: RootState) => state.app.modelName

export default appSlice.reducer
