import * as i0 from '@angular/core';
import { Injectable, inject, InjectionToken, Inject, EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import * as i2$1 from '@telenet/ng-lib-config';
import { ConfigConstants, ConfigService } from '@telenet/ng-lib-config';
import * as i3 from '@telenet/ng-lib-page';
import { LanguageService, UrlService, QueryParamEnum, CustomerBrandEnum } from '@telenet/ng-lib-page';
import { isEmpty, includes, some, merge, map, forEach, each } from 'lodash-es';
import * as i1 from '@telenet/ng-lib-datalayer';
import { EventNameEnum, EventTypeEnum, EventStatusEnum } from '@telenet/ng-lib-datalayer';
import { shareReplay, catchError, take, finalize, map as map$1, tap, switchMap, concatMap, mergeMap, takeLast, takeUntil } from 'rxjs/operators';
import { throwError, of, ReplaySubject, Subject } from 'rxjs';
import * as i3$1 from '@telenet/ng-lib-message';
import { MessageService, ErrorMessage } from '@telenet/ng-lib-message';
import * as i1$1 from '@angular/common/http';
import { HttpHeaders, HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import * as i2 from 'ngx-cookie-service';
import { CookieService } from 'ngx-cookie-service';
import { LogFactory } from '@telenet/ng-lib-shared';
import * as i4 from '@telenet/ng-lib-omapi';
import * as i5 from '@telenet/ng-lib-omapi-query';
import SockJS from 'sockjs-client';
import { RxStomp } from '@stomp/rx-stomp';
import * as i6 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i7 from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import { makeFactory } from 'factory.ts';

var HttpTypesEnum;
(function (HttpTypesEnum) {
    HttpTypesEnum["GET"] = "GET";
    HttpTypesEnum["POST"] = "POST";
    HttpTypesEnum["PUT"] = "PUT";
    HttpTypesEnum["PATCH"] = "PATCH";
    HttpTypesEnum["DELETE"] = "DELETE";
    HttpTypesEnum["HEAD"] = "HEAD";
})(HttpTypesEnum || (HttpTypesEnum = {}));

var LoginStatusEnum;
(function (LoginStatusEnum) {
    LoginStatusEnum["LOGGED_IN"] = "LOGGED_IN";
    LoginStatusEnum["NOT_LOGGED_IN"] = "NOT_LOGGED_IN";
    LoginStatusEnum["INSUFFICIENT_PERMISSIONS"] = "INSUFFICIENT_PERMISSIONS";
    LoginStatusEnum["NARROWED"] = "NARROWED";
    LoginStatusEnum["UNKNOWN"] = "UNKNOWN";
})(LoginStatusEnum || (LoginStatusEnum = {}));

class LoginDetailsConstants {
    static EMPTY = '';
    static MASTER_ROLES = ['MASTER_USER', 'PREPAID_MASTER_USER', 'MANAGER'];
    static CHILD_ROLES = ['CHILD_USER', 'PREPAID_CHILD_USER'];
    static FLEET_MANAGER_ROLE = 'FLEET MANAGER';
    static FLEET_USER_ROLE = 'FLEET USER';
    static MEMBER_ROLE = 'MEMBER';
    static MANAGER_ROLE = 'MANAGER';
    static ORPHAN_ROLE = 'ORPHAN';
    static INTERNET_MASTER_ROLE = 'INTERNET_MASTER';
    static CUSTOMER_ADMIN_ROLE = 'CUSTOMER_ADMIN';
    static CONTRACT_HOLDER_ROLE = 'CONTRACT_HOLDER';
    static MANAGER_ROLES = [
        LoginDetailsConstants.MANAGER_ROLE,
        LoginDetailsConstants.INTERNET_MASTER_ROLE,
        LoginDetailsConstants.CUSTOMER_ADMIN_ROLE,
        LoginDetailsConstants.CONTRACT_HOLDER_ROLE,
    ];
    static CHARACTER_LIMIT = 39;
    static SUFFIX = '...';
    static BSS_SYSTEM_BASE_LEGACY = 'BASE_LEGACY';
    static BSS_SYSTEM_TELENET_LEGACY = 'TELENET_LEGACY';
    static BSS_SYSTEM_NETCRACKER = 'NETCRACKER';
    static STYLE_HINT = 'care';
    static PROMPT_NONE = 'none';
    static PROMPT_LOGIN = 'login';
    static CODE = 'code';
    static CLAIMS = '{"id_token":{"http://telenet.be/claims/roles":null,"http://telenet.be/claims/licenses":null}}';
    static CLIENT_ID_OCAPI_BASE = 'ocapi_base';
    static SOURCE_EMAIL = 'EMAIL';
    static CUSTOMER_REGISTRATION_URL = 'customer_registration_url';
    static COOKIE_KEYS = 'cookie_keys';
    static PARAM_CHANNEL = 'channel';
    static PARAM_IDP = 'idp';
    static PARAM_FLOW = 'flow';
    static PARAM_SDATA = 'sdata';
    static PARAM_REFERRER_URL = 'referrer_url';
    static ITS_ME_REGISTER_ENDPOINT = '/itsme/register';
    static STEP_ID_LOGIN_REGISTER = 'login-register';
    static LOGIN = 'LOGIN';
    static LOGIN_STATUS_COOKIENAME = 'loginStatus';
}

class SalesConstants {
    static QUERY_URL = 'queryurl';
    static SPEC_URL = 'specurl';
}

class LoginDetails {
    state;
    nonce;
    status;
    narrowed = false;
    httpStatus;
    scopes;
    bssSystem;
    customerNumber;
    identityId;
    username;
    firstName;
    lastName;
    narrowedScope;
    authAge;
    isPid;
    bssSytem;
    isImpersonated;
    role;
    isExplicitLogin;
    isTelenetLogin;
    isSubLogin;
    loginAlias;
    identityRequestId;
    pegaServiceCaseId;
    contactNumber;
    advisorId;
    msisdn;
    constructor(httpStatus) {
        this.httpStatus = httpStatus;
    }
    isLoggedIn() {
        return this.httpStatus === 200;
    }
    isNarrowed() {
        return this.isLoggedIn() && this.narrowedScope;
    }
    invalidResponse() {
        return this.httpStatus === 0;
    }
    isAuthenticated() {
        return this.isLoggedIn() && !this.isNarrowed() && !this.invalidResponse();
    }
    isMaster() {
        return !isEmpty(this.role) && includes(LoginDetailsConstants.MASTER_ROLES, this.role);
    }
    isChild() {
        return !isEmpty(this.role) && includes(LoginDetailsConstants.CHILD_ROLES, this.role);
    }
    isMember() {
        return !isEmpty(this.role) && this.role.toUpperCase().includes(LoginDetailsConstants.MEMBER_ROLE);
    }
    isContractHolder() {
        return !isEmpty(this.role) && this.role.toUpperCase().includes(LoginDetailsConstants.CONTRACT_HOLDER_ROLE);
    }
    isOrphan() {
        return !isEmpty(this.role) && this.role.toUpperCase().includes(LoginDetailsConstants.ORPHAN_ROLE);
    }
    isNewlyRegisteredUser() {
        return !!isEmpty(this.role) && !isEmpty(this.firstName);
    }
    getName() {
        return this.firstName.concat(LoginDetailsConstants.EMPTY).concat(this.lastName);
    }
    getShortenedName() {
        return this.getName().length <= LoginDetailsConstants.CHARACTER_LIMIT
            ? this.getName()
            : this.getName()
                .substring(0, LoginDetailsConstants.CHARACTER_LIMIT - LoginDetailsConstants.SUFFIX.length)
                .concat(LoginDetailsConstants.SUFFIX);
    }
    isCafeUser() {
        return this.bssSystem === LoginDetailsConstants.BSS_SYSTEM_TELENET_LEGACY;
    }
    isBaseLegacyCustomer() {
        return this.bssSystem === LoginDetailsConstants.BSS_SYSTEM_BASE_LEGACY;
    }
    isBssSystemNetcracker() {
        return this.bssSystem === LoginDetailsConstants.BSS_SYSTEM_NETCRACKER;
    }
    hasScope(scopeName) {
        return some(this.scopes, function (scope) {
            return scope.toUpperCase() === scopeName.toUpperCase();
        });
    }
    isFleetManager() {
        return !isEmpty(this.role) && this.role === LoginDetailsConstants.FLEET_MANAGER_ROLE;
    }
    isFleetUser() {
        return !isEmpty(this.role) && this.role === LoginDetailsConstants.FLEET_USER_ROLE;
    }
    isManager() {
        return !isEmpty(this.role) && this.role === LoginDetailsConstants.MANAGER_ROLE;
    }
    hasManagerRole() {
        return !isEmpty(this.role) && LoginDetailsConstants.MANAGER_ROLES.includes(this.role);
    }
    enrich(loginDetailsJSON) {
        let enrichedLoginDetails = new LoginDetails(401);
        if (!isEmpty(loginDetailsJSON)) {
            enrichedLoginDetails = merge(enrichedLoginDetails, loginDetailsJSON);
        }
        return enrichedLoginDetails;
    }
    isNotLoggedInOrDoesNotHaveScope(scope) {
        return !this.isLoggedIn() || !this.hasScope(scope);
    }
    get isSuccess() {
        return this.httpStatus === 200;
    }
    // useless setter but needed to avoid 'cannot set property on [object Object] which only has getter
    set isSuccess(success) {
        if (success) {
            this.httpStatus = 200;
        }
    }
}

class LoginDetailsTestfactory {
    static build(properties) {
        const loginDetails = new LoginDetails(200);
        loginDetails.customerNumber = '12345';
        loginDetails.state = 'test_state';
        loginDetails.nonce = 'test_nonce';
        loginDetails.status = 'test_status';
        loginDetails.scopes = [];
        loginDetails.bssSystem = 'test_bss_system';
        loginDetails.identityId = '';
        loginDetails.username = 'test_user';
        loginDetails.firstName = 'test_firstname';
        loginDetails.lastName = 'test_lastname';
        loginDetails.narrowed = false;
        loginDetails.authAge = 18;
        loginDetails.isPid = false;
        loginDetails.bssSytem = 'test_bssSytem';
        loginDetails.isImpersonated = false;
        loginDetails.role = '';
        loginDetails.isExplicitLogin = false;
        loginDetails.isTelenetLogin = true;
        loginDetails.isSubLogin = false;
        loginDetails.loginAlias = 'test_login_alias';
        loginDetails.advisorId = 'adminfmc';
        if (properties) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            Object.keys(properties).forEach((key) => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                loginDetails[key] = properties[key];
            });
        }
        return loginDetails;
    }
}

class LogoutDetails {
    logout_redirect_uri;
}

class OcapiCallConfig {
    messageGroupName;
    endpoint;
    mapper;
    data;
    withCredentials = true;
    withDefaultContentType = true;
    errorHandler;
    httpType;
    customHeaders;
    observeAsResponse;
    responseType;
    useAdaptorEndpoint;
    silentlyHandleError;
    authNeeded = true;
    constructor(messageGroupName, endpoint, mapper, data, customHeaders = {}, observeAsResponse, responseType, useAdaptorEndpoint, silentlyHandleError = false) {
        this.messageGroupName = messageGroupName;
        this.endpoint = endpoint;
        this.mapper = mapper;
        this.data = data;
        this.customHeaders = customHeaders;
        this.observeAsResponse = observeAsResponse;
        this.responseType = responseType;
        this.useAdaptorEndpoint = useAdaptorEndpoint;
        this.silentlyHandleError = silentlyHandleError;
    }
    getEndpoint() {
        return this.useAdaptorEndpoint ? this.endpoint.replace('/public', '-adaptor/public') : this.endpoint;
    }
}

