(self["webpackChunkcustomer_web_billing_invoice_mfe"] = self["webpackChunkcustomer_web_billing_invoice_mfe"] || []).push([["libs_foundation_wink_dist_dist_esm_wink-link_entry_js"],{

/***/ 3619:
/*!*******************************************************************!*\
  !*** ./libs/foundation/wink/dist/dist/esm/icon.types-2c69a93d.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ ICON_TYPES),
/* harmony export */   a: () => (/* binding */ ICON_SIZES),
/* harmony export */   b: () => (/* binding */ ICON_TYPES_BASIS)
/* harmony export */ });
/* harmony import */ var _sizes_types_9eb79f88_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sizes.types-9eb79f88.js */ 2960);

const ICON_TYPES_BASIS = {
  default: 'default',
  primary: 'primary',
  secondary: 'secondary'
};
const ICON_TYPES = {
  ...ICON_TYPES_BASIS,
  transparent: 'transparent'
};
const ICON_SIZES = {
  sm: _sizes_types_9eb79f88_js__WEBPACK_IMPORTED_MODULE_0__.S.sm,
  md: _sizes_types_9eb79f88_js__WEBPACK_IMPORTED_MODULE_0__.S.md,
  lg: _sizes_types_9eb79f88_js__WEBPACK_IMPORTED_MODULE_0__.S.lg,
  xl: _sizes_types_9eb79f88_js__WEBPACK_IMPORTED_MODULE_0__.S.xl
};


/***/ }),

/***/ 95172:
/*!************************************************************************!*\
  !*** ./libs/foundation/wink/dist/dist/esm/positions.types-dd2f5ebf.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ DIRECTIONS),
/* harmony export */   P: () => (/* binding */ POSITIONS_HORIZONTAL)
/* harmony export */ });
const POSITIONS_HORIZONTAL = {
  left: 'left',
  center: 'center',
  right: 'right'
};
const DIRECTIONS = {
  horizontal: 'horizontal',
  vertical: 'vertical'
};


/***/ }),

/***/ 2960:
/*!********************************************************************!*\
  !*** ./libs/foundation/wink/dist/dist/esm/sizes.types-9eb79f88.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ SIZES)
/* harmony export */ });
const SIZES = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
  '3xs': '3xs',
  '2xs': '2xs',
  xs: 'xs',
  s: 's',
  m: 'm',
  l: 'l',
  none: 'none',
  full: 'full'
};


/***/ }),

/***/ 1144:
/*!**********************************************************************!*\
  !*** ./libs/foundation/wink/dist/dist/esm/targets.types-ef2f173a.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ TARGETS)
/* harmony export */ });
const TARGETS = {
  self: '_self',
  blank: '_blank',
  parent: '_parent',
  top: '_top',
  unfencedTop: '_unfencedTop'
};


/***/ }),

/***/ 67357:
/*!***************************************************************!*\
  !*** ./libs/foundation/wink/dist/dist/esm/wink-link.entry.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   wink_link: () => (/* binding */ Link)
/* harmony export */ });
/* harmony import */ var _index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-4268ac0c.js */ 60734);
/* harmony import */ var _positions_types_dd2f5ebf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./positions.types-dd2f5ebf.js */ 95172);
/* harmony import */ var _icon_types_2c69a93d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon.types-2c69a93d.js */ 3619);
/* harmony import */ var _targets_types_ef2f173a_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./targets.types-ef2f173a.js */ 1144);
/* harmony import */ var _sizes_types_9eb79f88_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sizes.types-9eb79f88.js */ 2960);





