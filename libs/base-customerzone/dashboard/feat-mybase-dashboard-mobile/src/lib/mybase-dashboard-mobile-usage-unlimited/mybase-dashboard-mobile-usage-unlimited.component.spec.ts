import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { MyBaseDashboardMobileUsageUnlimitedComponent } from './mybase-dashboard-mobile-usage-unlimited.component';
import { UsageStatusEnum } from '@mybase-dashboard/data-access';

describe('MyBaseDashboardMobileUsageUnlimitedComponent', () => {
  let component: MyBaseDashboardMobileUsageUnlimitedComponent;
  let fixture: ComponentFixture<MyBaseDashboardMobileUsageUnlimitedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useValue: TranslateFakeLoader },
        }),
      ],
      providers: [TranslateService, { provide: 'Window', useValue: { location: {} } }],
    });

    fixture = TestBed.createComponent(MyBaseDashboardMobileUsageUnlimitedComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('set data', () => {
    it('should set the data correctly', () => {
      component.data = {
        showCard: true,
        unlimited: {
          daysUntilRenewal: 16,
          used: 26_843_545_600,
          status: UsageStatusEnum.LIMIT_ALMOST_REACHED,
        },
      };

      expect(component.daysUntilRenewal).toEqual(16);
      expect(component.used).toEqual(25);
      expect(component.usageStatus).toEqual(component.UsageStatus.WARN);
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
