(self["webpackChunktopup_mfe"] = self["webpackChunktopup_mfe"] || []).push([["libs_foundation_wink_dist_dist_esm_wink-navigation-list-item_entry_js"],{

/***/ 79772:
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

/***/ 28636:
/*!*******************************************************************************!*\
  !*** ./libs/foundation/wink/dist/dist/esm/wink-navigation-list-item.entry.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   wink_navigation_list_item: () => (/* binding */ NavigationListItem)
/* harmony export */ });
/* harmony import */ var _index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-4268ac0c.js */ 60734);
/* harmony import */ var _targets_types_ef2f173a_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./targets.types-ef2f173a.js */ 79772);


const navigationListItemBaseCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host .navigation-list-item{color:var(--semantic-color-text-default);text-decoration:none}";
const WinkNavigationListItemBaseStyle0 = navigationListItemBaseCss;
const navigationListItemTelenetCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host .navigation-list-item{color:var(--semantic-color-text-default);text-decoration:none}";
const WinkNavigationListItemTelenetStyle0 = navigationListItemTelenetCss;
const NavigationListItem = class {
  constructor(hostRef) {
    (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.href = '';
    this.target = _targets_types_ef2f173a_js__WEBPACK_IMPORTED_MODULE_1__.T.self;
  }
  render() {
    return (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.H, {
      key: '3f6fd805c8fe113c745e6577aee2cc0ff62ee7eb'
    }, (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("a", {
      key: '6c2d7e4f21f8784f08bb6fdec6c15e6affde549d',
      class: "navigation-list-item",
      href: this.href,
      target: this.target
    }, (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", {
      key: '01dbf9dfac8d7f7cfc99c1363db49eef86f1d7b9'
    })));
  }
};
NavigationListItem.style = {
  base: WinkNavigationListItemBaseStyle0,
  telenet: WinkNavigationListItemTelenetStyle0
};


/***/ })

}])
//# sourceMappingURL=libs_foundation_wink_dist_dist_esm_wink-navigation-list-item_entry_js.js.map