import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  isAuth: boolean;
  login: string;
  username: string;
  accessToken: string | null;
}

const initialState: UserState = {
  isAuth: false,
  login: "",
  username: "",
  accessToken: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.isAuth = false;
      state.login = "";
      state.username = "";
      state.accessToken = null;
      localStorage.removeItem('accessToken');
    },
    saveUser: (state, action: PayloadAction<{ login: string; accessToken: string }>) => {
      state.login = action.payload.login;
      state.isAuth = true;
      state.accessToken = action.payload.accessToken;
      localStorage.setItem('accessToken', action.payload.accessToken);
    },
    saveUsername: (state, action: PayloadAction<{ username: string; }>) => {
      state.username = action.payload.username;
    }
  },
});

export const { saveUser, logoutUser, saveUsername } = userSlice.actions;

export default userSlice.reducer;

