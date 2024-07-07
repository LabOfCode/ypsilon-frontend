import { useState } from 'react';
import { Helmet } from 'react-helmet';
import LogInForm from '@/components/Forms/LogInForm';
import PasswordRecoveryForm from '@/components/Forms/PasswordRecoveryForm';
import { ContainerStyled, IconsContainer, StyledParrotIconLeft, StyledParrotIconRight } from './LogInPage.styled';
import Container from '@/components/Container';
import parrotIconLeft from '@/assets/images/parrot_4.png';
import parrotIconRight from '@/assets/images/parrot_4.png';

export default function LogInPage() {
  const [showRecoveryForm, setShowRecoveryForm] = useState(false);

  const handleRecoveryClick = () => {
    setShowRecoveryForm(true);
  };

  return (
    <ContainerStyled>
      <Container>
        <Helmet>
          <title>Увійти</title>
          <meta name="login" content="Login to your account" />
        </Helmet>
        {showRecoveryForm ? (
          <PasswordRecoveryForm />
        ) : (
          <LogInForm onRecoveryClick={handleRecoveryClick} />
        )}
        <IconsContainer>
          <StyledParrotIconLeft src={parrotIconLeft} alt="Parrot Icon Left" />
          <StyledParrotIconRight src={parrotIconRight} alt="Parrot Icon Right" />
        </IconsContainer>
      </Container>
    </ContainerStyled>
  );
}
