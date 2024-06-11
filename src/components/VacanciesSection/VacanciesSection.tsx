import { useEffect, useState } from 'react';

import { LinkButton } from '../Button/Button';
import { VacanciesList } from '../VacanciesList/VacanciesList';

import { ContainerStyled, Title } from './VacanciesSection.styled';
import { routes } from '@/routes';
import { IVacancy } from '@/types';

interface VacanciesSectionProps {
  top?: boolean;
}

export const VacanciesSection = ({ top }: VacanciesSectionProps) => {
  return (
    <ContainerStyled>
      <Title>Наші вакансії</Title>
      <VacanciesList top={top} />
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
