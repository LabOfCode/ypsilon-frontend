import { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '@/redux/auth/authOperations';
import { Form, Label, Input, Checkbox, Button, ErrorMessage } from './AuthForm.styled';
import { AppDispatch } from '@/redux/store';
import Container from '@/components/Container';
import { Link } from 'react-router-dom';

interface RegisterPayload {
  fullname: string;
  email: string;
  password: string;
  // confirmPassword: string;
  // purpose: string;
}

export const SignupForm = () => {
  const dispatch: AppDispatch = useDispatch();
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const payload: RegisterPayload = {
      fullname: (form.elements.namedItem('fullname') as HTMLInputElement)?.value || '',
      email: (form.elements.namedItem('email') as HTMLInputElement)?.value || '',
      password: (form.elements.namedItem('password') as HTMLInputElement)?.value || '',
      // confirmPassword: (form.elements.namedItem('confirmPassword') as HTMLInputElement)?.value || '',
      // purpose: (form.elements.namedItem('purpose') as HTMLInputElement)?.value || '',
    };

    const newErrors: { [key: string]: string } = {};

    // if (payload.password !== payload.confirmPassword) {
    //   newErrors.confirmPassword = 'Паролі не співпадають!';
    // }

    if (!payload.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      newErrors.email = 'Неправильний формат email-адреси';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    console.log('payload :>> ', payload);
    setErrors({});
    dispatch(signUp(payload));
    form.reset();
  };

  return (
    <Container>
      <p>Готові розпочати свою пригоду в Чехії? Заповніть цю форму, щоб створити профіль користувача та розпочати пошук роботи!</p>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <fieldset>
          <legend>Зареєструватись</legend>
          <p>Вже зареєстровані? <Link to="/login">Увійти</Link></p>

          <Label htmlFor="fullname">
            Ім'я та прізвище *
            <Input
              type="text"
              id="fullname"
              name="fullname"
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
            {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
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
              placeholder="*********"
              required
            />
          </Label>

          <Label htmlFor="confirmPassword">
            Повторити пароль *
            <Input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="*********"
              required
            />
            {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword}</ErrorMessage>}
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
