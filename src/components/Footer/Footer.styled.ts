import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Container from '../Container';
import Flex from '../Flex/Flex';

export const ContainerFooter = styled(Container)`
  position: relative;
`;

export const FooterWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundDarkTeal};
  padding-top: 24px;
  padding-bottom: 26px;

  @media ${({ theme }) => theme.media.tablet} {
    padding-top: 22px;
    padding-bottom: 27px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    padding-top: 43px;
    padding-bottom: 40px;
  }
`;

export const LogoLink = styled(Link)`
  position: absolute;
  top: 0px;
  left: 193px;

  @media ${({ theme }) => theme.media.tablet} {
    position: static;
    margin-left: 0px;

    & img {
      width: 98px;
      height: 58px;
    }
  }

  @media ${({ theme }) => theme.media.desktop} {
    & img {
      width: 63px;
      height: 40px;
    }
  }
`;

export const LinkFooter = styled(Link)`
  color: ${({ theme }) => theme.colors.colorWhite};
  font-size: 12px;
  font-weight: 600;

  transform: scale();
  transition:
    transform 250ms ${({ theme }) => theme.cubicBezier},
    color 250ms ${({ theme }) => theme.cubicBezier};

  &:hover,
  &:focus {
    transform: scale();
    color: ${({ theme }) => theme.colors.colorYellow};
  }

  @media ${({ theme }) => theme.media.tablet} {
    font-size: 16px;
  }
  @media ${({ theme }) => theme.media.desktop} {
    font-size: 24px;
  }
`;

export const MenuFooterWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px;
  width: 360px;
  margin: 0;
  margin-bottom: 22px;

  @media ${({ theme }) => theme.media.tablet} {
    flex-direction: row;
    margin-left: 103px;
  }
  @media ${({ theme }) => theme.media.desktop} {
    gap: 40px;
    margin-left: 205px;
    margin-bottom: 32px;
  }
`;

export const FooterWrap = styled.div`
  /* display: flex;
  gap: 54px; */
  margin-bottom: 24px;
  @media ${({ theme }) => theme.media.tablet} {
    display: block;
  }
`;

export const WrapLogo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 39px;
  position: absolute;
  top: 68px;
  left: 193px;
  & Flex {
    gap: 16px;
  }

  @media ${({ theme }) => theme.media.tablet} {
    top: 77px;
    left: 360px;
  }
  @media ${({ theme }) => theme.media.desktop} {
    top: 42px;
    left: 1250px;

    & img {
      width: 40px;
      height: 40px;
    }
  }
`;

export const Line = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.colorTeal};
  height: 1px;

  @media ${({ theme }) => theme.media.tablet} {
    width: 550px;
    margin-bottom: 80px;
  }
  @media ${({ theme }) => theme.media.desktop} {
    width: 900px;
    margin-bottom: 32px;
  }
`;

export const TextFlex = styled.div`
  display: flex;
  gap: 16px;

  color: ${({ theme }) => theme.colors.colorTeal};
  font-size: 12px;
  font-weight: 600;

  @media ${({ theme }) => theme.media.tablet} {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25;
    margin-left: 180px;
    gap: 64px;
  }
  @media ${({ theme }) => theme.media.desktop} {
    line-height: 1.4;
    margin-left: 400px;
  }
`;

export const LogoLinkWrap = styled.div`
  @media ${({ theme }) => theme.media.tablet} {
    display: flex;
    gap: 22px;
    align-items: center;
  }
  @media ${({ theme }) => theme.media.desktop} {
    gap: 101px;
  }
`;
