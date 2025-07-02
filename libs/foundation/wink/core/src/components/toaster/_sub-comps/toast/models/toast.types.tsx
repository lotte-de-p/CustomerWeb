export const TOAST_TYPES = {
  negative: 'negative',
  positive: 'positive',
  actionable: 'actionable',
  feedback: 'feedback',
} as const;
export type ToastType = (typeof TOAST_TYPES)[keyof typeof TOAST_TYPES];
