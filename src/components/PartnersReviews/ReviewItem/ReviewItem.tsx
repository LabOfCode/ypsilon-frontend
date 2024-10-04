import { Company, Logo, StarsBlock, Text, Wrapper } from './ReviewItem.styled';
import { SvgStar } from '@/assets/icons/icons';

interface ReviewProps {
  review: string;
  logo: string;
  company: string;
  count: number;
}

const ReviewItem = (props: ReviewProps) => {
  const { review, logo, company, count } = props;

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const fill = i <= count ? '#FCC50D' : '#B7B7B7';
      stars.push(
        <SvgStar
          key={i}
          style={{ fill }}
        />
      );
    }
    return stars;
  };

  return (
    <Wrapper>
      <StarsBlock>{renderStars()}</StarsBlock>
      <Text>{review}</Text>
      <Logo
        src={logo}
        alt={`${company} logo`}
      />
      <Company>{company}</Company>
    </Wrapper>
  );
};

export default ReviewItem;
