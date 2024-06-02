import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { ComponentType } from 'react';
import authSelectors from '@/redux/auth/authSelectors';

interface RestrictedRouteProps {
  redirectTo: string;
  component: ComponentType<any>;
}

export default function RestrictedRoute({ redirectTo, component: Component }: RestrictedRouteProps) {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
}
