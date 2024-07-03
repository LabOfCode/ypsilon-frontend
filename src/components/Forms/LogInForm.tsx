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
  LoginTooltipInnerBlock,
  LoginTooltipList,
  LoginTooltipItem,
  TogPasButLoginForm,
  StyledCheckCircle,
  StyledAlertCircle,
  ErrorText,
  Hint,
  PRule,
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

interface LogInFormProps {
  onRecoveryClick: () => void;
}

const initialValues: LoginPayload = {
  email: '',
  password: '',
};

const LogInForm: React.FC<LogInFormProps> = ({ onRecoveryClick }) => {
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

  const renderTooltip = (
    touched: boolean | undefined,
    errors: string | undefined,
    values: string,
    validationArray: string[],
    tips: string[],
    isPassword: boolean = false
  ) => (
    touched && (
      <LoginTooltipBlock>
        <LoginTooltipInnerBlock isValid={!errors}> <PRule>Email повинен мати: </PRule>
          <LoginTooltipList>
            {validationArray.map((regex, index) => (
              <LoginTooltipItem key={index}>
                {values.match(new RegExp(regex)) ? <StyledCheckCircle /> : <StyledAlertCircle />}
                {tips[index]}
              </LoginTooltipItem>
            ))}
          </LoginTooltipList>
          {isPassword && <Hint>Уникайте використовування паролей, які ви використовуєте на інших сайтах та які можуть бути легко відгаданими кимось іншим</Hint>}
        </LoginTooltipInnerBlock>
      </LoginTooltipBlock>
    )
  );

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
                {renderTooltip(
                  formikProps.touched.email,
                  formikProps.errors.email,
                  formikProps.values.email,
                  ["^[A-Za-z0-9@._]*[A-Za-z]+[A-Za-z0-9@._]*$", "^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$"],
                  validationTips.email
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
                {renderTooltip(
                  formikProps.touched.password,
                  formikProps.errors.password,
                  formikProps.values.password,
                  ["[a-z]" && "[A-Z]", ".{6,}", "[0-9]"],
                  validationTips.password
                )}
              </Label>

              <RememberLink as="button" type="button" onClick={onRecoveryClick}>Забули пароль?</RememberLink>

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
