import { Link } from 'react-router-dom';
import styled from 'styled-components';



import Flex from '../Flex/Flex';


export const FooterWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundDarkTeal};
  padding-bottom: 15px;
  padding-top:11px;

  @media ${({ theme }) => theme.media.tablet} {
    padding-top: 24px;
    padding-bottom: 24px;
  }

  @media ${({ theme }) => theme.media.desctop} {
    padding-top: 40px;
    padding-bottom: 40px;
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
`;

export const MenuFooterWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 6px;
  width: 360px;
  margin: 0;
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
`;

export const Line = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.colorTeal};
  /* border-bottom: 1px solid ${({ theme }) => theme.colors.colorTeal}; */
  height: 1px;
  margin-bottom: 24px;
`;

export const TextFlex = styled.div`
  display: flex;
  gap: 20px;

  color: ${({ theme }) => theme.colors.colorTeal};
  font-size: 12px;
  font-weight: 600;
`;