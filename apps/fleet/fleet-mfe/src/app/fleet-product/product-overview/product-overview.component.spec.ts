import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { PhoneNumberTransformService } from '@telenet/ng-lib-layout';
import { LoginDetails, LoginModule } from '@telenet/ng-lib-ocapi';
import { LoaderModule, LoaderService, UrlService } from '@telenet/ng-lib-page';
import { of, throwError } from 'rxjs';
import { ProductOverviewConstants } from '../../shared/common/constants/product-overview.constant';
import { ProductFactory } from './factory/product.factory';
import { ProductOverviewComponent } from './product-overview.component';
import { EffectsModule } from '@ngrx/effects';
import { expect, jest } from '@jest/globals';
import { NgxsModule } from '@ngxs/store';
import { Option, Product } from '../../fleet-user/shared/models/product.model';
import { CustomerAccountService } from '../../fleet-user/shared/services/customer/customer-account.service';

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
} as LoginDetails;

describe('ProductOverviewComponent', () => {
  let component: ProductOverviewComponent;
  let fixture: ComponentFixture<ProductOverviewComponent>;
  let loaderService: LoaderService;
  let customerAccountService: CustomerAccountService;

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
        NgxsModule.forRoot(),
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
        LoaderService,
        { provide: CustomerAccountService, useValue: { isFleetUserOrderingEnabled: jest.fn() } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductOverviewComponent);
    loaderService = TestBed.inject(LoaderService);
    customerAccountService = TestBed.inject(CustomerAccountService);
    component = fixture.componentInstance;
    fixture.detectChanges();
    jest.spyOn(loaderService, 'start');
    jest.spyOn(loaderService, 'stop');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call loadProducts and add listener for account selector', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    jest.spyOn(component as any, 'loadProducts');
    component.isAccountSelectorConsumer = true;

    component.initAfterLoggedIn(loginDetails);

    expect(component['loadProducts']).toHaveBeenCalled();
  });

  describe('initAfterLoggedIn', () => {
    it('should call loadProducts', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      jest.spyOn(component as any, 'loadProducts');

      component.initAfterLoggedIn(loginDetails);

      expect(component['loadProducts']).toHaveBeenCalled();
    });

    it('should call isFleetOrderingEnabled when splitbill20Addoptions is enabled', () => {
      component.isSplitBill20AddOptionsEnabled = true;

      component.initAfterLoggedIn(loginDetails);

      expect(customerAccountService.isFleetUserOrderingEnabled).toHaveBeenCalled();
    });

    it('should call isFleetOrderingEnabled when splitbill20Removeoptions is enabled', () => {
      component.isSplitBill20RemoveOptionsEnabled = true;

      component.initAfterLoggedIn(loginDetails);

      expect(customerAccountService.isFleetUserOrderingEnabled).toHaveBeenCalled();
    });

    it('should call isFleetOrderingEnabled when splitbill20ChangeTariffPlan is enabled', () => {
      component.isSplitBill20ChangeTariffPlanEnabled = true;

      component.initAfterLoggedIn(loginDetails);

      expect(customerAccountService.isFleetUserOrderingEnabled).toHaveBeenCalled();
    });

    it('should not call isFleetOrderingEnabled when splitbill20FeatureFlags are disabled', () => {
      component.isSplitBill20RemoveOptionsEnabled = false;
      component.isSplitBill20AddOptionsEnabled = false;
      component.isSplitBill20ChangeTariffPlanEnabled = false;

      component.initAfterLoggedIn(loginDetails);

      expect(customerAccountService.isFleetUserOrderingEnabled).not.toHaveBeenCalled();
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

      expect(returnValue).toEqual('/public/api/fleet-product-service/version/context/suffix/endpoint/queryParams');
    });
    it('should return correct url with no params', () => {
      const base = ProductOverviewConstants.PRODUCT_SERVICE_PREFIX;
      const version = 'version/';
      const context = 'context/';
      const suffix = 'suffix/';
      const endpoint = 'endpoint/';

      const returnValue = component['getServiceURI'](base, version, context, suffix, endpoint);

      expect(returnValue).toEqual('/public/api/fleet-product-service/version/context/suffix/endpoint/');
    });
  });

  describe('loadProducts', () => {
    it('should load products and set hasSalesScope', () => {
      jest.spyOn(component['ocapiService'], 'doGet').mockReturnValue(of(productsBase));
      jest.spyOn(component['productOverviewFacade'], 'setScopes');

      component['loadProducts'](loginDetails);

      expect(component['productOverviewFacade'].setScopes).toHaveBeenCalledWith({
        hasSalesScope: true,
        canManageProductHolding: true,
        isPrepaidLogin: false,
      });
    });

    it('should try to load but get an empty ocapiResponse', () => {
      jest.spyOn(component['ocapiService'], 'doGet').mockReturnValue(of(undefined));

      component['loadProducts'](loginDetails);
    });

    it('should go to error', () => {
      jest.spyOn(component['ocapiService'], 'doGet').mockReturnValue(throwError(() => new Error('there is an error')));
      jest.spyOn(component['messageService'], 'addMessage');

      component['loadProducts'](loginDetails);

      expect(component['messageService'].addMessage).toHaveBeenCalled();
    });

    it('should set hasSalesScope to false', () => {
      loginDetails.scopes = [];
      jest.spyOn(component['ocapiService'], 'doGet').mockReturnValue(of(productsBase));

      component['loadProducts'](loginDetails);

      expect(component.hasSalesScope).toEqual(false);
      expect(component.canManageProductHolding).toEqual(false);
    });

    it('should set hasSalesScope to false', () => {
      loginDetails.scopes = [];
      jest.spyOn(component['ocapiService'], 'doGet').mockReturnValue(of(productsBase));

      component['loadProducts'](loginDetails);

      expect(component.hasSalesScope).toEqual(false);
      expect(component.canManageProductHolding).toEqual(false);
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
      jest.spyOn(component['productOverviewFacade'], 'setScopes');

      component['loadProducts'](loginDetails);

      expect(component['scopes']).toStrictEqual(['productholding', 'productholding:p']);
    });

    it('loaderService should be called on loadProducts', () => {
      loginDetails.scopes = [];
      jest.spyOn(component['ocapiService'], 'doGet').mockReturnValue(of(productsBase));

      component['loadProducts'](loginDetails);

      expect(loaderService.start).toHaveBeenCalled();
      expect(loaderService.stop).toHaveBeenCalled();
    });
  });

  describe('normalizedMsisdn', () => {
    it('format phone', () => {
      jest.spyOn(component['phoneNumberTransformService'], 'transform').mockReturnValue('0480007984');

      const pnumber = component['normalizedMsisdn']('32480007984');

      expect(pnumber).toEqual('0480007984');
    });
  });

  describe('renderNoProductErrorMessage', () => {
    it('should return set error message', () => {
      const selectedAccountProducts: Product[] = [];
      jest.spyOn(component['messageService'], 'addMessage');

      component['renderNoProductErrorMessage'](selectedAccountProducts);

      expect(component['messageService'].addMessage).toHaveBeenCalled();
    });
    it('should return set no error message', () => {
      const selectedAccountProducts = [{} as Product];
      jest.spyOn(component['messageService'], 'addMessage');

      component['renderNoProductErrorMessage'](selectedAccountProducts);

      expect(component['messageService'].addMessage).not.toHaveBeenCalled();
    });
  });
});
