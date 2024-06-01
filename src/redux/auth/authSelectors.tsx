import { User } from './authSlice';

interface AuthState {
  getIsLoggedIn: boolean;
  user: User;
}

const getIsLoggedIn = (state: AuthState) => state.getIsLoggedIn;
const getUsername = (state: AuthState) => `${state.user.firstname} ${state.user.lastname}`;

const authSelectors = {
   getIsLoggedIn,
   getUsername,
};

export default authSelectors;
