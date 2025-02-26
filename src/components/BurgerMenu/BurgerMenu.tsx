import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import {
  Burger,
  BurgerButton,
  BurgerButtonWrapper,
  ChangeLangBurgerLogo,
  CloseButton,
  LiBurger,
  LoveBurgerLogo,
  MenuBurgerWrap,
  MobileMenuWrapper,
} from './BurgerMenu.styled';
import czLogo from '@/assets/images/flag_cz.png';
import uaLogo from '@/assets/images/flag_us.png';
import { routes } from '@/routes';

interface BurgerMenuProps {
  language: 'ua' | 'cz';
  handleLanguageChange: () => void;
}

export const BurgerMenu: React.FC<BurgerMenuProps> = ({ language, handleLanguageChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <BurgerButtonWrapper onClick={toggleMenu}>
        <BurgerButton type="button">
          <Burger>
            <use href="#svg_sprite_align-justify"></use>
          </Burger>
        </BurgerButton>
      </BurgerButtonWrapper>
      {isOpen && (
        <MobileMenuWrapper>
          <CloseButton onClick={toggleMenu}>×</CloseButton>
          <MenuBurgerWrap>
            {[
              { route: routes.HOME, label: t('home')},
              { route: routes.VACANCIES, label: t('vacancies')},
              { route: routes.REVIEWS, label: t('reviews')},
              { route: routes.CONTACTS, label:t('contacts')},
            ].map(({ route, label }) => (
              <LiBurger
                to={route}
                onClick={toggleMenu}
                key={route}
              >
                {label}
              </LiBurger>
            ))}
          </MenuBurgerWrap>
          <Link
            to={routes.FAVORITES}
            onClick={toggleMenu}
          >
            <LoveBurgerLogo>
              <use href="#svg_sprite_heart"></use>
            </LoveBurgerLogo>
          </Link>
          <ChangeLangBurgerLogo onClick={handleLanguageChange}>
            <img
              src={language === 'ua' ? uaLogo : czLogo}
              alt={language === 'ua' ? 'uaLogo' : 'czLogo'}
            />
          </ChangeLangBurgerLogo>
        </MobileMenuWrapper>
      )}
    </>
  );
};
