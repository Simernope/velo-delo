import { createSlice } from '@reduxjs/toolkit'

const setHeaderSlice = createSlice({
  name: 'setHeader',
  initialState:{
    order:[]
  },
  reducers: {
    addToOrder1 (state, action) {
      console.log(action)
      state.order.push({
        text: action.payload,
      })
      console.log(state.order)
    }
  }})

export const {addToOrder1} = setHeaderSlice.actions

export default setHeaderSlice.reducer
