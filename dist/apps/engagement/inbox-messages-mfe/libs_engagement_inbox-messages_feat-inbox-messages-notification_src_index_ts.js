(self["webpackChunkinbox_messages_mfe"] = self["webpackChunkinbox_messages_mfe"] || []).push([["libs_engagement_inbox-messages_feat-inbox-messages-notification_src_index_ts"],{

/***/ 58752:
/*!**************************************************************************************!*\
  !*** ./libs/engagement/inbox-messages/feat-inbox-messages-notification/src/index.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InboxMessagesNotificationComponent: () => (/* reexport safe */ _lib_inbox_messages_notification_component__WEBPACK_IMPORTED_MODULE_0__.InboxMessagesNotificationComponent)
/* harmony export */ });
/* harmony import */ var _lib_inbox_messages_notification_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/inbox-messages-notification.component */ 33589);


/***/ }),

/***/ 33589:
/*!**************************************************************************************************************************!*\
  !*** ./libs/engagement/inbox-messages/feat-inbox-messages-notification/src/lib/inbox-messages-notification.component.ts ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InboxMessagesNotificationComponent: () => (/* binding */ InboxMessagesNotificationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _inbox_messages_data_access__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inbox-messages/data-access */ 3059);
/* harmony import */ var _inbox_messages_data_access__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_inbox_messages_data_access__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _inbox_messages_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inbox-messages/ui */ 33535);
/* harmony import */ var _inbox_messages_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_inbox_messages_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ 58859);









