import React, { useState } from 'react';
import { Formik, Field, FormikHelpers } from 'formik';
import { useDispatch } from 'react-redux';
import { signUp } from '@/redux/auth/authOperations';
import { AppDispatch } from '@/redux/store';
import Container from '@/components/Container';
import * as Yup from 'yup';
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
  AdressLink,
  TooltipBlock,
  TooltipList,
  TooltipItem
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

const validationTips = {
  fullname: [
    "Ім'я та прізвище є обов'язковим",
    "Ім'я повинно містити принаймні одну літеру",
    "Ім'я повинно містити лише літери та пробіли"
  ],
  email: [
    "Неправильний формат email, приклад: example@mail.com",
    "Email є обов'язковим",
    "Використовуються недопустимі символи",
    "Використовуйте лише літери англійського алфавіту"
  ],
  password: [
    "Пароль є обов'язковим",
    "Пароль має містити щонайменше 6 символів",
    "Пароль повинен містити хоча б одну маленьку літеру",
    "Пароль повинен містити хоча б одну велику літеру",
    "Пароль повинен містити хоча б одну цифру",
    "Уникайте використовування легко вгадуваних паролів"
  ],
  confirmPassword: [
    "Паролі не співпадають",
    "Підтвердження паролю є обов'язковим"
  ],
  apply: [
    "Ви повинні обрати принаймні одну мету реєстрації",
  ],
  purpose: [
    "Ви повинні обрати принаймні одну мету реєстрації",
  ],
  terms: [
    "Ви повинні погодитися з умовами використання",
  ],
};

export const schema = Yup.object().shape({
  fullname: Yup.string()
    .required(validationTips.fullname[0])
    .matches(/[A-Za-z]+/, validationTips.fullname[1])
    .matches(/^[A-Za-z\s]+$/, validationTips.fullname[2]),
  email: Yup.string()
    .email(validationTips.email[0])
    .required(validationTips.email[1])
    .matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, validationTips.email[2])
    .matches(/^[A-Za-z0-9@._]*[A-Za-z]+[A-Za-z0-9@._]*$/, validationTips.email[3]),
  password: Yup.string()
    .required(validationTips.password[0])
    .min(6, validationTips.password[1])
    .matches(/[a-z]/, validationTips.password[2])
    .matches(/[A-Z]/, validationTips.password[3])
    .matches(/[0-9]/, validationTips.password[4])
    .notOneOf(['password', '123456', 'qwerty'], validationTips.password[5]),
});

interface TooltipProps {
  show: boolean;
  tips: string[];
  bottom: string;
  color: string;
}

const Tooltip: React.FC<TooltipProps> = ({ show, tips, bottom, color }) => {
  if (!show) {
    return null;
  }

  return (
    <TooltipBlock show={show} bottom={bottom}>
      <TooltipList color={color}>
        {tips.map((tip, index) => (
          <TooltipItem key={index}>{tip}</TooltipItem>
        ))}
      </TooltipList>
    </TooltipBlock>
  );
};

export const SignupForm: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showConfirmPasswordTips, setShowConfirmPasswordTips] = useState(false);
  const [showTips, setShowTips] = useState(false);

  const togglePasswordVisibilityPassword = () => {
    setShowPassword(!showPassword);
  };

  const togglePasswordVisibilityConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
    setShowConfirmPasswordTips(false);
    setShowTips(false); 
  };

  const submitForm = async (values: RegisterPayload, actions: FormikHelpers<RegisterPayload>) => {
    try {
      const { confirmPassword, apply, purpose, terms, ...formData } = values;

      if (values.password !== values.confirmPassword) {
      actions.setFieldError('confirmPassword', validationTips.confirmPassword[0]);
      actions.setSubmitting(false);
      return;
    }

      await schema.validate(formData, { abortEarly: false });

      if (!values.terms || (!values.apply && !values.purpose)) {
        setShowTips(true); 
        actions.setSubmitting(false); 
        return;
      }

      await dispatch(signUp(formData));
      actions.resetForm();
    } catch (error) {
      console.error('Error during form submission:', error);
    }
  };

const renderValidationIcon = (field: keyof RegisterPayload, formikProps: any) => {
  const { errors, touched, values } = formikProps;

  if (!touched[field]) return null;

  if (field === 'confirmPassword') {
    const isMatch = values.confirmPassword === values.password;
    setShowConfirmPasswordTips(!isMatch); 
    const icon = isMatch ? <StyledCheckCircle /> : <StyledAlertCircle />;
    return icon;
  }

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
                  tips={validationTips.fullname}
                  bottom="-32px"
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
                  tips={validationTips.email}
                  bottom="-58px"
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

                {showTips && !formikProps.values.apply && !formikProps.values.purpose && (
                  <Tooltip
                    show={!formikProps.values.apply && !formikProps.values.purpose}
                    tips={validationTips.apply} 
                    bottom="-12px"
                    color="red"
                  />
                )}
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
                  tips={validationTips.password}
                  bottom="-74px"
                  color="black"
                />
                <TogglePasswordButton type="button" onClick={togglePasswordVisibilityPassword}>
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
                  type={showConfirmPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="*********"
                  required
                />
                <ValidationPasswordIcon isValid={formikProps.values.confirmPassword === formikProps.values.password}>
                  {renderValidationIcon('confirmPassword', formikProps)}
                </ValidationPasswordIcon>
                <TogglePasswordButton type="button" onClick={togglePasswordVisibilityConfirmPassword}>
                  {showConfirmPassword ? (
                    <StyledEyeOn />
                  ) : (
                    <StyledEyeOff />
                  )}
                </TogglePasswordButton>
                {(formikProps.touched.confirmPassword && !showConfirmPasswordTips) || showTips && (
                  <Tooltip
                    show={formikProps.errors.confirmPassword && formikProps.touched.confirmPassword}
                    tips={validationTips.confirmPassword}
                    bottom="-18px"
                    color="black"
                  />
                )}
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
                  <Tooltip
                    show={!formikProps.values.terms && formikProps.touched.terms}
                    tips={validationTips.terms}
                    bottom="-14px"
                    color="red"
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
                  formikProps.isSubmitting
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
