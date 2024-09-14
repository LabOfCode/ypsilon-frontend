import { AboutUs } from '@/components/AboutUs/AboutUs';
import { VacanciesSection } from '@/components/VacanciesSection/VacanciesSection';
import { useGetTopVacanciesQuery } from '@/redux/services/vacancies';
import { HeroSection } from '@/components/HeroSection/HeroSection';
import PartnersReviews from '@/components/PartnersReviews/PartnersReviews';
export default function MainPage() {
  const { data, isFetching } = useGetTopVacanciesQuery('');

  return (
    <div>
      <HeroSection/>
      <AboutUs />
      {data?.total !== 0 && <VacanciesSection top />}
      <PartnersReviews/>
    </div>
  );
}
