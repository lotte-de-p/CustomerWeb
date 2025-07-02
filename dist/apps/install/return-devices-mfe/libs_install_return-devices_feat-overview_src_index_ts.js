(self["webpackChunkreturn_devices_mfe"] = self["webpackChunkreturn_devices_mfe"] || []).push([["libs_install_return-devices_feat-overview_src_index_ts"],{

/***/ 76961:
/*!****************************************************************!*\
  !*** ./libs/install/return-devices/feat-overview/src/index.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReturnDevicesOverviewComponent: () => (/* reexport safe */ _lib_return_devices_overview_return_devices_overview_component__WEBPACK_IMPORTED_MODULE_0__.ReturnDevicesOverviewComponent)
/* harmony export */ });
/* harmony import */ var _lib_return_devices_overview_return_devices_overview_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/return-devices-overview/return-devices-overview.component */ 73132);


/***/ }),

/***/ 73132:
/*!************************************************************************************************************************!*\
  !*** ./libs/install/return-devices/feat-overview/src/lib/return-devices-overview/return-devices-overview.component.ts ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReturnDevicesOverviewComponent: () => (/* binding */ ReturnDevicesOverviewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngneat/until-destroy */ 52813);
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/component */ 43956);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../shared/ocapi/src/lib/components/login.component */ 76158);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/message/src/lib/message/message.component */ 65145);
/* harmony import */ var _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _return_devices_data_access__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @return-devices/data-access */ 5109);
/* harmony import */ var _return_devices_data_access__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_return_devices_data_access__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _return_devices_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @return-devices/ui */ 50746);
/* harmony import */ var _return_devices_ui__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_return_devices_ui__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! file-saver */ 46778);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @telenet/ng-lib-datalayer */ 42782);
/* harmony import */ var _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_9__);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















