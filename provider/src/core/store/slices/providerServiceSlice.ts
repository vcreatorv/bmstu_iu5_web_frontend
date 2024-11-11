import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProviderServiceState {
  searchTitle: string;
  tariffType: boolean | null;
}

const initialState: ProviderServiceState = {
  searchTitle: '',
  tariffType: null,
};

const providerServiceSlice = createSlice({
  name: 'providerService',
  initialState,
  reducers: {
    setSearchTitle: (state, action: PayloadAction<string>) => {
      state.searchTitle = action.payload;
    },
    setTariffType: (state, action: PayloadAction<boolean | null>) => {
      state.tariffType = action.payload;
    },
  },
});

export const { setSearchTitle, setTariffType } = providerServiceSlice.actions;
export default providerServiceSlice.reducer;