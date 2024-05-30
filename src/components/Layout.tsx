import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Footer } from './Footer/Footer';

export const Layout = () => {
  return (
    <>
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
