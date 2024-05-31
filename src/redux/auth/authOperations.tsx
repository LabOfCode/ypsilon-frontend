import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '@/redux/store';

axios.defaults.baseURL = 'https://ypsilon-backend.onrender.com/api/';

interface User {
  id: string;
  email: string;
  verify: boolean;
}

export interface AuthResponse {
  user: User;
  accessToken: string;
  refreshToken: string;
}

interface Credentials {
  email: string;
  password: string;
}

const setAuthHeader = {
  set(token: string) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const signUp = createAsyncThunk(
  'auth/signup',
  async (credentials: Credentials, thunkAPI) => {
    try {
      const { data } = await axios.post<AuthResponse>('/auth/signup', credentials);
      setAuthHeader.set(data.accessToken);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const signIn = createAsyncThunk(
  'auth/login',
  async (credentials: Credentials, thunkAPI) => {
    try {
      const { data } = await axios.post<AuthResponse>('/auth/login', credentials);
      setAuthHeader.set(data.accessToken);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const signOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/auth/logout');
    setAuthHeader.unset();
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

    setAuthHeader.set(token);

    try {
      const res = await axios.get<User>('/user/current');
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

    setAuthHeader.set(token);

    try {
      const res = await axios.get<AuthResponse>('/user/refresh');
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
