import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsDetailsOrderComponent } from './products-details-order.component';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BehaviorSubject, Subject } from 'rxjs';
import { ProductsDetailsOrderFacade, selectSalesOffer } from '@sales/products-details/data-access';
import { when } from 'jest-when';
import { SalesOffer } from '@sales/shared/data-access';

describe('ProductsDetailsOrderComponent', () => {
  let component: ProductsDetailsOrderComponent;
  let fixture: ComponentFixture<ProductsDetailsOrderComponent>;
  let productsDetailsOrderFacade: ProductsDetailsOrderFacade;
  const salesOffer$: Subject<SalesOffer> = new BehaviorSubject<SalesOffer>({
    price: 1,
    promo: null,
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        EffectsModule.forRoot({}),
        HttpClientTestingModule,
        TgTranslateTestingModule.forRoot({}),
      ],
      providers: [provideMockStore({})],
    }).compileComponents();

    const store$ = TestBed.inject(MockStore);
    when(jest.spyOn(store$, 'select')).calledWith(selectSalesOffer).mockReturnValue(salesOffer$);

    productsDetailsOrderFacade = TestBed.inject(ProductsDetailsOrderFacade);
    jest.spyOn(productsDetailsOrderFacade, 'updateSalesCheckoutUrl');
    jest.spyOn(productsDetailsOrderFacade, 'updateHumanCheckoutUrl');

    fixture = TestBed.createComponent(ProductsDetailsOrderComponent);
    component = fixture.componentInstance;
    component.salesCheckoutUrl = 'url';
    component.humanCheckoutUrl = 'url';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.salesOffer$).toEqual(salesOffer$);
    expect(productsDetailsOrderFacade.updateSalesCheckoutUrl).toHaveBeenCalledWith('url');
    expect(productsDetailsOrderFacade.updateHumanCheckoutUrl).toHaveBeenCalledWith('url');
  });

  describe('order', () => {
    it('should call order', () => {
      const orderSpy = jest.spyOn(productsDetailsOrderFacade, 'order');

      component.order();

      expect(orderSpy).toHaveBeenCalled();
    });
  });
});
