import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Container from '../Container';

export const HeaderWrapper = styled.div`
  background-image: ${({ theme }) => theme.colors.backgroundOcean};
`;

export const HeaderContent = styled(Container)`
  position: relative;
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
      width: 126px;
      height: 74px;
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

export const MenuHeaderWrap = styled.div`
  display: flex;
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

export const HeaderWrap = styled.div`
  /* display: flex;
  gap: 54px; */
  margin-bottom: 24px;
  @media ${({ theme }) => theme.media.tablet} {
    display: block;
    margin-bottom: 0px;
  }
  @media ${({ theme }) => theme.media.desktop} {
    margin-bottom: 0px;
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