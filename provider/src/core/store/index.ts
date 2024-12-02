import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import appReducer from './slices/appSlice';
import connectionRequestReducer from './slices/connectionRequestSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    app: appReducer,
    connectionRequest: connectionRequestReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;