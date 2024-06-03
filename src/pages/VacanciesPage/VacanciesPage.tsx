import { MapSection } from '@/components/MapSection/MapSection';
import { VacanciesSection } from '@/components/VacanciesSection/VacanciesSection';
import { VacancyNotFound } from '@/components/VacancyNotFound/VacancyNotFound';

const VacanciesPage = () => {
  return (
    <div>
      <VacancyNotFound />
      <VacanciesSection />
      <MapSection />
    </div>
  );
};

export default VacanciesPage;
