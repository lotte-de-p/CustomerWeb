import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { IonicPortalCoreService } from '@telenet/ng-lib-ionic-portal';
import { ComponentInputInterface, PayByMobileComponent } from './pay-by-mobile.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

describe('PayByMobileComponent', () => {
  let component: PayByMobileComponent;
  let fixture: ComponentFixture<PayByMobileComponent>;
  let ionicPortalCoreService: IonicPortalCoreService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        PayByMobileComponent,
        HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
      providers: [IonicPortalCoreService, { provide: 'Window', useValue: window }],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    ionicPortalCoreService = TestBed.inject(IonicPortalCoreService);
    fixture = TestBed.createComponent(PayByMobileComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set default inputs if inputs are not available from app', () => {
    jest.spyOn(ionicPortalCoreService, 'inputs', 'get').mockReturnValue(null as unknown as ComponentInputInterface);
    component.ngOnInit();
    const expectedDefaultInputs: ComponentInputInterface = {
      barringSettingsUrl: 'https://www2.telenet.be/residential/nl/mijn-telenet/mobiele-nummers#/nav_item=barring',
      managePremiumServicesUrl: 'https://www2.telenet.be/residential/nl/mijn-telenet/mobiele-nummers#/nav_item=barring',
      premiumServiceBarringsUrl: 'https://www2.telenet.be/residential/nl/mijn-telenet/mobiele-nummers#/nav_item=limits',
    };
    expect(component.inputs).toEqual(expectedDefaultInputs);
  });

  it('should set inputs from IonicPortalCoreService', () => {
    const ionicPortalInput: ComponentInputInterface = {
      barringSettingsUrl: 'mock-barring-url',
      managePremiumServicesUrl: 'mock-manage-premium-url',
      premiumServiceBarringsUrl: 'mock-premium-service-url',
    };
    jest.spyOn(ionicPortalCoreService, 'inputs', 'get').mockReturnValue(ionicPortalInput);

    component.ngOnInit();
    expect(component.inputs).toEqual(ionicPortalInput);
  });
});