const _c0 = ["returnLabelIframe"];
function ReturnDevicesOverviewComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tg-return-devices-skeleton");
  }
}
function ReturnDevicesOverviewComponent_ng_container_3_ng_container_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tg-return-devices-print-return-label-dialog", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("printClick", function ReturnDevicesOverviewComponent_ng_container_3_ng_container_1_Conditional_2_Template_tg_return_devices_print_return_label_dialog_printClick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r10.print());
    })("downloadClick", function ReturnDevicesOverviewComponent_ng_container_3_ng_container_1_Conditional_2_Template_tg_return_devices_print_return_label_dialog_downloadClick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const vm_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngrxLet;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r12.download(vm_r4.returnLabelByteArray));
    })("closeClick", function ReturnDevicesOverviewComponent_ng_container_3_ng_container_1_Conditional_2_Template_tg_return_devices_print_return_label_dialog_closeClick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r14.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function ReturnDevicesOverviewComponent_ng_container_3_ng_container_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "formatAddress");
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r6.selectedAddressLine), " ");
  }
}
const _c1 = (a0, a1) => ({
  "line-selector--open text-font-family--t5": a0,
  "line-selector-telenet--open": a1
});
function ReturnDevicesOverviewComponent_ng_container_3_ng_container_1_ng_container_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReturnDevicesOverviewComponent_ng_container_3_ng_container_1_ng_container_7_Conditional_1_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r17.openAddressSelection());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tg-return-devices-address-selector", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closeMenu", function ReturnDevicesOverviewComponent_ng_container_3_ng_container_1_ng_container_7_Conditional_1_Template_tg_return_devices_address_selector_closeMenu_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r19.closeMenu());
    })("addressLineSelected", function ReturnDevicesOverviewComponent_ng_container_3_ng_container_1_ng_container_7_Conditional_1_Template_tg_return_devices_address_selector_addressLineSelected_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r20.onSelectAddressLine($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const returnDevicesAddressLines_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c1, ctx_r16.isBaseCustomer, !ctx_r16.isBaseCustomer));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "address-selector-click");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 7, "ng.return-devices.select.address"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isBaseCustomer", ctx_r16.isBaseCustomer)("returnDevicesAddressLines", returnDevicesAddressLines_r15)("selectedAddressLine", ctx_r16.selectedAddressLine)("showMenu", ctx_r16.showMenu);
  }
}
function ReturnDevicesOverviewComponent_ng_container_3_ng_container_1_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ReturnDevicesOverviewComponent_ng_container_3_ng_container_1_ng_container_7_Conditional_1_Template, 4, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const returnDevicesAddressLines_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](1, returnDevicesAddressLines_r15.length > 1 ? 1 : -1);
  }
}
const _forTrack2 = ($index, $item) => $item.serialNumber;
function ReturnDevicesOverviewComponent_ng_container_3_ng_container_1_Conditional_11_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tg-return-devices-detail", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("printReturnLabelClick", function ReturnDevicesOverviewComponent_ng_container_3_ng_container_1_Conditional_11_For_3_Template_tg_return_devices_detail_printReturnLabelClick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r28.showReturnLabelDialog());
    })("toggleDeviceClick", function ReturnDevicesOverviewComponent_ng_container_3_ng_container_1_Conditional_11_For_3_Template_tg_return_devices_detail_toggleDeviceClick_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r30.toggleDevice($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const device_r23 = ctx.$implicit;
    const i_r24 = ctx.$index;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("device", device_r23)("messageGroupName", ctx_r22.messageGroupName)("imagePath", ctx_r22.imagePath);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "return-devices-overview-detail-" + i_r24);
  }
}
const _c3 = (a1, a2) => ({
  attributeName: "return label button",
  eventName: a1,
  messageGroupName: a2
});
function ReturnDevicesOverviewComponent_ng_container_3_ng_container_1_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tg-return-devices-header", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("printReturnLabelClick", function ReturnDevicesOverviewComponent_ng_container_3_ng_container_1_Conditional_11_Template_tg_return_devices_header_printReturnLabelClick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r31.showReturnLabelDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](2, ReturnDevicesOverviewComponent_ng_container_3_ng_container_1_Conditional_11_For_3_Template, 1, 4, "tg-return-devices-detail", 20, _forTrack2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tg-return-devices-footer", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("printReturnLabelClick", function ReturnDevicesOverviewComponent_ng_container_3_ng_container_1_Conditional_11_Template_tg_return_devices_footer_printReturnLabelClick_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r33.showReturnLabelDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vm_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngrxLet;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("returnDevices", vm_r4.returnDevices)("clickPushToAnalytics", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c3, ctx_r8.DatalayerEventNames.BUTTON_CLICKED, ctx_r8.messageGroupName));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](vm_r4.returnDevices);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("returnPointUrl", ctx_r8.returnPointUrl)("telenetStoreUrl", ctx_r8.telenetStoreUrl)("imagePath", ctx_r8.imagePath)("isBaseCustomer", ctx_r8.isBaseCustomer)("messageGroupName", ctx_r8.messageGroupName);
  }
}
const _c4 = a0 => ({
  "line-selector--header": a0
});
const _c5 = a0 => ({
  "justify-content--normal--md justify-content--between pt--m--md": a0
});
const _c6 = (a0, a1) => ({
  "line-selector--title mt-0 mb-0": a0,
  "line-selector-telenet--title": a1
});
const _c7 = (a0, a1) => ({
  "px--m px--n--md": a0,
  "px--xxxs": a1
});
function ReturnDevicesOverviewComponent_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-message", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ReturnDevicesOverviewComponent_ng_container_3_ng_container_1_Conditional_2_Template, 1, 0, "tg-return-devices-print-return-label-dialog");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5)(4, "div", 6)(5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ReturnDevicesOverviewComponent_ng_container_3_ng_container_1_Conditional_6_Template, 2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ReturnDevicesOverviewComponent_ng_container_3_ng_container_1_ng_container_7_Template, 2, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8)(9, "div", 9)(10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ReturnDevicesOverviewComponent_ng_container_3_ng_container_1_Conditional_11_Template, 5, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "iframe", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const vm_r4 = ctx.ngrxLet;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("messageGroupName", "return-devices");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](2, ctx_r3.showDialog ? 2 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c4, ctx_r3.isBaseCustomer));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c5, ctx_r3.isBaseCustomer));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](14, _c6, ctx_r3.isBaseCustomer, !ctx_r3.isBaseCustomer));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "address-value");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](6, ctx_r3.selectedAddressLine ? 6 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngrxLet", ctx_r3.returnDevicesAddressLines$);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](17, _c7, ctx_r3.isBaseCustomer, !ctx_r3.isBaseCustomer));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](11, !vm_r4.returnDevicesError ? 11 : -1);
  }
}
const _c8 = (a0, a1, a2) => ({
  returnDevices: a0,
  returnLabelByteArray: a1,
  returnDevicesError: a2
});
function ReturnDevicesOverviewComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ReturnDevicesOverviewComponent_ng_container_3_ng_container_1_Template, 14, 20, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngrxLet", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](1, _c8, ctx_r2.returnDevices$, ctx_r2.returnLabelByteArray$, ctx_r2.returnDevicesFailure$));
  }
}
let ReturnDevicesOverviewComponent = class ReturnDevicesOverviewComponent {
  constructor() {
    this.facade = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_return_devices_data_access__WEBPACK_IMPORTED_MODULE_6__.ReturnDevicesFacade);
    this.pdfService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_return_devices_data_access__WEBPACK_IMPORTED_MODULE_6__.PdfService);
    this.pathCategorisationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__.PathCategorisationService);
    this.scopes = ['fixedphonerestriction'];
    this.returnDevices$ = this.facade.selectedDevicesList$;
    this.returnLabelByteArray$ = this.facade.returnLabelByteArray$;
    this.returnDevicesFailure$ = this.facade.returnDevicesFailure$;
    this.returnDevicesAddressLines$ = this.facade.returnDevicesAddressLines$;
    this.selectDeviceDetailsLoaded$ = this.facade.selectDeviceDetailsLoaded$;
    this.selectedAddressLine$ = this.facade.selectedAddressLine$;
    this.DatalayerEventNames = _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_9__.DatalayerEventNames;
    this.messageGroupName = 'return-devices';
    this.showMenu = false;
  }
  initAfterLoggedIn() {
    this.loadReturnLabel();
    this.facade.getAddressSelector();
    this.onReturnLabelByteArrayChange();
    this.selectedAddressLine$.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__.untilDestroyed)(this)).subscribe(selectedAddress => this.onSelectAddressLine(selectedAddress));
    this.isBaseCustomer = this.pathCategorisationService.isCustomerOfBrand(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__.CustomerBrandEnum.BRAND_BASE);
  }
  onSelectAddressLine(selectedAddress) {
    this.selectedAddressLine = selectedAddress;
    return this.facade.selectedAddress(this.selectedAddressLine);
  }
  showReturnLabelDialog() {
    this.showDialog = true;
  }
  toggleDevice(device) {
    this.facade.toggleDevice(device);
  }
  print() {
    this.returnLabelIframe?.nativeElement?.contentWindow?.print();
  }
  download(byteArray) {
    const fileName = this.isBaseCustomer ? `Base_ReturnLabel_${new Date().getTime()}.pdf` : `Telenet_ReturnLabel_${new Date().getTime()}.pdf`;
    file_saver__WEBPACK_IMPORTED_MODULE_8___default().saveAs(this.convertToBlob(byteArray), fileName);
  }
  close() {
    this.showDialog = false;
  }
  loadReturnLabel() {
    this.selectedAddressLine$.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__.untilDestroyed)(this)).subscribe(selectedAccount => {
      if (selectedAccount) {
        this.facade.loadReturnLabel(selectedAccount.id);
      }
    });
  }
  onReturnLabelByteArrayChange() {
    this.returnLabelByteArray$.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__.untilDestroyed)(this)).subscribe(returnLabel => {
      if (returnLabel) {
        const blob = this.pdfService.convertByteArrayToBlob(returnLabel);
        const blobUrl = URL.createObjectURL(blob);
        if (this.returnLabelIframe) {
          this.returnLabelIframe.nativeElement.src = blobUrl;
        }
      }
    });
  }
  convertToBlob(byteArray) {
    return this.pdfService.convertByteArrayToBlob(byteArray);
  }
  openAddressSelection() {
    this.showMenu = true;
  }
  closeMenu() {
    this.showMenu = false;
  }
  static #_ = this.ɵfac = function ReturnDevicesOverviewComponent_Factory(t) {
    return new (t || ReturnDevicesOverviewComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ReturnDevicesOverviewComponent,
    selectors: [["tg-return-devices-overview"]],
    viewQuery: function ReturnDevicesOverviewComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.returnLabelIframe = _t.first);
      }
    },
    inputs: {
      returnPointUrl: "returnPointUrl",
      telenetStoreUrl: "telenetStoreUrl",
      imagePath: "imagePath",
      enableLoader: "enableLoader",
      enableMask: "enableMask",
      pageType: "pageType"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_9__.AdobeAnalyticsDirective]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 5,
    vars: 5,
    consts: [["data-cy", "return-devices-overview", 3, "scopes", "componentCanRender"], ["returnDevicesOverviewSkeleton", ""], [4, "ngIf", "ngIfElse"], [4, "ngrxLet"], [3, "messageGroupName"], [3, "ngClass"], [1, "display--flex", "mb--m", "flex-direction--row--md", "pb--l", "align-items--center", 3, "ngClass"], [1, "text-flow--text", "word-break--ellipsis", 3, "ngClass"], [1, "my--l--md", "m--m", "pb--xxl", "mx--n--md"], [1, "return-devices", "m--auto", 3, "ngClass"], [1, "p--n", "m--auto"], ["id", "printReturnLabel", 1, "display--none"], ["returnLabelIframe", ""], [3, "printClick", "downloadClick", "closeClick"], ["href", "javascript:void(0)", 1, "link", "ml--xxs", "text-weight--l", 3, "ngClass", "click"], [3, "isBaseCustomer", "returnDevicesAddressLines", "selectedAddressLine", "showMenu", "closeMenu", "addressLineSelected"], [3, "returnDevices", "clickPushToAnalytics", "printReturnLabelClick"], ["data-cy", "return-devices-overview-details", 1, "pt--l"], [3, "returnPointUrl", "telenetStoreUrl", "imagePath", "isBaseCustomer", "messageGroupName", "printReturnLabelClick"], [3, "device", "messageGroupName", "imagePath", "printReturnLabelClick", "toggleDeviceClick"], [3, "device", "messageGroupName", "imagePath"]],
    template: function ReturnDevicesOverviewComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tg-login", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("componentCanRender", function ReturnDevicesOverviewComponent_Template_tg_login_componentCanRender_0_listener() {
          return ctx.initAfterLoggedIn();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ReturnDevicesOverviewComponent_ng_template_1_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(3, ReturnDevicesOverviewComponent_ng_container_3_Template, 2, 5, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scopes", ctx.scopes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, ctx.selectDeviceDetailsLoaded$))("ngIfElse", _r1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.AsyncPipe, _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_3__.LoginModule, _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_3__.LoginComponent, _return_devices_data_access__WEBPACK_IMPORTED_MODULE_6__.ReturnDevicesNgrxModule, _ngrx_component__WEBPACK_IMPORTED_MODULE_11__.LetDirective, _return_devices_ui__WEBPACK_IMPORTED_MODULE_7__.ReturnDevicesDetailComponent, _return_devices_ui__WEBPACK_IMPORTED_MODULE_7__.ReturnDevicesFooterComponent, _return_devices_ui__WEBPACK_IMPORTED_MODULE_7__.ReturnDevicesHeaderComponent, _return_devices_ui__WEBPACK_IMPORTED_MODULE_7__.ReturnDevicesAddressSelectorComponent, _return_devices_ui__WEBPACK_IMPORTED_MODULE_7__.PrintReturnLabelDialogComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe, _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__.LoaderModule, _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_5__.MessagesModule, _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_5__.MessageComponent, _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_9__.AdobeAnalyticsDirective, _return_devices_ui__WEBPACK_IMPORTED_MODULE_7__.ReturnDevicesSkeletonComponent, _return_devices_data_access__WEBPACK_IMPORTED_MODULE_6__.FormatAddressPipe],
    styles: [".line-selector--title[_ngcontent-%COMP%] {\n  color: white;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n@media only screen and (min-width: 768px) {\n  .line-selector--title[_ngcontent-%COMP%] {\n    color: initial;\n  }\n}\n.line-selector--header[_ngcontent-%COMP%] {\n  position: relative;\n  top: -55px;\n}\n@media only screen and (min-width: 768px) {\n  .line-selector--header[_ngcontent-%COMP%] {\n    position: initial;\n  }\n}\n.line-selector--open[_ngcontent-%COMP%] {\n  color: white;\n  border-bottom: 2px solid white;\n  font-size: 16px;\n  line-height: 15px;\n  font-weight: 700;\n  white-space: nowrap;\n}\n@media only screen and (min-width: 768px) {\n  .line-selector--open[_ngcontent-%COMP%] {\n    color: #00807b;\n    border-bottom: 2px solid #00807b;\n    font-size: 18px;\n  }\n}\n\n.line-selector-telenet--title[_ngcontent-%COMP%] {\n  color: initial;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.line-selector-telenet--open[_ngcontent-%COMP%] {\n  color: initial;\n  border-bottom: 2px solid black;\n  font-size: 16px;\n  line-height: 15px;\n  font-weight: 700;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvaW5zdGFsbC9yZXR1cm4tZGV2aWNlcy9mZWF0LW92ZXJ2aWV3L3NyYy9saWIvcmV0dXJuLWRldmljZXMtb3ZlcnZpZXcvcmV0dXJuLWRldmljZXMtb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQUo7QUFDSTtFQUxGO0lBTUksY0FBQTtFQUVKO0FBQ0Y7QUFDRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQUNKO0FBQUk7RUFIRjtJQUlJLGlCQUFBO0VBR0o7QUFDRjtBQUFFO0VBQ0UsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUVKO0FBQUk7RUFSRjtJQVNJLGNBQUE7SUFDQSxnQ0FBQTtJQUNBLGVBQUE7RUFHSjtBQUNGOztBQUVFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNKO0FBRUU7RUFDRSxjQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQUoiLCJzb3VyY2VzQ29udGVudCI6WyIubGluZS1zZWxlY3RvciB7XG4gICYtLXRpdGxlIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgIGNvbG9yOiBpbml0aWFsO1xuICAgIH1cbiAgfVxuXG4gICYtLWhlYWRlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTU1cHg7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgcG9zaXRpb246IGluaXRpYWw7XG4gICAgfVxuICB9XG5cbiAgJi0tb3BlbiB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgY29sb3I6ICMwMDgwN2I7XG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAwODA3YjtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB9XG4gIH1cbn1cblxuLmxpbmUtc2VsZWN0b3ItdGVsZW5ldCB7XG4gICYtLXRpdGxlIHtcbiAgICBjb2xvcjogaW5pdGlhbDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIH1cblxuICAmLS1vcGVuIHtcbiAgICBjb2xvcjogaW5pdGlhbDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
    changeDetection: 0
  });
};
ReturnDevicesOverviewComponent = __decorate([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__.UntilDestroy)()], ReturnDevicesOverviewComponent);


