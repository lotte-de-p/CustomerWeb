import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { inject, TestBed } from '@angular/core/testing';
import { OcapiService } from '@telenet/ng-lib-ocapi';
import { ConfigConstants, ConfigService } from '@telenet/ng-lib-config';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductHoldingMapper } from '../mappers/product-holding.mapper';
import { ProductHolding } from '../models/product-holding.model';
import { Product } from '../models/product.model';
import { CookieService } from 'ngx-cookie-service';
import { Address } from '../../../common/address/models/address.model';
import { ProductHoldingService } from '../factories/product-holding.service';
import { when } from 'jest-when';

describe('BaseProductHoldingService', () => {
  let configService: ConfigService;
  let productHoldingMapper: ProductHoldingMapper;

  const PROPERTY_URL = '/public/?p=customerproductholding';
  const BASE_URL = 'http://ocapi.test/ocapi';
  const OAUTH_URL = '/oauth/userdetails';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        OcapiService,
        ProductHoldingService,
        ProductHoldingMapper,
        CookieService,
        { provide: 'Window', useValue: {} },
      ],
      imports: [HttpClientTestingModule],
    });

    configService = TestBed.inject(ConfigService);
    productHoldingMapper = TestBed.inject(ProductHoldingMapper);
    configService.getConfig = jest.fn();
    when(configService.getConfig).calledWith(ConfigConstants.OCAPI_URl).mockReturnValue(BASE_URL);
    when(configService.getConfig).calledWith(ConfigConstants.OPENID_CLIENT_ID).mockReturnValue('');
    productHoldingMapper.toModel = jest.fn().mockReturnValue(getProductHolding());
  });

  it('should be created', inject([ProductHoldingService], (service: ProductHoldingService) => {
    expect(service).toBeTruthy();
  }));

  describe('getCustomerProductHolding', () => {
    it('should return a Product holding response', inject(
      [HttpTestingController, ProductHoldingService],
      (httpMock: HttpTestingController, productHoldingService: ProductHoldingService) => {
        productHoldingService.getCustomerProductHolding('test').subscribe((response) => {
          expect(response.products.length).toBe(2);
          expect(response.products[0].identifier).toBe('testproduct');
          expect(response.products[1].identifier).toBe('testproducttwo');
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

    it('should return from cache when hit a second time', inject(
      [HttpTestingController, ProductHoldingService],
      (httpMock: HttpTestingController, productHoldingService: ProductHoldingService) => {
        const firstCall = productHoldingService.getCustomerProductHolding('test').subscribe((_response) => {
          // empty
        });

        const reqUserDetails = httpMock.expectOne(BASE_URL + OAUTH_URL);
        expect(reqUserDetails.request.method).toEqual('GET');
        reqUserDetails.flush({ data: '' });

        const req = httpMock.expectOne(BASE_URL + PROPERTY_URL);
        expect(req.request.method).toEqual('GET');
        req.flush({ data: '' });

        httpMock.verify();
        firstCall.unsubscribe();

        productHoldingMapper.toModel = jest.fn().mockReturnValue(undefined);
        productHoldingService.getCustomerProductHolding('test').subscribe((response) => {
          expect(response.products.length).toBe(2);
          expect(response.products[0].identifier).toBe('testproduct');
          expect(response.products[1].identifier).toBe('testproducttwo');
        });
      }
    ));
  });

  describe('getCustomerProductsByAddressId', () => {
    it('should return the customer products for the provided address id', inject(
      [HttpTestingController, ProductHoldingService],
      (_httpMock: HttpTestingController, productHoldingService: ProductHoldingService) => {
        productHoldingService.getCustomerProductsByAddressId('messageGroup', 'def456').subscribe((response) => {
          expect(response.length).toBe(1);
          expect(response[0].products[0].identifier).toBe('testproducttwo');
        });
      }
    ));
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});

function getProductHolding(): ProductHolding {
  const productHolding = new ProductHolding();
  const productOne = new Product();
  productOne.identifier = 'testproduct';
  productOne.address = { addressId: 'abc123' } as Address;

  const productTwo = new Product();
  productTwo.identifier = 'testproducttwo';
  productTwo.address = { addressId: 'def456' } as Address;

  productHolding.products = [];
  productHolding.products.push(productOne, productTwo);
  return productHolding;
}
