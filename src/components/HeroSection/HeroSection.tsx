import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import { Button } from '../Button/Button';
import { LinkButton } from '../Button/Button';
import Container from '../Container';

import {
  FlexStyled,
  HeroContent,
  HeroText,
  HeroTitle,
  HeroWrapper,
  SlideImage,
} from './HeroSection.styled';
import slide1 from '@/assets/images/employment_0 2.jpg';
import slide2 from '@/assets/images/employment_0-2 2.jpg';
import slide3 from '@/assets/images/employment_1-2 2.jpg';
import slide4 from '@/assets/images/employment_1-3.jpg';
import slide5 from '@/assets/images/employment_2 2.jpg';
import slide6 from '@/assets/images/employment_2-2 2.jpg';
import slide7 from '@/assets/images/employment_2-3 11.jpg';
import slide8 from '@/assets/images/employment_2-4 1.jpg';
import slide9 from '@/assets/images/employment_3-2 1.jpg';

export const HeroSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: 'linear',
    arrows: false,
    responsive: [
      {
        breakpoint: 743,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <HeroWrapper>
      <Slider {...settings}>
        <SlideImage bgImage={slide1} />
        <SlideImage bgImage={slide2} />
        <SlideImage bgImage={slide3} />
        <SlideImage bgImage={slide4} />
        <SlideImage bgImage={slide5} />
        <SlideImage bgImage={slide6} />
        <SlideImage bgImage={slide7} />
        <SlideImage bgImage={slide8} />
        <SlideImage bgImage={slide9} />
      </Slider>
      <Container>
        <HeroContent>
          <HeroTitle>Агенція з працевлаштування в Чехії</HeroTitle>
          <HeroText>
            Робота в Чехії. Ypsylon - компанія, яка надає повний супровід та підбір вакансій
          </HeroText>
          <FlexStyled>
            <Button
              $teal
              to=""
            >
              Залишити заявку
            </Button>
            <LinkButton
              $yellow
              to=""
            >
              Підібрати вакансію
            </LinkButton>
          </FlexStyled>
        </HeroContent>
      </Container>
    </HeroWrapper>
  );
};
