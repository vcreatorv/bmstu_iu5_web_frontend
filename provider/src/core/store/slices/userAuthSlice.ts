import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface UserState {
  isAuth: boolean;
  login: string;
  accessToken: string | null;
}

const initialState: UserState = {
  isAuth: false,
  login: "",
  accessToken: null,
};

export const userAuthSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.isAuth = false;
      state.login = "";
      state.accessToken = null;
      localStorage.removeItem('accessToken');
    },
    saveUser: (state, action: PayloadAction<{ login: string; accessToken: string }>) => {
      state.login = action.payload.login;
      state.isAuth = true;
      state.accessToken = action.payload.accessToken;
      localStorage.setItem('accessToken', action.payload.accessToken);
    },
  },
});

export const { saveUser, logoutUser } = userAuthSlice.actions;

export default userAuthSlice.reducer;

