import { createSlice } from "@reduxjs/toolkit"
import { API_STATUS_COMPLETE, API_STATUS_IDLE, API_STATUS_PENDING } from "./api/apiConstants"

const initialState = {
  status: API_STATUS_IDLE,
  isChangePasswordSuccess: false,
  error: null
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    changePasswordAttempt: (state, action) => {
      state.status = API_STATUS_PENDING
      state.error = null
    },changePasswordFailed: (state, action) => {
      state.status = API_STATUS_COMPLETE
      state.error = action.payload
    }, changePasswordSuccess: (state, action) => {
      state.status = API_STATUS_COMPLETE
      state.isChangePasswordSuccess = true
      state.error = null
    }
  }
});

export const profileActions = profileSlice.actions;
export const profileReducer = profileSlice.reducer;