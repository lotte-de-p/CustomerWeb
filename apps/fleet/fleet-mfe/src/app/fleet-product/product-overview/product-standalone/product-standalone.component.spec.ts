import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductStandaloneComponent } from './product-standalone.component';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { UrlService } from '@telenet/ng-lib-page';
import { OmapiProduct } from '@telenet/ng-lib-omapi';
import { ProductOverviewService } from '../services/product-overview.service';
import { jest } from '@jest/globals';
import { Product } from '../../../fleet-user/shared/models/product.model';
describe('ProductStandaloneComponent', () => {
  let component: ProductStandaloneComponent;
  let fixture: ComponentFixture<ProductStandaloneComponent>;
  let urlService: UrlService;
  let productOverviewService: ProductOverviewService;

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
      product.isUnderMove = true;
      component.canManageProductHolding = false;

      const returnValue = component.showManageOptions(product);

      expect(returnValue).toBe(false);
    });
  });
});
