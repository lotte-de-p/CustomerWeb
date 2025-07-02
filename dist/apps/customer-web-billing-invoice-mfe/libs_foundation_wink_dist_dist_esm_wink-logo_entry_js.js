(self["webpackChunkcustomer_web_billing_invoice_mfe"] = self["webpackChunkcustomer_web_billing_invoice_mfe"] || []).push([["libs_foundation_wink_dist_dist_esm_wink-logo_entry_js"],{

/***/ 71717:
/*!**************************************************************************!*\
  !*** ./libs/foundation/wink/dist/dist/esm/breakpoints.types-ac47967d.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ BREAKPOINTS)
/* harmony export */ });
const BREAKPOINTS = {
  mobile: '(max-width: 576px)',
  tablet: '(max-width: 769px)'
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

/***/ 19143:
/*!***************************************************************!*\
  !*** ./libs/foundation/wink/dist/dist/esm/wink-logo.entry.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   wink_logo: () => (/* binding */ Logo)
/* harmony export */ });
/* harmony import */ var _index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-4268ac0c.js */ 60734);
/* harmony import */ var _breakpoints_types_ac47967d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./breakpoints.types-ac47967d.js */ 71717);
/* harmony import */ var _targets_types_ef2f173a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./targets.types-ef2f173a.js */ 1144);




