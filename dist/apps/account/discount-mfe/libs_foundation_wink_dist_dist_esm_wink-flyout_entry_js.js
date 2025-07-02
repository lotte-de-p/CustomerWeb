(self["webpackChunkdiscount_mfe"] = self["webpackChunkdiscount_mfe"] || []).push([["libs_foundation_wink_dist_dist_esm_wink-flyout_entry_js"],{

/***/ 47355:
/*!*****************************************************************************!*\
  !*** ./libs/foundation/wink/dist/dist/esm/media-query-detector-52eaefcd.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ MediaQueryDetector)
/* harmony export */ });
const BREAKPOINTS = {
  SM: 576,
  MD: 769,
  LG: 1192
};
const HEADER_BREAKPOINTS = {
  MD: 1024
};
const BREAKPOINT_TYPES = {
  DEFAULT: BREAKPOINTS,
  HEADER: HEADER_BREAKPOINTS
};
class MediaQueryDetector {
  static mediaQueryMatch(size, minOrMax, breakpointType = 'DEFAULT') {
    const breakpoints = BREAKPOINT_TYPES[breakpointType];
    const pixels = minOrMax === 'min' ? breakpoints[size] : breakpoints[size] - 1;
    return window.matchMedia(`(${minOrMax}-width: ${pixels}px)`).matches;
  }
  static get isFromSm() {
    return MediaQueryDetector.mediaQueryMatch('SM', 'min');
  }
  static get isFromMd() {
    return MediaQueryDetector.mediaQueryMatch('MD', 'min');
  }
  static get isFromLg() {
    return MediaQueryDetector.mediaQueryMatch('LG', 'min');
  }
  static get isUntilSm() {
    return MediaQueryDetector.mediaQueryMatch('SM', 'max');
  }
  static get isUntilMd() {
    return MediaQueryDetector.mediaQueryMatch('MD', 'max');
  }
  static get isUntilLg() {
    return MediaQueryDetector.mediaQueryMatch('LG', 'max');
  }
  static get isFromMdHeader() {
    return MediaQueryDetector.mediaQueryMatch('MD', 'min', 'HEADER');
  }
  static get isUntilMdHeader() {
    return MediaQueryDetector.mediaQueryMatch('MD', 'max', 'HEADER');
  }
}


/***/ }),

/***/ 2362:
/*!*****************************************************************!*\
  !*** ./libs/foundation/wink/dist/dist/esm/wink-flyout.entry.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   wink_flyout: () => (/* binding */ Flyout)
/* harmony export */ });
/* harmony import */ var _index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-4268ac0c.js */ 60734);
/* harmony import */ var _media_query_detector_52eaefcd_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./media-query-detector-52eaefcd.js */ 47355);


const flyoutBaseCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}@keyframes fadeIn{from{opacity:0}to{opacity:1}}:host{display:grid;grid-template-rows:var(--host-grid-template-rows, 0fr);background:var(--semantic-color-background-canvas-default);overflow:hidden;opacity:var(--host-opacity, 0);z-index:var(--host-z-index, 0);transition:all 0.3s ease}@media only screen and (max-width: calc(64em - 1px)){:host{display:none}}@media only screen and (max-width: calc(64em - 1px)){:host .container{display:contents}}@media only screen and (min-width: 64em){:host .container{min-height:0}}:host .content{display:grid;gap:calc(var(--semantic-spacing-lg) * 1rem);grid-auto-columns:1fr}@media only screen and (min-width: 64em){:host .content{grid-auto-flow:column;padding:4rem 0 1.6rem}}:host wink-link[appearance=menu-back]{display:block;position:sticky;top:0;background-color:#f8f8f8}@media only screen and (min-width: 64em){:host wink-link[appearance=menu-back]{display:none}}:host([open]){--host-grid-template-rows:1fr;--host-opacity:1;--host-z-index:1}@media only screen and (max-width: calc(64em - 1px)){:host([open]){display:contents}}";
const WinkFlyoutBaseStyle0 = flyoutBaseCss;
const flyoutTelenetCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}@keyframes fadeIn{from{opacity:0}to{opacity:1}}:host{display:grid;grid-template-rows:var(--host-grid-template-rows, 0fr);background:var(--semantic-color-background-canvas-default);overflow:hidden;opacity:var(--host-opacity, 0);z-index:var(--host-z-index, 0);transition:all 0.3s ease}@media only screen and (max-width: calc(64em - 1px)){:host{display:none}}@media only screen and (max-width: calc(64em - 1px)){:host .container{display:contents}}@media only screen and (min-width: 64em){:host .container{min-height:0}}:host .content{display:grid;gap:calc(var(--semantic-spacing-lg) * 1rem);grid-auto-columns:1fr}@media only screen and (min-width: 64em){:host .content{grid-auto-flow:column;padding:4rem 0 1.6rem}}:host wink-link[appearance=menu-back]{display:block;position:sticky;top:0;background-color:#f8f8f8}@media only screen and (min-width: 64em){:host wink-link[appearance=menu-back]{display:none}}:host([open]){--host-grid-template-rows:1fr;--host-opacity:1;--host-z-index:1}@media only screen and (max-width: calc(64em - 1px)){:host([open]){display:contents}}";
const WinkFlyoutTelenetStyle0 = flyoutTelenetCss;
const Flyout = class {
  constructor(hostRef) {
    (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.flyoutBackLinkClicked = (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "flyoutBackLinkClicked", 7);
    this.flyoutId = undefined;
    this.activeId = undefined;
    this.backLabel = undefined;
    this.isFlyoutOpen = false;
    this.focusableElements = [];
    this.focusedElementTracker = 0;
  }
  get host() {
    return (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.g)(this);
  }
  flyoutBackLinkClicked;
  handleMainNavigationItemClicked(event) {
    this.activeId = event.detail.index;
    this.backLabel = event.detail.name;
    this.isFlyoutOpen = this.flyoutId === this.activeId;
    if (event.detail.eventType === 'mouse') {
      return;
    }
    if (this.shouldFetchFocusableElements()) {
      this.getAllFocusableElements();
    } else {
      this.resetFocusableElements();
    }
    this.focusOnElement();
  }
  shouldFetchFocusableElements() {
    return !this.focusableElements.length && _media_query_detector_52eaefcd_js__WEBPACK_IMPORTED_MODULE_1__.M.isFromMdHeader && this.isFlyoutOpen && !this.host.getAttribute('slot')?.includes('mobile');
  }
  resetFocusableElements() {
    this.focusableElements = [];
    this.focusedElementTracker = 0;
  }
  focusOnElement() {
    if (this.focusableElements.length) {
      this.focusableElements[this.focusedElementTracker].focus();
    }
  }
  getAllFocusableElements() {
    const focusableQuery = 'a, button, [tabindex]:not([tabindex="-1"])';
    this.host.querySelectorAll('wink-navigation-list')?.forEach(list => {
      list.shadowRoot.querySelectorAll('wink-navigation-list-item').forEach(item => {
        this.focusableElements.push(item.shadowRoot.querySelector(focusableQuery));
      });
    });
  }
  handleKeyDown(e) {
    const {
      code,
      shiftKey
    } = e;
    const {
      length
    } = this.focusableElements;
    if (code === 'Escape') {
      this.closeFlyout();
      this.resetFlyout();
    }
    if (code === 'ArrowDown' || code === 'ArrowUp' || code === 'Tab') {
      e.preventDefault();
      this.focusedElementTracker += code === 'ArrowDown' || code === 'Tab' && !shiftKey ? 1 : -1;
      this.focusedElementTracker = (this.focusedElementTracker + length) % length;
      this.focusableElements[this.focusedElementTracker].focus();
    }
  }
  resetFlyout() {
    this.activeId = undefined;
    this.isFlyoutOpen = false;
    this.focusableElements = [];
    this.focusedElementTracker = 0;
  }
  closeFlyout() {
    this.resetFlyout();
    this.flyoutBackLinkClicked?.emit({
      eventType: 'keyboard'
    });
  }
  handleFlyoutMouseLeave() {
    if (_media_query_detector_52eaefcd_js__WEBPACK_IMPORTED_MODULE_1__.M.isUntilMdHeader) {
      return;
    }
    this.resetFlyout();
    this.flyoutBackLinkClicked?.emit({
      eventType: 'mouse'
    });
  }
  render() {
    return (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.H, {
      key: 'b3f8de09ea87e0737c3e2afc3e1187a048a80e1a',
      id: `flyout-${this.flyoutId}`,
      tabindex: "-1",
      "aria-label": this.flyoutId === this.activeId ? this.backLabel : ' ',
      onMouseLeave: this.handleFlyoutMouseLeave.bind(this),
      open: this.isFlyoutOpen
    }, (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      key: '05db9b329e56b761af5d89c94c2b8f4232f3da69',
      class: "container"
    }, (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      key: '029ad3b6f9e9209d502a89316276604c35f56e6b',
      class: "content"
    }, (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("wink-link", {
      key: '06a63c15351212b1bd808ad3f3e1cc36930d19f3',
      onClick: this.closeFlyout.bind(this),
      appearance: "menu-back",
      icon: "arrow-left",
      size: "caption-bold",
      "icon-position": "left",
      "icon-appearance": "default",
      "is-disabled": "false",
      href: "#"
    }, (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("wink-icon", {
      key: '4fb7df087966f6cb30f105f69c021c777d55c997',
      slot: "link-icon",
      appearance: "default",
      icon: "arrow-left",
      size: "md",
      exportparts: "icon, icon-arrow-left"
    }), this.backLabel), Array.from({
      length: 4
    }).map((_, index) => (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", {
      name: `col-${index + 1}`
    })))));
  }
};
Flyout.style = {
  base: WinkFlyoutBaseStyle0,
  telenet: WinkFlyoutTelenetStyle0
};


/***/ })

}])
//# sourceMappingURL=libs_foundation_wink_dist_dist_esm_wink-flyout_entry_js.js.map