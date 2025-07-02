import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { ProductFacade } from './product.facade';
import { EffectsModule } from '@ngrx/effects';
import { ProductNgrxModule } from '../+state/product-ngrx.module';
import { of, skip } from 'rxjs';
import { ProductService } from '../infrastructure/product.service';
import { Product } from '../entities/models/product.model';

describe('ProductFacade', () => {
  let productFacade: ProductFacade;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot(), EffectsModule.forRoot(), ProductNgrxModule],
      providers: [ProductFacade],
    });
    productFacade = TestBed.inject(ProductFacade);
  });

  it('should be created', () => {
    expect(productFacade).toBeTruthy();
  });

  describe(`When loadInvoices is called`, () => {
    it('should fetch the invoices', (done) => {
      const productService = TestBed.inject(ProductService);
      const getProductsSpy = jest.spyOn(productService, 'getProducts');
      const expectedProducts: Product[] = [{} as Product];
      getProductsSpy.mockReturnValue(of(expectedProducts));

      productFacade.products$.pipe(skip(1)).subscribe((products) => {
        expect(getProductsSpy).toHaveBeenCalled();
        expect(products).toEqual(expectedProducts);
        done();
      });

      productFacade.loadProducts();
    });
  });
});
