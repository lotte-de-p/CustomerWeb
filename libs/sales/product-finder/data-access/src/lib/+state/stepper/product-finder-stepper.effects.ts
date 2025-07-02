import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { goToNextStep, goToPreviousStep, nextButtonClicked, setStepConfig } from './product-finder-stepper.actions';
import { filter, map, mergeMap, take, tap, withLatestFrom } from 'rxjs/operators';
import { selectCurrentStepKey } from './product-finder-stepper.selectors';
import { ProductFinderSlice } from '../product-finder.reducers';
import { ProductFinderStepperSlice, stepperInitialState } from './product-finder-stepper.reducers';
import { ProductFinderStep } from '../../entities/stepper/product-finder-step';
import {
  selectInternetUsage,
  selectMobileUsage,
  selectPreference,
  selectTvChannels,
  selectTvExperience,
} from '../product-finder.selectors';
import { Preference } from '../../entities/preference/preference.interface';
import {
  clearError,
  requireAtLeastOneInternetUsageToBeSelectedError,
  requireAtLeastOneMobileUsageToBeSelectedForEachMobileLineError,
  requireAtLeastOnePreferenceToBeSelectedError,
  requireAtLeastOneTvChannelToBeSelectedError,
  requireAtLeastOneTvExperienceToBeSelectedError,
  requireInternetWhenTvIsSelectedError,
} from '../product-finder.actions';
import { InternetUsage } from '../../entities/internet-usage/internet-usage.interface';
import { MobileLine, MobileUsage } from '../../entities/mobile-usage/mobile.usage.interface';
import { TvChannels } from '../../entities/tv-channels/tv-channels.interface';
import { TvExperience } from '../../entities/tv-experience/tv-experinece.interface';
import { DomService } from '@telenet/ng-lib-shared';
import { ProductFinderStepEnum } from '../../entities/stepper/product-finder-step.enum';

