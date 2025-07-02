export const SIZES = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
  '3xs': '3xs',
  '2xs': '2xs',
  xs: 'xs',
  s: 's',
  m: 'm',
  l: 'l',
  none: 'none',
  full: 'full',
};
export type Size = (typeof SIZES)[keyof typeof SIZES];

export const WIDTHS = {};
export type Width = (typeof WIDTHS)[keyof typeof WIDTHS];
