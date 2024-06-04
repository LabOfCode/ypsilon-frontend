import { FC, PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

import { ButtonStyled, ButtonStyledProps } from './Button.styled';

export const Button: FC<PropsWithChildren<ButtonStyledProps>> = props => {
  return <ButtonStyled {...props} />;
};

export const LinkButton: FC<PropsWithChildren<ButtonStyledProps>> = props => (
  <ButtonStyled {...props}>
    <Link to={props.to}>{props.children}</Link>
  </ButtonStyled>
);
