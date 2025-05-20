import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signinRequest(state) {
      state.loading = true;
      state.error = null;
    },
    signinSuccess(state, action) {
      state.user = action.payload; 
      state.loading = false;
    },
    signinFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },

    signupRequest(state) {
        state.loading = true;
        state.error = null;
    },
    signupSuccess(state, action) {
        state.user = action.payload.user;
        state.loading = false;
    },
    signupFailure(state, action) {
        state.loading = false;
        state.error = action.payload;
    },

    fetchUserRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchUserSuccess(state, action) {
      state.user = action.payload.user;
      state.loading = false;  
    },
    fetchUserFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },

    logoutRequest(state) {
        state.loading = true;
        state.error = null;
    },
    logoutSuccess(state) {
        state.user = null;
        state.loading = false;
    },
    logoutFailure(state, action) {
        state.loading = false;
        state.error = action.payload;
    },
  },
});

export const {
    signinRequest,
    signinSuccess,
    signinFailure,
    signupRequest,
    signupSuccess,
    signupFailure,
    logoutRequest,
    logoutSuccess,
    logoutFailure,
    fetchUserRequest,
    fetchUserSuccess,
    fetchUserFailure,
  } = authSlice.actions;

export const selectAuth = (state) => state.auth;

export default authSlice.reducer;
