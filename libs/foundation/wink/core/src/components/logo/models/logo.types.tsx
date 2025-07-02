import { logos } from '../data/logo.data';

export const LogoVariantsArray = Object.keys(logos);
export type logoVariant = (typeof LogoVariantsArray)[number];

export const LOGO_CATEGORIES = {
  telenet: 'telenet',
  base: 'base',
  entPlay: 'entertainment-play',
  entStream: 'entertainment-streaming',
} as const;
export type LogoCategories = (typeof LOGO_CATEGORIES)[keyof typeof LOGO_CATEGORIES];
