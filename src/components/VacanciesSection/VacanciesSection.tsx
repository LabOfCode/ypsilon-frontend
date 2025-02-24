import { useTranslation } from 'react-i18next';



import { LinkButton } from '../Button/Button';
import { VacanciesList } from '../VacanciesList/VacanciesList';



import { ContainerStyled, Title } from './VacanciesSection.styled';
import { routes } from '@/routes';


interface VacanciesSectionProps {
  top?: boolean;
}

export const VacanciesSection = ({ top }: VacanciesSectionProps) => {
  const { t } = useTranslation();
  return (
    <ContainerStyled>
      <Title>{t('ourVacancy')}</Title>
      <VacanciesList top={top} />
      {top && (
        <LinkButton
          $yellow
          to={routes.VACANCIES}
          margin="0 auto"
        >
          { t('lookAll')}
        </LinkButton>
      )}
    </ContainerStyled>
  );
};