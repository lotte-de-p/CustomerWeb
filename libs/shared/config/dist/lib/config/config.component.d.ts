import { OnInit } from '@angular/core';
import { ConfigService } from './config.service';
import * as i0 from "@angular/core";
export declare class ConfigComponent implements OnInit {
    private readonly configService;
    static webcomponentSelector: string;
    ocapiUrl?: string;
    openidAuthUrl?: string;
    ocapiClientId?: string;
    openidClientId?: string;
    authProvider?: string;
    openidUrl?: string;
    oauthCallbackUrl?: string;
    phpEshopUrl?: string;
    omapiQueryUrl?: string;
    omapiUrl?: string;
    gatewayUrl?: string;
    gsaUrl?: string;
    sofyUrl?: string;
    isAuthorMode?: string;
    baseAcSystemsUrl?: string;
    kbcPostMessageReceiverOriginUrl?: string;
    recaptchaApiUrl?: string;
    recaptchaSiteKey?: string;
    recaptchaV3SiteKey?: string;
    searchIndexParameter?: string;
    searchApiUrl?: string;
    productFinderUrl?: string;
    constructor(configService: ConfigService);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ConfigComponent, "app-config", never, { "ocapiUrl": { "alias": "ocapiUrl"; "required": false; }; "openidAuthUrl": { "alias": "openidAuthUrl"; "required": false; }; "ocapiClientId": { "alias": "ocapiClientId"; "required": false; }; "openidClientId": { "alias": "openidClientId"; "required": false; }; "authProvider": { "alias": "authProvider"; "required": false; }; "openidUrl": { "alias": "openidUrl"; "required": false; }; "oauthCallbackUrl": { "alias": "oauthCallbackUrl"; "required": false; }; "phpEshopUrl": { "alias": "phpEshopUrl"; "required": false; }; "omapiQueryUrl": { "alias": "omapiQueryUrl"; "required": false; }; "omapiUrl": { "alias": "omapiUrl"; "required": false; }; "gatewayUrl": { "alias": "gatewayUrl"; "required": false; }; "gsaUrl": { "alias": "gsaUrl"; "required": false; }; "sofyUrl": { "alias": "sofyUrl"; "required": false; }; "isAuthorMode": { "alias": "isAuthorMode"; "required": false; }; "baseAcSystemsUrl": { "alias": "baseAcSystemsUrl"; "required": false; }; "kbcPostMessageReceiverOriginUrl": { "alias": "kbcPostMessageReceiverOriginUrl"; "required": false; }; "recaptchaApiUrl": { "alias": "recaptchaApiUrl"; "required": false; }; "recaptchaSiteKey": { "alias": "recaptchaSiteKey"; "required": false; }; "recaptchaV3SiteKey": { "alias": "recaptchaV3SiteKey"; "required": false; }; "searchIndexParameter": { "alias": "searchIndexParameter"; "required": false; }; "searchApiUrl": { "alias": "searchApiUrl"; "required": false; }; "productFinderUrl": { "alias": "productFinderUrl"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=config.component.d.ts.map