import { Form } from 'formik';
import { IMaskInput } from 'react-imask';
import styled from 'styled-components';
import { css } from 'styled-components';

export const FormWrapper = styled(Form)`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.colorWhite};
  font-size: 20px;
  font-weight: 700;
  line-height: 1.4;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const InputWithMask = styled(IMaskInput)<{ error: string | undefined }>`
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  padding: 10px 15px 13px 15px;
  border: none;
  border-radius: 10px;
  outline: none;
  font-size: 12px;
  font-weight: 400;
  font-family: 'Montserrat', sans-serif;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.colorBlack};
  background-color: ${({ theme }) => theme.colors.colorWhite};
  transition: border 250ms ${({ theme }) => theme.cubicBezier};

  &::placeholder {
    font-weight: 400;
    color: ${({ theme }) => theme.colors.colorGray};
  }

  ${({ error }) =>
    error === 'true' &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.colorRed};
    `}
`;

export const CustomBtnWrapp = styled.div`
  margin-left: auto;
`;

export const ErrorText = styled.p`
  color: ${({ theme }) => theme.colors.colorRed};
  position: absolute;
  bottom: -16px;
  font-size: 12px;
`;
