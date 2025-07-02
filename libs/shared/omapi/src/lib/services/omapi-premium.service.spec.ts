import { UrlService } from '@telenet/ng-lib-page';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ErrorMessage, MessageService } from '@telenet/ng-lib-message';
import { cleanStylesFromDom, Log, LogFactory } from '@telenet/ng-lib-shared';
import { OmapiCacheService } from './cache/omapi-cache.service';
import { RawOmapiPremiumInterface } from '../interfaces/raw-omapi-premium.interface';
import { OmapiPremiumService } from './omapi-premium.service';
import { OmapiPremiumMapper } from '../mappers/omapi-premium.mapper';

const spyOn = jest.spyOn;
const mockRawOmapi = require('../data/omapi-premium-response.json');

describe('OmapiPremiumService', () => {
  let omapiPremiumService: OmapiPremiumService;
  let httpMock: HttpTestingController;
  let urlService: UrlService;
  let messageService: MessageService;
  let cacheService: OmapiCacheService<unknown>;
  let log: Log;
  const messageGroup = 'test';
  const endpoint = 'https://api.int.telenet.be/omapi/public/premium/1700';
  const omapiPremium: RawOmapiPremiumInterface = mockRawOmapi;
  const currentUrl = 'localHostTest';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OmapiPremiumMapper, OmapiPremiumService, OmapiCacheService, { provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule],
    });

    omapiPremiumService = TestBed.inject(OmapiPremiumService);
    httpMock = TestBed.inject(HttpTestingController);
    urlService = TestBed.inject(UrlService);
    messageService = TestBed.inject(MessageService);
    cacheService = TestBed.inject(OmapiCacheService);
    log = {} as Log;
    log.logError = jest.fn();
    LogFactory.createLogger = jest.fn().mockReturnValue(log);
  });

  describe('getOmapiPremium', () => {
    beforeEach(() => {
      spyOn(cacheService, 'add');
      spyOn(urlService, 'getCurrentUrl').mockReturnValue(currentUrl);
      omapiPremiumService.gatewayUrl = 'https://api.int.telenet.be/omapi';
    });
    it('should get the raw omapi premium given an endpoint and add the call to the cache if the cache is empty for the provided endpoint', () => {
      spyOn(cacheService, 'get');

      omapiPremiumService.getOmapiPremium(messageGroup, '1700').subscribe((rawOmapiPremium) => {
        expect(rawOmapiPremium.premiumSerivceId).toBe('1700');
      });
      const req = httpMock.expectOne(endpoint);
      expect(req.request.method).toEqual('GET');
      req.flush(omapiPremium);
      expect(cacheService.add).toHaveBeenCalled();
    });

    it('should throw an error if there is a non-401 error', () => {
      spyOn(cacheService, 'get');
      spyOn(messageService, 'addMessage');

      omapiPremiumService.getOmapiPremium(messageGroup, '1700').subscribe({
        next: () => fail('expected error but got data'),
        error: (error: unknown) => {
          expect(error).toBe(`An error occurred while trying to fetch ${messageGroup}`);
          expect(log.logError).toHaveBeenCalled();
        },
        complete: () => fail('expected error but got to complete'),
      });

      const req = httpMock.expectOne(endpoint);
      expect(req.request.method).toEqual('GET');
      req.error(new ProgressEvent('test'));
      expect(cacheService.add).toHaveBeenCalled();
    });
    it('should add an error to the message service if the error is not a 410 error', () => {
      const errorStatusCode = 512;
      spyOn(cacheService, 'get');
      spyOn(messageService, 'addMessage');

      omapiPremiumService.getOmapiPremium(messageGroup, '1700').subscribe({
        next: () => fail('expected error but got data'),
        error: (error: Error) => {
          expect(messageService.addMessage).toHaveBeenCalledWith(
            new ErrorMessage(messageGroup, `omapi-${errorStatusCode}`)
          );
          expect(error.toString()).toBe(`An error occurred while trying to fetch ${messageGroup}`);
          expect(log.logError).toHaveBeenCalled();
        },
        complete: () => fail('expected error but got to complete'),
      });
      const req = httpMock.expectOne(endpoint);
      expect(req.request.method).toEqual('GET');
      req.error(new ProgressEvent('testError'), { status: errorStatusCode });
      expect(cacheService.add).toHaveBeenCalled();
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
