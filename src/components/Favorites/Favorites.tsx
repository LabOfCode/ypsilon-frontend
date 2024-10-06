import { useEffect, useState } from 'react';
import { IVacancyLocal } from '../VacanciesList/VacanciesList';
import { List } from '../VacanciesList/VacanciesList.styled';
import { VacancyItem } from '../VacancyItem/VacancyItem';

export const Favorites = () => {
  const [favorites, setFavorites] = useState<IVacancyLocal[]>([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]') as IVacancyLocal[];
    setFavorites(storedFavorites);
  }, []);

  const removeFavorite = (id: string) => {
    const updatedFavorites = favorites.filter(fav => fav._id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <List>
      {favorites.map(item => (
        <VacancyItem
          key={item._id}
          vacancy={item}
          onToggleFavorite={removeFavorite}
        />
      ))}
    </List>
  );
};
