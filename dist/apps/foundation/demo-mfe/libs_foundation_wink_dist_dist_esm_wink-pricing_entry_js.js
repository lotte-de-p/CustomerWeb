(self["webpackChunkdemo_mfe"] = self["webpackChunkdemo_mfe"] || []).push([["libs_foundation_wink_dist_dist_esm_wink-pricing_entry_js"],{

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

/***/ 1806:
/*!******************************************************************!*\
  !*** ./libs/foundation/wink/dist/dist/esm/wink-pricing.entry.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   wink_pricing: () => (/* binding */ Pricing)
/* harmony export */ });
/* harmony import */ var _index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-4268ac0c.js */ 60734);
/* harmony import */ var _positions_types_dd2f5ebf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./positions.types-dd2f5ebf.js */ 95172);


const PRICING_TYPES = {
  text: 'text',
  patch: 'patch',
  subtle: 'subtle text'
};
const LANGUAGES = {
  nl: 'NL',
  fr: 'FR',
  en: 'EN'
};
const PRICING_ALIGN = {
  left: _positions_types_dd2f5ebf_js__WEBPACK_IMPORTED_MODULE_1__.P.left,
  center: _positions_types_dd2f5ebf_js__WEBPACK_IMPORTED_MODULE_1__.P.center,
  right: _positions_types_dd2f5ebf_js__WEBPACK_IMPORTED_MODULE_1__.P.right
};
const pricingBaseCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host{display:inline-block}:host .price__price-currency{font-style:normal}:host .pricing__header{font-size:var(--pricing--mobile--desktop--fs, 1.2rem);line-height:var(--pricing--mobile--desktop--lh, 1.6rem);margin-bottom:calc(var(--semantic-spacing-3xs) * 1rem);display:inline-flex;width:100%}@media only screen and (min-width: 48.0625em){:host .pricing__header{font-size:var(--pricing--header--desktop--fs, 1.4rem);line-height:var(--pricing--header--desktop--lh, 2rem)}}:host .pricing__header.price-align__center{justify-content:center}:host .pricing__header.price-align__right{justify-content:flex-end}:host .pricing__header .pricing__starting-from{color:var(--pricing--starting-from, var(--semantic-color-text-subtle));margin-right:calc(var(--semantic-spacing-3xs) * 1rem);display:inline-block}:host .pricing__header .pricing__promo-price{color:var(--pricing--promo-price, var(--semantic-color-text-subtle));display:inline-flex;text-decoration:line-through}:host .pricing__current-price-wrapper{display:flex;align-items:flex-end}:host .pricing__current-price-wrapper.price-align__right,:host .pricing__current-price-wrapper.price-align__center{flex-direction:column}:host .pricing__current-price-wrapper.price-align__right .pricing__price-frequency,:host .pricing__current-price-wrapper.price-align__center .pricing__price-frequency{margin-right:0}:host .pricing__current-price-wrapper.price-align__center{align-items:center}:host .pricing__current-price-wrapper.price-align__right{align-items:flex-end}:host .pricing__current-price-wrapper .pricing__price-value-wrapper{color:var(--price-price-value-color, var(--semantic-color-text-default));font-family:var(--pricing--price-value-wrapper--ff, AkagiProFat);display:inline-flex;align-items:flex-start}:host .pricing__current-price-wrapper .pricing__price-value-wrapper .price__price-currency{font-size:var(--price--price-currency--mobile--fs, 1.6rem);line-height:var(--price--price-currency--mobile--lh, 1.5rem);font-style:normal}@media only screen and (min-width: 48.0625em){:host .pricing__current-price-wrapper .pricing__price-value-wrapper .price__price-currency{font-size:var(--price--price-currency--desktop--fs, 1.8rem);line-height:var(--price--price-currency--desktop--lh, 1.9rem)}}:host .pricing__current-price-wrapper .pricing__price-value-wrapper .price__price-decimal{font-size:var(--price--price-decimal--mobile--fs, 1.6rem);line-height:var(--price--price-decimal--mobile--lh, 1.5rem);font-style:normal}@media only screen and (min-width: 48.0625em){:host .pricing__current-price-wrapper .pricing__price-value-wrapper .price__price-decimal{font-size:var(--price--price-decimal--desktop--fs, 1.8rem);line-height:var(--price--price-decimal--desktop--lh, 1.9rem)}}:host .pricing__current-price-wrapper .pricing__price-value-wrapper .price__price-value{font-size:var(--price--price-value--mobile--fs, 2.8rem);line-height:var(--price--price-value--mobile--lh, 2.8rem);display:inline-flex;align-items:flex-start}@media only screen and (min-width: 48.0625em){:host .pricing__current-price-wrapper .pricing__price-value-wrapper .price__price-value{font-size:var(--price--price-value--desktop--fs, 3.2rem);line-height:var(--price--price-value--desktop--lh, 3.1rem)}}:host .pricing__price-frequency{font-size:var(--pricing--price-frequency--mobile--fs, 1.2rem);line-height:var(--pricing--price-frequency--mobile--lh, 1.6rem)}@media only screen and (min-width: 48.0625em){:host .pricing__price-frequency{font-size:var(--pricing--price-frequency--desktop--fs, 1.4rem);line-height:var(--pricing--price-frequency--desktop--lh, 2rem)}}:host .pricing__price-promo-duration{font-size:var(--pricing--price-promo-duration--mobile--fs, 1.2rem);line-height:var(--pricing--price-promo-duration--mobile--lh, 1.6rem)}@media only screen and (min-width: 48.0625em){:host .pricing__price-promo-duration{font-size:var(--pricing--price-promo-duration--desktop--fs, 1.4rem);line-height:var(--pricing--price-promo-duration--desktop--lh, 2rem)}}:host .pricing__price-frequency{color:var(--price-frequency-color, var(--semantic-color-text-default));margin-left:calc(var(--semantic-spacing-3xs) * 1rem)}:host .pricing__price-promo-duration{color:var(--price-end-color, var(--semantic-color-text-subtle))}:host .currency-after{justify-content:start;flex-direction:row-reverse;gap:calc(var(--semantic-spacing-3xs) * 1rem)}:host .pricing__footer.price-align__center,:host .pricing__footer.price-align__right{display:flex}:host .pricing__footer.price-align__center{justify-content:center}:host .pricing__footer.price-align__right{justify-content:flex-end}:host([appearance=patch]){--pricing--starting-from:#ffffff;--pricing--promo-price:#ffffff;--price-frequency-color:#ffffff;--price-price-value-color:#ffffff;--price-end-color:#ffffff;--pricing--price-promo-price--desktop--fs:1.2rem;--pricing--price-promo-price--desktop--lh:1.6rem;--pricing--price-promo-duration--desktop--fs:1rem;--pricing--price-promo-duration--desktop--lh:1.2rem;display:inline-flex;flex-direction:column;justify-content:center;background-repeat:no-repeat;background-size:cover;background-color:var(--pricing-host-background, #004a47);padding:calc(var(--semantic-spacing-s) * 1rem);aspect-ratio:1/1;min-height:12.8rem;min-width:12.8rem}:host([appearance=patch]) .pricing__header.price-align__center{align-items:center;flex-direction:column}:host([appearance=patch]) .pricing__starting-from{font-family:AkagiProFat}:host([appearance=patch]) .pricing__price-frequency{font-family:AkagiProFat}:host([appearance=\"subtle text\"]){--price--price-value--desktop--fs:1.8rem;--price--price-value--desktop--lh:1.8rem}:host([brand=base]){font-family:AkagiProBook}:host([brand=base][theme=telenet-dark]),:host([brand=base][theme=base-dark]){--pricing--starting-from:#a9a9a9;--pricing--promo-price:#a9a9a9;--price-frequency-color:#ffffff;--price-price-value-color:#ffffff;--price-end-color:#a9a9a9}:host([brand=base][theme=telenet-dark][appearance=patch]),:host([brand=base][theme=base-dark][appearance=patch]){--pricing-host-background:#ffffff;--pricing--starting-from:#111111;--pricing--promo-price:#111111;--price-frequency-color:#111111;--price-price-value-color:#111111;--price-end-color:#111111}:host([brand=base][theme=telenet-light][appearance=\"subtle text\"]),:host([brand=base][theme=base-light][appearance=\"subtle text\"]),:host([brand=base][theme=telenet-dark][appearance=\"subtle text\"]),:host([brand=base][theme=base-dark][appearance=\"subtle text\"]){--price--price-value--desktop--fs:1.8rem;--price--price-value--desktop--lh:1.8rem;--pricing--price-value-wrapper--ff:AkagiProBold}";
const WinkPricingBaseStyle0 = pricingBaseCss;
const pricingTelenetCss = ".sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.sr-only{position:absolute;width:0.1rem;height:0.1rem;padding:0;margin:-0.1rem;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host{display:inline-block}:host .price__price-currency{font-style:normal}:host .pricing__header{font-size:var(--pricing--mobile--desktop--fs, 1.2rem);line-height:var(--pricing--mobile--desktop--lh, 1.6rem);margin-bottom:calc(var(--semantic-spacing-3xs) * 1rem);display:inline-flex;width:100%}@media only screen and (min-width: 48.0625em){:host .pricing__header{font-size:var(--pricing--header--desktop--fs, 1.4rem);line-height:var(--pricing--header--desktop--lh, 2rem)}}:host .pricing__header.price-align__center{justify-content:center}:host .pricing__header.price-align__right{justify-content:flex-end}:host .pricing__header .pricing__starting-from{color:var(--pricing--starting-from, var(--semantic-color-text-subtle));margin-right:calc(var(--semantic-spacing-3xs) * 1rem);display:inline-block}:host .pricing__header .pricing__promo-price{color:var(--pricing--promo-price, var(--semantic-color-text-subtle));display:inline-flex;text-decoration:line-through}:host .pricing__current-price-wrapper{display:flex;align-items:flex-end}:host .pricing__current-price-wrapper.price-align__right,:host .pricing__current-price-wrapper.price-align__center{flex-direction:column}:host .pricing__current-price-wrapper.price-align__right .pricing__price-frequency,:host .pricing__current-price-wrapper.price-align__center .pricing__price-frequency{margin-right:0}:host .pricing__current-price-wrapper.price-align__center{align-items:center}:host .pricing__current-price-wrapper.price-align__right{align-items:flex-end}:host .pricing__current-price-wrapper .pricing__price-value-wrapper{color:var(--price-price-value-color, var(--semantic-color-text-default));font-family:var(--pricing--price-value-wrapper--ff, TelenetAlbra-Bold, \"Helvetica Neue\", Helvetica, Arial, sans-serif);display:inline-flex;align-items:flex-start}:host .pricing__current-price-wrapper .pricing__price-value-wrapper .price__price-currency{font-size:var(--price--price-currency--mobile--fs, 1.6rem);line-height:var(--price--price-currency--mobile--lh, 1.5rem);font-style:normal}@media only screen and (min-width: 48.0625em){:host .pricing__current-price-wrapper .pricing__price-value-wrapper .price__price-currency{font-size:var(--price--price-currency--desktop--fs, 1.8rem);line-height:var(--price--price-currency--desktop--lh, 1.9rem)}}:host .pricing__current-price-wrapper .pricing__price-value-wrapper .price__price-decimal{font-size:var(--price--price-decimal--mobile--fs, 1.6rem);line-height:var(--price--price-decimal--mobile--lh, 1.5rem);font-style:normal}@media only screen and (min-width: 48.0625em){:host .pricing__current-price-wrapper .pricing__price-value-wrapper .price__price-decimal{font-size:var(--price--price-decimal--desktop--fs, 1.8rem);line-height:var(--price--price-decimal--desktop--lh, 1.9rem)}}:host .pricing__current-price-wrapper .pricing__price-value-wrapper .price__price-value{font-size:var(--price--price-value--mobile--fs, 2.8rem);line-height:var(--price--price-value--mobile--lh, 2.8rem);display:inline-flex;align-items:flex-start}@media only screen and (min-width: 48.0625em){:host .pricing__current-price-wrapper .pricing__price-value-wrapper .price__price-value{font-size:var(--price--price-value--desktop--fs, 3.2rem);line-height:var(--price--price-value--desktop--lh, 3.1rem)}}:host .pricing__price-frequency{font-size:var(--pricing--price-frequency--mobile--fs, 1.2rem);line-height:var(--pricing--price-frequency--mobile--lh, 1.6rem)}@media only screen and (min-width: 48.0625em){:host .pricing__price-frequency{font-size:var(--pricing--price-frequency--desktop--fs, 1.4rem);line-height:var(--pricing--price-frequency--desktop--lh, 2rem)}}:host .pricing__price-promo-duration{font-size:var(--pricing--price-promo-duration--mobile--fs, 1.2rem);line-height:var(--pricing--price-promo-duration--mobile--lh, 1.6rem)}@media only screen and (min-width: 48.0625em){:host .pricing__price-promo-duration{font-size:var(--pricing--price-promo-duration--desktop--fs, 1.4rem);line-height:var(--pricing--price-promo-duration--desktop--lh, 2rem)}}:host .pricing__price-frequency{color:var(--price-frequency-color, var(--semantic-color-text-default));margin-left:calc(var(--semantic-spacing-3xs) * 1rem)}:host .pricing__price-promo-duration{color:var(--price-end-color, var(--semantic-color-text-subtle))}:host .currency-after{justify-content:start;flex-direction:row-reverse;gap:calc(var(--semantic-spacing-3xs) * 1rem)}:host .pricing__footer.price-align__center,:host .pricing__footer.price-align__right{display:flex}:host .pricing__footer.price-align__center{justify-content:center}:host .pricing__footer.price-align__right{justify-content:flex-end}:host([appearance=patch]){--pricing--starting-from:var(--semantic-color-text-on-brand);--pricing--promo-price:var(--semantic-color-text-on-brand);--price-frequency-color:var(--semantic-color-text-on-brand);--price-price-value-color:var(--semantic-color-text-on-brand);--price-end-color:var(--semantic-color-text-on-brand);--pricing--price-promo-price--desktop--fs:1.2rem;--pricing--price-promo-price--desktop--lh:1.6rem;--pricing--price-promo-duration--desktop--fs:1rem;--pricing--price-promo-duration--desktop--lh:1.2rem;display:inline-flex;flex-direction:column;justify-content:center;background-repeat:no-repeat;background-size:cover;background-color:var(--pricing-host-background, var(--semantic-color-background-canvas-brand));padding:calc(var(--semantic-spacing-s) * 1rem);aspect-ratio:1/1;min-height:12.8rem;min-width:12.8rem}:host([appearance=patch]) .pricing__header.price-align__center{align-items:center;flex-direction:column}:host([appearance=patch]) .pricing__starting-from{font-family:TelenetAlbra-Bold, \"Helvetica Neue\", Helvetica, Arial, sans-serif}:host([appearance=patch]) .pricing__price-frequency{font-family:TelenetAlbra-Bold, \"Helvetica Neue\", Helvetica, Arial, sans-serif}:host([appearance=\"subtle text\"]){--price--price-value--desktop--fs:1.8rem;--price--price-value--desktop--lh:1.8rem}:host([brand=telenet][appearance=patch]){mask:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='109' height='109' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23fff' d='M105.9 20C104.8 11.2 98 4.2 89.2 3.2c0 0-14-2.2-34.7-2.2-20.6 0-34.7 2.2-34.7 2.2-8.8 1-15.6 8-16.7 16.8C3.1 20 1 35.8 1 54.5S3.1 89 3.1 89c1.1 8.8 7.9 15.8 16.7 16.8 0 0 14 2.2 34.7 2.2 20.6 0 34.7-2.2 34.7-2.2 8.8-1.1 15.6-8 16.7-16.8 0 0 2.1-15.8 2.1-34.5S105.9 20 105.9 20' fill-rule='evenodd'/%3E%3C/svg%3E\");mask-size:contain;mask-repeat:no-repeat}";
const WinkPricingTelenetStyle0 = pricingTelenetCss;
const Pricing = class {
  constructor(hostRef) {
    (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.price = '';
    this.priceStrikethrough = '';
    this.startingFrom = '';
    this.frequency = '';
    this.duration = '';
    this.appearance = PRICING_TYPES.text;
    this.annotation = LANGUAGES.nl;
    this.alignment = PRICING_ALIGN.left;
  }
  normalText = '_normal';
  strikeThroughText = '_strikethrough';
  screenReaderAnnotations = new Map([[LANGUAGES.nl + this.strikeThroughText, 'Normale prijs'], [LANGUAGES.fr + this.strikeThroughText, 'Prix normal'], [LANGUAGES.en + this.strikeThroughText, 'Normal price'], [LANGUAGES.nl + this.normalText, 'Huidige prijs'], [LANGUAGES.fr + this.normalText, 'Prix Maintenant'], [LANGUAGES.en + this.normalText, 'Current price']]);
  pricingChild = (price, lang, wrapperClassName) => {
    const currencyAfter = lang === LANGUAGES.fr ? 'currency-after' : '';
    const langDecimalPoint = lang !== LANGUAGES.en ? ',' : '.';
    const inputPrice = price ? price.replace(',', '.') : '';
    const integerPart = inputPrice.split('.')[0];
    const fractionalPart = inputPrice.split('.')[1] !== '00' ? inputPrice.split('.')[1] : '';
    const screenReaderText = wrapperClassName === 'pricing__promo-price' ? this.screenReaderAnnotations.get(lang + this.strikeThroughText) : this.screenReaderAnnotations.get(lang + this.normalText);
    let formatPriceHtml = (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: `${wrapperClassName} ${currencyAfter}`
    }, (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", {
      class: "sr-only"
    }, screenReaderText), (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("i", {
      class: "price__price-currency"
    }, "\u20AC"), (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", {
      class: "price__price-value"
    }, price));
    if (inputPrice.includes('.')) {
      formatPriceHtml = (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
        class: `${wrapperClassName} ${currencyAfter}`
      }, (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", {
        class: "sr-only"
      }, screenReaderText), (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("i", {
        class: "price__price-currency"
      }, "\u20AC"), (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", {
        class: "price__price-value"
      }, integerPart, fractionalPart && (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", {
        class: "price__price-decimal"
      }, langDecimalPoint + fractionalPart)));
    }
    return formatPriceHtml;
  };
  alignmentClass = alignment => {
    return this.alignment !== PRICING_ALIGN.left ? `price-align__${alignment}` : '';
  };
  componentWillRender() {
    if (this.appearance === PRICING_TYPES.patch) {
      this.alignment = PRICING_ALIGN.center;
    }
  }
  render() {
    return (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.H, {
      key: 'a1d45a16934f2c4c72c1275b011a4f054a688395',
      type: "product price"
    }, (this.startingFrom || this.priceStrikethrough) && (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: `pricing__header ${this.alignmentClass(this.alignment)}`
    }, this.startingFrom && (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: "pricing__starting-from"
    }, this.startingFrom, " "), this.priceStrikethrough && this.pricingChild(this.priceStrikethrough, this.annotation, 'pricing__promo-price')), (this.price || this.frequency) && (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: `pricing__current-price-wrapper ${this.alignmentClass(this.alignment)}`
    }, this.price && this.pricingChild(this.price, this.annotation, 'pricing__price-value-wrapper'), this.frequency && (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: "pricing__price-frequency"
    }, this.frequency)), this.duration && (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: `pricing__footer ${this.alignmentClass(this.alignment)}`
    }, (0,_index_4268ac0c_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: "pricing__price-promo-duration"
    }, this.duration)));
  }
};
Pricing.style = {
  base: WinkPricingBaseStyle0,
  telenet: WinkPricingTelenetStyle0
};


/***/ })

}])
//# sourceMappingURL=libs_foundation_wink_dist_dist_esm_wink-pricing_entry_js.js.map