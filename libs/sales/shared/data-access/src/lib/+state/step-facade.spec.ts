import { StepFacade } from './step-facade';
import { TestBed } from '@angular/core/testing';
import {
  goToNextStep,
  goToPreviousStep,
  setBackButtonVisibility,
  setNavigationBarVisibility,
  setNextButtonLabel,
  setStepConfig,
} from './step.actions';
import { of } from 'rxjs';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { NextButtonLabelEnum } from '../enums/sales-stepper/next-button-label.enum';

describe('StepFacade', () => {
  let facade: StepFacade;
  let store$: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore()],
    });

    store$ = TestBed.inject(MockStore);
    facade = TestBed.inject(StepFacade);

    jest.spyOn(store$, 'dispatch');
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  describe('setStepConfig', () => {
    it('should dispatch the provided steps', () => {
      const steps = { steps: [] };

      facade.setStepConfig(steps);

      expect(store$.dispatch).toHaveBeenCalledWith(setStepConfig(steps));
    });
  });

  describe('goToNextStep', () => {
    it('should increment current step', () => {
      facade.goToNextStep();

      expect(store$.dispatch).toHaveBeenCalledWith(goToNextStep());
    });
  });

  describe('goToPreviousStep', () => {
    it('should decrement current step', () => {
      facade.goToPreviousStep();

      expect(store$.dispatch).toHaveBeenCalledWith(goToPreviousStep());
    });
  });

  describe('current step', () => {
    it('should select the current step from store', () => {
      const currentStep = { currentStepKey: '1' };

      jest.spyOn(store$, 'select').mockReturnValue(of(currentStep));

      facade.currentStepKey$.subscribe((step) => {
        expect(step).toEqual(currentStep);
      });
    });
  });

  describe('selectedSteps', () => {
    it('should select all steps from store', () => {
      const allSteps = {
        steps: ['1', '2'],
      };

      jest.spyOn(store$, 'select').mockReturnValue(of(allSteps));

      facade.selectedSteps$.subscribe((selectedSteps) => {
        expect(selectedSteps).toEqual(allSteps);
      });
    });
  });

  describe('isFirstStep', () => {
    it('should return true if the selector returns true', () => {
      jest.spyOn(store$, 'select').mockReturnValue(of(true));

      facade.isFirstStep$.subscribe((selectedSteps) => {
        expect(selectedSteps).toEqual(true);
      });
    });

    it('should return false if the selector returns false', () => {
      jest.spyOn(store$, 'select').mockReturnValue(of(false));

      facade.isFirstStep$.subscribe((selectedSteps) => {
        expect(selectedSteps).toEqual(false);
      });
    });
  });

  describe('setNextButtonLabel', () => {
    it('should set the next button label', () => {
      facade.setNextButtonLabel(NextButtonLabelEnum.ORDER);

      expect(store$.dispatch).toHaveBeenCalledWith(setNextButtonLabel({ nextButtonLabel: NextButtonLabelEnum.ORDER }));
    });
  });

  describe('displayNavigationBar', () => {
    it('should set navigation bar visibility to true', () => {
      facade.displayNavigationBar();
      expect(store$.dispatch).toHaveBeenCalledWith(setNavigationBarVisibility({ visible: true }));
    });
  });

  describe('hideNavigationBar', () => {
    it('should set navigation bar visibility to false', () => {
      facade.hideNavigationBar();
      expect(store$.dispatch).toHaveBeenCalledWith(setNavigationBarVisibility({ visible: false }));
    });
  });

  describe('showBackButton', () => {
    it('should set back button visibility to true', () => {
      facade.showBackButton();
      expect(store$.dispatch).toHaveBeenCalledWith(setBackButtonVisibility({ visible: true }));
    });
  });

  describe('hideBackButton', () => {
    it('should set back button visibility to false', () => {
      facade.hideBackButton();
      expect(store$.dispatch).toHaveBeenCalledWith(setBackButtonVisibility({ visible: false }));
    });
  });
});
