import React, { useState } from 'react';
import { routes } from '@/routes';
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
  BurgerButtonWrapper,
  MobileMenuWrapper,
  CloseButton,
  MenuBurgerWrap,
  LiBurger,
  LoveBurgerLogo,
  ChangeLangBurgerLogo
} from './Header.styled';
import logo from '@/assets/images/logo.png';
import uaLogo from '@/assets/images/flag_us.png';
import czLogo from '@/assets/images/flag_cz.png';
import heartLogo from '@/assets/images/heart.png';
import userLogo from '@/assets/images/user.png';
import { BurgerMenu } from '@/components/BurgerMenu/BurgerMenu';
import { CloseBurgerMenu } from '@/components/CloseBurgerMenu/CloseBurgerMenu';

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

const LangBurgerLogo: React.FC<{ language: 'ua' | 'cz'; onToggle: () => void }> = React.memo(({ language, onToggle }) => (
  <ChangeLangBurgerLogo onClick={onToggle}>
    <img
      src={language === 'ua' ? uaLogo : czLogo}
      alt={language === 'ua' ? 'uaLogo' : 'czLogo'}
    />
  </ChangeLangBurgerLogo>
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
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

  const handleLanguageChange = () => {
    setLanguage((prev) => (prev === 'ua' ? 'cz' : 'ua'));
  };

  const toggleMobileMenu = () => {
    setIsOpenMobileMenu(!isOpenMobileMenu);
  };
   
  const closeMobileMenu = () => {
    setIsOpenMobileMenu(false);
  };

  return (
    <>
      <HeaderWrapper>
        <HeaderContent>
          <Logo />
          <HeaderWrap>
            <Menu />
            <LanguageToggle language={language} onToggle={handleLanguageChange} />
            <LoveLogo>
              <img src={heartLogo} alt="heartLogo" />
            </LoveLogo>
            <BurgerButtonWrapper onClick={toggleMobileMenu}>
              {isOpenMobileMenu ? (
                <CloseBurgerMenu toggleMobileMenu={toggleMobileMenu} />
              ) : (
                <BurgerMenu toggleMobileMenu={toggleMobileMenu} />
              )}
            </BurgerButtonWrapper>
            <UserButton />
          </HeaderWrap>
        </HeaderContent>
      </HeaderWrapper>
      {isOpenMobileMenu && (
        <MobileMenuWrapper>
            <CloseButton onClick={toggleMobileMenu}>×</CloseButton>
               <MenuBurgerWrap>
                  <LiBurger to={routes.HOME} onClick={closeMobileMenu}>Головна</LiBurger>
                  <LiBurger to={routes.VACANCIES} onClick={closeMobileMenu}>Вакансії</LiBurger>
                  <LiBurger to={routes.REVIEWS} onClick={closeMobileMenu}>Відгуки</LiBurger>
                  <LiBurger to={routes.CONTACTS} onClick={closeMobileMenu}>Контакти</LiBurger>
               </MenuBurgerWrap>
               <LangBurgerLogo language={language} onToggle={handleLanguageChange} /> 
               <LoveBurgerLogo>
               <img src={heartLogo} alt="heartLogo" />
               </LoveBurgerLogo>
        </MobileMenuWrapper>
      )}
    </>
  );
};