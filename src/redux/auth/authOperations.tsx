import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '@/redux/store';
import $api from '../http';
import { User } from './authSlice';

axios.defaults.baseURL = 'https://ypsilon-backend.onrender.com/api';

export interface AuthResponse {
  user: User;
  accessToken: string;
  refreshToken: string;
}

interface CredentialsLogIn {
  email: string;
  password: string;
}

interface CredentialsSignUp extends CredentialsLogIn {
  fullname: string;
}

export const signUp = createAsyncThunk(
  'auth/signup',
  async (credentials: CredentialsSignUp, thunkAPI) => {
    try {
      const {data} = await axios.post<AuthResponse>('/auth/signup', credentials);
      console.log('data :>> ', data);
      // setAuthHeader.set(data.accessToken);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials: CredentialsLogIn, thunkAPI) => {
    try {
      const { data } = await axios.post<AuthResponse>('/auth/login', credentials);
      localStorage.setItem('token', data.accessToken);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const signOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/auth/logout');
    localStorage.removeItem('token');
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

export const currentUser = createAsyncThunk(
  'user/current',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const { token } = state.auth;

    if (!token) {
      return thunkAPI.rejectWithValue('Not authorized');
    }

    try {
      const res = await $api.get<User>('/user/current');
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'user/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const { token } = state.auth;

    if (!token) {
      return thunkAPI.rejectWithValue('Not authorized');
    }

    try {
      const res = await $api.get<AuthResponse>('/user/refresh');
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
