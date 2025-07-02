import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { OcapiService } from './ocapi.service';
import { of } from 'rxjs';
import { LoginDetailsMapper } from '../mappers';
import { LoginDetails } from '../models';
import { UserDetailsService } from './user-details.service';
import { MessageService } from '@telenet/ng-lib-message';
import { UrlService } from '@telenet/ng-lib-page';
import { HttpErrorResponse } from '@angular/common/http';

describe('UserDetailsService', () => {
  let ocapiService: OcapiService;
  let userDetailsService: UserDetailsService;
  let httpTestingController: HttpTestingController;
  let messageService: MessageService;
  let urlService: UrlService;

  const USER_DETAILS_ENDPOINT = '/oauth/userdetails';
  const USER_DETAILS_ENDPOINT_WITH_JWT = '/oauth/userdetails?jwt=fakejwt';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        OcapiService,
        LoginDetailsMapper,
        {
          provide: 'Window',
          useValue: window,
        },
      ],
    }).compileComponents();
    ocapiService = TestBed.inject(OcapiService);
    userDetailsService = TestBed.inject(UserDetailsService);
    httpTestingController = TestBed.inject(HttpTestingController);
    messageService = TestBed.inject(MessageService);
    urlService = TestBed.inject(UrlService);
  });

  describe('getUserDetails', () => {
    it('should call the ocapi service for the login details and return the mapped response', async () => {
      const loginDetails = { httpStatus: 200 } as LoginDetails;
      jest.spyOn(ocapiService, 'doGet').mockReturnValue(of(loginDetails));

      userDetailsService.getUserDetails().subscribe((actual) => {
        expect(actual).toEqual(loginDetails);
      });

      const req = httpTestingController.expectOne(USER_DETAILS_ENDPOINT);
      expect(req.request.method).toEqual('GET');
      req.flush(loginDetails);

      httpTestingController.verify();
    });

    it('should return the cached response given its called twice for the login details and return the mapped response', async () => {
      const loginDetails = { httpStatus: 200 } as LoginDetails;
      jest.spyOn(ocapiService, 'doGet').mockReturnValue(of(loginDetails));

      userDetailsService.getUserDetails().subscribe((details) => {
        expect(details).toEqual(loginDetails);
      });

      const req = httpTestingController.expectOne(USER_DETAILS_ENDPOINT);
      expect(req.request.method).toEqual('GET');
      req.flush(loginDetails);

      httpTestingController.verify();

      userDetailsService.getUserDetails().subscribe((details) => {
        expect(details).toEqual(loginDetails);
      });

      httpTestingController.verify();
    });

    it('should send 2 user details network request given its called twice for the login details, second time with jwt', async () => {
      const loginDetails = { httpStatus: 200 } as LoginDetails;

      jest.spyOn(urlService, 'getRequestParamValue').mockReturnValue('');

      userDetailsService.getUserDetails().subscribe((details) => {
        expect(details).toEqual(loginDetails);
      });

      let req = httpTestingController.expectOne(USER_DETAILS_ENDPOINT);
      expect(req.request.method).toEqual('GET');
      req.flush(loginDetails);

      httpTestingController.verify();

      jest.spyOn(urlService, 'getRequestParamValue').mockReturnValue('fakejwt');

      userDetailsService.getUserDetails().subscribe((details) => {
        expect(details).toEqual(loginDetails);
      });

      req = httpTestingController.expectOne(USER_DETAILS_ENDPOINT_WITH_JWT);
      expect(req.request.method).toEqual('GET');
      req.flush(loginDetails);

      httpTestingController.verify();
    });

    it('should be able to send a call with a jwt parameter when given a jwt', async () => {
      const loginDetails = { httpStatus: 200 } as LoginDetails;

      userDetailsService.getUserDetails({ jwtToken: 'fakejwt' }).subscribe((details) => {
        expect(details).toEqual(loginDetails);
      });

      const req = httpTestingController.expectOne(USER_DETAILS_ENDPOINT_WITH_JWT);
      expect(req.request.method).toEqual('GET');
      req.flush(loginDetails);

      httpTestingController.verify();
    });

    it('should send 1 user details network request given its called twice for the login details, first time with jwt, following request without', async () => {
      const loginDetails = { httpStatus: 200 } as LoginDetails;

      jest.spyOn(urlService, 'getRequestParamValue').mockReturnValue('fakejwt');

      userDetailsService.getUserDetails().subscribe((details) => {
        expect(details).toEqual(loginDetails);
      });

      const req = httpTestingController.expectOne(USER_DETAILS_ENDPOINT_WITH_JWT);
      expect(req.request.method).toEqual('GET');
      req.flush(loginDetails);

      httpTestingController.verify();

      jest.spyOn(urlService, 'getRequestParamValue').mockReturnValue('');

      userDetailsService.getUserDetails().subscribe((details) => {
        expect(details).toEqual(loginDetails);
      });

      httpTestingController.verify();
    });

    it('should return the same observable when being called twice with the same settings', () => {
      const loginDetails = { httpStatus: 200 } as LoginDetails;

      userDetailsService.getUserDetails({ withCredentials: false }).subscribe((details) => {
        expect(details).toEqual(loginDetails);
      });

      const req = httpTestingController.expectOne(USER_DETAILS_ENDPOINT);
      expect(req.request.method).toEqual('GET');
      req.flush(loginDetails);

      httpTestingController.verify();

      userDetailsService.getUserDetails({ withCredentials: false }).subscribe((details) => {
        expect(details).toEqual(loginDetails);
      });

      httpTestingController.verify();
    });

    it('should return call the ocapi service twice when a different config is passed to getLoginDetails', async () => {
      const loginDetails = { httpStatus: 200 } as LoginDetails;
      jest.spyOn(urlService, 'getRequestParamValue').mockReturnValue('');

      userDetailsService.getUserDetails({ withCredentials: false }).subscribe((details) => {
        expect(details).toEqual(loginDetails);
      });

      let req = httpTestingController.expectOne(USER_DETAILS_ENDPOINT);
      expect(req.request.method).toEqual('GET');
      req.flush(loginDetails);

      httpTestingController.verify();

      jest.spyOn(urlService, 'getRequestParamValue').mockReturnValue('jwttoken');

      userDetailsService.getUserDetails({ withCredentials: false }).subscribe((details) => {
        expect(details).toEqual(loginDetails);
      });

      req = httpTestingController.expectOne(USER_DETAILS_ENDPOINT + '?jwt=jwttoken');
      expect(req.request.method).toEqual('GET');
      req.flush(loginDetails);

      httpTestingController.verify();
    });

    it('should call the ocapi service for the login details with jwt token and should not return the cached response in case JWT token is passed second time', async () => {
      const loginDetails = { httpStatus: 200 } as LoginDetails;
      jest.spyOn(urlService, 'getRequestParamValue').mockReturnValue('fakejwt');

      userDetailsService.getUserDetails().subscribe((actual) => {
        expect(actual).toEqual(loginDetails);
      });

      let req = httpTestingController.expectOne(USER_DETAILS_ENDPOINT_WITH_JWT);
      expect(req.request.method).toEqual('GET');
      req.flush(loginDetails);

      userDetailsService.getUserDetails().subscribe((actual) => {
        expect(actual).toEqual(loginDetails);
      });

      req = httpTestingController.expectOne(USER_DETAILS_ENDPOINT_WITH_JWT);
      expect(req.request.method).toEqual('GET');
      req.flush(loginDetails);

      httpTestingController.verify();
    });

    it('should call the ocapi service for the login details with referrer url and should not return the cached response in case referrer url is passed second time', async () => {
      const loginDetails = { httpStatus: 200 } as LoginDetails;

      userDetailsService.getUserDetails().subscribe((details) => {
        expect(details).toEqual(loginDetails);
      });

      let req = httpTestingController.expectOne(USER_DETAILS_ENDPOINT);
      expect(req.request.method).toEqual('GET');
      req.flush(loginDetails);

      httpTestingController.verify();

      userDetailsService.getUserDetails({ referrerUrl: '/referrerurl.html' }).subscribe((details) => {
        expect(details).toEqual(loginDetails);
      });

      req = httpTestingController.expectOne(USER_DETAILS_ENDPOINT);
      expect(req.request.method).toEqual('GET');
      req.flush(loginDetails);

      httpTestingController.verify();
    });

    it('should handle error and call message service if not 401 unauthorized', (done) => {
      jest.spyOn(messageService, 'addMessage');

      userDetailsService.getUserDetails().subscribe({
        next: (loginDetails: LoginDetails) => {
          console.log(loginDetails);
        },
        error: (err: string) => {
          expect(err).toBe('An error occured while trying to fetch ');
          done();
        },
      });

      httpTestingController.expectOne(USER_DETAILS_ENDPOINT).flush('Invalid request parameters', {
        status: 500,
        statusText: 'unknown error',
      });

      httpTestingController.verify();

      expect(messageService.addMessage).toHaveBeenCalled();
    });

    it('should handle 401 unauthorized error', (done) => {
      jest.spyOn(messageService, 'addMessage');

      userDetailsService.getUserDetails().subscribe({
        next: (loginDetails) => {
          expect(loginDetails.isLoggedIn()).toBe(false);
          done();
        },
        error: (err: HttpErrorResponse) => {
          expect(err.message).toContain('401 unauthorized error');
          done();
        },
      });

      // Respond with mock error
      httpTestingController
        .expectOne(USER_DETAILS_ENDPOINT)
        .flush('26fa25ee-7a04-4168-aa36-8eaacf6d7359,b3671867-32ac-4343-a8cf-59a83d352228', {
          status: 401,
          statusText: 'unauthorized error',
        });

      httpTestingController.verify();
      expect(messageService.addMessage).not.toHaveBeenCalled();
    });
  });

  describe('reset', () => {
    it('should clear the cache', async () => {
      const loginDetails = { httpStatus: 200 } as LoginDetails;

      userDetailsService.getUserDetails().subscribe((details) => {
        expect(details).toEqual(loginDetails);
      });

      let req = httpTestingController.expectOne(USER_DETAILS_ENDPOINT);
      expect(req.request.method).toEqual('GET');
      req.flush(loginDetails);

      httpTestingController.verify();

      userDetailsService.reset();

      userDetailsService.getUserDetails().subscribe((details) => {
        expect(details).toEqual(loginDetails);
      });

      req = httpTestingController.expectOne(USER_DETAILS_ENDPOINT);
      expect(req.request.method).toEqual('GET');
      req.flush(loginDetails);

      httpTestingController.verify();
    });
  });

  afterEach(() => {
    userDetailsService.reset();
  });
});
