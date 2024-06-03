import { Button } from '../Button/Button';
import { VacanciesProps } from '../VacanciesList/VacanciesList';

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
import forge_worker from '@/assets/images/forge_worker.jpg';

interface VacancyItemProps {
  vacancy: VacanciesProps;
}

export const VacancyItem = ({ vacancy }: VacancyItemProps) => {
  const { title, place, price, img, isActive } = vacancy;

  return (
    <>
      <CardWrap>
        <img
          src={forge_worker}
          alt="forge worker"
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
            {isActive ? (
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
      <CardWrap>
        <img
          src={forge_worker}
          alt="forge worker"
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
            {isActive ? (
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
    </>
  );
};
