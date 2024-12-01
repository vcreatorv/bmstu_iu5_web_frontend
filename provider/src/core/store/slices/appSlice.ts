import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { api } from '../../api';
import { ProviderDuty } from '../../api/API';
import { ProviderServiceList as PROVIDER_SERVICE_LIST_MOCK } from '../../mock/providerServicesList';


interface ProviderServiceState {
  searchTitle: string;
  tariffType: boolean | null;
  providerServiceList: ProviderDuty[]
  filterConnectionRequestStatus?: string;
  filterConnectionRequestStartDate?: string;
  filterConnectionRequestEndDate?: string;
  connectionRequestId: number;
  itemsInCart: number;
  isActive: boolean;
}

const initialState: ProviderServiceState = {
  providerServiceList: [],
  searchTitle: '',
  tariffType: null,
  filterConnectionRequestStartDate: undefined,
  filterConnectionRequestStatus: undefined,
  filterConnectionRequestEndDate: undefined,
  connectionRequestId: 0,
  itemsInCart: 0,
  isActive: false
};


export const fetchProviderServices = createAsyncThunk(
  "providerServices/fetchProviderServices",
  async (
    { title, monthlyPayment }: { title?: string; monthlyPayment?: boolean | null },
    { rejectWithValue }
  ) => {
    try {
      const response = await api.getAllProviderDuties({
        title,
        monthlyPayment: monthlyPayment === null ? undefined : monthlyPayment,
      });

      return response.data;
    } catch {
      return rejectWithValue({ title, monthlyPayment });
    }
  }
);



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
  extraReducers: (builder) => {
    builder
      .addCase(fetchProviderServices.pending, (state) => {
        state.isActive = false;
      })
      .addCase(fetchProviderServices.fulfilled, (state, action) => {
        state.providerServiceList = action.payload.providerServiceList || [];
        state.connectionRequestId = action.payload.connectionRequestId || 0;
        state.itemsInCart = action.payload.itemsInCart || 0;
        state.isActive = true;
      })
      .addCase(fetchProviderServices.rejected, (state, action) => {
        const { title, monthlyPayment } = action.payload as { title?: string; monthlyPayment?: boolean | null };

        state.providerServiceList = PROVIDER_SERVICE_LIST_MOCK.filter((service) => {
          const matchesTitle = title
            ? service.title.toLowerCase().includes(title.toLowerCase())
            : true;
          const matchesMonthlyPayment =
            monthlyPayment === null || monthlyPayment === undefined
              ? true
              : service.monthlyPayment === monthlyPayment;

          return matchesTitle && matchesMonthlyPayment;
        });

        state.connectionRequestId = 0;
        state.itemsInCart = 0;
        state.isActive = true;
      });
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

