import { Helmet } from 'react-helmet';
import { SignupForm } from '@/components/Forms/SignupForm';
import { ContainerStyled, StyledParrotIcon } from './SignUpPage.styled';
import parrotIcon from '@/assets/images/parrot_5.png';

export default function SignUpPage(){
  return (
    <ContainerStyled>
      <Helmet>
        <title>Зареєструватись</title>
      </Helmet>
      <SignupForm />
      <StyledParrotIcon src={parrotIcon} alt="Parrot Icon" />
    </ContainerStyled>
  );
}
