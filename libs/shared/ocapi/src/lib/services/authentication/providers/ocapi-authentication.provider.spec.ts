import { AuthenticationProvider } from './authentication.provider';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ConfigService } from '@telenet/ng-lib-config';
import { LanguageEnum, LanguageService, UrlService } from '@telenet/ng-lib-page';
import { HttpClient, HttpParams } from '@angular/common/http';
import { OcapiHelper } from '../../../utils';
import { when } from 'jest-when';
import { AUTH_PROVIDER } from '../tokens';
import { AuthenticationPrompt } from '../models';

const TEST_REFERRER = 'https://test.com';

describe('OcapiAuthenticationProvider', () => {
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
              'auth-provider': 'ocapi',
              'ocapi-url': 'ocapi-base-url/ocapi',
              'ocapi-client-id': 'telenet_be',
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
    it('should return ocapi', () => {
      expect(authenticationProvider.getType()).toBe('ocapi');
    });
  });

  describe('getAuthenticationUrl', () => {
    it('should return the authentication url if all is configured correctly', () => {
      expect(authenticationProvider.getAuthenticationUrl()).toBe('ocapi-base-url/ocapi/login/authorization/telenet_be');
    });

    it('should return null if ocapi client id missing in config', () => {
      configService.getConfig = jest.fn();

      when(configService.getConfig)
        .calledWith('ocapi-client-id')
        .mockReturnValue(undefined as unknown as string);
      expect(authenticationProvider.getAuthenticationUrl()).toBe(null);
    });

    it('should log an error if ocapi client id missing in config', () => {
      configService.getConfig = jest.fn();
      const consoleErrorSpy = jest.spyOn(console, 'error');

      when(configService.getConfig)
        .calledWith('ocapi-client-id')
        .mockReturnValue(undefined as unknown as string);
      authenticationProvider.getAuthenticationUrl();
      expect(consoleErrorSpy).toHaveBeenCalled();
    });

    it('should return null if ocapi base url missing in config', () => {
      configService.getConfig = jest.fn();

      when(configService.getConfig)
        .calledWith('ocapi-url')
        .mockReturnValue(undefined as unknown as string);
      expect(authenticationProvider.getAuthenticationUrl()).toBe(null);
    });

    it('should log an error if ocapi base url missing in config', () => {
      configService.getConfig = jest.fn();
      const consoleErrorSpy = jest.spyOn(console, 'error');

      when(configService.getConfig)
        .calledWith('ocapi-url')
        .mockReturnValue(undefined as unknown as string);
      authenticationProvider.getAuthenticationUrl();
      expect(consoleErrorSpy).toHaveBeenCalled();
    });
  });

  describe('getParameters', () => {
    it('should add all necessary parameters', () => {
      const httpParams = authenticationProvider.getParameters({
        prompt: AuthenticationPrompt.NONE,
        state: undefined,
        nonce: undefined,
        styleHint: 'sales',
        referrerUrl: TEST_REFERRER,
      });

      expect(httpParams.toString()).toBe('lang=nl&style_hint=sales&prompt=none&targetUrl=https://test.com');
    });

    it('should put current url as target url if none provided', () => {
      const httpParams = authenticationProvider.getParameters({
        prompt: AuthenticationPrompt.NONE,
        state: undefined,
        nonce: undefined,
        styleHint: 'sales',
      });

      expect(httpParams.toString()).toBe('lang=nl&style_hint=sales&prompt=none&targetUrl=https://dummy.com/currenturl');
    });

    it('should put current url as target url if referrer is empty', () => {
      const httpParams = authenticationProvider.getParameters({
        prompt: AuthenticationPrompt.NONE,
        state: undefined,
        nonce: undefined,
        styleHint: 'sales',
        referrerUrl: '',
      });

      expect(httpParams.toString()).toBe('lang=nl&style_hint=sales&prompt=none&targetUrl=https://dummy.com/currenturl');
    });

    it('should put care as fallback stylehint if none provided', () => {
      const httpParams = authenticationProvider.getParameters({
        prompt: AuthenticationPrompt.NONE,
        state: undefined,
        nonce: undefined,
        referrerUrl: TEST_REFERRER,
      });
      expect(httpParams.toString()).toBe('lang=nl&style_hint=care&prompt=none&targetUrl=https://test.com');
    });

    it('should not add prompt http param if it is not passed in the pararmeters object', () => {
      const httpParams = authenticationProvider.getParameters({
        state: undefined,
        nonce: undefined,
        referrerUrl: TEST_REFERRER,
      });
      expect(httpParams.toString()).toBe('lang=nl&style_hint=care&targetUrl=https://test.com');
    });
  });

  describe('sendAuthCall', () => {
    it('should send a jsonp request', (done) => {
      authenticationProvider.getAuthenticationUrl = jest.fn().mockReturnValue('dummy.com/endpoint');

      authenticationProvider.sendAuthCall(new HttpParams()).subscribe(() => {
        done();
      });

      // Expect a JSONP request to have been made
      const req = httpMock.expectOne((request) => request.method === 'JSONP');
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
      httpMock.expectNone((request) => request.method === 'JSONP');
    });
  });
});
