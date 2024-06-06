import { Spiner } from '../Spiner/Spiner';
import { VacancyItem } from '../VacancyItem/VacancyItem';

import { List } from './VacanciesList.styled';
import { useGetVacanciesQuery } from '@/redux/services/vacancies';
import { IVacancy } from '@/types';

export const VacanciesList = () => {
  const { data, isFetching } = useGetVacanciesQuery('');

  return (
    <List>
      {data?.vacancies.map((item: IVacancy) => (
        <VacancyItem
          key={item._id}
          vacancy={item}
        />
      ))}
      <Spiner
        loading={isFetching}
        size={100}
      />
    </List>
  );
};
