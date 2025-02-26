import {
  ContactContainter,
  ContainerStyled,
  MapImage,
  TextContainer,
  Wrapper,
} from './MapOnMain.styles';
import map from '@/assets/images/mapToMain.png';

export const MapOnMain = () => {
  return (
    <Wrapper>
      <ContainerStyled>
        <MapImage
          src={map}
          alt="Map"
        />
        <TextContainer>
          <h3>Зроби це з нами</h3>
          <p>Ми допоможемо з усіма процесами оформленням документів та контракту</p>
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
