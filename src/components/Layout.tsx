import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import FixedBtn from './common/FixedBtn/FixedBtn';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';

export const Layout = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <FixedBtn />
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
