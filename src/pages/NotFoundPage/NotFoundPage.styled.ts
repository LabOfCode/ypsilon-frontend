import styled from 'styled-components';

import Container from '@/components/Container';

export const ContainerStyled = styled(Container)`
  background-image: ${({ theme }) => theme.colors.backgroundOcean};
  padding-top: 92px;
  padding-bottom: 41px;

  @media ${({ theme }) => theme.media.tablet} {
    padding-top: 128px;
    padding-bottom: 119px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    padding-top: 184px;
    padding-bottom: 67px;
  }
`;

export const Text = styled.p`
  max-width: 100%;
  color: ${({ theme }) => theme.colors.colorYellow};
  text-align: center;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.4;
  margin: 0 auto;

  @media ${({ theme }) => theme.media.tablet} {
    width: 553px;
    font-size: 24px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    width: 1001px;
    font-size: 36px;
  }
`;

export const NotFoundImg = styled.img`
  width: 324px;
  margin: 16px auto;

  @media ${({ theme }) => theme.media.tablet} {
    width: 500px;
    margin: 80px auto;
  }

  @media ${({ theme }) => theme.media.desktop} {
    width: 800px;
    margin: 96pxs auto;
  }
`;
