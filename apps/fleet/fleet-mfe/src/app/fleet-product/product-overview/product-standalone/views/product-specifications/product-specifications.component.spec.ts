import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductSpecificationsComponent } from './product-specifications.component';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { UrlService } from '@telenet/ng-lib-page';
import { EventInfo } from 'udl';
import { OmapiProduct } from '@telenet/ng-lib-omapi';
import { Product } from '../../../../../fleet-user/shared/models/product.model';

describe('ProductSpecificationsComponent', () => {
  let component: ProductSpecificationsComponent;
  let fixture: ComponentFixture<ProductSpecificationsComponent>;

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

      component.toggleVisibilityFeature(true);

      expect(component['productOverviewService'].addEventToDataLayer).toHaveBeenCalledWith(
        eventInfo,
        'test',
        attributes
      );
      expect(component.showFeature).toBe(true);
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
});
