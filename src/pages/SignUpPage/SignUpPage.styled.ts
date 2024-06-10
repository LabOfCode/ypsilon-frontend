import styled from 'styled-components';

export const ContainerStyled = styled.div`
  background-image: ${({ theme }) => theme.colors.backgroundOcean};
//   padding-top: 92px;
//   padding-bottom: 41px;

  @media ${({ theme }) => theme.media.tablet} {
   //  padding-top: 128px;
   //  padding-bottom: 119px;
  }

  @media ${({ theme }) => theme.media.desktop} {
   //  padding-top: 184px;
   //  padding-bottom: 67px;
  }
`;