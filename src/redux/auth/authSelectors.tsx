import { User } from './authSlice';

interface AuthState {
  isLoggedIn: boolean;
  user: User;
  isRefreshing: boolean;
}

const selectIsLoggedIn = (state: AuthState) => state.isLoggedIn;
const selectUserName = (state: AuthState) => `${state.user.firstname} ${state.user.lastname}`;
const selectIsRefreshing = (state: AuthState) => state.isRefreshing;

const authSelectors = {
   selectIsLoggedIn,
   selectUserName,
   selectIsRefreshing,
};

export default authSelectors;