/***/ }),

/***/ 46778:
/*!*******************************************************!*\
  !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
  \*******************************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (a, b) {
  if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})(this, function () {
  "use strict";

  function b(a, b) {
    return "undefined" == typeof b ? b = {
      autoBom: !1
    } : "object" != typeof b && (console.warn("Deprecated: Expected third argument to be a object"), b = {
      autoBom: !b
    }), b.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type) ? new Blob(["\uFEFF", a], {
      type: a.type
    }) : a;
  }
  function c(a, b, c) {
    var d = new XMLHttpRequest();
    d.open("GET", a), d.responseType = "blob", d.onload = function () {
      g(d.response, b, c);
    }, d.onerror = function () {
      console.error("could not download file");
    }, d.send();
  }
  function d(a) {
    var b = new XMLHttpRequest();
    b.open("HEAD", a, !1);
    try {
      b.send();
    } catch (a) {}
    return 200 <= b.status && 299 >= b.status;
  }
  function e(a) {
    try {
      a.dispatchEvent(new MouseEvent("click"));
    } catch (c) {
      var b = document.createEvent("MouseEvents");
      b.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), a.dispatchEvent(b);
    }
  }
  var f = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof global && global.global === global ? global : void 0,
    a = f.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent),
    g = f.saveAs || ("object" != typeof window || window !== f ? function () {} : "download" in HTMLAnchorElement.prototype && !a ? function (b, g, h) {
      var i = f.URL || f.webkitURL,
        j = document.createElement("a");
      g = g || b.name || "download", j.download = g, j.rel = "noopener", "string" == typeof b ? (j.href = b, j.origin === location.origin ? e(j) : d(j.href) ? c(b, g, h) : e(j, j.target = "_blank")) : (j.href = i.createObjectURL(b), setTimeout(function () {
        i.revokeObjectURL(j.href);
      }, 4E4), setTimeout(function () {
        e(j);
      }, 0));
    } : "msSaveOrOpenBlob" in navigator ? function (f, g, h) {
      if (g = g || f.name || "download", "string" != typeof f) navigator.msSaveOrOpenBlob(b(f, h), g);else if (d(f)) c(f, g, h);else {
        var i = document.createElement("a");
        i.href = f, i.target = "_blank", setTimeout(function () {
          e(i);
        });
      }
    } : function (b, d, e, g) {
      if (g = g || open("", "_blank"), g && (g.document.title = g.document.body.innerText = "downloading..."), "string" == typeof b) return c(b, d, e);
      var h = "application/octet-stream" === b.type,
        i = /constructor/i.test(f.HTMLElement) || f.safari,
        j = /CriOS\/[\d]+/.test(navigator.userAgent);
      if ((j || h && i || a) && "undefined" != typeof FileReader) {
        var k = new FileReader();
        k.onloadend = function () {
          var a = k.result;
          a = j ? a : a.replace(/^data:[^;]*;/, "data:attachment/file;"), g ? g.location.href = a : location = a, g = null;
        }, k.readAsDataURL(b);
      } else {
        var l = f.URL || f.webkitURL,
          m = l.createObjectURL(b);
        g ? g.location = m : location.href = m, g = null, setTimeout(function () {
          l.revokeObjectURL(m);
        }, 4E4);
      }
    });
  f.saveAs = g.saveAs = g,  true && (module.exports = g);
});

/***/ }),

