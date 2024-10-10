import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';

import {
  CustomBtnWrapp,
  ErrorText,
  FormWrapper,
  InputWithMask,
  InputWrapper,
  InputsContainer,
  Title,
} from './FeedbackForm.styled';
import { Button } from '@/components/Button/Button';
import TextField from '@/components/common/TextField/TextField';

interface FormProps {
  setModalFormOpen: (isOpen: boolean) => void;
}

const FeedbackForm = (props: FormProps) => {
  const { setModalFormOpen } = props;

  const initialValues = { name: '', phone: '', comment: '' };

  const handleSubmit = async (
    values: { name: string; phone: string; comment: string },
    { resetForm }: FormikHelpers<{ name: string; phone: string; comment: string }>
  ) => {
    try {
      console.log('🚀values:', values);
      resetForm();
      setModalFormOpen(false);
    } catch (error) {
      console.log('🚀error:', error);
    }
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Це поле обовʼязкове для заповнення'),
    phone: Yup.string().required('Це поле обовʼязкове для заповнення'),
    comment: Yup.string().max(500, 'Введіть максимум 500 символів'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched, setFieldValue, handleChange }) => (
        <FormWrapper>
          <Title>Звʼязатись з нами:</Title>
          <InputsContainer>
            <InputWrapper>
              <TextField
                error={touched.name && errors.name ? 'true' : undefined}
                placeholder="ПІБ"
                value={values.name}
                name="name"
                onChange={handleChange}
              />
              {errors.name && touched.name && <ErrorText>{errors.name}</ErrorText>}
            </InputWrapper>
            <InputWrapper>
              <InputWithMask
                error={errors.phone && touched.phone ? 'true' : 'false'}
                mask="+380 (00) 000-00-00"
                definitions={{ '0': /[0-9]/ }}
                inputRef={(ref: HTMLInputElement) => ref && (ref.value = values.phone)}
                onAccept={(value: string) => {
                  if (value.startsWith('+') && !value.startsWith('+380')) {
                    value = '+380' + value.slice(3);
                  }
                  setFieldValue('phone', value);
                }}
                placeholder="Телефон"
                name="phone"
                autoComplete="off"
                value={values.phone}
              />
              {errors.phone && touched.phone && <ErrorText>{errors.phone}</ErrorText>}
            </InputWrapper>
            <InputWrapper>
              <TextField
                as="textarea"
                error={touched.comment && errors.comment ? 'true' : undefined}
                placeholder="Що саме цікавить?"
                value={values.comment}
                name="comment"
                onChange={handleChange}
                rows={4}
              />
              {errors.comment && touched.comment && <ErrorText>{errors.comment}</ErrorText>}
            </InputWrapper>
          </InputsContainer>

          <CustomBtnWrapp>
            <Button
              type="submit"
              fontSize="20px !important"
              padding="9px 21px"
              width={'169px !important'}
              $teal
            >
              Відправити
            </Button>
          </CustomBtnWrapp>
        </FormWrapper>
      )}
    </Formik>
  );
};

export default FeedbackForm;
