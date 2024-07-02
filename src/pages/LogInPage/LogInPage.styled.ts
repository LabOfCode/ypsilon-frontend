import styled from 'styled-components';
import { theme } from '@/Theme';

export const ContainerStyled = styled.div`
  background-image: ${({ theme }) => theme.colors.backgroundOcean};
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
    transform: rotate(90deg);
    left: -1.6%;
    bottom: 15%;
  }
`;

export const StyledParrotIconRight = styled.img`
  position: absolute;
  display: none;
  width: 198px;
  height: 188px;
  transform: rotate(2deg);
  right: 4%;
  bottom: 4%;

  @media ${theme.media.desktop} {
    display: block;
    width: 386px;
    height: 357px;
    transform: rotate(-1.5deg);
    right: 2%;
    bottom: -0.6%;
  }
`;