/***/ 52813:
/*!******************************************************************************!*\
  !*** ./node_modules/@ngneat/until-destroy/fesm2022/ngneat-until-destroy.mjs ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UntilDestroy: () => (/* binding */ UntilDestroy),
/* harmony export */   untilDestroyed: () => (/* binding */ untilDestroyed)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 37934);



const NG_PIPE_DEF = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵNG_PIPE_DEF"];
function isPipe(target) {
  return !!target[NG_PIPE_DEF];
}

/**
 * Applied to instances and stores `Subject` instance when
 * no custom destroy method is provided.
 */
const DESTROY = Symbol('__destroy');
/**
 * Applied to definitions and informs that class is decorated
 */
const DECORATOR_APPLIED = Symbol('__decoratorApplied');
/**
 * If we use the `untilDestroyed` operator multiple times inside the single
 * instance providing different `destroyMethodName`, then all streams will
 * subscribe to the single subject. If any method is invoked, the subject will
 * emit and all streams will be unsubscribed. We wan't to prevent this behavior,
 * thus we store subjects under different symbols.
 */
function getSymbol(destroyMethodName) {
  if (typeof destroyMethodName === 'string') {
    return Symbol(`__destroy__${destroyMethodName}`);
  } else {
    return DESTROY;
  }
}
function markAsDecorated(type) {
  // Store this property on the prototype if it's an injectable class, component or directive.
  // We will be able to handle class extension this way.
  type.prototype[DECORATOR_APPLIED] = true;
}
function createSubjectOnTheInstance(instance, symbol) {
  if (!instance[symbol]) {
    instance[symbol] = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
  }
}
function completeSubjectOnTheInstance(instance, symbol) {
  if (instance[symbol]) {
    instance[symbol].next();
    instance[symbol].complete();
    // We also have to re-assign this property thus in the future
    // we will be able to create new subject on the same instance.
    instance[symbol] = null;
  }
}
function unsubscribe(property) {
  if (property instanceof rxjs__WEBPACK_IMPORTED_MODULE_0__.Subscription) {
    property.unsubscribe();
  }
}
function unsubscribeIfPropertyIsArrayLike(property) {
  Array.isArray(property) && property.forEach(unsubscribe);
}
function decorateNgOnDestroy(ngOnDestroy, options) {
  return function () {
    // Invoke the original `ngOnDestroy` if it exists
    ngOnDestroy && ngOnDestroy.call(this);
    // It's important to use `this` instead of caching instance
    // that may lead to memory leaks
    completeSubjectOnTheInstance(this, getSymbol());
    // Check if subscriptions are pushed to some array
    if (options.arrayName) {
      unsubscribeIfPropertyIsArrayLike(this[options.arrayName]);
    }
    // Loop through the properties and find subscriptions
    if (options.checkProperties) {
      for (const property in this) {
        if (options.blackList?.includes(property)) {
          continue;
        }
        unsubscribe(this[property]);
      }
    }
  };
}
function decorateProviderDirectiveOrComponent(type, options) {
  type.prototype.ngOnDestroy = decorateNgOnDestroy(type.prototype.ngOnDestroy, options);
}
function decoratePipe(type, options) {
  const def = type.ɵpipe;
  def.onDestroy = decorateNgOnDestroy(def.onDestroy, options);
}
function UntilDestroy(options = {}) {
  return type => {
    if (isPipe(type)) {
      decoratePipe(type, options);
    } else {
      decorateProviderDirectiveOrComponent(type, options);
    }
    markAsDecorated(type);
  };
}

