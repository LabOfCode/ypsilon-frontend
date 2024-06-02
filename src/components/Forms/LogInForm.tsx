import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '@/redux/auth/authOperations'; 
import { Form, Label, Input, Checkbox, Button } from './AuthForm.styled';
import { AppDispatch } from '@/redux/store'; 
import Container from '@/components/Container'; 

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
      <Form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Увійти</legend>
          <p>Не зареєстровані? <a href="/signup">Зареєструватись</a></p>

          <Label htmlFor="email">
            Електронна адреса *
            <Input type="email" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} required />
          </Label>

          <Label htmlFor="password">
            Пароль *
            <Input type="password" id="password" name="password" value={password} onChange={e => setPassword(e.target.value)} required />
          </Label>

          <div>
            <Checkbox id="rememberMe" name="rememberMe" checked={rememberMe} onChange={e => setRememberMe(e.target.checked)} />
            <label htmlFor="rememberMe">Запам'ятати мене</label>
          </div>

          <Button type="submit">Увійти</Button>
        </fieldset>
      </Form>
    </Container>
  );
};

export default LogInForm;
