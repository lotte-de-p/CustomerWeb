import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgressBarStatus } from '@mybase-dashboard/ui';
import { TranslateFakeLoader, TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { MyBaseDashboardInternetUsageLimitedComponent } from './mybase-dashboard-internet-usage-limited.component';

describe('MyBaseDashboardInternetUsageLimitedComponent', () => {
  let component: MyBaseDashboardInternetUsageLimitedComponent;
  let fixture: ComponentFixture<MyBaseDashboardInternetUsageLimitedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useValue: TranslateFakeLoader },
        }),
      ],
      providers: [TranslateService, { provide: 'Window', useValue: { location: {} } }],
    }).compileComponents();

    fixture = TestBed.createComponent(MyBaseDashboardInternetUsageLimitedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('set data', () => {
    it('should set the data correctly', () => {
      component.data = {
        showCard: true,
        limited: {
          totalBytes: 53_687_091_200,
          remainingBytes: 7_516_192_768,
          daysUntilRenewal: 9,
        },
      };

      expect(component.daysUntilRenewal).toEqual(9);
      expect(component.total).toEqual(50);
      expect(component.used).toEqual(43);
      expect(component.usedPct).toEqual(86);
      expect(component.progressBarStatus).toEqual(ProgressBarStatus.WARN);
    });
  });

  describe('goToMobileUsage', () => {
    it('should redirect to the mobile usage URL', () => {
      jest.spyOn(component['urlService'], 'redirectTo');
      component.internetUsageUrl = 'https://internet-usage';

      component.goToInternetUsage();

      expect(component['urlService'].redirectTo).toHaveBeenCalledWith('https://internet-usage');
    });
  });
});
