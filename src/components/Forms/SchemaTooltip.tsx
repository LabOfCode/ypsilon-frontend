import React from 'react';
import * as Yup from 'yup';
import { TooltipBlock, TooltipList, TooltipItem } from './AuthForm.styled';

export const fullnameTips = [
  "Ім'я та прізвище є обов'язковим",
  "Ім'я повинно містити принаймні одну літеру",
  "Ім'я повинно містити лише літери та пробіли"
];

export const emailTips = [
  "Неправильний формат email, приклад: example@mail.com",
  "Email є обов'язковим",
  "Використовуються недопустимі символи",
  "Використовуйте лише літери англійського алфавіту"
];

export const passwordTips = [
  "Пароль є обов'язковим",
  "Пароль має містити щонайменше 6 символів",
  "Пароль повинен містити хоча б одну маленьку літеру",
  "Пароль повинен містити хоча б одну велику літеру",
  "Пароль повинен містити хоча б одну цифру",
  "Уникайте використовування легко вгадуваних паролів"
];

export const confirmPasswordTips = [
  "Паролі не співпадають",
  "Підтвердження паролю є обов'язковим"
];

export const schema = Yup.object().shape({
  fullname: Yup.string()
    .required(fullnameTips[0])
    .matches(/[A-Za-z]+/, fullnameTips[1])
    .matches(/^[A-Za-z\s]+$/, fullnameTips[2]),
  email: Yup.string()
    .email(emailTips[0])
    .required(emailTips[1])
    .matches(/^[A-Za-z0-9@._]+$/, emailTips[2])
    .matches(/^[A-Za-z0-9@._]*[A-Za-z]+[A-Za-z0-9@._]*$/, emailTips[3]),
  password: Yup.string()
    .required(passwordTips[0])
    .min(6, passwordTips[1])
    .matches(/[a-z]/, passwordTips[2])
    .matches(/[A-Z]/, passwordTips[3])
    .matches(/[0-9]/, passwordTips[4])
    .notOneOf(['password', '123456', 'qwerty'], passwordTips[5]),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], confirmPasswordTips[0])
    .required(confirmPasswordTips[1]),
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

interface TooltipProps {
  show: boolean;
  tips: string[];
  bottom: string;
}

const Tooltip: React.FC<TooltipProps> = ({ show, tips, bottom }) => {
  if (!show) {
    return null;
  }

  return (
    <TooltipBlock show={show} bottom={bottom}>
      <TooltipList>
        {tips.map((tip, index) => (
          <TooltipItem key={index}>{tip}</TooltipItem>
        ))}
      </TooltipList>
    </TooltipBlock>
  );
};

export default Tooltip;

