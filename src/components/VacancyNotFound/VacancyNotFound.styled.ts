import styled from 'styled-components';

import Container from '@/components/Container';

export const ContainerStyled = styled(Container)`
  padding-top: 40px;
  padding-bottom: 40px;

  @media ${({ theme }) => theme.media.tablet} {
    padding-top: 195px;
    padding-bottom: 56px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    padding-top: 116px;
    padding-bottom: 80px;
  }
`;

export const Text = styled.p`
  max-width: 100%;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.4;
  margin: 0 auto;

  background: linear-gradient(180deg, #01252a 0%, #0392a6 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media ${({ theme }) => theme.media.tablet} {
    width: 664px;
    font-size: 20px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    width: 1130px;
    font-size: 32px;
  }
`;

export const ImgWtap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  @media ${({ theme }) => theme.media.tablet} {
    margin-top: 42px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    margin-top: 8px;
  }
`;

export const LineImg = styled.img`
  width: 268px;

  @media ${({ theme }) => theme.media.tablet} {
    width: 548px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    width: 1045px;
  }
`;

export const ParrotImg = styled.img`
  width: 54px;
  height: 54px;

  @media ${({ theme }) => theme.media.tablet} {
    width: 121px;
    height: 121px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    width: 224px;
    height: 224px;
  }
`;
