import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './recursos/produto/proSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer
  },
})