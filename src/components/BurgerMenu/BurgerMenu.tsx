import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
  ChangeLangBurgerLogo,
} from './BurgerMenu.styled';
import uaLogo from '@/assets/images/flag_us.png';
import czLogo from '@/assets/images/flag_cz.png';

interface BurgerMenuProps {
  language: 'ua' | 'cz';
  handleLanguageChange: () => void;
}

export const BurgerMenu: React.FC<BurgerMenuProps> = ({ language, handleLanguageChange }) => {
  const [isOpen, setIsOpen] = useState(false);

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
              { route: routes.HOME, label: 'Головна' },
              { route: routes.VACANCIES, label: 'Вакансії' },
              { route: routes.REVIEWS, label: 'Відгуки' },
              { route: routes.CONTACTS, label: 'Контакти' },
            ].map(({ route, label }) => (
              <LiBurger to={route} onClick={toggleMenu} key={route}>
                {label}
              </LiBurger>
            ))}
          </MenuBurgerWrap>
          <Link to={routes.FAVORITES} onClick={toggleMenu}>
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
