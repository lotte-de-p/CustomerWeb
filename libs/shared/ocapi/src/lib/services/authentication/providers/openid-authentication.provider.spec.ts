import { AuthenticationProvider } from './authentication.provider';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ConfigConstants, ConfigService } from '@telenet/ng-lib-config';
import { LanguageEnum, LanguageService, UrlService } from '@telenet/ng-lib-page';
import { HttpClient, HttpParams } from '@angular/common/http';
import { OcapiHelper } from '../../../utils';
import { when } from 'jest-when';
import { AUTH_PROVIDER } from '../tokens';
import { AuthenticationPrompt } from '../models';

const DUMMY_TARGET_URL = 'https://test.com';

describe('OpenidAuthenticationProvider', () => {
  let authenticationProvider: AuthenticationProvider;
  let configService: ConfigService;
  let languageService: LanguageService;
  let urlService: UrlService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [
        ConfigService,
        LanguageService,
        HttpClient,
        OcapiHelper,
        UrlService,
        {
          provide: 'Window',
          useValue: {
            Config: {
              'auth-provider': 'openid',
              'openid-auth-url': 'ocapi-base-url/openid/auth',
              'openid-client-id': 'ocapi',
            },
          },
        },
      ],
      imports: [HttpClientTestingModule],
    });
    configService = TestBed.inject(ConfigService);
    urlService = TestBed.inject(UrlService);
    languageService = TestBed.inject(LanguageService);
    authenticationProvider = TestBed.inject(AUTH_PROVIDER);
    httpMock = TestBed.inject(HttpTestingController);

    languageService.getLanguage = jest.fn().mockReturnValue(LanguageEnum.NL);
    urlService.getCurrentUrl = jest.fn().mockReturnValue('https://dummy.com/currenturl');
  });

  describe('getType', () => {
    it('should return openid', () => {
      expect(authenticationProvider.getType()).toBe('openid');
    });
  });

  describe('getAuthenticationUrl', () => {
    it('should return the authentication url if all is configured correctly', () => {
      expect(authenticationProvider.getAuthenticationUrl()).toBe('ocapi-base-url/openid/auth');
    });

    it('should return null if openid auth url missing in config', () => {
      configService.getConfig = jest.fn();

      when(configService.getConfig)
        .calledWith('openid-auth-url')
        .mockReturnValue(undefined as unknown as string);
      expect(authenticationProvider.getAuthenticationUrl()).toBe(null);
    });

    it('should log an error if openid-client-id id missing in config', () => {
      configService.getConfig = jest.fn();
      const consoleErrorSpy = jest.spyOn(console, 'error');

      when(configService.getConfig)
        .calledWith('openid-client-id')
        .mockReturnValue(undefined as unknown as string);
      authenticationProvider.getAuthenticationUrl();
      expect(consoleErrorSpy).toHaveBeenCalled();
    });

    it('should return null if openid-client-id missing in config', () => {
      configService.getConfig = jest.fn();

      when(configService.getConfig)
        .calledWith('ocapi-url')
        .mockReturnValue(undefined as unknown as string);
      expect(authenticationProvider.getAuthenticationUrl()).toBe(null);
    });
  });

  describe('getParameters', () => {
    it('should add all necessary parameters', () => {
      const httpParams = authenticationProvider.getParameters({
        prompt: AuthenticationPrompt.NONE,
        state: undefined,
        nonce: undefined,
        styleHint: 'sales',
        referrerUrl: DUMMY_TARGET_URL,
      });

      expect(httpParams.toString()).toBe(
        'lang=nl&style_hint=sales&prompt=none&client_id=ocapi&response_type=code&claims=%7B%22id_token%22:%7B%22http://telenet.be/claims/roles%22:null,%22http://telenet.be/claims/licenses%22:null%7D%7D&referrer_url=https://test.com'
      );
    });

    it('should leave out referrer url if none provided', () => {
      const httpParams = authenticationProvider.getParameters({
        prompt: AuthenticationPrompt.NONE,
        state: undefined,
        nonce: undefined,
        styleHint: 'sales',
      });

      expect(httpParams.toString()).toBe(
        'lang=nl&style_hint=sales&prompt=none&client_id=ocapi&response_type=code&claims=%7B%22id_token%22:%7B%22http://telenet.be/claims/roles%22:null,%22http://telenet.be/claims/licenses%22:null%7D%7D'
      );
    });

    it('should put care as fallback stylehint if none provided', () => {
      const httpParams = authenticationProvider.getParameters({
        prompt: AuthenticationPrompt.NONE,
        state: undefined,
        nonce: undefined,
        referrerUrl: DUMMY_TARGET_URL,
      });
      expect(httpParams.toString()).toBe(
        'lang=nl&style_hint=care&prompt=none&client_id=ocapi&response_type=code&claims=%7B%22id_token%22:%7B%22http://telenet.be/claims/roles%22:null,%22http://telenet.be/claims/licenses%22:null%7D%7D&referrer_url=https://test.com'
      );
    });

    it('should add state and nonce if provided', () => {
      const httpParams = authenticationProvider.getParameters({
        prompt: AuthenticationPrompt.NONE,
        state: 'state',
        nonce: 'nonce',
        referrerUrl: DUMMY_TARGET_URL,
      });
      expect(httpParams.toString()).toBe(
        'lang=nl&style_hint=care&prompt=none&client_id=ocapi&response_type=code&claims=%7B%22id_token%22:%7B%22http://telenet.be/claims/roles%22:null,%22http://telenet.be/claims/licenses%22:null%7D%7D&state=state&nonce=nonce&referrer_url=https://test.com'
      );
    });

    it('should add redirect_uri when oauth callback url provided in config', () => {
      configService.addConfig({
        [ConfigConstants.OAUTH_CALLBACK_URL]: 'callbackurl',
      });
      const httpParams = authenticationProvider.getParameters({
        prompt: AuthenticationPrompt.NONE,
        state: 'state',
        nonce: 'nonce',
        referrerUrl: DUMMY_TARGET_URL,
      });
      expect(httpParams.toString()).toBe(
        'lang=nl&style_hint=care&prompt=none&client_id=ocapi&response_type=code&claims=%7B%22id_token%22:%7B%22http://telenet.be/claims/roles%22:null,%22http://telenet.be/claims/licenses%22:null%7D%7D&state=state&nonce=nonce&referrer_url=https://test.com&redirect_uri=callbackurl'
      );
    });
  });

  describe('sendAuthCall', () => {
    it('should send a GET request', (done) => {
      authenticationProvider.getAuthenticationUrl = jest.fn().mockReturnValue('dummy.com/endpoint');

      authenticationProvider.sendAuthCall(new HttpParams()).subscribe(() => {
        done();
      });

      // Expect a JSONP request to have been made
      const req = httpMock.expectOne((request) => request.method === 'GET');
      expect(req.request.url).toBe('dummy.com/endpoint?');

      req.flush({
        data: 'callbackurl',
      });
    });

    it('should throw if authentication url is not existing', (done) => {
      authenticationProvider.getAuthenticationUrl = jest.fn().mockReturnValue(undefined);

      authenticationProvider.sendAuthCall(new HttpParams()).subscribe({
        next: (_) => {
          fail('observable should not resolve as authentication url is not defined');
        },
        error: (_) => {
          done();
        },
      });
      httpMock.expectNone((request) => request.method === 'GET');
    });
  });
});
