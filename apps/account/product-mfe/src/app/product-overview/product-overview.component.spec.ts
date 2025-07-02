import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { PhoneNumberTransformService } from '@telenet/ng-lib-layout';
import { LoginDetails, LoginModule, OcapiCallConfig } from '@telenet/ng-lib-ocapi';
import { OmapiProduct } from '@telenet/ng-lib-omapi';
import { LoaderModule, UrlService } from '@telenet/ng-lib-page';
import { of, throwError } from 'rxjs';
import { ProductOverviewConstants } from './constants/product-overview.constant';
import { ProductFactory } from './factory/product.factory';
import { PhoneToGo } from './interfaces/phone-to-go.interface';
import { TIPContractInterface } from './interfaces/tip-contract.interface';
import { ProfileDetailsByIdentityIDMapper } from './mappers/profile-details-by-identity-id.mapper';
import { Option, PriceInterface, Product } from './models/product.model';
import { MarketingPages, ProductOverviewComponent } from './product-overview.component';

function hasCategory() {
  return false;
}

const productsBase = ProductFactory.products();
productsBase[0].productInfo['hasCategory'] = hasCategory;
productsBase[1].productInfo['hasCategory'] = hasCategory;

const loginDetails = {
  narrowed: false,
  httpStatus: 200,
  customerNumber: '1202396070',
  identityId: '32480007984',
  username: '32480007984',
  firstName: 'AJARIRWHIZZ',
  lastName: 'PostPaidParChild1',
  narrowedScope: false,
  scopes: ['sales', 'manageproductholding'],
  authAge: 693429,
  bssSystem: 'NETCRACKER',
  role: 'MASTER_USER',
  isExplicitLogin: true,
  loginAlias: '525d8b42-1767-4b4c-a3aa-2402f24aba60',
  status: 'Active',
  advisorId: '',
  isMember: function () {
    return false;
  },
};

