import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { MyBaseDashboardMobileUsagePostpaidComponent } from './mybase-dashboard-mobile-usage-postpaid.component';
import { UsageStatusEnum } from '@mybase-dashboard/data-access';
import { ProgressBarStatus } from '@mybase-dashboard/ui';

describe('MyBaseDashboardMobileUsagePostpaidComponent', () => {
  let component: MyBaseDashboardMobileUsagePostpaidComponent;
  let fixture: ComponentFixture<MyBaseDashboardMobileUsagePostpaidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useValue: TranslateFakeLoader },
        }),
      ],
      providers: [TranslateService, { provide: 'Window', useValue: { location: {} } }],
    });

    fixture = TestBed.createComponent(MyBaseDashboardMobileUsagePostpaidComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('set data', () => {
    it('should set the data correctly', () => {
      component.data = {
        showCard: true,
        postpaid: {
          data: { total: 26_843_545_600, carryOver: 2_147_483_648, remaining: 13_958_643_712 },
          daysUntilRenewal: 16,
          outOfBundleLimit: 10,
          status: UsageStatusEnum.LIMIT_EXCEEDED_SLOW_SPEED,
        },
      };

      expect(component.daysUntilRenewal).toEqual(16);
      expect(component.total).toEqual(25);
      expect(component.used).toEqual(12);
      expect(component.usedPct).toEqual(48);
      expect(component.carryOver).toEqual(2);
      expect(component.outOfBundleLimit).toEqual(10);
      expect(component.progressBarStatus).toEqual(ProgressBarStatus.ERROR);
    });
  });

  describe('goToMobileUsage', () => {
    it('should redirect to the mobile usage URL', () => {
      jest.spyOn(component['urlService'], 'redirectTo');
      component.mobileUsageUrl = 'https://mobile-usage';

      component.goToMobileUsage();

      expect(component['urlService'].redirectTo).toHaveBeenCalledWith('https://mobile-usage');
    });
  });
});
