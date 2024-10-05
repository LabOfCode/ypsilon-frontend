import { Field } from 'formik';
import styled from 'styled-components';
import { css } from 'styled-components';

export const StyledTextField = styled.input<{ error?: string }>`
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  padding: 10px 15px;
  border: ${({ error, theme }) => (error ? `1px solid ${theme.colors.colorRed}` : 'none')};
  border-radius: 10px;
  outline: none;
  font-size: 12px;
  font-family: 'Montserrat', sans-serif;
  color: ${({ theme }) => theme.colors.colorBlack};
  background-color: ${({ theme }) => theme.colors.colorWhite};
  transition: border 250ms ${({ theme }) => theme.cubicBezier};

  &::placeholder {
    font-weight: 400;
    color: ${({ theme }) => theme.colors.colorGray};
  }

  ${({ as }) =>
    as === 'textarea' &&
    `
    height: auto;
    min-height: 100px; 
    resize: none;
  `}
`;
