import styled from 'styled-components';
import { theme } from '@/Theme';

export const ContainerStyled = styled.div`
  background-image: ${({ theme }) => theme.colors.backgroundOcean};
  height: 100vh;
  position: relative; /* Add relative positioning to the container */
`;

export const IconContainer = styled.div`
  display: flex;
  position: fixed;
  justify-content: space-between;
  align-items: flex-start; 
  width: 100%; 
`;

export const StyledParrotIconLeft = styled.img`
  width: 198px;
  height: 188px;
  transform: rotate(-2deg);
  margin-left: 2%; 
  margin-top: -10%; 

  @media ${theme.media.tablet} {
    width: 198px;
    height: 178px;
    transform: rotate(-1deg);
    margin-left: 10%; 
    margin-top: 2%; 
  }

  @media ${theme.media.desktop} {
    width: 511px;
    height: 473px;
    transform: rotate(90deg);
    margin-left: -2%; 
    margin-top: -24%; 
  }
`;

export const StyledParrotIconRight = styled.img`
  display: none;

  @media ${theme.media.desktop} {
    display: block;
    width: 386px;
    height: 357px;
    transform: rotate(-1.5deg);
    margin-right: 2%; 
    margin-top: -4%; 
  }
`;