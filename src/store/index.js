import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './todoSlice'
import setHeaderSlice from './setHeaderSlice'

export default configureStore({
  reducer: {
    todos: todoReducer,
    setHeader: setHeaderSlice
  }
})
