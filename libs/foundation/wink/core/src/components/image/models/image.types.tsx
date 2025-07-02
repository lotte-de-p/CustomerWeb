export const LOADING_TYPES = {
  lazy: 'lazy',
  eager: 'eager',
} as const;
export type LoadingType = (typeof LOADING_TYPES)[keyof typeof LOADING_TYPES];
