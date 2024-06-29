import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from '@/components/AppBar/AppBar';
import { Footer } from './Footer/Footer';


export const Layout = () => {
  return (
    <>
      <main>
        <AppBar />
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