// `LView` is an array where each index matches the specific data structure.
// The 7th element in an `LView` is an array of cleanup listeners. They are
// invoked when the view is removed (similar to `ComponentRef.onDestroy`).
const CLEANUP = 7;
const CheckerHasBeenSet = Symbol('CheckerHasBeenSet');
function setupSubjectUnsubscribedChecker(instance, destroy$) {
  // This function is used within the `untilDestroyed` operator and setups a function that
  // listens for the view removal and checks if the `destroy$` subject has any observers (usually `takeUntil`).
  // Note: this code will not be shipped into production since it's guarded with `ngDevMode`,
  // this means it'll exist only in development mode.
  if (instance[CheckerHasBeenSet] || isAngularInTestMode()) {
    return;
  }
  runOutsideAngular(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.from)(Promise.resolve()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(() => {
    let lContext;
    try {
      // The `ɵgetLContext` might not work for a pipe, because it's not a component nor a directive,
      // which means there's no `RNode` for an instance.
      lContext = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵgetLContext"])(instance);
    } catch {
      lContext = null;
    }
    const lView = lContext?.lView;
    if (lView == null) {
      return rxjs__WEBPACK_IMPORTED_MODULE_0__.EMPTY;
    }
    const lCleanup = lView[CLEANUP] || (lView[CLEANUP] = []);
    const cleanupHasBeenExecuted$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    // Note: this function is named for debugging purposes.
    lCleanup.push(function untilDestroyedLCleanup() {
      // We leave the Angular zone, so RxJS will also call subsequent `next` functions
      // outside of the Angular zone, which is done to avoid scheduling a microtask (through
      // `asapScheduler`) within the Angular zone.
      runOutsideAngular(() => {
        cleanupHasBeenExecuted$.next();
        cleanupHasBeenExecuted$.complete();
      });
    });
    return cleanupHasBeenExecuted$;
  }),
  // We can't use `observeOn(asapScheduler)` because this might break the app's change detection.
  // RxJS schedulers coalesce tasks and then flush the queue, which means our task might be scheduled
  // within the root zone, and then all of the tasks (that were set up by developers in the Angular zone)
  // will also be flushed in the root zone.
  (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(() => Promise.resolve())).subscribe(() => {
    // Note: The `observed` property is available only in RxJS@7.2.0, which will throw
    // an error in lower versions. We have integration test with RxJS@6 to ensure we don't
    // import operators from `rxjs`; that's why it's wrapped into braces. The `observers`
    // property is also being deprecated.
    const observed = destroy$['observed'] ?? destroy$['observers'].length > 0;
    if (observed) {
      console.warn(createMessage(instance));
    }
  }));
  instance[CheckerHasBeenSet] = true;
}
function isAngularInTestMode() {
  // Gets whether the code is currently running in a test environment.
  // We don't use `declare const` because it might cause conflicts with the real typings.
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    typeof __karma__ !== 'undefined' && !!__karma__ ||
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    typeof jasmine !== 'undefined' && !!jasmine ||
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    typeof jest !== 'undefined' && !!jest ||
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    typeof Mocha !== 'undefined' && !!Mocha ||
    // Jest is not defined in ESM mode since it must be access only by importing from `@jest/globals`.
    // There's no way to check if we're in Jest ESM mode or not, but we can check if the `process` is defined.
    // Note: it's required to check for `[object process]` because someone might be running unit tests with
    // Webpack and shimming `process`.
    typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]'
  );
}
function runOutsideAngular(fn) {
  // We cannot inject the `NgZone` class when running the checker. The `__ngContext__` is read
  // for the first time within a microtask which triggers change detection; we want to avoid that.
  // The `Zone` is always available globally when the `zone.js` is imported. Otherwise, it may be
  // nooped through bootstrap options. The `NgZone.runOutsideAngular` calls `Zone.root.run`, so we're
  // safe calling that function directly.
  const Zone = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵglobal"].Zone;
  const isNgZoneEnabled = !!Zone && typeof Zone.root?.run === 'function';
  return isNgZoneEnabled ? Zone.root.run(fn) : fn();
}
function createMessage(instance) {
  return `
  The ${instance.constructor.name} still has subscriptions that haven't been unsubscribed.
  This may happen if the class extends another class decorated with @UntilDestroy().
  The child class implements its own ngOnDestroy() method but doesn't call super.ngOnDestroy().
  Let's look at the following example:
  @UntilDestroy()
  @Directive()
  export abstract class BaseDirective {}
  @Component({ template: '' })
  export class ConcreteComponent extends BaseDirective implements OnDestroy {
    constructor() {
      super();
      someObservable$.pipe(untilDestroyed(this)).subscribe();
    }
    ngOnDestroy(): void {
      // Some logic here...
    }
  }
  The BaseDirective.ngOnDestroy() will not be called since Angular will call ngOnDestroy()
  on the ConcreteComponent, but not on the BaseDirective.
  One of the solutions is to declare an empty ngOnDestroy method on the BaseDirective:
  @UntilDestroy()
  @Directive()
  export abstract class BaseDirective {
    ngOnDestroy(): void {}
  }
  @Component({ template: '' })
  export class ConcreteComponent extends BaseDirective implements OnDestroy {
    constructor() {
      super();
      someObservable$.pipe(untilDestroyed(this)).subscribe();
    }
    ngOnDestroy(): void {
      // Some logic here...
      super.ngOnDestroy();
    }
  }
  `;
}
const NG_DEV_MODE = typeof ngDevMode === 'undefined' || ngDevMode;
function overrideNonDirectiveInstanceMethod(instance, destroyMethodName, symbol) {
  const originalDestroy = instance[destroyMethodName];
  if (NG_DEV_MODE && typeof originalDestroy !== 'function') {
    throw new Error(`${instance.constructor.name} is using untilDestroyed but doesn't implement ${destroyMethodName}`);
  }
  createSubjectOnTheInstance(instance, symbol);
  instance[destroyMethodName] = function () {
    // eslint-disable-next-line prefer-rest-params
    originalDestroy.apply(this, arguments);
    completeSubjectOnTheInstance(this, symbol);
    // We have to re-assign this property back to the original value.
    // If the `untilDestroyed` operator is called for the same instance
    // multiple times, then we will be able to get the original
    // method again and not the patched one.
    instance[destroyMethodName] = originalDestroy;
  };
}
function untilDestroyed(instance, destroyMethodName) {
  return source => {
    const symbol = getSymbol(destroyMethodName);
    // If `destroyMethodName` is passed then the developer applies
    // this operator to something non-related to Angular DI system
    if (typeof destroyMethodName === 'string') {
      overrideNonDirectiveInstanceMethod(instance, destroyMethodName, symbol);
    } else {
      NG_DEV_MODE && ensureClassIsDecorated(instance);
      createSubjectOnTheInstance(instance, symbol);
    }
    const destroy$ = instance[symbol];
    NG_DEV_MODE && setupSubjectUnsubscribedChecker(instance, destroy$);
    return source.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(destroy$));
  };
}
function ensureClassIsDecorated(instance) {
  const prototype = Object.getPrototypeOf(instance);
  const missingDecorator = !(DECORATOR_APPLIED in prototype);
  if (missingDecorator) {
    throw new Error('untilDestroyed operator cannot be used inside directives or ' + 'components or providers that are not decorated with UntilDestroy decorator');
  }
}

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 43956:
/*!******************************************************************!*\
  !*** ./node_modules/@ngrx/component/fesm2022/ngrx-component.mjs ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LetDirective: () => (/* binding */ LetDirective),
