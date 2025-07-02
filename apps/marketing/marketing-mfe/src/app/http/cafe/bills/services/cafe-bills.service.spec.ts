import { inject, TestBed } from '@angular/core/testing';
import { ConfigConstants, ConfigService } from '@telenet/ng-lib-config';
import { OcapiService, OcapiCallConfig } from '@telenet/ng-lib-ocapi';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CafeBillsMapper } from '../mappers/cafe-bills.mapper';
import { CafeBillsService } from './cafe-bills.service';
import { of } from 'rxjs';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { when } from 'jest-when';
import { CafeBill } from '../interfaces/cafe-bill.interface';

describe('CafeBillsService', () => {
  const BASE_URL = 'http://ocapi.test/ocapi-public';
  let configService: ConfigService;
  let ocapiService: OcapiService;
  let cafeBillsService: CafeBillsService;
  let cafeBillsMapper: CafeBillsMapper;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CafeBillsService, CafeBillsMapper, OcapiService, { provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule],
    });
    ocapiService = TestBed.inject(OcapiService);
    cafeBillsService = TestBed.inject(CafeBillsService);
    cafeBillsMapper = TestBed.inject(CafeBillsMapper);
    configService = TestBed.inject(ConfigService);
    configService.getConfig = jest.fn();
    when(configService.getConfig).calledWith(ConfigConstants.OCAPI_URl).mockReturnValue(BASE_URL);
  });

  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
    cleanStylesFromDom();
  }));

  describe('getBills', () => {
    it('should call the ocapi service with the correct parameters', (done) => {
      const bills: CafeBill[] = [];
      ocapiService.doGet = jest.fn().mockReturnValue(of(bills));

      cafeBillsService.getBills('messageGroup').subscribe((response) => {
        expect(response).toBe(bills);
        expect(ocapiService.doGet).toHaveBeenCalledWith(
          new OcapiCallConfig('messageGroup', '/public/?p=bills', cafeBillsMapper)
        );
        done();
      });
    });
  });
});
