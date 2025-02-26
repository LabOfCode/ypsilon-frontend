import styled from 'styled-components';

import Container from '../Container';

export const Wrapper = styled.section`
  padding-bottom: 40px;

  @media ${({ theme }) => theme.media.tablet} {
    padding-bottom: 62px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    padding-bottom: 80px;
  }
`;

export const ContainerStyled = styled(Container)`
  position: relative;
  padding-top: 7px;
  padding-bottom: 64px;

  @media ${({ theme }) => theme.media.tablet} {
    padding-bottom: 18px;
  }
`;

export const MapImage = styled.img`
  width: 100%;
  margin: 0 auto;

  @media ${({ theme }) => theme.media.desktop} {
    width: 946px;
  }
`;

export const TextContainer = styled.div`
  position: absolute;
  top: 164px;
  left: 64px;
  width: 273px;
  display: flex;
  padding: 11px 0px 5px 2.484px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 15px;

  & h3 {
    color: ${({ theme }) => theme.colors.colorDarkTeal};
    font-feature-settings:
      'liga' off,
      'clig' off;
    font-size: 14px;
    font-weight: 600;
    line-height: normal;
  }

  & p {
    color: ${({ theme }) => theme.colors.colorDarkTeal};
    font-feature-settings:
      'liga' off,
      'clig' off;
    font-size: 12px;
    font-weight: 400;
    line-height: normal;
  }

  @media ${({ theme }) => theme.media.tablet} {
    width: 186px;
    top: 226px;
    left: 14px;

    & h3 {
      font-size: 18px;
      line-height: 1.4;
    }

    & p {
      font-size: 14px;
      line-height: 1.4;
    }
  }

  @media ${({ theme }) => theme.media.desktop} {
    width: 263px;
    top: 291px;
    left: 204px;
    padding-bottom: 32px;
    align-items: flex-start;
    gap: 8px;

    & h3 {
      font-size: 28px;
      line-height: 1.4;
    }

    & p {
      font-size: 18px;
    }
  }
`;

export const ContactContainter = styled.div`
  position: absolute;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  gap: 4px;
  top: -24px;
  left: 4px;
  background-color: ${({ theme }) => theme.colors.backgroundWhite};
  padding: 8px 8px 12px 8px;

  & h4 {
    color: ${({ theme }) => theme.colors.colorBlack};
    font-feature-settings:
      'liga' off,
      'clig' off;
    font-size: 13px;
    font-weight: 700;
    line-height: 1.5;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  & p {
    color: ${({ theme }) => theme.colors.colorBlack};
    font-feature-settings:
      'liga' off,
      'clig' off;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.4;
  }

  @media ${({ theme }) => theme.media.tablet} {
    top: 0;
    left: 180px;
    gap: 8px;
    padding: 20px 20px 28px 20px;

    & h4 {
    }
  }

  @media ${({ theme }) => theme.media.desktop} {
    top: 24px;
    left: 480px;

    & h4 {
      font-size: 18px;
    }
    & p {
      font-size: 16px;
    }
  }
`;
