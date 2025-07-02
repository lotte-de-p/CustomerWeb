export const TAB_TYPES = {
  container: 'container',
  inline: 'inline',
} as const;
export type TabTypes = (typeof TAB_TYPES)[keyof typeof TAB_TYPES];
