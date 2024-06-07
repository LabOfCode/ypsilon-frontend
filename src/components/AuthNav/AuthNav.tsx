import React from 'react';
import { StyledNavLink } from './AuthNav.styled';

export const AuthNav: React.FC = () => {
  return (
    <div>
      <StyledNavLink to="/login">
        Увійти
      </StyledNavLink>
    </div>
  );
};
