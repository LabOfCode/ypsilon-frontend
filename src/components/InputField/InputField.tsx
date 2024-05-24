import React, { InputHTMLAttributes } from 'react';

import { FieldStyled, InputWrap, Label } from './InputField.styled';

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function InputField({ label, id, ...rest }: InputFieldProps) {
  return (
    <InputWrap className="flex flex-col">
      {label && (
        <Label
          htmlFor={id}
          className="mb-2 text-base color-gray-900"
        >
          {label}
        </Label>
      )}
      <FieldStyled
        {...rest}
        id={id}
        className="p-3 h-11 text-sm rounded border border-gray-300 shadow"
      />
    </InputWrap>
  );
}
