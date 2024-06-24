import React, { useState } from 'react';
import { Formik, Field, FormikHelpers } from 'formik';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logIn } from '@/redux/auth/authOperations';
import { AppDispatch } from '@/redux/store';
import Container from '@/components/Container';
import {
  Form,
  PLink,
  P,
  Label,
  Button,
  Title,
  Legend,
  Fieldset,
  CustomInput,
  NamedLabel,
  TogglePasswordButton,
  StyledEyeOff,
  StyledEyeOn,
  RememberLink
} from './AuthForm.styled';

interface LoginPayload {
  email: string;
  password: string;
}

const initialValues: LoginPayload = {
  email: '',
  password: '',
};

export const LogInForm: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const submitForm = async (values: LoginPayload, actions: FormikHelpers<LoginPayload>) => {
    try {
      await dispatch(logIn(values));
      actions.resetForm();
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <Container>
      <Title>
        Шукаєте роботу в Чехії? Не шукайте далі! Ваша мрія про чеські багаті зарплати ось-ось здійсниться!
      </Title>
      <Formik initialValues={initialValues} onSubmit={submitForm}>
        {({ handleSubmit }) => ( 
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
                <Field 
                  as={CustomInput}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="email@gmail.com"
                  required
                />
              </Label>

              <Label htmlFor="password">
                <NamedLabel>Пароль</NamedLabel>
                <Field 
                  as={CustomInput}
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  placeholder="*********"
                  required
                />
                <TogglePasswordButton type="button" onClick={togglePasswordVisibility}>
                  {showPassword ? <StyledEyeOn /> : <StyledEyeOff />}
                </TogglePasswordButton>
              </Label>

              <RememberLink href="">Забули пароль?</RememberLink>

              <Button type="submit"> Увійти </Button>

            </Fieldset>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default LogInForm;