class OcapiHelper {
    urlService;
    cookieService;
    configService;
    constructor(urlService, cookieService, configService) {
        this.urlService = urlService;
        this.cookieService = cookieService;
        this.configService = configService;
    }
    getHttpHeaders(ocapiConfig) {
        return this.createHttpHeaders(ocapiConfig);
    }
    createHttpHeaders(ocapiConfig) {
        let httpHeaders = new HttpHeaders();
        const accessToken = sessionStorage.getItem('TOKEN-ACCESS');
        httpHeaders = httpHeaders.set('x-alt-referer', this.urlService.getCurrentUrl());
        httpHeaders = httpHeaders.set('X-Requested-With', 'XMLHttpRequest');
        if (ocapiConfig?.withDefaultContentType) {
            httpHeaders = httpHeaders.set('Content-Type', 'application/json;charset=UTF-8');
        }
        if (accessToken) {
            httpHeaders = httpHeaders.set('Authorization', this.getAccessToken(accessToken));
        }
        else {
            const TOKEN_XSRF = this.cookieService.get('TOKEN-XSRF');
            if (!isEmpty(TOKEN_XSRF)) {
                httpHeaders = httpHeaders.set('X-TOKEN-XSRF', TOKEN_XSRF);
            }
        }
        if (ocapiConfig && ocapiConfig.customHeaders) {
            for (const [key, value] of Object.entries(ocapiConfig.customHeaders)) {
                httpHeaders = httpHeaders.set(key, value);
            }
        }
        const oauthClientId = this.configService.getConfig(ConfigConstants.OPENID_CLIENT_ID);
        if (oauthClientId === 'fleet_portal' || oauthClientId === 'tip_portal') {
            httpHeaders = httpHeaders.set('X-Client-Id', oauthClientId);
        }
        return httpHeaders;
    }
    getHttpOptions(ocapiConfig) {
        const httpOptions = {
            withCredentials: ocapiConfig.withCredentials,
            headers: this.getHttpHeaders(ocapiConfig),
        };
        if (ocapiConfig.observeAsResponse) {
            httpOptions.observe = 'response';
        }
        if (ocapiConfig.responseType) {
            httpOptions.responseType = ocapiConfig.responseType;
        }
        return httpOptions;
    }
    getAccessToken(accessToken) {
        return `Bearer ${accessToken}`;
    }
    static ɵfac = function OcapiHelper_Factory(t) { return new (t || OcapiHelper)(i0.ɵɵinject(i3.UrlService), i0.ɵɵinject(i2.CookieService), i0.ɵɵinject(i2$1.ConfigService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: OcapiHelper, factory: OcapiHelper.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OcapiHelper, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i3.UrlService }, { type: i2.CookieService }, { type: i2$1.ConfigService }], null); })();

class AuthenticationProvider {
    configService = inject(ConfigService);
    languageService = inject(LanguageService);
    urlService = inject(UrlService);
    httpClient = inject(HttpClient);
    ocapiHelper = inject(OcapiHelper);
    getParameters(authenticationParameters) {
        const { styleHint = LoginDetailsConstants.STYLE_HINT, prompt } = authenticationParameters;
        let httpParams = new HttpParams().set('lang', this.languageService.getLanguage()).set('style_hint', styleHint);
        if (prompt) {
            httpParams = httpParams.append('prompt', prompt);
        }
        return httpParams;
    }
}

class OcapiAuthenticationProvider extends AuthenticationProvider {
    static PROVIDER_TYPE = 'ocapi';
    static LOG = LogFactory.createLogger(OcapiAuthenticationProvider);
    constructor() {
        super();
        OcapiAuthenticationProvider.LOG.logDebug('Use OcapiAuthenticationProvider for authentication');
    }
    getType() {
        return OcapiAuthenticationProvider.PROVIDER_TYPE;
    }
    getAuthenticationUrl() {
        const ocapiUrl = this.configService.getConfig(ConfigConstants.OCAPI_URl);
        const clientId = this.configService.getConfig(ConfigConstants.OCAPI_CLIENT_ID);
        if (!ocapiUrl || !clientId) {
            OcapiAuthenticationProvider.LOG.logError('OCAPI_URL or OCAPI_CLIENT_ID has no been configured');
            return null;
        }
        return ocapiUrl + '/login/authorization/' + clientId;
    }
    getParameters(authenticationParameters) {
        const { referrerUrl } = authenticationParameters;
        let httpParams = super.getParameters(authenticationParameters);
        httpParams = httpParams.appendAll({
            targetUrl: (referrerUrl || undefined) ?? this.urlService.getCurrentUrl(),
        });
        return httpParams;
    }
    sendAuthCall(params) {
        OcapiAuthenticationProvider.LOG.logDebug(`Sending jsonp request without prompt to ocapi authentication endpoint: ${this.getAuthenticationUrl()}, with parameters ${params.toString()}`);
        const authUrl = this.getAuthenticationUrl();
        if (!authUrl) {
            return throwError(() => new HttpErrorResponse({ error: { text: 'Authentication url of ocapi provider could not be determined' } }));
        }
        const url = `${authUrl}?${params.toString()}`;
        return this.httpClient.jsonp(url, 'callback');
    }
}

class OpenidAuthenticationProvider extends AuthenticationProvider {
    static LOG = LogFactory.createLogger(OpenidAuthenticationProvider);
    static PROVIDER_TYPE = 'openid';
    constructor() {
        super();
        OpenidAuthenticationProvider.LOG.logDebug('Use OpenidAuthenticationProvider for authentication');
    }
    getType() {
        return OpenidAuthenticationProvider.PROVIDER_TYPE;
    }
    getAuthenticationUrl() {
        if (!this.configService.getConfig(ConfigConstants.OPENID_AUTH_URL)) {
            OpenidAuthenticationProvider.LOG.logError('OPENID_AUTH_URL has not been configured');
            return null;
        }
        return this.configService.getConfig(ConfigConstants.OPENID_AUTH_URL);
    }
    getParameters(authenticationParameters) {
        const { referrerUrl, state, nonce } = authenticationParameters;
        let httpParams = super.getParameters(authenticationParameters);
        httpParams = httpParams.appendAll({
            client_id: this.configService.getConfig(ConfigConstants.OPENID_CLIENT_ID),
            response_type: LoginDetailsConstants.CODE,
            claims: LoginDetailsConstants.CLAIMS,
        });
        if (state && nonce) {
            httpParams = httpParams.appendAll({
                state,
                nonce,
            });
        }
        if (referrerUrl) {
            httpParams = httpParams.append('referrer_url', referrerUrl);
        }
        if (this.configService.getConfig(ConfigConstants.OAUTH_CALLBACK_URL)) {
            httpParams = httpParams.append('redirect_uri', this.configService.getConfig(ConfigConstants.OAUTH_CALLBACK_URL));
        }
        return httpParams;
    }
    sendAuthCall(params) {
        OpenidAuthenticationProvider.LOG.logDebug(`Sending GET request without prompt to openid authentication endpoint: ${this.getAuthenticationUrl()}, with parameters ${params.toString()}`);
        const authUrl = this.getAuthenticationUrl();
        if (!authUrl) {
            return throwError(() => new HttpErrorResponse({ error: { text: 'Authentication url of openid provider could not be determined' } }));
        }
        const url = `${authUrl}?${params.toString()}`;
        const options = {
            withCredentials: true,
            headers: this.ocapiHelper.getHttpHeaders(),
        };
        return this.httpClient.get(url, options);
    }
}

