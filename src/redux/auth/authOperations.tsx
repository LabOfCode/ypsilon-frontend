import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://ypsilon-backend.onrender.com/api/';

interface User {
  id: string;
  email: string;
  verify: boolean;
}

interface AuthResponse {
  user: User;
  accessToken: string;
  refreshToken: string;
}

interface Credentials {
  email: string;
  password: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isLoggedIn: boolean;
  isFetchingCurrentUser: boolean;
}

interface RootState {
  auth: AuthState;
}

const setAuthHeader = {
  set(token: string) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const signUp = createAsyncThunk(
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

const logIn = createAsyncThunk(
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

const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/auth/logout');
    setAuthHeader.unset();
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

const currentUser = createAsyncThunk(
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

const refreshUser = createAsyncThunk(
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

export const authOperations = {
  signUp,
  logIn,
  logOut,
  currentUser,
  refreshUser,
};