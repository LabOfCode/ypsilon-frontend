import styled from 'styled-components';

export const Wrapper = styled.section`
  background-image: ${({ theme }) => theme.colors.backgroundOcean};
  padding-top: 32px;
  padding-bottom: 32px;

  @media ${({ theme }) => theme.media.tablet} {
    padding-top: 57px;
    padding-bottom: 65px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    padding-top: 40px;
    padding-bottom: 60px;
  }
`;

export const Title = styled.h2`
color: ${({ theme }) => theme.colors.colorWhite};
text-align:center;
font-size:24px;
font-weight: 600;
line-height: 1.4;
margin-bottom:32px;

  @media ${({ theme }) => theme.media.tablet} {
 margin-bottom:44px;
 font-size:36px;
 font-weight: 700;
  }

  @media ${({ theme }) => theme.media.desktop} {
 margin-bottom:42px;
 font-size:48px;
  }
`