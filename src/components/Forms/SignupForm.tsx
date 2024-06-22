import React, { useState } from 'react';
import { Formik, Field, FormikHelpers, useFormikContext } from 'formik';
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
  PoliticLink
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
  const formik = useFormikContext<RegisterPayload>();
  const [showPassword, setShowPassword] = useState(false); 
  
  const handleSubmit = async (values: RegisterPayload, { resetForm }: FormikHelpers<RegisterPayload>) => {
    formik.setSubmitting(true);
    try {
      await schema.validate(values, { abortEarly: false });
      await dispatch(signUp(values));
      formik.setSubmitting(false);
      resetForm();
    } catch {
      formik.setSubmitting(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container>
      <Title>
        Готові розпочати свою пригоду в Чехії? Заповніть цю форму, щоб створити профіль користувача та розпочати пошук роботи!
      </Title>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <InnerForm showPassword={showPassword} togglePasswordVisibility={togglePasswordVisibility} />
      </Formik>
    </Container>
  );
};

const InnerForm: React.FC<{ showPassword: boolean; togglePasswordVisibility: () => void }> = ({ showPassword, togglePasswordVisibility }) => {
  const formik = useFormikContext<RegisterPayload>();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    formik.handleChange(e);
    formik.validateField('email');
  };

  const handleFullnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    formik.handleChange(e);
    formik.validateField('fullname');
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    formik.handleChange(e);
    formik.validateField('confirmPassword');
  };

  const renderValidationIcon = (field: keyof RegisterPayload) => {
    const { errors, touched } = formik;
    if (!touched[field]) return null;
    return errors[field] ? <StyledAlertCircle /> : <StyledCheckCircle />;
  };

  return (
    <Form>
      <Fieldset>
        <Legend>Зареєструватись</Legend>
        <Label htmlFor="fullname">
          <NamedLabel>Ім'я та прізвище</NamedLabel>
          <Field
            as={CustomInput}
            type="text"
            id="fullname"
            name="fullname"
            placeholder="Введіть своє ім’я та прізвище"
            onChange={handleFullnameChange}
          />
          <Tooltip
            show={formik.errors.fullname && formik.touched.fullname}
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
            onChange={handleEmailChange}
            isValid={formik.touched.email ? !formik.errors.email : null}
          />
          <Tooltip
            show={formik.errors.email && formik.touched.email}
            tips={emailTips}
            bottom="-72px"
            color="red"
          />
          {formik.touched.email && (
            <ValidationEmailIcon isValid={!formik.errors.email}>
              {formik.errors.email ? <StyledAlertCircle /> : <StyledCheckCircle />}
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
              checked={formik.values.apply}
              onChange={() => formik.setFieldValue('apply', !formik.values.apply)}
            />
            {formik.values.apply ? <StyledCheckboxCheckedIcon /> : <StyledCheckBoxIcon />}
            <CheckboxText>Подача заявки на вакансію</CheckboxText>
          </CheckboxLabel>

          <CheckboxLabel>
            <Checkbox
              id="purpose"
              name="purpose"
              type="checkbox"
              checked={formik.values.purpose}
              onChange={() => formik.setFieldValue('purpose', !formik.values.purpose)}
            />
            {formik.values.purpose ? <StyledCheckboxCheckedIcon /> : <StyledCheckBoxIcon />}
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
            onChange={formik.handleChange}
          />
          <Tooltip
            show={formik.touched.password && !!formik.errors.password}
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
            onChange={handleConfirmPasswordChange}
          />
          <Tooltip
            show={formik.errors.confirmPassword && formik.touched.confirmPassword}
            tips={confirmPasswordTips}
            bottom="-26px"
            color="black"
          />
          <ValidationPasswordIcon isValid={!formik.errors.confirmPassword}>
            {renderValidationIcon('confirmPassword')}
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
              checked={formik.values.terms}
              onChange={() => formik.setFieldValue('terms', !formik.values.terms)}
            />
            {formik.values.terms ? <StyledCheckboxCheckedIcon /> : <StyledCheckBoxIcon />}
            <CheckboxPoliticText>
              Реєструючись, я даю згоду на використання моїх персональних даних сайту Ypsilon та згоден з
              <PoliticLink href=""> політикою конфіденційності </PoliticLink> та
              <PoliticLink href=""> умовами користування. </PoliticLink>
            </CheckboxPoliticText>
          </CheckboxLabel>
        </CheckboxContainer>

        <Button type="submit" disabled={
          !formik.isValid || !formik.dirty || formik.isSubmitting || (!formik.values.apply && !formik.values.purpose) || !formik.values.terms}>
          На модерацію
        </Button>
      </Fieldset>
    </Form>
  );
};

export default SignupForm;
