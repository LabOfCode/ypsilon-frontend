import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BurgerIcon from '@/assets/images/burger.svg';

export const BurgerButton = styled.button`
  background-color: transparent;
  border: none;

  @media ${({ theme }) => theme.media.tablet} {
    display: none;
  }

  @media ${({ theme }) => theme.media.desktop} {
    display: none;
  }
`;

export const Burger = styled(BurgerIcon)`
  color: white;
`;

export const BurgerButtonWrapper = styled.div`
  padding-right: 16px;

  @media ${({ theme }) => theme.media.tablet} {
    display: none;
  }
  @media ${({ theme }) => theme.media.desktop} {
    display: none;
  }
`;

export const MobileMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center; 
  position: fixed;
  gap: 16px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: ${({ theme }) => theme.colors.backgroundOcean}; 
  background-size: cover;
  opacity: 1;
  overflow-y: auto; 
  z-index: 9999;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 5%;
  right: 5%;
  background: transparent;
  border: none;
  color: white;
  font-size: 50px;
`;

export const MenuBurgerWrap = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const LiBurger = styled(Link)`
  color: ${({ theme }) => theme.colors.colorWhite};
  font-size: 24px;
  font-weight: 600;
  transition: transform 250ms ${({ theme }) => theme.cubicBezier}, color 250ms ${({ theme }) => theme.cubicBezier};

  &:hover,
  &:focus {
    transform: scale(1.1);
    color: ${({ theme }) => theme.colors.colorYellow};
  }
`;

export const LoveBurgerLogo = styled.div`
  width: 24px;
  height: 24px;
`;

export const ChangeLangBurgerLogo = styled.div`
  width: 24px;
  height: 24px;
`;