/* eslint sonarjs/no-duplicate-string: 0 */
const createNewLogo = (desktopSrc, mobileSrc, categoryText, altText) => {
  const logoFolder = '../assets/shared/logos/' + categoryText + '/';
  return {
    desktop: desktopSrc && logoFolder + desktopSrc,
    mobile: mobileSrc && logoFolder + mobileSrc,
    category: categoryText,
    alt: altText
  };
};
const logos = {
  'telenet-yellow': createNewLogo('telenet-yellow.svg', 'telenet-yellow.svg', 'telenet', 'logo telenet'),
  'telenet-color': createNewLogo('telenet-color.svg', undefined, 'telenet', 'logo telenet'),
  'telenet-brussels-yellow': createNewLogo('telenet-brussels-yellow.svg', undefined, 'telenet', 'logo telenet'),
  'telenet-brussels-color': createNewLogo('telenet-brussels-color.svg', undefined, 'telenet', 'logo telenet'),
  'telenet-brussels-white': createNewLogo('telenet-brussels-white.svg', undefined, 'telenet', 'logo telenet'),
  'telenet-brussels-yellow-sm': createNewLogo('telenet-brussels-yellow-sm.svg', undefined, 'telenet', 'logo telenet'),
  'telenet-brussels-color-sm': createNewLogo('telenet-brussels-color-sm.svg', undefined, 'telenet', 'logo telenet'),
  'telenet-brussels-white-sm': createNewLogo('telenet-brussels-white-sm.svg', undefined, 'telenet', 'logo telenet'),
  'telenet-brussels-yellow-vertical': createNewLogo('telenet-brussels-yellow-vertical.svg', undefined, 'telenet', 'logo telenet'),
  'telenet-brussels-color-vertical': createNewLogo('telenet-brussels-color-vertical.svg', undefined, 'telenet', 'logo telenet'),
  'telenet-brussels-white-vertical': createNewLogo('telenet-brussels-white-vertical.svg', undefined, 'telenet', 'logo telenet'),
  'telenet-business-yellow': createNewLogo('telenet-business-yellow.svg', undefined, 'telenet', 'logo telenet business'),
  'telenet-business-color': createNewLogo('telenet-business-color.svg', undefined, 'telenet', ' logo telenet business'),
  'telenet-business-white': createNewLogo('telenet-business-white.svg', undefined, 'telenet', ' logo telenet business '),
  'telenet-business-yellow-sm': createNewLogo('telenet-business-yellow-sm.svg', undefined, 'telenet', 'logo telenet business'),
  'telenet-business-color-sm': createNewLogo('telenet-business-color-sm.svg', undefined, 'telenet', 'logo telenet business'),
  'telenet-business-white-sm': createNewLogo('telenet-business-white-sm.svg', undefined, 'telenet', 'logo telenet business '),
  'telenet-business-yellow-vertical': createNewLogo('telenet-business-yellow-vertical.svg', undefined, 'telenet', 'logo telenet business'),
  'telenet-business-color-vertical': createNewLogo('telenet-business-color-vertical.svg', undefined, 'telenet', 'logo telenet business'),
  'telenet-business-white-vertical': createNewLogo('telenet-business-white-vertical.svg', undefined, 'telenet', 'logo telenet business '),
  'telenet-business-brussels-yellow': createNewLogo('telenet-business-brussels-yellow.svg', undefined, 'telenet', 'logo telenet business'),
  'telenet-business-brussels-color': createNewLogo('telenet-business-brussels-color.svg', undefined, 'telenet', 'logo telenet business'),
  'telenet-business-brussels-white': createNewLogo('telenet-business-brussels-white.svg', undefined, 'telenet', 'logo telenet business '),
  'telenet-business-brussels-yellow-vertical': createNewLogo('telenet-business-brussels-yellow-vertical.svg', undefined, 'telenet', 'logo telenet business'),
  'telenet-business-brussels-color-vertical': createNewLogo('telenet-business-brussels-color-vertical.svg', undefined, 'telenet', 'logo telenet business'),
  'telenet-business-brussels-white-vertical': createNewLogo('telenet-business-brussels-white-vertical.svg', undefined, 'telenet', 'logo telenet business '),
  'telenet-business-partner-yellow': createNewLogo('telenet-business-partner-yellow.svg', undefined, 'telenet', 'logo telenet business partner'),
  'telenet-business-partner-color': createNewLogo('telenet-business-partner-color.svg', undefined, 'telenet', 'logo telenet business partner'),
  'telenet-business-partner-white': createNewLogo('telenet-business-partner-white.svg', undefined, 'telenet', 'logo telenet business partner '),
  'telenet-netweters-yellow': createNewLogo('telenet-netweters-yellow.svg', undefined, 'telenet', 'logo de netweter'),
  'telenet-netweters-color': createNewLogo('telenet-netweters-color.svg', undefined, 'telenet', 'logo de netweters'),
  'telenet-netweters-white': createNewLogo('telenet-netweters-white.svg', undefined, 'telenet', 'logo de netweters '),
  'telenet-netweters-yellow-vertical': createNewLogo('telenet-netweters-yellow-vertical.svg', undefined, 'telenet', 'logo de netweters'),
  'telenet-netweters-color-vertical': createNewLogo('telenet-netweters-color-vertical.svg', undefined, 'telenet', 'logo de netweters'),
  'telenet-netweters-white-vertical': createNewLogo('telenet-netweters-white-vertical.svg', undefined, 'telenet', 'logo de netweters '),
  'telenet-tv-yellow': createNewLogo('telenet-tv-yellow.svg', undefined, 'telenet', 'logo telenet-tv'),
  'telenet-tv-flow-yellow': createNewLogo('telenet-tv-flow-yellow.svg', undefined, 'telenet', 'logo telenet-tv flow'),
  'telenet-tv-flow-white': createNewLogo('telenet-tv-flow-white.svg', undefined, 'telenet', 'logo telenet-tv flow '),
  'telenet-tv-iconic-yellow': createNewLogo('telenet-tv-iconic-yellow.svg', undefined, 'telenet', 'logo telenet-tv iconic'),
  'telenet-tv-iconic-white': createNewLogo('telenet-tv-iconic-white.svg', undefined, 'telenet', 'logo telenet-tv iconic '),
  'telenet-tv-yellow-yellow': createNewLogo('telenet-tv-yelo-yellow.svg', undefined, 'telenet', 'logo telenet-tv yellow'),
  'telenet-tv-yellow-white': createNewLogo('telenet-tv-yelo-white.svg', undefined, 'telenet', 'logo telenet-tv yellow '),
  base: createNewLogo('base.svg', undefined, 'base', 'logo base'),
  'base-white': createNewLogo('base-white.svg', undefined, 'base', 'logo base'),
  'base-alt': createNewLogo('base-alt.svg', undefined, 'base', 'logo base'),
  'base-alt-white': createNewLogo('base-alt-white.svg', undefined, 'base', 'logo base'),
  goplay: createNewLogo('goplay.svg', undefined, 'entertainment-play', 'logo goplay'),
  play4: createNewLogo('play4.svg', undefined, 'entertainment-play', 'logo play4'),
  play5: createNewLogo('play5.svg', undefined, 'entertainment-play', 'logo play5'),
  play6: createNewLogo('play6.svg', undefined, 'entertainment-play', 'logo play6'),
  play7: createNewLogo('play7.svg', undefined, 'entertainment-play', 'logo play7'),
  'playmore-light': createNewLogo('playmore-light.svg', undefined, 'entertainment-play', 'logo playmore'),
  playmore: createNewLogo('playmore.svg', undefined, 'entertainment-play', 'logo playmore'),
  'playmore-telenet-light': createNewLogo('playmore-telenet-light.svg', undefined, 'entertainment-play', 'logo playmore + telenet'),
  'playmore-telenet': createNewLogo('playmore-telenet.svg', undefined, 'entertainment-play', 'logo playmore + telenet'),
  'playsports-light': createNewLogo('playsports-light.svg', undefined, 'entertainment-play', 'logo playsports + telenet'),
  playsports: createNewLogo('playsports.svg', undefined, 'entertainment-play', 'logo playsports + telenet'),
  'playsports-light-sm': createNewLogo('playsports-light-sm.svg', undefined, 'entertainment-play', 'logo playsports + telenet'),
  'playsports-sm': createNewLogo('playsports.svg', undefined, 'entertainment-play', 'logo playsports + telenet'),
  'playsports-telenet-light': createNewLogo('playsports-telenet-light.svg', undefined, 'entertainment-play', 'logo playsports + telenet'),
  'playsports-telenet': createNewLogo('playsports-telenet.svg', undefined, 'entertainment-play', 'logo playsports + telenet'),
  'playsports-telenet-light-sm': createNewLogo('playsports-telenet-light-sm.svg', undefined, 'entertainment-play', 'logo playsports + telenet'),
  'playsports-telenet-sm': createNewLogo('playsports-telenet-sm.svg', undefined, 'entertainment-play', 'logo playsports + telenet '),
  'playsportsopen-light': createNewLogo('playsportsopen-light.svg', undefined, 'entertainment-play', 'logo playsportsopen'),
  playsportsopen: createNewLogo('playsportsopen.svg', undefined, 'entertainment-play', 'logo playsportsopen'),
  'playsportsopen-light-sm': createNewLogo('playsportsopen-light-sm.svg', undefined, 'entertainment-play', 'logo playsportsopen'),
  'playsportsopen-sm': createNewLogo('playsportsopen-sm.svg', undefined, 'entertainment-play', 'logo playsportsopen- + telenet'),
  'playsportsopen-telenet-light': createNewLogo('playsportsopen-telenet-light.svg', undefined, 'entertainment-play', 'logo playsportsopen + telenet'),
  'playsportsopen-telenet': createNewLogo('playsportsopen-telenet.svg', undefined, 'entertainment-play', 'logo playsportsopen + telenet'),
  'playsportsopen-telenet-light-sm': createNewLogo('playsportsopen-telenet-light-sm.svg', undefined, 'entertainment-play', 'logo playsportsopen + telenet'),
  'playsportsopen-telenet-sm': createNewLogo('playsportsopen-telenet-sm.svg', undefined, 'entertainment-play', 'logo playsportsopen + telenet'),
  netflix: createNewLogo('netflix.svg', undefined, 'entertainment-streaming', 'logo netflix'),
  primevideo: createNewLogo('primevideo.svg', undefined, 'entertainment-streaming', 'logo primevideo'),
  'primevideo-white': createNewLogo('primevideo-white.svg', undefined, 'entertainment-streaming', 'logo primevideo'),
  'primevideo-black': createNewLogo('primevideo-black.svg', undefined, 'entertainment-streaming', 'logo primevideo'),
  streamz: createNewLogo('streamz.svg', undefined, 'entertainment-streaming', 'logo streamz'),
  'streamz-sm': createNewLogo('streamz-sm.svg', undefined, 'entertainment-streaming', 'logo streamz'),
  'streamz-white': createNewLogo('streamz-white.svg', undefined, 'entertainment-streaming', 'logo streamz'),
  'streamz-white-sm': createNewLogo('streamz-white-sm.svg', undefined, 'entertainment-streaming', 'logo streamz'),
  'streamz+': createNewLogo('streamz+.svg', undefined, 'entertainment-streaming', 'logo streamz plus'),
  'streamz+-sm': createNewLogo('streamz+-sm.svg', undefined, 'entertainment-streaming', 'logo streamz plus'),
  'streamz+-white': createNewLogo('streamz+-white.svg', undefined, 'entertainment-streaming', 'logo streamz plus'),
  'streamz+-white-sm': createNewLogo('streamz+-white-sm.svg', undefined, 'entertainment-streaming', 'logo streamz plus'),
  'streamz-basic': createNewLogo('streamz-basic.svg', undefined, 'entertainment-streaming', 'logo streamz basic'),
  'streamz-basic-vertical': createNewLogo('streamz-basic-vertical.svg', undefined, 'entertainment-streaming', 'logo streamz basic'),
  'streamz-basic-white': createNewLogo('streamz-basic-white.svg', undefined, 'entertainment-streaming', 'logo streamz basic '),
  'streamz-basic-vertical-white': createNewLogo('streamz-basic-vertical-white.svg', undefined, 'entertainment-streaming', 'logo streamz basic'),
  'streamz-premium': createNewLogo('streamz-premium.svg', undefined, 'entertainment-streaming', 'logo streamz premium'),
  'streamz-premium-vertical': createNewLogo('streamz-premium-vertical.svg', undefined, 'entertainment-streaming', 'logo streamz premium'),
  'streamz-premium-white': createNewLogo('streamz-premium-white.svg', undefined, 'entertainment-streaming', 'logo streamz premium'),
  'streamz-premium-vertical-white': createNewLogo('streamz-premium-vertical-white.svg', undefined, 'entertainment-streaming', 'logo streamz premium'),
  'streamz-premium-plus': createNewLogo('streamz-premium-plus.svg', undefined, 'entertainment-streaming', 'logo streamz premium-plus'),
  'streamz-premium-plus-vertical': createNewLogo('streamz-premium-plus-vertical.svg', undefined, 'entertainment-streaming', 'logo streamz premium-plus'),
  'streamz-premium-plus-white': createNewLogo('streamz-premium-plus-white.svg', undefined, 'entertainment-streaming', 'logo streamz premium-plus'),
  'streamz-premium-plus-vertical-white': createNewLogo('streamz-premium-plus-vertical-white.svg', undefined, 'entertainment-streaming', 'logo streamz premium-plus'),
  hbo: createNewLogo('hbo.svg', undefined, 'entertainment-streaming', 'logo hbo'),
  'hbo-white': createNewLogo('hbo-white.svg', undefined, 'entertainment-streaming', 'logo hbo'),
  'disney+': createNewLogo('disney+.svg', undefined, 'entertainment-streaming', 'logo disney+'),
  'disney+-white': createNewLogo('disney+-white.svg', undefined, 'entertainment-streaming', 'logo disney+'),
  'disney+-white-gradient': createNewLogo('disney+-white-gradient.svg', undefined, 'entertainment-streaming', 'logo disney+')
};
const logoBaseCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host{display:block}:host .not-clickable{pointer-events:none}:host a{display:block}:host a:focus,:host a:focus-visible{outline-offset:0.1rem;outline:0.2rem solid var(--semantic-color-border-focus);border-radius:0.1rem}:host picture img{display:block;max-width:8rem;width:var(--wink-logo-width, 100%);height:auto}";
const WinkLogoBaseStyle0 = logoBaseCss;
const logoTelenetCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host{display:block}:host .not-clickable{pointer-events:none}:host a{display:block}:host a:focus,:host a:focus-visible{outline-offset:0.1rem;outline:0.2rem solid var(--semantic-color-border-focus);border-radius:0.1rem}:host picture img{display:block;max-width:8rem;width:var(--wink-logo-width, 100%);height:auto}";
const WinkLogoTelenetStyle0 = logoTelenetCss;
const Logo = class {
  constructor(hostRef) {
    (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.alt = '';
    this.href = '';
    this.target = _targets_types_ef2f173a_js__WEBPACK_IMPORTED_MODULE_2__.T.self;
    this.appearance = 'telenet-yellow';
  }
  getSrcDesktop() {
    return logos[this.appearance]['desktop'] && (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.d)(logos[this.appearance]['desktop']);
  }
  getSrcMobile() {
    return logos[this.appearance]['mobile'] && (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.d)(logos[this.appearance]['mobile']);
  }
  altText() {
    return this.alt !== 'Inspect element to check' && this.alt || logos[this.appearance]['alt'];
  }
  renderLogoImage = (srcDesktop, srcMobile, alt) => {
    return (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("picture", null, srcMobile && (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("source", {
      srcSet: srcMobile,
      media: _breakpoints_types_ac47967d_js__WEBPACK_IMPORTED_MODULE_1__.B.mobile
    }), (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("img", {
      src: srcDesktop,
      alt: alt
    }));
  };
  render() {
    return (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.H, {
      key: 'af3037b2e099d2cae8367abf1e6f37fce1a3ee39'
    }, this.href.length > 0 ? (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("a", {
      href: this.href,
      target: this.target
    }, this.renderLogoImage(this.getSrcDesktop(), this.getSrcMobile(), this.altText())) : this.renderLogoImage(this.getSrcDesktop(), this.getSrcMobile(), this.altText()));
  }
};
Logo.style = {
  base: WinkLogoBaseStyle0,
  telenet: WinkLogoTelenetStyle0
};


/***/ })

}])
//# sourceMappingURL=libs_foundation_wink_dist_dist_esm_wink-logo_entry_js.js.map