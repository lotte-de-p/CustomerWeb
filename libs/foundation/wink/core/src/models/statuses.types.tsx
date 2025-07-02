export const STATUS_VARIANTS = {
  information: 'information',
  success: 'success',
  error: 'error',
  warning: 'warning',
} as const;
export type StatusVariants = (typeof STATUS_VARIANTS)[keyof typeof STATUS_VARIANTS];
