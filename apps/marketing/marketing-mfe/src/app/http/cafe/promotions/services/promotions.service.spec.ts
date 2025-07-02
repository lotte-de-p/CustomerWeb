import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ConfigConstants, ConfigService } from '@telenet/ng-lib-config';
import { PromotionsService } from './promotions.service';
import { OcapiService } from '@telenet/ng-lib-ocapi';
import { PromotionsMapper } from '../mappers/promotions.mapper';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Promotion } from '../models/promotion.model';
import { when } from 'jest-when';

describe('PromotionsService', () => {
  let configService: ConfigService;
  let promotionsMapper: PromotionsMapper;
  let httpMock: HttpTestingController;
  let promotionsService: PromotionsService;

  const PROPERTY_URL = '/public/?p=promotions';
  const BASE_URL = 'http://ocapi.test/ocapi';
  const BASE_ADAPTOR_URL = 'http://ocapi.test/ocapi-adaptor';
  const OAUTH_URL = '/oauth/userdetails';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        OcapiService,
        PromotionsService,
        PromotionsMapper,
        CookieService,
        { provide: 'Window', useValue: {} },
      ],
      imports: [HttpClientTestingModule],
    });

    configService = TestBed.inject(ConfigService);
    promotionsMapper = TestBed.inject(PromotionsMapper);
    httpMock = TestBed.inject(HttpTestingController);
    promotionsService = TestBed.inject(PromotionsService);

    configService.getConfig = jest.fn();
    when(configService.getConfig).calledWith(ConfigConstants.OCAPI_URl).mockReturnValue(BASE_URL);
    when(configService.getConfig).calledWith(ConfigConstants.OPENID_CLIENT_ID).mockReturnValue('');
    promotionsMapper.toModel = jest.fn().mockReturnValue(getPromotions());
  });

  it('should be created', () => {
    expect(promotionsService).toBeTruthy();
  });

  describe('getPromotions', function () {
    it('should return promotions', fakeAsync(() => {
      promotionsService.getPromotions('test').subscribe((response) => {
        expect(response.length).toBe(2);
        expect(response[0].description).toBe('123456');
        expect(response[1].description).toBe('654321');
      });

      const reqUserDetails = httpMock.expectOne(BASE_URL + OAUTH_URL);
      expect(reqUserDetails.request.method).toEqual('GET');
      reqUserDetails.flush({ data: '' });

      const req = httpMock.expectOne(BASE_URL + PROPERTY_URL);
      expect(req.request.method).toBe('GET');
      req.flush({ data: '' });

      httpMock.verify();
      tick();
    }));

    it('should return from cache when hit a second time', fakeAsync(() => {
      const firstCall = promotionsService.getPromotions('test').subscribe((_response) => {
        // empty
      });

      const reqUserDetails = httpMock.expectOne(BASE_URL + OAUTH_URL);
      expect(reqUserDetails.request.method).toEqual('GET');
      reqUserDetails.flush({ data: '' });

      const req = httpMock.expectOne(BASE_URL + PROPERTY_URL);
      expect(req.request.method).toBe('GET');
      req.flush({ data: '' });

      httpMock.verify();
      firstCall.unsubscribe();

      promotionsMapper.toModel = jest.fn().mockReturnValue(undefined);
      promotionsService.getPromotions('test').subscribe((response) => {
        expect(response.length).toBe(2);
        expect(response[0].description).toBe('123456');
        expect(response[1].description).toBe('654321');
      });
      tick();
    }));
  });

  describe('getPromotionsAdaptor', () => {
    it('should return promotions', fakeAsync(() => {
      promotionsService.getPromotionsAdaptor('test').subscribe((response) => {
        expect(response.length).toBe(2);
        expect(response[0].description).toBe('123456');
        expect(response[1].description).toBe('654321');
      });

      const reqUserDetails = httpMock.expectOne(BASE_URL + OAUTH_URL);
      expect(reqUserDetails.request.method).toEqual('GET');
      reqUserDetails.flush({ data: '' });

      const req = httpMock.expectOne(BASE_ADAPTOR_URL + PROPERTY_URL);
      expect(req.request.method).toBe('GET');
      req.flush({ data: '' });

      httpMock.verify();
      tick();
    }));

    it('should return from cache when hit a second time', fakeAsync(() => {
      const firstCall = promotionsService.getPromotionsAdaptor('test').subscribe((_response) => {
        // empty
      });

      const reqUserDetails = httpMock.expectOne(BASE_URL + OAUTH_URL);
      reqUserDetails.flush({ data: '' });
      const req = httpMock.expectOne(BASE_ADAPTOR_URL + PROPERTY_URL);
      req.flush({ data: [] });
      httpMock.verify();
      firstCall.unsubscribe();

      promotionsMapper.toModel = jest.fn().mockReturnValue(undefined);
      promotionsService.getPromotionsAdaptor('test').subscribe((response) => {
        expect(response.length).toBe(2);
        expect(response[0].description).toBe('123456');
        expect(response[1].description).toBe('654321');
      });

      httpMock.expectNone(BASE_URL + OAUTH_URL);
      httpMock.expectNone(BASE_ADAPTOR_URL + PROPERTY_URL);
      httpMock.verify();

      tick();
    }));
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});

function getPromotions(): Promotion[] {
  const promotions: Promotion[] = [];
  const promotion1 = new Promotion();
  const promotion2 = new Promotion();
  promotion1.description = '123456';
  promotion1.startdate = 'start date 1';
  promotion1.enddate = 'end date 1';
  promotions.push(promotion1);
  promotion2.description = '654321';
  promotion2.startdate = 'start date 2';
  promotion2.enddate = 'end date 2';
  promotions.push(promotion2);
  return promotions;
}
