import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferenceComponent } from './preference.component';
import {
  Preference,
  PreferenceFacade,
  ProductFinderNgrxModule,
  ProductFinderStepperFacade,
  ProductFinderStepperNgrxModule,
} from '@sales/product-finder/data-access';
import { StoreModule } from '@ngrx/store';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { OverlayPopupComponent } from '@telenet/ng-lib-shared';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

describe('PreferenceComponent', () => {
  let component: PreferenceComponent;
  let fixture: ComponentFixture<PreferenceComponent>;
  let preferenceFacade: PreferenceFacade;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(),
        EffectsModule.forRoot(),
        ProductFinderNgrxModule,
        ProductFinderStepperNgrxModule,
        TgTranslateTestingModule.forRoot({
          translations: {
            'ng.product-finder.step-preferences.multiple.options.error': 'Kies minstens 1 optie om verder te gaan.',
          },
        }),
        OverlayPopupComponent,
        HttpClientModule,
      ],
      providers: [
        ProductFinderStepperFacade,
        {
          provide: 'Window',
          useValue: {
            localisationData: {
              keys: {
                not: 'empty',
              },
            },
          },
        },
      ],
    }).compileComponents();

    preferenceFacade = TestBed.inject(PreferenceFacade);

    fixture = TestBed.createComponent(PreferenceComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should select preference and set preferenceForm value', () => {
      const preference: Preference = {
        mobile: false,
        surfing: false,
        watchTv: false,
        fixedLine: false,
      };

      component.ngOnInit();

      expect(component.preferenceFrom.value).toEqual(preference);
    });

    it('should subscribe to preferenceForm valueChanges and update preference', () => {
      const preference: Preference = {
        mobile: true,
        surfing: false,
        watchTv: false,
        fixedLine: false,
      };

      jest.spyOn(preferenceFacade, 'updatePreference');

      component.ngOnInit();
      component.preferenceFrom.controls['mobile'].setValue(true);
      fixture.detectChanges();

      expect(component.preferenceFrom.value).toEqual(preference);
      expect(preferenceFacade.updatePreference).toHaveBeenCalledWith(preference);
    });
  });

  describe('selectInternet', () => {
    it('should patch preferenceForm with surfing true', () => {
      const preference: Preference = {
        mobile: false,
        surfing: true,
        watchTv: false,
        fixedLine: false,
      };

      component.selectInternet();

      expect(component.preferenceFrom.value).toEqual(preference);
    });
  });

  describe('closePopup', () => {
    it('should call clearError', () => {
      const clearErrorSpy = jest.spyOn(preferenceFacade, 'clearError');

      component.closePopup();

      expect(clearErrorSpy).toHaveBeenCalled();
    });
  });
});
