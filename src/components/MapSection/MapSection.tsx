import Container from '../Container';

import { MapImage, MapWrap, ParrotImage } from './MapSection.styled';
import map_d from '@/assets/images/map_d.png';
import map_m from '@/assets/images/map_m.png';
import map_t from '@/assets/images/map_t.png';
import parrot_d from '@/assets/images/parrot_d.png';
import parrot_m from '@/assets/images/parrot_m.png';
import parrot_t from '@/assets/images/parrot_t.png';
import { responsive } from '@/helpers/responsive';

export const MapSection = () => {
  const { isMobile, isTablet, isDesktop } = responsive();

  return (
    <Container>
      <p>Map section</p>
    </Container>
  );
};
