import * as i0 from '@angular/core';
import { InjectionToken, Injectable, Inject, Component, ChangeDetectionStrategy, Input, NgModule } from '@angular/core';
import { LogFactory } from '@telenet/ng-lib-shared';

const APP_CONFIG = new InjectionToken('app.config');

class ConfigConstants {
    static MESSAGE_GROUP = 'message-group';
    static OCAPI_URl = 'ocapi-url';
    static OMAPI_URL = 'omapi-url';
    static OMAPI_QUERY_URL = 'omapi-query-url';
    static OPENID_URL = 'openid-url';
    static OAUTH_CALLBACK_URL = 'oauth-callback-url';
    static PHP_ESHOP_URL = 'php-eshop-url';
    static OCAPI_QUERY_URL = 'ocapi-query-url';
    static OCAPI_SOCKET_URL = 'ocapi-socket-url';
    static GATEWAY_URL = 'gateway-url';
    static GSA_URL = 'gsa-url';
    static SOFY_URL = 'sofy-url';
    static IS_AUTHOR_MODE = 'is-author-mode';
    static BASE_AC_SYSTEMS_URL = 'base-ac-systems-url';
    static POST_MESSAGE_RECEIVER_ORIGIN_URL = 'kbc-post-message-receiver-origin-url';
    static RECAPTCHA_API_URL = 'recaptcha-api-url';
    static RECAPTCHA_SITE_KEY = 'recaptcha-site-key';
    static RECAPTCHA_V3_SITE_KEY = 'recaptcha-v3-site-key';
    static SEARCH_INDEX_PARAMETER = 'search-index-parameter';
    static SEARCH_API_URL = 'search-api-url';
    static PRODUCT_FINDER_URL = 'product-finder-url';
    static OPENID_AUTH_URL = 'openid-auth-url';
    static OPENID_CLIENT_ID = 'openid-client-id';
    static OCAPI_CLIENT_ID = 'ocapi-client-id';
    static AUTH_PROVIDER = 'auth-provider';
}

// @ts-nocheck
class ConfigService {
    window;
    static LOG = LogFactory.createLogger(ConfigService);
    defaultConfig = { remoteHosts: {} };
    constructor(window) {
        this.window = window;
        this.window['Config'] = window['Config'] ?? this.defaultConfig;
        ConfigService.LOG.logDebug('ConfigService Instantiating ' + new Date().toDateString(), this.window['Config']);
    }
    getAllConfig() {
        return this.window['Config'];
    }
    getConfig(key) {
        const configuration = this.window['Config'] || {};
        ConfigService.LOG.logDebug(`ConfigService GetConfig: ${key} [${configuration[key]}]`);
        return configuration[key] ?? '';
    }
    addRemoteHostConfig(moduleId, remoteModuleConfigOptions) {
        if (this.window['Config']?.['remoteHosts']) {
            this.window['Config']['remoteHosts'][moduleId] = remoteModuleConfigOptions;
        }
    }
    addConfig(config) {
        this.window['Config'] = { ...this.window['Config'], ...config };
    }
    getRemoteHostConfig(moduleId) {
        if (this.window['Config']?.['remoteHosts']) {
            return this.window['Config']['remoteHosts'][moduleId];
        }
        return undefined;
    }
    static ɵfac = function ConfigService_Factory(t) { return new (t || ConfigService)(i0.ɵɵinject('Window')); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ConfigService, factory: ConfigService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ConfigService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: Window, decorators: [{
                type: Inject,
                args: ['Window']
            }] }], null); })();

