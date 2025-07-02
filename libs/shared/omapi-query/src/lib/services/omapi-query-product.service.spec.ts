import { UrlService } from '@telenet/ng-lib-page';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CacheService } from './cache/cache.service';
import { ErrorMessage, MessageService } from '@telenet/ng-lib-message';
import { of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { cleanStylesFromDom, LogFactory, Log } from '@telenet/ng-lib-shared';
import { RawOmapiQueryProductInterface } from '../interfaces/raw-omapi-query-product.interface';
import { OmapiQueryProductService } from './omapi-query-product.service';

const mockQueryProductsResponse = require('../../data/http/common/omapi/omapi-query-product-response.json');
const spyOn = jest.spyOn;

describe('OmapiQueryProductService', () => {
  let omapiQueryProductService: OmapiQueryProductService;
  let httpMock: HttpTestingController;
  let urlService: UrlService;
  let messageService: MessageService;
  let cacheService: CacheService;
  let log: Log;

  const messageGroup = 'test';
  const endpoint = 'test.com/test';
  const queryEndpoint =
    'https://api.int.telenet.be/omapi-query/public/hc-products/v1/products?itemcodes=2063620&flow=esales';
  const omapiQueryProduct: RawOmapiQueryProductInterface = mockQueryProductsResponse as RawOmapiQueryProductInterface;
  const currentUrl = 'localHostTest';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OmapiQueryProductService, CacheService, { provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule],
    });
    log = {} as Log;
    log.logError = jest.fn();
    LogFactory.createLogger = jest.fn().mockReturnValue(log);
    omapiQueryProductService = TestBed.inject(OmapiQueryProductService);
    httpMock = TestBed.inject(HttpTestingController);
    urlService = TestBed.inject(UrlService);
    messageService = TestBed.inject(MessageService);
    cacheService = TestBed.inject(CacheService);
  });

  describe('getRawQueryProductByEndpoint', () => {
    beforeEach(() => {
      spyOn(cacheService, 'add');
      spyOn(urlService, 'getCurrentUrl').mockReturnValue(currentUrl);
    });
    it('should get the raw omapi query product details', () => {
      spyOn(cacheService, 'get').mockReturnValue(of(omapiQueryProduct));
      omapiQueryProductService
        .getRawQueryProductByEndpoint(messageGroup, queryEndpoint)
        .subscribe((rawOmapiQueryProduct) => {
          expect(rawOmapiQueryProduct).toEqual(omapiQueryProduct);
        });
    });
    it('should add an error to the message service if the error is not a 410 error', () => {
      const errorStatusCode = 512;
      spyOn(cacheService, 'get');
      spyOn(messageService, 'addMessage');

      omapiQueryProductService.getRawQueryProductByEndpoint(messageGroup, endpoint).subscribe({
        next: () => fail('expected error but got data'),
        error: (error: unknown) => {
          expect(messageService.addMessage).toHaveBeenCalledWith(
            new ErrorMessage(messageGroup, `omapi-query-${errorStatusCode}`)
          );
          expect((error as HttpErrorResponse).toString()).toBe(
            `Error: An error occurred while trying to fetch ${messageGroup}`
          );
        },
        complete: () => fail('expected error but got to complete'),
      });
      const req = httpMock.expectOne(endpoint);
      expect(req.request.method).toEqual('GET');
      req.error(new ProgressEvent('testError'), { status: errorStatusCode });
      expect(cacheService.add).toHaveBeenCalled();
    });
  });

  describe('rawQueryProductsFromEndpoints$', () => {
    it('should return an array of all the omapi query responses given an array of endpoints', () => {
      spyOn(omapiQueryProductService, 'getRawQueryProductByEndpoint').mockReturnValue(of(omapiQueryProduct));

      omapiQueryProductService.rawQueryProductsFromEndpoints$('test', ['1', '2']).subscribe((omapiQueryResponses) => {
        expect(omapiQueryResponses).toEqual([omapiQueryProduct, omapiQueryProduct]);
      });
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
