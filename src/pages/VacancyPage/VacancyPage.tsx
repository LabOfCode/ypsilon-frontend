import { useParams } from 'react-router-dom';

import { ContentWrapper, Image, VacancyWrapper } from './VacancyPage.styled';
import Container from '@/components/Container';
import { Spiner } from '@/components/Spiner/Spiner';
import { useGetVacancyByIdQuery } from '@/redux/services/vacancies';
import { IVacancy } from '@/types';

const VacancyPage = () => {
  const { id: vacancyId } = useParams();
  const { data: currentVacancy, isFetching } = useGetVacancyByIdQuery(vacancyId);

  return (
    <div>
      {currentVacancy && (
        <VacancyWrapper>
          <Container>
            <Image
              src={currentVacancy.img}
              alt={currentVacancy.title}
            />
            <ContentWrapper>
              <h1>{currentVacancy.title}</h1>
            </ContentWrapper>
          </Container>
        </VacancyWrapper>
      )}
      <Spiner
        loading={currentVacancy && isFetching}
        size={100}
      />
    </div>
  );
};

export default VacancyPage;
