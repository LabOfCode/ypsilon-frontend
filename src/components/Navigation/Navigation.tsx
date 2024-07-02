import React from 'react';
import { useAuth } from '@/redux/hooks/useAuth';
import { StyledNavLink } from './Navigation.styled';

export const Navigation: React.FC = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <StyledNavLink to="/">
        Головна
      </StyledNavLink>
      {isLoggedIn && (
        <StyledNavLink to="/vacancies">
          Вакансії
        </StyledNavLink>
      )}
    </nav>
  );
};
