import { FC, PropsWithChildren } from 'react';

import { ButtonStyled, ButtonStyledProps } from './Button.styled';

const Button: FC<PropsWithChildren<ButtonStyledProps>> = ({ children, type = 'button', ...props }) => {
  return <ButtonStyled {...props} type={type}>{children}</ButtonStyled>;
};

export default Button;
