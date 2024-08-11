import React, { ReactNode} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import {
  ContainerStyled,
   HeroWrapper,
  SlideImage,
} from './HeroSection.styled';
import { slidesDesktop, slidesMobile, slidesTablet } from './HeroSectionImages';
import { responsive } from '@/helpers/responsive';


interface HeroSectionProps {
  children: ReactNode;
}
export const HeroSection:React.FC<HeroSectionProps> = ({children}) => {
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
      <ContainerStyled>
        {children}
      </ContainerStyled>
    </HeroWrapper>
  );
};
