import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProviderServiceState {
  searchTitle: string;
  tariffType: boolean | null;
  connectionRequestId: number;
}

const initialState: ProviderServiceState = {
  searchTitle: '',
  tariffType: null,
  connectionRequestId: 0,
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
    setConnectionRequestData: (state, action: PayloadAction<number>) => {
      state.connectionRequestId = action.payload;
    },
  },
});

export const {
   setSearchTitle, 
   setTariffType,
   setConnectionRequestData,
} = appSlice.actions;

export default appSlice.reducer;