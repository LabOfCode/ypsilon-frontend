import styled from 'styled-components';
import { theme } from '@/Theme';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  background-color: ${theme.colors.backgroundWhite};
  padding: 20px;
  box-shadow: ${theme.boxShadow};
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  color: ${theme.colors.colorBlack};
  font-size: 16px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid ${theme.colors.colorGray};
  border-radius: 4px;
  margin-top: 5px;
`;

export const Checkbox = styled.input`
`;

export const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: ${theme.colors.backgroundTeal};
  color: ${theme.colors.colorWhite};
  cursor: pointer;
  transition: background-color 0.3s ${theme.cubicBezier};

  &:hover {
    background-color: ${theme.colors.backgroundDarkTeal};
  }
`;
