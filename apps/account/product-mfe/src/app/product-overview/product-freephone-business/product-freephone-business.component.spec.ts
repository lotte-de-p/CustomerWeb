import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Product } from '../models/product.model';
import { ProductFreePhoneBusinessComponent } from './product-freephone-business.component';
import { OmapiProduct } from '@telenet/ng-lib-omapi';
import { ProductOverviewService } from '../services/product-overview.service';

describe('ProductStandaloneComponent', () => {
  let component: ProductFreePhoneBusinessComponent;
  let fixture: ComponentFixture<ProductFreePhoneBusinessComponent>;
  let productOverviewService: ProductOverviewService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ProductFreePhoneBusinessComponent,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
      providers: [{ provide: 'Window', useValue: { location: {} } }, ProductOverviewService],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductFreePhoneBusinessComponent);
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

  describe('onKeydown', () => {
    it('should toggle visibilityIndices at the given index when Enter is pressed', () => {
      const event = new KeyboardEvent('keydown', { key: 'Enter' });
      const index = 1;
      component.visibilityIndices[index] = false;

      component.onKeydown(event, index);
      expect(component.visibilityIndices[index]).toBe(true);
      component.onKeydown(event, index);
      expect(component.visibilityIndices[index]).toBe(false);
    });

    it('should not toggle visibilityIndices when a key other than Enter is pressed', () => {
      const event = new KeyboardEvent('keydown', { key: 'Space' });
      const index = 1;
      component.visibilityIndices[index] = false;
      component.onKeydown(event, index);
      expect(component.visibilityIndices[index]).toBe(false);
    });
  });
});
