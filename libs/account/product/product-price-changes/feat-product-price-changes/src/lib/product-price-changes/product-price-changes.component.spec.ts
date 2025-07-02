import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MockProvider } from 'ng-mocks';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ProductPriceChangesComponent } from './product-price-changes.component';
import { BillingFrequency, Login, ProductPriceChangesFacade } from '@product/product-price-changes/data-access';
import { TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import {
  AccountSelectorComponent,
  AddressComponent,
  NoPriceChangesComponent,
  PriceChangesComponent,
} from '@product/product-price-changes/ui';

describe('ProductPriceChangesComponent', () => {
  let fixture: ComponentFixture<ProductPriceChangesComponent>;
  let component: ProductPriceChangesComponent;
  let facade: ProductPriceChangesFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ProductPriceChangesComponent,
        HttpClientTestingModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        TranslateModule.forRoot(),
      ],
      providers: [
        MockProvider(ProductPriceChangesFacade, {
          isAuthenticated$: of(true),
          loadError$: of(undefined),
          loading$: of(false),
          authenticationError$: of(false),
          productPriceChanges$: of([]),
          selectedBillingAccount$: of(undefined),
        }),
        {
          provide: 'Window',
          useValue: {
            document: {
              documentElement: {
                lang: 'en',
              },
            },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductPriceChangesComponent);
    component = fixture.componentInstance;
    facade = TestBed.inject(ProductPriceChangesFacade);
    fixture.detectChanges();
  });

  it('should call facade action on init', () => {
    jest.spyOn(facade, 'validateAuthentication');
    component.ngOnInit();
    expect(facade.validateAuthentication).toHaveBeenCalled();
  });

  it('should call login on login', () => {
    jest.spyOn(facade, 'login');
    const login = {
      lastName: 'lastname',
      customerNumber: 'customernumber',
    } as Login;
    component.login(login);
    expect(facade.login).toHaveBeenCalledWith(login);
  });

  it('should call selectBillingAccount on selection', () => {
    jest.spyOn(facade, 'selectBillingAccount');
    component.selectBillingAccount('accountNumber');
    expect(facade.selectBillingAccount).toHaveBeenCalledWith('accountNumber');
  });

  it('should render no price changes', () => {
    expect(fixture.debugElement.query(By.directive(NoPriceChangesComponent))).toBeTruthy();
  });

  it('should render the price changes', () => {
    Object.defineProperty(facade, 'productPriceChanges$', {
      get: () =>
        of([
          {
            accountNumber: '123456',
            productPriceChanges: [],
          },
        ]),
    });
    Object.defineProperty(facade, 'selectedProductPriceChanges$', {
      get: () =>
        of([
          {
            billingFrequency: BillingFrequency.MONTHLY,
            address: {
              street: 'TestStraat',
              city: 'Test',
              houseNumber: '123',
              postalCode: '1234',
            },
            priceChange: '12.34',
            products: [],
          },
        ]),
    });
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.directive(AccountSelectorComponent))).toBeTruthy();
    expect(fixture.debugElement.query(By.directive(AddressComponent))).toBeTruthy();
    expect(fixture.debugElement.query(By.directive(PriceChangesComponent))).toBeTruthy();
  });
});
