import { RootState } from '@/redux/store';
import { AuthState } from '@/types';

const selectAuth = (state: RootState): AuthState => state.auth;

const selectIsLoggedIn = (state: RootState) => selectAuth(state).isLoggedIn;
const selectUser = (state: RootState) => selectAuth(state).user;
const selectIsRefreshing = (state: RootState) => selectAuth(state).isRefreshing;

const authSelectors = {
  selectIsLoggedIn,
  selectUser,
  selectIsRefreshing,
};

export default authSelectors;
