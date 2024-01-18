import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ContsactsState } from './slice';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');
      // if (!data) {
      //   return rejectWithValue("Server error!");
      // }
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', contact);
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/contacts/${contactId}`);
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);