import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '@/redux/auth/authOperations';
import { Form, Label, Input, Checkbox, Button, P, Legend, Fieldset, PLink, CheckboxContainer, CheckboxLabel, CheckboxText, LinkText, ErrorMessage, Title, NamedLabel } from './AuthForm.styled'; 
import { AppDispatch } from '@/redux/store';
import Container from '@/components/Container';
import { Link } from 'react-router-dom';

interface LoginPayload {
  email: string;
  password: string;
}

const LogInForm: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const payload: LoginPayload = {
      email,
      password,
    };
    dispatch(logIn(payload));
  };

  return (
    <Container>
      <Title>
        Шукаєте роботу в Чехії? Не шукайте далі! Ваша мрія про чеські багаті зарплати ось-ось здійсниться!
      </Title>
      <Form onSubmit={handleSubmit}>
        <Fieldset>
          <Legend>Увійти</Legend>
          <P>
            Ще не зареєстровані?
            <PLink as={Link} to="/signup">
              Зареєструватись
            </PLink>
          </P>

          <Label htmlFor="email">
            <NamedLabel>Електронна адреса</NamedLabel>
            <Input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@gmail.com"
              required
            />
          </Label>

          <Label htmlFor="password">
            <NamedLabel>Пароль</NamedLabel>
            <Input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="*********"
              required
            />
          </Label>
          
          <CheckboxContainer>
            <CheckboxLabel htmlFor="rememberMe">
              <Checkbox
                id="rememberMe"
                name="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <CheckboxText>Запам'ятати мене</CheckboxText>
            </CheckboxLabel>
          </CheckboxContainer>

          <Button type="submit">Увійти</Button>
        </Fieldset>
      </Form>
    </Container>
  );
};

export default LogInForm;
