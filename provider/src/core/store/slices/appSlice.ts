import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { clearConnectionRequest } from './cartSlice';

interface ProviderServiceState {
  searchTitle: string;
  tariffType: boolean | null;
  connectionRequestId: number;
  itemsInCart: number;
}

const initialState: ProviderServiceState = {
  searchTitle: '',
  tariffType: null,
  connectionRequestId: 0,
  itemsInCart: 0,
};

const appSlice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    setSearchTitle: (state, action: PayloadAction<string>) => {
      state.searchTitle = action.payload;
    },
    setTariffType: (state, action: PayloadAction<boolean | null>) => {
      state.tariffType = action.payload;
    },
    setConnectionRequestData: (state, action: PayloadAction<{ connectionRequestId: number, itemsInCart?: number }>) => {
      state.connectionRequestId = action.payload.connectionRequestId;
      state.itemsInCart = action.payload.itemsInCart || 0;
    },
    incrementServicesInConnectionRequest: (state) => {
      state.itemsInCart += 1;
    },
    decrementServicesInConnectionRequest: (state) => {
      state.itemsInCart = Math.max(0, state.itemsInCart - 1);
    },
    clearAppState: (state) => {
      return initialState;
    },
  },
});

export const {
   setSearchTitle, 
   setTariffType,
   setConnectionRequestData,
   incrementServicesInConnectionRequest,
   decrementServicesInConnectionRequest,
   clearAppState,
} = appSlice.actions;

export default appSlice.reducer;

