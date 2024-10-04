import styled from 'styled-components';

import { SvgMinus, SvgPlus } from '@/assets/icons/icons';

export const SvgPlusStyled = styled(SvgPlus)`
  width: 32px;
  height: 32px;
  flex-shrink: 0;

  @media ${({ theme }) => theme.media.desktop} {
    width: 40px;
    height: 40px;
  }
`;

export const SvgMinusStyled = styled(SvgMinus)`
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  display: none;

  @media ${({ theme }) => theme.media.desktop} {
    width: 40px;
    height: 40px;
  }
`;

export const Details = styled.details`
  width: 100%;
  display: flex;

  &:hover,
  &:focus {
    cursor: pointer;
  }

  &:first-of-type summary {
    border-top: 2px solid #0fb7d1;
  }

  &[open] ${SvgPlusStyled} {
    display: none;
  }

  &[open] ${SvgMinusStyled} {
    display: block;
  }
`;

export const QuestionBlock = styled.summary`
  display: flex;
  padding: 16px 0;
  border-bottom: 2px solid #0fb7d1;
  gap: 18px;
  align-items: center;
  justify-content: space-between;
  list-style: none;

  @media ${({ theme }) => theme.media.tablet} {
    padding: 16px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    padding: 32px;
  }

  &::-webkit-details-marker {
    display: none;
  }
`;

export const Question = styled.p`
  color: ${({ theme }) => theme.colors.colorBlack};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;

  @media ${({ theme }) => theme.media.tablet} {
    font-size: 16px;
    font-weight: 700;
  }

  @media ${({ theme }) => theme.media.desktop} {
    font-size: 24px;
  }
`;

export const Answer = styled.p`
  padding: 16px 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.6;

  @media ${({ theme }) => theme.media.tablet} {
    padding: 16px;
    font-size: 16px;
    font-weight: 500;
  }

  @media ${({ theme }) => theme.media.desktop} {
    padding: 32px;
  }
`;
