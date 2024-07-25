import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from './Layout';
import { GlobalStyle } from '@/Globalstyle';
import { routes } from '@/routes';

const MainPage = lazy(() => import('@/pages/MainPage/MainPage'));
const VacanciesPage = lazy(() => import('@/pages/VacanciesPage/VacanciesPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage/NotFoundPage'));
const ContactsPage = lazy(() => import('@/pages/ContactsPage/ContactsPage'));

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
          <Route
            path={routes.REVIEWS}
            element={<p>Reviews page</p>}
          />
          <Route
            path={routes.CONTACTS}
            element={<ContactsPage />}
          />
          <Route
            path={routes.FAVORITES}
            // element={<FavoritesPage />}
          />
          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
