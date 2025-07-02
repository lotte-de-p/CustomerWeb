export const FLEX_DIRECTIONS = {
  row: 'row',
  rowReverse: 'row-reverse',
  column: 'column',
  columnReverse: 'column-reverse',
} as const;
export type FlexDirection = (typeof FLEX_DIRECTIONS)[keyof typeof FLEX_DIRECTIONS];

export const JUSTIFY_CONTENTS = {
  flexStart: 'flex-start',
  center: 'center',
  flexEnd: 'flex-end',
  unset: 'unset',
  spaceAround: 'space-around',
  spaceBetween: 'space-between',
  spaceEvenly: 'space-evenly',
  stretch: 'stretch',
  left: 'left',
  inherit: 'inherit',
  normal: 'normal',
} as const;
export type JustifyContent = (typeof JUSTIFY_CONTENTS)[keyof typeof JUSTIFY_CONTENTS];

export const ALIGN_ITEMS = {
  flexStart: 'flex-start',
  center: 'center',
  flexEnd: 'flex-end',
  baseline: 'baseline',
  stretch: 'stretch',
  inherit: 'inherit',
} as const;
export type AlignItems = (typeof ALIGN_ITEMS)[keyof typeof ALIGN_ITEMS];

export const WRAPS = {
  wrap: 'wrap',
  nowrap: 'nowrap',
  wrapReverse: 'wrap-reverse',
  initial: 'initial',
} as const;
export type Wrap = (typeof WRAPS)[keyof typeof WRAPS];
