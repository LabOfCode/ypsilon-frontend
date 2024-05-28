import { FC, PropsWithChildren } from 'react';

import { ButtonStyled, ButtonStyledProps } from './Button.styled';

const Button: FC<PropsWithChildren<ButtonStyledProps>> = props => {
  return <ButtonStyled {...props} />;
};

export default Button;
