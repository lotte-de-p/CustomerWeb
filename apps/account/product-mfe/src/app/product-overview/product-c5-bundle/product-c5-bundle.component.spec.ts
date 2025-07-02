import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductC5BundleComponent } from './product-c5-bundle.component';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { UrlService } from '@telenet/ng-lib-page';
import { OmapiProduct } from '@telenet/ng-lib-omapi';
import { Option, Product } from '../models/product.model';
import { BundleC5Contants } from '../constants/bundle-c5.constant';
import { Builder } from '@telenet/ng-lib-shared';
import { of } from 'rxjs';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

describe('ProductC5BundleComponent', () => {
  let component: ProductC5BundleComponent;
  let fixture: ComponentFixture<ProductC5BundleComponent>;
  let urlService: UrlService;
  let dialog: MatDialog;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ProductC5BundleComponent,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
      providers: [UrlService, { provide: 'Window', useValue: { location: {} } }],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductC5BundleComponent);
    urlService = TestBed.inject(UrlService);
    component = fixture.componentInstance;
    dialog = TestBed.inject(MatDialog);
    fixture.detectChanges();
    jest.spyOn(dialog, 'open').mockReturnValue({
      afterClosed: () => of(true),
    } as MatDialogRef<typeof component>);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set setSelectedProducts', () => {
    const products = [
      {
        isProductSuspended: () => true,
      } as Product,
    ];
    jest.spyOn(component, 'updateC5Sections').mockImplementation();

    component.setSelectedProducts = products;

    expect(component.isSuspendedPlan).toEqual(true);
    expect(component.updateC5Sections).toHaveBeenCalledTimes(1);
  });

  describe('manageOptions', () => {
    it('should redirect to correct url with all options', () => {
      jest.spyOn(urlService, 'redirectTo');
      const product = new Product();
      product.identifier = 'identifier';
      product.productType = 'productType';
      product.status = 'NOT_ACTIVE';
      product.productInfo = {} as OmapiProduct;
      product.productInfo.externalProductCode = 'externalProductCode';
      component.manageOptionUrl = 'manageOptionUrl';

      component.manageOptions(product);

      expect(urlService.redirectTo).toHaveBeenCalledWith(
        'manageOptionUrl?item=identifier&flow=product-options&producttype=productType&productcode=externalProductCode'
      );
    });

    it('should redirect to correct basic url', () => {
      jest.spyOn(urlService, 'redirectTo');
      const product = new Product();
      product.identifier = 'identifier';
      product.status = 'ACTIVE';
      component.manageOptionUrl = 'manageOptionUrl';

      component.manageOptions(product);

      expect(urlService.redirectTo).toHaveBeenCalledWith('manageOptionUrl?item=identifier&flow=product-options');
    });

    it('should redirect to correct url with productCode', () => {
      jest.spyOn(urlService, 'redirectTo');
      const product = new Product();
      product.identifier = 'identifier';
      product.status = 'ACTIVE';
      product.upgradePossibleTo = 'upgradePossibleTo';
      component.manageOptionUrl = 'manageOptionUrl';

      component.manageOptions(product);

      expect(urlService.redirectTo).toHaveBeenCalledWith(
        'manageOptionUrl?item=identifier&flow=product-options&productcode=upgradePossibleTo'
      );
    });

    it('should add bundle', () => {
      jest.spyOn(urlService, 'redirectTo');
      const product = new Product();
      product.identifier = 'identifier';
      product.status = 'ACTIVE';
      product.productType = 'productType';
      product.upgradePossibleTo = 'upgradePossibleTo';
      component.manageOptionUrl = 'manageOptionUrl';

      component.manageOptions(product, true, false);

      expect(urlService.redirectTo).toHaveBeenCalledWith(
        'manageOptionUrl?item=identifier&flow=product-options&producttype=bundle&category=productType&productcode=upgradePossibleTo'
      );
    });

    it('should add bundle without productType', () => {
      jest.spyOn(urlService, 'redirectTo');
      const product = new Product();
      product.identifier = 'identifier';
      product.status = 'ACTIVE';
      product.upgradePossibleTo = 'upgradePossibleTo';
      component.manageOptionUrl = 'manageOptionUrl';

      component.manageOptions(product, true, false);

      expect(urlService.redirectTo).toHaveBeenCalledWith(
        'manageOptionUrl?item=identifier&flow=product-options&producttype=bundle&productcode=upgradePossibleTo'
      );
    });

    it('should add bundle and entertainement', () => {
      jest.spyOn(urlService, 'redirectTo');
      const product = new Product();
      product.identifier = 'identifier';
      product.status = 'ACTIVE';
      product.productType = 'productType';
      product.upgradePossibleTo = 'upgradePossibleTo';
      component.manageOptionUrl = 'manageOptionUrl';

      component.manageOptions(product, true, true);

      expect(urlService.redirectTo).toHaveBeenCalledWith(
        'manageOptionUrl?item=identifier&flow=product-options&producttype=bundle&category=dtv&productcode=upgradePossibleTo'
      );
    });
  });
  describe('showManageOptions', () => {
    it('should return if button should be visible', () => {
      const product = new Product();
      product.productInfo = {} as OmapiProduct;
      product.productInfo.categories = ['post-paid-mobile'];
      product.productInfo.isYupProduct = false;
      product.isUnderMove = false;
      component.canManageProductHolding = true;

      const returnValue = component.showManageOptions(product);

      expect(returnValue).toBe(true);
    });

    it('should return true if prepaid-mobile', () => {
      const product = new Product();
      product.productInfo = {} as OmapiProduct;
      product.productInfo.categories = ['prepaid-mobile'];
      product.productInfo.isYupProduct = false;
      product.isUnderMove = false;
      component.canManageProductHolding = false;

      const returnValue = component.showManageOptions(product);

      expect(returnValue).toBe(true);
    });

    it('should return false if under move', () => {
      const product = new Product();
      product.productInfo = {} as OmapiProduct;
      product.productInfo.categories = ['prepaid-mobile'];
      product.productInfo.isYupProduct = false;
      product.isUnderMove = true;
      component.canManageProductHolding = false;

      const returnValue = component.showManageOptions(product);

      expect(returnValue).toBe(false);
    });

    it('should return correct value without categories', () => {
      const product = new Product();
      product.productInfo = {} as OmapiProduct;
      product.productInfo.isYupProduct = false;
      product.isUnderMove = true;
      component.canManageProductHolding = false;

      const returnValue = component.showManageOptions(product);

      expect(returnValue).toBe(false);
    });
  });

  describe('redirectToMarketingConfigurator', () => {
    beforeEach(() => {
      const product = new Product();
      product.status = 'ACTIVE';
      product.isUnderMove = false;
      product.productInfo = {} as OmapiProduct;
      product.productInfo.isYupProduct = true;
      product.productInfo.name = 'YUP';
      component.products = [product];
    });
    it('should pass intent while redirecting to marketing configurator', () => {
      component.intentRequired = true;
      jest.spyOn(urlService, 'redirectTo');
      jest.spyOn(component, 'isNewOneUpBundle').mockReturnValue(true);
      component.redirectToMarketingConfigurator(
        '/abc',
        'testIntent',
        Builder<Product>().hasOldSocialTariffDiscount(false).locationId('123456').build(),
        'click'
      );
      component.redirectToMarketingConfigurator(
        '/abc',
        'testIntent',
        Builder<Product>().hasOldSocialTariffDiscount(false).locationId('123456').build(),
        'click'
      );
      expect(urlService.redirectTo).toHaveBeenCalledWith('/abc?intent=testIntent&installationLocationId=123456');
    });

    it('should not pass intent while redirecting to marketing configurator', () => {
      component.intentRequired = false;
      jest.spyOn(urlService, 'redirectTo');
      component.redirectToMarketingConfigurator(
        '/abc',
        'testIntent',
        Builder<Product>().hasOldSocialTariffDiscount(false).locationId('123456').build(),
        'click'
      );
      expect(urlService.redirectTo).toHaveBeenCalledWith('/abc?installationLocationId=123456');
    });

    it('should pass intent while redirecting to marketing configurator - social tariff case', () => {
      component.intentRequired = true;
      jest.spyOn(urlService, 'redirectTo');
      jest.spyOn(component, 'isNewOneUpBundle').mockReturnValue(true);
      component.redirectToMarketingConfigurator(
        '/abc',
        'testIntent',
        Builder<Product>().hasOldSocialTariffDiscount(true).locationId('123456').build(),
        'click'
      );
      expect(urlService.redirectTo).toHaveBeenCalledWith('/abc?intent=testIntent&installationLocationId=123456');
    });

    it('should not pass intent while redirecting to marketing configurator - social tariff case', () => {
      component.intentRequired = false;
      jest.spyOn(urlService, 'redirectTo');
      component.redirectToMarketingConfigurator(
        '/abc',
        'testIntent',
        Builder<Product>().hasOldSocialTariffDiscount(true).locationId('123456').build(),
        'click'
      );
      expect(urlService.redirectTo).toHaveBeenCalledWith('/abc?installationLocationId=123456');
    });

    it('map sections depending on product', () => {
      component.c5Sections = BundleC5Contants.C5_SECTIONS;
      const product = {} as Product;
      component.showStreamingSection = true;
      jest.spyOn(component, 'hasSpecifiedProductTypes').mockReturnValue(false);
      jest.spyOn(component, 'hasPlanLevelOptions').mockReturnValue(true);

      component.updateC5Sections(product);

      const connectivity = component.c5Sections.find((section) => section.type === 'connectivity');
      const entertainment = component.c5Sections.find((section) => section.type === 'entertainment');
      const includedOptions = component.c5Sections.find((section) => section.type === 'includedOptions');
      const streaming = component.c5Sections.find((section) => section.type === 'streaming');

      expect(connectivity?.showSection).toEqual(true);
      expect(entertainment?.showSection).toEqual(false);
      expect(includedOptions?.showSection).toEqual(true);
      expect(streaming?.showSection).toEqual(true);
    });
  });

  describe('hasSpecifiedProductTypes', () => {
    it('should return allowed products', () => {
      const section = BundleC5Contants.C5_SECTIONS[0];
      const product = {
        children: [
          {
            productType: 'internet',
          } as Product,
        ],
      } as Product;

      const returnValue = component.hasSpecifiedProductTypes(section, product);

      expect(returnValue).toEqual(true);
    });
  });

  describe('hasPlanLevelOptions', () => {
    it('should check options', () => {
      const section = BundleC5Contants.C5_SECTIONS[0];
      const product = {
        options: [
          {
            isIncludedOption: true,
          } as Option,
        ],
      } as Product;
      jest.spyOn(component, 'showPlanLevelOption').mockReturnValue(true);

      const returnValue = component.hasPlanLevelOptions(section, product);

      expect(returnValue).toEqual(true);
    });
  });

  describe('showPlanLevelOption', () => {
    it('should check options with includedOptions', () => {
      const section = BundleC5Contants.C5_SECTIONS[0];
      const option = {
        isIncludedOption: true,
        status: 'ACTIVE',
      } as Option;

      const returnValue = component.showPlanLevelOption(section, option);

      expect(returnValue).toEqual(false);
    });

    it('should check options without includedOptions', () => {
      const section = BundleC5Contants.C5_SECTIONS[0];
      const option = {
        status: 'ACTIVE',
      } as Option;

      const returnValue = component.showPlanLevelOption(section, option);

      expect(returnValue).toEqual(true);
    });

    it('should check options without includedOptions - false', () => {
      const section = BundleC5Contants.C5_SECTIONS[1];
      const option = {
        status: 'NOT_ACTIVE',
      } as Option;

      const returnValue = component.showPlanLevelOption(section, option);

      expect(returnValue).toEqual(false);
    });

    it('should check options without includedOptions and NOT_ACTIVE status', () => {
      const section = BundleC5Contants.C5_SECTIONS[2];
      const option = {
        isIncludedOption: true,
        status: 'NOT_ACTIVE',
      } as Option;

      const returnValue = component.showPlanLevelOption(section, option);

      expect(returnValue).toEqual(true);
    });

    it('should check options without includedOptions and securityOption', () => {
      const section = BundleC5Contants.C5_SECTIONS[2];
      const option = {
        isIncludedOption: true,
        status: 'ACTIVE',
        productInfo: {
          subCategory: { name: 'Security Option' },
        } as OmapiProduct,
      } as Option;

      const returnValue = component.showPlanLevelOption(section, option);

      expect(returnValue).toEqual(true);
    });

    it('should check options without includedOptions and externalProductCode', () => {
      const section = BundleC5Contants.C5_SECTIONS[2];
      const option = {
        isIncludedOption: true,
        status: 'ACTIVE',
        productInfo: {
          subCategory: { name: 'Secuption' },
          externalProductCode: 'BANY0102',
        } as OmapiProduct,
      } as Option;

      const returnValue = component.showPlanLevelOption(section, option);

      expect(returnValue).toEqual(true);
    });

    it('should check options without includedOptions and externalProductCode - false', () => {
      const section = BundleC5Contants.C5_SECTIONS[2];
      const option = {
        isIncludedOption: true,
        status: 'ACTIVE',
        productInfo: {
          subCategory: { name: 'Secuption' },
        } as OmapiProduct,
      } as Option;

      const returnValue = component.showPlanLevelOption(section, option);

      expect(returnValue).toEqual(false);
    });
  });

  describe('hasActiveOrSuspendedProducts', () => {
    it('should return true if it has active products', () => {
      const plan = {
        children: [
          {
            status: 'ACTIVE',
          },
        ],
      } as Product;
      const returnValue = component.hasActiveOrSuspendedProducts(plan);

      expect(returnValue).toEqual(true);
    });

    it('should return true if it has suspended products', () => {
      const plan = {
        children: [
          {
            status: 'SUSPENDED',
          },
        ],
      } as Product;
      const returnValue = component.hasActiveOrSuspendedProducts(plan);

      expect(returnValue).toEqual(true);
    });
  });
  describe('showChangePlan', () => {
    it('should check if it can be shown', () => {
      const product = new Product();
      product.status = 'ACTIVE';
      product.isUnderMove = false;
      product.productInfo = {} as OmapiProduct;
      product.productInfo.isYupProduct = false;
      component.hasSalesScope = true;
      const returnValue = component.showChangePlan(product);

      expect(returnValue).toBe(true);
    });
  });
  describe('isNewOneUpBundle', () => {
    it('should return false if products array is empty', () => {
      const isNewOneUpBundle = component.isNewOneUpBundle();
      expect(isNewOneUpBundle).toBe(false);
    });

    it('should return false if no product with LimitedMobileVolumeSupported is found', () => {
      component.products = [
        {
          productInfo: {
            chars: [
              { key: 'internet_usage_limit', values: ['1'], unit: 'GB' },
              { key: 'internet_usage_initial_threshold', values: ['2'], unit: 'GB' },
            ],
          },
        },
        {
          productInfo: {
            chars: [{ key: 'LimitedMobileVolumeSupported', values: ['false'] }],
          },
        },
      ] as unknown as Product[];
      const isNewOneUpBundle = component.isNewOneUpBundle();
      expect(isNewOneUpBundle).toBe(false);
    });

    it('should return true if product with LimitedMobileVolumeSupported is found', () => {
      component.products = [
        {
          productInfo: {
            chars: [{ key: 'LimitedMobileVolumeSupported', values: ['true'] }],
          },
        },
      ] as unknown as Product[];
      const isNewOneUpBundle = component.isNewOneUpBundle();
      expect(isNewOneUpBundle).toBe(true);
    });

    it('should return true if multiple products with LimitedMobileVolumeSupported are found', () => {
      component.products = [
        {
          productInfo: {
            chars: [{ key: 'LimitedMobileVolumeSupported', values: ['true'] }],
          },
        },
        {
          productInfo: {
            chars: [{ key: 'LimitedMobileVolumeSupported', values: ['false'] }],
          },
        },
        {
          productInfo: {
            chars: [{ key: 'LimitedMobileVolumeSupported', values: ['true'] }],
          },
        },
      ] as unknown as Product[];
      const isNewOneUpBundle = component.isNewOneUpBundle();
      expect(isNewOneUpBundle).toBe(true);
    });
  });

  describe('handleRedirectToMarketingConfigurator', () => {
    it('should call redirectToMarketingConfigurator when Enter is pressed', () => {
      const event = new KeyboardEvent('keydown', { key: 'Enter' });
      jest.spyOn(component, 'redirectToMarketingConfigurator');
      const product = new Product();
      component.handleRedirectToMarketingConfigurator(event, 'url', 'intent', product, 'eventname');
      expect(component.redirectToMarketingConfigurator).toHaveBeenCalled();
    });

    it('should not call redirectToMarketingConfigurator when other key is pressed', () => {
      const event = new KeyboardEvent('keydown', { key: 'Space' });
      jest.spyOn(component, 'redirectToMarketingConfigurator');
      const product = new Product();
      component.handleRedirectToMarketingConfigurator(event, 'url', 'intent', product, 'eventname');
      expect(component.redirectToMarketingConfigurator).not.toHaveBeenCalled();
    });
  });

  describe('handleManageOptions', () => {
    it('should call manageOptions when Enter is pressed', () => {
      const event = new KeyboardEvent('keydown', { key: 'Enter' });
      jest.spyOn(component, 'manageOptions');
      const product = new Product();
      component.handleManageOptions(event, product, true, true);
      expect(component.manageOptions).toHaveBeenCalled();
    });

    it('should not call manageOptions when key other than Enter is pressed', () => {
      const event = new KeyboardEvent('keydown', { key: 'Space' });
      jest.spyOn(component, 'manageOptions');
      const product = new Product();
      component.handleManageOptions(event, product, true, true);
      expect(component.manageOptions).not.toHaveBeenCalled();
    });
  });
});
