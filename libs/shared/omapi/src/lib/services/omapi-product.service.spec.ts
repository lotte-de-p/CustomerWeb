import { UrlService } from '@telenet/ng-lib-page';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { cleanStylesFromDom, Log, LogFactory } from '@telenet/ng-lib-shared';
import { ErrorMessage, MessageService } from '@telenet/ng-lib-message';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { OmapiCacheService } from './cache/omapi-cache.service';
import { RawOmapiProductInterface } from '../interfaces/raw-omapi-product.interface';
import { OmapiProductService } from './omapi-product.service';

const spyOn = jest.spyOn;

describe('OmapiProductService', () => {
  let omapiProductService: OmapiProductService;
  let httpMock: HttpTestingController;
  let realHttp: HttpClient;
  let urlService: UrlService;
  let messageService: MessageService;
  let cacheService: OmapiCacheService<unknown>;
  const log: Log = {} as Log;

  const omapiProductWeight = 1;
  const messageGroup = 'test';
  const endpoint = 'test.com/test';
  const omapiProduct: RawOmapiProductInterface = fakeOmapiProduct(omapiProductWeight);
  const currentUrl = 'localHostTest';
  const httpConfigForCall = httpConfig(currentUrl);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OmapiProductService, OmapiCacheService, { provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule],
    });

    omapiProductService = TestBed.inject(OmapiProductService);
    httpMock = TestBed.inject(HttpTestingController);
    urlService = TestBed.inject(UrlService);
    messageService = TestBed.inject(MessageService);
    cacheService = TestBed.inject(OmapiCacheService);
    realHttp = TestBed.inject(HttpClient);
    LogFactory.createLogger = jest.fn().mockReturnValue(log);
    log.logError = jest.fn();
  });

  describe('getRawProductByEndpoint', () => {
    beforeEach(() => {
      spyOn(omapiProductService, 'addConstituentsToOmapiResponse').mockImplementation(
        (omapiProduct: RawOmapiProductInterface) => {
          return of(omapiProduct);
        }
      );
      spyOn(cacheService, 'add');
      spyOn(urlService, 'getCurrentUrl').mockReturnValue(currentUrl);
    });

    it('should get the raw omapi product given an endpoint and add the call to the cache if the cache is empty for the provided endpoint', () => {
      spyOn(cacheService, 'get');

      omapiProductService.getRawProductByEndpoint(messageGroup, endpoint).subscribe((rawOmapiProduct) => {
        expect(rawOmapiProduct.product?.weight).toEqual(omapiProductWeight);
      });
      const req = httpMock.expectOne(endpoint);
      expect(req.request.method).toEqual('GET');
      req.flush(omapiProduct);
      expect(cacheService.add).toHaveBeenCalled();
      expect(omapiProductService['addConstituentsToOmapiResponse']).toHaveBeenCalled();
    });

    it('should get the raw omapi product given an endpoint and add the call to the cache if the cache is empty for the provided endpoint', () => {
      spyOn(cacheService, 'get').mockReturnValue(realHttp.get(endpoint, httpConfigForCall));

      omapiProductService.getRawProductByEndpoint(messageGroup, endpoint).subscribe((rawOmapiProduct) => {
        expect(rawOmapiProduct.product?.weight).toEqual(omapiProductWeight);
      });
      const req = httpMock.expectOne(endpoint);
      expect(req.request.method).toEqual('GET');
      req.flush(omapiProduct);
      expect(cacheService.add).not.toHaveBeenCalled();
      expect(omapiProductService['addConstituentsToOmapiResponse']).toHaveBeenCalled();
    });

    it('should throw an error if there is a non-401 error', () => {
      spyOn(cacheService, 'get');
      spyOn(messageService, 'addMessage');

      omapiProductService.getRawProductByEndpoint(messageGroup, endpoint).subscribe({
        next: () => fail('expected error but got data'),
        error: (error: Error) => {
          expect(error.toString()).toBe(`An error occurred while trying to fetch ${messageGroup}`);
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

      omapiProductService.getRawProductByEndpoint(messageGroup, endpoint).subscribe({
        next: () => fail('expected error but got data'),
        error: (error) => {
          expect(messageService.addMessage).toHaveBeenCalledWith(
            new ErrorMessage(messageGroup, `omapi-${errorStatusCode}`)
          );
          expect(error.toString()).toBe(`An error occurred while trying to fetch ${messageGroup}`);
        },
        complete: () => fail('expected error but got to complete'),
      });
      const req = httpMock.expectOne(endpoint);
      expect(req.request.method).toEqual('GET');
      req.error(new ProgressEvent('testError'), { status: errorStatusCode });
      expect(cacheService.add).toHaveBeenCalled();
    });

    it('should add an error to the message service if the error is not a 410 error but not throw error', () => {
      const errorStatusCode = 512;
      spyOn(cacheService, 'get');
      spyOn(messageService, 'addMessage');

      omapiProductService.getRawProductByEndpoint(messageGroup, endpoint, true).subscribe({
        next: (response) => {
          expect(messageService.addMessage).toHaveBeenCalledWith(
            new ErrorMessage(messageGroup, `omapi-${errorStatusCode}`)
          );
          expect(response).toBeUndefined();
        },
        error: () => fail('expected undefined but got error'),
      });
      const req = httpMock.expectOne(endpoint);
      expect(req.request.method).toEqual('GET');
      req.error(new ProgressEvent('testError'), { status: errorStatusCode });
      expect(cacheService.add).toHaveBeenCalled();
    });
  });

  describe('rawProductsFromEndpoints$', () => {
    it('should return an array of all the omapi specs given an array of endpoints', () => {
      spyOn(omapiProductService, 'getRawProductByEndpoint').mockReturnValue(of(omapiProduct));

      omapiProductService.rawProductsFromEndpoints$('test', ['1', '2']).subscribe((omapiResponses) => {
        expect(omapiResponses).toEqual([omapiProduct, omapiProduct]);
      });
    });

    it('should return an array of all the omapi specs given an array of endpoints with silent error', () => {
      spyOn(omapiProductService, 'getRawProductByEndpoint').mockReturnValue(of(omapiProduct));

      omapiProductService.rawProductsFromEndpoints$('test', ['1', '2'], true).subscribe((omapiResponses) => {
        expect(omapiResponses).toEqual([omapiProduct, omapiProduct]);
        expect(omapiProductService.getRawProductByEndpoint).toHaveBeenCalledWith('test', ['1', '2'], true);
      });
    });

    it('should filter out empty omapi responses', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const emptyResult$: Observable<any> = of(undefined);
      spyOn(omapiProductService, 'getRawProductByEndpoint')
        .mockReturnValueOnce(of(omapiProduct))
        .mockReturnValueOnce(emptyResult$);

      omapiProductService.rawProductsFromEndpoints$('test', ['1', '2'], true).subscribe((omapiResponses) => {
        expect(omapiResponses).toEqual([omapiProduct, omapiProduct]);
        expect(omapiProductService.getRawProductByEndpoint).toHaveBeenCalledWith('test', ['1', '2'], true);
      });
    });
  });

  describe('addConstituentsToOmapiResponse', () => {
    it('should return an omapi response enriched with constituents given an omapi response', () => {
      const constituentOmapiResponse = { product: undefined } as RawOmapiProductInterface;
      const product = { ...omapiProduct };
      if (
        product.product &&
        product.product.characteristics &&
        product.product.characteristics.constituents &&
        product.product.characteristics.constituents.length > 0
      ) {
        product.product.characteristics.constituents[0].rawOmapi = product;
      }
      spyOn(omapiProductService, 'getRawProductByEndpoint').mockReturnValue(of(constituentOmapiResponse));

      omapiProductService
        .addConstituentsToOmapiResponse(omapiProduct, messageGroup)
        .subscribe((omapiProductResponse) => {
          expect(omapiProductResponse).toEqual(product);
        });
    });
    it('should return the provided omapi response unaltered given an omapi response with no constituents', () => {
      const product = { ...omapiProduct };
      if (product.product && product.product.characteristics) {
        product.product.characteristics.constituents = undefined;
      }

      omapiProductService
        .addConstituentsToOmapiResponse(omapiProduct, messageGroup)
        .subscribe((omapiProductResponse) => {
          expect(omapiProductResponse).toEqual(product);
        });
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});

function fakeOmapiProduct(weight: number): RawOmapiProductInterface {
  return {
    product: {
      apps: undefined,
      category: [],
      customercategories: [],
      externalProductCode: '',
      labelkey: '',
      localizedcontent: [],
      priceType: '',
      productid: '',
      producttype: '',
      rates: [],
      salesofferingid: '',
      services: [],
      shortdescription: undefined,
      subcategory: undefined,
      unlimited: false,
      visibilityrules: { conditionalvisibility: false },
      visible: false,
      weight: weight,
      characteristics: {
        constituents: [
          { specurl: 'constituent0.com', type: 'dtv' },
          {
            specurl: 'constituent1.com',
            type: 'mobileNumber',
          },
        ],
      },
    },
  };
}

function httpConfig(currentUrl: string) {
  return {
    headers: {
      'x-alt-referer': currentUrl,
      'X-Requested-With': 'XMLHttpRequest',
    },
    timeout: 10000,
    cache: true,
  };
}
