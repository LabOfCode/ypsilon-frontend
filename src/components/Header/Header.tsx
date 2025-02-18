import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

import {
  ButtonWrap,
  ChangeLangLogo,
  EnterButton,
  HeaderContent,
  HeaderWrap,
  HeaderWrapper,
  LinkHeader,
  LoginLink,
  LogoLink,
  LogoYP,
  LoveLogo,
  MenuHeaderWrap,
  UserLogo,
} from './Header.styled';
import { BurgerMenu } from '@/components/BurgerMenu/BurgerMenu';
import { routes } from '@/routes';

const Logo: React.FC = React.memo(() => (
  <LogoLink
    to={routes.HOME}
    onClick={() => window.scrollTo(0, 0)}
  >
    <LogoYP viewBox="0 0 126 74">
      <use href="#svg_sprite_logo"></use>
    </LogoYP>
  </LogoLink>
));

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <MenuHeaderWrap>
      <LinkHeader
        to={routes.HOME}
        className={location.pathname === routes.HOME ? 'active' : ''}
      >
        Головна
      </LinkHeader>
      <LinkHeader
        to={routes.VACANCIES}
        className={location.pathname === routes.VACANCIES ? 'active' : ''}
      >
        Вакансії
      </LinkHeader>
      <LinkHeader
        to={routes.REVIEWS}
        className={location.pathname === routes.REVIEWS ? 'active' : ''}
      >
        Відгуки
      </LinkHeader>
      <LinkHeader
        to={routes.CONTACTS}
        className={location.pathname === routes.CONTACTS ? 'active' : ''}
      >
        Контакти
      </LinkHeader>
    </MenuHeaderWrap>
  );
};

const LanguageToggle: React.FC<{ language: 'ua' | 'cz'; onToggle: () => void }> = React.memo(
  ({ language, onToggle }) => (
    <ChangeLangLogo onClick={onToggle}>
      <svg viewBox="0 0 32 32">
        <use href={language === 'ua' ? '#svg_sprite_flag_ua' : '#svg_sprite_flag_cz'} />
      </svg>
    </ChangeLangLogo>
  )
);

const UserButton: React.FC = React.memo(() => (
  <ButtonWrap>
    <LoginLink to="/login">
      <EnterButton>Увійти</EnterButton>
      <UserLogo>
        <svg viewBox="0 0 32 32">
          <use href="#svg_sprite_user_main"></use>
        </svg>
      </UserLogo>
    </LoginLink>
  </ButtonWrap>
));

export const Header: React.FC = () => {
  const [language, setLanguage] = useState<'ua' | 'cz'>('ua');
  const { i18n } = useTranslation();

  const handleLanguageChange = () => {
    const newLanguage = language === 'cz' ? 'ua' : 'cz';
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  return (
    <HeaderWrapper>
      <HeaderContent>
        <Logo />
        <HeaderWrap>
          <Menu />
          <LanguageToggle
            language={language}
            onToggle={handleLanguageChange}
          />
          <Link to={routes.FAVORITES}>
            <LoveLogo>
              <use href="#svg_sprite_heart"></use>
            </LoveLogo>
          </Link>
          <BurgerMenu
            language={language}
            handleLanguageChange={handleLanguageChange}
          />
          <UserButton />
        </HeaderWrap>
      </HeaderContent>
    </HeaderWrapper>
  );
};
