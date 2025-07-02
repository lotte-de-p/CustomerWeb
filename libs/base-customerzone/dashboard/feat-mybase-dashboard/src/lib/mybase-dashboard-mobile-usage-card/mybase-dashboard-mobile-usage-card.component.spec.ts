import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBaseDashboardMobileUsageCardComponent } from './mybase-dashboard-mobile-usage-card.component';
import { UsageStatusEnum } from '@mybase-dashboard/data-access';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

describe('MybaseDashboardMobileUsageCardComponent', () => {
  let component: MyBaseDashboardMobileUsageCardComponent;
  let fixture: ComponentFixture<MyBaseDashboardMobileUsageCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MyBaseDashboardMobileUsageCardComponent,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useValue: TranslateFakeLoader },
        }),
      ],
      providers: [{ provide: 'Window', useValue: { location: {} } }],
    }).compileComponents();

    fixture = TestBed.createComponent(MyBaseDashboardMobileUsageCardComponent);
    component = fixture.componentInstance;

    component.mobileUsage = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should return true when all the usage status are OK', () => {
      component.mobileUsage = [
        {
          productName: 'BASE 20',
          msisdn: '0415466552',
          usageStatus: UsageStatusEnum.OK,
        },
      ];
      component.ngOnInit();

      expect(component.smoothSurfing).toBeTruthy();
    });

    it('should return false when one of the usage status is not OK', () => {
      component.mobileUsage = [
        {
          productName: 'BASE 20',
          msisdn: '0415466552',
          usageStatus: UsageStatusEnum.OK,
        },
        {
          productName: 'BASE 20',
          msisdn: '0415466552',
          usageStatus: UsageStatusEnum.LIMIT_ALMOST_REACHED,
        },
      ];

      component.ngOnInit();

      expect(component.smoothSurfing).toBeFalsy();
    });
  });

  describe('redirectToUsage', () => {
    it('should redirect to mobile url', () => {
      jest.spyOn(component['urlService'], 'redirectTo');
      component.mobileUsagePageUrl = 'https://www.int.base.be/en/customer-zone/mobile';

      component.redirectToUsage();

      expect(component['urlService'].redirectTo).toHaveBeenCalledWith(
        'https://www.int.base.be/en/customer-zone/mobile'
      );
    });

    it('should not redirect with clickable false', () => {
      jest.spyOn(component['urlService'], 'redirectTo');
      component.mobileUsagePageUrl = 'https://www.int.base.be';

      component.redirectToUsage(false);

      expect(component['urlService'].redirectTo).not.toHaveBeenCalledWith('https://www.int.base.be');
    });
  });
});
