import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '@/redux/hooks/useAuth';
import { StyledNavLink } from './Navigation.styled';

export const Navigation: React.FC = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <StyledNavLink to="/">
        Home
      </StyledNavLink>
      {isLoggedIn && (
        <StyledNavLink to="/tasks">
          Tasks
        </StyledNavLink>
      )}
    </nav>
  );
};
