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

export const IconContainer = styled.div`
  position: relative; 
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
  bottom: -0.3%;  
  left: -2%;

  @media ${theme.media.tablet} {
    width: 270px;
    height: 260px;
    left: -2%;
    bottom: 0;  
  }

  @media ${theme.media.desktop} {
    left: 10%;
    width: 453px;
    height: 427px;
    bottom: 0.1%;  
    left: -1%;
  }
`;

export const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


