import Container from '../Container';

import { Title, Wrapper } from './PartnersReviews.styled';
import ReviewsSlider from './ReviewsSlider/ReviewsSlider';

const PartnersReviews = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Відгуки наших партнерів</Title>
        <ReviewsSlider />
      </Container>
    </Wrapper>
  );
};

export default PartnersReviews;
