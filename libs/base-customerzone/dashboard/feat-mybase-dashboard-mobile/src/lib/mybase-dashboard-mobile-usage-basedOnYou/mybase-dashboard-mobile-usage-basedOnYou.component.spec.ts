import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { MyBaseDashboardMobileUsageBasedOnYouComponent } from './mybase-dashboard-mobile-usage-basedOnYou.component';
import { UsageStatusEnum } from '@mybase-dashboard/data-access';
import { ProgressBarStatus } from '@mybase-dashboard/ui';

describe('MyBaseDashboardMobileUsageBasedOnYouComponent', () => {
  let component: MyBaseDashboardMobileUsageBasedOnYouComponent;
  let fixture: ComponentFixture<MyBaseDashboardMobileUsageBasedOnYouComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useValue: TranslateFakeLoader },
        }),
      ],
      providers: [TranslateService, { provide: 'Window', useValue: { location: {} } }],
    });

    fixture = TestBed.createComponent(MyBaseDashboardMobileUsageBasedOnYouComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('set data', () => {
    it('should set the data correctly', () => {
      component.data = {
        showCard: true,
        basedOnYou: {
          total: 50,
          remaining: 25,
          daysUntilRenewal: 16,
          status: UsageStatusEnum.OK,
        },
      };

      expect(component.daysUntilRenewal).toEqual(16);
      expect(component.total).toEqual(50);
      expect(component.usedPct).toEqual(50);
      expect(component.progressBarStatus).toEqual(ProgressBarStatus.OK);
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
