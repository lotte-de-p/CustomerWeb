import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { of } from 'rxjs';
import { Actions } from '@ngrx/effects';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { ProductFinderStepperEffects } from './product-finder-stepper.effects';
import { Preference } from '../../entities/preference/preference.interface';
import { selectCurrentStepKey } from './product-finder-stepper.selectors';
import {
  selectInternetUsage,
  selectMobileUsage,
  selectPreference,
  selectTvChannels,
  selectTvExperience,
} from '../product-finder.selectors';
import { ProductFinderStepperSlice } from './product-finder-stepper.reducers';
import { goToNextStep, goToPreviousStep, nextButtonClicked } from './product-finder-stepper.actions';
import { InternetUsage } from '../../entities/internet-usage/internet-usage.interface';
import { ProductFinderSlice } from '../product-finder.reducers';
import { TvExperience } from '../../entities/tv-experience/tv-experinece.interface';
import { TvChannels } from '../../entities/tv-channels/tv-channels.interface';
import { MobileUsage } from '../../entities/mobile-usage/mobile.usage.interface';
import {
  requireAtLeastOneMobileUsageToBeSelectedForEachMobileLineError,
  requireAtLeastOneTvChannelToBeSelectedError,
} from '../product-finder.actions';
import { DomService } from '@telenet/ng-lib-shared';
import { ProductFinderStepEnum } from '../../entities/stepper/product-finder-step.enum';

