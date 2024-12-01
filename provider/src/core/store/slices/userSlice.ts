// import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { AuthRequestDTO } from '../../api/API';
// import { api } from '../../api';

// interface UserState {
//   isAuth: boolean;
//   login: string;
//   username: string;
//   accessToken: string | null;
// }

// const initialState: UserState = {
//   isAuth: false,
//   login: "",
//   username: "",
//   accessToken: null,
// };


// export const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     logoutUser: (state) => {
//       state.isAuth = false;
//       state.login = "";
//       state.username = "";
//       state.accessToken = null;
//       localStorage.removeItem('accessToken');
//     },
//     saveUser: (state, action: PayloadAction<{ login: string; accessToken: string }>) => {
//       state.login = action.payload.login;
//       state.isAuth = true;
//       state.accessToken = action.payload.accessToken;
//       localStorage.setItem('accessToken', action.payload.accessToken);
//     },
//     saveUsername: (state, action: PayloadAction<{ username: string; }>) => {
//       state.username = action.payload.username;
//     }
//   },
// });

// export const { saveUser, logoutUser, saveUsername } = userSlice.actions;

// export default userSlice.reducer;



import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthRequestDTO, UserDTO } from '../../api/API';
import { api } from '../../api';

interface UserState {
  isAuth: boolean;
  login: string;
  username: string;
  accessToken: string | null;
  error: string | null;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState: UserState = {
  isAuth: false,
  login: "",
  username: "",
  accessToken: null,
  error: null,
  loading: 'idle',
};

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (authRequestDTO: AuthRequestDTO, { rejectWithValue }) => {
    try {
      const response = await api.loginUser(authRequestDTO);

      if (response.data.accessToken) {
        return { 
          login: authRequestDTO.login, 
          accessToken: response.data.accessToken 
        };
      } else {
        return rejectWithValue('Ошибка авторизации. Попробуйте снова.');
      }
    } catch (err) {
      return rejectWithValue('Такого пользователя нет. Проверьте данные.');
    }
  }
);

export const updateUser = createAsyncThunk(
  'user/updateUser',
  async (userDTO: UserDTO, { rejectWithValue }) => {
    try {
      const response = await api.updateUser(userDTO);

      if (response.status === 200) {
        return { username: userDTO.username, login: userDTO.login }; 
      } else {
        return rejectWithValue('Не удалось обновить данные. Попробуйте еще раз.');
      }
    } catch (err) {
      return rejectWithValue('Произошла ошибка при обновлении данных. Попробуйте еще раз.');
    }
  }
);

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (userDTO: UserDTO, { rejectWithValue }) => {
    try {
      const response = await api.createUser(userDTO);

      if (response.status === 200) {
        return { username: userDTO.username, login: userDTO.login };
      } 
      else {
        return rejectWithValue('Ошибка регистрации. Попробуйте снова.');
      }
    } catch (err) {
      return rejectWithValue('Ошибка регистрации. Попробуйте снова.');
    }
  }
);


export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.isAuth = false;
      state.login = "";
      state.username = "";
      state.accessToken = null;
      state.error = null;
      localStorage.removeItem('accessToken');
    },
    saveUsername: (state, action: PayloadAction<{ username: string; }>) => {
      state.username = action.payload.username;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isAuth = true;
        state.login = String(action.payload.login);
        state.accessToken = action.payload.accessToken;
        localStorage.setItem('accessToken', action.payload.accessToken);
      })
      .addCase(loginUser.rejected, (state, action) => {
        console.error(action.payload);
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.username = action.payload.username || state.username;
        state.login = action.payload.login || state.login;
        ;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.error = action.payload as string;
        console.error(action.payload);
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.username = String(action.payload.username);
        state.login = String(action.payload.login);
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.error = action.payload as string;
        console.error(action.payload);
      });
  },
});

export const { logoutUser, saveUsername } = userSlice.actions;

export default userSlice.reducer;

