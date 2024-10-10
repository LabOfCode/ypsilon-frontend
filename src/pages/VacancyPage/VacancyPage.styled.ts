import styled from 'styled-components';

export const Wrapper = styled.div`
  background-image: ${({ theme }) => theme.colors.backgroundOcean};
  height: 100vh;
  padding-top: 40px;

  @media ${({ theme }) => theme.media.tablet} {
    padding-top: 75px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    padding-top: 104px;
  }
`;

export const Content = styled.section`
  max-width: 1440px;
  margin: 0 auto;
  padding: 40px 16px 74px 16px;

  @media ${({ theme }) => theme.media.mobile} {
    max-width: 360px;
  }

  @media ${({ theme }) => theme.media.tablet} {
    width: 744px;
    padding: 66px 36px 49px 36px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    width: 1440px;
    padding: 80px 270px 109px 270px;
  }
`;
