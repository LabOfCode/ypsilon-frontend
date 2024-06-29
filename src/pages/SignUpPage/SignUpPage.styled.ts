import styled from 'styled-components';
import { theme } from '@/Theme';

export const ContainerStyled = styled.div`
  background-image: ${({ theme }) => theme.colors.backgroundOcean};
  position: relative;
  display: flex;
  flex-direction: column;
  padding-bottom: 276px; 
  
  @media ${theme.media.tablet} {
    padding-bottom: 272px;  
  }

  @media ${theme.media.desktop} {
  padding-bottom: 196px; 
  }
`;

export const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledParrotIcon = styled.img`
  position: absolute;
  width: 270px;
  height: 260px;
  bottom: 0;  
  left: 36%;
  transform: translateX(-50%);

  @media ${theme.media.tablet} {
    width: 270px;
    height: 260px;
    left: 22%;
    bottom: 0;  
  }

  @media ${theme.media.desktop} {
    left: 24%;
    width: 453px;
    height: 427px;
  }
`;
