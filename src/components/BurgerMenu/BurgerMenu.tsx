import React from 'react';
import { BurgerButton, Burger } from './BurgerMenu.styled';

interface BurgerMenuProps {
  toggleMobileMenu: () => void;
}

export const BurgerMenu: React.FC<BurgerMenuProps> = ({ toggleMobileMenu }) => {
  return (
    <BurgerButton type="button" onClick={toggleMobileMenu}>
      <Burger />
    </BurgerButton>
  );
};

