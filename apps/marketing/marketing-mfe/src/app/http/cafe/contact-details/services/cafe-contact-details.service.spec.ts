import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { inject, TestBed } from '@angular/core/testing';
import { CafeContactDetailsService } from './cafe-contact-details.service';

import { CafeContactDetailsMapper } from '../mappers/cafe-contact-details.mapper';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ConfigConstants, ConfigService } from '@telenet/ng-lib-config';

import { CookieService } from 'ngx-cookie-service';
import { when } from 'jest-when';
import { CafeContactDetailsfactory } from '../models/cafe-contact-details.testfactory';

describe('CafeContactDetailsService', () => {
  const PROPERTY_URL = '/public/?p=contactdetails';
  const BASE_URL = 'http://ocapi.test/ocapi';
  const OAUTH_URL = '/oauth/userdetails';

  let configService: ConfigService;
  let cafeContactDetailsMapper: CafeContactDetailsMapper;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CafeContactDetailsService,
        CookieService,
        CafeContactDetailsMapper,
        { provide: 'Window', useValue: {} },
      ],
      imports: [HttpClientTestingModule],
    });

    configService = TestBed.inject(ConfigService);
    cafeContactDetailsMapper = TestBed.inject(CafeContactDetailsMapper);
    configService.getConfig = jest.fn();
    when(configService.getConfig).calledWith(ConfigConstants.OCAPI_URl).mockReturnValue(BASE_URL);
    when(configService.getConfig).calledWith(ConfigConstants.OPENID_CLIENT_ID).mockReturnValue('');
    cafeContactDetailsMapper.toModel = jest.fn().mockReturnValue(CafeContactDetailsfactory.build());
  });

  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));

  describe('getContactDetails', () => {
    it('should return the timeslots', inject(
      [HttpTestingController, CafeContactDetailsService],
      (httpMock: HttpTestingController, cafeContactDetailsService: CafeContactDetailsService) => {
        cafeContactDetailsService.getContactDetails('test').subscribe((response) => {
          expect(response.firstName).toBe('Bob');
          expect(response.lastName).toBe('Hammond');
        });

        const reqUserDetails = httpMock.expectOne(BASE_URL + OAUTH_URL);
        expect(reqUserDetails.request.method).toEqual('GET');
        reqUserDetails.flush({ data: '' });

        const req = httpMock.expectOne(BASE_URL + PROPERTY_URL);
        expect(req.request.method).toEqual('GET');
        req.flush({ data: '' });
        httpMock.verify();
      }
    ));
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
