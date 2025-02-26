import { useTranslation } from 'react-i18next';
import {
  ContactContainter,
  ContainerStyled,
  MapImage,
  TextContainer,
  Wrapper,
} from './MapOnMain.styles';
import map from '@/assets/images/mapToMain.png';

export const MapOnMain = () => {
    const { t } = useTranslation();
  return (
    <Wrapper>
      <ContainerStyled>
        <MapImage
          src={map}
          alt="Map"
        />
        <TextContainer>
          <h3>{ t('doIt')}</h3>
          <p>{ t('help')}</p>
        </TextContainer>
        <ContactContainter>
          <h4>Czech Republic</h4>
          <p>Email: info@ypsilonwork.cz</p>
          <p>Tel: +420 773 255 059</p>
        </ContactContainter>
      </ContainerStyled>
    </Wrapper>
  );
};
