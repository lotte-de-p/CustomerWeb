import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardwareCheckoutComponent } from './hardware-checkout.component';
import { StoreModule } from '@ngrx/store';
import { JsonUrlService, LoaderModule, UrlService, windowFactory } from '@telenet/ng-lib-page';
import { HttpClientModule } from '@angular/common/http';
import { HardwareCheckoutEffects, hardwareCheckoutFeature } from '@sales/hardware-checkout/data-access';
import { eventFeature, EventInterface } from '@sales/events/data-access';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { EMPTY, Observable, of } from 'rxjs';
import { ConfigService } from '@telenet/ng-lib-config';
import { EffectsModule } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { HardwareCheckoutFacade } from './facades/hardware-checkout.facade';
import { HardwareCheckoutHelperService } from './services/hardware-checkout-helper.service';
import { HardwareCheckoutDataLayerService } from './services/data-layer.service';

@Injectable({ providedIn: 'root' })
export class MockHardwareCheckoutFacade {
  setThankYouRedirectUrl = jest.fn();
  setTermsAndConditionsUrl = jest.fn();
  setIngenicoFormUrl = jest.fn();

  setStartStepLoadTime = jest.fn();
  setAemInputs = jest.fn();
  setReferrerUrl = jest.fn();
  setViewState = jest.fn();

  stepEvent: Observable<EventInterface | undefined> = of(undefined);
}

describe('HardwareCheckoutComponent', () => {
  let component: HardwareCheckoutComponent;
  let fixture: ComponentFixture<HardwareCheckoutComponent>;
  let jsonUrlService: JsonUrlService;
  let urlService: UrlService;
  let configService: ConfigService;
  let hardwareCheckoutFacade: HardwareCheckoutFacade;
  let hardwareCheckoutHelperService: HardwareCheckoutHelperService;
  let dataLayerService: HardwareCheckoutDataLayerService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(),
        StoreModule.forFeature(hardwareCheckoutFeature),
        StoreModule.forFeature(eventFeature),
        EffectsModule.forRoot(HardwareCheckoutEffects),
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        HttpClientModule,
        LoaderModule,
      ],
      providers: [
        UrlService,
        { provide: 'Window', useValue: windowFactory() },
        ConfigService,
        { provide: HardwareCheckoutFacade, useClass: MockHardwareCheckoutFacade },
      ],
    }).compileComponents();

    urlService = TestBed.inject(UrlService);
    jsonUrlService = TestBed.inject(JsonUrlService);
    hardwareCheckoutFacade = TestBed.inject(HardwareCheckoutFacade);
    hardwareCheckoutHelperService = TestBed.inject(HardwareCheckoutHelperService);
    dataLayerService = TestBed.inject(HardwareCheckoutDataLayerService);

    jest.spyOn(urlService, 'getRequestParamValue').mockReturnValue('mock');

    jest.spyOn(jsonUrlService, 'decompress').mockReturnValue(
      of({
        offers: [
          {
            id: 'HWTO0001',
            type: 'Hardware',
            offers: [
              {
                itemCode: '3300549',
                type: 'smartphones',
                customerChosenDiscount: {
                  type: 'Basic Discount',
                  price: 130,
                  id: '9155501914465272430',
                },
              },
              {
                itemCode: '2100217',
                type: 'charger',
              },
              {
                itemCode: '3300444',
                type: 'cover',
              },
            ],
          },
        ],
      })
    );

    configService = TestBed.inject(ConfigService);
    jest.spyOn(configService, 'getConfig').mockReturnValue('https://api.int.telenet.be/ocapi');

    jest.spyOn(hardwareCheckoutHelperService, 'initialiseFlow').mockReturnValue(of(false));
    jest.spyOn(hardwareCheckoutHelperService, 'executeEventStrategy').mockReturnValue(jest.fn(() => EMPTY));
    jest.spyOn(dataLayerService, 'setPageProperties');

    fixture = TestBed.createComponent(HardwareCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should start step load time', () => {
      component.ngOnInit();

      expect(hardwareCheckoutFacade.setStartStepLoadTime).toHaveBeenCalled();
      expect(dataLayerService.setPageProperties).toHaveBeenCalled();
    });
  });
});
