import { SIZES } from '../../../../models/sizes.types';

export const INPUT_APPEARANCES = {
  default: 'default',
  search: 'search',
} as const;

export type InputAppearance = (typeof INPUT_APPEARANCES)[keyof typeof INPUT_APPEARANCES];

export const INPUT_SIZES = {
  sm: SIZES.sm,
  md: SIZES.md,
} as const;
export type InputSize = (typeof INPUT_SIZES)[keyof typeof INPUT_SIZES];

export const INPUT_TYPES = {
  text: 'text',
  password: 'password',
  number: 'number',
  tel: 'tel',
  url: 'url',
  date: 'date',
  time: 'time',
  email: 'email',
  hidden: 'hidden',
} as const;
export type InputType = (typeof INPUT_TYPES)[keyof typeof INPUT_TYPES];

export const INPUT_AUTOCOMPLETES = {
  on: 'on',
  off: 'off',
  name: 'name',
  address: 'address',
  email: 'email',
  username: 'username',
  newPassword: 'new-password',
  currentPassword: 'current-password',
} as const;
export type InputAutocomplete = (typeof INPUT_AUTOCOMPLETES)[keyof typeof INPUT_AUTOCOMPLETES];

export const INPUT_MODES = {
  none: 'none',
  text: 'text',
  numeric: 'numeric',
  decimal: 'decimal',
  tel: 'tel',
  email: 'email',
  search: 'search',
  url: 'url',
} as const;
export type InputMode = (typeof INPUT_MODES)[keyof typeof INPUT_MODES];

export const INPUT_ENTERKEYHINTS = {
  none: 'none',
  enter: 'enter',
  done: 'done',
  go: 'go',
  next: 'next',
  previous: 'previous',
  search: 'search',
  send: 'send',
} as const;
export type InputEnterkeyhint = (typeof INPUT_ENTERKEYHINTS)[keyof typeof INPUT_ENTERKEYHINTS];
