import React from 'react';
import { BurgerClose, BurgerCloseButton } from './CloseBurgerMenu.styled';

interface CloseBurgerMenuProps {
  toggleMobileMenu: () => void;
}

export const CloseBurgerMenu: React.FC<CloseBurgerMenuProps> = ({ toggleMobileMenu }) => {
  return (
    <BurgerCloseButton type="button" onClick={toggleMobileMenu}>
      <BurgerClose />
    </BurgerCloseButton>
  );
};