const LINK_APPEARANCES_DEFAULT = {
  default: 'default',
  subtle: 'subtle',
  area: 'area'
};
const LINK_APPEARANCES_SNOWFLAKES = {
  dropdownMenuLink: 'dropdown-menu-link',
  menuSecondary: 'menu-secondary',
  menuBack: 'menu-back'
};
const LINK_APPEARANCES = {
  ...LINK_APPEARANCES_DEFAULT,
  ...LINK_APPEARANCES_SNOWFLAKES
};
const LINK_SIZES = {
  inherit: 'inherit',
  bodyRegular: 'body-regular'
};
const LINK_ICON_POSITIONS = {
  left: _positions_types_dd2f5ebf_js__WEBPACK_IMPORTED_MODULE_1__.P.left,
  right: _positions_types_dd2f5ebf_js__WEBPACK_IMPORTED_MODULE_1__.P.right
};
const linkBaseCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host([icon-appearance=primary]) a ::slotted([slot=link-icon]){--wink-icon-bg-color:var(--semantic-color-background-surface-action-default)}:host([icon-appearance=primary]) a:hover ::slotted([slot=link-icon]){--wink-icon-bg-color:var(--semantic-color-background-surface-action-hover)}:host([icon-appearance=primary]) a:visited ::slotted([slot=link-icon]){--wink-icon-bg-color:var(--semantic-color-background-surface-action-default)}:host([icon-appearance=primary]) a:focus ::slotted([slot=link-icon]){--wink-icon-bg-color:var(--semantic-color-background-surface-action-hover)}:host([icon-appearance=primary]) a:active ::slotted([slot=link-icon]){--wink-icon-bg-color:var(--semantic-color-background-surface-action-active)}:host([icon-appearance=secondary]) a ::slotted([slot=link-icon]){--wink-icon-bg-color:var(--semantic-color-background-surface-bold-default)}:host([icon-appearance=secondary]) a:hover ::slotted([slot=link-icon]){--wink-icon-bg-color:var(--semantic-color-background-surface-bold-hovered)}:host([icon-appearance=secondary]) a:visited ::slotted([slot=link-icon]){--wink-icon-bg-color:var(--semantic-color-background-surface-bold-default)}:host([icon-appearance=secondary]) a:focus ::slotted([slot=link-icon]){--wink-icon-bg-color:var(--semantic-color-background-surface-bold-hovered)}:host([icon-appearance=secondary]) a:active ::slotted([slot=link-icon]){--wink-icon-bg-color:var(--semantic-color-background-surface-bold-pressed)}:host .link{display:inline-block;text-decoration:none;background-color:var(--wink-link-bgcolor--default, var(--semantic-color-background-surface-neutral-default));padding-top:var(--wink-link-padding-top, calc(var(--semantic-spacing-none) * 1rem));padding-bottom:var(--wink-link-padding-bottom, calc(var(--semantic-spacing-none) * 1rem));padding-left:var(--wink-link-padding-left, calc(var(--semantic-spacing-none) * 1rem));padding-right:var(--wink-link-padding-right, calc(var(--semantic-spacing-none) * 1rem));margin-bottom:var(--wink-link-margin-bottom, calc(var(--semantic-spacing-none) * 1rem));border-radius:var(--wink-link-border-radius, 0)}:host .link.font--inherit #link-content{font-size:inherit;line-height:inherit;font-weight:inherit}:host .link #link-content{color:var(--wink-link-color--default, var(--semantic-color-text-default));display:block;text-decoration:underline}:host .link:hover,:host .link:visited:hover{cursor:pointer}:host .link:hover #link-content,:host .link:visited:hover #link-content{color:var(--wink-link-color--hover, var(--semantic-color-text-default));text-decoration:none}:host .link:active #link-content,:host .link:visited:active #link-content{color:var(--wink-link-color--active, var(--semantic-color-text-subtlest))}:host .link:visited #link-content{color:var(--wink-link-color--visited, var(--semantic-color-text-default))}:host .link:focus,:host .link:focus-visible{outline-offset:0.1rem;outline:0.2rem solid var(--semantic-color-border-focus);border-radius:0.1rem}:host .link.disabled,:host .link.subtle.disabled{pointer-events:none;opacity:0.4;cursor:not-allowed;-webkit-user-select:none;user-select:none}:host .link.subtle #link-content{text-decoration:none}:host .link.subtle:hover #link-content{text-decoration:underline}:host .link.link-with-icon{display:flex}:host .link.link-with-icon-left{flex-direction:row}:host .link.link-with-icon-left ::slotted([slot=link-icon]){align-self:start;margin-right:var(--wink-link--with-icon-left-icon--margin-right, calc(var(--semantic-spacing-3xs) * 1rem))}:host .link.link-with-icon-left.link-with-icon-backdrop ::slotted([slot=link-icon]){margin-right:calc(var(--semantic-spacing-md) * 1rem)}:host .link.link-with-icon-right{flex-direction:row-reverse}:host .link.link-with-icon-right ::slotted([slot=link-icon]){margin-left:calc(var(--semantic-spacing-3xs) * 1rem);align-self:start}:host .link.link-with-icon-right.link-with-icon-backdrop ::slotted([slot=link-icon]){margin-left:calc(var(--semantic-spacing-md) * 1rem)}:host .link.area,:host .link.area #link-content{text-decoration:none}:host .link.area:hover,:host .link.area #link-content:hover{text-decoration:none}:host([appearance=dropdown-menu-link]){display:flex}:host([appearance=dropdown-menu-link]) .link{flex:1 0 auto;padding:calc(var(--semantic-spacing-xs) * 1rem) calc(var(--semantic-spacing-sm) * 1rem);border-radius:0.4rem}:host([appearance=dropdown-menu-link]) .link #content{font-size:1.6rem;line-height:2.4rem;font-family:TelenetAlbra-Regular, Helvetica, Verdana, Arial, sans-serif}:host([appearance=dropdown-menu-link]) .link:hover{background-color:var(--semantic-color-background-surface-neutral-hovered)}:host([appearance=dropdown-menu-link]) .link:active #link-content{font-size:1.6rem;line-height:2.4rem;font-family:TelenetAlbra-Bold, \"Helvetica Neue\", Helvetica, Arial, sans-serif}:host([appearance=dropdown-menu-link]) .link #link-content{text-decoration:none}:host([appearance=dropdown-menu-link]) .link.link-with-icon-left.link-with-icon-backdrop ::slotted([slot=link-icon]){margin-right:calc(var(--semantic-spacing-sm) * 1rem)}:host([appearance=dropdown-menu-link].active) .link{background-color:var(--semantic-color-background-surface-neutral-pressed)}:host([appearance=dropdown-menu-link].active) .link #link-content{font-size:1.6rem;line-height:2.4rem;font-family:TelenetAlbra-Bold, \"Helvetica Neue\", Helvetica, Arial, sans-serif}@media only screen and (min-width: 64em){:host([appearance=menu-secondary]) a ::slotted([slot=link-icon]),:host([appearance=menu-secondary]) :active ::slotted([slot=link-icon]){--wink-icon-color:var(--semantic-color-icon-subtlest)}:host([appearance=menu-secondary]) a:hover ::slotted([slot=link-icon]){--wink-icon-color:var(--semantic-color-icon-default)}}:host([appearance=menu-secondary]) ::slotted([slot=link-icon]){--wink-link--with-icon-left-icon--margin-right:calc(var(--semantic-spacing-xs) * 1rem)}:host([appearance=menu-secondary]) a:active ::slotted([slot=link-icon]){--wink-icon-color:var(--semantic-color-icon-subtle)}:host([appearance=menu-secondary]) .link{--wink-link-padding-top:calc(var(--semantic-spacing-xs) * 1rem);--wink-link-padding-bottom:calc(var(--semantic-spacing-xs) * 1rem);text-decoration:none}@media only screen and (min-width: 64em){:host([appearance=menu-secondary]) .link{--wink-link-padding-left:calc(var(--semantic-spacing-xs) * 1rem);--wink-link-padding-right:calc(var(--semantic-spacing-xs) * 1rem);--wink-link-bgcolor--default:var(--semantic-color-background-canvas-default);--wink-link-border-radius:0.4rem}:host([appearance=menu-secondary]) .link.font-body-regular #link-content{font-size:1.4rem;line-height:2rem}}:host([appearance=menu-secondary]) .link #link-content{--wink-link-color--active:var(--semantic-color-text-subtlest);text-decoration:none}@media only screen and (min-width: 64em){:host([appearance=menu-secondary]) .link #link-content{--wink-link-color--default:var(--semantic-color-text-subtlest);--wink-link-color--hover:var(--semantic-color-text-default);--wink-link-color--visited:var(--semantic-color-text-subtlest);--wink-link-color--active:var(--semantic-color-text-subtlest)}}:host([appearance=menu-back]) a ::slotted([slot=link-icon]),:host([appearance=menu-back]) a:hover ::slotted([slot=link-icon]),:host([appearance=menu-back]) a:visited ::slotted([slot=link-icon]){--wink-icon-color:var(--semantic-color-icon-subtle)}:host([appearance=menu-back]) a:active ::slotted([slot=link-icon]){--wink-icon-color:var(--semantic-color-icon-subtlest)}:host([appearance=menu-back]) .link{align-items:center;text-decoration:none}:host([appearance=menu-back]) .link #link-content{--wink-link-color--default:var(--semantic-color-text-subtle);--wink-link-color--hover:var(--semantic-color-text-subtle);--wink-link-color--visited:var(--semantic-color-text-subtle);--wink-link-color--active:var(--semantic-color-text-subtlest);text-decoration:none}:host .link.font--body-regular #link-content{font-size:16px;line-height:24px;font-weight:normal}:host .link.font--body-small #link-content{font-size:14px;line-height:20px;font-weight:normal}:host .link.font-caption-bold #link-content{font-size:12px;line-height:28px;font-weight:700}";
const WinkLinkBaseStyle0 = linkBaseCss;
const linkTelenetCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host([icon-appearance=primary]) a ::slotted([slot=link-icon]){--wink-icon-bg-color:var(--semantic-color-background-surface-action-default)}:host([icon-appearance=primary]) a:hover ::slotted([slot=link-icon]){--wink-icon-bg-color:var(--semantic-color-background-surface-action-hover)}:host([icon-appearance=primary]) a:visited ::slotted([slot=link-icon]){--wink-icon-bg-color:var(--semantic-color-background-surface-action-default)}:host([icon-appearance=primary]) a:focus ::slotted([slot=link-icon]){--wink-icon-bg-color:var(--semantic-color-background-surface-action-hover)}:host([icon-appearance=primary]) a:active ::slotted([slot=link-icon]){--wink-icon-bg-color:var(--semantic-color-background-surface-action-active)}:host([icon-appearance=secondary]) a ::slotted([slot=link-icon]){--wink-icon-bg-color:var(--semantic-color-background-surface-bold-default)}:host([icon-appearance=secondary]) a:hover ::slotted([slot=link-icon]){--wink-icon-bg-color:var(--semantic-color-background-surface-bold-hovered)}:host([icon-appearance=secondary]) a:visited ::slotted([slot=link-icon]){--wink-icon-bg-color:var(--semantic-color-background-surface-bold-default)}:host([icon-appearance=secondary]) a:focus ::slotted([slot=link-icon]){--wink-icon-bg-color:var(--semantic-color-background-surface-bold-hovered)}:host([icon-appearance=secondary]) a:active ::slotted([slot=link-icon]){--wink-icon-bg-color:var(--semantic-color-background-surface-bold-pressed)}:host .link{display:inline-block;text-decoration:none;background-color:var(--wink-link-bgcolor--default, var(--semantic-color-background-surface-neutral-default));padding-top:var(--wink-link-padding-top, calc(var(--semantic-spacing-none) * 1rem));padding-bottom:var(--wink-link-padding-bottom, calc(var(--semantic-spacing-none) * 1rem));padding-left:var(--wink-link-padding-left, calc(var(--semantic-spacing-none) * 1rem));padding-right:var(--wink-link-padding-right, calc(var(--semantic-spacing-none) * 1rem));margin-bottom:var(--wink-link-margin-bottom, calc(var(--semantic-spacing-none) * 1rem));border-radius:var(--wink-link-border-radius, 0)}:host .link.font--inherit #link-content{font-size:inherit;line-height:inherit;font-weight:inherit}:host .link #link-content{color:var(--wink-link-color--default, var(--semantic-color-text-default));display:block;text-decoration:underline}:host .link:hover,:host .link:visited:hover{cursor:pointer}:host .link:hover #link-content,:host .link:visited:hover #link-content{color:var(--wink-link-color--hover, var(--semantic-color-text-default));text-decoration:none}:host .link:active #link-content,:host .link:visited:active #link-content{color:var(--wink-link-color--active, var(--semantic-color-text-subtlest))}:host .link:visited #link-content{color:var(--wink-link-color--visited, var(--semantic-color-text-default))}:host .link:focus,:host .link:focus-visible{outline-offset:0.1rem;outline:0.2rem solid var(--semantic-color-border-focus);border-radius:0.1rem}:host .link.disabled,:host .link.subtle.disabled{pointer-events:none;opacity:0.4;cursor:not-allowed;-webkit-user-select:none;user-select:none}:host .link.subtle #link-content{text-decoration:none}:host .link.subtle:hover #link-content{text-decoration:underline}:host .link.link-with-icon{display:flex}:host .link.link-with-icon-left{flex-direction:row}:host .link.link-with-icon-left ::slotted([slot=link-icon]){align-self:start;margin-right:var(--wink-link--with-icon-left-icon--margin-right, calc(var(--semantic-spacing-3xs) * 1rem))}:host .link.link-with-icon-left.link-with-icon-backdrop ::slotted([slot=link-icon]){margin-right:calc(var(--semantic-spacing-md) * 1rem)}:host .link.link-with-icon-right{flex-direction:row-reverse}:host .link.link-with-icon-right ::slotted([slot=link-icon]){margin-left:calc(var(--semantic-spacing-3xs) * 1rem);align-self:start}:host .link.link-with-icon-right.link-with-icon-backdrop ::slotted([slot=link-icon]){margin-left:calc(var(--semantic-spacing-md) * 1rem)}:host .link.area,:host .link.area #link-content{text-decoration:none}:host .link.area:hover,:host .link.area #link-content:hover{text-decoration:none}:host([appearance=dropdown-menu-link]){display:flex}:host([appearance=dropdown-menu-link]) .link{flex:1 0 auto;padding:calc(var(--semantic-spacing-xs) * 1rem) calc(var(--semantic-spacing-sm) * 1rem);border-radius:0.4rem}:host([appearance=dropdown-menu-link]) .link #content{font-size:1.6rem;line-height:2.4rem;font-family:TelenetAlbra-Regular, Helvetica, Verdana, Arial, sans-serif}:host([appearance=dropdown-menu-link]) .link:hover{background-color:var(--semantic-color-background-surface-neutral-hovered)}:host([appearance=dropdown-menu-link]) .link:active #link-content{font-size:1.6rem;line-height:2.4rem;font-family:TelenetAlbra-Bold, \"Helvetica Neue\", Helvetica, Arial, sans-serif}:host([appearance=dropdown-menu-link]) .link #link-content{text-decoration:none}:host([appearance=dropdown-menu-link]) .link.link-with-icon-left.link-with-icon-backdrop ::slotted([slot=link-icon]){margin-right:calc(var(--semantic-spacing-sm) * 1rem)}:host([appearance=dropdown-menu-link].active) .link{background-color:var(--semantic-color-background-surface-neutral-pressed)}:host([appearance=dropdown-menu-link].active) .link #link-content{font-size:1.6rem;line-height:2.4rem;font-family:TelenetAlbra-Bold, \"Helvetica Neue\", Helvetica, Arial, sans-serif}@media only screen and (min-width: 64em){:host([appearance=menu-secondary]) a ::slotted([slot=link-icon]),:host([appearance=menu-secondary]) :active ::slotted([slot=link-icon]){--wink-icon-color:var(--semantic-color-icon-subtlest)}:host([appearance=menu-secondary]) a:hover ::slotted([slot=link-icon]){--wink-icon-color:var(--semantic-color-icon-default)}}:host([appearance=menu-secondary]) ::slotted([slot=link-icon]){--wink-link--with-icon-left-icon--margin-right:calc(var(--semantic-spacing-xs) * 1rem)}:host([appearance=menu-secondary]) a:active ::slotted([slot=link-icon]){--wink-icon-color:var(--semantic-color-icon-subtle)}:host([appearance=menu-secondary]) .link{--wink-link-padding-top:calc(var(--semantic-spacing-xs) * 1rem);--wink-link-padding-bottom:calc(var(--semantic-spacing-xs) * 1rem);text-decoration:none}@media only screen and (min-width: 64em){:host([appearance=menu-secondary]) .link{--wink-link-padding-left:calc(var(--semantic-spacing-xs) * 1rem);--wink-link-padding-right:calc(var(--semantic-spacing-xs) * 1rem);--wink-link-bgcolor--default:var(--semantic-color-background-canvas-default);--wink-link-border-radius:0.4rem}:host([appearance=menu-secondary]) .link.font-body-regular #link-content{font-size:1.4rem;line-height:2rem}}:host([appearance=menu-secondary]) .link #link-content{--wink-link-color--active:var(--semantic-color-text-subtlest);text-decoration:none}@media only screen and (min-width: 64em){:host([appearance=menu-secondary]) .link #link-content{--wink-link-color--default:var(--semantic-color-text-subtlest);--wink-link-color--hover:var(--semantic-color-text-default);--wink-link-color--visited:var(--semantic-color-text-subtlest);--wink-link-color--active:var(--semantic-color-text-subtlest)}}:host([appearance=menu-back]) a ::slotted([slot=link-icon]),:host([appearance=menu-back]) a:hover ::slotted([slot=link-icon]),:host([appearance=menu-back]) a:visited ::slotted([slot=link-icon]){--wink-icon-color:var(--semantic-color-icon-subtle)}:host([appearance=menu-back]) a:active ::slotted([slot=link-icon]){--wink-icon-color:var(--semantic-color-icon-subtlest)}:host([appearance=menu-back]) .link{align-items:center;text-decoration:none}:host([appearance=menu-back]) .link #link-content{--wink-link-color--default:var(--semantic-color-text-subtle);--wink-link-color--hover:var(--semantic-color-text-subtle);--wink-link-color--visited:var(--semantic-color-text-subtle);--wink-link-color--active:var(--semantic-color-text-subtlest);text-decoration:none}:host .link.font-body-regular #link-content{font-family:TelenetAlbra-Regular, Helvetica, Verdana, Arial, sans-serif;font-size:1.6rem;line-height:2.4rem;font-weight:400}@media only screen and (min-width: 48.0625em){:host .link.font-body-regular #link-content{font-size:1.6rem;line-height:2.4rem}}@media only screen and (min-width: 74.5em){:host .link.font-body-regular #link-content{font-size:1.8rem;line-height:2.8rem}}:host .link.font-body-small #link-content{font-family:TelenetAlbra-Regular, Helvetica, Verdana, Arial, sans-serif;font-size:1.4rem;line-height:2rem;font-weight:400}@media only screen and (min-width: 48.0625em){:host .link.font-body-small #link-content{font-size:1.4rem;line-height:2rem}}@media only screen and (min-width: 74.5em){:host .link.font-body-small #link-content{font-size:1.6rem;line-height:2.4rem}}:host .link.font-caption-bold #link-content{font-family:TelenetAlbra-Bold, Helvetica, Verdana, Arial, sans-serif;font-size:1.2rem;line-height:1.6rem;letter-spacing:0;font-weight:900}@media only screen and (min-width: 48.0625em){:host .link.font-caption-bold #link-content{font-size:1.2rem;line-height:1.6rem;letter-spacing:0}}@media only screen and (min-width: 74.5em){:host .link.font-caption-bold #link-content{font-size:1.4rem;line-height:2rem;letter-spacing:0}}";
const WinkLinkTelenetStyle0 = linkTelenetCss;
const Link = class {
  constructor(hostRef) {
    (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.appearance = LINK_APPEARANCES.default;
    this.size = LINK_SIZES.inherit;
    this.icon = undefined;
    this.iconPosition = LINK_ICON_POSITIONS.left;
    this.iconAppearance = _icon_types_2c69a93d_js__WEBPACK_IMPORTED_MODULE_2__.b.default;
    this.isDisabled = false;
    this.href = '';
    this.target = _targets_types_ef2f173a_js__WEBPACK_IMPORTED_MODULE_3__.T.self;
  }
  getTypeClasses() {
    return this.appearance !== LINK_APPEARANCES.default ? `${this.appearance}` : '';
  }
  hasBackdrop() {
    return this.iconAppearance !== _icon_types_2c69a93d_js__WEBPACK_IMPORTED_MODULE_2__.b.default && Object.values(_icon_types_2c69a93d_js__WEBPACK_IMPORTED_MODULE_2__.b).includes(this.iconAppearance);
  }
  render() {
    const sizeClasses = `font-${this.size}`;
    return (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.H, {
      key: 'fc89d77072b84beca652fdc0d403df3a1af2301b'
    }, (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("a", {
      key: '8337b1fb778c85308de2f1ddcfdca6c97018a2a8',
      class: {
        link: true,
        [sizeClasses]: true,
        [this.getTypeClasses()]: true,
        [`link-with-icon link-with-icon-${this.iconPosition}`]: this.icon !== '',
        'link-with-icon-backdrop': this.hasBackdrop(),
        disabled: this.isDisabled
      },
      href: this.href,
      target: this.target
    }, (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", {
      key: 'b6b54ae4531683cfae70d9bba9d7a28c60906ee7',
      name: "link-icon"
    }), (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      key: '195e537f7baa3c1302ab446cfd41dd1707fb5b73',
      id: "link-content"
    }, (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", {
      key: 'a8fbb669673e38b0431991ca3b6def423d9483b3'
    }))));
  }
};
Link.style = {
  base: WinkLinkBaseStyle0,
  telenet: WinkLinkTelenetStyle0
};


/***/ })

}])
//# sourceMappingURL=libs_foundation_wink_dist_dist_esm_wink-link_entry_js.js.map