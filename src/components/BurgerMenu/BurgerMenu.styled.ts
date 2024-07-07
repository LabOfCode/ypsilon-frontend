import styled from 'styled-components';
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
  top: 18%;
  right: 32%
`;
