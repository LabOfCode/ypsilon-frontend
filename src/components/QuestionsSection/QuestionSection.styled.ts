import styled from 'styled-components';

import { SvgMail } from '@/assets/icons/icons';

export const Wrapper = styled.section`
  padding-top: 40px;
  padding-bottom: 40px;

  @media ${({ theme }) => theme.media.tablet} {
    padding-top: 60px;
    padding-bottom: 24px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    padding-top: 72px;
    padding-bottom: 80px;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.colorBlack};
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.75;
  margin-bottom: 32px;

  @media ${({ theme }) => theme.media.tablet} {
    margin-bottom: 76px;
    font-size: 32px;
    font-weight: 600;
    line-height: 1.3;
  }

  @media ${({ theme }) => theme.media.desktop} {
    margin-bottom: 63px;
    font-size: 48px;
    line-height: 1.4;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.colors.colorYellow};
  font-size: inherit;
  font-weight: inherit;
`;

export const StyledMailSvg = styled(SvgMail)`
  width: 24px;
  height: 24px;
  stroke: ${({ theme }) => theme.colors.colorWhite};
  transition: stroke 250ms ${({ theme }) => theme.cubicBezier};

  @media ${({ theme }) => theme.media.tablet} {
    width: 32px;
    height: 32px;
  }
`;

export const Feedback = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 14px;
  margin-top: 32px;
  align-items: center;

  @media ${({ theme }) => theme.media.tablet} {
    justify-content: flex-end;
    margin-top: 26px;
    gap: 32px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    margin-top: 40px;
  }

  &:hover ${StyledMailSvg} {
    stroke: ${({ theme }) => theme.colors.colorYellow};
  }
`;

export const FeedbackText = styled.p`
  color: ${({ theme }) => theme.colors.colorYellow};
  text-align: right;
  font-size: 14px;
  font-weight: 600;
  line-height: normal;
  width: 150px;

  @media ${({ theme }) => theme.media.tablet} {
    width: auto;
    font-size: 20px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    font-size: 24px;
  }
`;
