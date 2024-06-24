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

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const submitForm = async (values: RegisterPayload, actions:   FormikHelpers<RegisterPayload>) => {
    try {
      const { confirmPassword, apply, purpose, terms, ...formData } = values;

      await schema.validate(formData, { abortEarly: false });
      await dispatch(signUp(formData));
      actions.resetForm();
    } catch (error) {
      console.error('Error during form submission:', error);
    }
  };

  const renderValidationIcon = (field: keyof RegisterPayload, formikProps: any) => { 
    const { errors, touched } = formikProps;
    if (!touched[field]) return null;
    return errors[field] ? <StyledAlertCircle /> : <StyledCheckCircle />;
  };

  return (
    <Container>
      <Title>
        Готові розпочати свою пригоду в Чехії? Заповніть цю форму, щоб створити профіль користувача та розпочати пошук роботи!
      </Title>
      <Formik initialValues={initialValues} validationSchema={schema} onSubmit={submitForm}>
        {(formikProps) => (
          <Form onSubmit={formikProps.handleSubmit}>
            <Fieldset>
              <Legend>Зареєструватись</Legend>
              <P>Вже зареєстровані?<PLink href="/login">Увійти</PLink></P>

              <Label htmlFor="fullname">
                <NamedLabel>Ім'я та прізвище</NamedLabel>
                <Field
                  as={CustomInput}
                  type="text"
                  id="fullname"
                  name="fullname"
                  placeholder="Введіть своє ім’я та прізвище"
                  required
                />
                <Tooltip
                  show={formikProps.errors.fullname && formikProps.touched.fullname}
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
                  className={formikProps.touched.email ? (!formikProps.errors.email ? 'valid' : 'invalid') : ''}
                  required
                />
                <Tooltip
                  show={formikProps.errors.email && formikProps.touched.email}
                  tips={emailTips}
                  bottom="-72px"
                  color="red"
                />
                {formikProps.touched.email && (
                  <ValidationEmailIcon isValid={!formikProps.errors.email}>
                    {formikProps.errors.email ? <StyledAlertCircle /> : <StyledCheckCircle />}
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
                    checked={formikProps.values.apply}
                    onChange={() => formikProps.setFieldValue('apply', !formikProps.values.apply)}
                  />
                  {formikProps.values.apply ? <StyledCheckboxCheckedIcon /> : <StyledCheckBoxIcon />}
                  <CheckboxText>Подача заявки на вакансію</CheckboxText>
                </CheckboxLabel>

                <CheckboxLabel>
                  <Checkbox
                    id="purpose"
                    name="purpose"
                    type="checkbox"
                    checked={formikProps.values.purpose}
                    onChange={() => formikProps.setFieldValue('purpose', !formikProps.values.purpose)}
                  />
                  {formikProps.values.purpose ? <StyledCheckboxCheckedIcon /> : <StyledCheckBoxIcon />}
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
                  required
                />
                <Tooltip
                  show={formikProps.touched.password && !!formikProps.errors.password}
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
                  required
                />
                <Tooltip
                  show={formikProps.errors.confirmPassword && formikProps.touched.confirmPassword}
                  tips={confirmPasswordTips}
                  bottom="-26px"
                  color="black"
                />
                <ValidationPasswordIcon isValid={!formikProps.errors.confirmPassword}>
                  {formikProps.touched.confirmPassword && renderValidationIcon('confirmPassword', formikProps)}
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
                    checked={formikProps.values.terms}
                    onChange={() => formikProps.setFieldValue('terms', !formikProps.values.terms)}
                    required
                  />
                  {formikProps.values.terms ? <StyledCheckboxCheckedIcon /> : <StyledCheckBoxIcon />}
                  <CheckboxPoliticText>
                    Реєструючись, я даю згоду на використання моїх персональних даних сайту Ypsilon та згоден з
                    <AdressLink href=""> політикою конфіденційності </AdressLink> та
                    <AdressLink href=""> умовами користування. </AdressLink>
                  </CheckboxPoliticText>
                </CheckboxLabel>
              </CheckboxContainer>

              <Button
                type="submit"
                disabled={
                  !formikProps.isValid ||
                  !formikProps.dirty ||
                  formikProps.isSubmitting ||
                  (!formikProps.values.apply && !formikProps.values.purpose) ||
                  !formikProps.values.terms
                }
              >
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
