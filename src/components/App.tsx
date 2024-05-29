import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from './Layout';
import { GlobalStyle } from '@/Globalstyle';
import { routes } from '@/routes';

const MainPage = lazy(() => import('@/pages/MainPage/MainPage'));
const VacanciesPage = lazy(() => import('@/pages/VacanciesPage/VacanciesPage'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route
          path={routes.HOME}
          element={<Layout />}
        >
          <Route
            index
            element={<MainPage />}
          />
          <Route
            path={routes.VACANCIES}
            element={<VacanciesPage />}
          />
        </Route>
        <Route
          path="*"
          element={<p>Not found</p>}
        />
      </Routes>
      <GlobalStyle />
    </>
  );
};
