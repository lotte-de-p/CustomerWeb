import { OcapiHelper } from './ocapi.helper';
import { UrlService } from '@telenet/ng-lib-page';
import { cleanStylesFromDom, MapperInterface } from '@telenet/ng-lib-shared';
import { CookieService } from 'ngx-cookie-service';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { OcapiCallConfig } from '../models/ocapi-call.model';
import { instance, mock } from 'ts-mockito';
import { when } from 'jest-when';

class DummyMapper {
  toModel() {
    return 'mapped response';
  }
}

const X_TOKEN_XSRF = 'X-TOKEN-XSRF';
const X_CLIENT_ID = 'X-Client-Id';
const X_REQUESTED_WITH = 'X-Requested-With';
const X_ALT_REFERER = 'x-alt-referer';
const OPENID_CLIENT_ID = 'openid-client-id';
const AUTHORIZATION = 'Authorization';

const APPLICATION_JSON = 'application/json;charset=UTF-8';
const CONTENT_TYPE = 'Content-Type';

const BASE_PRIVATE = 'https://www.int.base.be/en/private.html';

describe('OcapiHelper', () => {
  let ocapiHelper: OcapiHelper,
    urlService: UrlService,
    cookieService: CookieService,
    mapper: MapperInterface<unknown, unknown>,
    mockedMapper: MapperInterface<unknown, unknown>;
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
      'openid-auth-url': 'https://login.int.telenet.be/openid/oauth/authorize',
      'ocapi-client-id': 'fleet_portal',
      'openid-client-id': 'fleet_portal',
      'auth-provider': 'openid',
    },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        UrlService,
        CookieService,
        {
          provide: 'Window',
          useValue: windowObject,
        },
      ],
    });
    ocapiHelper = TestBed.inject(OcapiHelper);
    urlService = TestBed.inject(UrlService);
    cookieService = TestBed.inject(CookieService);
    mockedMapper = mock(DummyMapper);
    mapper = instance(mockedMapper);
  });

  describe('createHttpHeaders', () => {
    it('should return httpHeaders', () => {
      jest.spyOn(urlService, 'getCurrentUrl').mockReturnValue(BASE_PRIVATE);
      const ocapiConfig = new OcapiCallConfig('messageGroup', 'endpoint', mapper);
      const actual = ocapiHelper.createHttpHeaders(ocapiConfig);

      expect(actual.get(X_ALT_REFERER)).toBe(BASE_PRIVATE);
      expect(actual.get(X_REQUESTED_WITH)).toBe('XMLHttpRequest');
      expect(actual.get(CONTENT_TYPE)).toBe(APPLICATION_JSON);
      expect(actual.get(X_TOKEN_XSRF)).toBeNull();
      expect(actual.get(X_CLIENT_ID)).toBe('fleet_portal');
    });

    it('should return httpHeaders with XSRF token', () => {
      jest.spyOn(urlService, 'getCurrentUrl').mockReturnValue(BASE_PRIVATE);
      const cookieServiceMock = jest.spyOn(cookieService, 'get');
      when(cookieServiceMock).calledWith('TOKEN-XSRF').mockReturnValue('123');
      const ocapiConfig = new OcapiCallConfig('messageGroup', 'endpoint', mapper);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      windowObject.Config[OPENID_CLIENT_ID] = undefined;

      const actual = ocapiHelper.createHttpHeaders(ocapiConfig);

      expect(actual.get(X_ALT_REFERER)).toBe(BASE_PRIVATE);
      expect(actual.get(X_REQUESTED_WITH)).toBe('XMLHttpRequest');
      expect(actual.get(CONTENT_TYPE)).toBe(APPLICATION_JSON);
      expect(actual.get(X_TOKEN_XSRF)).toBe('123');
      expect(actual.get(X_CLIENT_ID)).toBeNull();
    });

    it('should return httpHeaders for oauth-client-id being tip_portal', () => {
      jest.spyOn(urlService, 'getCurrentUrl').mockReturnValue(BASE_PRIVATE);
      const ocapiConfig = new OcapiCallConfig('messageGroup', 'endpoint', mapper);
      windowObject.Config[OPENID_CLIENT_ID] = 'tip_portal';

      const actual = ocapiHelper.createHttpHeaders(ocapiConfig);

      expect(actual.get(X_REQUESTED_WITH)).toBe('XMLHttpRequest');
      expect(actual.get(X_ALT_REFERER)).toBe(BASE_PRIVATE);
      expect(actual.get(CONTENT_TYPE)).toBe(APPLICATION_JSON);
      expect(actual.get(X_TOKEN_XSRF)).toBeNull();
      expect(actual.get(X_CLIENT_ID)).toBe('tip_portal');
    });

    it('should return httpHeaders without content type', () => {
      jest.spyOn(urlService, 'getCurrentUrl').mockReturnValue(BASE_PRIVATE);
      const cookieServiceMock = jest.spyOn(cookieService, 'get');
      when(cookieServiceMock).calledWith('TOKEN-XSRF').mockReturnValue('123');
      const ocapiConfig = new OcapiCallConfig('messageGroup', 'endpoint', mapper);
      ocapiConfig.withDefaultContentType = false;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      windowObject.Config[OPENID_CLIENT_ID] = undefined;

      const actual = ocapiHelper.createHttpHeaders(ocapiConfig);

      expect(actual.get(X_ALT_REFERER)).toBe(BASE_PRIVATE);
      expect(actual.get(X_REQUESTED_WITH)).toBe('XMLHttpRequest');
      expect(actual.get(X_TOKEN_XSRF)).toBe('123');
      expect(actual.get(X_CLIENT_ID)).toBeNull();
      expect(actual.get(X_CLIENT_ID)).toBeNull();
    });

    it('should return httpHeaders with Authorization token for app', () => {
      sessionStorage['TOKEN-ACCESS'] = 'test-token';
      jest.spyOn(urlService, 'getCurrentUrl').mockReturnValue(BASE_PRIVATE);
      const ocapiConfig = new OcapiCallConfig('messageGroup', 'endpoint', mapper);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      windowObject.Config[OPENID_CLIENT_ID] = undefined;

      const actual = ocapiHelper.createHttpHeaders(ocapiConfig);

      expect(actual.get(X_TOKEN_XSRF)).toBeNull();

      expect(actual.get(AUTHORIZATION)).toBe('Bearer test-token');
      expect(actual.get(X_ALT_REFERER)).toBe(BASE_PRIVATE);
      expect(actual.get(X_REQUESTED_WITH)).toBe('XMLHttpRequest');
      expect(actual.get(CONTENT_TYPE)).toBe(APPLICATION_JSON);
      expect(actual.get(X_CLIENT_ID)).toBeNull();
    });
  });

  describe('getHttpOptions', () => {
    it('should return HttpOptions', () => {
      jest.spyOn(urlService, 'getCurrentUrl').mockReturnValue(BASE_PRIVATE);

      const ocapiConfig = new OcapiCallConfig('messageGroup', 'endpoint', mapper);

      const actual = ocapiHelper.getHttpOptions(ocapiConfig);
      expect(actual.withCredentials).toBe(true);
      expect(actual.headers.get(X_ALT_REFERER)).toBe(BASE_PRIVATE);
      expect(actual.headers.get(X_REQUESTED_WITH)).toBe('XMLHttpRequest');
      expect(actual.headers.get(CONTENT_TYPE)).toBe(APPLICATION_JSON);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      expect(actual.responseType).toBeUndefined();
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      expect(actual.observe).toBeUndefined();
    });

    it('should return HttpOptions with observe response and custom response type', () => {
      jest.spyOn(urlService, 'getCurrentUrl').mockReturnValue(BASE_PRIVATE);
      const responseType = 'text';
      const ocapiConfig = new OcapiCallConfig(
        'messageGroup',
        'endpoint',
        mapper,
        undefined,
        undefined,
        true,
        responseType
      );

      const actual = ocapiHelper.getHttpOptions(ocapiConfig);

      expect(actual.withCredentials).toBe(true);
      expect(actual.headers.get(X_ALT_REFERER)).toBe(BASE_PRIVATE);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      expect(actual.responseType).toBe(responseType);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      expect(actual.observe).toBe('response');
      expect(actual.headers.get(CONTENT_TYPE)).toBe(APPLICATION_JSON);
    });
  });

  describe('getHttpHeaders', () => {
    it('should return HttpHeaders', () => {
      const ocapiConfig = new OcapiCallConfig('messageGroup', 'endpoint', mapper);
      jest.spyOn(urlService, 'getCurrentUrl').mockReturnValue(BASE_PRIVATE);
      const actual = ocapiHelper.getHttpHeaders(ocapiConfig);
      expect(actual.get(X_ALT_REFERER)).toBe(BASE_PRIVATE);
      expect(actual.get(X_REQUESTED_WITH)).toBe('XMLHttpRequest');
      expect(actual.get(CONTENT_TYPE)).toBe(APPLICATION_JSON);
    });

    it('shoud return HttpHeaders with custom header values passed in ocapicall', () => {
      jest.spyOn(urlService, 'getCurrentUrl').mockReturnValue(BASE_PRIVATE);
      const ocapiConfig = new OcapiCallConfig('messageGroup', 'endpoint', mapper, '', {
        customHeaderKey: 'customHeaderValue',
      });

      const actual = ocapiHelper.getHttpHeaders(ocapiConfig);

      expect(actual.get('customHeaderKey')).toBe('customHeaderValue');
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
