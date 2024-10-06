import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import FixedBtn from './common/FixedBtn/FixedBtn';

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <FixedBtn />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};
