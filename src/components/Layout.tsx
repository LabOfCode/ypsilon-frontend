import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from '@/components/AppBar/AppBar';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';


export const Layout = () => {
  return (
    <>
      <header>
        <Header />
      </header>
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
