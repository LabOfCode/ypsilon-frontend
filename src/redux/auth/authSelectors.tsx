import { User } from './authSlice';

interface AuthState {
  isLoggedIn: boolean;
  user: User;
  isRefreshing: boolean;
}

const selectIsLoggedIn = (state: AuthState) => state.isLoggedIn;
const selectUser = (state: AuthState) => state.user;
const selectIsRefreshing = (state: AuthState) => state.isRefreshing;

const authSelectors = {
  selectIsLoggedIn,
  selectUser,
  selectIsRefreshing,
};

export default authSelectors;
