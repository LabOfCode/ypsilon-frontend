import { useSelector } from 'react-redux';
import authSelectors from '@/redux/auth/authSelectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  const user = useSelector(authSelectors.selectUser);
  const isRefreshing = useSelector(authSelectors.selectIsRefreshing);

  if (!user) {
    return {
      isLoggedIn,
      user: null, 
      isRefreshing,
    };
  }

  return {
    isLoggedIn,
    user: user,
    isRefreshing,
  };
};

