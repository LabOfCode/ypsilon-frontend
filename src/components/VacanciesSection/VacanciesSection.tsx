import { LinkButton } from '../Button/Button';
import { VacanciesList } from '../VacanciesList/VacanciesList';

import { ContainerStyled, Title } from './VacanciesSection.styled';
import { routes } from '@/routes';

interface VacanciesSectionProps {
  top?: boolean;
}

export const VacanciesSection = ({ top }: VacanciesSectionProps) => {
  return (
    <ContainerStyled>
      <Title>Наші вакансії</Title>
      <VacanciesList />
      {top && (
        <LinkButton
          $yellow
          to={routes.VACANCIES}
          margin="0 auto"
        >
          Подивитись всі
        </LinkButton>
      )}
    </ContainerStyled>
  );
};
