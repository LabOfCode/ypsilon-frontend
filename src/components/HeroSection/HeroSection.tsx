import { HeroWrapper, HeroContent } from "./HeroSection.styled";
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
  };

    return (
        <HeroWrapper>
     
 <Slider {...settings}>
       <div>
            <img src={require('../../assets/images/employment_0 2.jpg')} alt="Slide 1" style={{ width: '100vw', height: '100vh', objectFit: 'cover' }} />
          </div>
          <div>
            <img src={require('../../assets/images/employment_0-2 2.jpg')} alt="Slide 2" style={{ width: '100vw', height: '100vh', objectFit: 'cover' }} />
          </div>
          <div>
            <img src={require('../../assets/images/employment_1-2 2.jpg')} alt="Slide 3" style={{ width: '100vw', height: '100vh', objectFit: 'cover' }} />
          </div>
      </Slider>
                <HeroContent>
                
                </HeroContent>        
       
       
        </HeroWrapper>
    )
}