import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductC5BundleChildComponent } from './product-c5-bundle-child.component';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { UrlService } from '@telenet/ng-lib-page';
import { Option, Product } from '../../models/product.model';
import { OmapiProduct, SpecificationInterface, SubCategoryInterface } from '@telenet/ng-lib-omapi';
import { ProductOverviewConstants } from '../../constants/product-overview.constant';
import { BundleC5Contants } from '../../constants/bundle-c5.constant';
import { EventInfo } from 'udl';

const POST_PAID_MOBILE = 'post-paid-mobile';
const PRE_PAID_MOBILE = 'prepaid-mobile';

describe('ProductC5BundleChildComponent', () => {
  let component: ProductC5BundleChildComponent;
  let fixture: ComponentFixture<ProductC5BundleChildComponent>;
  let urlService: UrlService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ProductC5BundleChildComponent,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
      providers: [UrlService, { provide: 'Window', useValue: { location: {} } }],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductC5BundleChildComponent);
    urlService = TestBed.inject(UrlService);
    component = fixture.componentInstance;

    component.product = {
      productInfo: {
        subCategory: {},
      } as OmapiProduct,
      isProductActivationInProgress: () => false,
      isProductDisconnectionInProgress: () => false,
      isProductModificationInProgress: () => false,
      isProductSuspended: () => false,
    } as Product;

    component.plan = {
      children: [] as Product[],
      productInfo: {
        subCategory: {},
      } as OmapiProduct,
      isProductActivationInProgress: () => false,
      isProductDisconnectionInProgress: () => false,
      isProductModificationInProgress: () => false,
      isProductSuspended: () => false,
    } as Product;

    component.section = {
      title: 'ng.product-overview.lbl.connectivity',
      productTypes: ['mobile', 'internet', 'telephone', 'phone2go'],
      showPlanLevelIncludedOptions: false,
      showPlanLevelNonIncludedOptions: true,
      type: 'connectivity',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('getProductIcon', () => {
    it('should return lock if localizedName is security-option', () => {
      const product = new Product();
      product.status = 'ACTIVE';
      product.isUnderMove = false;
      product.productInfo = {} as OmapiProduct;
      product.productInfo.subCategory = {} as SubCategoryInterface;
      product.productInfo.subCategory.name = 'Security Option';
      component.product = product;
      const returnValue = component.getProductIcon();
      expect(returnValue).toEqual('lock');
    });
  });
  describe('set productOrOption', () => {
    it('should set correct product when product is provided', () => {
      const product = {
        productType: 'test',
        productInfo: {
          getSortedSpecifications: () =>
            [
              { labelKey: 'A' } as SpecificationInterface,
              { labelKey: 'B' } as SpecificationInterface,
            ] as SpecificationInterface[],
        },
      } as Product;
      component.productOrOption = { product };

      expect(component.product).toEqual(product);
      expect(component.specifications).toEqual([{ labelKey: 'A' }, { labelKey: 'B' }]);
    });
    it('should set correct product when option is provided', () => {
      const productInfo = {
        productId: 'productId',
        getSortedSpecifications: () => [] as SpecificationInterface[],
        services: [
          {
            specifications: [
              {
                productType: 'optionProductType',
              },
            ],
          },
        ],
      } as OmapiProduct;
      const option = {
        productInfo: productInfo,
        productType: 'optionProductType',
      } as Option;
      component.productOrOption = { option };

      expect(component.product.productInfo).toEqual(productInfo);
      expect(component.product.productType).toEqual('optionProductType');
      expect(component.product.productInfo.services?.[0]?.specifications?.[0]?.productType).toEqual(
        'optionProductType'
      );
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
      component.product = product;
    });
    it('should pass intent while redirecting to marketing configurator', () => {
      component.intentRequired = true;
      jest.spyOn(urlService, 'redirectTo');
      component.redirectToMarketingConfigurator('/abc', 'testIntent', '123456', 'click');
      expect(urlService.redirectTo).toHaveBeenCalledWith('/abc?intent=testIntent&installationLocationId=123456');
    });

    it('should not pass intent while redirecting to marketing configurator', () => {
      component.intentRequired = false;
      jest.spyOn(urlService, 'redirectTo');
      component.redirectToMarketingConfigurator('/abc', 'testIntent', '123456', 'click', 'Connect 5');
      expect(urlService.redirectTo).toHaveBeenCalledWith('/abc?installationLocationId=123456');
    });
  });
  describe('showManageOptions', () => {
    it('should return if button should be visible', () => {
      const product = new Product();
      product.productInfo = {} as OmapiProduct;
      product.productInfo.categories = [POST_PAID_MOBILE];
      product.productInfo.isYupProduct = false;
      product.isUnderMove = false;
      component.canManageProductHolding = true;

      const returnValue = component.showManageOptions(product);

      expect(returnValue).toBe(true);
    });

    it('should return true if prepaid-mobile', () => {
      const product = new Product();
      product.productInfo = {} as OmapiProduct;
      product.productInfo.categories = [PRE_PAID_MOBILE];
      product.productInfo.isYupProduct = false;
      product.isUnderMove = false;
      component.canManageProductHolding = false;

      const returnValue = component.showManageOptions(product);

      expect(returnValue).toBe(true);
    });

    it('should return false if under move', () => {
      const product = new Product();
      product.productInfo = {} as OmapiProduct;
      product.productInfo.categories = [PRE_PAID_MOBILE];
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
  describe('manageOptions', () => {
    it('should redirect to correct url with all options', () => {
      jest.spyOn(urlService, 'redirectTo');
      const product = new Product();
      product.productType = 'productType';
      product.status = 'NOT_ACTIVE';
      product.productInfo = {} as OmapiProduct;
      product.productInfo.externalProductCode = 'externalProductCode';
      component.manageOptionUrl = 'manageOptionUrl';

      component.manageOptions('identifier', product);

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

      component.manageOptions('identifier', product);

      expect(urlService.redirectTo).toHaveBeenCalledWith('manageOptionUrl?item=identifier&flow=product-options');
    });

    it('should redirect to correct url with productCode', () => {
      jest.spyOn(urlService, 'redirectTo');
      const product = new Product();
      product.identifier = 'identifier';
      product.status = 'ACTIVE';
      product.upgradePossibleTo = 'upgradePossibleTo';
      component.manageOptionUrl = 'manageOptionUrl';

      component.manageOptions('identifier', product);

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

      component.manageOptions('identifier', product, true);

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

      component.manageOptions('identifier', product, true);

      expect(urlService.redirectTo).toHaveBeenCalledWith(
        'manageOptionUrl?item=identifier&flow=product-options&producttype=bundle&productcode=upgradePossibleTo'
      );
    });
  });
  describe('hasActiveOrSuspendedProducts', () => {
    it('should return true', () => {
      const product = new Product();
      product.children = [
        {
          status: ProductOverviewConstants.ACTIVE_STATUS,
        } as Product,
      ];

      const returnValue = component.hasActiveOrSuspendedProducts(product);

      expect(returnValue).toBe(true);
    });

    it('should return true when suspended', () => {
      const product = new Product();
      product.children = [
        {
          status: ProductOverviewConstants.SUSPENDED_STATUS,
        } as Product,
      ];

      const returnValue = component.hasActiveOrSuspendedProducts(product);

      expect(returnValue).toBe(true);
    });

    it('should return false', () => {
      const product = new Product();
      product.children = [
        {
          status: ProductOverviewConstants.ACTIVATION_IN_PROGRESS_STATUS,
        } as Product,
      ];

      const returnValue = component.hasActiveOrSuspendedProducts(product);

      expect(returnValue).toBe(false);
    });
  });
  describe('getViewedProducts', () => {
    it('should return product', () => {
      component.product = new Product();
      component.product.productInfo = {} as OmapiProduct;
      component.product.productInfo.productType = 'INTERNET';
      component.product.productInfo.externalProductCode = 'INTF0200';

      const returnGetViewed = [
        {
          productInfo: {
            productType: 'INTERNET',
            productID: 'INTF0200',
          },
        },
      ];

      const returnValue = component.getViewedProducts(component.product.productInfo);

      expect(returnValue).toEqual(returnGetViewed);
    });
    it('should return empty array', () => {
      component.product = new Product();

      const returnValue = component.getViewedProducts(component.product.productInfo);

      expect(returnValue).toEqual([]);
    });
  });

  describe('showManageOptionsButton', () => {
    it('should return true if it can be shown', () => {
      const plan = {} as Product;
      const product = {} as Product;
      const section = BundleC5Contants.C5_SECTIONS[0];
      jest.spyOn(component, 'showManageOptions').mockReturnValue(true);

      const returnValue = component.showManageOptionsButton(plan, section, product);

      expect(returnValue).toEqual(true);
    });

    it('should return true if it can be shown when section type is includedOptions', () => {
      const plan = {} as Product;
      const product = {
        productType: 'productType',
      } as Product;
      const section = BundleC5Contants.C5_SECTIONS[2];
      jest.spyOn(component, 'showManageOptions').mockReturnValue(false);

      const returnValue = component.showManageOptionsButton(plan, section, product);

      expect(returnValue).toEqual(true);
    });

    it('should return true if section type is streaming', () => {
      const plan = {} as Product;
      const product = {
        productType: 'telephone',
      } as Product;
      const section = BundleC5Contants.C5_SECTIONS[3];
      jest.spyOn(component, 'showManageOptions').mockReturnValue(false);

      const returnValue = component.showManageOptionsButton(plan, section, product);

      expect(returnValue).toEqual(true);
    });
  });

  describe('filterMobileSpecs', () => {
    it('should return if it can be filtered based on serviceType', () => {
      const spec = {
        serviceType: 'mobile_internet',
      } as SpecificationInterface;
      component.product = {
        productInfo: {
          productType: 'data-only-mobile-line',
        },
      } as Product;

      const returnValue = component.filterMobileSpecs(spec);

      expect(returnValue).toEqual(true);
    });
    it('should return if it can be filtered based on serviceType - mobile_calling', () => {
      const spec = {
        serviceType: 'mobile_calling',
      } as SpecificationInterface;
      component.product = {
        productInfo: {
          productType: 'data',
        },
      } as Product;

      const returnValue = component.filterMobileSpecs(spec);

      expect(returnValue).toEqual(true);
    });
    it('should return false when comparing', () => {
      const spec = {
        serviceType: 'mobile',
      } as SpecificationInterface;
      component.product = {
        productInfo: {
          productType: 'data',
        },
      } as Product;

      const returnValue = component.filterMobileSpecs(spec);

      expect(returnValue).toEqual(false);
    });
  });

  describe('isNetflixProductActivationInProgress', () => {
    it('should return true if productId includes STRM', () => {
      component.product = {
        isProductActivationInProgress: () => true,
        productInfo: {
          productId: 'STRM',
        },
      } as Product;

      const returnValue = component.isNetflixProductActivationInProgress();

      expect(returnValue).toEqual(true);
    });
    it('should return false if productId does not include STRM', () => {
      component.product = {
        isProductActivationInProgress: () => true,
        productInfo: {
          productId: 'test',
        },
      } as Product;

      const returnValue = component.isNetflixProductActivationInProgress();

      expect(returnValue).toEqual(false);
    });
  });

  describe('addPlanDetailViewEventInDataLayer', () => {
    it('should add plan detail to event layer', () => {
      component.product = new Product();
      component.product.productInfo = {} as OmapiProduct;
      component.showFeature = true;
      const eventInfo = new EventInfo();
      const returnGetViewed = [
        {
          productInfo: {
            productType: 'INTERNET',
            productID: 'INTF0200',
          },
        },
      ];
      const attributes = { product: returnGetViewed };
      component.componentInstanceID = 'test';
      component.product.productInfo.productType = 'bundle';
      jest.spyOn(component['dataLayerService'], 'createEventInfo').mockReturnValue(eventInfo);
      jest.spyOn(component, 'getViewedProducts').mockReturnValue(returnGetViewed);
      jest.spyOn(component['productOverviewService'], 'addEventToDataLayer');

      component.addPlanDetailViewEventInDataLayer();

      expect(component['productOverviewService'].addEventToDataLayer).toHaveBeenCalledWith(
        eventInfo,
        'test',
        attributes
      );
    });
    it('should add plan detail to event layer - no bundle', () => {
      component.product = new Product();
      component.product.productInfo = {} as OmapiProduct;
      component.showFeature = true;
      const eventInfo = new EventInfo();
      const returnGetViewed = [
        {
          productInfo: {
            productType: 'INTERNET',
            productID: 'INTF0200',
          },
        },
      ];
      const attributes = { product: returnGetViewed };
      component.componentInstanceID = 'test';
      component.product.productInfo.productType = 'test';
      jest.spyOn(component['dataLayerService'], 'createEventInfo').mockReturnValue(eventInfo);
      jest.spyOn(component, 'getViewedProducts').mockReturnValue(returnGetViewed);
      jest.spyOn(component['productOverviewService'], 'addEventToDataLayer');

      component.addPlanDetailViewEventInDataLayer();

      expect(component['productOverviewService'].addEventToDataLayer).toHaveBeenCalledWith(
        eventInfo,
        'test',
        attributes
      );
      expect(component.getViewedProducts).toHaveBeenCalledWith(component.product.productInfo);
    });
  });

  describe('redirectToOrderSimSalesFlow', () => {
    it('redirect to correct url', () => {
      const eventInfo = new EventInfo();
      jest.spyOn(component['dataLayerService'], 'createEventInfo').mockReturnValue(eventInfo);
      jest.spyOn(component['productOverviewService'], 'addEventToDataLayer');
      jest.spyOn(component['urlService'], 'redirectTo');

      component.redirectToOrderSimSalesFlow(
        'url',
        'flow',
        'intent',
        'identifier',
        'productType',
        'locationId',
        'eventname'
      );

      expect(component['urlService'].redirectTo).toHaveBeenCalledWith(
        'url?flow=flow&intent=intent&item=identifier&producttype=productType&locationId=locationId'
      );
      expect(component['productOverviewService'].addEventToDataLayer).toHaveBeenCalled();
    });
  });

  describe('onKeydown', () => {
    it('should toggle showFeature and call addPlanDetailViewEventInDataLayer when Enter is pressed', () => {
      const event = new KeyboardEvent('keydown', { key: 'Enter' });
      jest.spyOn(component, 'addPlanDetailViewEventInDataLayer');
      component.onKeydown(event);
      expect(component.showFeature).toBe(true);
      expect(component.addPlanDetailViewEventInDataLayer).toHaveBeenCalled();
    });

    it('should not toggle showFeature or call addPlanDetailViewEventInDataLayer when a key other than Enter is pressed', () => {
      const event = new KeyboardEvent('keydown', { key: 'Space' });
      jest.spyOn(component, 'addPlanDetailViewEventInDataLayer');
      component.onKeydown(event);
      expect(component.showFeature).toBe(false);
      expect(component.addPlanDetailViewEventInDataLayer).not.toHaveBeenCalled();
    });
  });

  describe('handleManageOptions', () => {
    it('should call manageOptions when Enter is pressed', () => {
      const event = new KeyboardEvent('keydown', { key: 'Enter' });
      jest.spyOn(component, 'manageOptions');
      const product = new Product();
      component.handleManageOptions(event, '12345', product);
      expect(component.manageOptions).toHaveBeenCalled();
    });

    it('should not toggle showFeature or call addPlanDetailViewEventInDataLayer when a key other than Enter is pressed', () => {
      const event = new KeyboardEvent('keydown', { key: 'Space' });
      jest.spyOn(component, 'manageOptions');
      const product = new Product();
      component.handleManageOptions(event, '12345', product);
      expect(component.manageOptions).not.toHaveBeenCalled();
    });
  });

  describe('handleRedirectToOrderSimSalesFlow', () => {
    it('should call redirectToOrderSimSalesFlow when Enter is pressed', () => {
      const event = new KeyboardEvent('keydown', { key: 'Enter' });
      jest.spyOn(component, 'redirectToOrderSimSalesFlow');
      component.handleRedirectToOrderSimSalesFlow(
        event,
        'url',
        'flow',
        'intent',
        'identifier',
        'productType',
        'locationId',
        'eventname'
      );
      expect(component.redirectToOrderSimSalesFlow).toHaveBeenCalled();
    });

    it('should not call redirectToOrderSimSalesFlow when any other key is pressed', () => {
      const event = new KeyboardEvent('keydown', { key: 'Space' });
      jest.spyOn(component, 'redirectToOrderSimSalesFlow');
      component.handleRedirectToOrderSimSalesFlow(
        event,
        'url',
        'flow',
        'intent',
        'identifier',
        'productType',
        'locationId',
        'eventname'
      );
      expect(component.redirectToOrderSimSalesFlow).not.toHaveBeenCalled();
    });
  });

  describe('handleRedirectToMarketingConfigurator', () => {
    it('should call redirectToMarketingConfigurator when Enter is pressed', () => {
      const event = new KeyboardEvent('keydown', { key: 'Enter' });
      jest.spyOn(component, 'redirectToMarketingConfigurator');

      component.handleRedirectToMarketingConfigurator(event, 'url', 'intent', 'locationId', 'eventname', 'productType');
      expect(component.redirectToMarketingConfigurator).toHaveBeenCalled();
    });

    it('should not call redirectToMarketingConfigurator when any other key is pressed', () => {
      const event = new KeyboardEvent('keydown', { key: 'Space' });
      jest.spyOn(component, 'redirectToMarketingConfigurator');
      component.handleRedirectToMarketingConfigurator(event, 'url', 'intent', 'locationId', 'eventname', 'productType');
      expect(component.redirectToMarketingConfigurator).not.toHaveBeenCalled();
    });
  });
});
