import { POSITIONS_HORIZONTAL } from '../../../models/positions.types';

export const PRICING_TYPES = {
  text: 'text',
  patch: 'patch',
  subtle: 'subtle text',
} as const;
export type PricingType = (typeof PRICING_TYPES)[keyof typeof PRICING_TYPES];

export const LANGUAGES = {
  nl: 'NL',
  fr: 'FR',
  en: 'EN',
} as const;
export type Language = (typeof LANGUAGES)[keyof typeof LANGUAGES];

export const PRICING_ALIGN = {
  left: POSITIONS_HORIZONTAL.left,
  center: POSITIONS_HORIZONTAL.center,
  right: POSITIONS_HORIZONTAL.right,
} as const;
export type PricingAlign = (typeof PRICING_ALIGN)[keyof typeof PRICING_ALIGN];
