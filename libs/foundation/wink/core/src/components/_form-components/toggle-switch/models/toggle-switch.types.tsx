export const TOGGLE_ALIGNMENT = {
  nextTo: 'nextToEachOther',
  spaceBetween: 'spaceBetween',
} as const;

export type toggleAlignment = (typeof TOGGLE_ALIGNMENT)[keyof typeof TOGGLE_ALIGNMENT];
