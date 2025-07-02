import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MockProvider } from 'ng-mocks';
import { TranslateModule } from '@ngx-translate/core';
import { AdditionalDiscountInfoComponent } from './additional-discount-info.component';
import { UrlService } from '@telenet/ng-lib-page';

describe('DiscountOverviewComponent', () => {
  let component: AdditionalDiscountInfoComponent;
  let fixture: ComponentFixture<AdditionalDiscountInfoComponent>;
  let urlService: UrlService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AdditionalDiscountInfoComponent,
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

    fixture = TestBed.createComponent(AdditionalDiscountInfoComponent);
    component = fixture.componentInstance;
    component.hardwareInvoicesLink = 'https://hardwareInvoicesLink';
    urlService = TestBed.inject(UrlService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('redirectToHardwareBills', () => {
    it('should navigate to the url specified', () => {
      jest.spyOn(urlService, 'redirectTo');
      jest.spyOn(component.analyticsData, 'emit');
      const event = {
        eventName: 'view hardware invoices clicked',
        eventType: 'click',
      };

      component.redirectToHardwareBills();
      expect(urlService.redirectTo).toHaveBeenCalledWith('https://hardwareInvoicesLink');
      expect(component.analyticsData.emit).toHaveBeenCalledWith({ event });
    });
  });
});
