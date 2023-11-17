import { PayloadAction } from '@reduxjs/toolkit';
import { ContsactsState } from './slice';

export const fetchContactsSuccessReduser = (state: ContsactsState, action: PayloadAction<any>) => {
    state.items = action.payload;
  };
  
  export const addContactSuccessReducer = (state: ContsactsState, action: PayloadAction<any>) => {
    state.items.push(action.payload);
  };
  
  export const deleteContactSuccessReducer = (state:ContsactsState, action: PayloadAction<{ id: number }>) => {
    const index = state.items.findIndex(contact => contact.id === action.payload.id);
    state.items.splice(index, 1);
  };
  
  export const pendingReducer = (state:ContsactsState) => {
    state.isLoading = true;
  };
  
  export const rejectedReducer = (state:ContsactsState, payload: PayloadAction<any>) => {
    state.isLoading = false;
    state.error = payload;
  };
  
  export const fulfilledReducer = (state:ContsactsState) => {
    state.isLoading = false;
    state.error = null;
  };