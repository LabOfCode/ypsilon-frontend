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
    const storedFavorites = JSON.parse(
      localStorage.getItem('favorites') || '[]'
    ) as IVacancyLocal[];
    setVacancies(storedFavorites);
  }, []);

  useEffect(() => {
    if ((top && topData) || (!top && allData)) {
      const apiVacancies = top ? topData.vacancies : allData.vacancies;
      const storedFavorites = JSON.parse(
        localStorage.getItem('favorites') || '[]'
      ) as IVacancyLocal[];

      const localVacancies = apiVacancies.map(item => {
        const favoriteItem = storedFavorites.find(fav => fav._id === item._id);
        return { ...item, isFavorite: favoriteItem ? favoriteItem.isFavorite : false };
      });

      setVacancies(localVacancies);
    }
  }, [top, topData, allData]);

  useEffect(() => {
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
