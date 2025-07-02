import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSpecificationsComponent } from './product-specifications.component';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { UrlService } from '@telenet/ng-lib-page';
import { Product } from '../models/product.model';
import { EventInfo } from 'udl';
import { OmapiProduct } from '@telenet/ng-lib-omapi';

describe('ProductSpecificationsComponent', () => {
  let component: ProductSpecificationsComponent;
  let fixture: ComponentFixture<ProductSpecificationsComponent>;
  let urlService: UrlService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ProductSpecificationsComponent,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
      providers: [UrlService, { provide: 'Window', useValue: { location: {} } }],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductSpecificationsComponent);
    urlService = TestBed.inject(UrlService);
    component = fixture.componentInstance;

    component.product = {
      isProductActive: () => false,
      productInfo: {
        categories: [],
      },
    } as unknown as Product;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('toggleVisiblityFeature', () => {
    it('should toggle visibility', () => {
      component.product = new Product();
      component.product.productInfo = {} as OmapiProduct;
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
      component.showFeature = false;
      component.product.productInfo.productType = 'bundle';
      jest.spyOn(component['dataLayerService'], 'createEventInfo').mockReturnValue(eventInfo);
      jest.spyOn(component, 'getViewedProducts').mockReturnValue(returnGetViewed);
      jest.spyOn(component['productOverviewService'], 'addEventToDataLayer');

      component.toggleVisiblityFeature(true);

      expect(component['productOverviewService'].addEventToDataLayer).toHaveBeenCalledWith(
        eventInfo,
        'test',
        attributes
      );
      expect(component.showFeature).toBe(true);
    });
  });

  describe('changeTariffPlan', () => {
    it('should redirect to correct url', () => {
      jest.spyOn(urlService, 'redirectTo');
      component.changeTariffPlanUrl = 'changeTariffPlanUrl';
      const event = new Event('test');

      component.changeTariffPlan('test', event);

      expect(urlService.redirectTo).toHaveBeenCalledWith('changeTariffPlanUrl?flow=care&item=test');
    });
  });

  describe('manageOptions', () => {
    it('should redirect to correct url with all options', () => {
      jest.spyOn(urlService, 'redirectTo');
      component.product = new Product();
      component.product.identifier = 'identifier';
      component.product.productType = 'productType';
      component.product.status = 'NOT_ACTIVE';
      component.product.productInfo = {} as OmapiProduct;
      component.product.productInfo.externalProductCode = 'externalProductCode';
      component.manageOptionUrl = 'manageOptionUrl';
      const event = new Event('test');

      component.manageOptions(component.product, event);

      expect(urlService.redirectTo).toHaveBeenCalledWith(
        'manageOptionUrl?item=identifier&flow=product-options&producttype=productType&productcode=externalProductCode'
      );
    });

    it('should redirect to correct basic url', () => {
      jest.spyOn(urlService, 'redirectTo');
      component.product = new Product();
      component.product.identifier = 'identifier';
      component.product.status = 'ACTIVE';
      component.manageOptionUrl = 'manageOptionUrl';
      const event = new Event('test');

      component.manageOptions(component.product, event);

      expect(urlService.redirectTo).toHaveBeenCalledWith('manageOptionUrl?item=identifier&flow=product-options');
    });

    it('should redirect to correct url with productCode', () => {
      jest.spyOn(urlService, 'redirectTo');
      component.product = new Product();
      component.product.identifier = 'identifier';
      component.product.status = 'ACTIVE';
      component.manageOptionUrl = 'manageOptionUrl';
      component.product.upgradePossibleTo = 'upgradePossibleTo';
      const event = new Event('test');

      component.manageOptions(component.product, event);

      expect(urlService.redirectTo).toHaveBeenCalledWith(
        'manageOptionUrl?item=identifier&flow=product-options&productcode=upgradePossibleTo'
      );
    });
  });

  describe('showManageOptions', () => {
    it('should return if button should be visible', () => {
      component.product = new Product();
      component.product.productInfo = {} as OmapiProduct;
      component.product.productInfo.categories = ['post-paid-mobile'];
      component.product.productInfo.isYupProduct = false;
      component.product.isUnderMove = false;
      component.canManageProductHolding = true;

      const returnValue = component.showManageOptions(component.product);

      expect(returnValue).toBe(true);
    });

    it('should return true if prepaid-mobile', () => {
      component.product = new Product();
      component.product.productInfo = {} as OmapiProduct;
      component.product.productInfo.categories = ['prepaid-mobile'];
      component.product.productInfo.isYupProduct = false;
      component.product.isUnderMove = false;
      component.canManageProductHolding = false;

      const returnValue = component.showManageOptions(component.product);

      expect(returnValue).toBe(true);
    });

    it('should return false if under move', () => {
      component.product = new Product();
      component.product.productInfo = {} as OmapiProduct;
      component.product.productInfo.categories = ['prepaid-mobile'];
      component.product.productInfo.isYupProduct = false;
      component.product.isUnderMove = true;
      component.canManageProductHolding = false;

      const returnValue = component.showManageOptions(component.product);

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

  describe('onKeydown', () => {
    it('should toggle showFeature and call addPlanDetailViewEventInDataLayer when Enter is pressed', () => {
      const event = new KeyboardEvent('keydown', { key: 'Enter' });
      jest.spyOn(component, 'toggleVisiblityFeature');
      component.onKeydown(event, false);
      expect(component.toggleVisiblityFeature).toHaveBeenCalledWith(false);
    });

    it('should not toggle showFeature or call addPlanDetailViewEventInDataLayer when a key other than Enter is pressed', () => {
      const event = new KeyboardEvent('keydown', { key: 'Space' });
      jest.spyOn(component, 'toggleVisiblityFeature');
      component.onKeydown(event, false);
      expect(component.toggleVisiblityFeature).not.toHaveBeenCalled();
    });
  });
});
