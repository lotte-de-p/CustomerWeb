import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { MyBaseDashboardMobileUsageBaseZeroComponent } from './mybase-dashboard-mobile-usage-baseZero.component';
import { UsageStatusEnum } from '@mybase-dashboard/data-access';

describe('MyBaseDashboardMobileUsageBaseZeroComponent', () => {
  let component: MyBaseDashboardMobileUsageBaseZeroComponent;
  let fixture: ComponentFixture<MyBaseDashboardMobileUsageBaseZeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useValue: TranslateFakeLoader },
        }),
      ],
      providers: [TranslateService, { provide: 'Window', useValue: { location: {} } }],
    });

    fixture = TestBed.createComponent(MyBaseDashboardMobileUsageBaseZeroComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('set data', () => {
    it('should set the data correctly', () => {
      component.data = {
        showCard: true,
        baseZero: {
          daysUntilRenewal: 16,
          used: 10,
          status: UsageStatusEnum.OK,
        },
      };

      expect(component.daysUntilRenewal).toEqual(16);
      expect(component.used).toEqual(10);
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
