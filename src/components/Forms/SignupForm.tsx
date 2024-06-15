import React, { useState } from 'react';
import {
  Form,
  Label,
  Input,
  Checkbox,
  Button,
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
  ErrorText,
  EmailTooltip,
  PasswordTooltip,
  TooltipList,
  TooltipItem,
} from './AuthForm.styled';
import { Formik, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { signUp } from '@/redux/auth/authOperations';
import { AppDispatch } from '@/redux/store';
import Container from '@/components/Container';
import { Link } from 'react-router-dom';

interface RegisterPayload {
  fullname: string;
  email: string;
  password: string;
  confirmPassword: string;
  purpose: string;
  terms: boolean;
}

const initialValues: RegisterPayload = {
  fullname: '',
  email: '',
  password: '',
  confirmPassword: '',
  purpose: '',
  terms: false,
};

const schema = Yup.object().shape({
  fullname: Yup.string()
    .required("Ім'я та прізвище є обов'язковим")
    .matches(/[A-Za-z]+/, "Ім'я повинно містити принаймні одну літеру")
    .matches(/^[A-Za-z\s]+$/, "Ім'я повинно містити лише літери та пробіли"),
  email: Yup.string()
    .email('Неправильний формат email, приклад: example@mail.com')
    .matches(/^[A-Za-z0-9@._]+$/, 'Використовуються недопустимі символи')
    .matches(/^[A-Za-z0-9@._]*[A-Za-z]+[A-Za-z0-9@._]*$/, 'Використовуйте лише літери англійського алфавіту'),
  password: Yup.string()
    .min(6, 'Пароль має містити щонайменше 6 символів')
    .matches(/[a-z]/, 'Пароль повинен містити хоча б одну маленьку літеру')
    .matches(/[A-Z]/, 'Пароль повинен містити хоча б одну велику літеру')
    .matches(/[0-9]/, 'Пароль повинен містити хоча б одну цифру')
    .notOneOf(['password', '123456', 'qwerty'], 'Уникайте використовування легко вгадуваних паролів'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Паролі не співпадають')
    .required('Підтвердження паролю є обов\'язковим'),
  purpose: Yup.string().required('Мета реєстрації є обов\'язковою'),
  terms: Yup.bool().oneOf([true], 'Ви повинні погодитися з умовами використання'),
});

export const SignupForm: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (values: RegisterPayload, { resetForm }: FormikHelpers<RegisterPayload>) => {
    setIsSubmitting(true);
    dispatch(signUp(values))
      .then(() => {
        setIsSubmitting(false);
        resetForm();
      })
      .catch(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <Container>
      <Title>
        Готові розпочати свою пригоду в Чехії?
        Заповніть цю форму, щоб створити профіль користувача та розпочати пошук роботи!
      </Title>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ isValid, dirty, errors, touched }) => (
          <Form autoComplete="off">
            <Fieldset>
              <Legend>Зареєструватись</Legend>
              <P>
                Вже зареєстровані?
                <PLink as={Link} to="/login">
                  Увійти
                </PLink>
              </P>

              <div style={{ position: 'relative' }}>
                <Label htmlFor="fullname">
                  <NamedLabel>Ім'я та прізвище</NamedLabel>
                  <Field
                    as={Input}
                    type="text"
                    id="fullname"
                    name="fullname"
                    placeholder="Введіть своє ім’я та прізвище"
                  />
                  {touched.fullname && errors.fullname && (
                    <EmailTooltip show={true}>
                      <TooltipList show={true}>
                        <TooltipItem>{errors.fullname}</TooltipItem>
                      </TooltipList>
                    </EmailTooltip>
                  )}
                </Label>
              </div>

              <div style={{ position: 'relative' }}>
                <Label htmlFor="email">
                  <NamedLabel>Електронна адреса</NamedLabel>
                  <Field
                    as={Input}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="email@gmail.com"
                  />
                  {touched.email && errors.email && (
                    <EmailTooltip show={true}>
                      <TooltipList show={true}>
                        {Array.isArray(errors.email) ? errors.email.map((error: string, index: number) => (
                          <TooltipItem key={index}>{error}</TooltipItem>
                        )) : <TooltipItem>{errors.email}</TooltipItem>}
                      </TooltipList>
                    </EmailTooltip>
                  )}
                </Label>
              </div>

              <CheckboxContainer>
                <CheckboxLabel htmlFor="apply">
                  <Field as={Checkbox} id="apply" name="purpose" value="apply" />
                  <CheckboxText>Подача заявки на вакансію</CheckboxText>
                </CheckboxLabel>
              </CheckboxContainer>

              <CheckboxContainer>
                <CheckboxLabel htmlFor="register">
                  <Field as={Checkbox} id="register" name="purpose" value="register" />
                  <CheckboxText>Реєстрація працівника</CheckboxText>
                </CheckboxLabel>
              </CheckboxContainer>

              <div style={{ position: 'relative' }}>
                <Label htmlFor="password">
                  <NamedLabel>Пароль</NamedLabel>
                  <Field
                    as={Input}
                    type="password"
                    id="password"
                    name="password"
                    placeholder="*********"
                  />
                  {touched.password && errors.password && (
                    <PasswordTooltip show={true}>
                      <TooltipList show={true}>
                        {Array.isArray(errors.password) ? errors.password.map((error: string, index: number) => (
                          <TooltipItem key={index}>{error}</TooltipItem>
                        )) : <TooltipItem>{errors.password}</TooltipItem>}
                      </TooltipList>
                    </PasswordTooltip>
                  )}
                </Label>
              </div>

              <Label htmlFor="confirmPassword">
                <NamedLabel>Повторити пароль</NamedLabel>
                <Field
                  as={Input}
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="*********"
                />
                <ErrorMessage name="confirmPassword" render={message => <ErrorText>{message}</ErrorText>} />
              </Label>

              <CheckboxContainer>
                <CheckboxLabel htmlFor="terms">
                  <Field as={Checkbox} id="terms" name="terms" type="checkbox" />
                  <CheckboxText>
                    Реєструючись, я даю згоду на використання моїх персональних даних сайту Ypsilon та згоден з
                    <LinkText href="/privacy-policy"> політикою конфіденційності </LinkText> та
                    <LinkText href="/terms-of-use"> правилами користування сайтом</LinkText>
                  </CheckboxText>
                </CheckboxLabel>
                <ErrorMessage name="terms" render={message => <ErrorText>{message}</ErrorText>} />
              </CheckboxContainer>

              <Button type="submit" disabled={!isValid || !dirty || isSubmitting}>
                На модерацію
              </Button>
            </Fieldset>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default SignupForm;
