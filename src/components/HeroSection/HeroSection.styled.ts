import styled from 'styled-components';

import Flex from '../Flex/Flex';

export const HeroWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  margin-bottom: 40px;
`;

export const SlideImage = styled.div<{ bgImage: string }>`
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-image: url(${props => props.bgImage});
  
`;

export const HeroContent = styled.div`
  position: absolute;
    bottom: 21px;
  left: 50%;
  transform: translateX(-50%);
  width: 328px;
  text-align: center;

  @media ${({ theme }) => theme.media.tablet} {
     bottom: 30px;
    width: 664px;
  }

  @media ${({ theme }) => theme.media.desktop} {
     bottom: 148px;
    width: 783px;
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
  }
`;