describe('ProductFinderStepperEffects', () => {
  let actions$: Actions;
  let effects: ProductFinderStepperEffects;
  let store$: MockStore<ProductFinderSlice>;
  let stepperStore$: MockStore<ProductFinderStepperSlice>;
  let domService: DomService;
  const goToNextStepAction = '[Product Finder Stepper] go to next step';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore(),
        provideMockActions(() => actions$),
        {
          provide: 'Window',
          useValue: window,
        },
      ],
    });

    store$ = TestBed.inject(MockStore);
    stepperStore$ = TestBed.inject(MockStore);
    domService = TestBed.inject(DomService);
    effects = TestBed.inject<ProductFinderStepperEffects>(ProductFinderStepperEffects);
  });

  describe('nextButtonClickedOnStepIntro$', () => {
    it('should dispatch goToNextStep when current step key is intro', fakeAsync(() => {
      stepperStore$.overrideSelector(selectCurrentStepKey, ProductFinderStepEnum.INTRO);

      actions$ = of(nextButtonClicked());

      effects.nextButtonClickedOnStepIntro$.subscribe((action) => {
        expect(action.type).toEqual(goToNextStepAction);
      });

      tick();
    }));
  });

  describe('nextButtonClickedOnStepPreference$', () => {
    it('should dispatch goToNextStep when current step key is preference', fakeAsync(() => {
      const preference: Preference = {
        surfing: true,
        mobile: true,
        watchTv: true,
        fixedLine: true,
      };

      stepperStore$.overrideSelector(selectCurrentStepKey, ProductFinderStepEnum.PREFERENCE);
      store$.overrideSelector(selectPreference, preference);

      actions$ = of(nextButtonClicked());

      effects.nextButtonClickedOnStepPreference$.subscribe((action) => {
        expect(action.type).toEqual(goToNextStepAction);
      });

      tick();
    }));

    it('should dispatch requireAtLeastOnePreferenceToBeSelectedError when all preference values are false', fakeAsync(() => {
      const preference: Preference = {
        surfing: false,
        mobile: false,
        watchTv: false,
        fixedLine: false,
      };

      stepperStore$.overrideSelector(selectCurrentStepKey, ProductFinderStepEnum.PREFERENCE);
      store$.overrideSelector(selectPreference, preference);

      actions$ = of(nextButtonClicked());

      effects.nextButtonClickedOnStepPreference$.subscribe((action) => {
        expect(action.type).toEqual('[Product Finder] require at least one preference to be selected');
      });

      tick();
    }));

    it('should dispatch requireInternetWhenTvIsSelectedError when watchTv is true and surfing is false', fakeAsync(() => {
      const preference: Preference = {
        surfing: false,
        mobile: false,
        watchTv: true,
        fixedLine: false,
      };

      stepperStore$.overrideSelector(selectCurrentStepKey, ProductFinderStepEnum.PREFERENCE);
      store$.overrideSelector(selectPreference, preference);

      actions$ = of(nextButtonClicked());

      effects.nextButtonClickedOnStepPreference$.subscribe((action) => {
        expect(action.type).toEqual('[Product Finder] require internet when tv is selected');
      });

      tick();
    }));
  });

  describe('nextButtonClickedOnStepHousehold$', () => {
    it('should dispatch goToNextStep when current step key is household', fakeAsync(() => {
      stepperStore$.overrideSelector(selectCurrentStepKey, ProductFinderStepEnum.HOUSEHOLD);

      actions$ = of(nextButtonClicked());

      effects.nextButtonClickedOnStepHousehold$.subscribe((action) => {
        expect(action.type).toEqual(goToNextStepAction);
      });

      tick();
    }));
  });

  describe('nextButtonClickedOnStepInternetUsage$', () => {
    it('should dispatch goToNextStep when current step key is internetUsage', fakeAsync(() => {
      const internetUsage: InternetUsage = { selection: ['NEWS'] };

      stepperStore$.overrideSelector(selectCurrentStepKey, ProductFinderStepEnum.INTERNET_USAGE);
      store$.overrideSelector(selectInternetUsage, internetUsage);

      actions$ = of(nextButtonClicked());

      effects.nextButtonClickedOnStepInternetUsage$.subscribe((action) => {
        expect(action.type).toEqual(goToNextStepAction);
      });

      tick();
    }));

    it('should dispatch requireAtLeastOneInternetUsageToBeSelectedError when internet usage selection is empty', fakeAsync(() => {
      const internetUsage: InternetUsage = { selection: [] };

      stepperStore$.overrideSelector(selectCurrentStepKey, ProductFinderStepEnum.INTERNET_USAGE);
      store$.overrideSelector(selectInternetUsage, internetUsage);

      actions$ = of(nextButtonClicked());

      effects.nextButtonClickedOnStepInternetUsage$.subscribe((action) => {
        expect(action.type).toEqual('[Product Finder] require at least one internet usage to be selected');
      });

      tick();
    }));
  });

  describe('nextButtonClickedOnStepNumberOfSims$', () => {
    it('should dispatch goToNextStep when current step key is numberOfSims', fakeAsync(() => {
      stepperStore$.overrideSelector(selectCurrentStepKey, ProductFinderStepEnum.NUMBER_OF_SIMS);

      actions$ = of(nextButtonClicked());

      effects.nextButtonClickedOnStepNumberOfSims$.subscribe((action) => {
        expect(action.type).toEqual(goToNextStepAction);
      });

      tick();
    }));
  });

  describe('nextButtonClickedOnStepMobileUsage$', () => {
    it('should dispatch goToNextStep when current step key is mobileUsage', fakeAsync(() => {
      const mobileUsage: MobileUsage = {
        mobileLines: [
          {
            selection: ['NEWS'],
            collapsed: false,
            error: null,
          },
        ],
      };

      stepperStore$.overrideSelector(selectCurrentStepKey, ProductFinderStepEnum.MOBILE_USAGE);
      store$.overrideSelector(selectMobileUsage, mobileUsage);

      actions$ = of(nextButtonClicked());

      effects.nextButtonClickedOnStepMobileUsage$.subscribe((action) => {
        expect(action.type).toEqual(goToNextStepAction);
      });

      tick();
    }));

    it('should dispatch requireAtLeastOneMobileUsageToBeSelectedForEachMobileLineError when a mobile line selection is empty', fakeAsync(() => {
      const mobileUsage: MobileUsage = {
        mobileLines: [
          {
            selection: ['NEWS'],
            collapsed: false,
            error: null,
          },
          {
            selection: [],
            collapsed: false,
            error: null,
          },
        ],
      };

      stepperStore$.overrideSelector(selectCurrentStepKey, ProductFinderStepEnum.MOBILE_USAGE);
      store$.overrideSelector(selectMobileUsage, mobileUsage);

      actions$ = of(nextButtonClicked());

      effects.nextButtonClickedOnStepMobileUsage$.subscribe((action) => {
        expect(action.type).toEqual(
          '[Product Finder] require at least one mobile usage to be selected for each mobile line'
        );
      });

      tick();
    }));
  });

  describe('nextButtonClickedOnStepTvChannels$', () => {
    it('should dispatch goToNextStep when current step key is tvChannels', fakeAsync(() => {
      const tvChannels: TvChannels = { selection: ['FLEMISH'] };

      stepperStore$.overrideSelector(selectCurrentStepKey, ProductFinderStepEnum.TV_CHANNELS);
      store$.overrideSelector(selectTvChannels, tvChannels);

      actions$ = of(nextButtonClicked());

      effects.nextButtonClickedOnStepTvChannels$.subscribe((action) => {
        expect(action.type).toEqual(goToNextStepAction);
      });

      tick();
    }));

    it('should dispatch requireAtLeastOneTvChannelToBeSelectedError when tv channel selection is empty', fakeAsync(() => {
      const tvChannels: TvChannels = { selection: [] };

      stepperStore$.overrideSelector(selectCurrentStepKey, ProductFinderStepEnum.TV_CHANNELS);
      store$.overrideSelector(selectTvChannels, tvChannels);

      actions$ = of(nextButtonClicked());

      effects.nextButtonClickedOnStepTvChannels$.subscribe((action) => {
        expect(action.type).toEqual('[Product Finder] require at least one tv channel to be selected');
      });

      tick();
    }));
  });

  describe('nextButtonClickedOnStepTvExperience$', () => {
    it('should dispatch goToNextStep when current step key is tvExperience', fakeAsync(() => {
      const tvExperience: TvExperience = { selection: ['TV_BOX'] };

      stepperStore$.overrideSelector(selectCurrentStepKey, ProductFinderStepEnum.TV_EXPERIENCE);
      store$.overrideSelector(selectTvExperience, tvExperience);

      actions$ = of(nextButtonClicked());

      effects.nextButtonClickedOnStepTvExperience$.subscribe((action) => {
        expect(action.type).toEqual(goToNextStepAction);
      });

      tick();
    }));

    it('should dispatch requireAtLeastOneTvExperienceToBeSelectedError when tv experience selection is empty', fakeAsync(() => {
      const tvExperience: TvExperience = { selection: [] };

      stepperStore$.overrideSelector(selectCurrentStepKey, ProductFinderStepEnum.TV_EXPERIENCE);
      store$.overrideSelector(selectTvExperience, tvExperience);

      actions$ = of(nextButtonClicked());

      effects.nextButtonClickedOnStepTvExperience$.subscribe((action) => {
        expect(action.type).toEqual('[Product Finder] require at least one tv experience to be selected');
      });

      tick();
    }));
  });

  describe('goToNextStepSetStepConfig$', () => {
    it('should dispatch setStepConfig', fakeAsync(() => {
      const preference: Preference = {
        surfing: true,
        mobile: true,
        watchTv: true,
        fixedLine: true,
      };

      stepperStore$.overrideSelector(selectCurrentStepKey, ProductFinderStepEnum.PREFERENCE);
      store$.overrideSelector(selectPreference, preference);

      actions$ = of(goToNextStep());

      effects.goToNextStepSetStepConfig$.subscribe((action) => {
        expect(action.type).toEqual('[Product Finder Stepper] set step config');
      });

      tick();
    }));
  });

  describe('goToPreviousStepClearError$', () => {
    it('should dispatch clearError', fakeAsync(() => {
      actions$ = of(goToPreviousStep());

      effects.goToPreviousStepClearError$.subscribe((action) => {
        expect(action.type).toEqual('[Product Finder] clear error');
      });

      tick();
    }));
  });

  describe('errorScrollToTop$', () => {
    it('should call scrollToTop when requireAtLeastOneTvChannelToBeSelectedError', fakeAsync(() => {
      const scrollToTopSpy = jest.spyOn(domService, 'scrollToTop');

      actions$ = of(requireAtLeastOneTvChannelToBeSelectedError());

      effects.errorScrollToTop$.subscribe(() => {
        expect(scrollToTopSpy).toHaveBeenCalled();
      });

      tick();
    }));

    it('should call scrollToTop when requireAtLeastOneMobileUsageToBeSelectedForEachMobileLineError', fakeAsync(() => {
      const scrollToTopSpy = jest.spyOn(domService, 'scrollToTop');

      actions$ = of(requireAtLeastOneMobileUsageToBeSelectedForEachMobileLineError());

      effects.errorScrollToTop$.subscribe(() => {
        expect(scrollToTopSpy).toHaveBeenCalled();
      });

      tick();
    }));
  });
});
