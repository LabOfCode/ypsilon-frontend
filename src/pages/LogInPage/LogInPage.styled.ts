import styled from 'styled-components';
import { theme } from '@/Theme';

export const ContainerStyled = styled.div`
  background-image: ${({ theme }) => theme.colors.backgroundOcean};
  padding-top: 80px;

  @media ${theme.media.tablet} {
    padding-top: 114px;
  }

  @media ${theme.media.desktop} {
    padding-top: 184px;
  }
`;

export const IconsContainer = styled.div`
  position: relative; 
  padding-bottom: 204px;

  @media ${theme.media.tablet} {
    padding-bottom: 180px;
  }

  @media ${theme.media.desktop} {
    padding-bottom: 68px;
  }
`;

export const StyledParrotIconLeft = styled.img`
  position: absolute;
  width: 198px;
  height: 188px;
  transform: rotate(-1.8deg);
  left: 4%;
  bottom: -0.3%;

  @media ${theme.media.tablet} {
    width: 198px;
    height: 178px;
    transform: rotate(-1.4deg);
    left: 4%;
    bottom: -0.3%;
  }

  @media ${theme.media.desktop} {
    width: 511px;
    height: 473px;
    transform: rotate(88.45deg);
    left: -4.8%;
    bottom: 80%;
  }
`;

export const StyledParrotIconRight = styled.img`
  position: absolute;
  display: none;

  @media ${theme.media.desktop} {
    display: block;
    width: 386px;
    height: 357px;
    transform: rotate(-1.5deg);
    right: 2%;
    bottom: -9%;
  }
`;
