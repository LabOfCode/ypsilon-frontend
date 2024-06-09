import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAuth } from '@/redux/hooks/useAuth'; 
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'; 
import { refreshUser } from '@/redux/auth/authOperations'; 
import { PublicRoute } from './PublicRoute';
// import { PrivateRoute } from './PrivateRoute';
import { Layout } from './Layout';
import { GlobalStyle } from '@/Globalstyle';
import { routes } from '@/routes';
import { AppDispatch } from '@/redux/store';

const MainPage = lazy(() => import('@/pages/MainPage/MainPage'));
const SignUpPage = lazy(() => import('@/pages/SignUpPage/SignUpPage'));
const LogInPage = lazy(() => import('@/pages/LogInPage/LogInPage'));
const VacanciesPage = lazy(() => import('@/pages/VacanciesPage/VacanciesPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage/NotFoundPage'));

export const App = () => {
  const dispatch: AppDispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <Routes>
        <Route path={routes.HOME} element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path={routes.LOGIN} element={<PublicRoute redirectTo="/vacancies" element={<LogInPage />} />} />
          <Route path={routes.SIGNUP} element={<PublicRoute redirectTo="/vacancies" element={<SignUpPage />} />} />
          <Route path={routes.VACANCIES} element={<VacanciesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
