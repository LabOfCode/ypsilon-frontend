import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { routes } from '@/routes';
import { useAuth } from '@/redux/hooks/useAuth';
import {
  HeaderContent,
  HeaderWrap,
  LinkHeader,
  LogoLink,
  MenuHeaderWrap,
  HeaderWrapper,
  ChangeLangLogo,
  EnterButton,
  ButtonWrap,
  LoginLink,
  LoveLogo,
  UserLogo,
} from './Header.styled';
import logo from '@/assets/images/logo.png';
import uaLogo from '@/assets/images/flag_us.png';
import czLogo from '@/assets/images/flag_cz.png';
import userLogo from '@/assets/images/user.png';
import { BurgerMenu } from '@/components/BurgerMenu/BurgerMenu';
import { UserMenu } from '@/components/UserMenu/UserMenu';

const Logo: React.FC = React.memo(() => (
  <LogoLink to={routes.HOME}>
    <img src={logo} alt="logo" />
  </LogoLink>
));

const Menu: React.FC = React.memo(() => (
  <MenuHeaderWrap>
    <LinkHeader to={routes.HOME}>Головна</LinkHeader>
    <LinkHeader to={routes.VACANCIES}>Вакансії</LinkHeader>
    <LinkHeader to={routes.REVIEWS}>Відгуки</LinkHeader>
    <LinkHeader to={routes.CONTACTS}>Контакти</LinkHeader>
  </MenuHeaderWrap>
));

const LanguageToggle: React.FC<{ language: 'ua' | 'cz'; onToggle: () => void }> = React.memo(({ language, onToggle }) => (
  <ChangeLangLogo onClick={onToggle}>
    <img
      src={language === 'ua' ? uaLogo : czLogo}
      alt={language === 'ua' ? 'uaLogo' : 'czLogo'}
    />
  </ChangeLangLogo>
));

const UserButton: React.FC = React.memo(() => (
  <ButtonWrap>
    <LoginLink to="/login">
      <EnterButton>Увійти</EnterButton>
      <UserLogo><img src={userLogo} alt="userLogo" /></UserLogo>
    </LoginLink>
  </ButtonWrap>
));

export const Header: React.FC = () => {
  const [language, setLanguage] = useState<'ua' | 'cz'>('ua');
  const { isLoggedIn } = useAuth();

  const handleLanguageChange = () => {
    setLanguage((prev) => (prev === 'ua' ? 'cz' : 'ua'));
  };

  return (
    <HeaderWrapper>
      <HeaderContent>
        <Logo />
        <HeaderWrap>
          <Menu />
          <LanguageToggle language={language} onToggle={handleLanguageChange} />
          <Link to={routes.FAVORITES}>
            <LoveLogo>
              <use href="#svg_sprite_heart"></use>
            </LoveLogo>
          </Link>
          <BurgerMenu language={language} handleLanguageChange={handleLanguageChange} />
          {isLoggedIn ? <UserMenu /> : <UserButton />}
        </HeaderWrap>
      </HeaderContent>
    </HeaderWrapper>
  );
};
