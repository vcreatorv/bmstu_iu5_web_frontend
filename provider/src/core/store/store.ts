import { configureStore } from '@reduxjs/toolkit';
import providerServiceReducer from './slices/providerServiceSlice';

export const store = configureStore({
  reducer: {
    providerService: providerServiceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;