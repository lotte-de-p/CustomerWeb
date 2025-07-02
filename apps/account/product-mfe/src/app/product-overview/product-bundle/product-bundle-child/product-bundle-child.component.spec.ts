import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBundleChildComponent } from './product-bundle-child.component';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { UrlService } from '@telenet/ng-lib-page';
import { Product, Option } from '../../models/product.model';
import { OmapiProduct, ServiceInterface, SpecificationInterface, SubCategoryInterface } from '@telenet/ng-lib-omapi';
import { ProductSpecificationsComponent } from '../../../product-overview/product-specifications/product-specifications.component';

describe('ProductBundleChildComponent', () => {
  let component: ProductBundleChildComponent;
  let fixture: ComponentFixture<ProductBundleChildComponent>;
  let urlService: UrlService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ProductBundleChildComponent,
        ProductSpecificationsComponent,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
      providers: [ProductSpecificationsComponent, UrlService, { provide: 'Window', useValue: { location: {} } }],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductBundleChildComponent);
    urlService = TestBed.inject(UrlService);
    component = fixture.componentInstance;
    const product = new Product();
    const childProduct = new Product();
    product.status = 'ACTIVE';
    product.isUnderMove = false;
    product.identifier = '12345';
    product.productInfo = {} as OmapiProduct;
    product.productInfo.isYupProduct = false;
    product.productInfo.categories = ['prepaid-mobile'];
    product.productType = 'mobile';
    childProduct.status = 'active';
    product.children = [childProduct];
    component.product = product;
    component.plan = product;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('productOrOption', () => {
    it('should set a product when providing option', () => {
      const option = {
        productInfo: {
          services: [
            {
              specifications: [
                {
                  productType: undefined,
                },
              ] as SpecificationInterface[],
            },
          ] as ServiceInterface[],
        } as OmapiProduct,
        productType: 'productType',
      } as Option;

      component.productOrOption = { option };

      expect(component.product.productType).toEqual('productType');
      expect(component.product?.productInfo?.services?.[0].specifications?.[0].productType).toEqual('productType');
    });
    it('should set a product when providing option', () => {
      const product = new Product();
      product.productType = 'type';
      product.id = 'id';

      component.productOrOption = { product };

      expect(component.product.productType).toEqual('type');
      expect(component.product?.id).toEqual('id');
    });
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

  describe('showChangePlan', () => {
    it('should check if it can be shown', () => {
      const product = new Product();
      product.status = 'ACTIVE';
      product.isUnderMove = false;
      product.productInfo = {} as OmapiProduct;
      product.productInfo.isYupProduct = false;
      component.product = product;
      component.hasSalesScope = true;
      const returnValue = component.showChangePlan(product);

      expect(returnValue).toBe(true);
    });
  });

  describe('changeTariffPlan', () => {
    it('should redirect to correct url', () => {
      jest.spyOn(urlService, 'redirectTo');
      component.changeTariffPlanUrl = 'changeTariffPlanUrl';

      component.changeTariffPlan('test');

      expect(urlService.redirectTo).toHaveBeenCalledWith('changeTariffPlanUrl?flow=care&item=test');
    });
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
      component.product = product;
      component.manageOptionUrl = 'manageOptionUrl';

      component.manageOptions('12345', product);

      expect(urlService.redirectTo).toHaveBeenCalledWith(
        'manageOptionUrl?item=12345&flow=product-options&producttype=productType&productcode=externalProductCode'
      );
    });

    it('should redirect to correct basic url', () => {
      jest.spyOn(urlService, 'redirectTo');
      const product = new Product();
      product.identifier = 'identifier';
      product.status = 'ACTIVE';
      component.product = product;
      component.manageOptionUrl = 'manageOptionUrl';

      component.manageOptions('12345', product);

      expect(urlService.redirectTo).toHaveBeenCalledWith('manageOptionUrl?item=12345&flow=product-options');
    });

    it('should redirect to correct url with productCode', () => {
      jest.spyOn(urlService, 'redirectTo');
      const product = new Product();
      product.identifier = 'identifier';
      product.status = 'ACTIVE';
      product.upgradePossibleTo = 'upgradePossibleTo';
      component.product = product;
      component.manageOptionUrl = 'manageOptionUrl';

      component.manageOptions('12345', product);

      expect(urlService.redirectTo).toHaveBeenCalledWith(
        'manageOptionUrl?item=12345&flow=product-options&productcode=upgradePossibleTo'
      );
    });
  });

  describe('showManageOptions', () => {
    beforeEach(() => {
      const product = new Product();
      product.status = 'ACTIVE';
      product.isUnderMove = false;
      product.productInfo = {} as OmapiProduct;
      product.productInfo.isYupProduct = true;
      product.productInfo.name = 'YUP';
      component.product = product;
      component.plan = product;
    });
    it('should return if button should be visible', () => {
      component.canManageProductHolding = true;
      component.plan.productInfo.isYupProduct = false;
      const returnValue = component.showManageOptions();

      expect(returnValue).toBe(true);
    });

    it('should return true if prepaid-mobile', () => {
      component.canManageProductHolding = false;
      component.plan.productInfo.categories = ['prepaid-mobile'];
      component.plan.productInfo.isYupProduct = false;
      const returnValue = component.showManageOptions();

      expect(returnValue).toBe(true);
    });

    it('should return false if under move', () => {
      component.canManageProductHolding = false;
      component.plan.isUnderMove = true;
      const returnValue = component.showManageOptions();

      expect(returnValue).toBe(false);
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

    it('should not call redirectToOrderSimSalesFlow when Space is pressed', () => {
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
});
