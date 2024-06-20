import React, { useState, useEffect } from 'react';
import {
  Form,
  Label,
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
  CheckboxPoliticText,
  CustomInput,
  NamedLabel,
  ErrorText,
  EmailTooltip,
  PasswordTooltip,
  TooltipList,
  TooltipItem,
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
import { Formik, Field, FormikHelpers } from 'formik';
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

const schema = Yup.object().shape({
  fullname: Yup.string()
    .required("Ім'я та прізвище є обов'язковим")
    .matches(/[A-Za-z]+/, "Ім'я повинно містити принаймні одну літеру")
    .matches(/^[A-Za-z\s]+$/, "Ім'я повинно містити лише літери та пробіли"),
  email: Yup.string()
    .email('Неправильний формат email, приклад: example@mail.com')
    .required('Email є обов\'язковим')
    .matches(/^[A-Za-z0-9@._]+$/, 'Використовуються недопустимі символи')
    .matches(/^[A-Za-z0-9@._]*[A-Za-z]+[A-Za-z0-9@._]*$/, 'Використовуйте лише літери англійського алфавіту'),
  password: Yup.string()
    .required('Пароль є обов\'язковим')
    .min(6, 'Пароль має містити щонайменше 6 символів')
    .matches(/[a-z]/, 'Пароль повинен містити хоча б одну маленьку літеру')
    .matches(/[A-Z]/, 'Пароль повинен містити хоча б одну велику літеру')
    .matches(/[0-9]/, 'Пароль повинен містити хоча б одну цифру')
    .notOneOf(['password', '123456', 'qwerty'], 'Уникайте використовування легко вгадуваних паролів'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Паролі не співпадають')
    .required('Підтвердження паролю є обов\'язковим'),
  apply: Yup.bool(),
  purpose: Yup.bool(),
  terms: Yup.bool()
  .required('Ви повинні погодитися з умовами використання')
  .test('checkPurpose', 'Ви повинні обрати принаймні одну мету реєстрації (Подача заявки на вакансію або Реєстрація працівника)', function(value) {
    const { apply, purpose } = this.parent;
    if (!apply && !purpose) {
      return value === true;
    }
    return true;
  }),
});

export const SignupForm: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [emailValid, setEmailValid] = useState<boolean | null>(null);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState<boolean | null>(null);
  const [isEmailTouched, setIsEmailTouched] = useState(false);
  const [isConfirmPasswordTouched, setIsConfirmPasswordTouched] = useState(false);

  const handleSubmit = (values: RegisterPayload, { resetForm }: FormikHelpers<RegisterPayload>) => {
    setIsSubmitting(true);
    handleConfirmPasswordValidation(values.confirmPassword, values)
      .then(() => {
        dispatch(signUp(values))
          .then(() => {
            setIsSubmitting(false);
            resetForm();
          })
          .catch(() => {
            setIsSubmitting(false);
          });
      });
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleEmailValidation = async (value: string) => {
    setIsEmailTouched(true);
    try {
      await schema.validateAt('email', { email: value });
      setEmailValid(true);
    } catch (error) {
      setEmailValid(false);
    }
  };
  
  useEffect(() => {
      const validateEmail = async () => {
        if (isEmailTouched && initialValues.email) {
          try {
            await schema.validateAt('email', { email: initialValues.email });
            setEmailValid(true);
          } catch (error) {
            setEmailValid(false);
          }
        }
      };

      validateEmail();
    }, [isEmailTouched]);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>, handleChange: any) => {
    setIsEmailTouched(true);
    handleChange(e);
    handleEmailValidation(e.target.value);
  };

  const handleConfirmPasswordValidation = async (value: string, { password }: RegisterPayload) => {
    setIsConfirmPasswordTouched(true);
    try {
      await schema.validateAt('confirmPassword', { confirmPassword: value, password });
      setConfirmPasswordValid(true);
    } catch (error) {
      setConfirmPasswordValid(false);
    }
  };

  return (
    <Container>
      <Title>Готові розпочати свою пригоду в Чехії? Заповніть цю форму, щоб створити профіль користувача та розпочати пошук роботи!</Title>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ isValid, dirty, errors, touched, handleChange, values, setFieldValue }) => (
          <Form autoComplete="off">
            <Fieldset>
              <Legend>Зареєструватись</Legend>
              <P>
                Вже зареєструвані?
                <PLink as={Link} to="/login">Увійти</PLink>
              </P>

              <div style={{ position: 'relative' }}>
                <Label htmlFor="fullname">
                  <NamedLabel>Ім'я та прізвище</NamedLabel>
                  <Field
                    as={CustomInput}
                    type="text"
                    id="fullname"
                    name="fullname"
                    placeholder="Введіть своє ім’я та прізвище"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
                  />
                  {touched.fullname && errors.fullname && (
                    <EmailTooltip show={true}>
                      <TooltipList show={true}>
                        {typeof errors.fullname === 'string' ? (
                          <TooltipItem>{errors.fullname}</TooltipItem>
                        ) : (
                          (errors.fullname as string[]).map((error, index) => (
                            <TooltipItem key={index}>{error}</TooltipItem>
                          ))
                        )}
                      </TooltipList>
                    </EmailTooltip>
                  )}
                </Label>
              </div>

              <div style={{ position: 'relative' }}>
                <Label htmlFor="email">
                  <NamedLabel>Електронна адреса</NamedLabel>
                  <Field
                    as={CustomInput}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="email@gmail.com"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleEmailChange(e, handleChange)}
                  />
                  {isEmailTouched && touched.email && errors.email && (
                    <EmailTooltip show={true}>
                      <TooltipList show={true}>
                        {typeof errors.email === 'string' ? (
                          <TooltipItem>{errors.email}</TooltipItem>
                        ) : (
                          (errors.email as string[]).map((error, index) => (
                            <TooltipItem key={index}>{error}</TooltipItem>
                          ))
                        )}
                      </TooltipList>
                    </EmailTooltip>
                  )}
                  {isEmailTouched && emailValid !== null && (
                    <ValidationEmailIcon isValid={emailValid}>
                      {emailValid === true ? <StyledCheckCircle /> : emailValid === false ? <StyledAlertCircle /> : null}
                      <EyeIcon />
                    </ValidationEmailIcon>
                  )}
                </Label>
              </div>

              <CheckboxContainer>
                <CheckboxLabel>
                  <Checkbox
                    id="apply"
                    name="apply"
                    type="checkbox"
                    checked={values.apply}
                    onChange={() => setFieldValue('apply', !values.apply)}
                  />
                  {values.apply ? <StyledCheckboxCheckedIcon /> : <StyledCheckBoxIcon />}
                  <CheckboxText>Подача заявки на вакансію</CheckboxText>
                </CheckboxLabel>
              </CheckboxContainer>

              <CheckboxContainer>
                <CheckboxLabel>
                  <Checkbox
                    id="purpose"
                    name="purpose"
                    type="checkbox"
                    checked={values.purpose}
                    onChange={() => setFieldValue('purpose', !values.purpose)}
                  />
                  {values.purpose ? <StyledCheckboxCheckedIcon /> : <StyledCheckBoxIcon />}
                  <CheckboxText>Реєстрація працівника</CheckboxText>
                </CheckboxLabel>
              </CheckboxContainer>

              <div style={{ position: 'relative' }}>
                <Label htmlFor="password">
                  <NamedLabel>Пароль</NamedLabel>
                  <Field
                    as={CustomInput}
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    placeholder="*********"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
                  />
                  <TogglePasswordButton type="button" onClick={togglePasswordVisibility}>
                    {showPassword ? (
                      <StyledEyeOn />
                    ) : (
                      <StyledEyeOff />
                    )}
                  </TogglePasswordButton>
                  {touched.password && errors.password && (
                    <PasswordTooltip show={true}>
                      <TooltipList show={true}>
                        {typeof errors.password === 'string' ? (
                          <TooltipItem>{errors.password}</TooltipItem>
                        ) : (
                          (errors.password as string[]).map((error, index) => (
                            <TooltipItem key={index}>{error}</TooltipItem>
                          ))
                        )}
                      </TooltipList>
                    </PasswordTooltip>
                  )}
                </Label>
              </div>

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
                    handleConfirmPasswordValidation(e.target.value, values);
                  }}
                />
                <ValidationPasswordIcon isValid={confirmPasswordValid}>
                  {confirmPasswordValid === true ? <StyledCheckCircle /> : confirmPasswordValid === false ? <StyledAlertCircle /> : null}
                </ValidationPasswordIcon>
                <TogglePasswordButton type="button" onClick={togglePasswordVisibility}>
                  {showPassword ? (
                    <StyledEyeOn />
                  ) : (
                    <StyledEyeOff />
                  )}
                </TogglePasswordButton>
                {touched.confirmPassword && errors.confirmPassword && (
                  <PasswordTooltip show={true}>
                    <TooltipList show={true}>
                      {typeof errors.confirmPassword === 'string' ? (
                        <TooltipItem>{errors.confirmPassword}</TooltipItem>
                      ) : (
                        (errors.confirmPassword as string[]).map((error, index) => (
                          <TooltipItem key={index}>{error}</TooltipItem>
                        ))
                      )}
                    </TooltipList>
                  </PasswordTooltip>
                )}
              </Label>

              <Underline />
              
              <CheckboxContainer>
                <CheckboxLabel>
                  <Checkbox
                    id="terms"
                    name="terms"
                    type="checkbox"
                    checked={values.terms}
                    onChange={() => setFieldValue('terms', !values.terms)}
                    />
                    {values.terms ? <StyledCheckboxCheckedIcon /> : <StyledCheckBoxIcon />}
                    <CheckboxPoliticText>
                      Реєструючись, я даю згоду на використання моїх персональних даних сайту Ypsilon та згоден з
                      <PoliticLink href=""> політикою конфіденційності </PoliticLink> та <PoliticLink href=""> правилами користування сайтом.</PoliticLink>
                    </CheckboxPoliticText>
                  </CheckboxLabel>
                  {touched.terms && errors.terms && (
                    <ErrorText>{errors.terms}</ErrorText>
                )}
              </CheckboxContainer>

              <Button type="submit" disabled={!isValid || !dirty || isSubmitting || (!values.apply && !values.purpose) || !values.terms}>
                Зареєструватись
              </Button>

            </Fieldset>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default SignupForm;