describe('ProductOverviewComponent', () => {
  let component: ProductOverviewComponent;
  let fixture: ComponentFixture<ProductOverviewComponent>;
  let profileDetailsByIdentityIDMapper: ProfileDetailsByIdentityIDMapper;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        LoginModule,
        LoaderModule,
        HttpClientModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        StoreModule.forRoot({}),
        EffectsModule.forRoot({}),
      ],
      providers: [
        UrlService,
        {
          provide: 'Window',
          useValue: {
            telenetgroupLoader: {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-empty-function
              showPageLoader: function (_option: any) {},
              // eslint-disable-next-line @typescript-eslint/no-empty-function
              hidePageLoader: function () {},
            },
          },
        },
        PhoneNumberTransformService,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductOverviewComponent);
    profileDetailsByIdentityIDMapper = TestBed.inject(ProfileDetailsByIdentityIDMapper);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call loadProducts and add listener for account selector', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    jest.spyOn(component as any, 'loadProducts');
    jest.spyOn(document, 'addEventListener');
    component.isAccountSelectorConsumer = true;

    component.initAfterLoggedIn();

    expect(component['loadProducts']).toHaveBeenCalled();
    expect(document.addEventListener).toHaveBeenCalled();
  });

  describe('initAfterLoggedIn', () => {
    it('should call loadProducts', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      jest.spyOn(component as any, 'loadProducts');

      component.initAfterLoggedIn();

      expect(component['loadProducts']).toHaveBeenCalled();
    });

    it('should set the marketing pages', () => {
      jest.spyOn(component['productOverviewFacade'], 'setMarketingPages');
      component.dtvMarketingUrl = 'dtv page';
      component.fixedLineMarketingUrl = 'fixed page';
      component.internetMarketingUrl = 'internet page';
      component.mobileMarketingUrl = 'mobile page';

      const pages: MarketingPages = {
        dtv: 'dtv page',
        fixed: 'fixed page',
        internet: 'internet page',
        mobile: 'mobile page',
      };

      component.initAfterLoggedIn();

      expect(component['productOverviewFacade'].setMarketingPages).toHaveBeenCalledWith(pages);
    });
  });

  describe('checkAndUpdateStreamingOptions', () => {
    it('should push to streamingoptions', () => {
      const selectedAccountProducts = [
        {
          options: [
            {
              label: '',
              price: {} as PriceInterface,
              status: 'status',
              activeOptions: 'active',
              productInfo: {
                categories: ['streaming-bundles'],
              } as OmapiProduct,
            },
          ],
        } as Product,
      ];

      const returnValue = component['checkAndUpdateStreamingOptions'](selectedAccountProducts);

      expect(returnValue.length).toEqual(1);
    });

    it('should not push to streamingoptions', () => {
      const selectedAccountProducts = [
        {
          options: [
            {
              label: '',
              productInfo: {} as OmapiProduct,
              price: {} as PriceInterface,
              status: 'status',
              activeOptions: 'active',
              category: 'something',
            },
          ],
        } as Product,
      ];

      const returnValue = component['checkAndUpdateStreamingOptions'](selectedAccountProducts);

      expect(returnValue.length).toEqual(0);
    });

    it('should still work with no options', () => {
      const selectedAccountProducts = [{} as Product];

      const returnValue = component['checkAndUpdateStreamingOptions'](selectedAccountProducts);

      expect(returnValue.length).toEqual(0);
    });
  });

  describe('setIsProductUnderMove', () => {
    it('should set isUnderMove variable', () => {
      const selectedAccountProducts = [
        {
          identifier: '1',
          addressId: '2',
          status: ProductOverviewConstants.ACTIVATION_IN_PROGRESS_STATUS,
          options: [] as Option[],
        } as Product,
      ];

      const products = [
        {
          identifier: '1',
          addressId: '2',
          status: ProductOverviewConstants.ACTIVATION_IN_PROGRESS_STATUS,
          options: [] as Option[],
        } as Product,
        {
          identifier: '1',
          addressId: '3',
          options: [] as Option[],
        } as Product,
      ];

      component['setIsProductUnderMove'](selectedAccountProducts, products);

      const product = selectedAccountProducts.find((p) => p.addressId === '2');

      expect(product?.isUnderMove).toEqual(true);
    });
    it('should not set isUnderMove variable', () => {
      const selectedAccountProducts = [
        {
          identifier: '1',
          addressId: '2',
          status: ProductOverviewConstants.ACTIVATION_IN_PROGRESS_STATUS,
          options: [] as Option[],
        } as Product,
      ];

      const products = [
        {
          identifier: '1',
          addressId: '2',
          status: ProductOverviewConstants.ACTIVATION_IN_PROGRESS_STATUS,
          options: [] as Option[],
        } as Product,
        {
          identifier: '4',
          addressId: '3',
          options: [] as Option[],
        } as Product,
      ];

      component['setIsProductUnderMove'](selectedAccountProducts, products);

      const product = selectedAccountProducts.find((p) => p.addressId === '2');

      expect(product?.isUnderMove).toEqual(undefined);
    });
    it('should take the parent identifier', () => {
      const selectedAccountProducts = [
        {
          identifier: '1',
          addressId: '2',
          parentIdentifier: '5',
          status: ProductOverviewConstants.ACTIVATION_IN_PROGRESS_STATUS,
          options: [] as Option[],
        } as Product,
      ];

      const products = [
        {
          identifier: '1',
          addressId: '2',
          parentIdentifier: '5',
          status: ProductOverviewConstants.ACTIVATION_IN_PROGRESS_STATUS,
          options: [] as Option[],
        } as Product,
        {
          identifier: '4',
          addressId: '3',
          options: [] as Option[],
        } as Product,
        {
          identifier: '5',
          addressId: '3',
          options: [] as Option[],
        } as Product,
      ];

      component['setIsProductUnderMove'](selectedAccountProducts, products);

      const product = selectedAccountProducts.find((p) => p.addressId === '2');

      expect(product?.isUnderMove).toEqual(true);
    });
  });

  describe('getServiceURI', () => {
    it('should return correct url', () => {
      const base = ProductOverviewConstants.PRODUCT_SERVICE_PREFIX;
      const version = 'version/';
      const context = 'context/';
      const suffix = 'suffix/';
      const endpoint = 'endpoint/';
      const queryParams = 'queryParams';

      const returnValue = component['getServiceURI'](base, version, context, suffix, endpoint, queryParams);

      expect(returnValue).toEqual('/public/api/product-service/version/context/suffix/endpoint/queryParams');
    });
    it('should return correct url with no params', () => {
      const base = ProductOverviewConstants.PRODUCT_SERVICE_PREFIX;
      const version = 'version/';
      const context = 'context/';
      const suffix = 'suffix/';
      const endpoint = 'endpoint/';

      const returnValue = component['getServiceURI'](base, version, context, suffix, endpoint);

      expect(returnValue).toEqual('/public/api/product-service/version/context/suffix/endpoint/');
    });
  });

  describe('loadProducts', () => {
    it('should load products and set hasSalesScope', () => {
      jest.spyOn(component['ocapiService'], 'doGet').mockReturnValue(of(productsBase));
      jest.spyOn(component['loginService'], 'getLoginDetails').mockReturnValue(of(loginDetails as LoginDetails));
      jest.spyOn(component['productOverviewFacade'], 'setScopes');

      component['loadProducts']();

      expect(component['productOverviewFacade'].setScopes).toHaveBeenCalledWith({
        hasSalesScope: true,
        canManageProductHolding: true,
        isPrepaidLogin: false,
      });
    });

    it('should try to load but get an empty ocapiResponse', () => {
      jest.spyOn(component['ocapiService'], 'doGet').mockReturnValue(of(undefined));
      jest.spyOn(component['loginService'], 'getLoginDetails').mockReturnValue(of(loginDetails as LoginDetails));

      component['loadProducts']();
    });

    it('should go to error', () => {
      jest.spyOn(component['ocapiService'], 'doGet').mockReturnValue(throwError(() => new Error('there is an error')));
      jest.spyOn(component['loginService'], 'getLoginDetails').mockReturnValue(of(loginDetails as LoginDetails));
      jest.spyOn(component['messageService'], 'addMessage');

      component['loadProducts']();

      expect(component['messageService'].addMessage).toHaveBeenCalled();
    });

    it('should set hasSalesScope to false', () => {
      loginDetails.scopes = [];
      jest.spyOn(component['ocapiService'], 'doGet').mockReturnValue(of(productsBase));
      jest.spyOn(component['loginService'], 'getLoginDetails').mockReturnValue(of(loginDetails as LoginDetails));

      component['loadProducts']();

      expect(component.hasSalesScope).toEqual(false);
      expect(component.canManageProductHolding).toEqual(false);
    });

    it('should set hasSalesScope to false', () => {
      loginDetails.scopes = [];
      jest.spyOn(component['ocapiService'], 'doGet').mockReturnValue(of(productsBase));
      jest.spyOn(component['loginService'], 'getLoginDetails').mockReturnValue(of(loginDetails as LoginDetails));

      component['loadProducts']();

      expect(component.hasSalesScope).toEqual(false);
      expect(component.canManageProductHolding).toEqual(false);
    });

    it('should call tipcontracts', () => {
      loginDetails.scopes = [];
      jest.spyOn(component['ocapiService'], 'doGet').mockReturnValue(of(productsBase));
      jest.spyOn(component['loginService'], 'getLoginDetails').mockReturnValue(of(loginDetails as LoginDetails));
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      jest.spyOn(component as any, 'checkShowTipContracts').mockReturnValue(true);
      jest
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .spyOn(component as any, 'initTIPContracts')
        .mockReturnValue(of([{ planName: 'test', status: 'ACTIVE' } as TIPContractInterface]));

      component['loadProducts']();

      expect(component.tipContracts).toEqual([{ planName: 'test', status: 'ACTIVE' }]);
    });

    it('should not call tipcontracts', () => {
      loginDetails.scopes = [];
      jest.spyOn(component['ocapiService'], 'doGet').mockReturnValue(of(productsBase));
      jest.spyOn(component['loginService'], 'getLoginDetails').mockReturnValue(of(loginDetails as LoginDetails));
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      jest.spyOn(component as any, 'checkShowTipContracts').mockReturnValue(false);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any

      component['loadProducts']();

      expect(component.tipContracts).toEqual([]);
    });

    it('should call tipcontracts but with no status', () => {
      loginDetails.scopes = [];
      jest.spyOn(component['ocapiService'], 'doGet').mockReturnValue(of(productsBase));
      jest.spyOn(component['loginService'], 'getLoginDetails').mockReturnValue(of(loginDetails as LoginDetails));
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      jest.spyOn(component as any, 'checkShowTipContracts').mockReturnValue(true);
      jest
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .spyOn(component as any, 'initTIPContracts')
        .mockReturnValue(of([{ planName: 'test' } as TIPContractInterface]));

      component['loadProducts']();

      expect(component.tipContracts).toEqual([]);
    });

    it('should add productholding:p scope to scopes list if user is prepaid member', () => {
      loginDetails.role = 'MEMBER';
      loginDetails.username = '0480007984';
      loginDetails.isMember = function () {
        return true;
      };
      const productsBasePrepaid = ProductFactory.products();
      productsBasePrepaid[0].productInfo['hasCategory'] = function () {
        return true;
      };
      productsBasePrepaid[1].productInfo['hasCategory'] = function () {
        return true;
      };
      jest.spyOn(component['ocapiService'], 'doGet').mockReturnValue(of(productsBasePrepaid));
      jest.spyOn(component['loginService'], 'getLoginDetails').mockReturnValue(of(loginDetails as LoginDetails));
      jest.spyOn(component['productOverviewFacade'], 'setScopes');

      component['loadProducts']();

      expect(component['scopes']).toStrictEqual(['productholding', 'productholding:p']);
    });
  });

  describe('handlePhoneToGoProduct', () => {
    it('should set the phoneToGoNumbers if applicable', () => {
      const childProduct: Product = {
        productType: 'phone2go',
      } as Product;
      const products = [{ children: [childProduct] as Product[] }];
      const phoneToGo: PhoneToGo[] = [{ phoneNumber: '0470123456', active: true }];

      jest.spyOn(component['ocapiService'], 'doGet').mockReturnValue(of(phoneToGo));

      component['handlePhoneToGoProduct'](products as Product[]);

      expect(component['ocapiService'].doGet).toHaveBeenCalled();
      expect(component.phoneToGoNumbers).toEqual(phoneToGo);
    });
  });

  describe('filterAndSortSelectedAccountProducts', () => {
    const productA = {
      locationId: '1',
      status: ProductOverviewConstants.ACTIVE_STATUS,
      productInfo: { weight: 0 },
    } as Product;
    const productB = {
      locationId: '2',
      status: ProductOverviewConstants.ACTIVE_STATUS,
      productInfo: { weight: 0 },
    } as Product;
    const productC = { status: ProductOverviewConstants.ACTIVE_STATUS, productInfo: { weight: 0 } } as Product;
    const productD = { status: ProductOverviewConstants.DISCONNECTED_STATUS, productInfo: { weight: 0 } } as Product;
    const productE = { status: ProductOverviewConstants.ACTIVE_STATUS, productInfo: { weight: 420 } } as Product;
    const productF = { status: ProductOverviewConstants.ACTIVE_STATUS, productInfo: { weight: 69 } } as Product;

    it('should filter the products when the locationId is given', () => {
      const products: Product[] = [productA, productB, productC];

      const result = component['filterAndSortSelectedAccountProducts'](products as Product[], '1');

      expect(result).toEqual([productA]);
    });

    it('should filter the products when the locationId is NOT given', () => {
      const products: Product[] = [productA, productB, productC];

      const result = component['filterAndSortSelectedAccountProducts'](products as Product[], undefined);

      expect(result).toEqual([productA, productB, productC]);
    });

    it('should filter the products when the status is to be kept', () => {
      const products: Product[] = [productA, productB, productC, productD];

      const result = component['filterAndSortSelectedAccountProducts'](products as Product[], undefined);

      expect(result).toEqual([productA, productB, productC]);
    });

    it('should sort the products according to the weight of each', () => {
      const products: Product[] = [productA, productB, productC, productD, productE, productF];

      const result = component['filterAndSortSelectedAccountProducts'](products as Product[], undefined);

      expect(result).toEqual([productA, productB, productC, productF, productE]);
    });
  });

  describe('normalizedMsisdn', () => {
    it('format phone', () => {
      jest.spyOn(component['phoneNumberTransformService'], 'transform').mockReturnValue('0480007984');

      const pnumber = component['normalizedMsisdn']('32480007984');

      expect(pnumber).toEqual('0480007984');
    });
  });

  describe('checkShowTipContracts', () => {
    it('should return if the person is eligible for certain discounts', () => {
      jest.spyOn(component['pathCategorisationService'], 'getCustomerBrand').mockReturnValue('TELENET');
      const loginDetails = new LoginDetails(200);
      jest.spyOn(loginDetails, 'isFleetManager').mockReturnValue(false);
      jest.spyOn(loginDetails, 'isFleetUser').mockReturnValue(false);
      jest.spyOn(loginDetails, 'isMember').mockReturnValue(false);

      const returnValue = component['checkShowTipContracts'](loginDetails);

      expect(returnValue).toEqual(true);
    });

    it('should return false if the person is fleetmanager', () => {
      jest.spyOn(component['pathCategorisationService'], 'getCustomerBrand').mockReturnValue('TELENET');
      const loginDetails = new LoginDetails(200);
      jest.spyOn(loginDetails, 'isFleetManager').mockReturnValue(true);
      jest.spyOn(loginDetails, 'isFleetUser').mockReturnValue(false);
      jest.spyOn(loginDetails, 'isMember').mockReturnValue(false);

      const returnValue = component['checkShowTipContracts'](loginDetails);

      expect(returnValue).toEqual(false);
    });

    it('should return false if not TELENET branch', () => {
      jest.spyOn(component['pathCategorisationService'], 'getCustomerBrand').mockReturnValue('BASE');
      const loginDetails = new LoginDetails(200);
      jest.spyOn(loginDetails, 'isFleetManager').mockReturnValue(false);
      jest.spyOn(loginDetails, 'isFleetUser').mockReturnValue(false);
      jest.spyOn(loginDetails, 'isMember').mockReturnValue(false);

      const returnValue = component['checkShowTipContracts'](loginDetails);

      expect(returnValue).toEqual(false);
    });
  });

  describe('initTIPContracts', () => {
    it('should return observable to fetch tipcontracts', () => {
      jest
        .spyOn(component['promotionService'], 'getTIPContracts')
        .mockReturnValue(of([{ planName: 'test' }] as TIPContractInterface[]));

      const returnValue$ = component['initTIPContracts']();

      returnValue$.subscribe((value) => {
        expect(value[0].planName).toEqual('test');
      });

      expect(component['promotionService'].getTIPContracts).toHaveBeenCalled();
    });
  });

  describe('renderNoProductErrorMessage', () => {
    it('should return set error message', () => {
      const tipContracts: TIPContractInterface[] = [];
      const selectedAccountProducts: Product[] = [];
      jest.spyOn(component['messageService'], 'addMessage');

      component['renderNoProductErrorMessage'](tipContracts, selectedAccountProducts);

      expect(component['messageService'].addMessage).toHaveBeenCalled();
    });
    it('should return set no error message', () => {
      const tipContracts = [{} as TIPContractInterface];
      const selectedAccountProducts = [{} as Product];
      jest.spyOn(component['messageService'], 'addMessage');

      component['renderNoProductErrorMessage'](tipContracts, selectedAccountProducts);

      expect(component['messageService'].addMessage).not.toHaveBeenCalled();
    });
  });

  describe('getProfileDetailsByIdentityId', () => {
    it('should make the call to ProfileDetailsByIdentityId', () => {
      jest.spyOn(component['ocapiService'], 'doGet').mockReturnValue(of('test'));

      component['getProfileDetailsByIdentityId']('identityId');

      expect(component['ocapiService'].doGet).toHaveBeenCalledWith(
        new OcapiCallConfig(
          ProductOverviewConstants.MESSAGE_GROUP_CUSTOMER,
          `/public/api/customer-service/v1/identities/identityId`,
          profileDetailsByIdentityIDMapper
        )
      );
    });
  });
});
