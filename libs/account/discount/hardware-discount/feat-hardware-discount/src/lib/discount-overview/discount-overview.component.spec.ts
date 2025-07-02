import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MockProvider } from 'ng-mocks';
import { TranslateModule } from '@ngx-translate/core';
import { DiscountOverviewComponent } from './discount-overview.component';
import { UrlService } from '@telenet/ng-lib-page';
import { HardwareDiscount } from '@discount/data-access';

const USE_DISCOUNT_LINK = 'https://usedDiscountLink';
const TERMS_AND_CONDITIONS_LINK = 'https://termsConditionsLink';

describe('DiscountOverviewComponent', () => {
  let component: DiscountOverviewComponent;
  let fixture: ComponentFixture<DiscountOverviewComponent>;
  let urlService: UrlService;
  const discountOverview = {
    availableSlots: 5,
    totalSlots: 5,
    creditCheck: 'OK',
    usedDiscounts: [],
  } as HardwareDiscount;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DiscountOverviewComponent,
        TranslateModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot({}),
        HttpClientTestingModule,
      ],
      providers: [
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
        MockProvider(UrlService),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DiscountOverviewComponent);
    component = fixture.componentInstance;
    component.data = discountOverview;
    component.useDiscountLink = USE_DISCOUNT_LINK;
    component.termsConditionsLink = TERMS_AND_CONDITIONS_LINK;
    urlService = TestBed.inject(UrlService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('redirectTo', () => {
    it('should navigate to the url specified', () => {
      const url = USE_DISCOUNT_LINK;
      jest.spyOn(urlService, 'redirectTo');

      component.redirectTo(url);
      expect(urlService.redirectTo).toHaveBeenCalledWith(url);
    });

    it('should emit the useDiscount event when the use discount link is clicked', () => {
      const url = USE_DISCOUNT_LINK;
      jest.spyOn(urlService, 'redirectTo');
      jest.spyOn(component.analyticsData, 'emit');
      const event = {
        eventName: 'use discount clicked',
        eventType: 'click',
      };

      component.redirectTo(url);
      expect(urlService.redirectTo).toHaveBeenCalledWith(url);
      expect(component.analyticsData.emit).toHaveBeenCalledWith({ event });
    });

    it('should emit the termsAndConditions event when the terms and conditions link is clicked', () => {
      const url = TERMS_AND_CONDITIONS_LINK;
      jest.spyOn(urlService, 'redirectTo');
      jest.spyOn(component.analyticsData, 'emit');
      const event = {
        eventName: 'terms and conditions clicked',
        eventType: 'click',
      };

      component.redirectTo(url);
      expect(urlService.redirectTo).toHaveBeenCalledWith(url);
      expect(component.analyticsData.emit).toHaveBeenCalledWith({ event });
    });
  });
});