@Injectable({
  providedIn: 'root',
})
export class ProductFinderStepperEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly store: Store<ProductFinderSlice>,
    private readonly stepperStore: Store<ProductFinderStepperSlice>,
    private readonly domService: DomService
  ) {}

  nextButtonClickedOnStepIntro$ = createEffect(() =>
    this.actions$.pipe(
      ofType(nextButtonClicked),
      mergeMap(() => this.stepperStore.select(selectCurrentStepKey).pipe(take(1))),
      filter((currentStepKey: string) => currentStepKey === ProductFinderStepEnum.INTRO),
      map(() => goToNextStep())
    )
  );

  nextButtonClickedOnStepPreference$ = createEffect(() =>
    this.actions$.pipe(
      ofType(nextButtonClicked),
      mergeMap(() => this.stepperStore.select(selectCurrentStepKey).pipe(take(1))),
      filter((currentStepKey: string) => currentStepKey === ProductFinderStepEnum.PREFERENCE),
      mergeMap(() => this.store.select(selectPreference).pipe(take(1))),
      map((preference: Preference) => {
        if (!Object.keys(preference).some((key: string) => preference[key])) {
          return requireAtLeastOnePreferenceToBeSelectedError();
        } else if (preference.watchTv && !preference.surfing) {
          return requireInternetWhenTvIsSelectedError();
        }
        return goToNextStep();
      })
    )
  );

  nextButtonClickedOnStepHousehold$ = createEffect(() =>
    this.actions$.pipe(
      ofType(nextButtonClicked),
      mergeMap(() => this.stepperStore.select(selectCurrentStepKey).pipe(take(1))),
      filter((currentStepKey: string) => currentStepKey === ProductFinderStepEnum.HOUSEHOLD),
      map(() => goToNextStep())
    )
  );

  nextButtonClickedOnStepInternetUsage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(nextButtonClicked),
      mergeMap(() => this.stepperStore.select(selectCurrentStepKey).pipe(take(1))),
      filter((currentStepKey: string) => currentStepKey === ProductFinderStepEnum.INTERNET_USAGE),
      mergeMap(() => this.store.select(selectInternetUsage).pipe(take(1))),
      map((internetUsage: InternetUsage | null) =>
        internetUsage?.selection.length !== 0 ? goToNextStep() : requireAtLeastOneInternetUsageToBeSelectedError()
      )
    )
  );

  nextButtonClickedOnStepNumberOfSims$ = createEffect(() =>
    this.actions$.pipe(
      ofType(nextButtonClicked),
      mergeMap(() => this.stepperStore.select(selectCurrentStepKey).pipe(take(1))),
      filter((currentStepKey: string) => currentStepKey === ProductFinderStepEnum.NUMBER_OF_SIMS),
      map(() => goToNextStep())
    )
  );

  nextButtonClickedOnStepMobileUsage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(nextButtonClicked),
      mergeMap(() => this.stepperStore.select(selectCurrentStepKey).pipe(take(1))),
      filter((currentStepKey: string) => currentStepKey === ProductFinderStepEnum.MOBILE_USAGE),
      mergeMap(() => this.store.select(selectMobileUsage).pipe(take(1))),
      map((mobileUsage: MobileUsage | null) =>
        mobileUsage?.mobileLines.every((mobileLine: MobileLine) => mobileLine.selection.length > 0)
          ? goToNextStep()
          : requireAtLeastOneMobileUsageToBeSelectedForEachMobileLineError()
      )
    )
  );

  nextButtonClickedOnStepTvChannels$ = createEffect(() =>
    this.actions$.pipe(
      ofType(nextButtonClicked),
      mergeMap(() => this.stepperStore.select(selectCurrentStepKey).pipe(take(1))),
      filter((currentStepKey: string) => currentStepKey === ProductFinderStepEnum.TV_CHANNELS),
      mergeMap(() => this.store.select(selectTvChannels).pipe(take(1))),
      map((tvChannels: TvChannels | null) =>
        tvChannels?.selection.length !== 0 ? goToNextStep() : requireAtLeastOneTvChannelToBeSelectedError()
      )
    )
  );

  nextButtonClickedOnStepTvExperience$ = createEffect(() =>
    this.actions$.pipe(
      ofType(nextButtonClicked),
      mergeMap(() => this.stepperStore.select(selectCurrentStepKey).pipe(take(1))),
      filter((currentStepKey: string) => currentStepKey === ProductFinderStepEnum.TV_EXPERIENCE),
      mergeMap(() => this.store.select(selectTvExperience).pipe(take(1))),
      map((tvExperience: TvExperience | null) =>
        tvExperience?.selection.length !== 0 ? goToNextStep() : requireAtLeastOneTvExperienceToBeSelectedError()
      )
    )
  );

  goToNextStepSetStepConfig$ = createEffect(() =>
    this.actions$.pipe(
      ofType(goToNextStep),
      mergeMap(() =>
        this.stepperStore
          .select(selectCurrentStepKey)
          .pipe(take(1), withLatestFrom(this.store.select(selectPreference)))
      ),
      map(([currentStepKey, preference]: [string, Preference]) => {
        const steps: ProductFinderStep[] = this.getProductFinderSteps(preference);
        const indexOfCurrentStep: number = steps.findIndex((step: ProductFinderStep) => step.key === currentStepKey);

        return setStepConfig({ steps, currentStep: steps[indexOfCurrentStep + 1] });
      })
    )
  );

  goToPreviousStepClearError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(goToPreviousStep),
      map(() => clearError())
    )
  );

  errorScrollToTop$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          requireAtLeastOneTvChannelToBeSelectedError,
          requireAtLeastOneMobileUsageToBeSelectedForEachMobileLineError
        ),
        tap(() => this.domService.scrollToTop())
      ),
    { dispatch: false }
  );

  private getProductFinderSteps(preference: Preference): ProductFinderStep[] {
    const steps: ProductFinderStep[] = [...stepperInitialState.steps];
    if (preference.surfing) {
      steps.push({ key: ProductFinderStepEnum.HOUSEHOLD }, { key: ProductFinderStepEnum.INTERNET_USAGE });
    }
    if (preference.mobile) {
      steps.push({ key: ProductFinderStepEnum.NUMBER_OF_SIMS }, { key: ProductFinderStepEnum.MOBILE_USAGE });
    }
    if (preference.watchTv) {
      steps.push({ key: ProductFinderStepEnum.TV_CHANNELS }, { key: ProductFinderStepEnum.TV_EXPERIENCE });
    }

    steps.push({ key: ProductFinderStepEnum.RESULTS_SCREEN });

    return steps;
  }
}
