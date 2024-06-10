import { Helmet } from 'react-helmet';
import { SignupForm } from '@/components/Forms/SignupForm';
import { ContainerStyled } from './SignUpPage.styled';

export default function SignUpPage(){
  return (
    <ContainerStyled>
      <Helmet>
        <title>Зареєструватись</title>
      </Helmet>
      <SignupForm />
    </ContainerStyled>
  );
}
