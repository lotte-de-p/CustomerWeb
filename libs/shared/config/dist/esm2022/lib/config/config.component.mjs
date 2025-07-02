import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./config.service";
export class ConfigComponent {
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
    static ɵfac = function ConfigComponent_Factory(t) { return new (t || ConfigComponent)(i0.ɵɵdirectiveInject(i1.ConfigService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ConfigComponent, selectors: [["app-config"]], inputs: { ocapiUrl: "ocapiUrl", openidAuthUrl: "openidAuthUrl", ocapiClientId: "ocapiClientId", openidClientId: "openidClientId", authProvider: "authProvider", openidUrl: "openidUrl", oauthCallbackUrl: "oauthCallbackUrl", phpEshopUrl: "phpEshopUrl", omapiQueryUrl: "omapiQueryUrl", omapiUrl: "omapiUrl", gatewayUrl: "gatewayUrl", gsaUrl: "gsaUrl", sofyUrl: "sofyUrl", isAuthorMode: "isAuthorMode", baseAcSystemsUrl: "baseAcSystemsUrl", kbcPostMessageReceiverOriginUrl: "kbcPostMessageReceiverOriginUrl", recaptchaApiUrl: "recaptchaApiUrl", recaptchaSiteKey: "recaptchaSiteKey", recaptchaV3SiteKey: "recaptchaV3SiteKey", searchIndexParameter: "searchIndexParameter", searchApiUrl: "searchApiUrl", productFinderUrl: "productFinderUrl" }, decls: 1, vars: 0, template: function ConfigComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "div");
        } }, encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ConfigComponent, [{
        type: Component,
        args: [{ selector: 'app-config', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div></div>\n" }]
    }], () => [{ type: i1.ConfigService }], { ocapiUrl: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvY29uZmlnL2NvbmZpZy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9zcmMvbGliL2NvbmZpZy9jb25maWcuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7OztBQVFsRixNQUFNLE9BQU8sZUFBZTtJQTZCRztJQTVCdEIsTUFBTSxDQUFDLG9CQUFvQixHQUFHLFdBQVcsQ0FBQztJQUV4QyxRQUFRLENBQVU7SUFFbEIsYUFBYSxDQUFVO0lBQ3ZCLGFBQWEsQ0FBVTtJQUN2QixjQUFjLENBQVU7SUFDeEIsWUFBWSxDQUFVO0lBRXRCLFNBQVMsQ0FBVTtJQUNuQixnQkFBZ0IsQ0FBVTtJQUMxQixXQUFXLENBQVU7SUFDckIsYUFBYSxDQUFVO0lBQ3ZCLFFBQVEsQ0FBVTtJQUNsQixVQUFVLENBQVU7SUFDcEIsTUFBTSxDQUFVO0lBQ2hCLE9BQU8sQ0FBVTtJQUNqQixZQUFZLENBQVU7SUFDdEIsZ0JBQWdCLENBQVU7SUFDMUIsK0JBQStCLENBQVU7SUFDekMsZUFBZSxDQUFVO0lBQ3pCLGdCQUFnQixDQUFVO0lBQzFCLGtCQUFrQixDQUFVO0lBRTVCLG9CQUFvQixDQUFVO0lBQzlCLFlBQVksQ0FBVTtJQUN0QixnQkFBZ0IsQ0FBVTtJQUVuQyxZQUE2QixhQUE0QjtRQUE1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtJQUFHLENBQUM7SUFFN0QsUUFBUTtRQUNOLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDO1lBQzNCLFdBQVcsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUUxQixpQkFBaUIsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUNyQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUNyQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsY0FBYztZQUN2QyxlQUFlLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFFbEMsWUFBWSxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQzVCLG9CQUFvQixFQUFFLElBQUksQ0FBQyxnQkFBZ0I7WUFDM0MsZUFBZSxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQ2pDLFdBQVcsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUMxQixpQkFBaUIsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUNyQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDOUIsU0FBUyxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ3RCLFVBQVUsRUFBRSxJQUFJLENBQUMsT0FBTztZQUN4QixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsWUFBWTtZQUNuQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO1lBQzVDLHNDQUFzQyxFQUFFLElBQUksQ0FBQywrQkFBK0I7WUFDNUUsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLGVBQWU7WUFDekMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjtZQUMzQyx1QkFBdUIsRUFBRSxJQUFJLENBQUMsa0JBQWtCO1lBQ2hELHdCQUF3QixFQUFFLElBQUksQ0FBQyxvQkFBb0I7WUFDbkQsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDbkMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjtTQUM1QyxDQUFDLENBQUM7SUFDTCxDQUFDO3lFQTFEVSxlQUFlOzZEQUFmLGVBQWU7WUNSNUIsc0JBQVc7OztpRkRRRSxlQUFlO2NBTDNCLFNBQVM7MkJBQ0UsWUFBWSxtQkFFTCx1QkFBdUIsQ0FBQyxNQUFNOzhDQUt0QyxRQUFRO2tCQUFoQixLQUFLO1lBRUcsYUFBYTtrQkFBckIsS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUs7WUFDRyxjQUFjO2tCQUF0QixLQUFLO1lBQ0csWUFBWTtrQkFBcEIsS0FBSztZQUVHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxnQkFBZ0I7a0JBQXhCLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csYUFBYTtrQkFBckIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBQ0csWUFBWTtrQkFBcEIsS0FBSztZQUNHLGdCQUFnQjtrQkFBeEIsS0FBSztZQUNHLCtCQUErQjtrQkFBdkMsS0FBSztZQUNHLGVBQWU7a0JBQXZCLEtBQUs7WUFDRyxnQkFBZ0I7a0JBQXhCLEtBQUs7WUFDRyxrQkFBa0I7a0JBQTFCLEtBQUs7WUFFRyxvQkFBb0I7a0JBQTVCLEtBQUs7WUFDRyxZQUFZO2tCQUFwQixLQUFLO1lBQ0csZ0JBQWdCO2tCQUF4QixLQUFLOztrRkEzQkssZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWNvbmZpZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb25maWcuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQ29uZmlnQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljIHN0YXRpYyB3ZWJjb21wb25lbnRTZWxlY3RvciA9ICd0Zy1jb25maWcnO1xuXG4gIEBJbnB1dCgpIG9jYXBpVXJsPzogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIG9wZW5pZEF1dGhVcmw/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIG9jYXBpQ2xpZW50SWQ/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIG9wZW5pZENsaWVudElkPzogc3RyaW5nO1xuICBASW5wdXQoKSBhdXRoUHJvdmlkZXI/OiBzdHJpbmc7XG5cbiAgQElucHV0KCkgb3BlbmlkVXJsPzogc3RyaW5nO1xuICBASW5wdXQoKSBvYXV0aENhbGxiYWNrVXJsPzogc3RyaW5nO1xuICBASW5wdXQoKSBwaHBFc2hvcFVybD86IHN0cmluZztcbiAgQElucHV0KCkgb21hcGlRdWVyeVVybD86IHN0cmluZztcbiAgQElucHV0KCkgb21hcGlVcmw/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGdhdGV3YXlVcmw/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGdzYVVybD86IHN0cmluZztcbiAgQElucHV0KCkgc29meVVybD86IHN0cmluZztcbiAgQElucHV0KCkgaXNBdXRob3JNb2RlPzogc3RyaW5nO1xuICBASW5wdXQoKSBiYXNlQWNTeXN0ZW1zVXJsPzogc3RyaW5nO1xuICBASW5wdXQoKSBrYmNQb3N0TWVzc2FnZVJlY2VpdmVyT3JpZ2luVXJsPzogc3RyaW5nO1xuICBASW5wdXQoKSByZWNhcHRjaGFBcGlVcmw/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHJlY2FwdGNoYVNpdGVLZXk/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHJlY2FwdGNoYVYzU2l0ZUtleT86IHN0cmluZztcblxuICBASW5wdXQoKSBzZWFyY2hJbmRleFBhcmFtZXRlcj86IHN0cmluZztcbiAgQElucHV0KCkgc2VhcmNoQXBpVXJsPzogc3RyaW5nO1xuICBASW5wdXQoKSBwcm9kdWN0RmluZGVyVXJsPzogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY29uZmlnU2VydmljZTogQ29uZmlnU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNvbmZpZ1NlcnZpY2UuYWRkQ29uZmlnKHtcbiAgICAgICdvY2FwaS11cmwnOiB0aGlzLm9jYXBpVXJsLFxuXG4gICAgICAnb3BlbmlkLWF1dGgtdXJsJzogdGhpcy5vcGVuaWRBdXRoVXJsLFxuICAgICAgJ29jYXBpLWNsaWVudC1pZCc6IHRoaXMub2NhcGlDbGllbnRJZCxcbiAgICAgICdvcGVuaWQtY2xpZW50LWlkJzogdGhpcy5vcGVuaWRDbGllbnRJZCxcbiAgICAgICdhdXRoLXByb3ZpZGVyJzogdGhpcy5hdXRoUHJvdmlkZXIsXG5cbiAgICAgICdvcGVuaWQtdXJsJzogdGhpcy5vcGVuaWRVcmwsXG4gICAgICAnb2F1dGgtY2FsbGJhY2stdXJsJzogdGhpcy5vYXV0aENhbGxiYWNrVXJsLFxuICAgICAgJ3BocC1lc2hvcC11cmwnOiB0aGlzLnBocEVzaG9wVXJsLFxuICAgICAgJ29tYXBpLXVybCc6IHRoaXMub21hcGlVcmwsXG4gICAgICAnb21hcGktcXVlcnktdXJsJzogdGhpcy5vbWFwaVF1ZXJ5VXJsLFxuICAgICAgJ2dhdGV3YXktdXJsJzogdGhpcy5nYXRld2F5VXJsLFxuICAgICAgJ2dzYS11cmwnOiB0aGlzLmdzYVVybCxcbiAgICAgICdzb2Z5LXVybCc6IHRoaXMuc29meVVybCxcbiAgICAgICdpcy1hdXRob3ItbW9kZSc6IHRoaXMuaXNBdXRob3JNb2RlLFxuICAgICAgJ2Jhc2UtYWMtc3lzdGVtcy11cmwnOiB0aGlzLmJhc2VBY1N5c3RlbXNVcmwsXG4gICAgICAna2JjLXBvc3QtbWVzc2FnZS1yZWNlaXZlci1vcmlnaW4tdXJsJzogdGhpcy5rYmNQb3N0TWVzc2FnZVJlY2VpdmVyT3JpZ2luVXJsLFxuICAgICAgJ3JlY2FwdGNoYS1hcGktdXJsJzogdGhpcy5yZWNhcHRjaGFBcGlVcmwsXG4gICAgICAncmVjYXB0Y2hhLXNpdGUta2V5JzogdGhpcy5yZWNhcHRjaGFTaXRlS2V5LFxuICAgICAgJ3JlY2FwdGNoYS12My1zaXRlLWtleSc6IHRoaXMucmVjYXB0Y2hhVjNTaXRlS2V5LFxuICAgICAgJ3NlYXJjaC1pbmRleC1wYXJhbWV0ZXInOiB0aGlzLnNlYXJjaEluZGV4UGFyYW1ldGVyLFxuICAgICAgJ3NlYXJjaC1hcGktdXJsJzogdGhpcy5zZWFyY2hBcGlVcmwsXG4gICAgICAncHJvZHVjdC1maW5kZXItdXJsJzogdGhpcy5wcm9kdWN0RmluZGVyVXJsLFxuICAgIH0pO1xuICB9XG59XG4iLCI8ZGl2PjwvZGl2PlxuIl19