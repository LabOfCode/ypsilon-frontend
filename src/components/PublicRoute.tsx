import { Navigate } from 'react-router-dom';
import { useAuth } from '@/redux/hooks/useAuth';

interface PublicRouteProps {
  redirectTo: string;
  element: React.ReactNode;
}

export const PublicRoute = ({ element, redirectTo = '/' }: PublicRouteProps) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : element;
};
