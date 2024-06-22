import styled from 'styled-components';
import { theme } from '@/Theme';
import EyeOffActive from '@/assets/images/icons/eye_off_active.svg';
import EyeOff from '@/assets/images/icons/eye_off.svg';
import EyeOn from '@/assets/images/icons/eye_on.svg';
import CheckCircleIcon from '@/assets/images/icons/check_circle.svg';
import AlertCircleIcon from '@/assets/images/icons/alert_circle.svg';
import CheckBoxIcon from '@/assets/images/icons/checkbox.svg';
import CheckBoxCheckedIcon from '@/assets/images/icons/checkbox-сhecked.svg';

interface StyledCircleProps {
  isValid: boolean;
  theme?: any;
}

interface CustomInputProps {
  isValid: boolean | null;
}

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 3px solid ${theme.colors.colorTeal};
  background-image: ${theme.colors.backgroundOcean};
  border-radius: 8px;
  box-shadow: ${theme.boxShadow};
  margin-top: 32px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 276px;
  position: relative;

  @media ${theme.media.tablet} {
    width: 424px;
    margin-bottom: 272px;
  }

  @media ${theme.media.desktop} {
    width: 424px;
    margin-bottom: 196px;
  }
`;

export const Legend = styled.legend`
  color: ${theme.colors.colorWhite};
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 16px;

  @media ${theme.media.tablet} {
    margin-bottom: 24px;
  }

  @media ${theme.media.desktop} {
    margin-bottom: 24px;
  }
`;

export const PLink = styled.a`
  color: ${theme.colors.colorYellow};
  font-size: 16px;
  text-decoration: underline;
  margin-left: 8px;
  white-space: nowrap;
  text-decoration: underline;
`;

export const PoliticLink = styled.a`
  color: ${theme.colors.colorWhite};
  font-size: 12px;
  text-decoration: underline;
  margin-left: 8px;
  white-space: nowrap;
  text-decoration: underline;
`;

export const P = styled.p`
  color: ${theme.colors.colorWhite};
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
  margin-left: 24px;
  flex-wrap: wrap;
  word-wrap: break-word;
  white-space: normal;
`;

export const Fieldset = styled.fieldset`
  border: none;
  margin-top: 24px;
  margin-bottom: 55px;


  @media ${theme.media.tablet} {
    margin-top: 48px;
  }

  @media ${theme.media.desktop} {
    margin-top: 48px;
  }
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  color: ${theme.colors.colorWhite};
`;

export const NamedLabel = styled.p`
  margin-left: 12px;
  &::after {
    content: ' *';
    color: ${theme.colors.colorRed};
  }
`;

export const Input = styled.input`
  height: 48px;
  border-radius: 4px;
  border: 1px solid ${theme.colors.colorWhite};
  background-color: ${theme.colors.backgroundWhite};
  color: ${theme.colors.colorBlack};
  margin-left: auto;
  margin-right: auto;

  &::placeholder {
    color: ${theme.colors.colorGray};
    font-size: 14px;
  }

  @media ${theme.media.tablet} {
    margin-bottom: 24px;
  }

  @media ${theme.media.desktop} {
    margin-bottom: 24px;
  }
`;

export const ErrorText = styled.div`
  color: ${theme.colors.colorRed};
  font-size: 14px;
  margin-top: -8px;
  margin-bottom: 8px;
`;

export const TooltipBlock = styled.div<{ show: boolean, bottom: string  }>`
border-radius: 4px;
padding: 4px;
z-index: 1000;
font-size: 10px;
position: absolute;
overflow: hidden;
transition: max-height 0.3s ease-out, opacity 0.3s ease-out;
width: 94%;
left: 0;
right: 0;
margin: auto;
max-height: ${({ show }) => (show ? '100px' : '0')};
opacity: ${({ show }) => (show ? '1' : '0')};
bottom: ${({ bottom }) => bottom};
border: 1px solid ${({ theme }) => theme.colors.colorBlack};
display: ${({ show }) => (show ? 'block' : 'none')};
background-color: ${({ theme }) => theme.colors.backgroundWhite};
`;

export const TooltipList = styled.ul`
  border-radius: 4px;
  color: ${({ color }) => color};
  background-color: ${({ theme }) => theme.colors.backgroundWhite};
  list-style-type: none;
  margin: 0;
  padding: 0;

  & li::before {
    content: '•';
    display: inline-block;
    width: 1em;
    vertical-align: middle;
  }
`;

export const TooltipItem = styled.li`
  margin: 5px 8px;
`;

export const CheckboxContainer = styled.div`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 16px;
  margin-left: 19px;
  color: ${theme.colors.colorWhite};
