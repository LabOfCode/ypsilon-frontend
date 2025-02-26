import { AboutUs } from '@/components/AboutUs/AboutUs';
import { HeroSection } from '@/components/HeroSection/HeroSection';
import { MapOnMain } from '@/components/MapOnMain/MapOnMain';
import PartnersReviews from '@/components/PartnersReviews/PartnersReviews';
import QuestionSection from '@/components/QuestionsSection/QuestionSection';
import { VacanciesSection } from '@/components/VacanciesSection/VacanciesSection';
import { useGetTopVacanciesQuery } from '@/redux/services/vacancies';

export default function MainPage() {
  const { data } = useGetTopVacanciesQuery('');

  return (
    <div>
      <HeroSection />
      <AboutUs />
      {data?.total !== 0 && <VacanciesSection top />}
      <PartnersReviews />
      <QuestionSection />
      <MapOnMain />
    </div>
  );
}
