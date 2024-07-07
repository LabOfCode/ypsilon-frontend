import React from 'react';
import { routes } from '@/routes';
import {
  HeaderContent,
  HeaderWrap,
  LinkFooter,
  LogoLink,
  LogoLinkWrap,
  MenuHeaderWrap,
  HeaderWrapper
} from './Header.styled';
import logo from '@/assets/images/logo.png';


export const Header = () => {
  return (
   <HeaderWrapper>
      {/* <Navigation />
      isLoggedIn ? <UserMenu /> : <AuthNav />} */}
      <HeaderContent>
         <LogoLinkWrap>
            <LogoLink to={routes.HOME}>
               <img
                  src={logo}
                  alt="logo"
                  width="50px"
                  height="28px"
               />
            </LogoLink>
            <HeaderWrap>
               <MenuHeaderWrap>
                  <LinkFooter to={routes.HOME}>Головна</LinkFooter>
                  <LinkFooter to={routes.VACANCIES}>Вакансії</LinkFooter>
                  <LinkFooter to={routes.REVIEWS}>Відгуки</LinkFooter>
                  <LinkFooter to={routes.CONTACTS}>Контакти</LinkFooter>
               </MenuHeaderWrap>
            </HeaderWrap>
         </LogoLinkWrap>
      </HeaderContent>
   </HeaderWrapper>
  );
};