const LOGIN_STATUS_COOKIE = 'loginStatus';
const LOGGED_IN_STATUS = 'LOGGED_IN';
class InboxMessagesNotificationComponent {
  constructor(inboxMessagesFacade, cookieService) {
    this.inboxMessagesFacade = inboxMessagesFacade;
    this.cookieService = cookieService;
    this.lazyLoadingOutputEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.scopes = [];
    this.unreadInboxMessagesCount$ = this.inboxMessagesFacade.unreadInboxMessagesCount$;
    this.inboxMessagesFacade.initDataLayer();
  }
  ngAfterViewInit() {
    if (this.isLoggedIn) {
      this.inboxMessagesFacade.loadUnreadInboxMessagesCount();
    }
  }
  handleNotificationClick(url) {
    this.inboxMessagesFacade.sendNotificationClickedEvent(url);
  }
  get isLoggedIn() {
    const loginStatus = this.cookieService.get(LOGIN_STATUS_COOKIE);
    return loginStatus === LOGGED_IN_STATUS;
  }
  static #_ = this.ɵfac = function InboxMessagesNotificationComponent_Factory(t) {
    return new (t || InboxMessagesNotificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_inbox_messages_data_access__WEBPACK_IMPORTED_MODULE_2__.InboxMessagesFacade), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__.CookieService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: InboxMessagesNotificationComponent,
    selectors: [["tg-inbox-messages-notification"]],
    inputs: {
      inboxOverviewPageUrl: "inboxOverviewPageUrl",
      hideIconLabel: "hideIconLabel"
    },
    outputs: {
      lazyLoadingOutputEvent: "lazyLoadingOutputEvent"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 5,
    consts: [[3, "inboxOverviewPageUrl", "hideIconLabel", "unreadMessages", "notificationClicked", "unreadMessagesChange"]],
    template: function InboxMessagesNotificationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tg-inbox-message-notification-icon", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("notificationClicked", function InboxMessagesNotificationComponent_Template_tg_inbox_message_notification_icon_notificationClicked_0_listener($event) {
          return ctx.handleNotificationClick($event);
        })("unreadMessagesChange", function InboxMessagesNotificationComponent_Template_tg_inbox_message_notification_icon_unreadMessagesChange_0_listener($event) {
          return ctx.lazyLoadingOutputEvent.emit($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inboxOverviewPageUrl", ctx.inboxOverviewPageUrl)("hideIconLabel", ctx.hideIconLabel)("unreadMessages", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, ctx.unreadInboxMessagesCount$));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.AsyncPipe, _inbox_messages_data_access__WEBPACK_IMPORTED_MODULE_2__.InboxMessagesNgrxModule, _inbox_messages_ui__WEBPACK_IMPORTED_MODULE_3__.InboxMessageNotificationIconComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 58859:
/*!*************************************************************************!*\
  !*** ./node_modules/ngx-cookie-service/fesm2022/ngx-cookie-service.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CookieService: () => (/* binding */ CookieService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);




// This service is based on the `ng2-cookies` package which sadly is not a service and does
// not use `DOCUMENT` injection and therefore doesn't work well with AoT production builds.
// Package: https://github.com/BCJTI/ng2-cookies
class CookieService {
  constructor(document,
  // Get the `PLATFORM_ID` so we can check if we're in a browser.
  platformId) {
    this.document = document;
    this.platformId = platformId;
    this.documentIsAccessible = (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId);
  }
  /**
   * Get cookie Regular Expression
   *
   * @param name Cookie name
   * @returns property RegExp
   *
   * @author: Stepan Suvorov
   * @since: 1.0.0
   */
  static getCookieRegExp(name) {
    const escapedName = name.replace(/([\[\]{}()|=;+?,.*^$])/gi, '\\$1');
    return new RegExp('(?:^' + escapedName + '|;\\s*' + escapedName + ')=(.*?)(?:;|$)', 'g');
  }
  /**
   * Gets the unencoded version of an encoded component of a Uniform Resource Identifier (URI).
   *
   * @param encodedURIComponent A value representing an encoded URI component.
   *
   * @returns The unencoded version of an encoded component of a Uniform Resource Identifier (URI).
   *
   * @author: Stepan Suvorov
   * @since: 1.0.0
   */
  static safeDecodeURIComponent(encodedURIComponent) {
    try {
      return decodeURIComponent(encodedURIComponent);
    } catch {
      // probably it is not uri encoded. return as is
      return encodedURIComponent;
    }
  }
  /**
   * Return `true` if {@link Document} is accessible, otherwise return `false`
   *
   * @param name Cookie name
   * @returns boolean - whether cookie with specified name exists
   *
   * @author: Stepan Suvorov
   * @since: 1.0.0
   */
  check(name) {
    if (!this.documentIsAccessible) {
      return false;
    }
    name = encodeURIComponent(name);
    const regExp = CookieService.getCookieRegExp(name);
    return regExp.test(this.document.cookie);
  }
  /**
   * Get cookies by name
   *
   * @param name Cookie name
   * @returns property value
   *
   * @author: Stepan Suvorov
   * @since: 1.0.0
   */
  get(name) {
    if (this.documentIsAccessible && this.check(name)) {
      name = encodeURIComponent(name);
      const regExp = CookieService.getCookieRegExp(name);
      const result = regExp.exec(this.document.cookie);
      return result[1] ? CookieService.safeDecodeURIComponent(result[1]) : '';
    } else {
      return '';
    }
  }
  /**
   * Get all cookies in JSON format
   *
   * @returns all the cookies in json
   *
   * @author: Stepan Suvorov
   * @since: 1.0.0
   */
  getAll() {
    if (!this.documentIsAccessible) {
      return {};
    }
    const cookies = {};
    const document = this.document;
    if (document.cookie && document.cookie !== '') {
      document.cookie.split(';').forEach(currentCookie => {
        const [cookieName, cookieValue] = currentCookie.split('=');
        cookies[CookieService.safeDecodeURIComponent(cookieName.replace(/^ /, ''))] = CookieService.safeDecodeURIComponent(cookieValue);
      });
    }
    return cookies;
  }
  set(name, value, expiresOrOptions, path, domain, secure, sameSite) {
    if (!this.documentIsAccessible) {
      return;
    }
    if (typeof expiresOrOptions === 'number' || expiresOrOptions instanceof Date || path || domain || secure || sameSite) {
      const optionsBody = {
        expires: expiresOrOptions,
        path,
        domain,
        secure,
        sameSite: sameSite ? sameSite : 'Lax'
      };
      this.set(name, value, optionsBody);
      return;
    }
    let cookieString = encodeURIComponent(name) + '=' + encodeURIComponent(value) + ';';
    const options = expiresOrOptions ? expiresOrOptions : {};
    if (options.expires) {
      if (typeof options.expires === 'number') {
        const dateExpires = new Date(new Date().getTime() + options.expires * 1000 * 60 * 60 * 24);
        cookieString += 'expires=' + dateExpires.toUTCString() + ';';
      } else {
        cookieString += 'expires=' + options.expires.toUTCString() + ';';
      }
    }
    if (options.path) {
      cookieString += 'path=' + options.path + ';';
    }
    if (options.domain) {
      cookieString += 'domain=' + options.domain + ';';
    }
    if (options.secure === false && options.sameSite === 'None') {
      options.secure = true;
      console.warn(`[ngx-cookie-service] Cookie ${name} was forced with secure flag because sameSite=None.` + `More details : https://github.com/stevermeister/ngx-cookie-service/issues/86#issuecomment-597720130`);
    }
    if (options.secure) {
      cookieString += 'secure;';
    }
    if (!options.sameSite) {
      options.sameSite = 'Lax';
    }
    cookieString += 'sameSite=' + options.sameSite + ';';
    this.document.cookie = cookieString;
  }
  /**
   * Delete cookie by name
   *
   * @param name   Cookie name
   * @param path   Cookie path
   * @param domain Cookie domain
   * @param secure Cookie secure flag
   * @param sameSite Cookie sameSite flag - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite
   *
   * @author: Stepan Suvorov
   * @since: 1.0.0
   */
  delete(name, path, domain, secure, sameSite = 'Lax') {
    if (!this.documentIsAccessible) {
      return;
    }
    const expiresDate = new Date('Thu, 01 Jan 1970 00:00:01 GMT');
    this.set(name, '', {
      expires: expiresDate,
      path,
      domain,
      secure,
      sameSite
    });
  }
  /**
   * Delete all cookies
   *
   * @param path   Cookie path
   * @param domain Cookie domain
   * @param secure Is the Cookie secure
   * @param sameSite Is the cookie same site
   *
   * @author: Stepan Suvorov
   * @since: 1.0.0
   */
  deleteAll(path, domain, secure, sameSite = 'Lax') {
    if (!this.documentIsAccessible) {
      return;
    }
    const cookies = this.getAll();
    for (const cookieName in cookies) {
      if (cookies.hasOwnProperty(cookieName)) {
        this.delete(cookieName, path, domain, secure, sameSite);
      }
    }
  }
  static #_ = this.ɵfac = function CookieService_Factory(t) {
    return new (t || CookieService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID));
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: CookieService,
    factory: CookieService.ɵfac,
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CookieService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], () => [{
    type: Document,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID]
    }]
  }], null);
})();

/*
 * Public API Surface of ngx-cookie-service
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}])
//# sourceMappingURL=libs_engagement_inbox-messages_feat-inbox-messages-notification_src_index_ts.js.map