import React, { useState } from 'react';
import { Formik, Field, FormikHelpers, FormikProps } from 'formik';
import { useDispatch } from 'react-redux';
import { signUp } from '@/redux/auth/authOperations';
import { AppDispatch } from '@/redux/store';
import * as Yup from 'yup';
// import IconSprite from '@/assets/images/svg_sprite.svg';
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
  const [showTermsTooltip, setShowTermsTooltip] = useState(false);
  const [showApplyPurposeTooltip, setShowApplyPurposeTooltip] = useState(false);
  const [formCompleted, setFormCompleted] = useState(false);

  const togglePasswordVisibilityPassword = () => {
    setShowPassword(!showPassword);
  };

  const togglePasswordVisibilityConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  
  const submitForm = async (values: RegisterPayload, actions: FormikHelpers<RegisterPayload>) => {
    const showApplyPurposeTooltip = !values.apply && !values.purpose;
    const showTermsTooltip = !values.terms && (!values.apply && !values.purpose);
    
    setShowApplyPurposeTooltip(showApplyPurposeTooltip);
    setShowTermsTooltip(showTermsTooltip);

    if (showApplyPurposeTooltip || showTermsTooltip) {
      setFormCompleted(false);
      actions.setSubmitting(false);
      return;
    }

    try {
      await schema.validate(values);
      await dispatch(signUp(values));
      actions.resetForm();
      setFormCompleted(true); 
    } catch (error) {
      console.error('Error during form submission:', error);
    } finally {
      actions.setSubmitting(false);
    }
  };

  const renderValidationIcon = (field: keyof RegisterPayload, formikProps: any) => {
    const { errors, touched, values } = formikProps;

    if (!touched[field]) return null;

    if (field === 'confirmPassword') {
      const isMatch = values.confirmPassword === values.password;
      const icon = isMatch ? <StyledCheckCircle /> : <StyledAlertCircle />;
    return (
      <ValidationPasswordIcon isValid={isMatch}>
        {icon}
      </ValidationPasswordIcon>
    );
  }

  return errors[field] ? (
    <ValidationPasswordIcon isValid={false}>
      <StyledAlertCircle />
    </ValidationPasswordIcon>
  ) : (
    <ValidationPasswordIcon isValid={true}>
      <StyledCheckCircle />
    </ValidationPasswordIcon>
  );
};
  
  const toggleCheckboxApply = (formikProps: FormikProps<RegisterPayload>) => {
    const newApplyValue = !formikProps.values.apply;
    formikProps.setFieldValue('apply', newApplyValue);
    const newValues = { ...formikProps.values, apply: newApplyValue };
    const formCompleted = areCheckboxesCompleted(newValues);
    setFormCompleted(formCompleted);
    setShowApplyPurposeTooltip(!newValues.apply && !newValues.purpose);
    setShowTermsTooltip(!newValues.terms && (newValues.apply || newValues.purpose));
  };

  const toggleCheckboxPurpose = (formikProps: FormikProps<RegisterPayload>) => {
    const newPurposeValue = !formikProps.values.purpose;
    formikProps.setFieldValue('purpose', newPurposeValue);
    const newValues = { ...formikProps.values, purpose: newPurposeValue };
    const formCompleted = areCheckboxesCompleted(newValues);
    setFormCompleted(formCompleted);
    setShowApplyPurposeTooltip(!newValues.apply && !newValues.purpose);
    setShowTermsTooltip(!newValues.terms && (newValues.apply || newValues.purpose));
  };

  const toggleCheckboxTerms = (formikProps: FormikProps<RegisterPayload>) => {
    const newTermsValue = !formikProps.values.terms;
    formikProps.setFieldValue('terms', newTermsValue);
    const newValues = { ...formikProps.values, terms: newTermsValue };
    const formCompleted = areCheckboxesCompleted(newValues);
    setFormCompleted(formCompleted);
    setShowApplyPurposeTooltip(!newValues.apply && !newValues.purpose);
    setShowTermsTooltip(!newValues.terms && (newValues.apply || newValues.purpose));
    setShowTermsTooltip(!newValues.terms && (!newValues.apply || !newValues.purpose));
  };

  const areCheckboxesCompleted = (values: RegisterPayload) => {
    return (values.apply || values.purpose) && values.terms;
  };


  return (
    <>
      <Title>
        Готові розпочати свою пригоду в Чехії? Заповніть цю форму, щоб створити профіль користувача та розпочати пошук роботи!
      </Title>
      {/* {formCompleted && <p>Форма успішно відправлена!</p>} */}
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
                  isValid={formikProps.touched.email && !formikProps.errors.email}
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
                  </ValidationEmailIcon>
                )}
              </Label>

              <CheckboxContainer>
                <CheckboxLabel>
                  <Checkbox
                    id="apply"
                    name="apply"
                    type="checkbox"
                    checked={formikProps.values.apply}
                    onChange={() => toggleCheckboxApply(formikProps)}
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
                    onChange={() => toggleCheckboxPurpose(formikProps)}
                  />
                  {formikProps.values.purpose ? <StyledCheckboxCheckedIcon /> : <StyledCheckBoxIcon />}
                  <CheckboxText>Реєстрація працівника</CheckboxText>
                </CheckboxLabel>

                  <Tooltip
                    show={showApplyPurposeTooltip}
                    tips={['Ви повинні обрати принаймні одну мету реєстрації']}
                    bottom="-14px"
                    color="red"
                  />
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
                  <Tooltip
                    show={formikProps.errors.confirmPassword && formikProps.touched.confirmPassword} 
                    tips={validationTips.confirmPassword}
                    bottom="-18px"
                    color="black"
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
              </Label>
              <Underline />

              <CheckboxContainer>
                <CheckboxLabel>
                  <Checkbox
                    id="terms"
                    name="terms"
                    type="checkbox"
                    checked={formikProps.values.terms}
                    onChange={() => toggleCheckboxTerms(formikProps)}
                    required
                  />
                  <Tooltip
                    show={showTermsTooltip}
                    tips={['Ви повинні погодитися з умовами використання']}
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
                formikProps.isSubmitting ||
                showApplyPurposeTooltip ||
                showTermsTooltip
              }
              >
                На модерацію
              </Button>
            </Fieldset>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SignupForm;
