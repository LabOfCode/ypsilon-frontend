import styled from 'styled-components';

export const VacancyWrapper = styled.div`
  background-image: ${({ theme }) => theme.colors.backgroundOcean};
  padding-top: 80px;
  padding-bottom: 74px;

  @media ${({ theme }) => theme.media.tablet} {
    padding-top: 122px;
    padding-bottom: 49px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    padding-top: 184px;
    padding-bottom: 109px;
  }
`;

export const Image = styled.img`
  width: 100%;
  margin: 0 auto;
  border-radius: 8px;
  border: 3px solid ${({ theme }) => theme.colors.colorTeal};
  box-shadow: ${({ theme }) => theme.boxShadow};

  @media ${({ theme }) => theme.media.desktop} {
    width: 900px;
  }
`;

export const ContentWrapper = styled.div`
  margin: 32px auto 0 auto;
  padding: 16px 8px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.colorTeal};
  background-image: ${({ theme }) => theme.colors.backgroundOcean};

  @media ${({ theme }) => theme.media.tablet} {
    margin: 82px auto 0 auto;
    padding: 24px 8px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    width: 900px;
    margin: 64px auto 0 auto;
    padding: 24px 16px;
  }
`;
