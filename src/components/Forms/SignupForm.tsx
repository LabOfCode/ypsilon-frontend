import React, { useState } from 'react';
import { Formik, Field, FormikHelpers } from 'formik';
import { useDispatch } from 'react-redux';
import { signUp } from '@/redux/auth/authOperations';
import { AppDispatch } from '@/redux/store';
import Container from '@/components/Container';
import Tooltip, {
  fullnameTips,
  emailTips,
  passwordTips,
  confirmPasswordTips,
  schema,
} from './SchemaTooltip';
import {
  Form,
  PLink,
  P,
  Label,
  Checkbox,
  Button,
  Title,
  Legend,
  Fieldset,
  PMeta,
  CheckboxContainer,
  CheckboxLabel,
  CheckboxText,
  CheckboxPoliticText,
  CustomInput,
  NamedLabel,
  TogglePasswordButton,
  ValidationEmailIcon,
  ValidationPasswordIcon,
  EyeIcon,
  StyledEyeOff,
  StyledEyeOn,
  StyledCheckCircle,
  StyledAlertCircle,
  StyledCheckBoxIcon,
  StyledCheckboxCheckedIcon,
  Underline,
  AdressLink
} from './AuthForm.styled';

export interface RegisterPayload {
  fullname: string;
  email: string;
  password: string;
  confirmPassword: string;
  apply: boolean;
  purpose: boolean;
  terms: boolean;
}

const initialValues: RegisterPayload = {
  fullname: '',
  email: '',
  password: '',
  confirmPassword: '',
  apply: false,
  purpose: false,
  terms: false,
};

export const SignupForm: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (values: RegisterPayload, { resetForm, setSubmitting }: FormikHelpers<RegisterPayload>) => {
    setSubmitting(true);
    try {
      await schema.validate(values, { abortEarly: false });
      await dispatch(signUp(values));
      setSubmitting(false);
      resetForm();
    } catch {
      setSubmitting(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container>
      <Title>
        Готові розпочати свою пригоду в Чехії? Заповніть цю форму, щоб створити профіль користувача та розпочати пошук роботи!
      </Title>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ handleChange, validateField, handleSubmit, isValid, dirty, isSubmitting, touched, errors, values }) => (
          <Form onSubmit={handleSubmit}>
            <Fieldset>
              <Legend>Зареєструватись</Legend>
              <P>Вже зареєстровані? <PLink href="/login">Увійти</PLink></P>
              <Label htmlFor="fullname">
                <NamedLabel>Ім'я та прізвище</NamedLabel>
                <Field
                  as={CustomInput}
                  type="text"
                  id="fullname"
                  name="fullname"
                  placeholder="Введіть своє ім’я та прізвище"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    handleChange(e);
                    validateField('fullname');
                  }}
                  required
                />
                <Tooltip
                  show={errors.fullname && touched.fullname}
                  tips={fullnameTips}
                  bottom="-43px"
                  color="red"
                />
              </Label>

              <Label htmlFor="email">
                <NamedLabel>Електронна адреса</NamedLabel>
                <Field
                  as={CustomInput}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="email@gmail.com"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    handleChange(e);
                    validateField('email');
                  }}
                  isValid={touched.email ? !errors.email : null}
                  required
                />
                <Tooltip
                  show={errors.email && touched.email}
                  tips={emailTips}
                  bottom="-72px"
                  color="red"
                />
                {touched.email && (
                  <ValidationEmailIcon isValid={!errors.email}>
                    {errors.email ? <StyledAlertCircle /> : <StyledCheckCircle />}
                    <EyeIcon />
                  </ValidationEmailIcon>
                )}
              </Label>

              <CheckboxContainer>
                <PMeta>Мета реєстрації</PMeta>
                <CheckboxLabel>
                  <Checkbox
                    id="apply"
                    name="apply"
                    type="checkbox"
                    checked={values.apply}
                    onChange={() => handleChange({ target: { name: 'apply', value: !values.apply } })}
                  />
                  {values.apply ? <StyledCheckboxCheckedIcon /> : <StyledCheckBoxIcon />}
                  <CheckboxText>Подача заявки на вакансію</CheckboxText>
                </CheckboxLabel>

                <CheckboxLabel>
                  <Checkbox
                    id="purpose"
                    name="purpose"
                    type="checkbox"
                    checked={values.purpose}
                    onChange={() => handleChange({ target: { name: 'purpose', value: !values.purpose } })}
                  />
                  {values.purpose ? <StyledCheckboxCheckedIcon /> : <StyledCheckBoxIcon />}
                  <CheckboxText>Реєстрація працівника</CheckboxText>
                </CheckboxLabel>
              </CheckboxContainer>

              <Label htmlFor="password">
                <NamedLabel>Пароль</NamedLabel>
                <Field
                  as={CustomInput}
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  placeholder="*********"
                  onChange={handleChange}
                  required
                />
                <Tooltip
                  show={touched.password && !!errors.password}
                  tips={passwordTips}
                  bottom="-77px"
                  color="black"
                />
                <TogglePasswordButton type="button" onClick={togglePasswordVisibility}>
                  {showPassword ? (
                    <StyledEyeOn />
                  ) : (
                    <StyledEyeOff />
                  )}
                </TogglePasswordButton>
              </Label>

              <Label htmlFor="confirmPassword">
                <NamedLabel>Повторити пароль</NamedLabel>
                <Field
                  as={CustomInput}
                  type={showPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="*********"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    handleChange(e);
                    validateField('confirmPassword');
                  }}
                  required
                />
                <Tooltip
                  show={errors.confirmPassword && touched.confirmPassword}
                  tips={confirmPasswordTips}
                  bottom="-26px"
                  color="black"
                />
                <ValidationPasswordIcon isValid={!errors.confirmPassword}>
                  {touched.confirmPassword && (
                    errors.confirmPassword ? <StyledAlertCircle /> : <StyledCheckCircle />
                  )}
                </ValidationPasswordIcon>
                <TogglePasswordButton type="button" onClick={togglePasswordVisibility}>
                  {showPassword ? (
                    <StyledEyeOn />
                  ) : (
                    <StyledEyeOff />
                  )}
                </TogglePasswordButton>
              </Label>

              <Underline />

              <CheckboxContainer>
                <CheckboxLabel>
                  <Checkbox
                    id="terms"
                    name="terms"
                    type="checkbox"
                    checked={values.terms}
                    onChange={() => handleChange({ target: { name: 'terms', value: !values.terms } })}
                    required
                  />
                  {values.terms ? <StyledCheckboxCheckedIcon /> : <StyledCheckBoxIcon />}
                  <CheckboxPoliticText>
                    Реєструючись, я даю згоду на використання моїх персональних даних сайту Ypsilon та згоден з
                    <AdressLink href=""> політикою конфіденційності </AdressLink> та
                    <AdressLink href=""> умовами користування. </AdressLink>
                  </CheckboxPoliticText>
                </CheckboxLabel>
              </CheckboxContainer>

              <Button type="submit" disabled={
                !isValid || !dirty || isSubmitting || (!values.apply && !values.purpose) || !values.terms}>
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
