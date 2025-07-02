import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { MyBaseDashboardMobileUsagePrepaidComponent } from './mybase-dashboard-mobile-usage-prepaid.component';

describe('MyBaseDashboardMobileUsagePrepaidComponent', () => {
  let component: MyBaseDashboardMobileUsagePrepaidComponent;
  let fixture: ComponentFixture<MyBaseDashboardMobileUsagePrepaidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useValue: TranslateFakeLoader },
        }),
      ],
      providers: [TranslateService, { provide: 'Window', useValue: { location: {} } }],
    });

    fixture = TestBed.createComponent(MyBaseDashboardMobileUsagePrepaidComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('set data', () => {
    it('should set the data correctly', () => {
      const nowIsoString = new Date().toISOString();

      component.data = {
        showCard: true,
        prepaid: {
          balance: 54.77,
          expiryDate: nowIsoString,
        },
      };

      expect(component.balance).toEqual(54.77);
      expect(component.expiryDate).toEqual(nowIsoString);
    });
  });

  describe('goToTopUpLink', () => {
    it('should redirect to the top up URL', () => {
      jest.spyOn(component['urlService'], 'redirectTo');
      component.topUpUrl = 'https://top-up';
      const mockStopPropagation = jest.fn();

      component.goToTopUpLink({ stopPropagation: mockStopPropagation } as unknown as MouseEvent);

      expect(component['urlService'].redirectTo).toHaveBeenCalledWith('https://top-up');
      expect(mockStopPropagation).toHaveBeenCalled();
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
