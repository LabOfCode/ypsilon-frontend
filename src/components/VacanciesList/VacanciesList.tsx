import { useEffect, useState } from 'react';

import { Spiner } from '../Spiner/Spiner';
import { VacancyItem } from '../VacancyItem/VacancyItem';

import { List } from './VacanciesList.styled';
import { useGetTopVacanciesQuery, useGetVacanciesQuery } from '@/redux/services/vacancies';
import { IVacancy } from '@/types';

interface VacanciesListProps {
  top?: boolean;
}

export interface IVacancyLocal extends IVacancy {
  isFavorite?: boolean;
}

export const VacanciesList = ({ top }: VacanciesListProps) => {
  const [vacancies, setVacancies] = useState<IVacancyLocal[]>([]);

  const { data: topData, isFetching: isTopFetching } = useGetTopVacanciesQuery('');
  const { data: allData, isFetching: isAllFetching } = useGetVacanciesQuery('');

  useEffect(() => {
    let localVacancies: IVacancyLocal[] = [];
    if (top && topData) {
      localVacancies = topData?.vacancies.map(item => ({ ...item, isFavorite: false }));
    } else if (!top && allData) {
      localVacancies = allData?.vacancies.map(item => ({ ...item, isFavorite: false }));
    }
    if (localVacancies.length > 0) {
      setVacancies(localVacancies);
    }
  }, [top, topData, allData]);

  useEffect(() => {
    if (!localStorage.getItem('favorites')) {
      localStorage.setItem('favorites', JSON.stringify([]));
    }
    const favoriteVacancies = vacancies.filter(vacancy => vacancy.isFavorite);
    localStorage.setItem('favorites', JSON.stringify(favoriteVacancies));
  }, [vacancies]);

  const toggleFavorite = (id: string) => {
    setVacancies(prevVacancies => {
      const updatedVacancies = prevVacancies.map(item =>
        item._id === id ? { ...item, isFavorite: !item.isFavorite } : item
      );
      return updatedVacancies;
    });
  };

  return (
    <List>
      {vacancies.map((item: IVacancy) => (
        <VacancyItem
          key={item._id}
          vacancy={item}
          onToggleFavorite={toggleFavorite}
        />
      ))}
      <Spiner
        loading={top ? isTopFetching : isAllFetching}
        size={100}
      />
    </List>
  );
};
