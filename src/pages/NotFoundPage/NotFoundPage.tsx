import { ContainerStyled, NotFoundImg, Text } from './NotFoundPage.styled';
import notFound from '@/assets/images/404.png';
import Button from '@/components/Button/Button';

const NotFoundPage = () => {
  return (
    <ContainerStyled>
      <Text>Упсс... Ваша мрія про роботу в Чехії ще не знайдена!</Text>
      <NotFoundImg
        src={notFound}
        alt="404"
      />
      <Button
        yellow
        margin="0 auto"
      >
        На головну
      </Button>
    </ContainerStyled>
  );
};

export default NotFoundPage;
