/* Core */
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { IUserSlice } from './types'


const initialState: IUserSlice = {
  id: 0,
  name: "",
  email: ""

}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setData: (state, action) => {
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email
      }
    },
  }
})


