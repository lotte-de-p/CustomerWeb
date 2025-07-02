import { SlideConfigInterface } from '../interfaces';

export const DefaultDateSlideConfig: SlideConfigInterface = {
  infinite: false,
  initialSlide: 0,
  mobileFirst: true,
  arrows: true,
  nextArrow: '<div class="cards-slider-button arrow arrow--right slick-arrow" aria-disabled="false"></div>',
  prevArrow: '<div class="cards-slider-button arrow arrow--left slick-arrow" aria-disabled="false"></div>',
  slidesToScroll: 1,
  slidesToShow: 1,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToScroll: 6,
        slidesToShow: 6,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToScroll: 3,
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToScroll: 2,
        slidesToShow: 2,
      },
    },
  ],
};
