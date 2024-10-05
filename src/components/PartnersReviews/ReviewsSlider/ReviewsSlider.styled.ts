import Slider from 'react-slick';
import styled from 'styled-components';

export const StyledSlider = styled(Slider)`
  .slick-slide {
    display: flex !important;
    justify-content: center !important;
  }

  .slick-prev,
  .slick-next {
    position:absolute;
    top:50%;
    transform:translateY(-50%);
    width: 32px;
    height: 32px;

    @media ${({ theme }) => theme.media.desktop} {
      width: 40px;
      height: 40px;
    }

    svg{
          width: 32px;
    height: 32px;

  @media ${({ theme }) => theme.media.desktop} {
      width: 40px;
      height: 40px;
    }    
    }
  }

  .slick-next:before,
  .slick-prev:before{
    display:none
  }

  .slick-next {
    right: -14px;

    @media ${({ theme }) => theme.media.tablet} {
      right: -26px;
    }

    @media ${({ theme }) => theme.media.desktop} {
      right: -52px;
    }
  }

  .slick-prev {
    left: -14px;

    @media ${({ theme }) => theme.media.tablet} {
      left: -26px;
    }

    @media ${({ theme }) => theme.media.desktop} {
      left: -52px;
    }
  }

  @media ${({ theme }) => theme.media.desktop} {
    width: 1200px;
    margin: 0 auto;
  }
`;
