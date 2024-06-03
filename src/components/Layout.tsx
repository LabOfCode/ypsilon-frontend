import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from '@/components/AppBar/AppBar';

export const Layout = () => {
  return (
    <>
      <main>
        <AppBar />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
