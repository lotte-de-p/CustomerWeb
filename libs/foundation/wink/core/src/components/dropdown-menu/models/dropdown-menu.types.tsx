export const DROPDOWN_ALIGN = {
  topLeft: 'top-left',
  topRight: 'top-right',
  bottomLeft: 'bottom-left',
  bottomRight: 'bottom-right',
} as const;
export type DropdownAlign = (typeof DROPDOWN_ALIGN)[keyof typeof DROPDOWN_ALIGN];
