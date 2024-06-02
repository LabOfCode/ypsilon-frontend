import { FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '@/redux/auth/authOperations';
import { Form, Label, Input, Checkbox, Button } from './AuthForm.styled';
import { AppDispatch } from '@/redux/store'; 
import Container from '@/components/Container'; 

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
      alert('Паролі не співпадають!');
      return;
    }
    dispatch(signUp(payload));
    form.reset();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <fieldset>
          <legend>Зареєструватись</legend>
          <p>Вже зареєстровані? <a href="/login">Увійти</a></p>

          <Label htmlFor="name">
            Ім'я та прізвище *
            <Input 
              type="text" 
              id="name" 
              name="name" 
              placeholder="Введіть своє ім’я та прізвище" 
              required 
            />
          </Label>

          <Label htmlFor="email">
            Електронна адреса *
            <Input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="email@gmail.com" 
              required 
            />
          </Label>

          <div>
            <span>Мета реєстрації</span>
            <div>
              <Checkbox id="apply" name="purpose" value="apply" />
              <label htmlFor="apply">Подача заявки на вакансію</label>
            </div>
            <div>
              <Checkbox id="register" name="purpose" value="register" />
              <label htmlFor="register">Реєстрація працівника</label>
            </div>
          </div>

          <Label htmlFor="password">
            Пароль *
            <Input 
              type="password" 
              id="password" 
              name="password" 
              required 
            />
          </Label>

          <Label htmlFor="confirmPassword">
            Повторити пароль *
            <Input 
              type="password" 
              id="confirmPassword" 
              name="confirmPassword" 
              required 
            />
          </Label>

          <div>
            <Checkbox 
              id="terms" 
              name="terms" 
              required 
            />
            <label htmlFor="terms">
              Реєструючись, я даю згоду на використання моїх персональних даних сайту Ypsilon та згоден з 
              <a href="/privacy-policy"> політикою конфеденційності </a> 
              та 
              <a href="/terms-of-use"> правилами користування сайтом</a>
            </label>
          </div>

          <Button type="submit">На модерацію</Button>
        </fieldset>
      </Form>
    </Container>
  );
};
