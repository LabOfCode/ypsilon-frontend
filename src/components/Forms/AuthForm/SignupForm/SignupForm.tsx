import { FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '@/redux/auth/authOperations';
import { Form, Label, Input, Button } from './../AuthForm.styled';
import { AppDispatch } from '@/redux/store'; 

interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}

export const SignupForm = () => {
  const dispatch: AppDispatch = useDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const payload: RegisterPayload = {
      name: (form.elements.namedItem('name') as HTMLInputElement)?.value || '',
      email: (form.elements.namedItem('email') as HTMLInputElement)?.value || '',
      password: (form.elements.namedItem('password') as HTMLInputElement)?.value || '',
    };
    dispatch(signUp(payload));
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Ім'я користувача
        <Input type="text" name="name" />
      </Label>
      <Label>
        Електронна адреса
        <Input type="email" name="email" />
      </Label>
      <Label>
        Пароль
        <Input type="password" name="password" />
      </Label>
      <Label>
        Підтвердіть пароль
        <Input type="password" name="confirmPassword" />
      </Label>
      <Button type="submit">Зареєструватися</Button>
    </Form>
  );
};
