export interface SlideConfigInterface {
  infinite: boolean;
  initialSlide: number;
  mobileFirst: boolean;
  arrows: boolean;
  nextArrow: string;
  prevArrow: string;
  slidesToScroll: number;
  slidesToShow: number;
  variableWidth: boolean;
  responsive?: Responsive[];
}

interface Responsive {
  breakpoint: number;
  settings: Settings;
}

interface Settings {
  slidesToScroll: number;
  slidesToShow: number;
  infinite?: boolean;
  dots?: boolean;
}
