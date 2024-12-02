// import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { ConnectionRequestDTO, ProviderDutyInRequestDTO } from '../../api/API';
// import { api } from '../../api';
// import { AppDispatch, RootState } from '..';


// interface CartState {
//   services: ProviderDutyInRequestDTO[];
//   totalPrice: number;
//   consumer: string;
//   phoneNumber: string;
//   connectionRequestId: number | null;
//   error: string | null;
//   id: number;
// }

// const initialState: CartState = {
//   services: [],
//   totalPrice: 0,
//   consumer: '',
//   phoneNumber: '',
//   connectionRequestId: null,
//   error: null,
//   id: 0
// };



// export const loadConnectionRequest = createAsyncThunk(
//   'connectionRequest/loadConnectionRequest',
//   (connectionRequestId: number, { rejectWithValue }) => {
//     return api.getConnectionRequestById(connectionRequestId)
//       .then(response => {
//         if (response.data) {
//           return response.data;
//         } else {
//           return rejectWithValue('Ошибка при загрузке заявки');
//         }
//       })
//       .catch(error => {
//         return rejectWithValue('Ошибка при загрузке заявки');
//       });
//   }
// );

// export const updateProviderServiceAmount = createAsyncThunk(
//   'connectionRequest/updateProviderServiceAmount',
//   ({ id, amount, connectionRequestId }: { id: number; amount: number; connectionRequestId: number }, { rejectWithValue }) => {
//     return api.updateAmountInDutyRequest(id, connectionRequestId, { amount })
//       .then(() => {
//         return { id, amount };
//       })
//       .catch(error => {
//         return rejectWithValue('Ошибка при обновлении количества');
//       });
//   }
// );

// export const deleteProviderDuty = createAsyncThunk(
//   'connectionRequest/deleteProviderDuty',
//   ({ id, connectionRequestId }: { id: number; connectionRequestId: number }, { rejectWithValue }) => {
//     return api.deleteProviderDutyFromConnectionRequest(id, connectionRequestId)
//       .then(() => {
//         return id;
//       })
//       .catch(error => {
//         return rejectWithValue('Ошибка при удалении услуги из заявки');
//       });
//   }
// );

// export const submitConnectionRequest = createAsyncThunk(
//   'connectionRequest/submitConnectionRequest',
//   (
//     { connectionRequestId, consumer, phoneNumber }: { connectionRequestId: number; consumer: string; phoneNumber: string },
//     { rejectWithValue }
//   ) => {
//     return api.updateConnectionRequest(connectionRequestId, { consumer, phoneNumber })
//       .then(() => api.formConnectionRequest(connectionRequestId))
//       .then(response => {
//         if (response.status === 200) {
//           return connectionRequestId;
//         } else {
//           return rejectWithValue('Ошибка при отправке заявки');
//         }
//       })
//       .catch(() => {
//         return rejectWithValue('Ошибка при отправке заявки');
//       });
//   }
// );

// export const deleteConnectionRequest = createAsyncThunk(
//   'connectionRequest/deleteConnectionRequest',
//   async (connectionRequestId: number, { rejectWithValue }) => {
//     try {
//       const response = await api.deleteConnectionRequest(connectionRequestId);
//       if (response.status === 200) {
//         return connectionRequestId;
//       } else {
//         return rejectWithValue('Ошибка при удалении заявки');
//       }
//     } catch (error) {
//       return rejectWithValue('Ошибка при удалении заявки');
//     }
//   }
// );