/* harmony export */   PushPipe: () => (/* binding */ PushPipe),
/* harmony export */   RenderScheduler: () => (/* binding */ RenderScheduler)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 37934);




function isNgZone(zone) {
  return zone instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone;
}
class TickScheduler {
  /** @nocollapse */
  static #_ = this.ɵfac = function TickScheduler_Factory(t) {
    return new (t || TickScheduler)();
  };
  /** @nocollapse */
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: TickScheduler,
    factory: () => (() => {
      const zone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone);
      return isNgZone(zone) ? new NoopTickScheduler() : (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(AnimationFrameTickScheduler);
    })(),
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TickScheduler, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root',
      useFactory: () => {
        const zone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone);
        return isNgZone(zone) ? new NoopTickScheduler() : (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(AnimationFrameTickScheduler);
      }
    }]
  }], null, null);
})();
class AnimationFrameTickScheduler extends TickScheduler {
  constructor(appRef) {
    super();
    this.appRef = appRef;
    this.isScheduled = false;
  }
  schedule() {
    if (!this.isScheduled) {
      this.isScheduled = true;
      requestAnimationFrame(() => {
        this.appRef.tick();
        this.isScheduled = false;
      });
    }
  }
  /** @nocollapse */
  static #_ = this.ɵfac = function AnimationFrameTickScheduler_Factory(t) {
    return new (t || AnimationFrameTickScheduler)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef));
  };
  /** @nocollapse */
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: AnimationFrameTickScheduler,
    factory: AnimationFrameTickScheduler.ɵfac,
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnimationFrameTickScheduler, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef
  }], null);
})();
class NoopTickScheduler extends TickScheduler {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  schedule() {}
}

/**
 * Provides rendering functionality regardless of whether `zone.js` is present
 * or not. It must be provided at the component/directive level.
 *
 * @usageNotes
 *
 * ### Rerender zone-less app on route changes
 *
 * ```ts
 * @Component({
 *   selector: 'app-root',
 *   template: '<router-outlet>',
 *   // 👇 `RenderScheduler` is provided at the component level
 *   providers: [RenderScheduler],
 *   changeDetection: ChangeDetectionStrategy.OnPush,
 * })
 * export class AppComponent implements OnInit {
 *   constructor(
 *     private readonly router: Router,
 *     private readonly renderScheduler: RenderScheduler
 *   ) {}
 *
 *   ngOnInit(): void {
 *     this.router.events
 *       .pipe(filter((e) => e instanceof NavigationEnd))
 *       .subscribe(() => this.renderScheduler.schedule());
 *   }
 * }
 * ```
 *
 * ### Rerender component on interval
 *
 * ```ts
 * @Component({
 *   selector: 'app-interval',
 *   template: '{{ elapsedTime }}ms',
 *   // 👇 `RenderScheduler` is provided at the component level
 *   providers: [RenderScheduler],
 *   changeDetection: ChangeDetectionStrategy.OnPush,
 * })
 * export class IntervalComponent implements OnInit {
 *   elapsedTime = 0;
 *
 *   constructor(private readonly renderScheduler: RenderScheduler) {}
 *
 *   ngOnInit(): void {
 *     setInterval(() => {
 *       this.elapsedTime += 1000;
 *       this.renderScheduler.schedule();
 *     }, 1000);
 *   }
 * }
 * ```
 */
