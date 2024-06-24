import styled from 'styled-components';
import { theme } from '@/Theme';

export const ContainerStyled = styled.div`
  background-image: ${({ theme }) => theme.colors.backgroundOcean};
  position: relative  
  height: 100vh;     
  padding-bottom: 204px; 

  @media ${theme.media.tablet} {
    padding-bottom: 180px; 
  }

  @media ${theme.media.desktop} {
    padding-bottom: 68px; 
  }
`;

export const StyledparrotIconLeft = styled.img`
    position: absolute;
    width: 198px;
    height: 188px;
    top: 82%;  
    left: 2%;
    transform: rotate(-2deg);

  @media ${theme.media.tablet} {
    width: 198px;
    height: 178px;
    top: 93%;  
    left: 10%;
    transform: rotate(-1deg);
  }

  @media ${theme.media.desktop} {
    width: 511px;
    height: 473px;
    top: 30%;  
    left: -2%;
    transform: rotate(90deg);
  }
`;

export const StyledParrotIconLeft = styled.img`
    position: absolute;
    width: 198px;
    height: 188px;
    top: 82%;  
    left: 2%;
    transform: rotate(-2deg);

  @media ${theme.media.tablet} {
    width: 198px;
    height: 178px;
    top: 93%;  
    left: 10%;
    transform: rotate(-1deg);
  }

  @media ${theme.media.desktop} {
    width: 511px;
    height: 473px;
    top: 20%;  
    left: -2%;
    transform: rotate(90deg);
  }
`;

export const StyledParrotIconRight = styled.img`
  display: none;

  @media ${theme.media.desktop} {
    display: block;
    position: absolute;
    width: 386px;
    height: 357px;
    top: 41.5%;  
    right: 2%;
    transform: rotate(-1.5deg);
  }
`;

