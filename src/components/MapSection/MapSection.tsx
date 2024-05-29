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
      <MapWrap>
        {isMobile && (
          <MapImage
            src={map_m}
            alt="map"
          />
        )}
        {isTablet && (
          <MapImage
            src={map_t}
            alt="map"
          />
        )}
        {isDesktop && (
          <MapImage
            src={map_d}
            alt="map"
          />
        )}
        {isMobile && (
          <ParrotImage
            src={parrot_m}
            alt="parrot"
          />
        )}
        {isTablet && (
          <ParrotImage
            src={parrot_t}
            alt="parrot"
          />
        )}
        {isDesktop && (
          <ParrotImage
            src={parrot_d}
            alt="parrot"
          />
        )}
      </MapWrap>
    </Container>
  );
};
