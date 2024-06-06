import { VacancyItem } from '../VacancyItem/VacancyItem';

import { List } from './VacanciesList.styled';
import { useGetVacanciesQuery } from '@/redux/services/vacancies';
import { IVacancy } from '@/types';

export interface VacanciesProps {
  id: string;
  title: string;
  place: string;
  price: number;
  img: string;
  idFavorite: boolean;
}

const vacancies: VacanciesProps[] = [
  {
    id: 'dfsvdvdvdv',
    title: 'Ливарник, плавильник металу',
    place: 'Місцезнаходженння',
    price: 120,
    img: '@/assets/images/forge_worker.jpg',
    idFavorite: false,
  },
];

export const VacanciesList = () => {
  const data = useGetVacanciesQuery('');

  console.log('data :=>', data);

  return (
    <List>
      {vacancies.map((item: VacanciesProps) => (
        <VacancyItem
          key={item.id}
          vacancy={item}
        />
      ))}
    </List>
  );
};
