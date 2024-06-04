import { Navigation } from '@/components/Navigation/Navigation';
import { UserMenu } from '@/components/UserMenu/UserMenu';
import { AuthNav } from '@/components/AuthNav/AuthNav';
import { useAuth } from '@/redux/hooks/useAuth';
import { Header } from './AppBar.styled'; 
import React from 'react';

export const AppBar: React.FC = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};