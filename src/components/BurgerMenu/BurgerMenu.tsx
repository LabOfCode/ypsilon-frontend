import React, { useState } from 'react';
import { routes } from '@/routes';
import {
  BurgerButton,
  Burger,
  BurgerButtonWrapper,
  MobileMenuWrapper,
  CloseButton,
  MenuBurgerWrap,
  LiBurger,
  LoveBurgerLogo,
  ChangeLangBurgerLogo
} from './BurgerMenu.styled';
import uaLogo from '@/assets/images/flag_us.png';
import czLogo from '@/assets/images/flag_cz.png';
import { LinkButton } from '../Button/Button';

interface BurgerMenuProps {
  language: 'ua' | 'cz';
  handleLanguageChange: () => void;
}

export const BurgerMenu: React.FC<BurgerMenuProps> = ({ language, handleLanguageChange }) => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setIsOpenMobileMenu(!isOpenMobileMenu);
  };

  const closeMobileMenu = () => {
    setIsOpenMobileMenu(false);
  };

  return (
    <>
      <BurgerButtonWrapper onClick={toggleMobileMenu}>
        <BurgerButton type="button">
          <Burger />
        </BurgerButton>
      </BurgerButtonWrapper>
      {isOpenMobileMenu && (
        <MobileMenuWrapper>
          <CloseButton onClick={toggleMobileMenu}>×</CloseButton>
          <MenuBurgerWrap>
            <LiBurger to={routes.HOME} onClick={closeMobileMenu}>Головна</LiBurger>
            <LiBurger to={routes.VACANCIES} onClick={closeMobileMenu}>Вакансії</LiBurger>
            <LiBurger to={routes.REVIEWS} onClick={closeMobileMenu}>Відгуки</LiBurger>
            <LiBurger to={routes.CONTACTS} onClick={closeMobileMenu}>Контакти</LiBurger>
          </MenuBurgerWrap>
          <ChangeLangBurgerLogo onClick={handleLanguageChange}>
            <img
              src={language === 'ua' ? uaLogo : czLogo}
              alt={language === 'ua' ? 'uaLogo' : 'czLogo'}
            />
          </ChangeLangBurgerLogo>
          <LinkButton to={routes.FAVORITES}>
            <svg>
              <use href="/assets/images/svg_sprite.svg#heart"></use>
            </svg>
          </LinkButton>
        </MobileMenuWrapper>
      )}
    </>
  );
};
