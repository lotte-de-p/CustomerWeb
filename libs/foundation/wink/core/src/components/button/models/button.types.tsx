import { SIZES } from '../../../models/sizes.types';

export const BUTTON_APPEARANCES = {
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary',
} as const;
export type ButtonAppearance = (typeof BUTTON_APPEARANCES)[keyof typeof BUTTON_APPEARANCES];

export const TYPES = {
  button: 'button',
  submit: 'submit',
  reset: 'reset',
  file: 'file',
} as const;
export type ButtonType = (typeof TYPES)[keyof typeof TYPES];

export const BUTTON_ELEMENTS = {
  button: 'button',
  input: 'input',
  a: 'a',
} as const;
export type ButtonElement = (typeof BUTTON_ELEMENTS)[keyof typeof BUTTON_ELEMENTS];

export const BUTTON_SIZES = {
  md: SIZES.md,
  sm: SIZES.sm,
} as const;
export type ButtonSize = (typeof BUTTON_SIZES)[keyof typeof BUTTON_SIZES];

export const BUTTON_WIDTHS = {
  none: 'none',
  full: SIZES.full,
} as const;
export type ButtonWidth = (typeof BUTTON_WIDTHS)[keyof typeof BUTTON_WIDTHS];

export const BUTTON_STATUSES = {
  none: 'none',
  disable: 'disable',
  loading: 'loading',
  skeleton: 'skeleton',
} as const;
export type ButtonState = (typeof BUTTON_STATUSES)[keyof typeof BUTTON_STATUSES];

export const BUTTON_ICON_POSITIONS = {
  left: 'left',
  right: 'right',
} as const;
export type ButtonIconPosition = (typeof BUTTON_ICON_POSITIONS)[keyof typeof BUTTON_ICON_POSITIONS];
