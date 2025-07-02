import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { ConfigConstants, ConfigService } from '@telenet/ng-lib-config';
import { CafeModemDetailsMapper } from '../mappers/cafe-modem-details.mapper';
import { inject, TestBed } from '@angular/core/testing';
import { CafeModemDetailsService } from './cafe-modem-details.service';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CafeModemDetailsModel } from '../models/cafe-modem-details.model';
import { CafeModemDetailModel } from '../models/cafe-modem-detail.model';
import { when } from 'jest-when';
import { of } from 'rxjs';

describe('CafeModemDetailsService', () => {
  let configService: ConfigService;
  let modemDetailsMapper: CafeModemDetailsMapper;
  let cafeModemDetailsService: CafeModemDetailsService;
  let ocapiService: OcapiService;
  const BASE_URL = 'http://ocapi.test/ocapi';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        OcapiService,
        CafeModemDetailsService,
        CafeModemDetailsMapper,
        CookieService,
        { provide: 'Window', useValue: {} },
      ],
      imports: [HttpClientTestingModule],
    });
    configService = TestBed.inject(ConfigService);
    modemDetailsMapper = TestBed.inject(CafeModemDetailsMapper);
    cafeModemDetailsService = TestBed.inject(CafeModemDetailsService);
    ocapiService = TestBed.inject(OcapiService);
    configService.getConfig = jest.fn();
    when(configService.getConfig).calledWith(ConfigConstants.OCAPI_URl).mockReturnValue(BASE_URL);
    when(configService.getConfig).calledWith(ConfigConstants.OPENID_CLIENT_ID).mockReturnValue('');
    modemDetailsMapper.toModel = jest.fn().mockReturnValue(getModemDetails());
  });

  it('should be created', inject([CafeModemDetailsService], (service: CafeModemDetailsService) => {
    expect(service).toBeTruthy();
  }));

  describe('getModemDetails', function () {
    it('should return a modemdetails response', function () {
      const ocapiCallConfig = new OcapiCallConfig('test', '/public/?p=modemdetails', modemDetailsMapper);
      ocapiService.doGet = jest
        .fn()
        .mockReturnValue(of({ modemDetails: [{ internetLineIdentifier: 'u580135' }] } as CafeModemDetailsModel));
      cafeModemDetailsService.getModemDetails('test').subscribe((response) => {
        expect(response.modemDetails.length).toBe(1);
        expect(response.modemDetails[0].internetLineIdentifier).toBe('u580135');
      });
      expect(ocapiService.doGet).toHaveBeenCalledWith(ocapiCallConfig);
    });

    it('should return from cache when hit a second time', function () {
      const firstCall = cafeModemDetailsService.getModemDetails('test').subscribe((response) => {
        expect(response.modemDetails.length).toBe(1);
        expect(response.modemDetails[0].internetLineIdentifier).toBe('u580135');
      });

      firstCall.unsubscribe();

      modemDetailsMapper.toModel = jest.fn().mockReturnValue(undefined);
      cafeModemDetailsService.getModemDetails('test').subscribe((response) => {
        expect(response.modemDetails.length).toBe(1);
        expect(response.modemDetails[0].internetLineIdentifier).toBe('u580135');
      });
    });

    afterEach(() => {
      cleanStylesFromDom();
    });
  });
});

function getModemDetails() {
  const modemDetailsModel = new CafeModemDetailsModel();
  const modemDetailModel = new CafeModemDetailModel();

  modemDetailsModel.modemDetails = [];
  modemDetailsModel.modemDetails.push(modemDetailModel);
  modemDetailModel.internetLineIdentifier = 'u580135';

  return modemDetailsModel;
}
