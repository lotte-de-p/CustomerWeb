import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';
import { ConfigService } from '@telenet/ng-lib-config';
import { LanguageEnum, LanguageService, UrlService } from '@telenet/ng-lib-page';
import { HttpClient } from '@angular/common/http';
import { AuthenticationState } from '../state/authentication.state';
import { AuthenticationService } from '../models';
import { OcapiHelper } from '../../../utils';
import { AUTH_SERVICE } from '../tokens';
import { AuthenticationProvider } from '../providers';
import { TransparentAuthenticationService } from './transparent-authentication.service';
import { UserDetailsService } from '../../user-details.service';
import { LoginDetails } from '../../../models';

interface MockAuthenticationService extends AuthenticationService {
  isCurrentSessionActive: jest.Mock;
  attemptAuthenticate: jest.Mock;
  authenticationState: AuthenticationState;
  authenticationProvider: AuthenticationProvider;
  // add other methods as needed
}

describe('TransparentAuthenticationService', () => {
  let authenticationService: AuthenticationService;
  let authenticationState: AuthenticationState;
  let languageService: LanguageService;
  let urlService: UrlService;
  let userDetailsService: UserDetailsService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [
        ConfigService,
        LanguageService,
        HttpClient,
        OcapiHelper,
        UrlService,
        UserDetailsService,
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
    urlService = TestBed.inject(UrlService);
    languageService = TestBed.inject(LanguageService);
    userDetailsService = TestBed.inject(UserDetailsService);
    authenticationService = TestBed.inject(AUTH_SERVICE);
    authenticationState = TestBed.inject(AuthenticationState);
    httpMock = TestBed.inject(HttpTestingController);

    languageService.getLanguage = jest.fn().mockReturnValue(LanguageEnum.NL);
    urlService.getCurrentUrl = jest.fn().mockReturnValue('https://dummy.com/currenturl');
  });
  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(authenticationService).toBeTruthy();
    expect(authenticationService instanceof TransparentAuthenticationService).toBeTruthy();
  });

  describe('getAuthenticationStatus', () => {
    it('should return true if the current session is active', (done) => {
      const serviceAny = authenticationService as MockAuthenticationService;
      jest.spyOn(userDetailsService, 'getUserDetails').mockReturnValue(of(new LoginDetails(200)));
      jest.spyOn(serviceAny.authenticationState, 'setAuthenticated');

      serviceAny.getAuthenticationStatus().subscribe((isAuthenticated: boolean) => {
        expect(isAuthenticated).toBeTruthy();
        expect(authenticationState.setAuthenticated).toHaveBeenCalledWith(true);
        done();
      });
    });

    it('should return false if the current session is not active and authentication fails', (done) => {
      const serviceAny = authenticationService as MockAuthenticationService;
      jest.spyOn(userDetailsService, 'getUserDetails').mockReturnValue(of(new LoginDetails(401)));
      jest.spyOn(serviceAny, 'attemptAuthenticate').mockReturnValue(throwError(() => new Error('Error')));
      jest.spyOn(serviceAny.authenticationState, 'setAuthenticated');

      serviceAny.getAuthenticationStatus().subscribe((isAuthenticated: boolean) => {
        expect(isAuthenticated).toBeFalsy();
        expect(authenticationState.setAuthenticated).toHaveBeenCalledWith(false);
        done();
      });
    });

    it('should attempt to authenticate if the current session is not active', (done) => {
      const serviceAny = authenticationService as MockAuthenticationService;
      const loginDetails = new LoginDetails(401);
      loginDetails.state = 'state';
      loginDetails.nonce = 'nonce';

      jest.spyOn(userDetailsService, 'getUserDetails').mockReturnValue(of(loginDetails));
      const attemptAuthenticateSpy = jest
        .spyOn(serviceAny, 'attemptAuthenticate')
        .mockReturnValue(throwError(() => new Error('Random error')));

      serviceAny.getAuthenticationStatus().subscribe(() => {
        expect(attemptAuthenticateSpy).toHaveBeenCalledWith('state', 'nonce');
        done();
      });
    });

    it('should silently authenticate if session is inactive, but authentication succeeds ', (done) => {
      const serviceAny = authenticationService as MockAuthenticationService;
      const authCallResponse = { data: 'callbackurl' };
      const loginDetailsFail = new LoginDetails(401);
      loginDetailsFail.state = 'state';
      loginDetailsFail.nonce = 'nonce';
      const loginDetailsSuccess = new LoginDetails(200);

      jest
        .spyOn(userDetailsService, 'getUserDetails')
        .mockImplementationOnce(() => of(loginDetailsFail))
        .mockImplementationOnce(() => of(loginDetailsSuccess));
      jest.spyOn(serviceAny.authenticationProvider, 'sendAuthCall').mockReturnValue(of(authCallResponse));
      jest.spyOn(serviceAny.authenticationState, 'setAuthenticated');

      serviceAny.getAuthenticationStatus().subscribe((isAuthenticated: boolean) => {
        expect(isAuthenticated).toBeTruthy();
        expect(serviceAny.authenticationProvider.sendAuthCall).toHaveBeenCalled();
        expect(authenticationState.setAuthenticated).toHaveBeenCalledWith(true);
        done();
      });

      const req = httpMock.expectOne(authCallResponse.data);
      expect(req.request.method).toEqual('GET');
      req.flush('');

      expect(userDetailsService.getUserDetails).toHaveBeenCalledTimes(2);
    });

    it('should set authentication status to false when auth url is not configured', (done) => {
      const serviceAny = authenticationService as MockAuthenticationService;
      const loginDetails = new LoginDetails(401);
      loginDetails.state = 'state';
      loginDetails.nonce = 'nonce';

      jest.spyOn(userDetailsService, 'getUserDetails').mockReturnValue(of(loginDetails));
      jest.spyOn(serviceAny.authenticationProvider, 'getAuthenticationUrl').mockReturnValue(null);
      jest.spyOn(serviceAny.authenticationProvider, 'sendAuthCall');
      jest.spyOn(serviceAny.authenticationState, 'setAuthenticated');

      serviceAny.getAuthenticationStatus().subscribe((isAuthenticated: boolean) => {
        expect(isAuthenticated).toBeFalsy();
        expect(serviceAny.authenticationProvider.sendAuthCall).not.toHaveBeenCalled();
        expect(authenticationState.setAuthenticated).toHaveBeenCalledWith(false);
        done();
      });
    });
  });
});
