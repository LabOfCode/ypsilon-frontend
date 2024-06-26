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

export const Form = styled.form`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 338px;
  border: 3px solid ${theme.colors.colorTeal};
  background-image: ${theme.colors.backgroundOcean};
  border-radius: 8px;
  box-shadow: ${theme.boxShadow};
  margin-top: 32px;
  margin-left: auto;
  margin-right: auto;

  @media ${theme.media.tablet} {
    width: 418px;
  }

  @media ${theme.media.desktop} {
    width: 418px;
  }
`;

export const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  border: none;
  margin-top: 24px;
  padding-left: 6px;
  padding-right: 6px;


  @media ${theme.media.tablet} {
    margin-top: 48px;
    padding-left: 26px;
    padding-right: 26px;
  }

  @media ${theme.media.desktop} {
    margin-top: 48px;
    padding-left: 26px;
    padding-right: 26px;
  }
`;

export const CustomInput = styled.input<{ isValid?: boolean }>`
  height: 48px;
  border-radius: 4px;
  margin-top: 8px;
  margin-bottom: 16px;
  border: 1px solid ${({ isValid, theme }) => 
    isValid === undefined 
      ? theme.colors.colorWhite 
      : isValid === null 
        ? theme.colors.colorWhite 
        : isValid 
          ? theme.colors.colorWhite 
          : theme.colors.colorRed
  };
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
    margin-bottom: 16px;
  }

  @media ${theme.media.desktop} {
    margin-bottom: 16px;
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
`;

export const AdressLink = styled.a`
  color: ${theme.colors.colorWhite};
  font-size: 12px;
  text-decoration: underline;
  margin-left: 8px;
`;

export const RememberLink = styled.a`
  display: flex;
  justify-content: center;
  color: ${theme.colors.colorWhite};
  font-size: 14px;
  text-decoration: underline;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 16px;

  @media ${theme.media.tablet} {
    margin-bottom: 24px;
  }

  @media ${theme.media.desktop} {
    margin-bottom: 24px;
  }
`;

export const P = styled.p`
  color: ${theme.colors.colorWhite};
  font-size: 16px;
  margin-top: 0;
  margin-bottom: 16px;
  margin-left: auto;
  margin-right: auto;
  flex-wrap: wrap;
  word-wrap: break-word;
  white-space: normal;
  display: flex;
  justify-content: center;
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  color: ${theme.colors.colorWhite};
  
`;

export const NamedLabel = styled.p`
  &::after {
    content: ' *';
    color: ${theme.colors.colorRed};
  }
`;

export const ErrorText = styled.div`
  color: ${theme.colors.colorRed};
  font-size: 14px;
  margin-top: -8px;
  margin-bottom: 8px;
`;

export const TooltipBlock = styled.div<{ show: boolean, bottom: string  }>`
position: absolute;
border-radius: 4px;
padding: 4px;
z-index: 1000;
font-size: 10px;
overflow: hidden;
transition: max-height 0.3s ease-out, opacity 0.3s ease-out;
width: 100%;
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
  margin: 2px 2px;
`;

export const CheckboxContainer = styled.div`
  position: relative;
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
  margin-bottom: 16px;
  color: ${theme.colors.colorWhite};
`;

export const CheckboxTermsLabel = styled.label`
  color: ${theme.colors.colorWhite};
`;

export const CheckboxText = styled.span`
  margin-left: 24px;
  font-size: 14px;
`;

export const CheckboxPoliticText = styled.span`
  width: 250px;
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
color: ${theme.colors.colorWhite};
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.4;
  margin-bottom: 32px;
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
color: ${theme.colors.colorWhite};
background-color: ${theme.colors.backgroundTeal};
  width: 322px;
  height: 60px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 24px;
  font-weight: bold;
  margin-left: auto;
  margin-right: auto;
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
  gap: 4px;
  align-items: center;
  position: absolute;
  right: 4px;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ isValid, theme }) => (isValid ? theme.colors.colorGreen : theme.colors.colorRed)};
`;

export const ValidationPasswordIcon = styled.div<StyledCircleProps>`
  display: flex;
  align-items: center;
  position: absolute;
  right: 36px;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ isValid, theme }) => (isValid ? theme.colors.colorGreen : theme.colors.colorRed)};
`;

export const StyledEyeOff = styled(EyeOff)`
  width: 24px;
  height: 16px;
  margin-right: -4px;
`;

export const StyledEyeOn = styled(EyeOn)`
  width: 24px;
  height: 16px;
`;

export const EyeIcon = styled(EyeOffActive)`
  color: ${theme.colors.colorBlack};
  width: 24px;
  height: 16px;
`;

export const StyledCheckCircle = styled(CheckCircleIcon)`
  color: ${theme.colors.colorGreen};
  width: 16px;
  height: 16px;
`;

export const StyledAlertCircle = styled(AlertCircleIcon)`
  color: ${theme.colors.colorRed};
  width: 16px;
  height: 16px;
`;

export const Underline = styled.div`
  width: 50%;
  margin: 0 auto;
  height: 1px;
  background-color: ${theme.colors.backgroundWhite};
  margin-bottom: 16px;
`;

export const LoginTooltipBlock = styled.div`
  margin-bottom: 8px;
  font-size: 12px;
`;

export const LoginTooltipInnerBlock = styled.div<{ isValid?: boolean }>`
  border-radius: 8px;
  padding: 8px;
  border: 1px solid ${({ isValid, theme }) =>
    isValid === undefined
      ? theme.colors.colorTeal
      : isValid === null
      ? theme.colors.colorTeal
      : isValid
      ? theme.colors.colorTeal
      : theme.colors.colorRed};
`;

export const LoginTooltipList = styled.ul`
  color: ${({ theme }) => theme.colors.colorWhite};
  background-color: none;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const LoginTooltipItem = styled.li`
  display: flex;
  gap: 8px;
  margin: 8px 0;
`;

export const EmailTooltipList = styled.ul`
  color: ${theme.colors.colorWhite};
  background-color: none;
  list-style-type: none;
  margin: 0;
  padding: 0;
  }
`;

export const EmailTooltipItem = styled.li`
  display: flex;
  gap: 8px;
  margin: 8px 8px;
`;

export const PasswordTooltipList = styled.ul`
  color: ${theme.colors.colorWhite};
  background-color: none;
  list-style-type: none;
  margin: 0;
  padding: 0;
  }
`;

export const PasswordTooltipItem = styled.li`
  display: flex;
  gap: 8px;
  margin: 8px 8px;
`;

export const TogPasButLoginForm = styled.button`
  position: absolute;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  right: 10px;
  top: 42px;
`;



export const Hint = styled.p`
  font-size: 6px;
`;