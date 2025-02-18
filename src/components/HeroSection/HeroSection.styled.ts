import styled from 'styled-components';

import Container from '../Container';

export const HeroWrapper = styled.div`
  /* width: 100vw;
  height: 100vh; */
  /* position: relative; */
  /* overflow: hidden; */
  margin-bottom: 40px;

  @media ${({ theme }) => theme.media.tablet} {
    margin-bottom: 50px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    margin-bottom: 80px;
  }
`;

export const SlideImage = styled.div.withConfig({
  shouldForwardProp: prop => prop !== 'bgImage',
})<{ bgImage: string }>`
  height: 432px;
  background: ${({ theme }) => theme.colors.backgroundDarkTeal};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${props => props.bgImage});

  @media ${({ theme }) => theme.media.tablet} {
    height: 512px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    height: 900px;
  }
`;

export const ContainerStyled = styled(Container)`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translatex(-50%);
  padding-top: 184px;
  height: 432px;

  @media ${({ theme }) => theme.media.tablet} {
    padding-top: 176px;
    height: 512px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    padding-top: 272px;
    height: 900px;
  }
`;

export const HeroContent = styled.div`
  margin: 0 auto;
  width: 328px;
  text-align: center;

  @media ${({ theme }) => theme.media.tablet} {
    margin: 0 auto;
    width: 664px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    margin-left: 155px;
    transform: translateX(0);
    width: 783px;
    height: 480px;
    text-align: start;
  }
`;

export const HeroTitle = styled.h1`
  color: ${({ theme }) => theme.colors.colorWhite};
  text-align: left;
  font-size: 24px;
  font-weight: 700;
  line-height: 35px;
  margin-bottom: 8px;

  @media ${({ theme }) => theme.media.tablet} {
    width: 495px;
    font-size: 36px;
    line-height: 50.4px;
    margin-bottom: 16px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    width: 787px;
    font-size: 64px;
    line-height: 89.6px;
    margin-bottom: 40px;
  }
`;

export const HeroText = styled.p`
  color: ${({ theme }) => theme.colors.colorWhite};
  font-size: 14px;
  font-weight: 500;
  line-height: 17.07px;
  text-align: left;
  margin-bottom: 32px;

  @media ${({ theme }) => theme.media.tablet} {
    width: 495px;
    font-size: 20px;
    font-weight: 600;
    line-height: 28px;
    margin-bottom: 24px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    width: 787px;
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 40px;
  }
`;