class RenderScheduler {
  constructor(cdRef, tickScheduler) {
    this.cdRef = cdRef;
    this.tickScheduler = tickScheduler;
  }
  /**
   * Marks component and its ancestors as dirty.
   * It also schedules a new change detection cycle in zone-less mode.
   */
  schedule() {
    this.cdRef.markForCheck();
    this.tickScheduler.schedule();
  }
  /** @nocollapse */
  static #_ = this.ɵfac = function RenderScheduler_Factory(t) {
    return new (t || RenderScheduler)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](TickScheduler));
  };
  /** @nocollapse */
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: RenderScheduler,
    factory: RenderScheduler.ɵfac
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RenderScheduler, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
  }, {
    type: TickScheduler
  }], null);
})();
function createRenderScheduler() {
  return new RenderScheduler((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(TickScheduler));
}
function combineRenderEventHandlers(handlers) {
  return event => handlers[event.type]?.(event);
}
function fromPotentialObservable(potentialObservable) {
  if ((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.isObservable)(potentialObservable)) {
    return potentialObservable;
  }
  if (isObservableDictionary(potentialObservable)) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.combineLatest)(toDistinctObsDictionary(potentialObservable));
  }
  if (isPromiseLike(potentialObservable)) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.from)(potentialObservable);
  }
  return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(subscriber => {
    subscriber.next(potentialObservable);
  });
}
function isPromiseLike(value) {
  return typeof value?.then === 'function';
}
function isObservableDictionary(value) {
  return isDictionary(value) && Object.keys(value).length > 0 && Object.values(value).every(rxjs__WEBPACK_IMPORTED_MODULE_1__.isObservable);
}
function isDictionary(value) {
  return !!value && typeof value === 'object' && !Array.isArray(value);
}
function toDistinctObsDictionary(obsDictionary) {
  return Object.keys(obsDictionary).reduce((acc, key) => ({
    ...acc,
    [key]: obsDictionary[key].pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.distinctUntilChanged)())
  }), {});
}
function createRenderEventManager(handlers) {
  const handleRenderEvent = combineRenderEventHandlers(handlers);
  const potentialObservable$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.ReplaySubject(1);
  return {
    nextPotentialObservable(potentialObservable) {
      potentialObservable$.next(potentialObservable);
    },
    handlePotentialObservableChanges() {
      return potentialObservable$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.distinctUntilChanged)(), switchMapToRenderEvent(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.distinctUntilChanged)(renderEventComparator), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(handleRenderEvent));
    }
  };
}
function switchMapToRenderEvent() {
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.pipe)((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)(potentialObservable => {
    const observable$ = fromPotentialObservable(potentialObservable);
    let reset = true;
    let synchronous = true;
    return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(subscriber => {
      const subscription = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.untracked)(() => observable$.subscribe({
        next(value) {
          subscriber.next({
            type: 'next',
            value,
            reset,
            synchronous
          });
          reset = false;
        },
        error(error) {
          subscriber.next({
            type: 'error',
            error,
            reset,
            synchronous
          });
          reset = false;
        },
        complete() {
          subscriber.next({
            type: 'complete',
            reset,
            synchronous
          });
          reset = false;
        }
      }));
      if (reset) {
        subscriber.next({
          type: 'suspense',
          reset,
          synchronous: true
        });
        reset = false;
      }
      synchronous = false;
      return subscription;
    });
  }));
}
function renderEventComparator(previous, current) {
  if (previous.type !== current.type || previous.reset !== current.reset) {
    return false;
  }
  if (current.type === 'next') {
    return previous.value === current.value;
  }
  if (current.type === 'error') {
    return previous.error === current.error;
  }
  return true;
}

/**
 *
 * @description
 *
 * The `*ngrxLet` directive serves a convenient way of binding observables to a view context
 * (DOM element's scope). It also helps with several internal processing under the hood.
 *
 * @usageNotes
 *
 * ### Displaying Observable Values
 *
 * ```html
 * <ng-container *ngrxLet="number$ as n">
 *   <app-number [number]="n"></app-number>
 * </ng-container>
 *
 * <ng-container *ngrxLet="number$; let n">
 *   <app-number [number]="n"></app-number>
 * </ng-container>
 * ```
 *
 * ### Tracking Different Observable Events
 *
 * ```html
 * <ng-container *ngrxLet="number$ as n; error as e; complete as c">
 *   <app-number [number]="n" *ngIf="!e && !c">
 *   </app-number>
 *
 *   <p *ngIf="e">There is an error: {{ e }}</p>
 *   <p *ngIf="c">Observable is completed.</p>
 * </ng-container>
 * ```
 *
 * ### Combining Multiple Observables
 *
 * ```html
 * <ng-container *ngrxLet="{ users: users$, query: query$ } as vm">
 *   <app-search-bar [query]="vm.query"></app-search-bar>
 *   <app-user-list [users]="vm.users"></app-user-list>
 * </ng-container>
 * ```
 *
 * ### Using Suspense Template
 *
 * ```html
 * <ng-container *ngrxLet="number$ as n; suspenseTpl: loading">
 *   <app-number [number]="n"></app-number>
 * </ng-container>
 *
 * <ng-template #loading>
 *   <p>Loading...</p>
 * </ng-template>
 * ```
 *
 * ### Using Aliases for Non-Observable Values
 *
 * ```html
 * <ng-container *ngrxLet="userForm.controls.email as email">
 *   <input type="text" [formControl]="email" />
 *
 *   <ng-container *ngIf="email.errors && (email.touched || email.dirty)">
 *     <p *ngIf="email.errors.required">This field is required.</p>
 *     <p *ngIf="email.errors.email">This field must be an email.</p>
 *   </ng-container>
 * </ng-container>
 * ```
 *
 * @publicApi
 */
