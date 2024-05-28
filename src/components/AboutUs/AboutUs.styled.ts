import styled from 'styled-components';

import Flex from '../Flex/Flex';

export const AboutUsWrapper = styled.div`
  background-image: ${({ theme }) => theme.colors.backgroundOcean};
  padding-top: 11px;
  padding-bottom: 11px;

  @media ${({ theme }) => theme.media.tablet} {
    margin-top: 24px;
    padding-bottom: 24px;
  }

  @media ${({ theme }) => theme.media.desctop} {
    margin-top: 40px;
    padding-bottom: 40px;
  }
`;

export const TextWrap = styled.div`
  margin-bottom: 48px;

  @media ${({ theme }) => theme.media.tablet} {
    width: 655px;
    margin: 0 auto 24px auto;
  }

  @media ${({ theme }) => theme.media.desctop} {
    width: 905px;
    margin: 0 auto 48px auto;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.colorWhite};
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  line-height: 3;
  margin-bottom: 40px;

  @media ${({ theme }) => theme.media.tablet} {
    font-size: 36px;
    font-weight: 700;
  }

  @media ${({ theme }) => theme.media.desctop} {
    font-size: 48px;
    margin-bottom: 64px;
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.colorWhite};
  text-align: center;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 12px;
  line-height: 1.4;
  margin: 0 auto;

  & span {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.colorYellow};
    font-weight: 700;

    @media ${({ theme }) => theme.media.tablet} {
      font-size: 24px;
    }

    @media ${({ theme }) => theme.media.desctop} {
      font-size: 32px;
    }
  }

  @media ${({ theme }) => theme.media.tablet} {
    font-size: 16px;
    font-weight: 500;
  }

  @media ${({ theme }) => theme.media.desctop} {
    font-size: 24px;
  }
`;

export const IconWrap = styled.div`
  width: 150px;
  text-align: center;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 12px;
  font-weight: 700;
  line-height: 1.4;

  @media ${({ theme }) => theme.media.tablet} {
    font-size: 14px;
    font-weight: 600;
  }

  @media ${({ theme }) => theme.media.desctop} {
    width: 260px;
    font-size: 24px;
  }

  & img {
    width: 45px;
    height: 45px;
    margin: 0 auto;

    @media ${({ theme }) => theme.media.desctop} {
      width: 90px;
      height: 90px;
    }
  }
`;

export const FlexStyled = styled(Flex)`
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;

  @media ${({ theme }) => theme.media.tablet} {
    flex-wrap: nowrap;
  }

  @media ${({ theme }) => theme.media.desctop} {
    gap: 40px;
  }
`;
