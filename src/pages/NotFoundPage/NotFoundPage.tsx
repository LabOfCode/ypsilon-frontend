import { ContainerStyled, NotFoundImg, Text } from './NotFoundPage.styled';
import notFound from '@/assets/images/404.png';
import { LinkButton } from '@/components/Button/Button';

const NotFoundPage = () => {
  return (
    <ContainerStyled>
      <Text>Упсс... Ваша робота мрії в Чехії знаходиться на іншій сторінці!</Text>
      <NotFoundImg
        src={notFound}
        alt="404"
      />
      <LinkButton
        to="/"
        $yellow
        margin="0 auto"
      >
        На головну
      </LinkButton>
    </ContainerStyled>
  );
};

export default NotFoundPage;
