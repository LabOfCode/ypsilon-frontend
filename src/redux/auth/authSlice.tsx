import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { signUp, logIn, signOut, currentUser, refreshUser } from './authOperations';
import { AuthResponse, AuthState } from '@/types';

const initialState: AuthState = {
  user:{user: { _id: '', email: '', verify: false, firstname: null, lastname: null }},
  token: null,
  // refreshToken: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(signUp.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
        state.user = action.payload;
        state.token = action.payload.accessToken;
        //  state.refreshToken = action.payload.refreshToken;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
        state.user = action.payload;
        state.token = action.payload.accessToken;
        //  state.refreshToken = action.payload.refreshToken;
        state.isLoggedIn = true;
      })
    //     .addCase(signOut.fulfilled, state => {
    //        state.user = { _id: '', email: '', verify: false };
    //        state.token = null;
    //       //  state.refreshToken = null;
    //        state.isLoggedIn = false;
    //     })
    //     .addCase(currentUser.pending, state => {
    //       state.isRefreshing = true;
    //     })
    //     .addCase(currentUser.fulfilled, (state, action: PayloadAction<User>) => {
    //       state.user = action.payload;
    //       state.isLoggedIn = true;
    //       state.isRefreshing = false;
    //     })
    //     .addCase(currentUser.rejected, state => {
    //       state.isRefreshing = false;
    //     })
        .addCase(refreshUser.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
           state.user = action.payload;
           state.token = action.payload.accessToken;
          //  state.refreshToken = action.payload.refreshToken;
           state.isLoggedIn = true;
        });
    },
  }
);

export const authReducer = authSlice.reducer;
