import { POSITIONS_HORIZONTAL } from "../../../models/positions.types";
export const LINK_APPEARANCES_DEFAULT = {
    default: 'default',
    subtle: 'subtle',
    area: 'area',
};
export const LINK_APPEARANCES_SNOWFLAKES = {
    dropdownMenuLink: 'dropdown-menu-link',
    menuSecondary: 'menu-secondary',
    menuBack: 'menu-back',
};
export const LINK_APPEARANCES = {
    ...LINK_APPEARANCES_DEFAULT,
    ...LINK_APPEARANCES_SNOWFLAKES,
};
export const LINK_SIZES = {
    inherit: 'inherit',
    bodyRegular: 'body-regular',
};
export const LINK_SIZES_SNOWFLAKES = {
    captionBold: 'caption-bold',
};
export const LINK_ICON_POSITIONS = {
    left: POSITIONS_HORIZONTAL.left,
    right: POSITIONS_HORIZONTAL.right,
};
//# sourceMappingURL=link.types.js.map
