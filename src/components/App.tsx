import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from './Layout';
import { GlobalStyle } from '@/Globalstyle';
import { routes } from '@/routes';

const MainPage = lazy(() => import('@/pages/MainPage/MainPage'));

export const App = () => {
  return (
    <>
      <Routes>
        {/* <Route
          path="/signin"
          element={
            <PublicRoute
              redirectTo="/home"
              isLoggedIn={isLoggedIn}
              component={<SignInPage />}
            />
          }
        /> */}

        {/* <Route
          path="/signup"
          element={
            <PublicRoute
              redirectTo="/home"
              isLoggedIn={isLoggedIn}
              component={<SignUpPage />}
            />
          }
        /> */}

        <Route path={routes.HOME} element={<Layout />} >
          <Route index element={<MainPage />} />
          <Route path="*" element={<p>Not found</p>} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
