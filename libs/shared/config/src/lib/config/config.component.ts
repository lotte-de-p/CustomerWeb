import { Component, Input, OnInit } from '@angular/core';
import { ConfigService } from './config.service';

@Component({
  selector: 'app-config',
  standalone: true,
  templateUrl: './config.component.html',
})
export class ConfigComponent implements OnInit {
  public static webcomponentSelector = 'tg-config';

  @Input() ocapiUrl?: string;

  @Input() openidAuthUrl?: string;
  @Input() ocapiClientId?: string;
  @Input() openidClientId?: string;
  @Input() authProvider?: string;

  @Input() openidUrl?: string;
  @Input() oauthCallbackUrl?: string;
  @Input() phpEshopUrl?: string;
  @Input() omapiQueryUrl?: string;
  @Input() omapiUrl?: string;
  @Input() gatewayUrl?: string;
  @Input() gsaUrl?: string;
  @Input() sofyUrl?: string;
  @Input() isAuthorMode?: string;
  @Input() baseAcSystemsUrl?: string;
  @Input() kbcPostMessageReceiverOriginUrl?: string;
  @Input() recaptchaApiUrl?: string;
  @Input() recaptchaSiteKey?: string;
  @Input() recaptchaV3SiteKey?: string;

  @Input() searchIndexParameter?: string;
  @Input() searchApiUrl?: string;
  @Input() productFinderUrl?: string;

  constructor(private readonly configService: ConfigService) {}

  ngOnInit(): void {
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
}
