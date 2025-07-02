import { UrlService } from '@telenet/ng-lib-page';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { fakeAsync, flush, TestBed } from '@angular/core/testing';
import { ConfigService } from '@telenet/ng-lib-config';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MessageService } from '@telenet/ng-lib-message';
import { of, throwError } from 'rxjs';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { OmapiCacheService } from './cache/omapi-cache.service';
import { OmapiFamilyService } from './omapi-family.service';
import { OmapiProductService } from './omapi-product.service';
import { OmapiProduct } from '../models/omapi-product.model';
import { HttpErrorResponse } from '@angular/common/http';

const mockOmapiFamilyRes = require('../data/family/connect5.json');
const mockOmapiFamilyBus = require('../data/family/klik.json');
const mockOmapiFamilyResNc = require('../data/family/connect5-nc.json');
const spyOn = jest.spyOn;

const CONNECT_C = 'connect5-nc';
const FAMILY_ENDPOINT_BUS = 'https://api.sup.telenet.be/omapi/public/family/klik';
const MESSAGE_GROUP = 'message-group';
const EXPECTED_ERROR_GOT_DATA = 'expected error but received data';
const EXPECTED_ERROR_GOT_COMPLETE = 'expected error but got to complete';
const ERROR_MESSAGE = 'An error occurred while trying to fetch message-group';

