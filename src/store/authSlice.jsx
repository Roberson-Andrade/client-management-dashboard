import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: '',
    userId: undefined,
    isLoggedIn: false,
  },
  reducers: {
    login: (state, action) => {
      state.token = action.payload.token;
      state.userId = action.payload.userId;
    },
    logout: (state) => {
      state.token = undefined;
    },
  },
});

export const AuthActions = authSlice.actions;
export default authSlice.reducer;