import { Helmet } from 'react-helmet';
import { SignupForm } from '@/components/Forms/SignupForm';
import { ContainerStyled, ContentWrapper, StyledParrotIcon, IconContainer } from './SignUpPage.styled';
import parrotIcon from '@/assets/images/parrot_5.png';
import Container from '@/components/Container';

export default function SignUpPage() {
  return (
    <ContainerStyled>
      <Container>
        <Helmet>
          <title>Зареєструватись</title>
        </Helmet>
        <ContentWrapper>
          <SignupForm />
        </ContentWrapper>
        <IconContainer>
          <StyledParrotIcon src={parrotIcon} alt="Parrot Icon" />
        </IconContainer>
      </Container>
    </ContainerStyled>
  );
}
