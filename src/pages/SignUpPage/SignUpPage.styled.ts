import styled from 'styled-components';
import { theme } from '@/Theme';


export const ContainerStyled = styled.div`
  background-image: ${({ theme }) => theme.colors.backgroundOcean};
  position: relative  
  height: 100vh;     
  padding-bottom: 276px; 

  @media ${theme.media.tablet} {
    padding-bottom: 272px; 
  }

  @media ${theme.media.desktop} {
    padding-bottom: 196px; 
  }
`;

export const StyledParrotIcon = styled.img`
    position: absolute;
    width: 270px;
    height: 260px;
    bottom: -48%;  
    left: 8%;

  @media ${theme.media.tablet} {
    width: 270px;
    height: 260px;
    bottom: -52%;  
    left: 2%;
  }

  @media ${theme.media.desktop} {
    width: 453px;
    height: 427px;
    top: 89%;  
    left: 2%;
  }
`;
