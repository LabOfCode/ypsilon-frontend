import React, { useState } from 'react';
import { Formik, Field, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
// import { recoverPassword } from '@/redux/auth/authOperations';
import { AppDispatch } from '@/redux/store';
import {
  Form,
  Label,
  Button,
  Title,
  Legend,
  Fieldset,
  CustomInput,
  NamedLabel,
  LoginTooltipBlock,
  LoginTooltipInnerBlock,
  LoginTooltipList,
  LoginTooltipItem,
  StyledCheckCircle,
  StyledAlertCircle,
  ErrorText,
  PSentLink,
  PInstr,
  ValidEmailIcon,
  PRule,
  ErrorTextContainer,
} from './AuthForm.styled';

const validationTips = {
  email: [
    "Введення символів латинецею",
    "Використовувати дійсний емейл",
  ],
};

const schema = Yup.object().shape({
  email: Yup.string()
    .matches(/^[A-Za-z0-9@._]*[A-Za-z]+[A-Za-z0-9@._]*$/, validationTips.email[0])
    .matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, validationTips.email[1]),
});

interface RecoveryPayload {
  email: string;
}

const initialValues: RecoveryPayload = {
  email: '',
};

const PasswordRecoveryForm: React.FC = () => {
   const dispatch: AppDispatch = useDispatch();
   const [emailSent, setEmailSent] = useState(false);

  const submitForm = async (values: RecoveryPayload, actions: FormikHelpers<RecoveryPayload>) => {
    try {
      await schema.validate(values, { abortEarly: false });
      // await dispatch(recoverPassword(values.email)).unwrap();
      setEmailSent(true);
      actions.resetForm();
    } catch (error: any) {
      if (error.payload === 'Email is wrong') {
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
        </LoginTooltipInnerBlock>
      </LoginTooltipBlock>
    )
  );

  return (
   <>
      <Title>
        Шукаєте роботу в Чехії? Не шукайте далі! Ваша мрія про чеські багаті зарплати ось-ось здійсниться!
      </Title>
      <Formik initialValues={initialValues} validationSchema={schema} onSubmit={submitForm}>
        {(formikProps) => (
          <Form onSubmit={formikProps.handleSubmit}>
            <Fieldset>
            <Legend>Відновлення паролю</Legend>
            <PInstr>
               Введіть свій емейл, та ми відправимо Вам інструкцію з відновлення паролю
            </PInstr>

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
               {formikProps.touched.email && (
                <ValidEmailIcon isValid={!formikProps.errors.email}>
                  {formikProps.errors.email ? <StyledAlertCircle /> : <StyledCheckCircle />}
                </ValidEmailIcon>
              )}
               <ErrorTextContainer>
                {formikProps.touched.email && formikProps.errors.email && (
                  <ErrorText>Email не існує або не зареєстрований</ErrorText>
                )}
              </ErrorTextContainer>
              {renderTooltip(
                formikProps.touched.email,
                formikProps.errors.email,
                formikProps.values.email,
                ["^[A-Za-z0-9@._]*[A-Za-z]+[A-Za-z0-9@._]*$", "^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$"],
                validationTips.email
              )}
            </Label>
                    
            {emailSent && (
               <PSentLink>
                  На Вашу електронну адресу було відправлено інструкцію з відновлення паролю, перевірте та в разі неотримання листа - відправте повторно
               </PSentLink>
            )}

            <Button
               type="submit"
               disabled={
               !formikProps.isValid ||
               !formikProps.dirty ||
               formikProps.isSubmitting ||
               formikProps.isValidating
               }
               > Відправити
            </Button>

            </Fieldset>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default PasswordRecoveryForm;
