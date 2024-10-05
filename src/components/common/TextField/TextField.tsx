import { StyledTextField } from './TextField.styled';

interface TextFieldProps {
  name?: string;
  placeholder: string;
  value?: string | string[];
  error?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  as?: 'input' | 'textarea';
  rows?: number;
}

const TextField = (props: TextFieldProps) => {
  const { name, placeholder, value, onChange, error, as = 'input', rows = 40 } = props;

  return (
    <StyledTextField
      name={name}
      error={error}
      id={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      as={as}
      rows={as === 'textarea' ? rows : undefined}
    />
  );
};

export default TextField;
