import { POSITIONS_HORIZONTAL } from '../../../models/positions.types';

export const LINK_APPEARANCES_DEFAULT = {
  default: 'default',
  subtle: 'subtle',
  area: 'area',
} as const;
export type LinkAppearanceDefault = (typeof LINK_APPEARANCES_DEFAULT)[keyof typeof LINK_APPEARANCES_DEFAULT];

export const LINK_APPEARANCES_SNOWFLAKES = {
  dropdownMenuLink: 'dropdown-menu-link',
  menuSecondary: 'menu-secondary',
  menuBack: 'menu-back',
} as const;
export type LinkAppearanceSnowflake = (typeof LINK_APPEARANCES_SNOWFLAKES)[keyof typeof LINK_APPEARANCES_SNOWFLAKES];

export const LINK_APPEARANCES = {
  ...LINK_APPEARANCES_DEFAULT,
  ...LINK_APPEARANCES_SNOWFLAKES,
} as const;
export type LinkAppearance = (typeof LINK_APPEARANCES)[keyof typeof LINK_APPEARANCES];

export const LINK_SIZES = {
  inherit: 'inherit',
  bodyRegular: 'body-regular',
} as const;
export type LinkSize = (typeof LINK_SIZES)[keyof typeof LINK_SIZES];

export const LINK_SIZES_SNOWFLAKES = {
  captionBold: 'caption-bold',
} as const;
export type LinkSizeSnowflake = (typeof LINK_SIZES_SNOWFLAKES)[keyof typeof LINK_SIZES_SNOWFLAKES];

export const LINK_ICON_POSITIONS = {
  left: POSITIONS_HORIZONTAL.left,
  right: POSITIONS_HORIZONTAL.right,
} as const;
export type LinkPositions = (typeof LINK_ICON_POSITIONS)[keyof typeof LINK_ICON_POSITIONS];
