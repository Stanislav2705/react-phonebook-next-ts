import axios from 'axios';
import { createAsyncThunk,SerializedError } from '@reduxjs/toolkit';
import { RootState } from '../store';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

// Utility to add JWT
const setAuthHeader = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

/*
 * POST @/users/signup
 * body: {name, email, password}
 */

interface RegisterResponse {
  token: string;
  error:string;
  // Define other properties in the response object as needed
}

interface Credentials {
  name: string;
  email: string;
  password: string;
  // Define other properties in the credentials object as needed
}

interface CredentialsLog {
  email: string;
  password: string;
  // Define other properties in the credentials object as needed
}

export const register = createAsyncThunk<RegisterResponse, Credentials>(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.statusText);
    }
  }
);

export const logIn = createAsyncThunk<RegisterResponse, CredentialsLog>(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error:any) {
      return thunkAPI.rejectWithValue(error.response.statusText);
    }
  }
);

export const logOut = createAsyncThunk<void, void>(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await axios.post('/users/logout');
      clearAuthHeader();
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.statusText);
    }
  }
);

export const refreshUser = createAsyncThunk<RegisterResponse, void>(
  'auth/refresh',
  async (_, thunkAPI) => {
    const { token } = (thunkAPI.getState() as RootState).auth;

    if (!token) {
      return thunkAPI.rejectWithValue('No valid token');
    }
    setAuthHeader(token);

    try {
      const response = await axios.get('/users/current');
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.statusText);
    }
  }
);
