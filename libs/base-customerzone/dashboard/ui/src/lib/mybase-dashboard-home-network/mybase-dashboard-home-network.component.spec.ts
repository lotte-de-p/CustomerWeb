import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyBaseDashboardHomeNetworkComponent } from './mybase-dashboard-home-network.component';
import { TranslateFakeLoader, TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';

describe('MybaseDashboardHomeNetworkComponent', () => {
  let component: MyBaseDashboardHomeNetworkComponent;
  let fixture: ComponentFixture<MyBaseDashboardHomeNetworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useValue: TranslateFakeLoader },
        }),
      ],
      providers: [TranslateService, { provide: 'Window', useValue: { location: {} } }],
    }).compileComponents();

    fixture = TestBed.createComponent(MyBaseDashboardHomeNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('goToHomeNetwork', () => {
    it('should redirect to home network URL', () => {
      jest.spyOn(component['urlService'], 'redirectTo');
      component.homeNetworkUrl = 'https://home-network';

      component.goToHomeNetwork();

      expect(component['urlService'].redirectTo).toHaveBeenCalledWith('https://home-network');
    });
  });

  describe('goToWifiPassport', () => {
    it('should redirect to wifi passport URL', () => {
      jest.spyOn(component['urlService'], 'redirectTo');
      component.wifiPassportUrl = 'https://wifi-passport';

      component.goToWifiPassport();

      expect(component['urlService'].redirectTo).toHaveBeenCalledWith('https://wifi-passport');
    });
  });
});
