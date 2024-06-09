import { useSelector } from 'react-redux';
import authSelectors from '@/redux/auth/authSelectors';
import { RootState } from '@/redux/store';

export const useAuth = () => {
  const isLoggedIn = useSelector((state: RootState) => authSelectors.selectIsLoggedIn(state));
  const user = useSelector((state: RootState) => authSelectors.selectUser(state));
  const isRefreshing = useSelector((state: RootState) => authSelectors.selectIsRefreshing(state));

  return {
    isLoggedIn,
    user,
    isRefreshing,
  };
};
