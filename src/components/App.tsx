import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
// import { RestrictedRoute } from './RestrictedRoute';
import { Layout } from './Layout';
import { GlobalStyle } from '@/Globalstyle';
import { routes } from '@/routes';

const MainPage = lazy(() => import('@/pages/MainPage/MainPage'));
const SignUpPage = lazy(() => import('@/pages/SignUpPage/SignUpPage'));
// const LogInPage = lazy(() => import('@/pages/LogInPage/LogInPage'));

export const App = () => {
  return (
    <>
      <Routes>
        {/* <Route
          path="/signin"
          element={
            <RestrictedRoute
              redirectTo="/home"
              component={<LogInPage />} />
          }
        /> */}

        <Route
          path="/signup"
          element={
            <PrivateRoute
              path="/signup"
              redirectTo="/home"
              component={SignUpPage}
            />
          }
        />

        <Route path={routes.HOME} element={<Layout />} >
          <Route index element={<MainPage />} />
          <Route path="*" element={<p>Not found</p>} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
