import { CustomerBrandEnum, PathCategorisationService, UrlService } from '@telenet/ng-lib-page';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ConfigConstants, ConfigService } from '@telenet/ng-lib-config';
import { instance, mock, when } from 'ts-mockito';
import { SofyService } from './sofy.service';
import { SofyProduct } from '../models/sofy-product';
import { SofyRequestProduct } from '../models/request';
import { customerInstallationDetailsTestFactory } from '../interfaces/installation-details-response.interface.testfactory';
import { SofyCustomerProductHoldingProduct } from '../models/sofy-customer-product-holding-product';
import { Promotion } from '../models/promotion.model';
import { SofyModemDetails } from '../models/sofy-modem-details';

const SOFY_URL = 'https://sofy.external.telenet.be';
const CURRENT_URL = 'current-url';
const SOFY_PUBLIC_URL = '/sofy/public/';
const SOFY_BASE_PUBLIC_URL = '/sofy/base/public/';
const SOFY_FULL_URL = SOFY_URL + SOFY_PUBLIC_URL;
const SOFY_BASE_FULL_URL = SOFY_URL + SOFY_BASE_PUBLIC_URL;
const X_ALTER_REFERER = 'x-alt-referer';
const X_REQUEST_WITH = 'X-Requested-With';
const MESSAGE_GROUP = 'product-journey';
describe('SofyService', () => {
  let sofyService: SofyService;
  let urlService: UrlService;
  const configService = mock(ConfigService);
  let backend: HttpTestingController;
  let pathCategorisationService: PathCategorisationService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SofyService,
        { provide: ConfigService, useFactory: () => instance(configService) },
        { provide: UrlService, useFactory: () => instance(urlService) },
        { provide: 'Window', useValue: {} },
      ],
      imports: [HttpClientTestingModule],
    }).compileComponents();

    urlService = mock(UrlService);
    sofyService = TestBed.inject(SofyService);
    backend = TestBed.inject(HttpTestingController);
    pathCategorisationService = TestBed.inject(PathCategorisationService);
    when(configService.getConfig(ConfigConstants.SOFY_URL)).thenReturn(SOFY_URL);
    when(urlService.getCurrentUrl()).thenReturn(CURRENT_URL);
    jest.spyOn(pathCategorisationService, 'getCustomerBrand').mockReturnValue(CustomerBrandEnum.BRAND_TELENET);
  });
  describe('sofyProducts', () => {
    it('should make the call to fetch Sofy Products', () => {
      const products: SofyProduct[] = [];
      products.push(new SofyProduct());
      const productHoldings: SofyCustomerProductHoldingProduct[] = [];
      productHoldings.push(new SofyCustomerProductHoldingProduct());
      const promotions: Promotion[] = [];
      promotions.push(new Promotion());
      const modemDetails: SofyModemDetails[] = [];
      modemDetails.push(new SofyModemDetails());

      sofyService.sofyProducts(products, productHoldings, promotions, modemDetails, '', '', MESSAGE_GROUP).subscribe();

      const call = backend.expectOne(SOFY_FULL_URL);
      expect(call.request.url).toBe(SOFY_FULL_URL);
      expect(call.request.headers.get(X_REQUEST_WITH)).toBe('XMLHttpRequest');
      expect(call.request.headers.get(X_ALTER_REFERER)).toBe(CURRENT_URL);
    });
  });

  xdescribe('getSofyProductWithOmapiId', () => {
    it('should get a sofy product based on only an omapi id', () => {
      sofyService
        .getSalesOfferWithOmapiId(
          [
            {
              omapiid: '94',
              installationaddress: { postalcode: '2800' },
              options: [],
              optinproducts: [],
              streamingservices: [],
            } as SofyRequestProduct,
          ],
          'test'
        )
        .subscribe();

      const call = backend.expectOne(SOFY_FULL_URL);
      expect(call.request.url).toBe(SOFY_FULL_URL);
      expect(call.request.headers.get(X_REQUEST_WITH)).toBe('XMLHttpRequest');
      expect(call.request.headers.get(X_ALTER_REFERER)).toBe(CURRENT_URL);
    });
  });

  describe('getSalesOffer', () => {
    it('should call sofy with the right parameters when products are configured', waitForAsync(() => {
      const products: SofyRequestProduct[] = [{ omapiid: '87' } as SofyRequestProduct];

      const productHoldings: SofyCustomerProductHoldingProduct[] = [new SofyCustomerProductHoldingProduct()];
      const promotions: Promotion[] = [new Promotion()];
      const modemDetails: SofyModemDetails[] = [new SofyModemDetails()];

      sofyService.getSalesOffer(products, promotions, modemDetails, productHoldings, '', '', MESSAGE_GROUP).subscribe();

      const call = backend.expectOne(SOFY_FULL_URL);
      expect(call.request.url).toBe(SOFY_FULL_URL);
      expect(call.request.headers.get(X_REQUEST_WITH)).toBe('XMLHttpRequest');
      expect(call.request.headers.get(X_ALTER_REFERER)).toBe(CURRENT_URL);
      expect(JSON.parse(JSON.stringify(call.request.body))).toEqual({
        products: [{ omapiid: '87' }],
        promotions: [{}],
        customerproductholding: [{}],
        modemdetails: [{}],
        voucherpromo: '',
        campaigncode: '',
      });
    }));

    it('should call sofy with the right parameters when standalone options are configured', waitForAsync(() => {
      const standaloneOptions: SofyRequestProduct[] = [{ omapiid: '87' } as SofyRequestProduct];

      const productHoldings: SofyCustomerProductHoldingProduct[] = [new SofyCustomerProductHoldingProduct()];
      const promotions: Promotion[] = [new Promotion()];
      const modemDetails: SofyModemDetails[] = [new SofyModemDetails()];

      sofyService
        .getSalesOffer(
          [],
          promotions,
          modemDetails,
          productHoldings,
          '',
          '',
          MESSAGE_GROUP,
          undefined,
          standaloneOptions
        )
        .subscribe();

      const call = backend.expectOne(SOFY_FULL_URL);
      expect(call.request.url).toBe(SOFY_FULL_URL);
      expect(call.request.headers.get(X_REQUEST_WITH)).toBe('XMLHttpRequest');
      expect(call.request.headers.get(X_ALTER_REFERER)).toBe(CURRENT_URL);
      expect(JSON.parse(JSON.stringify(call.request.body))).toEqual({
        standaloneoptions: [{ omapiid: '87' }],
        promotions: [{}],
        customerproductholding: [{}],
        modemdetails: [{}],
        voucherpromo: '',
        campaigncode: '',
        products: [],
      });
    }));

    it('should call sofy with the installation detail parameter if present', waitForAsync(() => {
      const products: SofyRequestProduct[] = [{ omapiid: '87' } as SofyRequestProduct];

      const productHoldings: SofyCustomerProductHoldingProduct[] = [new SofyCustomerProductHoldingProduct()];
      const promotions: Promotion[] = [new Promotion()];
      const modemDetails: SofyModemDetails[] = [new SofyModemDetails()];
      const installationDetails = customerInstallationDetailsTestFactory.build();

      sofyService
        .getSalesOffer(products, promotions, modemDetails, productHoldings, '', '', MESSAGE_GROUP, installationDetails)
        .subscribe();

      const call = backend.expectOne(SOFY_FULL_URL);
      expect(JSON.parse(JSON.stringify(call.request.body))).toEqual({
        products: [{ omapiid: '87' }],
        promotions: [{}],
        customerproductholding: [{}],
        modemdetails: [{}],
        voucherpromo: '',
        campaigncode: '',
        customerinstallationdetails: installationDetails,
      });
    }));

    it('should call sofy with the amountoflimitedsims parameter if present', waitForAsync(() => {
      const products: SofyRequestProduct[] = [{ omapiid: 'C5FA0008', amountoflimitedsims: 2 } as SofyRequestProduct];

      const productHoldings: SofyCustomerProductHoldingProduct[] = [new SofyCustomerProductHoldingProduct()];
      const promotions: Promotion[] = [new Promotion()];
      const modemDetails: SofyModemDetails[] = [new SofyModemDetails()];
      const installationDetails = customerInstallationDetailsTestFactory.build();

      sofyService
        .getSalesOffer(products, promotions, modemDetails, productHoldings, '', '', MESSAGE_GROUP, installationDetails)
        .subscribe();

      const call = backend.expectOne(SOFY_FULL_URL);
      expect(JSON.parse(JSON.stringify(call.request.body))).toEqual({
        products: [{ omapiid: 'C5FA0008', amountoflimitedsims: 2 }],
        promotions: [{}],
        customerproductholding: [{}],
        modemdetails: [{}],
        voucherpromo: '',
        campaigncode: '',
        customerinstallationdetails: installationDetails,
      });
    }));

    it('should call sofy with the salesofferdate when a date is present', waitForAsync(() => {
      when(urlService.getRequestParamValue('date', '')).thenReturn('2020-12-21');
      const products: SofyRequestProduct[] = [{ omapiid: '87' } as SofyRequestProduct];

      const productHoldings: SofyCustomerProductHoldingProduct[] = [new SofyCustomerProductHoldingProduct()];
      const promotions: Promotion[] = [new Promotion()];
      const modemDetails: SofyModemDetails[] = [new SofyModemDetails()];
      const installationDetails = customerInstallationDetailsTestFactory.build();

      sofyService
        .getSalesOffer(products, promotions, modemDetails, productHoldings, '', '', MESSAGE_GROUP, installationDetails)
        .subscribe();

      const call = backend.expectOne(SOFY_FULL_URL);
      expect(JSON.parse(JSON.stringify(call.request.body))).toEqual({
        products: [{ omapiid: '87' }],
        promotions: [{}],
        customerproductholding: [{}],
        modemdetails: [{}],
        voucherpromo: '',
        campaigncode: '',
        customerinstallationdetails: installationDetails,
        salesofferdate: '2020-12-21',
      });
    }));

    it('should make the call to fetch Sofy Products for Base Brand', () => {
      jest.spyOn(pathCategorisationService, 'getCustomerBrand').mockReturnValue(CustomerBrandEnum.BRAND_BASE);

      const products: SofyProduct[] = [];
      products.push(new SofyProduct());
      const productHoldings: SofyCustomerProductHoldingProduct[] = [];
      productHoldings.push(new SofyCustomerProductHoldingProduct());
      const promotions: Promotion[] = [];
      promotions.push(new Promotion());
      const modemDetails: SofyModemDetails[] = [];
      modemDetails.push(new SofyModemDetails());

      sofyService.sofyProducts(products, productHoldings, promotions, modemDetails, '', '', MESSAGE_GROUP).subscribe();

      const call = backend.expectOne(SOFY_BASE_FULL_URL);
      expect(call.request.url).toBe(SOFY_BASE_FULL_URL);
      expect(call.request.headers.get(X_REQUEST_WITH)).toBe('XMLHttpRequest');
      expect(call.request.headers.get(X_ALTER_REFERER)).toBe(CURRENT_URL);
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
