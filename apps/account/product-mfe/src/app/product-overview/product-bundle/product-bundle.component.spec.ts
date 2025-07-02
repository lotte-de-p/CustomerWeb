import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBundleComponent } from './product-bundle.component';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { UrlService } from '@telenet/ng-lib-page';
import { Product } from '../models/product.model';
import { OmapiProduct } from '@telenet/ng-lib-omapi';
import { ProductOverviewConstants } from '../constants/product-overview.constant';
import { Builder } from '@telenet/ng-lib-shared';
import { jest } from '@jest/globals';
import { of } from 'rxjs';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

describe('ProductBundleComponent', () => {
  let component: ProductBundleComponent;
  let fixture: ComponentFixture<ProductBundleComponent>;
  let urlService: UrlService;
  let dialog: MatDialog;
  const installationLocationId = '/abc?installationLocationId=123456';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ProductBundleComponent,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
      providers: [UrlService, { provide: 'Window', useValue: { location: {} } }],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductBundleComponent);
    urlService = TestBed.inject(UrlService);
    dialog = TestBed.inject(MatDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
    jest.spyOn(dialog, 'open').mockReturnValue({
      afterClosed: () => of(true),
    } as MatDialogRef<typeof component>);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
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
  });

  describe('showManageOptions', () => {
    it('should return if button should be visible', () => {
      const product = new Product();
      product.productInfo = {} as OmapiProduct;
      product.productInfo.categories = ['post-paid-mobile'];
      product.productInfo.hasCategory = () => false;
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
      product.productInfo.hasCategory = () => true;
      product.productInfo.isYupProduct = false;
      product.isUnderMove = false;
      component.canManageProductHolding = false;

      jest.spyOn(product.productInfo, 'hasCategory');

      const returnValue = component.showManageOptions(product);

      expect(returnValue).toBe(true);
    });

    it('should return false if under move', () => {
      const product = new Product();
      product.productInfo = {} as OmapiProduct;
      product.productInfo.categories = ['prepaid-mobile'];
      product.productInfo.hasCategory = () => false;
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
      product.productInfo.hasCategory = () => false;

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
      component.redirectToMarketingConfigurator(
        '/abc',
        'testIntent',
        Builder<Product>().locationId('123456').hasOldSocialTariffDiscount(false).build(),
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
        Builder<Product>().locationId('123456').hasOldSocialTariffDiscount(false).build(),
        'click'
      );
      expect(urlService.redirectTo).toHaveBeenCalledWith(installationLocationId);
    });

    it('should not pass intent when empty while redirecting to marketing configurator', () => {
      component.intentRequired = true;
      jest.spyOn(urlService, 'redirectTo');
      component.redirectToMarketingConfigurator(
        '/abc',
        '',
        Builder<Product>().locationId('123456').hasOldSocialTariffDiscount(false).build(),
        'click'
      );
      expect(urlService.redirectTo).toHaveBeenCalledWith(installationLocationId);
    });

    it('should pass intent while redirecting to marketing configurator - social discount case', () => {
      component.intentRequired = true;
      jest.spyOn(urlService, 'redirectTo');
      component.redirectToMarketingConfigurator(
        '/abc',
        'testIntent',
        Builder<Product>().locationId('123456').hasOldSocialTariffDiscount(true).build(),
        'click'
      );
      expect(dialog.open).toHaveBeenCalled();
      expect(urlService.redirectTo).toHaveBeenCalledWith('/abc?intent=testIntent&installationLocationId=123456');
    });

    it('should not pass intent while redirecting to marketing configurator - social discount case', () => {
      component.intentRequired = false;
      jest.spyOn(urlService, 'redirectTo');
      component.redirectToMarketingConfigurator(
        '/abc',
        'testIntent',
        Builder<Product>().locationId('123456').hasOldSocialTariffDiscount(true).build(),
        'click'
      );
      expect(dialog.open).toHaveBeenCalled();
      expect(urlService.redirectTo).toHaveBeenCalledWith(installationLocationId);
    });

    it('should not pass intent when empty while redirecting to marketing configurator - social discount case', () => {
      component.intentRequired = true;
      jest.spyOn(urlService, 'redirectTo');
      component.redirectToMarketingConfigurator(
        '/abc',
        '',
        Builder<Product>().locationId('123456').hasOldSocialTariffDiscount(true).build(),
        'click'
      );
      expect(dialog.open).toHaveBeenCalled();
      expect(urlService.redirectTo).toHaveBeenCalledWith(installationLocationId);
    });
  });

  describe('sortChildren', () => {
    it('should return sorted', () => {
      const children = [
        { id: 'first', productSpec: { weight: 20 } } as Product,
        { id: 'second', productSpec: { weight: 70 } } as Product,
        { id: 'third', productSpec: { weight: 10 } } as Product,
      ];
      const sortedProducts = component.sortChildren(children);
      expect(sortedProducts[0].id).toEqual('third');
    });

    it('should return sorted when no weight', () => {
      const children = [
        { id: 'first', productSpec: { weight: 20 } } as Product,
        { id: 'second', productSpec: {} } as Product,
        { id: 'third', productSpec: { weight: 10 } } as Product,
      ];
      const sortedProducts = component.sortChildren(children);
      expect(sortedProducts[0].id).toEqual('second');
    });

    it('should return sorted when no productSpec', () => {
      const children = [{ id: 'first' } as Product, { id: 'second' } as Product, { id: 'third' } as Product];
      const sortedProducts = component.sortChildren(children);
      expect(sortedProducts[0].id).toEqual('first');
    });
  });

  describe('getIntent', () => {
    it('should return intent as connectivity if not WIGO', () => {
      const product = new Product();
      product.bundleType = 'C5';
      expect(component.getIntent(product)).toBe('connectivity');
    });

    it('should return intent empty if WIGO', () => {
      const product = new Product();
      product.bundleType = 'WIGO';
      expect(component.getIntent(product)).toBe('');
    });
  });

  describe('handleManageOptions', () => {
    it('should call manageOptions when Enter is pressed', () => {
      const event = new KeyboardEvent('keydown', { key: 'Enter' });
      jest.spyOn(component, 'manageOptions');
      const product = new Product();
      component.handleManageOptions(event, product);
      expect(component.manageOptions).toHaveBeenCalled();
    });

    it('should not call manageOptions when other key is pressed', () => {
      const event = new KeyboardEvent('keydown', { key: 'Space' });
      jest.spyOn(component, 'manageOptions');
      const product = new Product();
      component.handleManageOptions(event, product);
      expect(component.manageOptions).not.toHaveBeenCalled();
    });
  });

  describe('handleRedirectToMarketingConfigurator', () => {
    it('should call redirectToMarketingConfigurator when Enter is pressed', () => {
      const event = new KeyboardEvent('keydown', { key: 'Enter' });
      jest.spyOn(component, 'redirectToMarketingConfigurator');
      const product = new Product();
      component.handleRedirectToMarketingConfigurator(event, 'url', 'flow', product, 'eventname');
      expect(component.redirectToMarketingConfigurator).toHaveBeenCalled();
    });

    it('should not call redirectToMarketingConfigurator when other key is pressed', () => {
      const event = new KeyboardEvent('keydown', { key: 'Space' });
      jest.spyOn(component, 'redirectToMarketingConfigurator');
      const product = new Product();
      component.handleRedirectToMarketingConfigurator(event, 'url', 'flow', product, 'eventname');
      expect(component.redirectToMarketingConfigurator).not.toHaveBeenCalled();
    });
  });
});
