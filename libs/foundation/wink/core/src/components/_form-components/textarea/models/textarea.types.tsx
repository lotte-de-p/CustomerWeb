export const AUTOCOMPLETE_OPTIONS = {
  on: 'on',
  off: 'off',
} as const;
export type AutocompleteOptions = (typeof AUTOCOMPLETE_OPTIONS)[keyof typeof AUTOCOMPLETE_OPTIONS];
