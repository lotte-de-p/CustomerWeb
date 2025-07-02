import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportAssistanceType } from '@mybase-dashboard/data-access';
import { TranslateFakeLoader, TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { MyBaseDashboardSupportAssistanceComponent } from './mybase-dashboard-support-assistance.component';

describe('MyBaseDashboardSupportAssistanceComponent', () => {
  let component: MyBaseDashboardSupportAssistanceComponent;
  let fixture: ComponentFixture<MyBaseDashboardSupportAssistanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useValue: TranslateFakeLoader },
        }),
      ],
      providers: [TranslateService, { provide: 'Window', useValue: { location: {} } }],
    }).compileComponents();

    fixture = TestBed.createComponent(MyBaseDashboardSupportAssistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('updateData', () => {
    it('should keep the cards that have a configured URL', () => {
      component.bestTariffUrl = 'https://best-tariff';
      component.supportUrl = 'https://support';

      component.data = [
        SupportAssistanceType.BEST_TARIFF,
        SupportAssistanceType.EASY_SWITCH,
        SupportAssistanceType.WATCH_TV,
        SupportAssistanceType.SUPPORT,
      ];

      component['updateData']();

      expect(component.cards).toEqual([SupportAssistanceType.SUPPORT, SupportAssistanceType.BEST_TARIFF]);
    });
  });

  describe('redirectTo', () => {
    beforeEach(() => {
      component.bestTariffUrl = 'https://best-tariff';
      component.watchTvUrl = 'https://watch-tv';
      component.supportUrl = 'https://support';
      component.easySwitchUrl = 'https://easy-switch';
      component.data = [
        SupportAssistanceType.BEST_TARIFF,
        SupportAssistanceType.EASY_SWITCH,
        SupportAssistanceType.WATCH_TV,
        SupportAssistanceType.SUPPORT,
      ];
    });

    it('should redirect to the correct URL depending on the card', () => {
      jest.spyOn(component['urlService'], 'redirectTo');

      component.redirectTo(SupportAssistanceType.BEST_TARIFF);
      expect(component['urlService'].redirectTo).toHaveBeenCalledWith(component.bestTariffUrl);

      component.redirectTo(SupportAssistanceType.EASY_SWITCH);
      expect(component['urlService'].redirectTo).toHaveBeenCalledWith(component.easySwitchUrl);

      component.redirectTo(SupportAssistanceType.WATCH_TV);
      expect(component['urlService'].redirectTo).toHaveBeenCalledWith(component.watchTvUrl);

      component.redirectTo(SupportAssistanceType.SUPPORT);
      expect(component['urlService'].redirectTo).toHaveBeenCalledWith(component.supportUrl);
    });
  });
});
