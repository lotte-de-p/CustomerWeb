export const COLORS = {
  default: 'default',
  subtle: 'subtle',
  subtlest: 'subtlest',
  inverse: 'inverse',
  promo: 'promo',
} as const;
export type Colors = (typeof COLORS)[keyof typeof COLORS];
