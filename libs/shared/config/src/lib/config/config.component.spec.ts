import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { ConfigComponent } from './config.component';
import { ConfigService } from './config.service';
import { ConfigConstants } from './config.constants';

describe('ConfigComponent', () => {
  let configComponent: ConfigComponent;
  let fixture: ComponentFixture<ConfigComponent>;
  let configService: ConfigService;
  const windowObject = {
    Config: {
      'ocapi-url': 'https://api.int.telenet.be/ocapi',
      'omapi-url': 'https://api.int.telenet.be/omapi',
      'omapi-query-url': 'https://api.int.telenet.be/omapi-query/public',
      'openid-url': 'https://login.int.telenet.be/openid',
      'gateway-url': 'https://api.int.telenet.be',
      'sofy-url': 'https://int.sofy-dev.awscloud.external.telenet.be',
      'gsa-url': 'https://api.int.telenet.be/searchapi/gsa/api/',
      'oauth-callback-url': '',
      'php-eshop-url': 'https://shop.int.telenet.be/shop/nl',
      'base-ac-systems-url': 'https://base.rest.ac-systems.com',
      'recaptcha-api-url': 'https://www.google.com/recaptcha/api.js',
      'recaptcha-site-key': '6Ld15hAbAAAAABL4l8LoTnBv-CBkhYE8Ukwc3aMQ',
      'recaptcha-v3-site-key': '6Lc2hCQbAAAAACaxx5NvByzCNYI4NSpgqsrrT4Wp',
      'is-author-mode': 'false',
      'kbc-post-message-receiver-origin-url': 'kbcPostMessageReceiverOriginUrl',
      'oauth-url-pid': 'oauthUrlPid',
      'oauth-callback-url-pid': 'oauthCallbackUrlPid',
      'search-index-parameter': 'searchIndexParameter',
      'ocapi-login-endpoint-url': 'https://api.int.telenet.be/ocapi/login/authorization/telenet_be',
      'search-api-url': 'https://api.int.telenet.be/search/api/',
      'product-finder-url': 'https://int.sofy-dev.awscloud.external.telenet.be',
      'openid-auth-url': 'https://login.int.telenet.be/openid/oauth/authorize',
      'ocapi-client-id': 'ocapi',
      'openid-client-id': 'telenet_be',
      'auth-provider': 'openid',
    },
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ConfigComponent],
      providers: [
        {
          provide: 'Window',
          useValue: windowObject,
        },
        ConfigService,
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(ConfigComponent);
    configComponent = fixture.componentInstance;
    configService = TestBed.inject(ConfigService);
  });

  it('should config the service with values of the window object', inject(
    [ConfigService],
    (configService: ConfigService) => {
      expect(configService.getConfig(ConfigConstants.OCAPI_URl)).toEqual(windowObject.Config['ocapi-url']);
      expect(configService.getConfig(ConfigConstants.OPENID_AUTH_URL)).toEqual(windowObject.Config['openid-auth-url']);
      expect(configService.getConfig(ConfigConstants.OAUTH_CALLBACK_URL)).toEqual(
        windowObject.Config['oauth-callback-url']
      );
      expect(configService.getConfig(ConfigConstants.OPENID_CLIENT_ID)).toEqual(
        windowObject.Config['openid-client-id']
      );
      expect(configService.getConfig(ConfigConstants.PHP_ESHOP_URL)).toEqual(windowObject.Config['php-eshop-url']);
      expect(configService.getConfig(ConfigConstants.BASE_AC_SYSTEMS_URL)).toBe(
        windowObject.Config['base-ac-systems-url']
      );
      expect(configService.getConfig(ConfigConstants.RECAPTCHA_API_URL)).toBe(windowObject.Config['recaptcha-api-url']);
      expect(configService.getConfig(ConfigConstants.RECAPTCHA_SITE_KEY)).toBe(
        windowObject.Config['recaptcha-site-key']
      );
      expect(configService.getConfig(ConfigConstants.RECAPTCHA_V3_SITE_KEY)).toBe(
        windowObject.Config['recaptcha-v3-site-key']
      );
      expect(configService.getConfig(ConfigConstants.GSA_URL)).toBe(windowObject.Config['gsa-url']);
      expect(configService.getConfig(ConfigConstants.SEARCH_API_URL)).toBe(windowObject.Config['search-api-url']);
      expect(configService.getConfig(ConfigConstants.PRODUCT_FINDER_URL)).toBe(
        windowObject.Config['product-finder-url']
      );
    }
  ));

  it('should fill in window object', function () {
    configComponent.ocapiUrl = windowObject.Config['ocapi-url'];
    configComponent.openidAuthUrl = windowObject.Config['openid-auth-url'];
    configComponent.openidUrl = windowObject.Config['openid-url'];
    configComponent.openidClientId = windowObject.Config['openid-client-id'];
    configComponent.oauthCallbackUrl = windowObject.Config['oauth-callback-url'];
    configComponent.phpEshopUrl = windowObject.Config['php-eshop-url'];
    configComponent.omapiQueryUrl = windowObject.Config['omapi-query-url'];
    configComponent.omapiUrl = windowObject.Config['omapi-url'];
    configComponent.gatewayUrl = windowObject.Config['gateway-url'];
    configComponent.gsaUrl = windowObject.Config['gsa-url'];
    configComponent.sofyUrl = windowObject.Config['sofy-url'];
    configComponent.isAuthorMode = windowObject.Config['is-author-mode'];
    configComponent.baseAcSystemsUrl = windowObject.Config['base-ac-systems-url'];
    configComponent.kbcPostMessageReceiverOriginUrl = windowObject.Config['kbc-post-message-receiver-origin-url'];
    configComponent.recaptchaApiUrl = windowObject.Config['recaptcha-api-url'];
    configComponent.recaptchaSiteKey = windowObject.Config['recaptcha-site-key'];
    configComponent.recaptchaV3SiteKey = windowObject.Config['recaptcha-v3-site-key'];
    configComponent.searchIndexParameter = windowObject.Config['search-index-parameter'];
    configComponent.searchApiUrl = windowObject.Config['search-api-url'];
    configComponent.productFinderUrl = windowObject.Config['product-finder-url'];

    configComponent.ngOnInit();
    expect(configService.getAllConfig()).toEqual(windowObject.Config);
  });
});
