import { createSlice } from '@reduxjs/toolkit'

const initialAuthState = {
  isAuthenticated: false
}

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      console.log(`login username: ${action.payload.username}`)
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    }
  }
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
