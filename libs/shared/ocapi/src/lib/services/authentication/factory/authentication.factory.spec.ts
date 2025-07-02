import { TestBed } from '@angular/core/testing';
import { ConfigConstants, ConfigService } from '@telenet/ng-lib-config';
import { LanguageEnum, LanguageService, UrlService, windowFactory } from '@telenet/ng-lib-page';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserDetailsService } from '../../user-details.service';
import { AuthenticationState } from '../state/authentication.state';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { JWTAuthenticationService, TransparentAuthenticationService } from '../services';
import { authenticationProviderFactory, authenticationServiceFactory } from './authentication.factory';
import { when } from 'jest-when';
import { OcapiHelper } from '../../../utils';
import { AuthenticationPrompt, AuthenticationService } from '../models';
import { AUTH_PROVIDER, AUTH_SERVICE } from '../tokens';

describe('authenticationServiceFactory', () => {
  let authenticationService: AuthenticationService;
  let urlService: UrlService;
  let configService: ConfigService;
  let languageService: LanguageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule],
      providers: [
        { provide: 'Window', useValue: windowFactory() },
        ConfigService,
        UrlService,
        LanguageService,
        HttpClient,
        OcapiHelper,
        UserDetailsService,
        AuthenticationState,
        CookieService,
        {
          provide: AUTH_PROVIDER,
          useFactory: authenticationProviderFactory,
          deps: [UrlService, ConfigService],
        },
        {
          provide: AUTH_SERVICE,
          useFactory: authenticationServiceFactory,
          deps: [UrlService],
        },
      ],
    }).compileComponents();
    urlService = TestBed.inject(UrlService);
    configService = TestBed.inject(ConfigService);
    languageService = TestBed.inject(LanguageService);

    jest.spyOn(languageService, 'getLanguage').mockReturnValue(LanguageEnum.NL);
  });

  it('should return JWTAuthenticationService if jwt parameter is present', () => {
    jest.spyOn(urlService, 'getHashParameter').mockReturnValue('jwt');
    authenticationService = TestBed.inject(AUTH_SERVICE);

    expect(authenticationService instanceof JWTAuthenticationService).toBeTruthy();
  });

  it('should return TransparentAuthenticationService if jwt parameter is not present', () => {
    authenticationService = TestBed.inject(AUTH_SERVICE);

    expect(authenticationService instanceof TransparentAuthenticationService).toBeTruthy();
  });

  it('should use OpenidAuthenticationProvider by default', () => {
    when(jest.spyOn(configService, 'getConfig')).calledWith(ConfigConstants.AUTH_PROVIDER).mockReturnValue('not-ocapi');

    when(jest.spyOn(configService, 'getConfig'))
      .calledWith(ConfigConstants.OPENID_AUTH_URL)
      .mockReturnValue('openidAuthUrl');

    authenticationService = TestBed.inject(AUTH_SERVICE);

    expect(authenticationService.getAuthenticationUrl({ prompt: AuthenticationPrompt.NONE })).toBe(
      'openidAuthUrl?lang=nl&style_hint=care&prompt=none&client_id=&response_type=code&claims=%7B%22id_token%22:%7B%22http://telenet.be/claims/roles%22:null,%22http://telenet.be/claims/licenses%22:null%7D%7D'
    );
  });

  it('should use OcapiAuthenticationProvider when ocapi auth provider configured', () => {
    when(jest.spyOn(configService, 'getConfig')).calledWith(ConfigConstants.AUTH_PROVIDER).mockReturnValue('ocapi');
    when(jest.spyOn(configService, 'getConfig')).calledWith(ConfigConstants.OCAPI_URl).mockReturnValue('ocapiUrl');
    when(jest.spyOn(configService, 'getConfig'))
      .calledWith(ConfigConstants.OCAPI_CLIENT_ID)
      .mockReturnValue('telenet_be');

    authenticationService = TestBed.inject(AUTH_SERVICE);

    expect(authenticationService.getAuthenticationUrl({ prompt: AuthenticationPrompt.NONE })).toBe(
      'ocapiUrl/login/authorization/telenet_be?lang=nl&style_hint=care&prompt=none&targetUrl=http://testurl.com'
    );
  });

  it('should use OcapiAuthenticationProvider when oktaLoginFlow parameter is set', () => {
    when(jest.spyOn(urlService, 'getRequestParamValue')).calledWith('loginFlow', '').mockReturnValue('oktaLogin');
    when(jest.spyOn(configService, 'getConfig')).calledWith(ConfigConstants.AUTH_PROVIDER).mockReturnValue('not-ocapi');
    when(jest.spyOn(configService, 'getConfig')).calledWith(ConfigConstants.OCAPI_URl).mockReturnValue('ocapiUrl');
    when(jest.spyOn(configService, 'getConfig'))
      .calledWith(ConfigConstants.OCAPI_CLIENT_ID)
      .mockReturnValue('telenet_be');

    authenticationService = TestBed.inject(AUTH_SERVICE);

    expect(authenticationService.getAuthenticationUrl({ prompt: AuthenticationPrompt.LOGIN })).toBe(
      'ocapiUrl/login/authorization/telenet_be?lang=nl&style_hint=care&prompt=login&targetUrl=http://testurl.com'
    );
  });
});
