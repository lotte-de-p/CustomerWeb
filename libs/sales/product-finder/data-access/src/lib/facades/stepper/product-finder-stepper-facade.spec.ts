import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { goToNextStep, goToPreviousStep, redoTest } from '../../+state/stepper/product-finder-stepper.actions';
import { Observable } from 'rxjs';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { ProductFinderStepperFacade } from '../../facades/stepper/product-finder-stepper-facade';
import { ProductFinderStep } from '../../entities/stepper/product-finder-step';
import {
  selectCurrentStep,
  selectCurrentStepKey,
  selectProgressBarVisible,
  selectSteps,
} from '../../+state/stepper/product-finder-stepper.selectors';
import { ProductFinderStepperState } from '../../+state/stepper/product-finder-stepper.reducers';
import { ProductFinderStepEnum } from '../../entities/stepper/product-finder-step.enum';

describe('ProductFinderStepperFacade', () => {
  let facade: ProductFinderStepperFacade;
  let store$: MockStore<ProductFinderStepperState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore()],
    });

    store$ = TestBed.inject(MockStore);
    facade = TestBed.inject(ProductFinderStepperFacade);
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  describe('select', () => {
    it('currentStep$', fakeAsync(() => {
      const currentStep: ProductFinderStep = {
        key: '1',
      };
      store$.overrideSelector(selectCurrentStep, currentStep);

      const result$: Observable<ProductFinderStep> = facade.currentStep$;

      result$.subscribe((step: ProductFinderStep) => {
        expect(step).toEqual(currentStep);
      });
      tick();
    }));

    it('currentStepKey$', fakeAsync(() => {
      const currentStep: ProductFinderStep = {
        key: '1',
      };
      store$.overrideSelector(selectCurrentStepKey, currentStep.key);

      const result$: Observable<string> = facade.currentStepKey$;

      result$.subscribe((key: string) => {
        expect(key).toEqual(currentStep.key);
      });
      tick();
    }));

    it('steps$', fakeAsync(() => {
      const allSteps: ProductFinderStep[] = [{ key: '1' }, { key: '2' }];
      store$.overrideSelector(selectSteps, allSteps);

      const result$: Observable<ProductFinderStep[]> = facade.steps$;

      result$.subscribe((steps: ProductFinderStep[]) => {
        expect(steps).toEqual(allSteps);
      });
      tick();
    }));

    it('currentStepNumber$', fakeAsync(() => {
      const allSteps: ProductFinderStep[] = [{ key: '1' }, { key: '2' }];
      const currentStep: ProductFinderStep = {
        key: '1',
      };
      store$.overrideSelector(selectSteps, allSteps);
      store$.overrideSelector(selectCurrentStep, currentStep);

      const result$: Observable<number> = facade.currentStepNumber$;

      result$.subscribe((currentStepNumber: number) => {
        expect(currentStepNumber).toEqual(1);
      });
      tick();
    }));

    describe('progressPercentage$', () => {
      it('should return calculated progress percentage', fakeAsync(() => {
        const allSteps: ProductFinderStep[] = [
          { key: ProductFinderStepEnum.INTRO },
          { key: ProductFinderStepEnum.PREFERENCE },
          { key: ProductFinderStepEnum.HOUSEHOLD },
          { key: ProductFinderStepEnum.INTERNET_USAGE },
          { key: ProductFinderStepEnum.RESULTS_SCREEN },
        ];
        const currentStep: ProductFinderStep = {
          key: ProductFinderStepEnum.INTERNET_USAGE,
        };
        store$.overrideSelector(selectSteps, allSteps);
        store$.overrideSelector(selectCurrentStep, currentStep);

        const result$: Observable<number> = facade.progressPercentage$;

        result$.subscribe((progressPercentage: number) => {
          expect(progressPercentage).toEqual(80);
        });
        tick();
      }));

      it('should return 25 when currentStepKey is preference', fakeAsync(() => {
        const allSteps: ProductFinderStep[] = [
          { key: ProductFinderStepEnum.INTRO },
          { key: ProductFinderStepEnum.PREFERENCE },
          { key: ProductFinderStepEnum.HOUSEHOLD },
          { key: ProductFinderStepEnum.INTERNET_USAGE },
          { key: ProductFinderStepEnum.RESULTS_SCREEN },
        ];
        const currentStep: ProductFinderStep = {
          key: ProductFinderStepEnum.PREFERENCE,
        };
        store$.overrideSelector(selectCurrentStepKey, ProductFinderStepEnum.PREFERENCE);
        store$.overrideSelector(selectSteps, allSteps);
        store$.overrideSelector(selectCurrentStep, currentStep);

        const result$: Observable<number> = facade.progressPercentage$;

        result$.subscribe((progressPercentage: number) => {
          expect(progressPercentage).toEqual(25);
        });
        tick();
      }));
    });

    describe('progressBarVisible$', () => {
      it('should return true', fakeAsync(() => {
        const expected = true;

        store$.overrideSelector(selectProgressBarVisible, expected);

        const result$: Observable<boolean> = facade.progressBarVisible$;

        result$.subscribe((progressBarVisible: boolean) => {
          expect(progressBarVisible).toEqual(expected);
        });
        tick();
      }));
    });
  });

  describe('dispatch', () => {
    beforeEach(() => {
      jest.spyOn(store$, 'dispatch');
    });

    it('goToNextStep should increment current step', () => {
      facade.goToNextStep();

      expect(store$.dispatch).toHaveBeenCalledWith(goToNextStep());
    });

    it('goToPreviousStep should decrement current step', () => {
      facade.goToPreviousStep();

      expect(store$.dispatch).toHaveBeenCalledWith(goToPreviousStep());
    });

    it('redoTest should dispatch redoTest', () => {
      facade.redoTest();

      expect(store$.dispatch).toHaveBeenCalledWith(redoTest());
    });
  });
});