class LoginCustomerNameMapper {
    toModel() {
        return null;
    }
    static ɵfac = function LoginCustomerNameMapper_Factory(t) { return new (t || LoginCustomerNameMapper)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: LoginCustomerNameMapper, factory: LoginCustomerNameMapper.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoginCustomerNameMapper, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();

// @ts-nocheck
class LoginDetailsMapper {
    toModel(rawResponse) {
        if (rawResponse.status && rawResponse.status === 401) {
            return this.getLoginDetails(rawResponse.data, rawResponse.status);
        }
        else {
            return this.getLoginDetails(rawResponse, 200);
        }
    }
    getLoginDetails(rawResponse, status) {
        const loginDetails = new LoginDetails(status);
        if (loginDetails.isLoggedIn()) {
            this.createLoginDetails(rawResponse, loginDetails);
        }
        else {
            this.createStatAndNonce(rawResponse, loginDetails);
        }
        return loginDetails;
    }
    createStatAndNonce(rawResponse, loginDetails) {
        loginDetails.state = rawResponse?.split?.(',')?.[0];
        loginDetails.nonce = rawResponse?.split?.(',')?.[1];
    }
    createLoginDetails(rawResponse, loginDetails) {
        const rawLoginDetails = rawResponse;
        loginDetails.customerNumber = rawLoginDetails.customer_number;
        loginDetails.identityId = rawLoginDetails.identity_id;
        loginDetails.username = rawLoginDetails.username;
        loginDetails.firstName = rawLoginDetails.first_name;
        loginDetails.lastName = rawLoginDetails.last_name;
        loginDetails.narrowedScope = rawLoginDetails.narrowed_scope;
        loginDetails.scopes = this.createScopes(rawLoginDetails.scopes ? rawLoginDetails.scopes : []);
        loginDetails.authAge = rawLoginDetails.auth_age;
        loginDetails.isPid = rawLoginDetails.is_pid;
        loginDetails.bssSystem = rawLoginDetails.bss_system;
        loginDetails.isImpersonated = rawLoginDetails.impersonated;
        loginDetails.role = rawLoginDetails.role;
        loginDetails.isExplicitLogin = rawLoginDetails.explicit_login;
        loginDetails.isTelenetLogin = rawLoginDetails.is_telenet_login;
        loginDetails.isSubLogin = rawLoginDetails.is_sub_login;
        loginDetails.loginAlias = rawLoginDetails.login_alias;
        loginDetails.status = rawLoginDetails.status;
        loginDetails.identityRequestId = rawLoginDetails.identity_request_id;
        loginDetails.pegaServiceCaseId = rawLoginDetails.pega_service_case_id;
        loginDetails.contactNumber = rawLoginDetails.contact_number;
        loginDetails.advisorId = rawLoginDetails.advisorId || '';
    }
    createScopes(rawScopes) {
        return map(rawScopes, this.createScope);
    }
    createScope(rawScope) {
        return rawScope.split(':')[0];
    }
    static ɵfac = function LoginDetailsMapper_Factory(t) { return new (t || LoginDetailsMapper)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: LoginDetailsMapper, factory: LoginDetailsMapper.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoginDetailsMapper, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();

class LogoutMapper {
    toModel(rawLogoutResponse) {
        const logoutDetails = new LogoutDetails();
        logoutDetails.logout_redirect_uri = rawLogoutResponse.logout_redirect_uri;
        return logoutDetails;
    }
    static ɵfac = function LogoutMapper_Factory(t) { return new (t || LogoutMapper)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: LogoutMapper, factory: LogoutMapper.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LogoutMapper, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();

class ErrorReportService {
    dataLayerService;
    urlService;
    constructor(dataLayerService, urlService) {
        this.dataLayerService = dataLayerService;
        this.urlService = urlService;
    }
    sendErrorEventToAnalytics(ocapiCall, errorResponse, errorCode) {
        const eventInfo = this.dataLayerService.createEventInfo(EventNameEnum.EVENT_NAME_ERROR_OCCURRED, EventTypeEnum.EVENT_TYPE_ERROR);
        eventInfo.setEventStatus(EventStatusEnum.EVENT_STATUS_FAILED);
        let errorMessage = errorCode;
        if (errorResponse && errorResponse['errorDetails'] && errorResponse['errorDetails'].length) {
            errorMessage =
                errorMessage +
                    '|' +
                    errorResponse['errorDetails'][0].errorDetailCode +
                    '|' +
                    errorResponse['errorDetails'][0].message;
        }
        if (errorMessage) {
            eventInfo.setEventStatusMessage(errorMessage);
        }
        const attributes = {
            itemName: ocapiCall.messageGroupName,
            itemData: ocapiCall.httpType + ' ' + ocapiCall.endpoint,
            itemGroup: errorResponse ? errorResponse['cause'] : '',
            itemIdentifier: errorResponse ? errorResponse['correlationId'] : '',
        };
        const flow = this.urlService.getRequestParamValue(QueryParamEnum.FLOW, '');
        const sData = this.urlService.getRequestParamValue(QueryParamEnum.SDATA, '');
        const sId = this.urlService.getRequestParamValue(QueryParamEnum.SALES_ORDER_ID, '');
        if (!flow || (!sData && !sId)) {
            this.dataLayerService.sendEvent({ eventInfo, attributes });
        }
    }
    static ɵfac = function ErrorReportService_Factory(t) { return new (t || ErrorReportService)(i0.ɵɵinject(i1.DataLayerService), i0.ɵɵinject(i3.UrlService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ErrorReportService, factory: ErrorReportService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ErrorReportService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i1.DataLayerService }, { type: i3.UrlService }], null); })();

class UserDetailsService {
    static LOG = LogFactory.createLogger(UserDetailsService);
    endpoint = '/oauth/userdetails';
    cache = new Map();
    loginDetailsMapper = inject(LoginDetailsMapper);
    messageService = inject(MessageService);
    ocapiHelper = inject(OcapiHelper);
    configService = inject(ConfigService);
    http = inject(HttpClient);
    errorReportService = inject(ErrorReportService);
    urlService = inject(UrlService);
    reset() {
        this.cache.clear();
    }
    getUserDetails(options = {}) {
        const { withCredentials = true, referrerUrl, jwtToken } = options;
        let endpointWithParameters = this.endpoint;
        const jwt = jwtToken ? jwtToken : this.extractJwtFromUrl();
        if (jwt) {
            endpointWithParameters = `${endpointWithParameters}?jwt=${jwt}`;
        }
        const ocapiConfig = new OcapiCallConfig('', endpointWithParameters, this.loginDetailsMapper);
        ocapiConfig.withCredentials = withCredentials;
        ocapiConfig.authNeeded = false;
        if (referrerUrl && referrerUrl.length > 0) {
            ocapiConfig.customHeaders = { ...(ocapiConfig.customHeaders || {}), 'x-alt-referer': referrerUrl };
        }
        return this.getUserDetailsForConfig(ocapiConfig).pipe(shareReplay({ bufferSize: 1, refCount: false }), catchError((error) => {
            if (error.status !== 401) {
                return throwError(() => error);
            }
            const { status, error: errorMessage } = error;
            const [state, nonce] = String(errorMessage).split(',');
            const loginDetails = new LoginDetails(status);
            loginDetails.state = state;
            loginDetails.nonce = nonce;
            return of(loginDetails);
        }));
    }
    extractJwtFromUrl() {
        const jwtToken = this.urlService.getRequestParamValue(QueryParamEnum.JWT_TOKEN, '');
        return jwtToken ? jwtToken : this.urlService.getHashParameter(QueryParamEnum.JWT_TOKEN);
    }
    createHashKey(ocapiCall) {
        const { errorHandler: _, endpoint: __, ...otherProps } = ocapiCall;
        return btoa(JSON.stringify(otherProps));
    }
    hasJwtParameter(endpoint) {
        return !!endpoint && endpoint.includes('jwt');
    }
    getUserDetailsForConfig(config) {
        const cacheKey = this.createHashKey(config);
        if (!this.hasJwtParameter(config.endpoint) && this.cache.has(cacheKey)) {
            const replaySubject$ = this.cache.get(cacheKey);
            if (replaySubject$) {
                return replaySubject$.asObservable();
            }
        }
        return this.getCacheableUserDetailsObservable(cacheKey, config);
    }
    getCacheableUserDetailsObservable(cacheKey, config) {
        const freshReplaySubject$ = new ReplaySubject(1);
        this.cache.set(cacheKey, freshReplaySubject$);
        this.doResolve(config)
            .pipe(take(1), finalize(() => {
            freshReplaySubject$.complete();
        }))
            .subscribe({
            next: (loginDetails) => {
                if (loginDetails instanceof LoginDetails) {
                    freshReplaySubject$.next(loginDetails);
                }
            },
            error: (error) => freshReplaySubject$.error(error),
        });
        return freshReplaySubject$.asObservable();
    }
    handleError(ocapiCallConfig) {
        return (error) => {
            if (error.status !== 401) {
                this.messageService.addMessage(new ErrorMessage(ocapiCallConfig.messageGroupName, 'ocapi.' + error.status));
                UserDetailsService.LOG.logDebug(`An error occurred while trying to fetch ${ocapiCallConfig.messageGroupName}`, error);
                return throwError(() => 'An error occured while trying to fetch ' + ocapiCallConfig.messageGroupName);
            }
            return throwError(() => error);
        };
    }
    doResolve(ocapiCallConfig) {
        try {
            const options = this.getHttpOptions(ocapiCallConfig);
            return this.http
                .get(this.configService.getConfig(ConfigConstants.OCAPI_URl) + ocapiCallConfig.getEndpoint(), options)
                .pipe(map$1((ocapiResponse) => {
                return ocapiCallConfig.mapper?.toModel(ocapiResponse) || ocapiResponse;
            }), catchError(this.handleError(ocapiCallConfig)));
        }
        catch (e) {
            this.errorReportService.sendErrorEventToAnalytics(ocapiCallConfig);
            this.messageService.addMessage(new ErrorMessage(ocapiCallConfig.messageGroupName, 'Ocapi call failed:' + ocapiCallConfig.endpoint + 'with data ' + JSON.stringify(ocapiCallConfig.data)));
            return throwError(() => new Error('An error occured while trying to fetch ' + ocapiCallConfig.endpoint));
        }
    }
    getHttpOptions(ocapiConfig) {
        const httpOptions = {
            withCredentials: ocapiConfig.withCredentials,
            headers: this.ocapiHelper.getHttpHeaders(ocapiConfig),
            responseType: 'json',
        };
        return httpOptions;
    }
    static ɵfac = function UserDetailsService_Factory(t) { return new (t || UserDetailsService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: UserDetailsService, factory: UserDetailsService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UserDetailsService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();

class AuthenticationState {
    injector;
    authenticatedSubject = new ReplaySubject(1);
    isStatusKnown = false;
    constructor(injector) {
        this.injector = injector;
    }
    setAuthenticated(authenticated) {
        this.authenticatedSubject.next(authenticated);
        this.isStatusKnown = true;
    }
    getAuthenticated() {
        if (!this.isStatusKnown) {
            const authenticationService = this.injector.get(AUTH_SERVICE);
            return authenticationService.getAuthenticationStatus();
        }
        return this.authenticatedSubject.pipe(take(1));
    }
    static ɵfac = function AuthenticationState_Factory(t) { return new (t || AuthenticationState)(i0.ɵɵinject(i0.Injector)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AuthenticationState, factory: AuthenticationState.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthenticationState, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i0.Injector }], null); })();

class AbstractAuthenticationService {
    userDetailsService = inject(UserDetailsService);
    cookieService = inject(CookieService);
    urlService = inject(UrlService);
    authenticationState = inject(AuthenticationState);
    authenticationProvider = inject(AUTH_PROVIDER);
    authenticationStatus;
    constructor() {
        this.getLog().logDebug(`Authenticate on load using service: ${this.constructor.name}`);
    }
    authenticate(authenticationParameters) {
        const authUrl = this.getAuthenticationUrl(authenticationParameters);
        if (authUrl) {
            this.urlService.openWindow(authUrl);
        }
    }
    getRootDomain() {
        return location.hostname.split('.').reverse().splice(0, 2).reverse().join('.');
    }
    setAuthenticatedStatus(isAuthenticated) {
        if (!this.cookieService.check(LoginDetailsConstants.LOGIN_STATUS_COOKIENAME)) {
            this.cookieService.set(LoginDetailsConstants.LOGIN_STATUS_COOKIENAME, isAuthenticated ? LoginStatusEnum.LOGGED_IN.toString() : LoginStatusEnum.NOT_LOGGED_IN.toString(), {
                path: '/',
                sameSite: 'Lax',
                domain: `.${this.getRootDomain()}`,
            });
        }
        this.authenticationState.setAuthenticated(isAuthenticated);
    }
    getAuthenticationUrl(authenticationParameters) {
        const parameters = this.authenticationProvider.getParameters(authenticationParameters);
        const url = this.authenticationProvider.getAuthenticationUrl();
        if (!url) {
            return null;
        }
        return `${url}?${parameters.toString()}`;
    }
    getAuthenticationStatus() {
        if (!this.authenticationStatus) {
            this.authenticationStatus = this.isAuthenticated().pipe(take(1), shareReplay({ bufferSize: 1, refCount: false }), tap((isAuthenticated) => this.setAuthenticatedStatus(isAuthenticated)), catchError((error) => {
                this.getLog().logError(`Failed to retrieve authentication status`, error);
                return of(false);
            }));
        }
        return this.authenticationStatus;
    }
}

class JWTAuthenticationService extends AbstractAuthenticationService {
    static LOG = LogFactory.createLogger(JWTAuthenticationService);
    constructor() {
        super();
    }
    isAuthenticated() {
        return this.userDetailsService.getUserDetails().pipe(map$1((loginDetails) => {
            const isLoggedIn = loginDetails.isLoggedIn();
            JWTAuthenticationService.LOG.logDebug(`Authentication: ${loginDetails}`);
            return isLoggedIn;
        }), catchError((_e) => {
            JWTAuthenticationService.LOG.logDebug(`Authentication: false}`);
            return of(false);
        }));
    }
    getLog() {
        return JWTAuthenticationService.LOG;
    }
}

var AuthenticationPrompt;
(function (AuthenticationPrompt) {
    AuthenticationPrompt["NONE"] = "none";
    AuthenticationPrompt["LOGIN"] = "login";
})(AuthenticationPrompt || (AuthenticationPrompt = {}));

class TransparentAuthenticationService extends AbstractAuthenticationService {
    static LOG = LogFactory.createLogger(TransparentAuthenticationService);
    httpClient = inject(HttpClient);
    constructor() {
        super();
    }
    isAuthenticated() {
        return this.userDetailsService.getUserDetails().pipe(switchMap((loginDetails) => {
            if (loginDetails.isLoggedIn()) {
                return of(loginDetails.isLoggedIn());
            }
            return this.attemptAuthenticate(loginDetails.state, loginDetails.nonce).pipe(switchMap(() => {
                this.userDetailsService.reset();
                return this.userDetailsService.getUserDetails().pipe(map$1((loginDetails) => loginDetails.isLoggedIn()));
            }), catchError((error) => {
                this.getLog().logError('Failed to authenticate', error);
                return of(false);
            }));
        }));
    }
    getLog() {
        return TransparentAuthenticationService.LOG;
    }
    attemptAuthenticate(state, nonce) {
        let params = this.authenticationProvider.getParameters({ prompt: AuthenticationPrompt.NONE });
        if (state && nonce) {
            params = params.append('state', state).append('nonce', nonce);
        }
        this.getLog().logDebug(`Trying authenticate with provider ${this.authenticationProvider.getType()}`);
        if (!this.authenticationProvider.getAuthenticationUrl()) {
            return throwError(() => new Error('Authentication url is not defined, not trying to authenticate'));
        }
        return this.authenticationProvider.sendAuthCall(params).pipe(catchError((error) => {
            if (error?.error?.text?.includes('callback')) {
                TransparentAuthenticationService.LOG.logDebug(`Error during attempt to authenticate, with callback: ${error.error.text}`);
                return of({ data: error.error.text });
            }
            else {
                TransparentAuthenticationService.LOG.logDebug(`Error during attempt to authenticate, rethrowing: ${error?.error?.text}`);
                return of({ data: error.error.text });
            }
        }), concatMap((res) => {
            TransparentAuthenticationService.LOG.logDebug(`Executing callback: ${res.data}`);
            if (this.authenticationProvider.getType() === OcapiAuthenticationProvider.PROVIDER_TYPE) {
                // For ocapi we don't want to manually get a callback, this already happened via jsonp
                return of(undefined);
            }
            return this.httpClient.get(res.data, this.getCallBackOptions());
        }));
    }
    getCallBackOptions() {
        return {
            withCredentials: true,
            headers: new HttpHeaders({
                'X-Requested-With': 'XMLHttpRequest',
                Accept: 'text/plain',
                'Content-Type': 'text/plain;charset=UTF-8',
            }),
            responseType: 'text',
        };
    }
}

const extractJwtParameter = (urlService) => {
    return urlService.getHashParameter('jwt') || urlService.getRequestParamValue('jwt', '');
};
const authenticationProviderFactory = (urlService, configService) => {
    const jwtParameter = extractJwtParameter(urlService);
    if ((configService.getConfig(ConfigConstants.AUTH_PROVIDER) === OcapiAuthenticationProvider.PROVIDER_TYPE ||
        urlService.getRequestParamValue('loginFlow', '') === 'oktaLogin') &&
        !jwtParameter) {
        return new OcapiAuthenticationProvider();
    }
    return new OpenidAuthenticationProvider();
};
const authenticationServiceFactory = (urlService) => {
    const jwtParameter = extractJwtParameter(urlService);
    if (jwtParameter) {
        return new JWTAuthenticationService();
    }
    else {
        return new TransparentAuthenticationService();
    }
};

const AUTH_SERVICE = new InjectionToken('AuthService', {
    providedIn: 'root',
    factory: () => {
        const urlService = inject(UrlService);
        return authenticationServiceFactory(urlService);
    },
});

const AUTH_PROVIDER = new InjectionToken('AuthProvider', {
    providedIn: 'root',
    factory: () => {
        const urlService = inject(UrlService);
        const configService = inject(ConfigService);
        return authenticationProviderFactory(urlService, configService);
    },
});

// @ts-nocheck
class OcapiService {
    http;
    configService;
    messageService;
    omapiProductService;
    omapiQueryProductService;
    ocapiHelper;
    dataLayerService;
    urlService;
    authenticationState;
    errorReportService;
    static LOG = LogFactory.createLogger(OcapiService);
    constructor(http, configService, messageService, omapiProductService, omapiQueryProductService, ocapiHelper, dataLayerService, urlService, authenticationState, errorReportService) {
        this.http = http;
        this.configService = configService;
        this.messageService = messageService;
        this.omapiProductService = omapiProductService;
        this.omapiQueryProductService = omapiQueryProductService;
        this.ocapiHelper = ocapiHelper;
        this.dataLayerService = dataLayerService;
        this.urlService = urlService;
        this.authenticationState = authenticationState;
        this.errorReportService = errorReportService;
    }
    doGet(ocapiCallConfig) {
        return this.doResolve(HttpTypesEnum.GET, ocapiCallConfig);
    }
    doPost(ocapiCallConfig) {
        return this.doResolve(HttpTypesEnum.POST, ocapiCallConfig);
    }
    doPut(ocapiCallConfig) {
        return this.doResolve(HttpTypesEnum.PUT, ocapiCallConfig);
    }
    doRestHead(ocapiCallConfig) {
        return this.doResolve(HttpTypesEnum.HEAD, ocapiCallConfig);
    }
    doPatch(ocapiCallConfig) {
        return this.doResolve(HttpTypesEnum.PATCH, ocapiCallConfig);
    }
    doDelete(ocapiCallConfig) {
        return this.doResolve(HttpTypesEnum.DELETE, ocapiCallConfig);
    }
    doResolve(httpType, ocapiCallConfig) {
        ocapiCallConfig.httpType = httpType;
        try {
            return this.doRequest(ocapiCallConfig).pipe(mergeMap((ocapiResponse) => {
                return this.ocapiResponseEnrichedWithOmapiData$(ocapiCallConfig.messageGroupName, ocapiResponse, ocapiCallConfig.observeAsResponse, ocapiCallConfig.silentlyHandleError);
            }), mergeMap((ocapiResponse) => {
                return this.ocapiResponseEnrichedWithOmapiQueryData$(ocapiCallConfig.messageGroupName, ocapiResponse, ocapiCallConfig.observeAsResponse);
            }), map$1((ocapiResponseEnrichedWithOmapiData) => {
                return (ocapiCallConfig.mapper?.toModel(ocapiResponseEnrichedWithOmapiData) || ocapiResponseEnrichedWithOmapiData);
            }));
        }
        catch (e) {
            this.errorReportService.sendErrorEventToAnalytics(ocapiCallConfig);
            this.messageService.addMessage(new ErrorMessage(ocapiCallConfig.messageGroupName, 'Ocapi call failed:' + ocapiCallConfig.endpoint + 'with data ' + JSON.stringify(ocapiCallConfig.data)));
        }
    }
    ocapiResponseEnrichedWithOmapiQueryData$(messageGroup, ocapiResponse, isResponseObservable) {
        const queryUrls = this.recursiveUrls(ocapiResponse, SalesConstants.QUERY_URL);
        let responseBody = ocapiResponse;
        if (isResponseObservable) {
            responseBody = ocapiResponse['body'];
        }
        if (!isEmpty(queryUrls)) {
            return this.omapiQueryProductService.rawQueryProductsFromEndpoints$(messageGroup, queryUrls).pipe(tap((omapiQueryResponses) => {
                forEach(omapiQueryResponses, (omapiQueryResponse) => this.recursiveAddDataToOcapiResponse(responseBody, omapiQueryResponse, SalesConstants.QUERY_URL));
            }), map$1(() => {
                return ocapiResponse;
            }));
        }
        else {
            return of(ocapiResponse);
        }
    }
    ocapiResponseEnrichedWithOmapiData$(messageGroup, ocapiResponse, isResponseObservable, silentlyHandleError) {
        const specUrls = this.recursiveUrls(ocapiResponse, SalesConstants.SPEC_URL);
        let responseBody = ocapiResponse;
        if (isResponseObservable) {
            responseBody = ocapiResponse['body'];
        }
        if (!isEmpty(specUrls)) {
            return this.omapiProductService.rawProductsFromEndpoints$(messageGroup, specUrls, silentlyHandleError).pipe(tap((omapiResponses) => {
                forEach(omapiResponses, (omapiResponse) => this.recursiveAddDataToOcapiResponse(responseBody, omapiResponse, SalesConstants.SPEC_URL));
            }), map$1(() => {
                return ocapiResponse;
            }));
        }
        else {
            return of(ocapiResponse);
        }
    }
    doRequest(ocapiCall) {
        const options = this.ocapiHelper.getHttpOptions(ocapiCall);
        switch (ocapiCall.httpType) {
            case HttpTypesEnum.GET: {
                const request$ = this.http
                    .get(this.configService.getConfig(ConfigConstants.OCAPI_URl) + ocapiCall.getEndpoint(), options)
                    .pipe(catchError((error) => this.handleError(error, ocapiCall)));
                if (ocapiCall.authNeeded) {
                    OcapiService.LOG.logDebug(`Auth is needed for request: ${ocapiCall.getEndpoint()}`);
                    return this.authenticationState.getAuthenticated().pipe(concatMap(() => {
                        return request$;
                    }));
                }
                OcapiService.LOG.logDebug(`Auth is not needed for request: ${ocapiCall.getEndpoint()}`);
                return request$;
            }
            case HttpTypesEnum.POST:
                return this.http
                    .post(this.configService.getConfig(ConfigConstants.OCAPI_URl) + ocapiCall.endpoint, ocapiCall.data, options)
                    .pipe(take(1), catchError((error) => this.handleError(error, ocapiCall)));
            case HttpTypesEnum.PUT:
                return this.http
                    .put(this.configService.getConfig(ConfigConstants.OCAPI_URl) + ocapiCall.endpoint, ocapiCall.data, options)
                    .pipe(take(1), catchError((error) => this.handleError(error, ocapiCall)));
            case HttpTypesEnum.PATCH:
                return this.http
                    .patch(this.configService.getConfig(ConfigConstants.OCAPI_URl) + ocapiCall.endpoint, ocapiCall.data, options)
                    .pipe(take(1), catchError((error) => this.handleError(error, ocapiCall)));
            case HttpTypesEnum.HEAD:
                return this.http
                    .head(this.configService.getConfig(ConfigConstants.OCAPI_URl) + ocapiCall.endpoint, options)
                    .pipe(take(1), catchError((error) => this.handleError(error, ocapiCall)));
            case HttpTypesEnum.DELETE:
                return this.http
                    .delete(this.configService.getConfig(ConfigConstants.OCAPI_URl) + ocapiCall.endpoint, options)
                    .pipe(take(1), catchError((error) => {
                    return this.handleError(error, ocapiCall);
                }));
        }
    }
    recursiveAddDataToOcapiResponse(data, omapiorOmapiQueryResponse, type) {
        if (data) {
            Object.entries(data).forEach(([key, value]) => {
                if (key === SalesConstants.SPEC_URL && type === SalesConstants.SPEC_URL) {
                    this.isSpecUrl(value, data, omapiorOmapiQueryResponse);
                }
                else if (key === SalesConstants.QUERY_URL && type === SalesConstants.QUERY_URL) {
                    this.isQueryUrl(value, data, omapiorOmapiQueryResponse);
                }
                if (typeof value === 'object') {
                    this.recursiveAddDataToOcapiResponse(value, omapiorOmapiQueryResponse, type);
                }
            });
        }
        return data;
    }
    isQueryUrl(value, data, omapiorOmapiQueryResponse) {
        const itemCodeFromQueryUrl = this.urlService.getParamsValueFromUrl(value.toString(), 'itemcodes');
        const itemCodeFromOmapiQuery = this.getProductIdFromOmapiResponse(omapiorOmapiQueryResponse, itemCodeFromQueryUrl);
        if ((itemCodeFromQueryUrl && itemCodeFromQueryUrl.toString()) ===
            (itemCodeFromOmapiQuery && itemCodeFromOmapiQuery.toString()) ||
            isEmpty(omapiorOmapiQueryResponse.products)) {
            data['rawOmapiQuery'] = omapiorOmapiQueryResponse;
        }
    }
    isSpecUrl(value, data, omapiorOmapiQueryResponse) {
        const epcFromSpecUrl = value.toString() && value.toString().split('/').pop();
        const epcFromOmapi = omapiorOmapiQueryResponse.product && omapiorOmapiQueryResponse.product.productid;
        if ((epcFromSpecUrl && epcFromSpecUrl.toString()) === (epcFromOmapi && epcFromOmapi.toString())) {
            data['rawOmapi'] = omapiorOmapiQueryResponse;
        }
    }
    getProductIdFromOmapiResponse(omapiQueryResponse, itemCode) {
        if (!isEmpty(omapiQueryResponse.products) && !isEmpty(omapiQueryResponse.products[0].variants)) {
            const filteredVariant = omapiQueryResponse.products[0].variants.find((varaint) => {
                return varaint.productId === itemCode;
            });
            return !isEmpty(filteredVariant) ? filteredVariant.productId : '';
        }
        else {
            return '';
        }
    }
    recursiveUrls(data, type, urls = []) {
        if (data) {
            Object.entries(data).forEach(([key, value]) => {
                if (key === type && value !== null) {
                    urls.push(value.toString());
                }
                if (value !== null && typeof value === 'object') {
                    this.recursiveUrls(value, type, urls);
                }
            });
        }
        return urls;
    }
    handleError(error, ocapiCall) {
        if (ocapiCall.errorHandler !== undefined) {
            this.sendErrorEventToAnalyticsForCustomError(error, ocapiCall);
            return ocapiCall.errorHandler(error, ocapiCall);
        }
        let errorCode = 'ocapi.'.concat(error.status.toString());
        switch (error.status) {
            case 401:
                break;
            case 400:
            case 500:
                this.messageService.addMessage(new ErrorMessage(ocapiCall.messageGroupName, errorCode));
                this.errorReportService.sendErrorEventToAnalytics(ocapiCall, error.error, errorCode);
                break;
            default:
                errorCode = this.getDetailedErrorCode(error, errorCode);
                if (errorCode !== 'ocapi.422-OCAPI-ERR-ODSO156') {
                    this.messageService.addMessage(new ErrorMessage(ocapiCall.messageGroupName, errorCode));
                }
                this.errorReportService.sendErrorEventToAnalytics(ocapiCall, error.error, errorCode);
                break;
        }
        const errorDetails = 'An error occured while trying to fetch ' + ocapiCall.messageGroupName + ' | ' + errorCode;
        const throwErrorDetails = errorCode && errorCode.includes('VM000061') ? errorDetails + ' | ' + error.error.cause : errorDetails;
        return throwError(() => throwErrorDetails);
    }
    sendErrorEventToAnalyticsForCustomError(error, ocapiCall) {
        if (error && error.status !== 401) {
            let errorCode = 'ocapi.'.concat(error.status.toString());
            errorCode = this.getDetailedErrorCode(error, errorCode);
            this.errorReportService.sendErrorEventToAnalytics(ocapiCall, error.error, errorCode);
        }
    }
    getDetailedErrorCode(error, errorCode) {
        if (error.error && error.error.code) {
            return errorCode.concat('-').concat(error.error.code);
        }
        return errorCode;
    }
    static ɵfac = function OcapiService_Factory(t) { return new (t || OcapiService)(i0.ɵɵinject(i1$1.HttpClient), i0.ɵɵinject(i2$1.ConfigService), i0.ɵɵinject(i3$1.MessageService), i0.ɵɵinject(i4.OmapiProductService), i0.ɵɵinject(i5.OmapiQueryProductService), i0.ɵɵinject(OcapiHelper), i0.ɵɵinject(i1.DataLayerService), i0.ɵɵinject(i3.UrlService), i0.ɵɵinject(AuthenticationState), i0.ɵɵinject(ErrorReportService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: OcapiService, factory: OcapiService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OcapiService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i1$1.HttpClient }, { type: i2$1.ConfigService }, { type: i3$1.MessageService }, { type: i4.OmapiProductService }, { type: i5.OmapiQueryProductService }, { type: OcapiHelper }, { type: i1.DataLayerService }, { type: i3.UrlService }, { type: AuthenticationState }, { type: ErrorReportService }], null); })();

class LoginService {
    _ngZone;
    window;
    authenticationService;
    ocapiService;
    urlService;
    messageService;
    loginCustomerNameMapper;
    logoutMapper;
    userDetailsService;
    constructor(_ngZone, window, authenticationService, ocapiService, urlService, messageService, loginCustomerNameMapper, logoutMapper, userDetailsService) {
        this._ngZone = _ngZone;
        this.window = window;
        this.authenticationService = authenticationService;
        this.ocapiService = ocapiService;
        this.urlService = urlService;
        this.messageService = messageService;
        this.loginCustomerNameMapper = loginCustomerNameMapper;
        this.logoutMapper = logoutMapper;
        this.userDetailsService = userDetailsService;
    }
    /**
     * @deprecated This function is deprecated, please use getUserDetails from UserDetailsService instead.
     */
    getLoginDetails(withCredentials = true, referrerUrl, _isRoleRequired = true) {
        return this.userDetailsService.getUserDetails({
            withCredentials,
            referrerUrl,
        });
    }
    login(referrerUrl, styleHint) {
        this.getStateAndNonce(referrerUrl).subscribe((loginDetails) => {
            const authParameters = {
                state: loginDetails.state,
                nonce: loginDetails.nonce,
                referrerUrl,
                styleHint,
            };
            this.authenticationService.authenticate(authParameters);
        });
    }
    loginWithPrompt(referrerUrl, styleHint) {
        this.getStateAndNonce(referrerUrl).subscribe((loginDetails) => {
            const authParameters = {
                state: loginDetails.state,
                nonce: loginDetails.nonce,
                referrerUrl,
                styleHint,
                prompt: AuthenticationPrompt.LOGIN,
            };
            this.authenticationService.authenticate(authParameters);
        });
    }
    logout(messageGroupName, logoutPath) {
        const endpoint = '/logout?targetUrl=' + encodeURIComponent(this.getLogoutRedirectUrl(logoutPath));
        const ocapiConfig = new OcapiCallConfig(messageGroupName, endpoint, this.logoutMapper, {});
        ocapiConfig.errorHandler = this.handleErrorResponse.bind(this);
        return this.ocapiService.doGet(ocapiConfig).pipe(map$1((response) => {
            this.authenticationService.setAuthenticatedStatus(false);
            if (response && response.logout_redirect_uri) {
                this.urlService.redirectTo(response.logout_redirect_uri);
                return {};
            }
            return response;
        }));
    }
    getLogoutRedirectUrl(logoutPath) {
        let logoutRedirectUrl = this.urlService.getCurrentUrl();
        if (logoutPath) {
            logoutRedirectUrl = logoutPath.startsWith('https://')
                ? logoutPath
                : location.protocol + '//' + location.host + logoutPath;
        }
        return this.urlService.removeParametersFromUrl(logoutRedirectUrl, 'jwt');
    }
    getStateAndNonce(refererUrl) {
        return this.userDetailsService.getUserDetails({
            withCredentials: false,
            referrerUrl: refererUrl,
        });
    }
    loginWithCustomerNumber(messageGroupName, _customerNumber, key, value, mobileNumber) {
        const endpoint = '/oauth/login?' + key + '=' + value + '&mobilenumber=' + mobileNumber;
        const ocapiConfig = new OcapiCallConfig(messageGroupName, endpoint, this.loginCustomerNameMapper, {});
        ocapiConfig.errorHandler = this.handleErrorResponse.bind(this);
        return this.ocapiService.doPost(ocapiConfig).pipe(tap(() => {
            this.authenticationService.setAuthenticatedStatus(true);
            this.userDetailsService.reset();
        }), map$1((response) => response));
    }
    handleErrorResponse(error, ocapiCall) {
        if (error.status === 401) {
            return of({ data: error.error, status: error.status });
        }
        else if (error.status === 400 && error.error && error.error.code) {
            const errorCode = error.status.toString().concat('-').concat(error.error.code);
            this.messageService.addMessage(new ErrorMessage(ocapiCall.messageGroupName, 'ocapi.' + errorCode));
        }
        else {
            this.messageService.addMessage(new ErrorMessage(ocapiCall.messageGroupName, 'ocapi.' + error.status));
        }
        return throwError(() => 'An error occured while trying to fetch ' + ocapiCall.messageGroupName);
    }
    getAuthenticationStatus() {
        return this.authenticationService.getAuthenticationStatus();
    }
    static ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(i0.ɵɵinject(i0.NgZone), i0.ɵɵinject('Window'), i0.ɵɵinject(AUTH_SERVICE), i0.ɵɵinject(OcapiService), i0.ɵɵinject(i3.UrlService), i0.ɵɵinject(i3$1.MessageService), i0.ɵɵinject(LoginCustomerNameMapper), i0.ɵɵinject(LogoutMapper), i0.ɵɵinject(UserDetailsService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: LoginService, factory: LoginService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoginService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i0.NgZone }, { type: undefined, decorators: [{
                type: Inject,
                args: ['Window']
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [AUTH_SERVICE]
            }] }, { type: OcapiService }, { type: i3.UrlService }, { type: i3$1.MessageService }, { type: LoginCustomerNameMapper }, { type: LogoutMapper }, { type: UserDetailsService }], null); })();

class OcapiSocketService {
    configService;
    baseUrl;
    isAnonymous = false;
    TOPIC_PREFIX;
    ANONYMOUS_TOPIC_PREFIX;
    stompClient;
    isInitialised;
    constructor(configService) {
        this.configService = configService;
        this.TOPIC_PREFIX = '/user/topic/';
        this.ANONYMOUS_TOPIC_PREFIX = '/topic/action/';
        this.baseUrl = configService.getConfig(ConfigConstants.OCAPI_URl) + '/notify/';
        this.isInitialised = false;
    }
    init() {
        this.initializeWebSocketConnection();
        this.isInitialised = true;
    }
    setAnonymous(anonymous) {
        this.isAnonymous = anonymous;
    }
    getTopicPrefix() {
        return this.isAnonymous ? this.ANONYMOUS_TOPIC_PREFIX : this.TOPIC_PREFIX;
    }
    initializeWebSocketConnection() {
        this.stompClient = new RxStomp();
        const stompConfig = {
            webSocketFactory: () => {
                return new SockJS(this.baseUrl);
            },
        };
        this.stompClient.configure(stompConfig);
        this.stompClient.activate();
    }
    watchStompClientOnTopic(topic) {
        if (!this.isInitialised) {
            this.init();
        }
        return this.stompClient.watch(this.getTopicPrefix() + topic);
    }
    static ɵfac = function OcapiSocketService_Factory(t) { return new (t || OcapiSocketService)(i0.ɵɵinject(i2$1.ConfigService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: OcapiSocketService, factory: OcapiSocketService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OcapiSocketService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i2$1.ConfigService }], null); })();

class CacheService {
    cache = {};
    // eslint-disable-next-line @typescript-eslint/ban-types
    add(key, response$) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        this.cache[key] = response$.pipe(shareReplay({ bufferSize: 1 }));
    }
    get(key) {
        return this.cache[key];
    }
    remove(key) {
        delete this.cache[key];
    }
    static ɵfac = function CacheService_Factory(t) { return new (t || CacheService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CacheService, factory: CacheService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CacheService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();

function LoginComponent_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵprojection(1);
    i0.ɵɵelementContainerEnd();
} }
function LoginComponent_ng_container_0_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementContainer(1, 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(3);
    const _r4 = i0.ɵɵreference(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", _r4);
} }
function LoginComponent_ng_container_0_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, LoginComponent_ng_container_0_div_2_div_1_Template, 2, 1, "div", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext(2);
    const _r2 = i0.ɵɵreference(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r14.mode === "overlay")("ngIfElse", _r2);
} }
function LoginComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, LoginComponent_ng_container_0_ng_container_1_Template, 2, 0, "ng-container", 0)(2, LoginComponent_ng_container_0_div_2_Template, 2, 2, "div", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isLoggedIn());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.isLoggedIn());
} }
function LoginComponent_ng_template_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 12)(2, "span", 13);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "a", 14);
    i0.ɵɵlistener("click", function LoginComponent_ng_template_1_ng_container_1_Template_a_click_5_listener() { i0.ɵɵrestoreView(_r20); const ctx_r19 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r19.login()); });
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "translate");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(4, 3, "ng.general-login.lbl.not-logged-in"));
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("data-cy", "login-button-link");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(7, 5, "ng.general-login.btn.not-logged-in"));
} }
function LoginComponent_ng_template_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 12)(1, "span", 13);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 14);
    i0.ɵɵlistener("click", function LoginComponent_ng_template_1_div_2_Template_div_click_4_listener() { i0.ɵɵrestoreView(_r22); const ctx_r21 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r21.login(true)); });
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "translate");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 2, "ng.general.login.lbl.narrowed"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(6, 4, "ng.general.login.btn.narrowed"), " ");
} }
function LoginComponent_ng_template_1_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 12)(1, "span", 15);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 16);
    i0.ɵɵlistener("click", function LoginComponent_ng_template_1_div_3_Template_div_click_4_listener() { i0.ɵɵrestoreView(_r24); const ctx_r23 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r23.login(true)); });
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "translate");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 2, "ng.general-login.insufficient-rights-link.text"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(6, 4, "ng.general-login.insufficient-rights-link"), " ");
} }
function LoginComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 9);
    i0.ɵɵtemplate(1, LoginComponent_ng_template_1_ng_container_1_Template, 8, 7, "ng-container", 10)(2, LoginComponent_ng_template_1_div_2_Template, 7, 6, "div", 11)(3, LoginComponent_ng_template_1_div_3_Template, 7, 6, "div", 11);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngSwitch", ctx_r1.getLoginStatus());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", ctx_r1.loginEnum.NOT_LOGGED_IN);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", ctx_r1.loginEnum.NARROWED);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", ctx_r1.loginEnum.INSUFFICIENT_PERMISSIONS);
} }
function LoginComponent_ng_template_3_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementContainer(1, 8);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const _r12 = i0.ɵɵreference(12);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", _r12);
} }
function LoginComponent_ng_template_3_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementContainer(1, 8);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const _r12 = i0.ɵɵreference(12);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", _r12);
} }
function LoginComponent_ng_template_3_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementContainer(1, 8);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const _r10 = i0.ɵɵreference(10);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", _r10);
} }
function LoginComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 8);
    i0.ɵɵelementStart(1, "div", 17)(2, "div", 18);
    i0.ɵɵelementContainerStart(3, 9);
    i0.ɵɵtemplate(4, LoginComponent_ng_template_3_ng_container_4_Template, 2, 1, "ng-container", 10)(5, LoginComponent_ng_template_3_ng_container_5_Template, 2, 1, "ng-container", 10)(6, LoginComponent_ng_template_3_ng_container_6_Template, 2, 1, "ng-container", 10);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    const _r6 = i0.ɵɵreference(6);
    i0.ɵɵproperty("ngTemplateOutlet", _r6);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngSwitch", ctx_r3.getLoginStatus());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", ctx_r3.loginEnum.NOT_LOGGED_IN);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", ctx_r3.loginEnum.NARROWED);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", ctx_r3.loginEnum.INSUFFICIENT_PERMISSIONS);
} }
function LoginComponent_ng_template_5_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22)(1, "h3");
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 23);
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "translate");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 2, "general.lbl.overlay-login-title-insufficient-rights"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(6, 4, "general.lbl.overlay-login-sub-title-insufficient-rights"), " ");
} }
function LoginComponent_ng_template_5_ng_template_2_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22)(1, "h3");
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 23);
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "translate");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 2, "general.lbl.overlay-login-title-abandon-cart"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(6, 4, "general.lbl.overlay-login-sub-title-abandon-cart"), " ");
} }
function LoginComponent_ng_template_5_ng_template_2_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22)(1, "h3");
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 23);
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "translate");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 2, "general.lbl.overlay-login-title"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(6, 4, "general.lbl.overlay-login-sub-title"), " ");
} }
function LoginComponent_ng_template_5_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, LoginComponent_ng_template_5_ng_template_2_div_0_div_1_Template, 7, 6, "div", 24)(2, LoginComponent_ng_template_5_ng_template_2_div_0_div_2_Template, 7, 6, "div", 24);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r31 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r31.source === "EMAIL");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r31.source !== "EMAIL");
} }
function LoginComponent_ng_template_5_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, LoginComponent_ng_template_5_ng_template_2_div_0_Template, 3, 2, "div", 0);
} if (rf & 2) {
    const ctx_r29 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", ctx_r29.getLoginStatus() !== ctx_r29.loginEnum.INSUFFICIENT_PERMISSIONS);
} }
function LoginComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19);
    i0.ɵɵtemplate(1, LoginComponent_ng_template_5_div_1_Template, 7, 6, "div", 20)(2, LoginComponent_ng_template_5_ng_template_2_Template, 1, 1, "ng-template", null, 21, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r30 = i0.ɵɵreference(3);
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r5.getLoginStatus() === ctx_r5.loginEnum.INSUFFICIENT_PERMISSIONS)("ngIfElse", _r30);
} }
function LoginComponent_ng_template_7_div_5_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r39 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 34)(1, "div", 35);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 36);
    i0.ɵɵlistener("click", function LoginComponent_ng_template_7_div_5_div_1_div_6_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r39); const ctx_r38 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r38.register("itsme")); });
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "translate");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(8, "div", 37);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 2, "general.lbl.register-with-itsme-help"), " ");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(7, 4, "general.lbl.register-with-itsme"), " ");
} }
function LoginComponent_ng_template_7_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r41 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 29)(1, "div")(2, "div", 29)(3, "div", 30);
    i0.ɵɵelement(4, "span", 31);
    i0.ɵɵpipe(5, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, LoginComponent_ng_template_7_div_5_div_1_div_6_Template, 9, 6, "div", 32);
    i0.ɵɵelementStart(7, "button", 33);
    i0.ɵɵlistener("click", function LoginComponent_ng_template_7_div_5_div_1_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r41); const ctx_r40 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r40.register("internal")); });
    i0.ɵɵtext(8);
    i0.ɵɵpipe(9, "translate");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r36 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("innerHtml", i0.ɵɵpipeBind1(5, 3, "general.lbl.need-more-info"), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r36.showItsMeRegistrationOption);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(9, 5, "general.lbl.register"), " ");
} }
function LoginComponent_ng_template_7_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, LoginComponent_ng_template_7_div_5_div_1_Template, 10, 7, "div", 28);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r34 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r34.styleHint === "sales");
} }
function LoginComponent_ng_template_7_div_6_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r45 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 41)(1, "div", 42);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 43);
    i0.ɵɵlistener("click", function LoginComponent_ng_template_7_div_6_div_1_div_3_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r45); const ctx_r44 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r44.register("itsme")); });
    i0.ɵɵelementStart(5, "span", 44);
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "translate");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(8, "div", 37);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 2, "general.lbl.register-with-itsme-help"), " ");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(7, 4, "general.lbl.register-with-itsme"), " ");
} }
function LoginComponent_ng_template_7_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r47 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 29)(1, "div")(2, "div", 38);
    i0.ɵɵtemplate(3, LoginComponent_ng_template_7_div_6_div_1_div_3_Template, 9, 6, "div", 39);
    i0.ɵɵelementStart(4, "button", 40);
    i0.ɵɵlistener("click", function LoginComponent_ng_template_7_div_6_div_1_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r47); const ctx_r46 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r46.register("internal")); });
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "translate");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r42 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r42.showItsMeRegistrationOption);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(6, 2, "general.lbl.register"), " ");
} }
function LoginComponent_ng_template_7_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, LoginComponent_ng_template_7_div_6_div_1_Template, 7, 4, "div", 28);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r35 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r35.styleHint === "sales");
} }
const _c0 = a0 => ({ brand: a0 });
function LoginComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 25)(1, "div", 26)(2, "h5", 27);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(5, LoginComponent_ng_template_7_div_5_Template, 2, 1, "div", 0)(6, LoginComponent_ng_template_7_div_6_Template, 2, 1, "div", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(4, 3, "general.lbl.not-a-customer", i0.ɵɵpureFunction1(6, _c0, ctx_r7.brand)), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r7.brand !== "BASE");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r7.brand === "BASE");
} }
function LoginComponent_ng_template_9_h5_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h5", 27);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, "general.lbl.login-again-insufficient-rights"), " ");
} }
function LoginComponent_ng_template_9_div_3_h5_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h5", 27);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, "general.lbl.login-again-abandon-cart"), " ");
} }
function LoginComponent_ng_template_9_div_3_h5_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h5", 27);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r57 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(2, 1, "general.lbl.already-a-customer", i0.ɵɵpureFunction1(4, _c0, ctx_r57.brand)), " ");
} }
function LoginComponent_ng_template_9_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, LoginComponent_ng_template_9_div_3_h5_1_Template, 3, 3, "h5", 46)(2, LoginComponent_ng_template_9_div_3_h5_2_Template, 3, 6, "h5", 46);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r49 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r49.source === "EMAIL");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r49.source !== "EMAIL");
} }
function LoginComponent_ng_template_9_img_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 53);
} }
function LoginComponent_ng_template_9_img_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 54);
} }
function LoginComponent_ng_template_9_img_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 55);
} }
function LoginComponent_ng_template_9_img_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 56);
} }
function LoginComponent_ng_template_9_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r59 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 57);
    i0.ɵɵlistener("click", function LoginComponent_ng_template_9_button_9_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r59); const ctx_r58 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r58.login(true)); });
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, "general.login-link"), " ");
} }
function LoginComponent_ng_template_9_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r61 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 57);
    i0.ɵɵlistener("click", function LoginComponent_ng_template_9_button_10_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r61); const ctx_r60 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r60.login()); });
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, "general.login-link"), " ");
} }
function LoginComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 45)(1, "div", 26);
    i0.ɵɵtemplate(2, LoginComponent_ng_template_9_h5_2_Template, 3, 3, "h5", 46)(3, LoginComponent_ng_template_9_div_3_Template, 3, 2, "div", 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 47);
    i0.ɵɵtemplate(5, LoginComponent_ng_template_9_img_5_Template, 1, 0, "img", 48)(6, LoginComponent_ng_template_9_img_6_Template, 1, 0, "img", 49)(7, LoginComponent_ng_template_9_img_7_Template, 1, 0, "img", 50)(8, LoginComponent_ng_template_9_img_8_Template, 1, 0, "img", 51);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, LoginComponent_ng_template_9_button_9_Template, 3, 3, "button", 52)(10, LoginComponent_ng_template_9_button_10_Template, 3, 3, "button", 52);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r9.getLoginStatus() === ctx_r9.loginEnum.INSUFFICIENT_PERMISSIONS);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r9.getLoginStatus() !== ctx_r9.loginEnum.INSUFFICIENT_PERMISSIONS);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r9.brand === "BASE");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r9.brand === "BASE");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r9.brand !== "BASE");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r9.brand !== "BASE");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r9.getLoginStatus() === ctx_r9.loginEnum.INSUFFICIENT_PERMISSIONS);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r9.getLoginStatus() !== ctx_r9.loginEnum.INSUFFICIENT_PERMISSIONS);
} }
function LoginComponent_ng_template_11_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 8);
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const _r8 = i0.ɵɵreference(8);
    i0.ɵɵproperty("ngTemplateOutlet", _r8);
} }
function LoginComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 8);
    i0.ɵɵtemplate(1, LoginComponent_ng_template_11_ng_container_1_Template, 1, 1, "ng-container", 58);
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext();
    const _r10 = i0.ɵɵreference(10);
    i0.ɵɵproperty("ngTemplateOutlet", _r10);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r11.showRegistrationOptions());
} }
const _c1 = ["*"];
class LoginComponent {
    window;
    loginService;
    userDetailsService;
    configService;
    urlService;
    pathCategorisationService;
    languageService;
    dataLayerService;
    cookieService;
    scopes = [];
    messageGroupName;
    autoRedirect = false;
    styleHint = LoginDetailsConstants.STYLE_HINT;
    mode;
    registrationUrl;
    showItsMeRegistrationOption;
    hasInstallableProductType;
    renderOnlyForOriginCustomer = false;
    componentCanRender = new EventEmitter();
    loginDetails;
    show = false;
    loginEnum = LoginStatusEnum;
    brand;
    source;
    action;
    destroy$ = new Subject();
    constructor(window, loginService, userDetailsService, configService, urlService, pathCategorisationService, languageService, dataLayerService, cookieService) {
        this.window = window;
        this.loginService = loginService;
        this.userDetailsService = userDetailsService;
        this.configService = configService;
        this.urlService = urlService;
        this.pathCategorisationService = pathCategorisationService;
        this.languageService = languageService;
        this.dataLayerService = dataLayerService;
        this.cookieService = cookieService;
    }
    ngOnInit() {
        this.action = this.urlService.getRequestParamValue(QueryParamEnum.ACTION, '');
        this.registerBasedOnAction();
        this.brand = this.pathCategorisationService.getCustomerBrand();
        this.initSource();
        this.loginService
            .getAuthenticationStatus()
            .pipe(switchMap((_) => this.userDetailsService.getUserDetails().pipe(takeLast(1))), takeUntil(this.destroy$))
            .subscribe((loginDetails) => {
            this.loginDetails = loginDetails;
            if (this.isLoggedIn() && this.canRenderComponentForLoggedInUser()) {
                this.show = true;
                this.componentCanRender.emit(loginDetails);
            }
            else if (this.autoRedirect && this.configService.getConfig(ConfigConstants.IS_AUTHOR_MODE) !== 'true') {
                this.forceRedirect();
            }
            else {
                this.show = true;
                if (this.mode === 'overlay') {
                    this.sendPageStepData();
                }
            }
        });
    }
    isLoggedIn() {
        return this.getLoginStatus() === LoginStatusEnum.LOGGED_IN;
    }
    canRenderComponentForLoggedInUser() {
        if (this.renderOnlyForOriginCustomer) {
            return this.loginDetails.isBssSystemNetcracker();
        }
        return true;
    }
    getLoginStatus() {
        if (!this.loginDetails?.isLoggedIn()) {
            this.window['telenetgroupLoader']?.hideMask();
            return LoginStatusEnum.NOT_LOGGED_IN;
        }
        if (this.isNarrowed()) {
            return LoginStatusEnum.NARROWED;
        }
        if (!this.hasRequiredScopes() ||
            (this.brand === CustomerBrandEnum.BRAND_BASE && this.hasInstallableProductType && this.loginDetails?.isChild())) {
            this.window['telenetgroupLoader']?.hideMask();
            return LoginStatusEnum.INSUFFICIENT_PERMISSIONS;
        }
        return LoginStatusEnum.LOGGED_IN;
    }
    login(force = false) {
        this.pushEventDataToAnalytics(EventNameEnum.EVENT_NAME_LOGIN);
        const referrerUrl = this.urlService.getCurrentUrl();
        if (!force) {
            this.loginService.login(referrerUrl, this.styleHint);
            return;
        }
        this.loginService.loginWithPrompt(referrerUrl, this.styleHint);
    }
    isNarrowed() {
        return this.loginDetails.isNarrowed();
    }
    showRegistrationOptions() {
        return (this.source !== LoginDetailsConstants.SOURCE_EMAIL &&
            this.getLoginStatus() !== LoginStatusEnum.INSUFFICIENT_PERMISSIONS &&
            !isEmpty(this.styleHint));
    }
    register(idp) {
        const eventName = EventNameEnum.EVENT_NAME_REGISTER + '-' + idp;
        this.pushEventDataToAnalytics(eventName);
        this.redirectToRegistrationURL(idp);
    }
    initSource() {
        this.source = this.urlService.getRequestParamValue(QueryParamEnum.SOURCE, '');
        this.source = this.source && this.source.toUpperCase();
    }
    hasRequiredScopes() {
        if (this.scopes && !this.scopes.length) {
            return true;
        }
        return some(this.scopes, (scope) => {
            return this.loginDetails.hasScope(scope);
        });
    }
    forceRedirect() {
        const loginStatus = this.getLoginStatus();
        const force = loginStatus !== LoginStatusEnum.NOT_LOGGED_IN;
        this.login(force);
    }
    redirectToRegistrationURL(idp) {
        this.cleanCookies();
        if (idp === 'internal') {
            this.redirectToInternalRegistrationURL(this.styleHint);
        }
        else {
            this.redirectToItsMePortal(this.styleHint);
        }
    }
    cleanCookies() {
        const sessionKeys = this.getCookie(LoginDetailsConstants.COOKIE_KEYS);
        if (sessionKeys) {
            const keys = sessionKeys.split(',');
            for (let i = 0; i <= keys.length; i++) {
                this.cookieService.delete(keys[i], '/');
            }
            this.cookieService.delete(LoginDetailsConstants.COOKIE_KEYS, '/');
        }
    }
    initCookies(channel, idp) {
        const requestParameters = this.urlService.getRequestParameters();
        each(requestParameters, (item, key) => {
            this.addCookie(key, item);
        });
        this.addCookie(LoginDetailsConstants.CUSTOMER_REGISTRATION_URL, this.getCustomerRegistrationURL());
        this.addCookie(LoginDetailsConstants.PARAM_CHANNEL, channel);
        this.addCookie(LoginDetailsConstants.PARAM_IDP, idp);
        this.addCookie(LoginDetailsConstants.PARAM_REFERRER_URL, this.urlService.getCurrentUrl());
    }
    addCookie(key, value) {
        this.cookieService.set(key, value, { path: '/' });
        let sessionKeys = this.getCookie(LoginDetailsConstants.COOKIE_KEYS);
        sessionKeys = sessionKeys ? sessionKeys.concat(',', key) : key;
        this.cookieService.set(LoginDetailsConstants.COOKIE_KEYS, sessionKeys, { path: '/' });
    }
    getCookie(key) {
        return this.cookieService.get(key);
    }
    redirectToInternalRegistrationURL(channel) {
        let referrer_url;
        let registrationUrl = this.registrationUrl + '?channel=' + channel + '&idp=' + 'internal';
        const sdata = this.urlService.getRequestParamValue(LoginDetailsConstants.PARAM_SDATA, '');
        if (sdata) {
            registrationUrl += '&sdata=' + sdata;
        }
        if (this.action === 'register') {
            const newUrl = this.urlService.getActionParametersRemovedURL();
            referrer_url = encodeURIComponent(newUrl);
        }
        else {
            referrer_url = encodeURIComponent(this.urlService.getCurrentUrl());
        }
        registrationUrl += '&referrer_url=' + referrer_url;
        this.urlService.redirectTo(registrationUrl);
    }
    redirectToItsMePortal(channel) {
        this.initCookies(channel, 'itsme');
        const redirectURI = this.getRedirectURI();
        const params = {
            redirect_uri: redirectURI,
            language: this.languageService.getLanguage(),
        };
        const itsMePortalUrl = this.getItsMeRegisterUrl() +
            '?language=' +
            params.language +
            '&redirect_uri=' +
            redirectURI +
            '&brand=' +
            this.brand;
        this.urlService.redirectTo(itsMePortalUrl);
    }
    getItsMeRegisterUrl() {
        return this.configService.getConfig(ConfigConstants.OCAPI_URl) + LoginDetailsConstants.ITS_ME_REGISTER_ENDPOINT;
    }
    getRedirectURI() {
        const redirect_uri = this.getCookie(LoginDetailsConstants.CUSTOMER_REGISTRATION_URL);
        return encodeURIComponent(redirect_uri);
    }
    getCustomerRegistrationURL() {
        return this.urlService.getOrigin().concat(this.registrationUrl);
    }
    pushEventDataToAnalytics(eventName) {
        const eventInfoData = this.dataLayerService.createEventInfo(eventName, EventTypeEnum.EVENT_TYPE_CLICK);
        eventInfoData.setEventStatus(EventStatusEnum.EVENT_STATUS_SUCCESS);
        const attributes = this.buildCommonEventAttributes();
        this.dataLayerService.sendEvent({ eventInfo: eventInfoData, attributes });
    }
    buildCommonEventAttributes() {
        const styleHint = this.styleHint ? this.styleHint : 'care';
        const flowType = this.urlService.getRequestParamValue(LoginDetailsConstants.PARAM_FLOW, '') || styleHint;
        return { flowType: flowType };
    }
    sendPageStepData() {
        const attributes = this.buildCommonEventAttributes();
        attributes.stepId = LoginDetailsConstants.STEP_ID_LOGIN_REGISTER;
        this.dataLayerService.addStepViewEvent(attributes);
    }
    registerBasedOnAction() {
        if (this.action === 'register') {
            return this.register('internal');
        }
        else if (this.action === 'register-via-itsme') {
            return this.register('external');
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    static ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(i0.ɵɵdirectiveInject('Window'), i0.ɵɵdirectiveInject(LoginService), i0.ɵɵdirectiveInject(UserDetailsService), i0.ɵɵdirectiveInject(i2$1.ConfigService), i0.ɵɵdirectiveInject(i3.UrlService), i0.ɵɵdirectiveInject(i3.PathCategorisationService), i0.ɵɵdirectiveInject(i3.LanguageService), i0.ɵɵdirectiveInject(i1.DataLayerService), i0.ɵɵdirectiveInject(i2.CookieService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LoginComponent, selectors: [["tg-login"]], inputs: { scopes: "scopes", messageGroupName: "messageGroupName", autoRedirect: "autoRedirect", styleHint: "styleHint", mode: "mode", registrationUrl: "registrationUrl", showItsMeRegistrationOption: "showItsMeRegistrationOption", hasInstallableProductType: "hasInstallableProductType", renderOnlyForOriginCustomer: "renderOnlyForOriginCustomer" }, outputs: { componentCanRender: "componentCanRender" }, ngContentSelectors: _c1, decls: 13, vars: 1, consts: [[4, "ngIf"], ["noOverlay", ""], ["overlay", ""], ["headerTitleAndSubtitle", ""], ["onlyRegister", ""], ["onlyLogin", ""], ["loginOrRegister", ""], [4, "ngIf", "ngIfElse"], [3, "ngTemplateOutlet"], [3, "ngSwitch"], [4, "ngSwitchCase"], ["class", "notification notification--warning", 4, "ngSwitchCase"], [1, "notification", "notification--warning"], [1, "icon", "icon-error-shape", "warn"], [1, "button", "button--primary", "cta-secondary", 3, "click"], [1, "icon", "icon-alert-shape", "warn"], [1, "button", "button--primary", "cta-secondary", "button--width-auto", 3, "click"], [1, "end-journey__section__content__action"], [1, "login-sales-journey", "row", "align-items--stretch", "justify-content--center", "col-lg-6", "col-md-10", "col-12", "m--auto", "mb--g"], [1, "login-sales-journey-title", "px--xm", "px--n--md", "col-lg-5", "col-md-7", "col-12", "m--auto"], ["class", "display--flex flex-direction--column", 4, "ngIf", "ngIfElse"], ["otherThanInsufficientRights", ""], [1, "display--flex", "flex-direction--column"], [1, "font--body-regular", "pb--s"], ["class", "display--flex flex-direction--column", 4, "ngIf"], [1, "display--flex", "flex-direction--column", "justify-content--between", "background-white", "col-lg-5", "col-md-4", "col-12", "px--xl", "pb--xl", "pt--xxs"], [1, "text-align--center"], [1, "heading--5"], ["class", "display--block", 4, "ngIf"], [1, "display--block"], ["ng-class", "showItsMeRegistrationOption ? 'mb--xxl' : 'mt--xxxl mb--xs'", 1, "pb--xs", "text-align--center"], [1, "font--caption", 3, "innerHtml"], ["class", "width--full", 4, "ngIf"], [1, "button", "button--secondary", "button--fullwidth", 3, "click"], [1, "width--full"], [1, "font--caption", "text-align--center", "pb--xs"], [1, "button", "button--secondary", "button--fullwidth", "register-with-itsme", 3, "click"], [1, "divider--xxs__mid-grey", "my--xl"], [1, "display--block", "mt--xs"], ["class", "width--full mb--xs", 4, "ngIf"], [1, "button", "button--secondary", "button--fullwidth", "button__icon--position-left", "pt-10", "pb-10", 3, "click"], [1, "width--full", "mb--xs"], [1, "font--caption", "pb--xs", "text-align--center"], [1, "button", "button--secondary", "button--fullwidth", "button__icon--position-left", "register-with-itsme", "pt--m", "pb--m", 3, "click"], [1, "ml--s--md"], [1, "display--flex", "flex-direction--column", "justify-content--between", "background-white", "col-lg-5", "col-md-4", "col-12", "px--xl", "pb--xl", "pt--xxs", "mr--xm--md", "mr--n", "mb--n--md", "mb--m"], ["class", "heading--5", 4, "ngIf"], [1, "m--auto"], ["class", "hide-until-md", "src", "/etc/designs/aff-telenetgroup/atomic/clientlibs/clientlib-atomic/graphics/base-login-desktop.svg", "alt", "login", 4, "ngIf"], ["class", "hide-from-md", "src", "/etc/designs/aff-telenetgroup/atomic/clientlibs/clientlib-atomic/graphics/base-login-mobile.svg", "alt", "login", 4, "ngIf"], ["class", "hide-until-md", "src", "/etc/designs/aff-telenetgroup/atomic/clientlibs/clientlib-atomic/graphics/telenet-login-desktop.svg", "alt", "login", 4, "ngIf"], ["class", "hide-from-md", "src", "/etc/designs/aff-telenetgroup/atomic/clientlibs/clientlib-atomic/graphics/telenet-login-mobile.svg", "alt", "login", 4, "ngIf"], ["class", "button button--primary button--fullwidth", 3, "click", 4, "ngIf"], ["src", "/etc/designs/aff-telenetgroup/atomic/clientlibs/clientlib-atomic/graphics/base-login-desktop.svg", "alt", "login", 1, "hide-until-md"], ["src", "/etc/designs/aff-telenetgroup/atomic/clientlibs/clientlib-atomic/graphics/base-login-mobile.svg", "alt", "login", 1, "hide-from-md"], ["src", "/etc/designs/aff-telenetgroup/atomic/clientlibs/clientlib-atomic/graphics/telenet-login-desktop.svg", "alt", "login", 1, "hide-until-md"], ["src", "/etc/designs/aff-telenetgroup/atomic/clientlibs/clientlib-atomic/graphics/telenet-login-mobile.svg", "alt", "login", 1, "hide-from-md"], [1, "button", "button--primary", "button--fullwidth", 3, "click"], [3, "ngTemplateOutlet", 4, "ngIf"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, LoginComponent_ng_container_0_Template, 3, 2, "ng-container", 0)(1, LoginComponent_ng_template_1_Template, 4, 4, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(3, LoginComponent_ng_template_3_Template, 7, 5, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor)(5, LoginComponent_ng_template_5_Template, 4, 2, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor)(7, LoginComponent_ng_template_7_Template, 7, 8, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor)(9, LoginComponent_ng_template_9_Template, 11, 8, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor)(11, LoginComponent_ng_template_11_Template, 2, 2, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.show);
        } }, dependencies: [i6.NgIf, i6.NgTemplateOutlet, i6.NgSwitch, i6.NgSwitchCase, i7.TranslatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoginComponent, [{
        type: Component,
        args: [{ selector: 'tg-login', template: "<ng-container *ngIf=\"show\">\n  <ng-container *ngIf=\"isLoggedIn()\">\n    <ng-content></ng-content>\n  </ng-container>\n\n  <div *ngIf=\"!isLoggedIn()\">\n    <div *ngIf=\"mode === 'overlay'; else noOverlay\">\n      <ng-container [ngTemplateOutlet]=\"overlay\"> </ng-container>\n    </div>\n  </div>\n</ng-container>\n<ng-template #noOverlay>\n  <ng-container [ngSwitch]=\"getLoginStatus()\">\n    <ng-container *ngSwitchCase=\"loginEnum.NOT_LOGGED_IN\">\n      <div class=\"notification notification--warning\">\n        <span class=\"icon icon-error-shape warn\">{{ 'ng.general-login.lbl.not-logged-in' | translate }}</span>\n        <a (click)=\"login()\" class=\"button button--primary cta-secondary\" [attr.data-cy]=\"'login-button-link'\">{{\n          'ng.general-login.btn.not-logged-in' | translate\n        }}</a>\n      </div>\n    </ng-container>\n\n    <div *ngSwitchCase=\"loginEnum.NARROWED\" class=\"notification notification--warning\">\n      <span class=\"icon icon-error-shape warn\">{{ 'ng.general.login.lbl.narrowed' | translate }}</span>\n      <div (click)=\"login(true)\" class=\"button button--primary cta-secondary\">\n        {{ 'ng.general.login.btn.narrowed' | translate }}\n      </div>\n    </div>\n\n    <div *ngSwitchCase=\"loginEnum.INSUFFICIENT_PERMISSIONS\" class=\"notification notification--warning\">\n      <span class=\"icon icon-alert-shape warn\">{{ 'ng.general-login.insufficient-rights-link.text' | translate }}</span>\n      <div (click)=\"login(true)\" class=\"button button--primary cta-secondary button--width-auto\">\n        {{ 'ng.general-login.insufficient-rights-link' | translate }}\n      </div>\n    </div>\n  </ng-container>\n</ng-template>\n\n<ng-template #overlay>\n  <ng-container [ngTemplateOutlet]=\"headerTitleAndSubtitle\"> </ng-container>\n  <div class=\"end-journey__section__content__action\">\n    <div\n      class=\"login-sales-journey row align-items--stretch justify-content--center col-lg-6 col-md-10 col-12 m--auto mb--g\">\n      <ng-container [ngSwitch]=\"getLoginStatus()\">\n        <ng-container *ngSwitchCase=\"loginEnum.NOT_LOGGED_IN\">\n          <ng-container [ngTemplateOutlet]=\"loginOrRegister\"> </ng-container>\n        </ng-container>\n\n        <ng-container *ngSwitchCase=\"loginEnum.NARROWED\">\n          <ng-container [ngTemplateOutlet]=\"loginOrRegister\"> </ng-container>\n        </ng-container>\n\n        <ng-container *ngSwitchCase=\"loginEnum.INSUFFICIENT_PERMISSIONS\">\n          <ng-container [ngTemplateOutlet]=\"onlyLogin\"> </ng-container>\n        </ng-container>\n      </ng-container>\n    </div>\n  </div>\n</ng-template>\n\n<ng-template #headerTitleAndSubtitle>\n  <div class=\"login-sales-journey-title px--xm px--n--md col-lg-5 col-md-7 col-12 m--auto\">\n    <div\n      *ngIf=\"getLoginStatus() === loginEnum.INSUFFICIENT_PERMISSIONS; else otherThanInsufficientRights\"\n      class=\"display--flex flex-direction--column\">\n      <h3>\n        {{ 'general.lbl.overlay-login-title-insufficient-rights' | translate }}\n      </h3>\n      <p class=\"font--body-regular pb--s\">\n        {{ 'general.lbl.overlay-login-sub-title-insufficient-rights' | translate }}\n      </p>\n    </div>\n    <ng-template #otherThanInsufficientRights>\n      <div *ngIf=\"getLoginStatus() !== loginEnum.INSUFFICIENT_PERMISSIONS\">\n        <div *ngIf=\"source === 'EMAIL'\" class=\"display--flex flex-direction--column\">\n          <h3>\n            {{ 'general.lbl.overlay-login-title-abandon-cart' | translate }}\n          </h3>\n          <p class=\"font--body-regular pb--s\">\n            {{ 'general.lbl.overlay-login-sub-title-abandon-cart' | translate }}\n          </p>\n        </div>\n        <div *ngIf=\"source !== 'EMAIL'\" class=\"display--flex flex-direction--column\">\n          <h3>\n            {{ 'general.lbl.overlay-login-title' | translate }}\n          </h3>\n          <p class=\"font--body-regular pb--s\">\n            {{ 'general.lbl.overlay-login-sub-title' | translate }}\n          </p>\n        </div>\n      </div>\n    </ng-template>\n  </div>\n</ng-template>\n<ng-template #onlyRegister>\n  <div\n    class=\"display--flex flex-direction--column justify-content--between background-white col-lg-5 col-md-4 col-12 px--xl pb--xl pt--xxs\">\n    <div class=\"text-align--center\">\n      <h5 class=\"heading--5\">\n        {{ 'general.lbl.not-a-customer' | translate: { brand: brand } }}\n      </h5>\n    </div>\n    <div *ngIf=\"brand !== 'BASE'\">\n      <div class=\"display--block\" *ngIf=\"styleHint === 'sales'\">\n        <div>\n          <div class=\"display--block\">\n            <div\n              ng-class=\"showItsMeRegistrationOption ? 'mb--xxl' : 'mt--xxxl mb--xs'\"\n              class=\"pb--xs text-align--center\">\n              <span class=\"font--caption\" [innerHtml]=\"'general.lbl.need-more-info' | translate\"> </span>\n            </div>\n            <div *ngIf=\"showItsMeRegistrationOption\" class=\"width--full\">\n              <div class=\"font--caption text-align--center pb--xs\">\n                {{ 'general.lbl.register-with-itsme-help' | translate }}\n              </div>\n              <button\n                class=\"button button--secondary button--fullwidth register-with-itsme\"\n                (click)=\"register('itsme')\">\n                <span>\n                  {{ 'general.lbl.register-with-itsme' | translate }}\n                </span>\n              </button>\n              <div class=\"divider--xxs__mid-grey my--xl\"></div>\n            </div>\n            <button class=\"button button--secondary button--fullwidth\" (click)=\"register('internal')\">\n              {{ 'general.lbl.register' | translate }}\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"brand === 'BASE'\">\n      <div class=\"display--block\" *ngIf=\"styleHint === 'sales'\">\n        <div>\n          <div class=\"display--block mt--xs\">\n            <div *ngIf=\"showItsMeRegistrationOption\" class=\"width--full mb--xs\">\n              <div class=\"font--caption pb--xs text-align--center\">\n                {{ 'general.lbl.register-with-itsme-help' | translate }}\n              </div>\n              <button\n                class=\"button button--secondary button--fullwidth button__icon--position-left register-with-itsme pt--m pb--m\"\n                (click)=\"register('itsme')\">\n                <span class=\"ml--s--md\">\n                  {{ 'general.lbl.register-with-itsme' | translate }}\n                </span>\n              </button>\n              <div class=\"divider--xxs__mid-grey my--xl\"></div>\n            </div>\n            <button\n              class=\"button button--secondary button--fullwidth button__icon--position-left pt-10 pb-10\"\n              (click)=\"register('internal')\">\n              {{ 'general.lbl.register' | translate }}\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-template>\n<ng-template #onlyLogin>\n  <div\n    class=\"display--flex flex-direction--column justify-content--between background-white col-lg-5 col-md-4 col-12 px--xl pb--xl pt--xxs mr--xm--md mr--n mb--n--md mb--m\">\n    <div class=\"text-align--center\">\n      <h5 class=\"heading--5\" *ngIf=\"getLoginStatus() === loginEnum.INSUFFICIENT_PERMISSIONS\">\n        {{ 'general.lbl.login-again-insufficient-rights' | translate }}\n      </h5>\n      <div *ngIf=\"getLoginStatus() !== loginEnum.INSUFFICIENT_PERMISSIONS\">\n        <h5 class=\"heading--5\" *ngIf=\"source === 'EMAIL'\">\n          {{ 'general.lbl.login-again-abandon-cart' | translate }}\n        </h5>\n        <h5 class=\"heading--5\" *ngIf=\"source !== 'EMAIL'\">\n          {{ 'general.lbl.already-a-customer' | translate: { brand: brand } }}\n        </h5>\n      </div>\n    </div>\n    <div class=\"m--auto\">\n      <img\n        class=\"hide-until-md\"\n        src=\"/etc/designs/aff-telenetgroup/atomic/clientlibs/clientlib-atomic/graphics/base-login-desktop.svg\"\n        alt=\"login\"\n        *ngIf=\"brand === 'BASE'\" />\n      <img\n        class=\"hide-from-md\"\n        src=\"/etc/designs/aff-telenetgroup/atomic/clientlibs/clientlib-atomic/graphics/base-login-mobile.svg\"\n        alt=\"login\"\n        *ngIf=\"brand === 'BASE'\" />\n      <img\n        class=\"hide-until-md\"\n        src=\"/etc/designs/aff-telenetgroup/atomic/clientlibs/clientlib-atomic/graphics/telenet-login-desktop.svg\"\n        alt=\"login\"\n        *ngIf=\"brand !== 'BASE'\" />\n      <img\n        class=\"hide-from-md\"\n        src=\"/etc/designs/aff-telenetgroup/atomic/clientlibs/clientlib-atomic/graphics/telenet-login-mobile.svg\"\n        alt=\"login\"\n        *ngIf=\"brand !== 'BASE'\" />\n    </div>\n    <button\n      class=\"button button--primary button--fullwidth\"\n      *ngIf=\"getLoginStatus() === loginEnum.INSUFFICIENT_PERMISSIONS\"\n      (click)=\"login(true)\">\n      {{ 'general.login-link' | translate }}\n    </button>\n    <button\n      class=\"button button--primary button--fullwidth\"\n      *ngIf=\"getLoginStatus() !== loginEnum.INSUFFICIENT_PERMISSIONS\"\n      (click)=\"login()\">\n      {{ 'general.login-link' | translate }}\n    </button>\n  </div>\n</ng-template>\n<ng-template #loginOrRegister>\n  <ng-container [ngTemplateOutlet]=\"onlyLogin\"> </ng-container>\n  <ng-container *ngIf=\"showRegistrationOptions()\" [ngTemplateOutlet]=\"onlyRegister\"> </ng-container>\n</ng-template>\n" }]
    }], () => [{ type: Window, decorators: [{
                type: Inject,
                args: ['Window']
            }] }, { type: LoginService }, { type: UserDetailsService }, { type: i2$1.ConfigService }, { type: i3.UrlService }, { type: i3.PathCategorisationService }, { type: i3.LanguageService }, { type: i1.DataLayerService }, { type: i2.CookieService }], { scopes: [{
            type: Input
        }], messageGroupName: [{
            type: Input
        }], autoRedirect: [{
            type: Input
        }], styleHint: [{
            type: Input
        }], mode: [{
            type: Input
        }], registrationUrl: [{
            type: Input
        }], showItsMeRegistrationOption: [{
            type: Input
        }], hasInstallableProductType: [{
            type: Input
        }], renderOnlyForOriginCustomer: [{
            type: Input
        }], componentCanRender: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(LoginComponent, { className: "LoginComponent" }); })();

const rawLoginDetailsInterfaceFactory = makeFactory({
    status: 'active',
    customer_number: '1208338235',
    identity_id: '817624297',
    username: 'kolatest@gmail.com',
    login_alias: '0625ad87-0a2e-4e02-9b5a-28c71c70f63c',
    first_name: 'kola',
    last_name: 'psc1',
    scopes: ['groupbundles', 'acceptoffer', 'D_manageusers'],
    explicit_login: true,
    narrowed_scope: false,
    bss_system: 'NETCRACKER',
    auth_age: 18,
    role: 'CONTRACT_HOLDER',
});
const rawFormerLoginDetailsInterfaceFactory = makeFactory({
    status: 'Former',
    customer_number: '1208338235',
    identity_id: '817624297',
    username: 'kolatest@gmail.com',
    login_alias: '0625ad87-0a2e-4e02-9b5a-28c71c70f63c',
    first_name: 'kola',
    last_name: 'psc1',
    scopes: ['groupbundles', 'acceptoffer', 'D_manageusers'],
    explicit_login: true,
    narrowed_scope: false,
    bss_system: 'NETCRACKER',
    auth_age: 18,
    role: 'CONTRACT_HOLDER',
});

class LoginModule {
    static ɵfac = function LoginModule_Factory(t) { return new (t || LoginModule)(); };
    static ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: LoginModule });
    static ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule, TranslateModule] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoginModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, TranslateModule],
                declarations: [LoginComponent],
                exports: [LoginComponent],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(LoginModule, { declarations: [LoginComponent], imports: [CommonModule, TranslateModule], exports: [LoginComponent] }); })();

/**
 * Generated bundle index. Do not edit.
 */

export { AUTH_PROVIDER, AUTH_SERVICE, AuthenticationPrompt, CacheService, HttpTypesEnum, LoginComponent, LoginCustomerNameMapper, LoginDetails, LoginDetailsConstants, LoginDetailsMapper, LoginDetailsTestfactory, LoginModule, LoginService, LoginStatusEnum, LogoutDetails, LogoutMapper, OcapiCallConfig, OcapiHelper, OcapiService, OcapiSocketService, SalesConstants, UserDetailsService, rawLoginDetailsInterfaceFactory };
//# sourceMappingURL=telenet-ng-lib-ocapi.mjs.map
