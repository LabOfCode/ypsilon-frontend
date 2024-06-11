import styled from 'styled-components';
import { theme } from '@/Theme';

const commonMargin = `
  margin-left: auto;
  margin-right: auto;
`;

const commonMediaQuery = `
  @media ${theme.media.tablet} {
    margin-bottom: 24px;
  }
  @media ${theme.media.desktop} {
    margin-bottom: 24px;
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid ${theme.colors.colorWhite};
  background-image: ${theme.colors.backgroundOcean};
  border-radius: 8px;
  box-shadow: ${theme.boxShadow};
  margin-top: 32px;
  ${commonMargin}
  margin-bottom: 276px;

  @media ${theme.media.tablet} {
    width: 424px;
    margin-bottom: 272px;
  }
  @media ${theme.media.desktop} {
    width: 424px;
    margin-bottom: 196px;
  }
`;

export const Legend = styled.legend`
  color: ${theme.colors.colorWhite};
  font-size: 24px;
  font-weight: bold;
  margin-top: 24px;
  margin-bottom: 16px;
  text-align: center;
  ${commonMediaQuery}
`;

export const PLink = styled.p`
  color: ${theme.colors.colorYellow};
  font-size: 16px;
  text-decoration: underline;
  margin-left: 8px;
  white-space: nowrap;

  &:hover {
    text-decoration: underline;
  }
`;

export const P = styled.p`
  color: ${theme.colors.colorWhite};
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
  flex-wrap: wrap; 
`;



export const Fieldset = styled.fieldset`
  border: none;
  margin: 24px 55px 48px;

  @media ${({ theme }) => theme.media.tablet} {
    margin-top: 48px;
  }
  @media ${({ theme }) => theme.media.desktop} {
    margin-top: 48px;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: ${theme.colors.colorWhite};
  font-size: 16px;
`;

export const NamedLabel = styled.p`
  &::after {
    content: ' *';
    color: ${theme.colors.colorRed};
  }
`;

export const Input = styled.input`
  width: 314px;
  height: 48px;
  border-radius: 4px;
  border: 1px solid ${theme.colors.colorWhite};
  margin: 8px 0 16px;
  background-color: ${theme.colors.backgroundWhite};
  color: ${theme.colors.colorBlack};
  ${commonMediaQuery}

  &::placeholder {
    color: ${theme.colors.colorGray};
    font-size: 14px;
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const CheckboxLabel = styled.label`
  color: ${theme.colors.colorWhite};
  display: flex;
  align-items: center;
  font-size: 16px;
`;

export const CheckboxText = styled.span`
  margin-left: 10px;
  font-size: 14px;
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  border: 2px solid ${theme.colors.colorWhite};
  background: transparent;
  appearance: none;
  outline: none;
  cursor: pointer;
  padding: 12px;
  border-radius: 4px;
  
  &:checked {
    background: ${theme.colors.colorWhite};
  }
`;

export const ErrorMessage = styled.span`
  color: ${theme.colors.colorRed};
  font-size: 12px;
  margin-top: 5px;
`;

export const Title = styled.p`
  max-width: 100%;
  color: ${theme.colors.colorWhite};
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.4;
  margin: 40px auto 32px;
  ${commonMargin}

  @media ${theme.media.tablet} {
    width: 653px;
    font-size: 24px;
    margin-bottom: 56px;
  }

  @media ${theme.media.desktop} {
    width: 653px;
    font-size: 28px;
    margin-bottom: 64px;
  }
`;

export const Button = styled.button`
  width: 322px;
  height: 60px;
  border: none;
  border-radius: 10px;
  background-color: ${theme.colors.backgroundTeal};
  color: ${theme.colors.colorWhite};
  cursor: pointer;
  transition: background-color 0.3s ${theme.cubicBezier};
  font-size: 24px;
  font-weight: bold;
  margin-top: 16px;

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
  text-decoration: underline;
`;
