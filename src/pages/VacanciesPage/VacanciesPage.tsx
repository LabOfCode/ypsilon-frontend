import { MapSection } from '@/components/MapSection/MapSection';
import { VacanciesSection } from '@/components/VacanciesSection/VacanciesSection';
import { VacancyNotFound } from '@/components/VacancyNotFound/VacancyNotFound';
import { useGetVacanciesQuery } from '@/redux/services/vacancies';

const VacanciesPage = () => {
  const { data, isFetching } = useGetVacanciesQuery('');

  return (
    <div>
      {data?.total !== 0 ? <VacanciesSection /> : <VacancyNotFound />}
      <MapSection />
    </div>
  );
};

export default VacanciesPage;
