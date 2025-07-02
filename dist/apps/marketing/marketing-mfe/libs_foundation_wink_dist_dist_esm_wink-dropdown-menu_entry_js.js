(self["webpackChunkmarketing_mfe"] = self["webpackChunkmarketing_mfe"] || []).push([["libs_foundation_wink_dist_dist_esm_wink-dropdown-menu_entry_js"],{

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

/***/ 51329:
/*!************************************************************************!*\
  !*** ./libs/foundation/wink/dist/dist/esm/wink-dropdown-menu.entry.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   wink_dropdown_menu: () => (/* binding */ DropdownMenu)
/* harmony export */ });
/* harmony import */ var _index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-4268ac0c.js */ 60734);
/* harmony import */ var _icon_types_2c69a93d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon.types-2c69a93d.js */ 3619);
/* harmony import */ var _sizes_types_9eb79f88_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sizes.types-9eb79f88.js */ 2960);



const DROPDOWN_ALIGN = {
  topLeft: 'top-left',
  topRight: 'top-right',
  bottomLeft: 'bottom-left',
  bottomRight: 'bottom-right'
};
const dropdownMenuBaseCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host{box-sizing:border-box;position:relative;display:inline-block;font-family:TelenetAlbra-Regular, \"Helvetica Neue\", Helvetica, Arial, sans-serif;font-size:1.6rem}:host .dropdown-menu--heading{display:flex;justify-content:center;align-items:center;border:0;padding:calc(var(--semantic-spacing-xs) * 1rem);border-radius:calc(var(--semantic-radius-default) * 1rem);color:var(--wink-dropdown-color, var(--semantic-color-text-default));background-color:var(--wink-dropdown-bg-color, var(--semantic-color-background-surface-subtle-default));font-size:var(--wink-dropdown-font-size, inherit);text-align:right}:host .dropdown-menu--heading ::slotted([slot=dropdown-menu--avatar]){margin-right:calc(var(--semantic-spacing-xs) * 1rem)}:host .dropdown-menu--heading .dropdown-menu--chevron{display:inline-flex;margin-left:0.8rem;transform:rotate(0deg);transition:0.25s ease-in-out}:host .dropdown-menu--heading:hover,:host .dropdown-menu--heading:focus{cursor:pointer;background-color:var(--semantic-color-background-surface-subtle-hovered)}:host .dropdown-menu--heading:focus-visible{outline-offset:0.1rem;outline:0.2rem solid var(--semantic-color-border-focus);border-radius:0.1rem}:host .dropdown-menu--list{position:absolute;margin:0;display:none;flex-direction:column;padding:calc(var(--semantic-spacing-sm) * 1rem);gap:calc(var(--semantic-spacing-xs) * 1rem);background-color:var(--semantic-color-background-canvas-overlapping);box-shadow:0 0.8rem 1.6rem 0 rgba(41, 29, 24, 0.08);z-index:3;width:100%}:host .dropdown-menu--list li{list-style-type:none}:host([is-expanded]) .dropdown-menu--heading .dropdown-menu--chevron{transform:scaleY(-1)}:host([is-expanded]) .dropdown-menu--list{display:flex}:host(.dropdown-menu--align-list--top-left) .dropdown-menu--list{left:0;top:calc(100% + 0.8rem)}:host(.dropdown-menu--align-list--top-right) .dropdown-menu--list{right:0;top:calc(100% + 0.8rem)}:host(.dropdown-menu--align-list--bottom-left) .dropdown-menu--list{left:0;bottom:calc(100% + 0.8rem)}:host(.dropdown-menu--align-list--bottom-right) .dropdown-menu--list{right:0;bottom:calc(100% + 0.8rem)}";
const WinkDropdownMenuBaseStyle0 = dropdownMenuBaseCss;
const dropdownMenuTelenetCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host{box-sizing:border-box;position:relative;display:inline-block;font-family:TelenetAlbra-Regular, \"Helvetica Neue\", Helvetica, Arial, sans-serif;font-size:1.6rem}:host .dropdown-menu--heading{display:flex;justify-content:center;align-items:center;border:0;padding:calc(var(--semantic-spacing-xs) * 1rem);border-radius:calc(var(--semantic-radius-default) * 1rem);color:var(--wink-dropdown-color, var(--semantic-color-text-default));background-color:var(--wink-dropdown-bg-color, var(--semantic-color-background-surface-subtle-default));font-size:var(--wink-dropdown-font-size, inherit);text-align:right}:host .dropdown-menu--heading ::slotted([slot=dropdown-menu--avatar]){margin-right:calc(var(--semantic-spacing-xs) * 1rem)}:host .dropdown-menu--heading .dropdown-menu--chevron{display:inline-flex;margin-left:0.8rem;transform:rotate(0deg);transition:0.25s ease-in-out}:host .dropdown-menu--heading:hover,:host .dropdown-menu--heading:focus{cursor:pointer;background-color:var(--semantic-color-background-surface-subtle-hovered)}:host .dropdown-menu--heading:focus-visible{outline-offset:0.1rem;outline:0.2rem solid var(--semantic-color-border-focus);border-radius:0.1rem}:host .dropdown-menu--list{position:absolute;margin:0;display:none;flex-direction:column;padding:calc(var(--semantic-spacing-sm) * 1rem);gap:calc(var(--semantic-spacing-xs) * 1rem);background-color:var(--semantic-color-background-canvas-overlapping);box-shadow:0 0.8rem 1.6rem 0 rgba(41, 29, 24, 0.08);z-index:3;width:100%}:host .dropdown-menu--list li{list-style-type:none}:host([is-expanded]) .dropdown-menu--heading .dropdown-menu--chevron{transform:scaleY(-1)}:host([is-expanded]) .dropdown-menu--list{display:flex}:host(.dropdown-menu--align-list--top-left) .dropdown-menu--list{left:0;top:calc(100% + 0.8rem)}:host(.dropdown-menu--align-list--top-right) .dropdown-menu--list{right:0;top:calc(100% + 0.8rem)}:host(.dropdown-menu--align-list--bottom-left) .dropdown-menu--list{left:0;bottom:calc(100% + 0.8rem)}:host(.dropdown-menu--align-list--bottom-right) .dropdown-menu--list{right:0;bottom:calc(100% + 0.8rem)}";
const WinkDropdownMenuTelenetStyle0 = dropdownMenuTelenetCss;
const DropdownMenu = class {
  constructor(hostRef) {
    (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.heading = 'default-1';
    this.isExpanded = false;
    this.dropdownTabIndex = 1;
    this.itemSelected = undefined;
    this.listPosition = DROPDOWN_ALIGN.topLeft;
    this.focusableItem = NaN;
  }
  get host() {
    return (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.g)(this);
  }
  componentDidLoad() {
    this.setPosition();
    for (let i = 0; i < this.getDropdownItems().length; i++) {
      if (this.getDropdownItems()[i].innerText === this.itemSelected) {
        this.getDropdownItems()[i].classList.add('active');
      }
    }
  }
  handleKeyDown(ev) {
    switch (ev.key) {
      case ' ':
      case 'Enter':
        {
          const element = ev?.target;
          if (element.tagName.toUpperCase() === 'WINK-LINK') {
            element?.shadowRoot?.querySelector('a')?.click();
          } else {
            this.toggleDropdown(ev);
          }
          break;
        }
      case 'Tab':
        {
          if (ev.target === this.getDropdownItems()[this.getDropdownItems().length - 1]) {
            this.toggleDropdown(ev);
          }
          break;
        }
      case 'ArrowDown':
        {
          if (Number.isNaN(this.focusableItem) || this.focusableItem === this.getDropdownItems().length - 1) {
            this.focusableItem = 0;
          } else {
            this.focusableItem++;
          }
          this.focusOnItem(this.focusableItem);
          break;
        }
      case 'ArrowUp':
        {
          if (!this.focusableItem || this.focusableItem === -1) {
            this.focusableItem = this.getDropdownItems().length - 1;
          } else {
            this.focusableItem--;
          }
          this.focusOnItem(this.focusableItem);
          break;
        }
      case 'Escape':
        {
          this.isExpanded = false;
          this.host.shadowRoot?.querySelector('button')?.focus();
          break;
        }
      case 'Home':
        {
          this.focusableItem = 0;
          this.focusOnItem(this.focusableItem);
          break;
        }
      case 'End':
        {
          this.focusableItem = this.getDropdownItems().length - 1;
          this.focusOnItem(this.focusableItem);
          break;
        }
    }
  }
  focusOnItem(focusItem) {
    const itemToFocus = this.getDropdownItems()[focusItem];
    if (itemToFocus instanceof HTMLElement) {
      return itemToFocus?.shadowRoot?.querySelector('a')?.focus();
    }
  }
  getDropdownItems() {
    return this.host.querySelectorAll('wink-link');
  }
  toggleDropdown = _e => {
    this.setPosition();
    this.isExpanded = !this.isExpanded;
  };
  setPosition = () => {
    const dropdownRect = this.host.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const spaceOnLeft = dropdownRect.left;
    const spaceOnRight = viewportWidth - dropdownRect.right;
    const spaceOnTop = dropdownRect.top;
    const spaceOnBottom = viewportHeight - dropdownRect.bottom;
    const positionX = Math.max(spaceOnLeft, spaceOnRight) === spaceOnRight ? 'left' : 'right';
    const positionY = Math.max(spaceOnTop, spaceOnBottom) === spaceOnBottom ? 'top' : 'bottom';
    this.listPosition = `${positionY}-${positionX}`;
  };
  render() {
    return (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.H, {
      key: '88fbb34e0b20c23d779fc73f705761149dcb19c0',
      class: `dropdown-menu--align-list--${this.listPosition}`,
      "is-expanded": this.isExpanded,
      onMouseDown: this.toggleDropdown,
      exportparts: "icon, icon-chevron-down-small"
    }, (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", {
      key: '72d134a0d53203c6003a8da891c7bb85a5f1e753',
      class: "dropdown-menu--heading",
      tabindex: this.dropdownTabIndex
    }, (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", {
      key: '427559f9fceb6bd78f61e84c3d06cacafd52985c',
      name: "dropdown-menu--avatar"
    }), this.heading, (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      key: '477b64011bfef337fb58cecc1c1402e3a3b5ab6e',
      class: "dropdown-menu--chevron"
    }, (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("wink-icon", {
      key: '5dd905ae775fdfc695d61871a06525a90c753a0b',
      size: _icon_types_2c69a93d_js__WEBPACK_IMPORTED_MODULE_1__.a.sm,
      icon: "chevron-down-small"
    }))), (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul", {
      key: 'a61a0687e6c2c7e7707a3a4cd6a1abdeb378b35c',
      class: "dropdown-menu--list"
    }, (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", {
      key: '65527a46e8fac48e64133f1367b91f02997cebb3'
    })));
  }
};
DropdownMenu.style = {
  base: WinkDropdownMenuBaseStyle0,
  telenet: WinkDropdownMenuTelenetStyle0
};


/***/ })

}])
//# sourceMappingURL=libs_foundation_wink_dist_dist_esm_wink-dropdown-menu_entry_js.js.map