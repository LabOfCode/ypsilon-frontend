import { LinkButton } from '../Button/Button';
import { VacanciesList } from '../VacanciesList/VacanciesList';

import { ContainerStyled, Title } from './VacanciesSection.styled';
import { routes } from '@/routes';

export const VacanciesSection = () => {
  return (
    <ContainerStyled>
      <Title>Наші вакансії</Title>
      <VacanciesList />
      <LinkButton
        $yellow
        to={routes.VACANCIES}
        margin="0 auto"
      >
        Подивитись всі
      </LinkButton>{' '}
    </ContainerStyled>
  );
};
