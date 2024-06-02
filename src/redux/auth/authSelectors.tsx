import { User } from './authSlice';

interface AuthState {
  isLoggedIn: boolean;
  user: User;
  isRefreshing: boolean;
}

const selectIsLoggedIn = (state: AuthState) => state.isLoggedIn;
const selectUserName = (state: AuthState) => {
  if (state.user && state.user.firstname && state.user.lastname) {
    return `${state.user.firstname} ${state.user.lastname}`;
  }
  return 'Unknown User';
};
const selectIsRefreshing = (state: AuthState) => state.isRefreshing;

const authSelectors = {
   selectIsLoggedIn,
   selectUserName,
   selectIsRefreshing,
};

export default authSelectors;
