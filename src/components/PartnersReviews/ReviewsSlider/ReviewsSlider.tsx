import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { data } from "../data";
import ReviewItem from "../ReviewItem/ReviewItem";
import { StyledSlider } from "./ReviewsSlider.styled";
import { SvgArrowLeft, SvgArrowRight } from "@/assets/icons/icons";

const ReviewsSlider = () => {
  const settings = {
    dots: false,
      arrows: true,
     nextArrow: <SvgArrowRight />,
    prevArrow: <SvgArrowLeft/>,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
      touchThreshold: 45,
    class:'slider',
        responsive: [
      {
        breakpoint: 1439,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 743,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (

      <StyledSlider {...settings}>
         {data.map(({ id, review, logo, company, count }) => (<ReviewItem key={id} count={count} review={review} logo={logo} company={company} />))}
      </StyledSlider>

  );
};

export default ReviewsSlider;
