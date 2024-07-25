import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import { Button } from '../Button/Button';
import { LinkButton } from '../Button/Button';
import Container from '../Container';
import Flex from '../Flex/Flex';

import { HeroContent, HeroText, HeroTitle, HeroWrapper, SlideImage } from './HeroSection.styled';
import { slidesDesktop, slidesMobile, slidesTablet } from './HeroSectionImages';
import { responsive } from '@/helpers/responsive';

export const HeroSection = () => {
  const { isMobile, isTablet, isDesktop } = responsive();

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
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

  const getSlides = () => {
    if (isMobile) {
      return slidesMobile;
    } else if (isTablet) {
      return slidesTablet;
    } else if (isDesktop) {
      return slidesDesktop;
    }
    return [];
  };

  const slides = getSlides();

  return (
    <HeroWrapper>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <SlideImage
            key={index}
            bgImage={slide}
          />
        ))}
      </Slider>
      <Container>
        <HeroContent>
          <HeroTitle>Агенція з працевлаштування в Чехії</HeroTitle>
          <HeroText>
            Робота в Чехії. Ypsylon - компанія, яка надає повний супровід та підбір вакансій
          </HeroText>
          <Flex
            flex-wrap="nowrap"
            align-items={isMobile || isTablet ? 'stretch' : 'flex-start'}
            gap={isMobile ? '15px' : isTablet ? '20px' : '24px'}
          >
            <Button
              width={isMobile ? '148px' : '322px'}
              fontSize={isMobile ? '14px' : '24px'}
              $teal
              to=""
            >
              Залишити заявку
            </Button>
            <LinkButton
              $yellow
              to="/vacancies"
            >
              Підібрати вакансію
            </LinkButton>
          </Flex>
        </HeroContent>
      </Container>
    </HeroWrapper>
  );
};
