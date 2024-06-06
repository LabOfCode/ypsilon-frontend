import React from 'react';
import { useDispatch } from 'react-redux';
import { signOut } from '@/redux/auth/authOperations';
import { useAuth } from '@/redux/hooks/useAuth';
import { Wrapper, Username, LogoutButton } from './UserMenu.styled';
import { AppDispatch } from '@/redux/store';

export const UserMenu: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <Username>{user?.firstname}</Username>
      <LogoutButton type="button" onClick={() => dispatch(signOut())}>
        Вийти
      </LogoutButton>
    </Wrapper>
  );
};
