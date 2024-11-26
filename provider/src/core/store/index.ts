import { combineReducers, configureStore } from '@reduxjs/toolkit';
import  appSlice from './slices/appSlice';
import  userSlice from './slices/userSlice';
import cartSlice from './slices/cartSlice';

const rootReducer = combineReducers({
  app: appSlice,
  user: userSlice,
  cart: cartSlice
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;