import { STATUS_VARIANTS } from '../../../../models/statuses.types';

export const VALIDATION_TYPES = {
  error: STATUS_VARIANTS.error,
} as const;
export type ValidationTypes = (typeof VALIDATION_TYPES)[keyof typeof VALIDATION_TYPES];
