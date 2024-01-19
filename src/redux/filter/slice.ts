import { PayloadAction, createSlice } from "@reduxjs/toolkit";


export interface FilterState {
  value: string;
}

const initialState:FilterState = {
  value: '',
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilter(state:FilterState, action:PayloadAction<string>) {
      state.value = action.payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;