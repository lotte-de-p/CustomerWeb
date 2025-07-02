(self["webpackChunkmybase_dashboard_mfe"] = self["webpackChunkmybase_dashboard_mfe"] || []).push([["libs_base-customerzone_dashboard_feat-mybase-dashboard-dtv_src_index_ts"],{

/***/ 23263:
/*!*********************************************************************************!*\
  !*** ./libs/base-customerzone/dashboard/feat-mybase-dashboard-dtv/src/index.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyBaseDashboardDtvComponent: () => (/* reexport safe */ _lib_mybase_dashboard_dtv_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseDashboardDtvComponent)
/* harmony export */ });
/* harmony import */ var _lib_mybase_dashboard_dtv_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/mybase-dashboard-dtv.component */ 53482);


/***/ }),

/***/ 53482:
/*!**************************************************************************************************************!*\
  !*** ./libs/base-customerzone/dashboard/feat-mybase-dashboard-dtv/src/lib/mybase-dashboard-dtv.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyBaseDashboardDtvComponent: () => (/* binding */ MyBaseDashboardDtvComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mybase-dashboard/data-access */ 20163);
/* harmony import */ var _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mybase_dashboard_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mybase-dashboard/ui */ 46255);
/* harmony import */ var _mybase_dashboard_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mybase_dashboard_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/ocapi/src/lib/components/login.component */ 76158);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_5__);









function MyBaseDashboardDtvComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3)(1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "tg-mybase-dashboard-error", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("error", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, ctx_r0.myBaseDashboardDtvError$));
  }
}
function MyBaseDashboardDtvComponent_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function MyBaseDashboardDtvComponent_Conditional_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11)(1, "tg-mybase-navigation-cards", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("analyticsData", function MyBaseDashboardDtvComponent_Conditional_4_Conditional_3_Template_tg_mybase_navigation_cards_analyticsData_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.sendAnalyticsData($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("manageContentPacksUrl", ctx_r3.manageContentPacksUrl)("watchTvOnlineUrl", ctx_r3.watchTvOnlineUrl)("manageYourDeviceUrl", ctx_r3.manageYourDeviceUrl)("productOverviewUrl", ctx_r3.productOverviewUrl)("addTvBoxUrl", ctx_r3.addTvBoxUrl)("type", "dtv")("customClassGrid", "col-lg-4")("productIdentifier", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 9, ctx_r3.myBaseDashboardDtvIdentifier$))("data", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 11, ctx_r3.myBaseDashboardDtvSimpleCards$));
  }
}
function MyBaseDashboardDtvComponent_Conditional_4_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3)(1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function MyBaseDashboardDtvComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MyBaseDashboardDtvComponent_Conditional_4_Conditional_1_Template, 2, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MyBaseDashboardDtvComponent_Conditional_4_Conditional_3_Template, 4, 13, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, MyBaseDashboardDtvComponent_Conditional_4_Conditional_7_Template, 7, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div")(10, "tg-mybase-services-cards", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("analyticsData", function MyBaseDashboardDtvComponent_Conditional_4_Template_tg_mybase_services_cards_analyticsData_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r7.sendAnalyticsData($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 6, ctx_r1.myBaseDashboardDtvLoading$) ? 1 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 8, ctx_r1.myBaseDashboardDtvSimpleCards$) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 10, ctx_r1.myBaseDashboardDtvLoading$) === false ? 3 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 12, ctx_r1.myBaseDashboardDtvLoading$) ? 7 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("returnDeviceUrl", ctx_r1.returnDeviceUrl)("type", "dtv")("data", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 14, ctx_r1.myBaseDashboardDtvServices$));
  }
}
class MyBaseDashboardDtvComponent {
  manageContentPacksUrl;
  watchTvOnlineUrl;
  productOverviewUrl;
  manageYourDeviceUrl;
  addTvBoxUrl;
  returnDeviceUrl;
  scopes = ['customeraccount']; // TBD
  facade = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardFacade);
  datalayerFacade = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardDatalayerFacade);
  dtvLines$ = this.facade.dtvLines$;
  myBaseDashboardDtvError$ = this.facade.myBaseDashboardDtvError$;
  myBaseDashboardDtvLoading$ = this.facade.myBaseDashboardDtvLoading$;
  myBaseDashboardDtvIdentifier$ = this.facade.myBaseDashboardDtvIdentifier$;
  myBaseDashboardDtvSimpleCards$ = this.facade.myBaseDashboardDtvSimpleCards$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(cards => {
    const navCards = cards;
    return navCards.filter(card => this.navigationCardTypes.includes(card));
  }));
  myBaseDashboardDtvServices$ = this.facade.myBaseDashboardDtvServices$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(cards => {
    const serviceCards = cards;
    return serviceCards.filter(card => this.serviceTypes.includes(card));
  }));
  // Sorted array, determines the order of the cards
  navigationCardTypes = [_mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.NavigationCardType.PRODUCT_OVERVIEW, _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.NavigationCardType.MANAGE_YOUR_DEVICE, _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.NavigationCardType.WATCH_TV_ONLINE, _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.NavigationCardType.MANAGE_CONTENT_PACKS, _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.NavigationCardType.ADD_TV_BOX];
  serviceTypes = [_mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.ServiceType.RETURN_DEVICE];
  initAfterLoggedIn() {
    this.facade.loadDtvLines();
  }
  sendAnalyticsData(event) {
    this.datalayerFacade.sendDatalayerEvent(event);
  }
  static ɵfac = function MyBaseDashboardDtvComponent_Factory(t) {
    return new (t || MyBaseDashboardDtvComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: MyBaseDashboardDtvComponent,
    selectors: [["tg-mybase-dashboard-dtv"]],
    inputs: {
      manageContentPacksUrl: "manageContentPacksUrl",
      watchTvOnlineUrl: "watchTvOnlineUrl",
      productOverviewUrl: "productOverviewUrl",
      manageYourDeviceUrl: "manageYourDeviceUrl",
      addTvBoxUrl: "addTvBoxUrl",
      returnDeviceUrl: "returnDeviceUrl"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 5,
    vars: 4,
    consts: [[3, "scopes", "componentCanRender"], [1, "mybase-dashboard-dtv"], ["class", "row"], [1, "row"], [1, "col-12", "mt--l--md"], [3, "error"], ["class", "col-12 col-md-6 col-lg-4 mb--l"], ["class", "col-12"], [3, "returnDeviceUrl", "type", "data", "analyticsData"], [1, "col-12", "col-md-6", "col-lg-4", "mb--l"], [1, "height--full", "skeleton", "skeleton--basic", "skeleton--container", "navigation--card", "p--m"], [1, "col-12"], [3, "manageContentPacksUrl", "watchTvOnlineUrl", "manageYourDeviceUrl", "productOverviewUrl", "addTvBoxUrl", "type", "customClassGrid", "productIdentifier", "data", "analyticsData"], [1, "col-12", "mb--l"], [1, "skeleton", "skeleton--basic", "skeleton--container", "skeleton--title", "p--m"], [1, "col-12", "mb--l", "col-lg-4"], [1, "skeleton", "skeleton--basic", "skeleton--container", "service--card", "p--m"]],
    template: function MyBaseDashboardDtvComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tg-login", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("componentCanRender", function MyBaseDashboardDtvComponent_Template_tg_login_componentCanRender_0_listener() {
          return ctx.initAfterLoggedIn();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MyBaseDashboardDtvComponent_Conditional_2_Template, 4, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MyBaseDashboardDtvComponent_Conditional_4_Template, 12, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("scopes", ctx.scopes);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, ctx.myBaseDashboardDtvError$) ? 2 : 4);
      }
    },
    dependencies: [_mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashoardNgrxModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.AsyncPipe, _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_4__.LoginModule, _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_4__.LoginComponent, _mybase_dashboard_ui__WEBPACK_IMPORTED_MODULE_3__.MyBaseDashboardErrorComponent, _mybase_dashboard_ui__WEBPACK_IMPORTED_MODULE_3__.MyBaseNavigationCardsComponent, _mybase_dashboard_ui__WEBPACK_IMPORTED_MODULE_3__.MyBaseServicesCardsComponent],
    styles: [".mybase-dashboard-dtv[_ngcontent-%COMP%] {\n  margin-top: -6rem;\n}\n@media only screen and (min-width: 768px) {\n  .mybase-dashboard-dtv[_ngcontent-%COMP%] {\n    margin-top: 4rem;\n  }\n}\n.mybase-dashboard-dtv[_ngcontent-%COMP%]   .navigation--card[_ngcontent-%COMP%] {\n  min-height: 10rem;\n}\n.mybase-dashboard-dtv[_ngcontent-%COMP%]   .service--card[_ngcontent-%COMP%] {\n  min-height: 7rem;\n}\n.mybase-dashboard-dtv[_ngcontent-%COMP%]   .skeleton--title[_ngcontent-%COMP%] {\n  width: 15rem;\n  height: 3rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvYmFzZS1jdXN0b21lcnpvbmUvZGFzaGJvYXJkL2ZlYXQtbXliYXNlLWRhc2hib2FyZC1kdHYvc3JjL2xpYi9teWJhc2UtZGFzaGJvYXJkLWR0di5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUlFLGlCQUFBO0FBRkY7QUFERTtFQURGO0lBRUksZ0JBQUE7RUFJRjtBQUNGO0FBREU7RUFDRSxpQkFBQTtBQUdKO0FBREU7RUFDRSxnQkFBQTtBQUdKO0FBREU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQUdKIiwic291cmNlc0NvbnRlbnQiOlsiLm15YmFzZS1kYXNoYm9hcmQtZHR2IHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIG1hcmdpbi10b3A6IDRyZW07XG4gIH1cbiAgbWFyZ2luLXRvcDogLTZyZW07XG5cbiAgLm5hdmlnYXRpb24tLWNhcmQge1xuICAgIG1pbi1oZWlnaHQ6IDEwcmVtO1xuICB9XG4gIC5zZXJ2aWNlLS1jYXJkIHtcbiAgICBtaW4taGVpZ2h0OiA3cmVtO1xuICB9XG4gIC5za2VsZXRvbi0tdGl0bGUge1xuICAgIHdpZHRoOiAxNXJlbTtcbiAgICBoZWlnaHQ6IDNyZW07XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ })

}])
//# sourceMappingURL=libs_base-customerzone_dashboard_feat-mybase-dashboard-dtv_src_index_ts.js.map