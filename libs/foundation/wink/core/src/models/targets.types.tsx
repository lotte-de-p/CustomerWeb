export const TARGETS = {
  self: '_self',
  blank: '_blank',
  parent: '_parent',
  top: '_top',
  unfencedTop: '_unfencedTop',
};
export type Target = (typeof TARGETS)[keyof typeof TARGETS];
