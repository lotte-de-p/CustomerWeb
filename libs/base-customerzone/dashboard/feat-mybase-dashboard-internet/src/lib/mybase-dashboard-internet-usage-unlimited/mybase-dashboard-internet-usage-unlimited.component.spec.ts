import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsageStatusEnum } from '@mybase-dashboard/data-access';
import { TranslateFakeLoader, TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { MyBaseDashboardInternetUsageUnlimitedComponent } from './mybase-dashboard-internet-usage-unlimited.component';

describe('MyBaseDashboardInternetUsageUnlimitedComponent', () => {
  let component: MyBaseDashboardInternetUsageUnlimitedComponent;
  let fixture: ComponentFixture<MyBaseDashboardInternetUsageUnlimitedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useValue: TranslateFakeLoader },
        }),
      ],
      providers: [TranslateService, { provide: 'Window', useValue: { location: {} } }],
    }).compileComponents();

    fixture = TestBed.createComponent(MyBaseDashboardInternetUsageUnlimitedComponent);
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
        unlimited: {
          usedBytes: 2_845_415_833_600,
          daysUntilRenewal: 4,
          status: UsageStatusEnum.LIMIT_ALMOST_REACHED,
        },
      };

      expect(component.daysUntilRenewal).toEqual(4);
      expect(component.used).toEqual(2650);
      expect(component.usageStatus).toEqual(component.UsageStatus.WARN);
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
