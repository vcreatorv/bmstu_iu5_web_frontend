import { combineReducers, configureStore } from '@reduxjs/toolkit';
import  providerServiceSlice from './slices/providerServiceSlice';
import  userAuthSlice from './slices/userAuthSlice';

const rootReducer = combineReducers({
  providerService: providerServiceSlice,
  userAuth: userAuthSlice
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;