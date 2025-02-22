import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Container from '../Container';

export const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background-image: ${({ theme }) => theme.colors.backgroundHeader};
  opacity: 0.9;
  opacity: initial;
  z-index: 1000;
`;

export const HeaderContent = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 16px;

  @media ${({ theme }) => theme.media.tablet} {
    padding: 8.5px 40px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    padding: 15px 40px;
  }
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
`;

export const LogoYP = styled.svg`
  width: 50px;
  height: 28px;

  @media ${({ theme }) => theme.media.tablet} {
    width: 98px;
    height: 58px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    width: 126px;
    height: 74px;
  }

  /* Это поможет сделать содержимое SVG адаптивным */
  & use {
    width: 100%;
    height: 100%;
  }
`;

export const ChangeLangLogo = styled.div`
  cursor: pointer;

  & svg {
    display: none;

    @media ${({ theme }) => theme.media.tablet} {
      display: block;
      width: 24px;
      height: 24px;
    }

    @media ${({ theme }) => theme.media.desktop} {
      width: 32px;
      height: 32px;
    }

    & use {
      width: 100%;
      height: 100%;
    }
  }
`;

export const LinkHeader = styled(Link)`
  color: ${({ theme }) => theme.colors.colorWhite};
  font-size: 12px;
  font-weight: 600;
  transition:
    transform 250ms ${({ theme }) => theme.cubicBezier},
    color 250ms ${({ theme }) => theme.cubicBezier};

  &:hover,
  &:focus {
    transform: scale(1.1);
    color: ${({ theme }) => theme.colors.colorYellow};
  }

  &.active {
    color: ${({ theme }) => theme.colors.colorYellow}; /* Цвет для активной ссылки */
  }

  @media ${({ theme }) => theme.media.tablet} {
    font-size: 16px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    font-size: 24px;
  }
`;

export const MenuHeaderWrap = styled.div`
  display: none;

  @media ${({ theme }) => theme.media.tablet} {
    display: flex;
    gap: 16px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    gap: 40px;
  }
`;

export const HeaderWrap = styled.div`
  display: flex;
  align-items: center;

  @media ${({ theme }) => theme.media.tablet} {
    gap: 16px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    gap: 40px;
  }
`;

export const ButtonWrap = styled.div`
  border: none;
  display: flex;
  align-items: center;

  @media ${({ theme }) => theme.media.tablet} {
    background-image: ${({ theme }) => theme.colors.backgroundOcean};
    border: 1px solid ${({ theme }) => theme.colors.colorTeal};
    transition: background-color 0.3s ${({ theme }) => theme.cubicBezier};
    border-radius: 10px;
    gap: 8px;
    width: 163px;
    height: 32px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    background-image: ${({ theme }) => theme.colors.backgroundOcean};
    border: 1px solid ${({ theme }) => theme.colors.colorTeal};
    transition: background-color 0.3s ${({ theme }) => theme.cubicBezier};
    border-radius: 10px;
    gap: 14px;
    width: 190px;
    height: 48px;
  }
`;

export const EnterButton = styled.button`
  display: none;
  color: ${({ theme }) => theme.colors.colorWhite};
  cursor: pointer;

  @media ${({ theme }) => theme.media.tablet} {
    display: block;
    font-size: 16px;
    font-weight: 600;
  }

  @media ${({ theme }) => theme.media.desktop} {
    display: block;
    font-size: 24px;
    font-weight: 600;
  }
`;

export const LoginLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  width: 100%;
  height: 100%;

  @media ${({ theme }) => theme.media.tablet} {
    gap: 8px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    gap: 14px;
  }
`;

export const LoveLogo = styled.svg`
  display: none;
  fill: none;
  stroke: ${({ theme }) => theme.colors.colorWhite};
  stroke-width: 3px;
  transition: stroke 250ms ${({ theme }) => theme.cubicBezier};

  &:hover,
  &:focus {
    stroke: ${({ theme }) => theme.colors.colorYellow};
  }

  @media ${({ theme }) => theme.media.tablet} {
    display: block;
    width: 24px;
    height: 24px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    display: block;
    width: 32px;
    height: 32px;
  }
`;

export const UserLogo = styled.div`
  & svg {
    width: 24px;
    height: 24px;

    @media ${({ theme }) => theme.media.tablet} {
      width: 24px;
      height: 24px;
    }

    @media ${({ theme }) => theme.media.desktop} {
      width: 32px;
      height: 32px;
    }

    /* Это поможет сделать содержимое SVG адаптивным */
    & use {
      width: 100%;
      height: 100%;
    }
  }
`;