// const connectionRequestSlice = createSlice({
//   name: 'connectionRequest',
//   initialState,
//   reducers: {
//     initializeConnectionRequest: (state, action: PayloadAction<ConnectionRequestDTO>) => {
//       applyInitializeConnectionRequest(state, action.payload);
//     },
//     addToConnectionRequest: (state, action: PayloadAction<ProviderDutyInRequestDTO>) => {
//       applyAddToConnectionRequest(state, action.payload);
//     },
//     updateConnectionRequestService: (state, action: PayloadAction<{ id: number; amount: number }>) => {
//       applyUpdateConnectionRequestService(state, action.payload);
//     },
//     removeFromConnectionRequest: (state, action: PayloadAction<number>) => {
//       applyRemoveFromConnectionRequest(state, action.payload);
//     },
//     updateConsumer: (state, action: PayloadAction<string>) => {
//       state.consumer = action.payload;
//     },
//     updatePhoneNumber: (state, action: PayloadAction<string>) => {
//       state.phoneNumber = action.payload;
//     },
//     clearConnectionRequest: (state) => {
//       applyClearConnectionRequest(state);
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(loadConnectionRequest.pending, (state, action) => {
//         state.error = null;
//       })
//       .addCase(loadConnectionRequest.fulfilled, (state, action) => {;
//         applyInitializeConnectionRequest(state, action.payload);
//       })
//       .addCase(loadConnectionRequest.rejected, (state, action) => {
//         state.error = action.payload as string;
//       })
//       .addCase(updateProviderServiceAmount.fulfilled, (state, action) => {
//         applyUpdateConnectionRequestService(state, action.payload);
//       })
//       .addCase(deleteProviderDuty.fulfilled, (state, action) => {
//         applyRemoveFromConnectionRequest(state, action.payload);
//       })
//       .addCase(submitConnectionRequest.fulfilled, (state, action) => {
//         applyClearConnectionRequest(state);
//       })
//       .addCase(submitConnectionRequest.rejected, (state, action) => {
//         state.error = action.payload as string;
//       })
//       .addCase(deleteConnectionRequest.pending, (state, action) => {
//         state.error = null;
//       })
//       .addCase(deleteConnectionRequest.fulfilled, (state, action) => {
//         applyClearConnectionRequest(state);
//       })
//       .addCase(deleteConnectionRequest.rejected, (state, action) => {
//         state.error = action.payload as string;
//       });
//   },
// });

// const calculateTotalPrice = (services: ProviderDutyInRequestDTO[]): number => {
//   return services.reduce((total, service) => total + ((service.price || 0) * (service.amount || 1)), 0);
// };

// function applyInitializeConnectionRequest(state: CartState, payload: ConnectionRequestDTO) {
//   state.services = payload.providerServiceList || [];
//   state.totalPrice = calculateTotalPrice(state.services);
//   state.consumer = payload.consumer || '';
//   state.phoneNumber = payload.phoneNumber || '';
//   state.id = payload.id || 0;
// }

// function applyAddToConnectionRequest(state: CartState, payload: ProviderDutyInRequestDTO) {
//   const existingService = state.services.find(service => service.id === payload.id);
//   if (existingService) {
//     existingService.amount = (existingService.amount || 1) + 1;
//   } 
//   else {
//     state.services.push({ ...payload, amount: 1 });
//   }
//   state.totalPrice = calculateTotalPrice(state.services);
// }

// function applyUpdateConnectionRequestService(state: CartState, payload: { id: number; amount: number }) {
//   const service = state.services.find(service => service.id === payload.id);
//   if (service) {
//     service.amount = payload.amount;
//   }
//   state.totalPrice = calculateTotalPrice(state.services);
// }

// function applyClearConnectionRequest(state: CartState) {
//   state.services = [];
//   state.totalPrice = 0;
//   state.consumer = '';
//   state.phoneNumber = '';
//   state.id = 0;
//   console.log(" ddd}" + state.services);
// }

// function applyRemoveFromConnectionRequest(state: CartState, id: number) {
//   state.services = state.services.filter(service => service.id !== id);
//   state.totalPrice = calculateTotalPrice(state.services);
// }

// export const { 
//   initializeConnectionRequest,
//   addToConnectionRequest, 
//   updateConnectionRequestService, 
//   removeFromConnectionRequest, 
//   updateConsumer,
//   updatePhoneNumber,
//   clearConnectionRequest 
// } = connectionRequestSlice.actions;

// export default connectionRequestSlice.reducer;


import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { api } from '../../api';

interface ConnectionRequestState {
  consumer: string;
  phoneNumber: string;
  error: string | null;
}

const initialState: ConnectionRequestState = {
  consumer: '',
  phoneNumber: '',
  error: null,
};

export const submitConnectionRequest = createAsyncThunk(
  'connectionRequest/submitConnectionRequest',
  async (
    { connectionRequestId, consumer, phoneNumber }: { connectionRequestId: number; consumer: string; phoneNumber: string },
    { rejectWithValue }
  ) => {
    try {
      await api.updateConnectionRequest(connectionRequestId, { consumer, phoneNumber });
      const response = await api.formConnectionRequest(connectionRequestId);
      if (response.status === 200) {
        return connectionRequestId;
      } else {
        return rejectWithValue('Ошибка при отправке заявки');
      }
    } catch {
      return rejectWithValue('Ошибка при отправке заявки');
    }
  }
);

export const deleteConnectionRequest = createAsyncThunk(
  'connectionRequest/deleteConnectionRequest',
  async (connectionRequestId: number, { rejectWithValue }) => {
    try {
      const response = await api.deleteConnectionRequest(connectionRequestId);
      if (response.status === 200) {
        return connectionRequestId;
      } else {
        return rejectWithValue('Ошибка при удалении заявки');
      }
    } catch {
      return rejectWithValue('Ошибка при удалении заявки');
    }
  }
);

const connectionRequestSlice = createSlice({
  name: 'connectionRequest',
  initialState,
  reducers: {
    updateConsumer: (state, action: PayloadAction<string>) => {
      state.consumer = action.payload;
    },
    updatePhoneNumber: (state, action: PayloadAction<string>) => {
      state.phoneNumber = action.payload;
    },
    clearConnectionRequest: (state) => {
      state.consumer = '';
      state.phoneNumber = '';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitConnectionRequest.rejected, (state, action) => {
        state.error = action.payload as string;
      })
      .addCase(deleteConnectionRequest.rejected, (state, action) => {
        state.error = action.payload as string;
      });
  },
});

export const { 
  updateConsumer,
  updatePhoneNumber, 
  clearConnectionRequest 
} = connectionRequestSlice.actions;

export default connectionRequestSlice.reducer;
