export const selectIsLoggedIn = (state: { auth: { isLoggedIn: any; }; }) => state.auth.isLoggedIn;

export const selectUser = (state: { auth: { user: any; }; }) => state.auth.user;

export const selectIsRefreshing = (state: { auth: { isRefreshing: any; }; }) => state.auth.isRefreshing;

export const selectError = (state: { auth: { error: any; }; }) => state.auth.error;