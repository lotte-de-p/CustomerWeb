import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { Observable, of, throwError } from 'rxjs';
import { ProductEffects } from './product.effects';
import { provideMockStore } from '@ngrx/store/testing';
import * as productActions from './product.actions';
import { Product } from '../entities/models/product.model';
import { ProductService } from '../infrastructure/product.service';

describe('ProductsEffects', () => {
  let actions$: Observable<Action>;
  let productService: jest.Mocked<ProductService>;
  let effects: ProductEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProductEffects,
        provideMockStore(),
        provideMockActions(() => actions$),
        {
          provide: ProductService,
          useValue: {
            getProducts: jest.fn(),
          },
        },
      ],
    });

    effects = TestBed.inject(ProductEffects);
    productService = TestBed.inject(ProductService) as jest.Mocked<ProductService>;
  });

  describe('products$', () => {
    describe(`when service call is successful`, () => {
      it('should dispatch getProductsSuccessAction ', (done) => {
        const mockProducts = [{} as Product];
        productService.getProducts.mockReturnValue(of(mockProducts));

        actions$ = of(productActions.getProducts());

        effects.products$.subscribe((action) => {
          expect(action).toEqual(productActions.getProductsSuccessAction({ products: mockProducts }));
          done();
        });
      });
    });

    describe(`when service call is fails`, () => {
      it('should dispatch getInvoicesSuccessAction ', (done) => {
        const error = new Error('dd');
        productService.getProducts.mockReturnValue(throwError(() => error));

        actions$ = of(productActions.getProducts());

        effects.products$.subscribe((action) => {
          expect(action).toEqual(productActions.getErrorAction({ error }));
          done();
        });
      });
    });
  });
});
