import { useState } from 'react';

import { Button } from '../Button/Button';

import {
  ButtonWrap,
  CardWrap,
  DescWrap,
  HeartActiveIcon,
  HeartIcon,
  ItemWrap,
  LocationText,
  PriceText,
  SvgIcon,
  Title,
} from './VacancyItem.styled';
import { IVacancy } from '@/types';

interface VacancyItemProps {
  vacancy: IVacancy;
}

export const VacancyItem = ({ vacancy }: VacancyItemProps) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const { title, place, price, img } = vacancy;

  return (
    <CardWrap>
      <img
        src={img}
        alt={title}
      />
      <DescWrap>
        <Title>{title}</Title>

        <ItemWrap>
          <SvgIcon>
            <use href="#svg_sprite_map-pin"></use>
          </SvgIcon>
          <LocationText>{place}</LocationText>
        </ItemWrap>
        <ItemWrap>
          <SvgIcon>
            <use href="#svg_sprite_grommet-icons_money"></use>
          </SvgIcon>
          <PriceText>{`${price} крон/год`}</PriceText>
        </ItemWrap>
        <ButtonWrap>
          <Button $teal>Залишити заявку</Button>
          {isFavorite ? (
            <HeartActiveIcon>
              <use href="#svg_sprite_heart"></use>
            </HeartActiveIcon>
          ) : (
            <HeartIcon>
              <use href="#svg_sprite_heart"></use>
            </HeartIcon>
          )}
        </ButtonWrap>
      </DescWrap>
    </CardWrap>
  );
};
