export const TITLE_SIZES = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
} as const;
export type TitleSize = (typeof TITLE_SIZES)[keyof typeof TITLE_SIZES];

export const TITLE_SPACINGS_Y = {
  default: 'default',
  top: 'top',
  bottom: 'bottom',
  none: 'none',
} as const;
export type TitleSpacingY = (typeof TITLE_SPACINGS_Y)[keyof typeof TITLE_SPACINGS_Y];
