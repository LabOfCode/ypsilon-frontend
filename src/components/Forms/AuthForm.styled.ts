import styled from 'styled-components';
import { theme } from '@/Theme';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 328px;
  border: 1px solid ${theme.colors.colorWhite};
  background-image: ${({ theme }) => theme.colors.backgroundOcean};
  padding: 20px;
  border-radius: 8px;
  box-shadow: ${theme.boxShadow};
  margin: 0 auto; /* Центрирование формы */
  margin-bottom: 224px;

  @media ${({ theme }) => theme.media.tablet} {
    width: 424px;
    margin-bottom: 272px;
  }
  @media ${({ theme }) => theme.media.desktop} {
    width: 424px;
    margin-bottom: 196px;
  }
`;

export const Legend = styled.legend`
  color: ${theme.colors.colorWhite};
  font-size: 24px;
  margin-bottom: 24px;
  text-align: center;
`;

export const PLink = styled.p`
  color: ${theme.colors.colorYellow};
  font-size: 16px;
  text-decoration: underline;

  &:hover {
    text-decoration: underline;
  }
`;

export const P = styled.p`
  color: ${theme.colors.colorWhite};
  font-size: 16px;  
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
`;

export const Fieldset = styled.fieldset`
  border: none;
  padding: 0;
  margin: 0 0 16px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  color: ${theme.colors.colorWhite};
  font-size: 16px;
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid ${theme.colors.colorWhite};
  margin-top: 5px;
  background-color: ${theme.colors.backgroundWhite};
  color: ${theme.colors.colorWhite};

  &::placeholder {
    color: B7B7B7;
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  color: ${theme.colors.colorWhite};
  font-size: 14px;
`;

export const CheckboxText = styled.span`
  margin-left: 10px;
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  outline: none;
  cursor: pointer;

  padding: 12px 12px;
  border-radius: 4px;

  border: 2px solid ${theme.colors.colorWhite};
  background: transparent;

  &:checked {
    background: ${theme.colors.colorWhite};
  }
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;

export const Title = styled.p`
  max-width: 100%;
  color: ${({ theme }) => theme.colors.colorWhite};
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.4;
  margin: 0 auto 32px;

  @media ${({ theme }) => theme.media.tablet} {
    width: 653px;
    font-size: 24px;
    margin-bottom: 56px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    width: 653px;
    font-size: 28px;
    margin-bottom: 64px;
  }
`;

export const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: ${theme.colors.backgroundTeal};
  color: ${theme.colors.colorWhite};
  cursor: pointer;
  transition: background-color 0.3s ${theme.cubicBezier};
  font-size: 16px;
  font-weight: bold;
  margin-top: 20px;

  &:hover {
    background-color: ${theme.colors.backgroundYellow};
  }

  &:disabled {
    background-color: #ddd;
    color: #666;
    cursor: not-allowed;
  }
`;

export const LinkText = styled.a`
  color: ${theme.colors.colorWhite};
  text-decoration: none;
  text-decoration: underline;

  // &:hover {
  //   text-decoration: underline;
  // }
`;
