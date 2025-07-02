(self["webpackChunkinbox_messages_mfe"] = self["webpackChunkinbox_messages_mfe"] || []).push([["libs_engagement_inbox-messages_feat-inbox-messages-overview_src_index_ts"],{

/***/ 25361:
/*!**********************************************************************************!*\
  !*** ./libs/engagement/inbox-messages/feat-inbox-messages-overview/src/index.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InboxMessagesOverviewComponent: () => (/* reexport safe */ _lib_inbox_messages_overview_component__WEBPACK_IMPORTED_MODULE_0__.InboxMessagesOverviewComponent)
/* harmony export */ });
/* harmony import */ var _lib_inbox_messages_overview_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/inbox-messages-overview.component */ 30786);


/***/ }),

/***/ 30786:
/*!******************************************************************************************************************!*\
  !*** ./libs/engagement/inbox-messages/feat-inbox-messages-overview/src/lib/inbox-messages-overview.component.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InboxMessagesOverviewComponent: () => (/* binding */ InboxMessagesOverviewComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inbox_messages_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inbox-messages/ui */ 33535);
/* harmony import */ var _inbox_messages_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inbox_messages_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _inbox_messages_data_access__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inbox-messages/data-access */ 3059);
/* harmony import */ var _inbox_messages_data_access__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_inbox_messages_data_access__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/ocapi/src/lib/components/login.component */ 76158);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_5__);










