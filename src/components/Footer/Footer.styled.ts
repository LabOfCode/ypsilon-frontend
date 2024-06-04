import { Link } from 'react-router-dom';
import styled from 'styled-components';



import Flex from '../Flex/Flex';


export const FooterWrapper = styled.div`
position:relative;
  background-color: ${({ theme }) => theme.colors.backgroundDarkTeal};
  padding-top:10px;
  padding-bottom: 19px;

  @media ${({ theme }) => theme.media.tablet} {
    padding-top: 22px;
    padding-bottom: 27px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    padding-top: 40px;
    padding-bottom: 40px;
  }
`;

export const LogoLink = styled(Link)`
  position: absolute;
  top: 10px;
  left: 193px;

  @media ${({ theme }) => theme.media.tablet} {
    position: static;
    margin-left: 0px;
    margin-top: 71px;

    & img {
      width: 98px;
      height: 58px;
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
`;

export const MenuFooterWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px;
  width: 360px;
  margin: 0;

  @media ${({ theme }) => theme.media.tablet} {
   flex-direction:row;
   
  }
`;

export const FooterWrap = styled.div`
  display: flex;
  gap: 54px;
  margin-bottom:42px;
`;

export const WrapLogo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 39px;
  position: absolute;
  top: 89px;
  left: 193px;

  @media ${({ theme }) => theme.media.tablet} {
    top: 97px;
    left: 400px;
  }
`;

export const Line = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.colorTeal};
  height: 1px;
  margin-bottom: 24px;

  @media ${({ theme }) => theme.media.tablet} {
    border-top: 10px solid ${({ theme }) => theme.colors.colorTeal};
    
  }
`;

export const TextFlex = styled.div`
  display: flex;
  gap: 20px;

  color: ${({ theme }) => theme.colors.colorTeal};
  font-size: 12px;
  font-weight: 600;
`;