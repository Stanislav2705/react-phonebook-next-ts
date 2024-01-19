import { createSelector } from '@reduxjs/toolkit';
import { ContsactsState } from './contacts/slice';
import { RootState } from './store';
import { FilterState } from './filter/slice';

export const selectContacts = (state:RootState ) => state.contacts.items;

export const selectIsLoading = (state:RootState) => state.contacts.isLoading;

export const selectError = (state:RootState) => state.contacts.error;

export const selectFilter = (state:RootState) => state.filter.value;

export const selectVisibleContacts = createSelector(
    [selectContacts, selectFilter],
    (contacts, filterValue) => {
      const normalizedFilter = filterValue.toLowerCase();
  
      return contacts.filter((contact) =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    }
);