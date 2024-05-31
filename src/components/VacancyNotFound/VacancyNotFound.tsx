import { ContainerStyled, ImgWtap, LineImg, ParrotImg, Text } from './VacancyNotFound.styled';
import line from '@/assets/images/line.png';
import parrot_2 from '@/assets/images/parrot_2.png';

export const VacancyNotFound = () => {
  return (
    <ContainerStyled>
      <Text>
        Вибачте, але по вашому пошуку нічого не знайдено. Не хвилюйтесь, у нас є багато інших
        чудових вакансій в Чехії. Просто введіть свої критерії пошуку ще раз, і ми допоможемо вам
        знайти ідеальну роботу!
      </Text>
      <ImgWtap>
        <LineImg
          src={line}
          alt="line"
        />
        <ParrotImg
          src={parrot_2}
          alt="parrot"
        />
      </ImgWtap>
    </ContainerStyled>
  );
};
