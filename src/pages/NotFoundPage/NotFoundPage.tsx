import { ContainerStyled, Text } from './NotFoundPage.styled';
import notFound from '@/assets/images/404.png';
import Button from '@/components/Button/Button';

const NotFoundPage = () => {
  return (
    <ContainerStyled>
      <Text>Упсс... Ваша мрія про роботу в Чехії ще не знайдена!</Text>
      <img
        src={notFound}
        alt="404"
      />
      <Button yellow>На головну</Button>
    </ContainerStyled>
  );
};

export default NotFoundPage;
