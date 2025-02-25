import { Button } from '../Button/Button';
import { IVacancyLocal } from '../VacanciesList/VacanciesList';

import {
  ButtonWrap,
  CardWrap,
  DescWrap,
  HeartActiveIcon,
  HeartIcon,
  ItemWrap,
  LocationText,
  MainImage,
  PriceText,
  SvgIcon,
  Title,
  TopImg,
} from './VacancyItem.styled';
import topVacancy from '@/assets/images/label_top.png';

interface VacancyItemProps {
  vacancy: IVacancyLocal;
  onToggleFavorite: (id: string) => void;
}

export const VacancyItem = ({ vacancy, onToggleFavorite }: VacancyItemProps) => {
  const { _id, title, place, price, img, isTop } = vacancy;

  return (
    <CardWrap>
      <MainImage
        src={img}
        alt={title}
      />
      {isTop && (
        <TopImg
          src={topVacancy}
          alt="top vacancy"
        />
      )}
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
          <PriceText>{price}</PriceText>
        </ItemWrap>
        <ButtonWrap>
          <Button $tealForCard>Залишити заявку</Button>
          <button onClick={() => onToggleFavorite(_id)}>
            {vacancy.isFavorite ? (
              <HeartActiveIcon>
                <use href="#svg_sprite_heart"></use>
              </HeartActiveIcon>
            ) : (
              <HeartIcon>
                <use href="#svg_sprite_heart"></use>
              </HeartIcon>
            )}
          </button>
        </ButtonWrap>
      </DescWrap>
    </CardWrap>
  );
};
