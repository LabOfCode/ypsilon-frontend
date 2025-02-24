import { useTranslation } from 'react-i18next';



import Container from '../Container';



import { Title, Wrapper } from './PartnersReviews.styled';
import ReviewsSlider from './ReviewsSlider/ReviewsSlider';


const PartnersReviews = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Container>
        <Title>{ t('partnersReviews')}</Title>
        <ReviewsSlider />
      </Container>
    </Wrapper>
  );
};

export default PartnersReviews;