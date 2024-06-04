import { MapSection } from '@/components/MapSection/MapSection';
import { VacancyNotFound } from '@/components/VacancyNotFound/VacancyNotFound';

const VacanciesPage = () => {
  return (
    <div>
      <VacancyNotFound />
      <MapSection />
    </div>
  );
};

export default VacanciesPage;
