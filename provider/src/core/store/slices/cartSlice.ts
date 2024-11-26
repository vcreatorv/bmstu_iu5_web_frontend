import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ConnectionRequestDTO, ProviderDutyInRequestDTO } from '../../api/API';


interface ConnectionRequestState {
  services: ProviderDutyInRequestDTO[];
  totalPrice: number;
  consumer: string;
  phoneNumber: string;
  id: number | 0;
}

const initialState: ConnectionRequestState = {
  services: [],
  totalPrice: 0,
  consumer: '',
  phoneNumber: '',
  id: 0,
};

const connectionRequestSlice = createSlice({
  name: 'connectionRequest',
  initialState,
  reducers: {
    initializeConnectionRequest: (state, action: PayloadAction<ConnectionRequestDTO>) => {
      state.services = action.payload.providerServiceList || [];
      state.totalPrice = calculateTotalPrice(state.services);
      state.consumer = action.payload.consumer || '';
      state.phoneNumber = action.payload.phoneNumber || '';
      state.id = action.payload.id || 0;
    },
    addToConnectionRequest: (state, action: PayloadAction<ProviderDutyInRequestDTO>) => {
      const existingService = state.services.find(service => service.id === action.payload.id);
      if (existingService) {
        existingService.amount = (existingService.amount || 1) + 1;
      } 
      else {
        state.services.push({ ...action.payload, amount: 1 });
      }
      state.totalPrice = calculateTotalPrice(state.services);
    },
    updateConnectionRequestService: (state, action: PayloadAction<{ id: number; amount: number }>) => {
      const service = state.services.find(service => service.id === action.payload.id);
      if (service) {
        service.amount = action.payload.amount;
      }
      state.totalPrice = calculateTotalPrice(state.services);
    },
    removeFromConnectionRequest: (state, action: PayloadAction<number>) => {
      state.services = state.services.filter(service => service.id !== action.payload);
      state.totalPrice = calculateTotalPrice(state.services);
    },
    updateConsumer: (state, action: PayloadAction<string>) => {
      state.consumer = action.payload;
    },
    updatePhoneNumber: (state, action: PayloadAction<string>) => {
      state.phoneNumber = action.payload;
    },
    clearConnectionRequest: (state) => {
      return initialState;
    },
  },
});

const calculateTotalPrice = (services: ProviderDutyInRequestDTO[]): number => {
  return services.reduce((total, service) => total + ((service.price || 0) * (service.amount || 1)), 0);
};

export const { 
  initializeConnectionRequest,
  addToConnectionRequest, 
  updateConnectionRequestService, 
  removeFromConnectionRequest, 
  updateConsumer,
  updatePhoneNumber,
  clearConnectionRequest 
} = connectionRequestSlice.actions;

export default connectionRequestSlice.reducer;

