import { InputHTMLAttributes } from 'react';

import { FieldStyled, InputWrap, Label } from './InputField.styled';

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function InputField({ label, id, ...rest }: InputFieldProps) {
  return (
    <InputWrap>
      {label && <Label htmlFor={id}>{label}</Label>}
      <FieldStyled
        {...rest}
        id={id}
      />
    </InputWrap>
  );
}
