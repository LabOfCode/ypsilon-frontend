import { FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '@/redux/auth/authOperations';
import { Form, Label, Input, Checkbox } from './../AuthForm.styled';
import { AppDispatch } from '@/redux/store'; 
import Button from '@/components/Button/Button';

interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
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
      confirmPassword: (form.elements.namedItem('confirmPassword') as HTMLInputElement)?.value || '',
    };

    if (payload.password !== payload.confirmPassword) {
      alert('Пароли не совпадают!');
      return;
    }
    dispatch(signUp(payload));
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Ім'я та прізвище
        <Input type="text" name="name" required />
      </Label>
      <Label>
        Електронна адреса
        <Input type="email" name="email" required />
      </Label>
      <Label>
        Пароль
        <Input type="password" name="password" required />
      </Label>
      <Label>
        Повторити пароль
        <Input type="password" name="confirmPassword" required />
      </Label>
      <Label>
        <Checkbox type="checkbox" required />
        Реєструючись, я даю згоду на використання моїх персональних даних сайту Ypsilon та згоден з політикою конфеденційності та правилами користування сайтом
      </Label>
      <Button type="submit">На модерацію</Button>
    </Form>
  );
};
