import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeliveryMethodPriceComponent } from './delivery-method-price.component';
import { priceAndDiscountTestfactory } from '@sales/order-configurator/installation-type/domain';
import { provideMockStore } from '@ngrx/store/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { UrlService } from '@telenet/ng-lib-page';

describe('DeliveryMethodPriceComponent', () => {
  let component: DeliveryMethodPriceComponent;
  let fixture: ComponentFixture<DeliveryMethodPriceComponent>;
  let urlService: UrlService;
  let currentUrlSpy: jest.SpyInstance;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore(), { provide: 'Window', useValue: {} }],
      imports: [
        DeliveryMethodPriceComponent,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
    }).compileComponents();

    urlService = TestBed.inject(UrlService);
    currentUrlSpy = jest.spyOn(urlService, 'getCurrentUrl').mockReturnValue('https://www.example.com/test/en');

    fixture = TestBed.createComponent(DeliveryMethodPriceComponent);

    component = fixture.componentInstance;
    component.priceAndDiscount = priceAndDiscountTestfactory.build();
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize for EN site', () => {
    expect(urlService.getCurrentUrl).toHaveBeenCalled();
    expect(component.languageIsEnglish).toBeTruthy();
  });

  it('should initialize for non EN site', () => {
    currentUrlSpy.mockReturnValue('https://www.example.com/test/nl');
    fixture = TestBed.createComponent(DeliveryMethodPriceComponent);
    component = fixture.componentInstance;
    expect(urlService.getCurrentUrl).toHaveBeenCalled();
    expect(component.languageIsEnglish).toBeFalsy();
  });

  it('should split price', () => {
    expect(component.discountedEuros).toBe(45);
    expect(component.discountedCents).toBe(50);
  });
});
