import React, { useState } from 'react';
import { Formik, Field, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
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
  StyledEyeOff,
  StyledEyeOn,
  RememberLink,
  LoginTooltipBlock,
  EmailTooltipList,
  EmailTooltipItem,
  LoginTooltipInnerBlock,
  PasswordTooltipList,
  PasswordTooltipItem,
  TogPasButLoginForm,
  StyledCheckCircle,
  StyledAlertCircle,
  ErrorText,
  Hint,
} from './AuthForm.styled';

const validationTips = {
  email: [
    "Введення символів латинецею",
    "Використовувати дійсний емейл",
  ],
  password: [
    "Заголовні та строчні літери",
    "6 символів або більше",
    "Хоча б одне число"
  ],
};

const schema = Yup.object().shape({
  email: Yup.string()
    .matches(/^[A-Za-z0-9@._]*[A-Za-z]+[A-Za-z0-9@._]*$/, validationTips.email[0])
    .matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, validationTips.email[1]),
  password: Yup.string()
    .matches(/[a-z]/, validationTips.password[0])
    .matches(/[A-Z]/, validationTips.password[0])
    .min(6, validationTips.password[1])
    .matches(/[0-9]/, validationTips.password[2])
});

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
      await schema.validate(values, { abortEarly: false });
      await dispatch(logIn(values)).unwrap();
      actions.resetForm();
    } catch (error: any) {
      if (error.payload === 'Email or password is wrong') {
        console.error('Login failed:', error);
      }
    }
  };

  return (
    <Container>
      <Title>
        Шукаєте роботу в Чехії? Не шукайте далі! Ваша мрія про чеські багаті зарплати ось-ось здійсниться!
      </Title>
      <Formik initialValues={initialValues} validationSchema={schema} onSubmit={submitForm}>
        {(formikProps) => (
          <Form onSubmit={formikProps.handleSubmit}>
            <Fieldset>
              <Legend>Увійти</Legend>
              <P>
                Ще не зареєстровані?
                <PLink href="/signup">
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
                  isValid={formikProps.touched.email && !formikProps.errors.email}
                  required
                  />
                  {formikProps.touched.email && formikProps.errors.email && (
                  <ErrorText>Email не існує або не зареєстрований</ErrorText>
                )}
                {formikProps.touched.email && (
                  <LoginTooltipBlock>
                    <LoginTooltipInnerBlock isValid={!formikProps.errors.email}>
                      Email повинен мати: 
                    <EmailTooltipList>
                      <EmailTooltipItem>
                        {formikProps.values.email.match(/^[A-Za-z0-9@._]*[A-Za-z]+[A-Za-z0-9@._]*$/) ? (
                          <StyledCheckCircle />
                        ) : (
                          <StyledAlertCircle />
                        )}
                        {validationTips.email[0]}
                      </EmailTooltipItem>
                      <EmailTooltipItem>
                        {formikProps.values.email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/) ? (
                          <StyledCheckCircle />
                        ) : (
                          <StyledAlertCircle />
                        )}
                        {validationTips.email[1]}
                      </EmailTooltipItem>
                      </EmailTooltipList>
                    </LoginTooltipInnerBlock>
                  </LoginTooltipBlock>
                )}
              </Label>


              <Label htmlFor="password">
                <NamedLabel>Пароль</NamedLabel>
                <Field 
                  as={CustomInput}
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  placeholder="*********"
                  isValid={formikProps.touched.password && !formikProps.errors.password}
                  required
                />
                <TogPasButLoginForm type="button" onClick={togglePasswordVisibility}>
                  {showPassword ? <StyledEyeOn /> : <StyledEyeOff />}
                </TogPasButLoginForm>
                {formikProps.touched.password && formikProps.errors.password && (
                  <ErrorText>Невірний пароль</ErrorText>
                )}
                {formikProps.touched.password && (
                  <LoginTooltipBlock>
                  <LoginTooltipInnerBlock isValid={!formikProps.errors.password}>
                    Ваш пароль повинен мати: 
                    <PasswordTooltipList>
                      <PasswordTooltipItem>
                        {formikProps.values.password.length >= 6 ? (
                          <StyledCheckCircle />
                        ) : (
                          <StyledAlertCircle />
                        )}
                      {validationTips.password[0]}
                        </PasswordTooltipItem>
                        <PasswordTooltipItem>
                          {formikProps.values.password.match(/[0-9]/) ? (
                            <StyledCheckCircle />
                          ) : (
                            <StyledAlertCircle />
                          )}
                      {validationTips.password[1]}
                      </PasswordTooltipItem>
                        <PasswordTooltipItem>
                          {formikProps.values.password.match(/[a-z]/) && formikProps.values.password.match(/[A-Z]/) ? (
                            <StyledCheckCircle />
                          ) : (
                            <StyledAlertCircle />
                          )}
                          {validationTips.password[2]}
                        </PasswordTooltipItem>
                    </PasswordTooltipList>
                    <Hint>Уникайте використовування паролей, які ви використовуєте на інших сайтах та які можуть бути легко відгаданими кимось іншим</Hint>
                    </LoginTooltipInnerBlock>
                  </LoginTooltipBlock>
                )}
              </Label>

              <RememberLink href="">Забули пароль?</RememberLink>

              <Button
                type="submit"
                disabled={
                  !formikProps.isValid ||
                  !formikProps.dirty ||
                  formikProps.isSubmitting ||
                  formikProps.isValidating
                }
              > Увійти </Button>

            </Fieldset>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default LogInForm;

