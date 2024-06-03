import { useSelector } from 'react-redux';
import { Navigate, Route } from 'react-router-dom';
import authSelectors from '@/redux/auth/authSelectors';

type PathRouteProps = any; 
type LayoutRouteProps = any; 
type IndexRouteProps = any; 

type RouteProps = PathRouteProps & LayoutRouteProps & IndexRouteProps;

interface PublicRouteProps extends RouteProps {
  path: string;
  redirectTo: string;
  element: React.ReactNode;
}

export default function PublicRoute({ redirectTo, ...rest }: PublicRouteProps) {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

  return (
    <Route {...rest} element={isLoggedIn ? <Navigate to={redirectTo} replace /> : rest.element} />
  );
}
