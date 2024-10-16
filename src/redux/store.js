import { configureStore } from '@reduxjs/toolkit'
import todoSlice  from './todoslice'

export const store= configureStore({
  reducer: {
    todo: todoSlice,
  },
})

export default store;