function InboxMessagesOverviewComponent_tg_inbox_message_loader_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tg-inbox-message-loader");
  }
}
const _forTrack0 = ($index, $item) => $item.id;
function InboxMessagesOverviewComponent_ng_template_3_Conditional_0_Conditional_0_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tg-inbox-message", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("inboxMessageClicked", function InboxMessagesOverviewComponent_ng_template_3_Conditional_0_Conditional_0_For_4_Template_tg_inbox_message_inboxMessageClicked_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r15.handleInboxMessageClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const inboxMessage_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("inboxMessage", inboxMessage_r10);
  }
}
function InboxMessagesOverviewComponent_ng_template_3_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](3, InboxMessagesOverviewComponent_ng_template_3_Conditional_0_Conditional_0_For_4_Template, 1, 1, "tg-inbox-message", 5, _forTrack0);
  }
  if (rf & 2) {
    const inboxMessages_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "ng.inbox-messages.important-messages.lbl"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](inboxMessages_r5 == null ? null : inboxMessages_r5.pinnedInboxMessages);
  }
}
function InboxMessagesOverviewComponent_ng_template_3_Conditional_0_Conditional_1_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tg-inbox-message", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("deleteMessage", function InboxMessagesOverviewComponent_ng_template_3_Conditional_0_Conditional_1_For_4_Template_tg_inbox_message_deleteMessage_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r24.deleteMessage($event));
    })("inboxMessageClicked", function InboxMessagesOverviewComponent_ng_template_3_Conditional_0_Conditional_1_For_4_Template_tg_inbox_message_inboxMessageClicked_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r26.handleInboxMessageClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const inboxMessage_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("inboxMessage", inboxMessage_r19);
  }
}
function InboxMessagesOverviewComponent_ng_template_3_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](3, InboxMessagesOverviewComponent_ng_template_3_Conditional_0_Conditional_1_For_4_Template, 1, 1, "tg-inbox-message", 5, _forTrack0);
  }
  if (rf & 2) {
    const inboxMessages_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "ng.inbox-messages.other-messages.lbl"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](inboxMessages_r5 == null ? null : inboxMessages_r5.otherInboxMessages);
  }
}
function InboxMessagesOverviewComponent_ng_template_3_Conditional_0_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tg-inbox-message-error", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("errorAction", function InboxMessagesOverviewComponent_ng_template_3_Conditional_0_Conditional_2_Conditional_0_Template_tg_inbox_message_error_errorAction_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r32);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r31.handleErrorAction());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function InboxMessagesOverviewComponent_ng_template_3_Conditional_0_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tg-inbox-message-empty-data");
  }
}
function InboxMessagesOverviewComponent_ng_template_3_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, InboxMessagesOverviewComponent_ng_template_3_Conditional_0_Conditional_2_Conditional_0_Template, 1, 0, "tg-inbox-message-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, InboxMessagesOverviewComponent_ng_template_3_Conditional_0_Conditional_2_Conditional_2_Template, 1, 0);
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    let InboxMessagesOverviewComponent_ng_template_3_Conditional_0_Conditional_2_contFlowTmp;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](0, (InboxMessagesOverviewComponent_ng_template_3_Conditional_0_Conditional_2_contFlowTmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 1, ctx_r8.loadError$)) ? 0 : 2, InboxMessagesOverviewComponent_ng_template_3_Conditional_0_Conditional_2_contFlowTmp);
  }
}
function InboxMessagesOverviewComponent_ng_template_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, InboxMessagesOverviewComponent_ng_template_3_Conditional_0_Conditional_0_Template, 5, 3)(1, InboxMessagesOverviewComponent_ng_template_3_Conditional_0_Conditional_1_Template, 5, 3)(2, InboxMessagesOverviewComponent_ng_template_3_Conditional_0_Conditional_2_Template, 3, 3);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](0, (ctx == null ? null : ctx.pinnedInboxMessages == null ? null : ctx.pinnedInboxMessages.length) ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](1, (ctx == null ? null : ctx.otherInboxMessages == null ? null : ctx.otherInboxMessages.length) ? 1 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](2, !(ctx == null ? null : ctx.pinnedInboxMessages == null ? null : ctx.pinnedInboxMessages.length) && !(ctx == null ? null : ctx.otherInboxMessages == null ? null : ctx.otherInboxMessages.length) ? 2 : -1);
  }
}
function InboxMessagesOverviewComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, InboxMessagesOverviewComponent_ng_template_3_Conditional_0_Template, 3, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "async");
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    let InboxMessagesOverviewComponent_ng_template_3_contFlowTmp;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](0, (InboxMessagesOverviewComponent_ng_template_3_contFlowTmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 1, ctx_r1.inboxMessages$)) ? 0 : -1, InboxMessagesOverviewComponent_ng_template_3_contFlowTmp);
  }
}
class InboxMessagesOverviewComponent {
  constructor(inboxMessagesFacade) {
    this.inboxMessagesFacade = inboxMessagesFacade;
    this.scopes = [];
    this.inboxMessages$ = this.inboxMessagesFacade.inboxMessages$;
    this.loadError$ = this.inboxMessagesFacade.loadError$;
    this.loading$ = this.inboxMessagesFacade.loading$;
    this.inboxMessagesFacade.initDataLayer();
  }
  initAfterLoggedIn() {
    this.inboxMessagesFacade.loadInboxMessages();
  }
  handleInboxMessageClick(message) {
    this.inboxMessagesFacade.sendInboxMessageClickedEvent(message);
  }
  handleErrorAction() {
    this.inboxMessagesFacade.loadInboxMessages();
  }
  deleteMessage(message) {
    this.inboxMessagesFacade.deleteMessage(message);
  }
  static #_ = this.ɵfac = function InboxMessagesOverviewComponent_Factory(t) {
    return new (t || InboxMessagesOverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_inbox_messages_data_access__WEBPACK_IMPORTED_MODULE_2__.InboxMessagesFacade));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: InboxMessagesOverviewComponent,
    selectors: [["tg-inbox-messages-overview"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
    decls: 5,
    vars: 5,
    consts: [[3, "scopes", "componentCanRender"], [4, "ngIf", "ngIfElse"], ["inboxMessageContent", ""], [1, "text-flow", "text-flow--body"], [3, "inboxMessage", "inboxMessageClicked"], [3, "inboxMessage"], [1, "text-flow", "text-flow--body", "mt--xxl"], [3, "inboxMessage", "deleteMessage", "inboxMessageClicked"], [3, "errorAction"]],
    template: function InboxMessagesOverviewComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tg-login", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("componentCanRender", function InboxMessagesOverviewComponent_Template_tg_login_componentCanRender_0_listener() {
          return ctx.initAfterLoggedIn();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, InboxMessagesOverviewComponent_tg_inbox_message_loader_1_Template, 1, 0, "tg-inbox-message-loader", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, InboxMessagesOverviewComponent_ng_template_3_Template, 2, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("scopes", ctx.scopes);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 3, ctx.loading$))("ngIfElse", _r2);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe, _inbox_messages_ui__WEBPACK_IMPORTED_MODULE_1__.InboxMessageComponent, _inbox_messages_ui__WEBPACK_IMPORTED_MODULE_1__.InboxMessageErrorComponent, _inbox_messages_ui__WEBPACK_IMPORTED_MODULE_1__.InboxMessageLoaderComponent, _inbox_messages_ui__WEBPACK_IMPORTED_MODULE_1__.InboxMessageEmptyDataComponent, _inbox_messages_data_access__WEBPACK_IMPORTED_MODULE_2__.InboxMessagesNgrxModule, _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_4__.LoginModule, _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_4__.LoginComponent],
    encapsulation: 2
  });
}

/***/ })

}])
//# sourceMappingURL=libs_engagement_inbox-messages_feat-inbox-messages-overview_src_index_ts.js.map