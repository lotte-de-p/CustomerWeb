import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { ProductsDetailsSummaryComponent } from './products-details-summary.component';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { TranslatePipe } from '@ngx-translate/core';
import { OmapiProduct, OmapiProductTestfactory } from '@telenet/ng-lib-omapi';
import { selectProducts } from '@sales/products-details/data-access';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { BehaviorSubject } from 'rxjs';
import { when } from 'jest-when';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { Product } from '@sales/shared/data-access';

describe('ProductsDetailsSummary', () => {
  let component: ProductsDetailsSummaryComponent;
  let fixture: ComponentFixture<ProductsDetailsSummaryComponent>;
  let products$: BehaviorSubject<Product[]>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TgTranslateTestingModule.forRoot({}), StoreModule.forRoot(), EffectsModule.forRoot(), HttpClientModule],
      providers: [TranslatePipe, provideMockStore()],
    }).compileComponents();

    products$ = new BehaviorSubject<Product[]>([]);
    const store$ = TestBed.inject(MockStore);
    when(jest.spyOn(store$, 'select')).calledWith(selectProducts).mockReturnValue(products$);

    fixture = TestBed.createComponent(ProductsDetailsSummaryComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('C5', () => {
    it('should create title and specs', fakeAsync(() => {
      const omapiProduct: OmapiProduct = OmapiProductTestfactory.build();
      jest.spyOn(omapiProduct, 'isConnect5').mockReturnValue(true);

      const detailedSpec = {
        icon: '',
        labelKey: 'labelKey',
        type: '',
      };
      const c5Product: Product = {
        localizedOmapiProductName: omapiProduct.getLocalizedContentNames().nl,
        omapiProduct,
        productSpec: {
          shortSummaries: [],
          detailedSpecs: [
            {
              ...detailedSpec,
              type: 'INTERNET',
            },
            {
              ...detailedSpec,
              type: 'TV',
            },
            {
              ...detailedSpec,
              type: 'MOBILE',
            },
            {
              ...detailedSpec,
              type: 'FIXED_TELEPHONE',
            },
          ],
        },
        amountOfLimitedSims: 1,
      };

      products$.next([c5Product]);

      component.productsDetailsSummaryVM$.subscribe((actual) => {
        expect(actual.title).toEqual(c5Product.localizedOmapiProductName);
        expect(actual.internetSpecs).toEqual([detailedSpec.labelKey]);
        expect(actual.mobileSpecs).toEqual([detailedSpec.labelKey]);
        expect(actual.tvSpecs).toEqual([detailedSpec.labelKey]);
        expect(actual.fixedTelephoneSpecs).toEqual([detailedSpec.labelKey]);
      });
      tick();
    }));
  });

  describe('none C5 products', () => {
    it('should create title and specs', fakeAsync(() => {
      const internetOmapiProduct: OmapiProduct = new OmapiProduct();
      internetOmapiProduct.externalProductCode = '1';
      const mobileOmapiProduct: OmapiProduct = new OmapiProduct();
      mobileOmapiProduct.externalProductCode = '2';
      const detailedSpec = {
        icon: '',
        labelKey: 'labelKey',
        type: '',
      };
      const internetProduct: Product = {
        localizedOmapiProductName: 'Easy Internet',
        omapiProduct: internetOmapiProduct,
        productSpec: {
          shortSummaries: [],
          detailedSpecs: [
            {
              ...detailedSpec,
              type: 'INTERNET',
            },
          ],
        },
        amountOfLimitedSims: 0,
      };
      const mobileProduct: Product = {
        localizedOmapiProductName: 'Telenet Mobile 8 GB',
        omapiProduct: mobileOmapiProduct,
        productSpec: {
          shortSummaries: [],
          detailedSpecs: [
            {
              ...detailedSpec,
              type: 'MOBILE',
            },
          ],
        },
        amountOfLimitedSims: 0,
      };

      products$.next([internetProduct, mobileProduct]);

      component.productsDetailsSummaryVM$.subscribe((actual) => {
        expect(actual.title).toEqual('Easy Internet' + ' + ' + 'Telenet Mobile 8 GB');
        expect(actual.internetSpecs).toEqual([detailedSpec.labelKey]);
        expect(actual.mobileSpecs).toEqual([detailedSpec.labelKey]);
        expect(actual.tvSpecs).toEqual([]);
        expect(actual.fixedTelephoneSpecs).toEqual([]);
      });
      tick();
    }));
  });
});
