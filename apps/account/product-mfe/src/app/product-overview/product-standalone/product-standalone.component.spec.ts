import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductStandaloneComponent } from './product-standalone.component';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { UrlService } from '@telenet/ng-lib-page';
import { Product } from '../models/product.model';
import { OmapiProduct } from '@telenet/ng-lib-omapi';
import { ProductOverviewService } from '../services/product-overview.service';
import { EventInfo } from 'udl';
import { MarketingPages } from '../product-overview.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { of } from 'rxjs';
import { jest } from '@jest/globals';
import { Builder } from '@telenet/ng-lib-shared';
describe('ProductStandaloneComponent', () => {
  let component: ProductStandaloneComponent;
  let fixture: ComponentFixture<ProductStandaloneComponent>;
  let urlService: UrlService;
  let productOverviewService: ProductOverviewService;
  let dialog: MatDialog;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ProductStandaloneComponent,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
      providers: [UrlService, ProductOverviewService, { provide: 'Window', useValue: { location: {} } }],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductStandaloneComponent);
    urlService = TestBed.inject(UrlService);
    productOverviewService = TestBed.inject(ProductOverviewService);
    dialog = TestBed.inject(MatDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return product-icon', () => {
    jest.spyOn(productOverviewService, 'getProductIcon');
    const product = new Product();
    product.productInfo = {} as OmapiProduct;
    component.getProductIcon(product);

    expect(productOverviewService.getProductIcon).toHaveBeenCalledWith(product);
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

  describe('splitProducts', () => {
    it('should filter the products', () => {
      const mobileProduct1 = new Product();
      mobileProduct1.productType = 'mobile';

      const mobileProduct2 = new Product();
      mobileProduct2.productType = 'non-mobile';

      const internetProduct1 = new Product();
      internetProduct1.productType = 'internet';

      const internetProduct2 = new Product();
      internetProduct2.productType = 'internet';

      const tvProduct1 = new Product();
      tvProduct1.productType = 'non-tv';

      const tvProduct2 = new Product();
      tvProduct2.productType = 'non-tv';

      component.products = [mobileProduct1, mobileProduct2, internetProduct1, internetProduct2, tvProduct1, tvProduct2];

      component.splitProducts();

      expect(component.mobileProducts).toEqual([mobileProduct1]);
      expect(component.internetProducts).toEqual([internetProduct1, internetProduct2]);
      expect(component.tvProducts).toEqual([]);
      expect(component.mobileProductsVisible).toEqual([false]);
      expect(component.internetProductsVisible).toEqual([false, false]);
      expect(component.tvProductsVisible).toEqual([]);
    });
  });

  describe('changeTariffPlan', () => {
    it('should redirect to correct url if no others are provided', () => {
      jest.spyOn(urlService, 'redirectTo');
      component.changeTariffPlanUrl = 'changeTariffPlanUrl';
      const event = new Event('test');

      component.changeTariffPlan(Builder<Product>().identifier('test').build(), event);

      expect(urlService.redirectTo).toHaveBeenCalledWith('changeTariffPlanUrl?flow=care&item=test');
    });

    it('should redirect to correct mobile tariff url when clicking mobile product', () => {
      jest.spyOn(urlService, 'redirectTo');
      component.changeMobileTariffUrl = 'changeMobileTariffPlanUrl';
      const event = new Event('test');
      const mobileProduct = new Product();
      mobileProduct.productType = 'mobile';
      mobileProduct.identifier = 'mobileIdentifier';

      component.changeTariffPlan(mobileProduct, event);

      expect(urlService.redirectTo).toHaveBeenCalledWith('changeMobileTariffPlanUrl?flow=care&item=mobileIdentifier');
    });

    it('should redirect to correct internet tariff url when clicking internet product', () => {
      jest.spyOn(urlService, 'redirectTo');
      component.changeInternetTariffUrl = 'changeInternetTariffPlanUrl';
      const event = new Event('test');
      const internetProduct = new Product();
      internetProduct.productType = 'internet';
      internetProduct.identifier = 'internetIdentifier';

      component.changeTariffPlan(internetProduct, event);

      expect(urlService.redirectTo).toHaveBeenCalledWith(
        'changeInternetTariffPlanUrl?flow=care&item=internetIdentifier'
      );
    });

    it('should redirect to correct dtv tariff url when clicking dtv product', () => {
      jest.spyOn(urlService, 'redirectTo');
      component.changeDTVTariffUrl = 'changeDTVTariffPlanUrl';
      const event = new Event('test');
      const dtvProduct = new Product();
      dtvProduct.productType = 'dtv';
      dtvProduct.identifier = 'dtvIdentifier';

      component.changeTariffPlan(dtvProduct, event);

      expect(urlService.redirectTo).toHaveBeenCalledWith('changeDTVTariffPlanUrl?flow=care&item=dtvIdentifier');
    });

    it('should call social tariff', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      jest.spyOn(component as any, 'changePlanForSocialTariff');
      component.changeDTVTariffUrl = 'changeDTVTariffPlanUrl';
      const event = new Event('test');
      const dtvProduct = new Product();
      dtvProduct.productType = 'dtv';
      dtvProduct.hasOldSocialTariffDiscount = true;
      dtvProduct.identifier = 'dtvIdentifier';

      component.changeTariffPlan(dtvProduct, event);

      expect(component['changePlanForSocialTariff']).toHaveBeenCalledWith(
        event,
        'changeDTVTariffPlanUrl?flow=care&item=dtvIdentifier'
      );
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
      const event = new Event('test');

      component.manageOptions(product, event);

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
      const event = new Event('test');

      component.manageOptions(product, event);

      expect(urlService.redirectTo).toHaveBeenCalledWith('manageOptionUrl?item=identifier&flow=product-options');
    });

    it('should redirect to correct url with productCode', () => {
      jest.spyOn(urlService, 'redirectTo');
      const product = new Product();
      product.identifier = 'identifier';
      product.status = 'ACTIVE';
      product.upgradePossibleTo = 'upgradePossibleTo';
      component.manageOptionUrl = 'manageOptionUrl';
      const event = new Event('test');

      component.manageOptions(product, event);

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

      expect(product.productInfo.hasCategory).toHaveBeenCalled();
      expect(returnValue).toBe(true);
    });

    it('should return false if under move', () => {
      const product = new Product();
      product.productInfo = {} as OmapiProduct;
      product.productInfo.categories = ['prepaid-mobile'];
      product.productInfo.hasCategory = () => true;
      product.productInfo.isYupProduct = false;
      product.isUnderMove = true;
      component.canManageProductHolding = false;

      const returnValue = component.showManageOptions(product);

      expect(returnValue).toBe(false);
    });
  });

  describe('redirectToMarketingPage', () => {
    it('should redirect', () => {
      component.marketingPagesObject = {
        dtv: 'dtvURL',
        internet: 'internetURL',
      } as MarketingPages;
      const eventInfo = new EventInfo();
      component.componentInstanceID = 'test';
      jest.spyOn(component['dataLayerService'], 'createEventInfo').mockReturnValue(eventInfo);
      jest.spyOn(component['productOverviewService'], 'addEventToDataLayer');
      jest.spyOn(urlService, 'redirectTo');

      component.redirectToMarketingPage(Builder<Product>().productType('dtv').build());

      expect(component['productOverviewService'].addEventToDataLayer).toHaveBeenCalledWith(eventInfo, 'test');
      expect(urlService.redirectTo).toHaveBeenCalledWith('dtvURL');
    });
  });

  describe('redirectToMarketingPageGrandFatheringUrlComposer', () => {
    it('changePlan for social discount tariff', () => {
      component.changeTariffPlanUrl = 'someUrl';
      jest.spyOn(urlService, 'redirectTo');
      jest.spyOn(dialog, 'open').mockReturnValue({
        afterClosed: () => of(true),
      } as MatDialogRef<typeof component>);
      component.changeTariffPlan(
        Builder<Product>().identifier('someIdentifier').hasOldSocialTariffDiscount(true).build(),
        new Event('')
      );
      expect(dialog.open).toHaveBeenCalled();
      expect(urlService.redirectTo).toHaveBeenCalledWith('someUrl?flow=care&item=someIdentifier');
    });
  });

  it('redirect to marketing page for social discount tariff', () => {
    component.marketingPagesObject = Builder<MarketingPages>().dtv('dtvMarkingPageUrl').build();
    jest.spyOn(urlService, 'redirectTo');
    jest.spyOn(dialog, 'open').mockReturnValue({
      afterClosed: () => of(true),
    } as MatDialogRef<typeof component>);
    component.redirectToMarketingPage(Builder<Product>().productType('dtv').hasOldSocialTariffDiscount(true).build());
    expect(dialog.open).toHaveBeenCalled();
    expect(urlService.redirectTo).toHaveBeenCalledWith('dtvMarkingPageUrl');
  });

  describe('handleRedirectToMarketingPage', () => {
    it('should call redirectToMarketingPage when Enter is pressed', () => {
      const event = new KeyboardEvent('keydown', { key: 'Enter' });
      jest.spyOn(component, 'redirectToMarketingPage');
      component.marketingPagesObject = {
        dtv: 'dtvURL',
        internet: 'internetURL',
      } as MarketingPages;
      const product = new Product();
      product.productType = 'mobile';
      component.handleRedirectToMarketingPage(event, product);
      expect(component.redirectToMarketingPage).toHaveBeenCalled();
    });

    it('should call redirectToMarketingPage when other key is pressed', () => {
      const event = new KeyboardEvent('keydown', { key: 'Space' });
      jest.spyOn(component, 'redirectToMarketingPage');
      const product = new Product();
      component.handleRedirectToMarketingPage(event, product);
      expect(component.redirectToMarketingPage).not.toHaveBeenCalled();
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

    it('should not call manageOptions when key other than Enter is pressed', () => {
      const event = new KeyboardEvent('keydown', { key: 'Space' });
      jest.spyOn(component, 'manageOptions');
      const product = new Product();
      component.handleManageOptions(event, product);
      expect(component.manageOptions).not.toHaveBeenCalled();
    });
  });
});
