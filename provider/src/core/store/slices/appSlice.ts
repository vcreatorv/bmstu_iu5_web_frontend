import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface ProviderServiceState {
  searchTitle: string;
  tariffType: boolean | null;
  filterConnectionRequestStatus?: string;
  filterConnectionRequestStartDate?: string;
  filterConnectionRequestEndDate?: string;
  connectionRequestId: number;
  itemsInCart: number;
}

const initialState: ProviderServiceState = {
  searchTitle: '',
  tariffType: null,
  filterConnectionRequestStartDate: undefined,
  filterConnectionRequestStatus: undefined,
  filterConnectionRequestEndDate: undefined,
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
    setFilterConnectionRequestStatus: (state, action: PayloadAction<string>) => {
      state.filterConnectionRequestStatus = action.payload;
    },
    setFilterConnectionRequestStartDate: (state, action: PayloadAction<string>) => {
        state.filterConnectionRequestStartDate = action.payload;
    },
    setFilterConnectionRequestEndDate: (state, action: PayloadAction<string>) => {
        state.filterConnectionRequestEndDate = action.payload;
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
   setFilterConnectionRequestStatus,
   setFilterConnectionRequestStartDate,
   setFilterConnectionRequestEndDate,
   incrementServicesInConnectionRequest,
   decrementServicesInConnectionRequest,
   clearAppState,
} = appSlice.actions;

export default appSlice.reducer;

