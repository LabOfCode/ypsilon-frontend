import { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '@/redux/auth/authOperations';
import {
  Form,
  Label,
  Input,
  Checkbox,
  Button,
  ErrorMessage,
  Title,
  Legend,
  Fieldset,
  P,
  PLink,
  CheckboxContainer,
  CheckboxLabel,
  CheckboxText,
  LinkText,
  NamedLabel,
} from './AuthForm.styled';
import { AppDispatch } from '@/redux/store';
import Container from '@/components/Container';
import { Link } from 'react-router-dom';

interface RegisterPayload {
  fullname: string;
  email: string;
  password: string;
  confirmPassword: string;
  purpose: string;
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
      confirmPassword: (form.elements.namedItem('confirmPassword') as HTMLInputElement)?.value || '',
      purpose: (form.elements.namedItem('purpose') as HTMLInputElement)?.value || '',
    };

    const newErrors: { [key: string]: string } = {};

    if (payload.password !== payload.confirmPassword) {
      newErrors.confirmPassword = 'Паролі не співпадають!';
    }

    if (!payload.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      newErrors.email = 'Неправильний формат email-адреси';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    dispatch(signUp(payload));
    form.reset();
  };

  return (
    <Container>
      <Title>
        Готові розпочати свою пригоду в Чехії?
        Заповніть цю форму, щоб створити профіль користувача та розпочати пошук роботи!
      </Title>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Fieldset>
          <Legend>Зареєструватись</Legend>
          <P>Вже зареєстровані?<PLink as={Link} to="/login">Увійти</PLink></P>

          <Label htmlFor="fullname">
            <NamedLabel>Ім'я та прізвище</NamedLabel> 
            <Input
              type="text"
              id="fullname"
              name="fullname"
              placeholder="Введіть своє ім’я та прізвище"
              required
            />
          </Label>

          <Label htmlFor="email">
            <NamedLabel>Електронна адреса</NamedLabel> 
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="email@gmail.com"
              required
            />
            {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
          </Label>

          <CheckboxContainer>
            <CheckboxLabel htmlFor="apply">
              <Checkbox id="apply" name="purpose" value="apply" />
              <CheckboxText>Подача заявки на вакансію</CheckboxText>
            </CheckboxLabel>
          </CheckboxContainer>

          <CheckboxContainer>
            <CheckboxLabel htmlFor="register">
              <Checkbox id="register" name="purpose" value="register" />
              <CheckboxText>Реєстрація працівника</CheckboxText>
            </CheckboxLabel>
          </CheckboxContainer>

          <Label htmlFor="password">
            <NamedLabel>Пароль</NamedLabel>
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="*********"
              required
            />
          </Label>

          <Label htmlFor="confirmPassword">
            <NamedLabel>Повторити пароль</NamedLabel>
            <Input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="*********"
              required
            />
            {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword}</ErrorMessage>}
          </Label>
          <CheckboxContainer>
            <CheckboxLabel htmlFor="terms">
              <Checkbox id="terms" name="terms" required />
              <CheckboxText>
                Реєструючись, я даю згоду на використання моїх персональних даних сайту Ypsilon та згоден з
                <LinkText href="/privacy-policy"> політикою конфеденційності </LinkText>
                та
                <LinkText href="/terms-of-use"> правилами користування сайтом</LinkText>
              </CheckboxText>
            </CheckboxLabel>
          </CheckboxContainer>
          <Button type="submit">На модерацію</Button>
        </Fieldset>
      </Form>
    </Container>
  );
};