class ConfigComponent {
    configService;
    static webcomponentSelector = 'tg-config';
    ocapiUrl;
    openidAuthUrl;
    ocapiClientId;
    openidClientId;
    authProvider;
    openidUrl;
    oauthCallbackUrl;
    phpEshopUrl;
    omapiQueryUrl;
    omapiUrl;
    gatewayUrl;
    gsaUrl;
    sofyUrl;
    isAuthorMode;
    baseAcSystemsUrl;
    kbcPostMessageReceiverOriginUrl;
    recaptchaApiUrl;
    recaptchaSiteKey;
    recaptchaV3SiteKey;
    searchIndexParameter;
    searchApiUrl;
    productFinderUrl;
    constructor(configService) {
        this.configService = configService;
    }
    ngOnInit() {
        this.configService.addConfig({
            'ocapi-url': this.ocapiUrl,
            'openid-auth-url': this.openidAuthUrl,
            'ocapi-client-id': this.ocapiClientId,
            'openid-client-id': this.openidClientId,
            'auth-provider': this.authProvider,
            'openid-url': this.openidUrl,
            'oauth-callback-url': this.oauthCallbackUrl,
            'php-eshop-url': this.phpEshopUrl,
            'omapi-url': this.omapiUrl,
            'omapi-query-url': this.omapiQueryUrl,
            'gateway-url': this.gatewayUrl,
            'gsa-url': this.gsaUrl,
            'sofy-url': this.sofyUrl,
            'is-author-mode': this.isAuthorMode,
            'base-ac-systems-url': this.baseAcSystemsUrl,
            'kbc-post-message-receiver-origin-url': this.kbcPostMessageReceiverOriginUrl,
            'recaptcha-api-url': this.recaptchaApiUrl,
            'recaptcha-site-key': this.recaptchaSiteKey,
            'recaptcha-v3-site-key': this.recaptchaV3SiteKey,
            'search-index-parameter': this.searchIndexParameter,
            'search-api-url': this.searchApiUrl,
            'product-finder-url': this.productFinderUrl,
        });
    }
    static ɵfac = function ConfigComponent_Factory(t) { return new (t || ConfigComponent)(i0.ɵɵdirectiveInject(ConfigService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ConfigComponent, selectors: [["app-config"]], inputs: { ocapiUrl: "ocapiUrl", openidAuthUrl: "openidAuthUrl", ocapiClientId: "ocapiClientId", openidClientId: "openidClientId", authProvider: "authProvider", openidUrl: "openidUrl", oauthCallbackUrl: "oauthCallbackUrl", phpEshopUrl: "phpEshopUrl", omapiQueryUrl: "omapiQueryUrl", omapiUrl: "omapiUrl", gatewayUrl: "gatewayUrl", gsaUrl: "gsaUrl", sofyUrl: "sofyUrl", isAuthorMode: "isAuthorMode", baseAcSystemsUrl: "baseAcSystemsUrl", kbcPostMessageReceiverOriginUrl: "kbcPostMessageReceiverOriginUrl", recaptchaApiUrl: "recaptchaApiUrl", recaptchaSiteKey: "recaptchaSiteKey", recaptchaV3SiteKey: "recaptchaV3SiteKey", searchIndexParameter: "searchIndexParameter", searchApiUrl: "searchApiUrl", productFinderUrl: "productFinderUrl" }, decls: 1, vars: 0, template: function ConfigComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "div");
        } }, encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ConfigComponent, [{
        type: Component,
        args: [{ selector: 'app-config', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div></div>\n" }]
    }], () => [{ type: ConfigService }], { ocapiUrl: [{
            type: Input
        }], openidAuthUrl: [{
            type: Input
        }], ocapiClientId: [{
            type: Input
        }], openidClientId: [{
            type: Input
        }], authProvider: [{
            type: Input
        }], openidUrl: [{
            type: Input
        }], oauthCallbackUrl: [{
            type: Input
        }], phpEshopUrl: [{
            type: Input
        }], omapiQueryUrl: [{
            type: Input
        }], omapiUrl: [{
            type: Input
        }], gatewayUrl: [{
            type: Input
        }], gsaUrl: [{
            type: Input
        }], sofyUrl: [{
            type: Input
        }], isAuthorMode: [{
            type: Input
        }], baseAcSystemsUrl: [{
            type: Input
        }], kbcPostMessageReceiverOriginUrl: [{
            type: Input
        }], recaptchaApiUrl: [{
            type: Input
        }], recaptchaSiteKey: [{
            type: Input
        }], recaptchaV3SiteKey: [{
            type: Input
        }], searchIndexParameter: [{
            type: Input
        }], searchApiUrl: [{
            type: Input
        }], productFinderUrl: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ConfigComponent, { className: "ConfigComponent" }); })();

class ConfigModule {
    static ɵfac = function ConfigModule_Factory(t) { return new (t || ConfigModule)(); };
    static ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ConfigModule });
    static ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({});
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ConfigModule, [{
        type: NgModule,
        args: [{
                imports: [],
                declarations: [ConfigComponent],
                exports: [ConfigComponent],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ConfigModule, { declarations: [ConfigComponent], exports: [ConfigComponent] }); })();

/**
 * Generated bundle index. Do not edit.
 */

export { APP_CONFIG, ConfigComponent, ConfigConstants, ConfigModule, ConfigService };
//# sourceMappingURL=telenet-ng-lib-config.mjs.map
