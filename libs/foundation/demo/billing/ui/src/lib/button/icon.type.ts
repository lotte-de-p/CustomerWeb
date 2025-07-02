export type Icon = IconGeneric | IconInternet | IconNotification | IconSocial | IconOther;

type IconGeneric =
  | 'basket'
  | 'check-shape'
  | 'configure'
  | 'file'
  | 'plus'
  | 'search'
  | 'ticket'
  | 'tool'
  | 'tick'
  | 'settings'
  | 'question-shape'
  | 'map-search';
type IconInternet = 'external-link';
type IconNotification = 'alert-shape' | 'bell-notification' | 'check-shape' | 'information-shape' | 'error-shape';
type IconSocial = 'share';
type IconOther = 'logo' | 'pdf-file' | 'shopping-cart';
