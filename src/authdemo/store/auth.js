import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: 'IDLE',
  error: null,
  accessToken: localStorage.getItem('accessToken'),
  refreshToken: localStorage.getItem('refreshToken'),
  userId: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authAttempt(state, action) {
      state.status = 'PENDING'
      state.accessToken = null
    },
    authSuccess(state, action) {
      // console.log('action: ', action);
      state.status = 'COMPLETED'
      state.error = null
      state.accessToken = action.payload.accessToken
      state.refreshToken = action.payload.refreshToken
      state.userId = action.payload.userId
      localStorage.setItem('accessToken', action.payload.accessToken)
      localStorage.setItem('refreshToken', action.payload.refreshToken)
    },authFailed(state, action) {
      state.status = 'COMPLETED'
      state.error = action.payload
    },
    reset(state, action) {
      state.status = 'IDLE'
      state.error = null
    },
    logout(state, action) {
      console.log("Logout action");
      state.accessToken = null
      state.refreshToken = null
      state.userId = null
      localStorage.removeItem('accessToken')
      localStorage.removeItem('refreshToken')
    },
  }
});


export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;
