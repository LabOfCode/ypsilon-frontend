import { FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '@/redux/auth/authOperations';
import { Form, Label, Input } from './../AuthForm.styled';
import { AppDispatch } from '@/redux/store'; 
import Button from '@/components/Button/Button';

interface RegisterPayload {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

export const SignupForm = () => {
  const dispatch: AppDispatch = useDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const payload: RegisterPayload = {
      firstname: (form.elements.namedItem('firstname') as HTMLInputElement)?.value || '',
      lastname: (form.elements.namedItem('lastname') as HTMLInputElement)?.value || '',
      email: (form.elements.namedItem('email') as HTMLInputElement)?.value || '',
      password: (form.elements.namedItem('password') as HTMLInputElement)?.value || '',
    };
    dispatch(signUp(payload));
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Ім'я
        <Input type="text" name="firstname" />
      </Label>
      <Label>
        Прізвище
        <Input type="text" name="lastname" />
      </Label>
      <Label>
        Електронна адреса
        <Input type="email" name="email" />
      </Label>
      <Label>
        Пароль
        <Input type="password" name="password" />
      </Label>
      <Button type="submit">Зареєструватися</Button>
    </Form>
  );
};