describe('OmapiFamilyService', () => {
  let omapiFamilyService: OmapiFamilyService;
  let backend: HttpTestingController;
  let configService: ConfigService;
  let cacheService: OmapiCacheService<unknown>;
  let urlService: UrlService;
  let messageService: MessageService;
  let omapiProductService: OmapiProductService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [OmapiFamilyService, { provide: 'Window', useValue: {} }],
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        HttpClientTestingModule,
      ],
    });
    omapiFamilyService = TestBed.inject(OmapiFamilyService);
    backend = TestBed.inject(HttpTestingController);
    configService = TestBed.inject(ConfigService);
    cacheService = TestBed.inject(OmapiCacheService);
    urlService = TestBed.inject(UrlService);
    messageService = TestBed.inject(MessageService);
    omapiProductService = TestBed.inject(OmapiProductService);
  });

  describe('getFamily', () => {
    const familyEndpointRes = 'https://api.sup.telenet.be/omapi/public/family/connect5';

    const familyEndpointResNc = 'https://api.sup.telenet.be/omapi/public/family/connect5-nc';

    beforeEach(() => {
      spyOn(configService, 'getConfig').mockReturnValue('https://api.sup.telenet.be/omapi');
      spyOn(urlService, 'getCurrentUrl').mockReturnValue('current-url');
      spyOn(cacheService, 'add');
      spyOn(messageService, 'addMessage');
    });

    describe('RES', () => {
      it('should return the mapped OmapiFamily for the provided family when endpoint is cached', fakeAsync(() => {
        spyOn(cacheService, 'get').mockReturnValue(of(mockOmapiFamilyRes));

        omapiFamilyService.getFamily(MESSAGE_GROUP, 'connect5').subscribe((actual) => {
          expect(cacheService.add).toHaveBeenCalledTimes(0);
          expect(cacheService.get).toHaveBeenCalledWith(familyEndpointRes);
          expect(actual.tiers.length).toBe(2);
          expect(actual.tiers[0].omapiId).toBe('42797');
          expect(actual.tiers[0].key).toBe('fast');

          expect(actual.tiers[0].mobile?.length).toBe(5);
          expect(actual.tiers[0].mobile?.[0].omapiId).toBe('42797');

          expect(actual.tiers[0].entertainment?.length).toBe(2);
          expect(actual.tiers[0].entertainment?.[0].omapiId).toBe('40816');

          expect(actual.tiers[0].optins?.length).toBe(10);
          expect(actual.tiers[0].optins?.[0].key).toBe('data_sim');
          expect(actual.tiers[0].optins?.[0].mobileId).toBe('42797');
          expect(actual.tiers[0].optins?.[0].omapiId).toBe('43763');
          expect(actual.tiers[0].optins?.[5].key).toBe('fixed_telephony');
          expect(actual.tiers[0].optins?.[5].mobileId).toBe('42797');
          expect(actual.tiers[0].optins?.[5].omapiId).toBe('37785');
        });

        backend.expectNone('https://api.int.telenet.be/omapi/public/family/connect5');
        flush();
      }));

      it('should handle the error when error is thrown with status other than 410 res', fakeAsync(() => {
        spyOn(cacheService, 'get').mockImplementation(() => throwError(() => new HttpErrorResponse({ status: 404 })));

        omapiFamilyService.getFamily(MESSAGE_GROUP, 'connect5').subscribe({
          next: () => () => fail(EXPECTED_ERROR_GOT_DATA),
          error: (error: unknown) => {
            expect(error).toContain(ERROR_MESSAGE);
          },
          complete: () => fail(EXPECTED_ERROR_GOT_COMPLETE),
        });

        expect(messageService.addMessage).toHaveBeenCalledWith(
          expect.objectContaining({
            messageGroupName: MESSAGE_GROUP,
            key: 'omapi-404',
          })
        );
        flush();
      }));

      it('should handle the error when error is thrown with status 410 res', fakeAsync(() => {
        spyOn(cacheService, 'get').mockReturnValue(throwError(() => new HttpErrorResponse({ status: 410 })));

        omapiFamilyService.getFamily(MESSAGE_GROUP, 'connect5').subscribe({
          next: () => () => fail(EXPECTED_ERROR_GOT_DATA),
          error: (error: unknown) => expect(error).toBe(ERROR_MESSAGE),
          complete: () => fail(EXPECTED_ERROR_GOT_COMPLETE),
        });

        expect(messageService.addMessage).not.toHaveBeenCalled();
        flush();
      }));
    });

    describe('BUS', () => {
      it('should return the mapped OmapiFamily for the provided business family when endpoint is cached', fakeAsync(() => {
        const productInfo = {
          productId: '1234',
        } as OmapiProduct;
        spyOn(cacheService, 'get').mockReturnValue(of(mockOmapiFamilyBus));
        spyOn(omapiProductService, 'getProductById').mockReturnValue(of(productInfo));
        omapiFamilyService.getKlikFamily(MESSAGE_GROUP, 'klik').subscribe((actual) => {
          expect(cacheService.add).toHaveBeenCalledTimes(0);
          expect(cacheService.get).toHaveBeenCalledWith(FAMILY_ENDPOINT_BUS);
          expect(actual.tiers.length).toBe(1);
          expect(actual.products.length).toBe(3);
          expect(actual.options.length).toBe(1);
          expect(actual.optins.length).toBe(1);
          expect(actual.tiers[0].productInfo).toBeTruthy();
          expect(actual.tiers[0].omapiId).toBe('45975');
          expect(actual.products[0].type).toBe('mobile');
          expect(actual.products[0].tiers[0].key).toBe('klik');
          expect(actual.options[0].omapiId).toBe('TVPK1005');
          expect(actual.options[0].productInfo).toBeTruthy();
          expect(actual.optins[0].key).toBe('speedboost');
          expect(actual.optins[0].tiers.length).toBe(1);
        });

        backend.expectNone(FAMILY_ENDPOINT_BUS);
        flush();
      }));

      it('should handle the error when error is thrown with status other than 410 bus', fakeAsync(() => {
        spyOn(cacheService, 'get').mockReturnValue(throwError(() => new HttpErrorResponse({ status: 404 })));

        omapiFamilyService.getKlikFamily(MESSAGE_GROUP, 'klik').subscribe({
          next: () => () => fail(EXPECTED_ERROR_GOT_DATA),
          error: (error: unknown) => expect(error).toBe(ERROR_MESSAGE),
          complete: () => fail(EXPECTED_ERROR_GOT_COMPLETE),
        });

        expect(messageService.addMessage).toHaveBeenCalledWith(
          expect.objectContaining({
            messageGroupName: MESSAGE_GROUP,
            key: 'omapi-404',
          })
        );
        flush();
      }));

      it('should handle the error when error is thrown with status 410 bus', fakeAsync(() => {
        spyOn(cacheService, 'get').mockReturnValue(throwError(() => new HttpErrorResponse({ status: 410 })));

        omapiFamilyService.getKlikFamily(MESSAGE_GROUP, 'klik').subscribe({
          next: () => () => fail(EXPECTED_ERROR_GOT_DATA),
          error: (error: unknown) => expect(error).toBe(ERROR_MESSAGE),
          complete: () => fail(EXPECTED_ERROR_GOT_COMPLETE),
        });

        expect(messageService.addMessage).not.toHaveBeenCalled();
        flush();
      }));
    });

    describe('RES-NC', () => {
      it('should return the mapped OmapiFamily for the provided family RES-NC when endpoint is cached', fakeAsync(() => {
        spyOn(cacheService, 'get').mockReturnValue(of(mockOmapiFamilyResNc));

        omapiFamilyService.getFamily(MESSAGE_GROUP, CONNECT_C).subscribe((actual) => {
          expect(cacheService.add).toHaveBeenCalledTimes(0);
          expect(cacheService.get).toHaveBeenCalledWith(familyEndpointResNc);
          expect(actual.tiers.length).toBe(2);
          expect(actual.tiers[0].omapiId).toBe('C5FA0001');
          expect(actual.tiers[0].key).toBe('ONE');

          expect(actual.tiers[0].mobile?.length).toBe(5);
          expect(actual.tiers[0].mobile?.[0].omapiId).toBe('C5FA0001');

          expect(actual.tiers[0].entertainment?.length).toBe(2);
          expect(actual.tiers[0].entertainment?.[0].omapiId).toBe('TEOS0001');

          expect(actual.tiers[0].optins?.length).toBe(10);
          expect(actual.tiers[0].optins?.[0].key).toBe('data_sim');
          expect(actual.tiers[0].optins?.[0].mobileId).toBe('C5FA0001');
          expect(actual.tiers[0].optins?.[0].omapiId).toBe('MBLN0002');
          expect(actual.tiers[0].optins?.[5].key).toBe('fixed_telephony');
          expect(actual.tiers[0].optins?.[5].mobileId).toBe('C5FA0001');
          expect(actual.tiers[0].optins?.[5].omapiId).toBe('FLIN0001');

          expect(actual.tiers[0].options?.length).toBe(16);
          expect(actual.tiers[0].options?.[0].type).toBe('mobile');
          expect(actual.tiers[0].options?.[0].key).toBe('international_calling');
          expect(actual.tiers[0].options?.[0].omapiId).toBe('BERU0001');
          expect(actual.tiers[0].options?.[1].type).toBe('entertainment');
          expect(actual.tiers[0].options?.[1].key).toBe('basic_content_pack');
          expect(actual.tiers[0].options?.[1].omapiId).toBe('TVPK0002');
          expect(actual.tiers[0].options?.[6].type).toBe('entertainment');
          expect(actual.tiers[0].options?.[6].key).toBe('play_sports');
          expect(actual.tiers[0].options?.[6].omapiId).toBe('TVPK0021');
          expect(actual.tiers[0].options?.[6].parents).toEqual(['TEOS0001']);
        });

        backend.expectNone('https://api.int.telenet.be/omapi/public/family/connect5-nc');
        flush();
      }));

      it('should handle the error when error is thrown with status other than 404 nc', fakeAsync(() => {
        spyOn(cacheService, 'get').mockReturnValue(throwError(() => new HttpErrorResponse({ status: 404 })));

        omapiFamilyService.getFamily(MESSAGE_GROUP, CONNECT_C).subscribe({
          next: () => () => fail(EXPECTED_ERROR_GOT_DATA),
          error: (error: unknown) => expect(error).toBe(ERROR_MESSAGE),
          complete: () => fail(EXPECTED_ERROR_GOT_COMPLETE),
        });

        expect(messageService.addMessage).toHaveBeenCalledWith(
          expect.objectContaining({
            messageGroupName: MESSAGE_GROUP,
            key: 'omapi-404',
          })
        );
        flush();
      }));

      it('should handle the error when error is thrown with status 410 nc', fakeAsync(() => {
        spyOn(cacheService, 'get').mockReturnValue(throwError(() => new HttpErrorResponse({ status: 410 })));

        omapiFamilyService.getFamily(MESSAGE_GROUP, CONNECT_C).subscribe({
          next: () => () => fail(EXPECTED_ERROR_GOT_DATA),
          error: (error: unknown) => expect(error).toBe(ERROR_MESSAGE),
          complete: () => fail(EXPECTED_ERROR_GOT_COMPLETE),
        });

        expect(messageService.addMessage).not.toHaveBeenCalled();
        flush();
      }));
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
