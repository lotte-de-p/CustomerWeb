import { LanguageEnum, LanguageService, UrlService } from '@telenet/ng-lib-page';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LoginService } from './login.service';
import { OcapiService } from './ocapi.service';
import { ConfigConstants, ConfigService } from '@telenet/ng-lib-config';
import { instance, mock } from 'ts-mockito';
import { HttpParams } from '@angular/common/http';
import { of } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { LoginDetailsMapper, LoginCustomerNameMapper, LogoutMapper } from '../mappers';
import { LoginDetails } from '../models';
import { when } from 'jest-when';
import { UserDetailsService } from './user-details.service';
import { AUTH_PROVIDER, AUTH_SERVICE, AuthenticationService } from './authentication';
import { AuthenticationProvider } from './authentication/providers';

describe('LoginService', () => {
  let loginService: LoginService;
  let userDetailsService: UserDetailsService;
  let ocapiService: OcapiService;
  let loginDetailsMapper: LoginDetailsMapper;
  let configService: ConfigService;
  let urlService: UrlService;
  let loginParams: HttpParams;
  let languageService: LanguageService;
  let cookieService: CookieService;
  let authenticationService: AuthenticationService;
  let authenticationProvider: AuthenticationProvider;
  let httpTestingController: HttpTestingController;

  const USER_DETAILS_ENDPOINT = '/oauth/userdetails';
  const OCAPI_BASE_URL = 'https://api.int.telenet.be/ocapi';

  const messageGroup = 'create-profile';
  const refererUrl = 'http://refererUrl';
  const defaultWindow = {
    Config: {
      'ocapi-url': OCAPI_BASE_URL,
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
      'ocapi-client-id': 'ocapi',
      'openid-client-id': 'telenet_be',
      'auth-provider': 'openid',
    },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [],
      providers: [
        CookieService,
        OcapiService,
        { provide: LoginDetailsMapper, useFactory: () => instance(loginDetailsMapper) },
        {
          provide: 'Window',
          useValue: defaultWindow,
        },
      ],
    }).compileComponents();

    ocapiService = TestBed.inject(OcapiService);
    loginDetailsMapper = mock(LoginDetailsMapper);
    urlService = TestBed.inject(UrlService);
    configService = TestBed.inject(ConfigService);
    languageService = TestBed.inject(LanguageService);
    cookieService = TestBed.inject(CookieService);
    authenticationService = TestBed.inject(AUTH_SERVICE);
    authenticationProvider = TestBed.inject(AUTH_PROVIDER);
    httpTestingController = TestBed.inject(HttpTestingController);
    userDetailsService = TestBed.inject(UserDetailsService);
    loginService = TestBed.inject(LoginService);

    jest.spyOn(urlService, 'openWindow');
    loginParams = new HttpParams().set('state', 'state').set('nonce', 'nonce');
    jest.spyOn(languageService, 'getLanguage').mockReturnValue(LanguageEnum.NL);

    userDetailsService.reset();
  });

  describe('getLoginDetails', () => {
    it('should call the ocapi service for the login details and return the mapped response', () => {
      const loginDetails = { state: 'test' } as LoginDetails;
      jest.spyOn(ocapiService, 'doGet').mockReturnValue(of(loginDetails));

      userDetailsService.getUserDetails().subscribe((actual) => {
        expect(actual).toEqual(loginDetails);
      });

      const req = httpTestingController.expectOne(OCAPI_BASE_URL + USER_DETAILS_ENDPOINT);
      expect(req.request.method).toEqual('GET');
      req.flush(loginDetails);

      httpTestingController.verify();
    });

    it('should return the cached response given its called twice for the login details and return the mapped response', async () => {
      const loginDetails = { state: 'test' } as LoginDetails;
      jest.spyOn(ocapiService, 'doGet').mockReturnValue(of(loginDetails));

      userDetailsService.getUserDetails().subscribe((actual) => {
        expect(actual).toEqual(loginDetails);
      });

      userDetailsService.getUserDetails().subscribe((actual) => {
        expect(actual).toEqual(loginDetails);
      });

      const req = httpTestingController.expectOne(OCAPI_BASE_URL + USER_DETAILS_ENDPOINT);
      expect(req.request.method).toEqual('GET');
      req.flush(loginDetails);

      httpTestingController.verify();
    });

    it('should return the same observable when being called twice with the same settings', () => {
      const loginDetails = { state: 'test' } as LoginDetails;
      jest.spyOn(ocapiService, 'doGet').mockReturnValue(of(loginDetails));

      const obs1$ = userDetailsService.getUserDetails({ withCredentials: false });
      const obs2$ = userDetailsService.getUserDetails({ withCredentials: false });

      obs1$.subscribe();
      obs2$.subscribe();

      const req = httpTestingController.expectOne(OCAPI_BASE_URL + USER_DETAILS_ENDPOINT);
      expect(req.request.method).toEqual('GET');
      req.flush(loginDetails);

      httpTestingController.verify();
    });

    it('should return call the ocapi service twice when a different config is passed to getLoginDetails', () => {
      const loginDetails = { state: 'test' } as LoginDetails;
      jest.spyOn(ocapiService, 'doGet').mockReturnValue(of(loginDetails));
      jest
        .spyOn(urlService, 'getRequestParamValue')
        .mockImplementationOnce(() => '')
        .mockImplementationOnce(() => 'fakejwt');

      const obs1$ = userDetailsService.getUserDetails({ withCredentials: false });
      const obs2$ = userDetailsService.getUserDetails({ withCredentials: false });

      obs1$.subscribe();
      obs2$.subscribe();

      let req = httpTestingController.expectOne(OCAPI_BASE_URL + USER_DETAILS_ENDPOINT);
      expect(req.request.method).toEqual('GET');
      req.flush(loginDetails);

      req = httpTestingController.expectOne(OCAPI_BASE_URL + USER_DETAILS_ENDPOINT + '?jwt=fakejwt');
      expect(req.request.method).toEqual('GET');
      req.flush(loginDetails);

      httpTestingController.verify();

      httpTestingController.verify();
    });

    it('should call the ocapi service for the login details with credentials as false', () => {
      const loginDetails = { state: 'test' } as LoginDetails;
      jest.spyOn(ocapiService, 'doGet').mockReturnValue(of(loginDetails));

      userDetailsService.getUserDetails({ withCredentials: false }).subscribe((actual) => {
        expect(actual).toEqual(loginDetails);
      });

      const req = httpTestingController.expectOne(OCAPI_BASE_URL + USER_DETAILS_ENDPOINT);
      expect(req.request.method).toEqual('GET');
      req.flush(loginDetails);

      httpTestingController.verify();
    });

    it('should call the ocapi service for the login details with request param based jwt token and return the mapped response', () => {
      const loginDetails = { state: 'test' } as LoginDetails;
      const jwttoken = 'jwttoken';

      jest.spyOn(ocapiService, 'doGet').mockReturnValue(of(loginDetails));
      jest.spyOn(urlService, 'getRequestParamValue').mockReturnValue(jwttoken);

      userDetailsService.getUserDetails({ withCredentials: false }).subscribe((actual) => {
        expect(actual).toEqual(loginDetails);
      });

      const req = httpTestingController.expectOne(OCAPI_BASE_URL + USER_DETAILS_ENDPOINT + '?jwt=' + jwttoken);
      expect(req.request.method).toEqual('GET');
      req.flush(loginDetails);

      httpTestingController.verify();
    });

    it('should call the ocapi service for the login details with request hash based jwt token and return the mapped response', () => {
      const loginDetails = { state: 'test' } as LoginDetails;
      const jwttoken = 'jwttoken';

      jest.spyOn(ocapiService, 'doGet').mockReturnValue(of(loginDetails));
      jest.spyOn(urlService, 'getRequestParamValue').mockReturnValue('');
      jest.spyOn(urlService, 'getHashParameter').mockReturnValue(jwttoken);

      userDetailsService.getUserDetails({ withCredentials: false }).subscribe((actual) => {
        expect(actual).toEqual(loginDetails);
      });

      const req = httpTestingController.expectOne(OCAPI_BASE_URL + USER_DETAILS_ENDPOINT + '?jwt=' + jwttoken);
      expect(req.request.method).toEqual('GET');
      req.flush(loginDetails);

      httpTestingController.verify();
    });

    it('should call the ocapi service for the login details with jwt token with is rolerequired flag as true', () => {
      const loginDetails = { state: 'test' } as LoginDetails;
      const jwttoken = 'jwttoken';
      jest.spyOn(ocapiService, 'doGet').mockReturnValue(of(loginDetails));
      jest.spyOn(urlService, 'getRequestParamValue').mockReturnValue(jwttoken);

      userDetailsService.getUserDetails().subscribe((actual) => {
        expect(actual).toEqual(loginDetails);
      });

      const req = httpTestingController.expectOne(OCAPI_BASE_URL + USER_DETAILS_ENDPOINT + '?jwt=' + jwttoken);
      expect(req.request.method).toEqual('GET');
      req.flush(loginDetails);

      httpTestingController.verify();
    });

    it('should call the ocapi service for the login details with jwt token and should not return the cached response in case JWT token is passed second time', async () => {
      const loginDetails = { state: 'test' } as LoginDetails;
      jest.spyOn(ocapiService, 'doGet').mockReturnValue(of(loginDetails));
      jest
        .spyOn(urlService, 'getRequestParamValue')
        .mockImplementationOnce(() => '')
        .mockImplementationOnce(() => 'jwttoken');

      userDetailsService.getUserDetails().subscribe((actual) => {
        expect(actual).toEqual(loginDetails);
      });
      userDetailsService.getUserDetails().subscribe((actual) => {
        expect(actual).toEqual(loginDetails);
      });

      let req = httpTestingController.expectOne(OCAPI_BASE_URL + USER_DETAILS_ENDPOINT);
      expect(req.request.method).toEqual('GET');
      req.flush(loginDetails);

      req = httpTestingController.expectOne(OCAPI_BASE_URL + USER_DETAILS_ENDPOINT + '?jwt=jwttoken');
      expect(req.request.method).toEqual('GET');
      req.flush(loginDetails);

      httpTestingController.verify();
    });

    it('should call the ocapi service for the login details with referrer url and should not return the cached response in case referrer url is passed second time', async () => {
      const loginDetails = { state: 'test' } as LoginDetails;
      jest.spyOn(ocapiService, 'doGet').mockReturnValue(of(loginDetails));
      jest
        .spyOn(urlService, 'getRequestParamValue')
        .mockImplementationOnce(() => '')
        .mockImplementationOnce(() => 'jwttoken');

      userDetailsService.getUserDetails().subscribe((actual) => {
        expect(actual).toEqual(loginDetails);
      });

      let req = httpTestingController.expectOne(OCAPI_BASE_URL + USER_DETAILS_ENDPOINT);
      expect(req.request.method).toEqual('GET');
      req.flush(loginDetails);

      userDetailsService.getUserDetails({ referrerUrl: '/en/test-page.html' }).subscribe((actual) => {
        expect(actual).toEqual(loginDetails);
      });

      req = httpTestingController.expectOne(OCAPI_BASE_URL + USER_DETAILS_ENDPOINT + '?jwt=jwttoken');
      expect(req.request.method).toEqual('GET');
      req.flush(loginDetails);

      httpTestingController.verify();
    });
  });

  describe('login', () => {
    it('should open the window with the correct url', () => {
      urlService.openWindow = jest.fn();
      jest
        .spyOn(userDetailsService, 'getUserDetails')
        .mockReturnValue(of({ state: 'state', nonce: 'nonce' } as LoginDetails));
      jest.spyOn(authenticationProvider, 'getParameters').mockReturnValue(loginParams);

      loginService.login();

      expect(urlService.openWindow).toHaveBeenCalledWith(
        'https://login.int.telenet.be/openid/oauth/authorize?state=state&nonce=nonce'
      );
    });

    it('should call authentication service with prompt none', () => {
      urlService.openWindow = jest.fn();
      configService.getConfig = jest.fn();
      jest
        .spyOn(userDetailsService, 'getUserDetails')
        .mockReturnValue(of({ state: 'state', nonce: 'nonce' } as LoginDetails));
      when(configService.getConfig).calledWith(ConfigConstants.AUTH_PROVIDER).mockReturnValue('ocapi');

      jest.spyOn(authenticationService, 'authenticate').mockImplementation(() => {
        // do nothing
      });

      loginService.login();

      expect(authenticationService.authenticate).toHaveBeenCalledWith({
        nonce: 'nonce',
        referrerUrl: undefined,
        state: 'state',
        styleHint: undefined,
      });
    });

    it('should open the window with the correct url with refererUrl', () => {
      configService.getConfig = jest.fn();
      urlService.openWindow = jest.fn();
      jest
        .spyOn(userDetailsService, 'getUserDetails')
        .mockReturnValue(of({ state: 'state', nonce: 'nonce' } as LoginDetails));
      when(configService.getConfig).calledWith(ConfigConstants.AUTH_PROVIDER).mockReturnValue('openid');
      when(configService.getConfig).calledWith(ConfigConstants.OPENID_AUTH_URL).mockReturnValue('ocapi');
      when(configService.getConfig).calledWith(ConfigConstants.OPENID_CLIENT_ID).mockReturnValue('ocapi');
      when(configService.getConfig)
        .calledWith(ConfigConstants.OAUTH_CALLBACK_URL)
        .mockReturnValue(undefined as unknown as string);

      loginService.login(refererUrl);
      expect(urlService.openWindow).toHaveBeenCalledWith(
        'ocapi?lang=nl&style_hint=care&client_id=ocapi&response_type=code&claims=%7B%22id_token%22:%7B%22http://telenet.be/claims/roles%22:null,%22http://telenet.be/claims/licenses%22:null%7D%7D&state=state&nonce=nonce&referrer_url=http://refererUrl'
      );
    });

    it('should open the window with the correct url with styleHint', () => {
      configService.getConfig = jest.fn();
      urlService.openWindow = jest.fn();
      jest
        .spyOn(userDetailsService, 'getUserDetails')
        .mockReturnValue(of({ state: 'state', nonce: 'nonce' } as LoginDetails));
      when(configService.getConfig).calledWith(ConfigConstants.AUTH_PROVIDER).mockReturnValue('openid');
      when(configService.getConfig).calledWith(ConfigConstants.OPENID_AUTH_URL).mockReturnValue('ocapi');
      when(configService.getConfig).calledWith(ConfigConstants.OPENID_CLIENT_ID).mockReturnValue('ocapi');
      when(configService.getConfig)
        .calledWith(ConfigConstants.OAUTH_CALLBACK_URL)
        .mockReturnValue(undefined as unknown as string);

      loginService.login(refererUrl, 'sales');
      expect(urlService.openWindow).toHaveBeenCalledWith(
        'ocapi?lang=nl&style_hint=sales&client_id=ocapi&response_type=code&claims=%7B%22id_token%22:%7B%22http://telenet.be/claims/roles%22:null,%22http://telenet.be/claims/licenses%22:null%7D%7D&state=state&nonce=nonce&referrer_url=http://refererUrl'
      );
    });
  });

  describe('loginWithStepUpAuthentication', () => {
    it('should open the window with the correct url', () => {
      urlService.openWindow = jest.fn();
      jest
        .spyOn(userDetailsService, 'getUserDetails')
        .mockReturnValue(of({ state: 'state', nonce: 'nonce' } as LoginDetails));
      loginParams = new HttpParams().set('state', 'state').set('nonce', 'nonce').set('acr_values', '2fa');
      jest.spyOn(authenticationProvider, 'getParameters').mockReturnValue(loginParams);

      loginService.loginWithStepUpAuthentication(refererUrl, '2fa');

      expect(urlService.openWindow).toHaveBeenCalledWith(
        'https://login.int.telenet.be/openid/oauth/authorize?state=state&nonce=nonce&acr_values=2fa'
      );
    });

    it('should call authentication service with prompt none', () => {
      urlService.openWindow = jest.fn();
      configService.getConfig = jest.fn();
      jest
        .spyOn(userDetailsService, 'getUserDetails')
        .mockReturnValue(of({ state: 'state', nonce: 'nonce' } as LoginDetails));
      when(configService.getConfig).calledWith(ConfigConstants.AUTH_PROVIDER).mockReturnValue('ocapi');

      jest.spyOn(authenticationService, 'authenticate').mockImplementation(() => {
        // do nothing
      });

      loginService.loginWithStepUpAuthentication();

      expect(authenticationService.authenticate).toHaveBeenCalledWith({
        nonce: 'nonce',
        referrerUrl: undefined,
        state: 'state',
        styleHint: undefined,
      });
    });

    it('should open the window with the correct url with refererUrl', () => {
      configService.getConfig = jest.fn();
      urlService.openWindow = jest.fn();
      jest
        .spyOn(userDetailsService, 'getUserDetails')
        .mockReturnValue(of({ state: 'state', nonce: 'nonce' } as LoginDetails));
      when(configService.getConfig).calledWith(ConfigConstants.AUTH_PROVIDER).mockReturnValue('openid');
      when(configService.getConfig).calledWith(ConfigConstants.OPENID_AUTH_URL).mockReturnValue('ocapi');
      when(configService.getConfig).calledWith(ConfigConstants.OPENID_CLIENT_ID).mockReturnValue('ocapi');
      when(configService.getConfig)
        .calledWith(ConfigConstants.OAUTH_CALLBACK_URL)
        .mockReturnValue(undefined as unknown as string);

      loginService.loginWithStepUpAuthentication(refererUrl);
      expect(urlService.openWindow).toHaveBeenCalledWith(
        'ocapi?lang=nl&style_hint=care&client_id=ocapi&response_type=code&claims=%7B%22id_token%22:%7B%22http://telenet.be/claims/roles%22:null,%22http://telenet.be/claims/licenses%22:null%7D%7D&state=state&nonce=nonce&referrer_url=http://refererUrl'
      );
    });

    it('should open the window with the correct url with acr_values', () => {
      configService.getConfig = jest.fn();
      urlService.openWindow = jest.fn();
      jest
        .spyOn(userDetailsService, 'getUserDetails')
        .mockReturnValue(of({ state: 'state', nonce: 'nonce' } as LoginDetails));
      when(configService.getConfig).calledWith(ConfigConstants.AUTH_PROVIDER).mockReturnValue('openid');
      when(configService.getConfig).calledWith(ConfigConstants.OPENID_AUTH_URL).mockReturnValue('ocapi');
      when(configService.getConfig).calledWith(ConfigConstants.OPENID_CLIENT_ID).mockReturnValue('ocapi');
      when(configService.getConfig)
        .calledWith(ConfigConstants.OAUTH_CALLBACK_URL)
        .mockReturnValue(undefined as unknown as string);

      loginService.loginWithStepUpAuthentication(refererUrl, '2fa');
      expect(urlService.openWindow).toHaveBeenCalledWith(
        'ocapi?lang=nl&style_hint=care&acr_values=2fa&client_id=ocapi&response_type=code&claims=%7B%22id_token%22:%7B%22http://telenet.be/claims/roles%22:null,%22http://telenet.be/claims/licenses%22:null%7D%7D&state=state&nonce=nonce&referrer_url=http://refererUrl'
      );
    });
  });

  describe('loginWithPrompt', () => {
    it('should open the window with the correct url and set prompt to be login', () => {
      configService.getConfig = jest.fn();
      urlService.openWindow = jest.fn();
      jest
        .spyOn(userDetailsService, 'getUserDetails')
        .mockReturnValue(of({ state: 'state', nonce: 'nonce' } as LoginDetails));
      when(configService.getConfig).calledWith(ConfigConstants.AUTH_PROVIDER).mockReturnValue('openid');
      when(configService.getConfig).calledWith(ConfigConstants.OPENID_AUTH_URL).mockReturnValue('ocapi');
      when(configService.getConfig).calledWith(ConfigConstants.OPENID_CLIENT_ID).mockReturnValue('ocapi');

      loginService.loginWithPrompt();

      expect(urlService.openWindow).toHaveBeenCalledWith(
        'ocapi?lang=nl&style_hint=care&prompt=login&client_id=ocapi&response_type=code&claims=%7B%22id_token%22:%7B%22http://telenet.be/claims/roles%22:null,%22http://telenet.be/claims/licenses%22:null%7D%7D&state=state&nonce=nonce'
      );
    });

    it('should open the window with the correct url with styleHint', () => {
      configService.getConfig = jest.fn();
      urlService.openWindow = jest.fn();
      jest
        .spyOn(userDetailsService, 'getUserDetails')
        .mockReturnValue(of({ state: 'state', nonce: 'nonce' } as LoginDetails));
      when(configService.getConfig).calledWith(ConfigConstants.AUTH_PROVIDER).mockReturnValue('openid');
      when(configService.getConfig).calledWith(ConfigConstants.OPENID_AUTH_URL).mockReturnValue('ocapi');
      when(configService.getConfig).calledWith(ConfigConstants.OPENID_CLIENT_ID).mockReturnValue('ocapi');

      loginService.loginWithPrompt(undefined, 'sales');

      expect(urlService.openWindow).toHaveBeenCalledWith(
        'ocapi?lang=nl&style_hint=sales&prompt=login&client_id=ocapi&response_type=code&claims=%7B%22id_token%22:%7B%22http://telenet.be/claims/roles%22:null,%22http://telenet.be/claims/licenses%22:null%7D%7D&state=state&nonce=nonce'
      );
    });
  });

  describe('loginWithCustomerNumber', () => {
    it('should call the ocapi service with correct parameter', (done) => {
      jest.spyOn(ocapiService, 'doPost').mockReturnValue(of({ status: 200 }));

      loginService
        .loginWithCustomerNumber(messageGroup, '', 'accesscode', '082409', '0468149549')
        .subscribe((response) => {
          expect(response).toBeDefined();
          done();
        });
      expect(ocapiService.doPost).toHaveBeenCalledWith(
        expect.objectContaining({
          messageGroupName: messageGroup,
          endpoint: '/oauth/login?accesscode=082409&mobilenumber=0468149549',
          mapper: expect.any(LoginCustomerNameMapper),
          data: {},
        })
      );
    });

    it('should set login status as unknown', (done) => {
      jest.spyOn(ocapiService, 'doPost').mockReturnValue(of({ status: 200 }));

      const authenticationStateSpy = jest.spyOn(authenticationService, 'setAuthenticatedStatus');

      loginService
        .loginWithCustomerNumber(messageGroup, '', 'accesscode', '082409', '0468149549')
        .subscribe((response) => {
          expect(response).toBeDefined();
          expect(authenticationStateSpy).toHaveBeenCalledWith(true);
          done();
        });
    });

    it('should clear the user details cache', async () => {
      jest.spyOn(ocapiService, 'doPost').mockReturnValue(of({ status: 200 }));
      jest.spyOn(ocapiService, 'doGet');

      // Resetting cache for user details so we can test in isolation
      userDetailsService.reset();

      loginService.getLoginDetails().subscribe();

      const requests = httpTestingController.match((req) => req.url.includes(USER_DETAILS_ENDPOINT));
      requests[0].flush({ state: 'test', status: 200 });

      loginService.loginWithCustomerNumber(messageGroup, '', 'accesscode', '082409', '0468149549').subscribe();

      loginService.getLoginDetails().subscribe();

      const requestsAgain = httpTestingController.match((req) => req.url.includes(USER_DETAILS_ENDPOINT));
      requestsAgain[0].flush({ state: 'test', status: 200 });

      httpTestingController.verify();
    });

    it('should NOT set login status in session cookie to logged-in if already set', (done) => {
      jest.spyOn(ocapiService, 'doPost').mockReturnValue(of({ status: 200 }));
      jest.spyOn(cookieService, 'check').mockReturnValue(true);
      const cookieSetSpy = jest.spyOn(cookieService, 'set');

      loginService.loginWithCustomerNumber(messageGroup, '', 'accesscode', '082409', '0468149549').subscribe(() => {
        expect(cookieSetSpy).not.toHaveBeenCalled();
        done();
      });
    });

    it('should set login status in session cookie to logged-in if not already set', (done) => {
      jest.spyOn(ocapiService, 'doPost').mockReturnValue(of({ status: 200 }));
      jest.spyOn(cookieService, 'check').mockReturnValue(false);
      const cookieSetSpy = jest.spyOn(cookieService, 'set');

      loginService.loginWithCustomerNumber(messageGroup, '', 'accesscode', '082409', '0468149549').subscribe(() => {
        expect(cookieSetSpy).toHaveBeenCalledWith('loginStatus', 'LOGGED_IN', {
          path: '/',
          sameSite: 'Lax',
          domain: '.localhost',
        });
        done();
      });
    });
  });

  describe('logout', () => {
    const logoutUrl = 'https://secure.uat.telenet.be/logout';
    it('should call Ocapi logout endpoint with provided URL-encoded targetUrl', (done) => {
      const ocapiResponse = { status: 200 };
      jest.spyOn(ocapiService, 'doGet').mockReturnValue(of(ocapiResponse));

      loginService
        .logout(messageGroup, 'https://www.uat.base.be/nl/create-profile?flow=completeProfile')
        .subscribe((response) => {
          expect(response).toEqual(ocapiResponse);
          done();
        });

      expect(ocapiService.doGet).toHaveBeenCalledWith(
        expect.objectContaining({
          messageGroupName: messageGroup,
          endpoint: '/logout?targetUrl=https%3A%2F%2Fwww.uat.base.be%2Fnl%2Fcreate-profile%3Fflow%3DcompleteProfile',
          mapper: expect.any(LogoutMapper),
          data: {},
        })
      );
    });

    it('should call Ocapi logout endpoint with current URL', (done) => {
      const ocapiResponse = { success: true };
      jest
        .spyOn(urlService, 'getCurrentUrl')
        .mockReturnValue('https://www.uat.base.be/nl/create-profile?flow=completeProfile');
      jest.spyOn(ocapiService, 'doGet').mockReturnValue(of(ocapiResponse));

      loginService.logout(messageGroup, '').subscribe((response) => {
        expect(response).toEqual(ocapiResponse);
        done();
      });

      expect(ocapiService.doGet).toHaveBeenCalledWith(
        expect.objectContaining({
          messageGroupName: messageGroup,
          endpoint: '/logout?targetUrl=https%3A%2F%2Fwww.uat.base.be%2Fnl%2Fcreate-profile%3Fflow%3DcompleteProfile',
          mapper: expect.any(LogoutMapper),
          data: {},
        })
      );
    });

    it('should follow the redirect URI if Ocapi returns one', (done) => {
      const ocapiResponse = { success: true, logout_redirect_uri: logoutUrl };
      jest.spyOn(ocapiService, 'doGet').mockReturnValue(of(ocapiResponse));
      urlService.redirectTo = jest.fn();

      loginService.logout(messageGroup, 'logoutPath').subscribe((response) => {
        expect(response).toEqual({});
        done();
      });

      expect(urlService.redirectTo).toHaveBeenCalledWith(logoutUrl);
    });

    it('should NOT set login status in session cookie to logged out if already set', (done) => {
      const ocapiResponse = { success: true, logout_redirect_uri: logoutUrl };
      jest.spyOn(ocapiService, 'doGet').mockReturnValue(of(ocapiResponse));
      urlService.redirectTo = jest.fn();
      jest.spyOn(cookieService, 'check').mockReturnValue(true);
      const cookieSetSpy = jest.spyOn(cookieService, 'set');

      loginService.logout(messageGroup, 'logoutPath').subscribe(() => {
        expect(cookieSetSpy).not.toHaveBeenCalled();
        done();
      });
    });

    it('should set login status in session cookie to logged out if not already set', (done) => {
      const ocapiResponse = { success: true, logout_redirect_uri: logoutUrl };
      jest.spyOn(ocapiService, 'doGet').mockReturnValue(of(ocapiResponse));
      urlService.redirectTo = jest.fn();
      const cookieSetSpy = jest.spyOn(cookieService, 'set');
      jest.spyOn(cookieService, 'check').mockReturnValue(false);

      loginService.logout(messageGroup, 'logoutPath').subscribe(() => {
        expect(cookieSetSpy).toHaveBeenCalledWith('loginStatus', 'NOT_LOGGED_IN', {
          path: '/',
          sameSite: 'Lax',
          domain: '.localhost',
        });
        done();
      });
    });
  });

  describe('getLogoutRedirectUrl', () => {
    it('should return logoutpath if availabl', () => {
      const actual = loginService.getLogoutRedirectUrl('https://www.int.telenet.be/nl/klantenservice');
      expect(actual).toBe('https://www.int.telenet.be/nl/klantenservice');
    });

    it('should return current pageUrl if logoutpath is empty', () => {
      const actual = loginService.getLogoutRedirectUrl('');
      expect(actual).toBe(urlService.getCurrentUrl());
    });

    it('should convert a relative logoutPath to an absolute URL', () => {
      const actual = loginService.getLogoutRedirectUrl('/nl/klantenservice');
      expect(actual).toBe('http://localhost/nl/klantenservice');
    });
  });

  describe('getAuthenticationStatus', () => {
    it('should return the authentication status from the AuthenticationService', () => {
      jest.spyOn(authenticationService, 'getAuthenticationStatus');

      loginService.getAuthenticationStatus();

      expect(authenticationService.getAuthenticationStatus).toHaveBeenCalled();
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
