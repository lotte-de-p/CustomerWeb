(self["webpackChunkcustomer_web_billing_invoice_mfe"] = self["webpackChunkcustomer_web_billing_invoice_mfe"] || []).push([["libs_foundation_wink_dist_dist_esm_wink-global-header_entry_js"],{

/***/ 21704:
/*!************************************************************************!*\
  !*** ./libs/foundation/wink/dist/dist/esm/wink-global-header.entry.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   wink_global_header: () => (/* binding */ GlobalHeader)
/* harmony export */ });
/* harmony import */ var _index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-4268ac0c.js */ 60734);

const globalHeaderBaseCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host{--wink-logo-width:4rem;--wink-dropdown-font-size:1.4rem;--wink-dropdown-bg-color:var(--semantic-color-background-canvas-default);--wink-dropdown-color:var(--semantic-color-text-subtlest);display:flex;flex-direction:column;align-content:stretch;gap:calc(var(--semantic-spacing-xs) * 1rem);position:relative;max-width:113.2rem;margin:auto;box-sizing:border-box;z-index:99999;isolation:isolate}@media only screen and (max-width: calc(64em - 1px)){:host{--wink-button--sm-fs:1.4rem;--wink-button--sm-lh:2rem}}@media only screen and (min-width: 64em){:host{--wink-button--sm-fs:1.6rem;--wink-button--sm-lh:2.4rem}}:host .mobile-row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-items:center;align-content:center;gap:1.6rem;position:fixed;top:0;left:0;right:0;z-index:100;height:4rem;padding:1.2rem 1.6rem;border-bottom:1px solid var(--semantic-color-border-subtle)}:host .mobile-row:has(input.mobile-hamburger-button:checked){background:var(--semantic-color-background-surface-subtle-default);border-bottom:none}:host .mobile-row .mobile-row-right{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;align-content:center;gap:1.6rem}:host .mobile-row .mobile-row-right ::slotted([slot=main-navigation]){display:contents}:host .mobile-row .mobile-row-right:has(input.mobile-hamburger-button:checked) ::slotted([slot=mobile-search]),:host .mobile-row .mobile-row-right:has(input.mobile-hamburger-button:checked) ::slotted([slot=mobile-customer-zone]){display:none}:host .mobile-row .mobile-hamburger{position:relative;width:4rem;height:4rem}:host .mobile-row .mobile-hamburger .mobile-hamburger-button{display:block;width:4rem;height:4rem;position:absolute;top:0;left:0;cursor:pointer;-webkit-touch-callout:none}:host .mobile-row .mobile-hamburger input.mobile-hamburger-button{margin:0;z-index:1000;opacity:0}:host .mobile-row .mobile-hamburger wink-icon.mobile-hamburger-button{z-index:500}:host .mobile-row .mobile-hamburger wink-icon.open{display:block}:host .mobile-row .mobile-hamburger wink-icon.close{display:none}:host .mobile-row .mobile-hamburger .mobile-fly-out{display:none}:host .mobile-row .mobile-hamburger input:checked~wink-icon.open{display:none}:host .mobile-row .mobile-hamburger input:checked~wink-icon.close{display:block}:host .mobile-row .mobile-hamburger input:checked~.mobile-fly-out{display:flex;flex-direction:column;justify-content:space-between;position:fixed;top:0;left:0;right:0;bottom:0;z-index:200;animation:growDown 300ms ease-in-out forwards;transform-origin:top right;background:var(--semantic-color-background-surface-subtle-default);padding:2.4rem 1.6rem;overflow:auto;margin-top:6.4rem}:host .mobile-row .mobile-hamburger input:checked~.mobile-fly-out .mobile-fly-out-top{display:grid;grid-auto-flow:column;overflow-x:hidden;overflow-y:auto;isolation:isolate}:host .mobile-row .mobile-hamburger input:checked~.mobile-fly-out .mobile-fly-out-top>*{grid-area:1/1/2/2;background-color:#f8f8f8}:host .mobile-row .mobile-hamburger input:checked~.mobile-fly-out .mobile-fly-out-top-main{display:flex;flex-direction:column;gap:2.4rem;position:relative;overflow:auto;animation:1s fadeIn;animation-fill-mode:forwards;visibility:hidden}:host .mobile-row .mobile-hamburger input:checked~.mobile-fly-out .mobile-fly-out-top-sub-nav{z-index:1;transform:translateX(110%);transition:0.3s}:host .mobile-row .mobile-hamburger input:checked~.mobile-fly-out .mobile-fly-out-top-sub-nav[open]{transform:translateX(0%)}:host .mobile-row .mobile-hamburger input:checked~.mobile-fly-out .mobile-fly-out-bottom{display:flex;flex-direction:row;gap:1.6rem;animation:1s fadeIn;animation-fill-mode:forwards;visibility:hidden}@keyframes growDown{0%{transform:scaleY(0)}80%{transform:scaleY(1.1)}100%{transform:scaleY(1)}}@keyframes fadeIn{0%{opacity:0}100%{visibility:visible;opacity:1}}:host .mobile-row ::slotted([slot=mobile-brand]){z-index:500}:host .top-row,:host .bottom-row{display:none}:host .top-row,:host .bottom-row,:host .mobile-row{justify-content:space-between;gap:calc(var(--semantic-spacing-xs) * 1rem)}:host .flyout-container{display:contents}@media only screen and (min-width: 48.0625em){:host .flyout-container{display:grid;position:absolute;top:100%;left:0;right:0;max-width:113.2rem;background:var(--semantic-color-background-canvas-default);transition:all 0.3s ease}:host .flyout-container>::slotted([slot=flyout]){grid-area:1/1/2/2}:host .flyout-container::after{content:\"\";position:absolute;width:100vw;height:100%;left:50%;top:var(--after-top, 0);transform:translateX(-50%);background:var(--semantic-color-background-canvas-default);border-bottom:0.1rem solid var(--semantic-color-border-subtle);z-index:var(--pannel-after-z-index, -3)}}:host ::slotted([slot=main-navigation]),:host ::slotted([slot=customer-orientation]){margin-right:auto}:host ::slotted([slot=search]){margin-left:auto}@media only screen and (min-width: 64em){:host ::slotted([slot=search]){width:160px}}:host ::slotted([slot=brand]){padding:calc(var(--semantic-spacing-xs) * 1rem) 0}@media only screen and (min-width: 64em){:host{--wink-logo-width:4.8rem}:host ::slotted([slot=main-navigation]){display:contents;margin-right:auto}:host .mobile-row{display:none}:host .top-row,:host .bottom-row{display:flex;align-items:center}}:host(.compact){flex-direction:row-reverse}:host(.compact) .bottom-row{flex-grow:1}:host(.minimal) .mobile-hamburger{position:relative;width:auto;height:auto}:host(.minimal) .mobile-hamburger .mobile-hamburger-button.open{display:none}:host(.minimal) .mobile-hamburger .mobile-fly-out{display:block}";
const WinkGlobalHeaderBaseStyle0 = globalHeaderBaseCss;
const globalHeaderTelenetCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host{--wink-logo-width:4rem;--wink-dropdown-font-size:1.4rem;--wink-dropdown-bg-color:var(--semantic-color-background-canvas-default);--wink-dropdown-color:var(--semantic-color-text-subtlest);display:flex;flex-direction:column;align-content:stretch;gap:calc(var(--semantic-spacing-xs) * 1rem);position:relative;max-width:113.2rem;margin:auto;box-sizing:border-box;z-index:99999;isolation:isolate}@media only screen and (max-width: calc(64em - 1px)){:host{--wink-button--sm-fs:1.4rem;--wink-button--sm-lh:2rem}}@media only screen and (min-width: 64em){:host{--wink-button--sm-fs:1.6rem;--wink-button--sm-lh:2.4rem}}:host .mobile-row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-items:center;align-content:center;gap:1.6rem;position:fixed;top:0;left:0;right:0;z-index:100;height:4rem;padding:1.2rem 1.6rem;border-bottom:1px solid var(--semantic-color-border-subtle)}:host .mobile-row:has(input.mobile-hamburger-button:checked){background:var(--semantic-color-background-surface-subtle-default);border-bottom:none}:host .mobile-row .mobile-row-right{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;align-content:center;gap:1.6rem}:host .mobile-row .mobile-row-right ::slotted([slot=main-navigation]){display:contents}:host .mobile-row .mobile-row-right:has(input.mobile-hamburger-button:checked) ::slotted([slot=mobile-search]),:host .mobile-row .mobile-row-right:has(input.mobile-hamburger-button:checked) ::slotted([slot=mobile-customer-zone]){display:none}:host .mobile-row .mobile-hamburger{position:relative;width:4rem;height:4rem}:host .mobile-row .mobile-hamburger .mobile-hamburger-button{display:block;width:4rem;height:4rem;position:absolute;top:0;left:0;cursor:pointer;-webkit-touch-callout:none}:host .mobile-row .mobile-hamburger input.mobile-hamburger-button{margin:0;z-index:1000;opacity:0}:host .mobile-row .mobile-hamburger wink-icon.mobile-hamburger-button{z-index:500}:host .mobile-row .mobile-hamburger wink-icon.open{display:block}:host .mobile-row .mobile-hamburger wink-icon.close{display:none}:host .mobile-row .mobile-hamburger .mobile-fly-out{display:none}:host .mobile-row .mobile-hamburger input:checked~wink-icon.open{display:none}:host .mobile-row .mobile-hamburger input:checked~wink-icon.close{display:block}:host .mobile-row .mobile-hamburger input:checked~.mobile-fly-out{display:flex;flex-direction:column;justify-content:space-between;position:fixed;top:0;left:0;right:0;bottom:0;z-index:200;animation:growDown 300ms ease-in-out forwards;transform-origin:top right;background:var(--semantic-color-background-surface-subtle-default);padding:2.4rem 1.6rem;overflow:auto;margin-top:6.4rem}:host .mobile-row .mobile-hamburger input:checked~.mobile-fly-out .mobile-fly-out-top{display:grid;grid-auto-flow:column;overflow-x:hidden;overflow-y:auto;isolation:isolate}:host .mobile-row .mobile-hamburger input:checked~.mobile-fly-out .mobile-fly-out-top>*{grid-area:1/1/2/2;background-color:#f8f8f8}:host .mobile-row .mobile-hamburger input:checked~.mobile-fly-out .mobile-fly-out-top-main{display:flex;flex-direction:column;gap:2.4rem;position:relative;overflow:auto;animation:1s fadeIn;animation-fill-mode:forwards;visibility:hidden}:host .mobile-row .mobile-hamburger input:checked~.mobile-fly-out .mobile-fly-out-top-sub-nav{z-index:1;transform:translateX(110%);transition:0.3s}:host .mobile-row .mobile-hamburger input:checked~.mobile-fly-out .mobile-fly-out-top-sub-nav[open]{transform:translateX(0%)}:host .mobile-row .mobile-hamburger input:checked~.mobile-fly-out .mobile-fly-out-bottom{display:flex;flex-direction:row;gap:1.6rem;animation:1s fadeIn;animation-fill-mode:forwards;visibility:hidden}@keyframes growDown{0%{transform:scaleY(0)}80%{transform:scaleY(1.1)}100%{transform:scaleY(1)}}@keyframes fadeIn{0%{opacity:0}100%{visibility:visible;opacity:1}}:host .mobile-row ::slotted([slot=mobile-brand]){z-index:500}:host .top-row,:host .bottom-row{display:none}:host .top-row,:host .bottom-row,:host .mobile-row{justify-content:space-between;gap:calc(var(--semantic-spacing-xs) * 1rem)}:host .flyout-container{display:contents}@media only screen and (min-width: 48.0625em){:host .flyout-container{display:grid;position:absolute;top:100%;left:0;right:0;max-width:113.2rem;background:var(--semantic-color-background-canvas-default);transition:all 0.3s ease}:host .flyout-container>::slotted([slot=flyout]){grid-area:1/1/2/2}:host .flyout-container::after{content:\"\";position:absolute;width:100vw;height:100%;left:50%;top:var(--after-top, 0);transform:translateX(-50%);background:var(--semantic-color-background-canvas-default);border-bottom:0.1rem solid var(--semantic-color-border-subtle);z-index:var(--pannel-after-z-index, -3)}}:host ::slotted([slot=main-navigation]),:host ::slotted([slot=customer-orientation]){margin-right:auto}:host ::slotted([slot=search]){margin-left:auto}@media only screen and (min-width: 64em){:host ::slotted([slot=search]){width:160px}}:host ::slotted([slot=brand]){padding:calc(var(--semantic-spacing-xs) * 1rem) 0}@media only screen and (min-width: 64em){:host{--wink-logo-width:4.8rem}:host ::slotted([slot=main-navigation]){display:contents;margin-right:auto}:host .mobile-row{display:none}:host .top-row,:host .bottom-row{display:flex;align-items:center}}:host(.compact){flex-direction:row-reverse}:host(.compact) .bottom-row{flex-grow:1}:host(.minimal) .mobile-hamburger{position:relative;width:auto;height:auto}:host(.minimal) .mobile-hamburger .mobile-hamburger-button.open{display:none}:host(.minimal) .mobile-hamburger .mobile-fly-out{display:block}";
const WinkGlobalHeaderTelenetStyle0 = globalHeaderTelenetCss;
const GlobalHeader = class {
  constructor(hostRef) {
    (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.hasCustomerOrientation = false;
    this.hasIntentBar = false;
    this.hasCustomerZone = false;
    this.hasLanguage = false;
    this.hasBrand = false;
    this.hasMainNavigation = false;
    this.hasSearch = false;
    this.hasCallToAction = false;
    this.hasTopNavigation = false;
    this.hasMobileCustomerOrientation = false;
    this.hasMobileIntentBar = false;
    this.hasMobileCustomerZone = false;
    this.hasMobileLanguage = false;
    this.hasMobileBrand = false;
    this.hasMobileMainNavigation = false;
    this.hasMobileSearch = false;
    this.hasMobileCallToAction = false;
    this.IsMobileMinimal = false;
    this.hasFlyout = false;
    this.hasMobileFlyout = false;
    this.isSubNavOpen = false;
  }
  get host() {
    return (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.g)(this);
  }
  handleMainNavigationItemClicked(event) {
    if (this.host.querySelector(`[slot="mobile-flyout"][flyout-id="${event.detail.index}"]`)) {
      this.isSubNavOpen = true;
      return;
    }
    this.isSubNavOpen = false;
  }
  handleFlyoutBackLinkClicked() {
    this.isSubNavOpen = false;
  }
  componentWillLoad() {
    this.hasCustomerOrientation = !!this.host.querySelector('[slot="customer-orientation"]');
    this.hasIntentBar = !!this.host.querySelector('[slot="intent-bar"]');
    this.hasCustomerZone = !!this.host.querySelector('[slot="customer-zone"]');
    this.hasLanguage = !!this.host.querySelector('[slot="language"]');
    this.hasBrand = !!this.host.querySelector('[slot="brand"]');
    this.hasMainNavigation = !!this.host.querySelector('[slot="main-navigation"]');
    this.hasSearch = !!this.host.querySelector('[slot="search"]');
    this.hasCallToAction = !!this.host.querySelector('[slot="call-to-action"]');
    this.hasMobileCustomerOrientation = !!this.host.querySelector('[slot="mobile-customer-orientation"]');
    this.hasMobileIntentBar = !!this.host.querySelector('[slot="mobile-intent-bar"]');
    this.hasMobileCustomerZone = !!this.host.querySelector('[slot="mobile-customer-zone"]');
    this.hasMobileLanguage = !!this.host.querySelector('[slot="mobile-language"]');
    this.hasMobileBrand = !!this.host.querySelector('[slot="mobile-brand"]');
    this.hasMobileMainNavigation = !!this.host.querySelector('[slot="mobile-main-navigation"]');
    this.hasMobileSearch = !!this.host.querySelector('[slot="mobile-search"]');
    this.hasMobileCallToAction = !!this.host.querySelector('[slot="mobile-call-to-action"]');
    this.hasFlyout = !!this.host.querySelector('[slot="flyout"]');
    this.hasMobileFlyout = !!this.host.querySelector('[slot="mobile-flyout"]');
    this.hasTopNavigation = this.hasCustomerOrientation || this.hasIntentBar || this.hasCustomerZone;
    this.IsMobileMinimal = this.hasMobileLanguage && !this.hasMobileCustomerOrientation && !this.hasMobileIntentBar && !this.hasMobileCustomerZone && !this.hasMobileMainNavigation && !this.hasMobileSearch && !this.hasMobileCallToAction;
  }
  render() {
    return (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.H, {
      key: 'c1cce354d43a28632479da8ed8722a8eb71d4887',
      class: {
        compact: !this.hasTopNavigation,
        minimal: this.IsMobileMinimal
      }
    }, this.hasTopNavigation && (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: "top-row"
    }, this.hasCustomerOrientation && (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", {
      name: "customer-orientation"
    }), this.hasIntentBar && (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", {
      name: "intent-bar"
    }), this.hasCustomerZone && (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", {
      name: "customer-zone"
    }), this.hasLanguage && (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", {
      name: "language"
    })), (this.hasBrand || this.hasMainNavigation || this.hasSearch || this.hasCallToAction) && (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: "bottom-row"
    }, this.hasBrand && (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", {
      name: "brand"
    }), this.hasMainNavigation && (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", {
      name: "main-navigation"
    }), this.hasSearch && (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", {
      name: "search"
    }), this.hasCallToAction && (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", {
      name: "call-to-action"
    }), !this.hasTopNavigation && this.hasLanguage && (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", {
      name: "language"
    }), this.hasFlyout && (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: "flyout-container"
    }, (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", {
      name: "flyout"
    }))), this.hasMobileBrand && (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: "mobile-row"
    }, this.hasMobileBrand && (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", {
      name: "mobile-brand"
    }), (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: "mobile-row-right"
    }, this.hasMobileCustomerZone && (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", {
      name: "mobile-customer-zone"
    }), this.hasMobileSearch && (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", {
      name: "mobile-search"
    }), (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: "mobile-hamburger"
    }, !this.IsMobileMinimal && (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("input", {
      type: "checkbox",
      class: "mobile-hamburger-button"
    }), (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("wink-icon", {
      appearance: "transparent",
      icon: "hamburger-menu",
      size: "md",
      class: "mobile-hamburger-button open"
    }), (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("wink-icon", {
      appearance: "secondary",
      icon: "cross",
      size: "md",
      class: "mobile-hamburger-button close"
    }), (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: "mobile-fly-out"
    }, (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: "mobile-fly-out-top"
    }, (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: "mobile-fly-out-top-main"
    }, this.hasMobileMainNavigation && (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", {
      name: "mobile-main-navigation"
    }), this.hasMobileCallToAction && (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", {
      name: "mobile-call-to-action"
    }), this.hasMobileIntentBar && (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", {
      name: "mobile-intent-bar"
    })), (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: "mobile-fly-out-top-sub-nav",
      open: this.isSubNavOpen
    }, this.hasMobileFlyout && (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", {
      name: "mobile-flyout"
    }))), (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: "mobile-fly-out-bottom"
    }, this.hasMobileCustomerOrientation && (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", {
      name: "mobile-customer-orientation"
    }), this.hasMobileLanguage && (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", {
      name: "mobile-language"
    })))))));
  }
};
GlobalHeader.style = {
  base: WinkGlobalHeaderBaseStyle0,
  telenet: WinkGlobalHeaderTelenetStyle0
};


/***/ })

}])
//# sourceMappingURL=libs_foundation_wink_dist_dist_esm_wink-global-header_entry_js.js.map