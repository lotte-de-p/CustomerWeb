export const PROGRESS_BGS = {
  default: 'default',
  transparent: 'transparent',
} as const;
export type ProgressBgs = (typeof PROGRESS_BGS)[keyof typeof PROGRESS_BGS];