`;

export const PMeta = styled.div`
  color: ${theme.colors.colorWhite};
  margin-bottom: 16px;
  font-size: 16px;
  &::after {
    content: ' *';
    color: ${theme.colors.colorRed};
  }
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  color: ${theme.colors.colorWhite};
  margin-bottom: 16px;
`;

export const CheckboxTermsLabel = styled.label`
  color: ${theme.colors.colorWhite};
  display: flex;
  align-items: center;
`;

export const CheckboxText = styled.span`
  margin-left: 24px;
  font-size: 14px;
`;

export const CheckboxPoliticText = styled.span`
  width: 265px;
  margin-left: 24px;
  font-size: 12px;
  flex-wrap: wrap;
  word-wrap: break-word;
  white-space: normal;
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  cursor: pointer;
`;

export const StyledCheckBoxIcon = styled(CheckBoxIcon)`
  width: 24px;
  height: 24px
`;

export const StyledCheckboxCheckedIcon = styled(CheckBoxCheckedIcon)`
  width: 24px;
  height: 24px
`;

export const Title = styled.p`
  max-width: 100%;
  color: ${theme.colors.colorWhite};
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.4;
  margin: 40px auto 32px;
  margin-left: auto;
  margin-right: auto;

  @media ${theme.media.tablet} {
    width: 653px;
    font-size: 24px;
    margin-bottom: 56px;
  }

  @media ${theme.media.desktop} {
    width: 653px;
    font-size: 28px;
    margin-bottom: 64px;
  }
`;

export const Button = styled.button`
  width: 322px;
  height: 60px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 24px;
  font-weight: bold;
  margin-top: 16px;
  margin-left: auto;
  margin-right: auto;
  color: ${theme.colors.colorWhite};
  background-color: ${theme.colors.backgroundTeal};
  transition: background-color 0.3s ${theme.cubicBezier};

  &:hover {
    background-color: ${theme.colors.backgroundYellow};
  }

  &:disabled {
    background-color: ${theme.colors.backgroundGray};
    color: ${theme.colors.colorGray};
    cursor: not-allowed;
  }
`;

export const LinkText = styled.a`
  color: ${theme.colors.colorWhite};
  text-decoration: underline;
`;

export const TogglePasswordButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`;

export const ValidationEmailIcon = styled.div<StyledCircleProps>`
  display: flex;
  align-items: center;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ isValid, theme }) => (isValid ? theme.colors.colorGreen : theme.colors.colorRed)};
  svg {
    width: 1em;
    height: 1em;
    margin-right: 5px;
  }
`;

export const ValidationPasswordIcon = styled.div<StyledCircleProps>`
  display: flex;
  align-items: center;
  position: absolute;
  transform: translateY(-50%);
  color: ${({ isValid, theme }) => (isValid ? theme.colors.colorGreen : theme.colors.colorRed)};
  right: 32px;
  top: 50%;
  transform: translateY(-50%);
  svg {
    width: 1em;
    height: 1em;
  }
`;

export const StyledEyeOff = styled(EyeOff)`
  width: 24px;
  height: 16px;
  margin-right: -5px;
`;

export const StyledEyeOn = styled(EyeOn)`
  width: 24px;
  height: 16px;
  margin-right: -2px;
`;

export const EyeIcon = styled(EyeOffActive)`
  color: ${theme.colors.colorBlack};
  width: 24px;
  height: 16px;
`;

export const StyledCheckCircle = styled(CheckCircleIcon)`
  width: 1em;
  height: 1em;
`;

export const StyledAlertCircle = styled(AlertCircleIcon)`
  width: 1em;
  height: 1em;
`;

export const CustomInput = styled.input<CustomInputProps>`
  width: 314px;
  height: 48px;
  border-radius: 4px;
  margin-top: 8px;
  margin-bottom: 16px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid ${theme.colors.colorWhite};
  background-color: ${theme.colors.backgroundWhite};
  color: ${({ isValid, theme }) => 
    isValid === undefined 
      ? theme.colors.colorBlack 
      : isValid === null 
        ? theme.colors.colorBlack 
        : isValid 
          ? theme.colors.colorBlack 
          : theme.colors.colorRed
  };

  &::placeholder {
    color: ${theme.colors.colorGray};
    font-size: 14px;
  }

  @media ${theme.media.tablet} {
    margin-bottom: 24px;
  }

  @media ${theme.media.desktop} {
    margin-bottom: 24px;
  }
`;

export const Underline = styled.div`
  width: 50%;
  margin: 0 auto;
  height: 1px;
  background-color: ${theme.colors.backgroundWhite};
  margin-top: -8px;
  margin-bottom: 16px;
`;