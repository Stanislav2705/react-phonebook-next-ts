import { PayloadAction, createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './requests';
import { addContactSuccessReducer, deleteContactSuccessReducer, fetchContactsSuccessReduser, fulfilledReducer, pendingReducer, rejectedReducer } from './reducers';

const extraActions = [addContact, deleteContact, fetchContacts];

const getActions = (type: 'pending' | 'fulfilled' | 'rejected') => extraActions.map(action=> action[type]);

export interface ContsactsState {
    items: any[];
    isLoading: boolean;
    error: any;
}

const initialState:ContsactsState = {
    items: [],
    isLoading: false,
    error: null,
}

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {},
    extraReducers: (builder) => builder
        .addCase(fetchContacts.fulfilled, fetchContactsSuccessReduser)
        .addCase(addContact.fulfilled, addContactSuccessReducer)
        .addCase(deleteContact.fulfilled, deleteContactSuccessReducer)
        .addMatcher(isAnyOf(...getActions('pending')), pendingReducer)
        .addMatcher(isAnyOf(...getActions('rejected')), rejectedReducer)
        .addMatcher(isAnyOf(...getActions('fulfilled')), fulfilledReducer),
});

export const contactsReducer = contactsSlice.reducer;