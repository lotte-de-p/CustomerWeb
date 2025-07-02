(self["webpackChunksales_mfe"] = self["webpackChunksales_mfe"] || []).push([["libs_sales_events_feat-analytics_src_index_ts-_c1c30"],{

/***/ 84543:
/*!*******************************************************!*\
  !*** ./libs/sales/events/feat-analytics/src/index.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnalyticsClickEventDirective: () => (/* reexport safe */ _lib_directives_track_click_event_directive__WEBPACK_IMPORTED_MODULE_0__.AnalyticsClickEventDirective)
/* harmony export */ });
/* harmony import */ var _lib_directives_track_click_event_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/directives/track-click-event.directive */ 19151);


/***/ }),

/***/ 19151:
/*!********************************************************************************************!*\
  !*** ./libs/sales/events/feat-analytics/src/lib/directives/track-click-event.directive.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnalyticsClickEventDirective: () => (/* binding */ AnalyticsClickEventDirective)
/* harmony export */ });
/* harmony import */ var _sales_events_data_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sales/events/data-access */ 80258);
/* harmony import */ var _sales_events_data_access__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sales_events_data_access__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);



class AnalyticsClickEventDirective {
  onClick() {
    this.eventFacade.triggerAnalyticsClickEvent(this.event);
  }
  constructor(eventFacade) {
    this.eventFacade = eventFacade;
  }
  static #_ = this.ɵfac = function AnalyticsClickEventDirective_Factory(t) {
    return new (t || AnalyticsClickEventDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_sales_events_data_access__WEBPACK_IMPORTED_MODULE_0__.EventFacade));
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
    type: AnalyticsClickEventDirective,
    selectors: [["", "tgSalesTrackClickEvent", ""]],
    hostBindings: function AnalyticsClickEventDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AnalyticsClickEventDirective_click_HostBindingHandler() {
          return ctx.onClick();
        });
      }
    },
    inputs: {
      event: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInputFlags"].None, "tgSalesTrackClickEvent", "event"]
    },
    standalone: true
  });
}

/***/ })

}])
//# sourceMappingURL=libs_sales_events_feat-analytics_src_index_ts-_c1c30.js.map