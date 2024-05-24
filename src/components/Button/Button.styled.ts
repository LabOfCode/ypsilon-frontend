import styled, { css } from 'styled-components';

export interface ButtonStyledProps {
  yellow?: boolean;
  teal?: boolean;
  ocean?: boolean;
  disabled?: boolean;
  width?: string;
  fontSize?: string;
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
  width: ${({ width }) => width || '322px'};
  font-size: ${({ fontSize }) => fontSize || '24px'};
  font-weight: 700;
  line-height: 1.4;
  padding: 9px 21px;
  border: none;
  border-radius: 10px;

  margin-bottom: 30px;

  &:hover,
  &:focus {
    box-shadow: ${({ theme }) => theme.boxShadow};
  }

  ${props =>
    props.yellow &&
    css`
      background-color: ${({ theme }) => theme.colors.backgroundYellow};

      &:hover,
      &:focus {
        color: ${({ theme }) => theme.colors.colorTeal};
      }
    `}

  ${props =>
    props.teal &&
    css`
      background-color: ${({ theme }) => theme.colors.backgroundTeal};
      color: ${({ theme }) => theme.colors.colorWhite};

      &:hover,
      &:focus {
        color: ${({ theme }) => theme.colors.colorYellow};
      }
    `}

		${props =>
    props.ocean &&
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
    props.disabled &&
    css`
      background-color: ${({ theme }) => theme.colors.backgroundGray};
      color: ${({ theme }) => theme.colors.colorGray};
      pointer-events: none;
    `}
`;
