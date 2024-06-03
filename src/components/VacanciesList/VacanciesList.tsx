import { VacancyItem } from '../VacancyItem/VacancyItem';

import { List } from './VacanciesList.styled';

export interface VacanciesProps {
  id: string;
  title: string;
  place: string;
  price: number;
  img: string;
  isActive: boolean;
}

const vacancies: VacanciesProps[] = [
  {
    id: 'dfsvdvdvdv',
    title: 'Ливарник, плавильник металу',
    place: 'Місцезнаходженння',
    price: 120,
    img: '@/assets/images/forge_worker.jpg',
    isActive: false,
  },
];

export const VacanciesList = () => {
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
