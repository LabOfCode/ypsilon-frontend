import { Navigate } from 'react-router-dom';
import useAuth from '@/redux/hooks/useAuth';
import { Route } from 'react-router-dom';

/**
 * - If the route is private and the user is logged in, render the component
 * - Otherwise render <Navigate> to redirectTo
 */

interface PrivateRouteProps {
  component: React.ComponentType;
  redirectTo?: string;
  path: string;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, redirectTo = '/', path }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : <Route path={path} element={<Component />} />;
};