import { COLORS } from '../../../models/colors';

export const PARAGRAPH_APPEARANCES = {
  body: 'body',
  caption: 'caption',
} as const;
export type ParagraphAppearance = (typeof PARAGRAPH_APPEARANCES)[keyof typeof PARAGRAPH_APPEARANCES];

export const PARAGRAPH_SIZES = {
  regular: 'regular',
  small: 'small',
  large: 'large',
  bold: 'bold',
} as const;
export type ParagraphSize = (typeof PARAGRAPH_SIZES)[keyof typeof PARAGRAPH_SIZES];

export const PARAGRAPH_COLORS = {
  default: COLORS.default,
  subtle: COLORS.subtle,
  subtlest: COLORS.subtlest,
  inverse: COLORS.inverse,
} as const;
export type ParagraphColors = (typeof PARAGRAPH_COLORS)[keyof typeof PARAGRAPH_COLORS];
