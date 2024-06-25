import { Helmet } from 'react-helmet';
import LogInForm from '@/components/Forms/LogInForm';
import { ContainerStyled, IconContainer, StyledParrotIconLeft, StyledParrotIconRight } from './LogInPage.styled';
import parrotIconLeft from '@/assets/images/parrot_4.png';
import parrotIconRight from '@/assets/images/parrot_4.png';

export default function LogInPage() {
  return (
    <ContainerStyled>
      <Helmet>
        <title>Увійти</title>
        <meta name="login" content="Login to your account" />
      </Helmet>
      <LogInForm />
      <IconContainer>
        <StyledParrotIconLeft src={parrotIconLeft} alt="Parrot Icon" />
        <StyledParrotIconRight src={parrotIconRight} alt="Parrot Icon" />
      </IconContainer>
    </ContainerStyled>
  );
}

