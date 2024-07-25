import styled from 'styled-components';

import Container from '@/components/Container';

export const ContactsPageWrapper = styled.div`
  background-image: ${({ theme }) => theme.colors.backgroundOcean};
  padding-top: 80px;
  padding-bottom: 39px;

  @media ${({ theme }) => theme.media.tablet} {
    padding-top: 136px;
    padding-bottom: 48px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    padding-top: 117px;
    padding-bottom: 55px;
  }
`;

export const ContainerStyled = styled(Container)`
  @media ${({ theme }) => theme.media.desktop} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 43px;
  }
`;

export const ContactItem = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 28px;

  &:not(:last-child) {
    margin-bottom: 16px;

    @media ${({ theme }) => theme.media.tablet} {
      margin-bottom: 80px;
    }
  }

  & p,
  & a {
    color: ${({ theme }) => theme.colors.colorWhite};
    font-size: 12px;
    font-weight: 600;
    line-height: 1.4;
    transition: color 250ms ${({ theme }) => theme.cubicBezier};

    @media ${({ theme }) => theme.media.tablet} {
      font-size: 24px;
    }
  }

  & a:hover,
  & a:focus {
    color: ${({ theme }) => theme.colors.colorYellow};
  }

  @media ${({ theme }) => theme.media.tablet} {
    gap: 24px;
  }
`;

export const SvgIcon = styled.svg`
  width: 20px;
  height: 20px;

  @media ${({ theme }) => theme.media.tablet} {
    width: 40px;
    height: 40px;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;

  @media ${({ theme }) => theme.media.tablet} {
    gap: 16px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    flex-direction: column;
    align-items: start;
  }
`;

export const Iframe = styled.iframe`
  height: 354px;
  margin-top: 40px;

  @media ${({ theme }) => theme.media.tablet} {
    height: 730px;
    margin-top: 48px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    width: 785px;
    height: 781px;
    margin-top: 0;
  }
`;
