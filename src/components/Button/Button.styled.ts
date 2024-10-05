import styled, { css } from 'styled-components';

export interface ButtonStyledProps {
  to?: string;
  $yellow?: boolean;
  $teal?: boolean;
  $tealForCard?: boolean;
  $ocean?: boolean;
  $disabled?: boolean;
  width?: string;
  fontSize?: string;
  margin?: string;
  icon?: boolean;
  onClick?: () => void;
  padding?: string;
  type?:'button'|'submit'
}

export const ButtonStyled = styled.button.withConfig({
  shouldForwardProp: prop => prop !== 'icon',
})<ButtonStyledProps>`
  width: ${({ width }) => width || '164px'};
  font-size: ${({ fontSize }) => fontSize || '14px'};
  font-weight: 700;
  line-height: 1.4;
  padding: ${({ padding }) => padding || '16px 6px'};
  border: none;
  border-radius: 10px;
  margin: ${({ margin }) => margin || '0'};
  transition:
    color 250ms ${({ theme }) => theme.cubicBezier},
    box-shadow 250ms ${({ theme }) => theme.cubicBezier};

  &:hover,
  &:focus {
    box-shadow: ${({ theme }) => theme.boxShadow};
  }

  ${props =>
    props.$yellow &&
    css`
      background-color: ${({ theme }) => theme.colors.backgroundYellow};

      @media ${({ theme }) => theme.media.tablet} {
        width: 322px;
        font-size: 24px;
      }

      &:hover,
      &:focus {
        color: ${({ theme }) => theme.colors.colorTeal};
      }
    `}

  ${props =>
    props.$teal &&
    css`
      background-color: ${({ theme }) => theme.colors.backgroundTeal};
      color: ${({ theme }) => theme.colors.colorWhite};

      @media ${({ theme }) => theme.media.tablet} {
        width: 322px;
        font-size: 24px;
      }

      &:hover,
      &:focus {
        color: ${({ theme }) => theme.colors.colorYellow};
      }
    `}

  ${props =>
    props.$tealForCard &&
    css`
      background-color: ${({ theme }) => theme.colors.backgroundTeal};
      color: ${({ theme }) => theme.colors.colorWhite};
      font-weight: 600;
      width: 150px;

      @media ${({ theme }) => theme.media.desktop} {
        width: 220px;
        font-size: 16px;
      }

      &:hover,
      &:focus {
        color: ${({ theme }) => theme.colors.colorYellow};
      }
    `}

	${props =>
    props.$ocean &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.colorTeal};
      background: ${({ theme }) => theme.colors.backgroundOcean};
      color: ${({ theme }) => theme.colors.colorWhite};
      font-weight: 600;
      padding: 10px 24px;

      &:hover,
      &:focus {
        color: ${({ theme }) => theme.colors.colorYellow};
      }
    `}

	${props =>
    props.$disabled &&
    css`
      background-color: ${({ theme }) => theme.colors.backgroundGray};
      color: ${({ theme }) => theme.colors.colorGray};
      pointer-events: none;
    `}

   ${props =>
    props.icon &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;

      @media ${({ theme }) => theme.media.tablet} {
        gap: 16px;
      }
    `}
`;