class LetDirective {
  set ngrxLet(potentialObservable) {
    this.renderEventManager.nextPotentialObservable(potentialObservable);
  }
  constructor(mainTemplateRef, viewContainerRef, errorHandler, renderScheduler) {
    this.mainTemplateRef = mainTemplateRef;
    this.viewContainerRef = viewContainerRef;
    this.errorHandler = errorHandler;
    this.renderScheduler = renderScheduler;
    this.isMainViewCreated = false;
    this.isSuspenseViewCreated = false;
    this.viewContext = {
      $implicit: undefined,
      ngrxLet: undefined,
      error: undefined,
      complete: false
    };
    this.renderEventManager = createRenderEventManager({
      suspense: () => {
        this.viewContext.$implicit = undefined;
        this.viewContext.ngrxLet = undefined;
        this.viewContext.error = undefined;
        this.viewContext.complete = false;
        this.renderSuspenseView();
      },
      next: event => {
        this.viewContext.$implicit = event.value;
        this.viewContext.ngrxLet = event.value;
        if (event.reset) {
          this.viewContext.error = undefined;
          this.viewContext.complete = false;
        }
        this.renderMainView(event.synchronous);
      },
      error: event => {
        this.viewContext.error = event.error;
        if (event.reset) {
          this.viewContext.$implicit = undefined;
          this.viewContext.ngrxLet = undefined;
          this.viewContext.complete = false;
        }
        this.renderMainView(event.synchronous);
        this.errorHandler.handleError(event.error);
      },
      complete: event => {
        this.viewContext.complete = true;
        if (event.reset) {
          this.viewContext.$implicit = undefined;
          this.viewContext.ngrxLet = undefined;
          this.viewContext.error = undefined;
        }
        this.renderMainView(event.synchronous);
      }
    });
    this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subscription();
  }
  static ngTemplateContextGuard(dir, ctx) {
    return true;
  }
  ngOnInit() {
    this.subscription.add(this.renderEventManager.handlePotentialObservableChanges().subscribe());
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  renderMainView(isSyncEvent) {
    if (this.isSuspenseViewCreated) {
      this.isSuspenseViewCreated = false;
      this.viewContainerRef.clear();
    }
    if (!this.isMainViewCreated) {
      this.isMainViewCreated = true;
      this.viewContainerRef.createEmbeddedView(this.mainTemplateRef, this.viewContext);
    }
    if (!isSyncEvent) {
      this.renderScheduler.schedule();
    }
  }
  renderSuspenseView() {
    if (this.isMainViewCreated) {
      this.isMainViewCreated = false;
      this.viewContainerRef.clear();
    }
    if (this.suspenseTemplateRef && !this.isSuspenseViewCreated) {
      this.isSuspenseViewCreated = true;
      this.viewContainerRef.createEmbeddedView(this.suspenseTemplateRef);
    }
  }
  /** @nocollapse */
  static #_ = this.ɵfac = function LetDirective_Factory(t) {
    return new (t || LetDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ErrorHandler), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](RenderScheduler));
  };
  /** @nocollapse */
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: LetDirective,
    selectors: [["", "ngrxLet", ""]],
    inputs: {
      ngrxLet: "ngrxLet",
      suspenseTemplateRef: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].None, "ngrxLetSuspenseTpl", "suspenseTemplateRef"]
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([RenderScheduler])]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LetDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      standalone: true,
      selector: '[ngrxLet]',
      providers: [RenderScheduler]
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ErrorHandler
  }, {
    type: RenderScheduler
  }], {
    ngrxLet: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    suspenseTemplateRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['ngrxLetSuspenseTpl']
    }]
  });
})();

/**
 * @description
 *
 * The `ngrxPush` pipe serves as a drop-in replacement for the `async` pipe.
 * It contains intelligent handling of change detection to enable us
 * running in zone-full as well as zone-less mode without any changes to the code.
 *
 * @usageNotes
 *
 * ### Displaying Observable Values
 *
 * ```html
 * <p>{{ number$ | ngrxPush }}</p>
 *
 * <ng-container *ngIf="number$ | ngrxPush as n">{{ n }}</ng-container>
 *
 * <app-number [number]="number$ | ngrxPush"></app-number>
 * ```
 *
 * ### Combining Multiple Observables
 *
 * ```html
 * <code>
 *   {{ { users: users$, query: query$ } | ngrxPush | json }}
 * </code>
 * ```
 *
 * @publicApi
 */
class PushPipe {
  constructor(errorHandler) {
    this.errorHandler = errorHandler;
    this.renderScheduler = createRenderScheduler();
    this.renderEventManager = createRenderEventManager({
      suspense: event => this.setRenderedValue(undefined, event.synchronous),
      next: event => this.setRenderedValue(event.value, event.synchronous),
      error: event => {
        if (event.reset) {
          this.setRenderedValue(undefined, event.synchronous);
        }
        this.errorHandler.handleError(event.error);
      },
      complete: event => {
        if (event.reset) {
          this.setRenderedValue(undefined, event.synchronous);
        }
      }
    });
    this.subscription = this.renderEventManager.handlePotentialObservableChanges().subscribe();
  }
  transform(potentialObservable) {
    this.renderEventManager.nextPotentialObservable(potentialObservable);
    return this.renderedValue;
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  setRenderedValue(value, isSyncEvent) {
    if (value !== this.renderedValue) {
      this.renderedValue = value;
      if (!isSyncEvent) {
        this.renderScheduler.schedule();
      }
    }
  }
  /** @nocollapse */
  static #_ = this.ɵfac = function PushPipe_Factory(t) {
    return new (t || PushPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ErrorHandler, 16));
  };
  /** @nocollapse */
  static #_2 = this.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "ngrxPush",
    type: PushPipe,
    pure: false,
    standalone: true
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PushPipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
    args: [{
      standalone: true,
      name: 'ngrxPush',
      pure: false
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ErrorHandler
  }], null);
})();

/**
 * DO NOT EDIT
 *
 * This file is automatically generated at build
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}])
//# sourceMappingURL=libs_install_return-devices_feat-overview_src_index_ts.js.map