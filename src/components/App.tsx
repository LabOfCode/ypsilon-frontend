import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAuth } from '@/redux/hooks/useAuth'; 
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'; 
import { refreshUser } from '@/redux/auth/authOperations'; 
// import { PrivateRoute } from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { Layout } from './Layout';
import { GlobalStyle } from '@/Globalstyle';
import { routes } from '@/routes';

const MainPage = lazy(() => import('@/pages/MainPage/MainPage'));
const SignUpPage = lazy(() => import('@/pages/SignUpPage/SignUpPage'));
const LogInPage = lazy(() => import('@/pages/LogInPage/LogInPage'));

export const App = () => {
  // const dispatch = useDispatch();
  // const { isRefreshing } = useAuth();

  // useEffect(() => {
  //   refreshUser();
  // }, [dispatch]);

  return (
  // isRefreshing ? (<b>Refreshing user...</b>) : (
    <>
      <Routes>
        <Route path={routes.HOME} element={<Layout />} >
          <Route index element={<MainPage />} />
          <Route path={routes.LOGIN} element={<LogInPage />} />
          <Route path={routes.SIGNUP} element={<SignUpPage />} />
          <Route path="*" element={<p>Not found</p>} />
        </Route>  
      </Routes>
      <GlobalStyle />
    </>
  // );
)};

