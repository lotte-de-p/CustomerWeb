import { TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Log, LogFactory } from '@telenet/ng-lib-shared';
import {
  ETFStepValidAction,
  GoToFinalStepAction,
  GoToNextStepAction,
  GoToPreviousStepAction,
  GoToStepAction,
  InsertStepsAfterAction,
  InsertStepsBeforeAction,
  RemoveStepsWithStepKeysAction,
  ReportStepLoadTimingAction,
  SetStepCompleteAction,
  SetStepConfigurationAction,
  SetStepIncompleteAction,
  SetStepNavigationStartTimeAction,
  SetStepsAction,
  SetStepsEnabledState,
  SetStepToEditAction,
  UpdateCurrentStepImageAction,
  UpdateStepAction,
} from './step-flow.actions';
import { StepFlowState } from './step-flow.state';
import { TemplateFactory } from '../factories/template.factory';
import { StepBuilder } from '../step.builder';
import { StepConfig } from '../interfaces/step-config.interface';

@Component({
  template: ` <div>dd</div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestComponent {}

describe('StepFlowState', () => {
  let store: Store;
  const log: Log = {} as Log;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([StepFlowState])],
      providers: [TemplateFactory],
    });
    store = TestBed.inject(Store);
    LogFactory.createLogger = jest.fn().mockReturnValue(log);
    log.logError = jest.fn();
  });

  describe('with configuration', () => {
    const steps = [
      StepBuilder.builder('step1').build(),
      StepBuilder.builder('step2').withImage('imagePath').build(),
      StepBuilder.builder('step3').withFinalState().build(),
    ];

    beforeEach(() => {
      store.dispatch(new SetStepsAction(steps));
    });

    describe('SetStepsAction', () => {
      it('should set current step', function () {
        const steps = [
          StepBuilder.builder('step1').build(),
          StepBuilder.builder('step2').build(),
          StepBuilder.builder('step3').build(),
        ];
        store.dispatch(new SetStepsAction(steps));
        expect(store.selectSnapshot(StepFlowState.steps).length).toEqual(steps.length);
        expect(store.selectSnapshot(StepFlowState.currentStep)).toEqual(steps[0]);
      });
    });

    describe('currentStepImage', () => {
      it('should return empty string given no image', function () {
        const steps = [StepBuilder.builder('step1').build(), StepBuilder.builder('step2').build()];
        store.dispatch(new SetStepsAction(steps));
        expect(store.selectSnapshot(StepFlowState.steps).length).toEqual(steps.length);
        expect(store.selectSnapshot(StepFlowState.currentStepImage)).toEqual('');
      });
      it('should return step image', function () {
        const steps = [StepBuilder.builder('step1').withImage('someImage').build()];
        store.dispatch(new SetStepsAction(steps));
        expect(store.selectSnapshot(StepFlowState.steps).length).toEqual(steps.length);
        expect(store.selectSnapshot(StepFlowState.currentStepImage)).toEqual('someImage');
      });
    });
    describe('stepNumber', () => {
      it('should return the current step number starting with 1', function () {
        const steps = [StepBuilder.builder('step1').build(), StepBuilder.builder('step2').build()];
        store.dispatch(new SetStepsAction(steps));
        expect(store.selectSnapshot(StepFlowState.steps).length).toEqual(steps.length);
        expect(store.selectSnapshot(StepFlowState.stepNumber)).toEqual(1);
      });
    });

    describe('GoToFinalStepAction', () => {
      it('should go to the final step', function () {
        const steps = [
          StepBuilder.builder('step1').withEnabledState(true).withCompletedState(true).build(),
          StepBuilder.builder('step2').withEnabledState(true).withCompletedState(false).build(),
          StepBuilder.builder('step3').withEnabledState(true).withCompletedState(false).withFinalState().build(),
        ];
        store.dispatch(new SetStepsAction(steps));
        store.dispatch(new GoToFinalStepAction());
        const step = store.selectSnapshot(StepFlowState.currentStep);
        expect(step).toEqual(steps[2]);
      });
    });

    describe('ReportStepLoadTimingAction', () => {
      it('should return reportStepLoadTiming', function () {
        store.dispatch(new ReportStepLoadTimingAction(true));
        const selectSnapshot = store.selectSnapshot(StepFlowState.reportStepLoadTiming);
        expect(selectSnapshot).toBe(true);
      });
    });

    describe('ETFStepValidAction', () => {
      it('should return isETFStepValid', function () {
        store.dispatch(new ETFStepValidAction(true));
        const selectSnapshot = store.selectSnapshot(StepFlowState.isETFStepValid);
        expect(selectSnapshot).toBe(true);
      });
    });

    describe('GoToNextStepAction', () => {
      it('should throw error if current step is final', function () {
        store.dispatch(new GoToFinalStepAction());
        expect(store.selectSnapshot(StepFlowState.currentStep)?.key).toEqual('step3');
        store.dispatch(new GoToNextStepAction());
        expect(store.selectSnapshot(StepFlowState.currentStep)?.key).toEqual('step3');
      });
      it('should go to the next step when current step is completed', function () {
        const steps = [
          StepBuilder.builder('step1').withEnabledState(true).withCompletedState(true).build(),
          StepBuilder.builder('step2').withEnabledState(true).withCompletedState(false).build(),
          StepBuilder.builder('step3').withEnabledState(true).withCompletedState(false).build(),
        ];
        store.dispatch(new SetStepsAction(steps));
        store.dispatch(new GoToNextStepAction());
        const currentStep = store.selectSnapshot(StepFlowState.currentStep);
        expect(currentStep?.key).toEqual('step2');
      });

      it('should go to the next step', function () {
        store.dispatch(new SetStepIncompleteAction('step1'));
        store.dispatch(new GoToNextStepAction());
        const currentStep = store.selectSnapshot(StepFlowState.currentStep);
        expect(currentStep?.key).toEqual('step2');
        expect(currentStep?.isCompleted).toEqual(true);
      });

      it('should go to the next step and set complete false', function () {
        store.dispatch(new GoToNextStepAction(false));
        const currentStep = store.selectSnapshot(StepFlowState.currentStep);
        expect(currentStep?.key).toEqual('step3');
        expect(currentStep?.isCompleted).toEqual(false);
      });
    });

    describe('SetStepNavigationStartTimeAction', () => {
      it('should be truthy', function () {
        store.dispatch(new SetStepNavigationStartTimeAction());
        const selectSnapshot = store.selectSnapshot(StepFlowState.stepNavigationStartTime);
        expect(selectSnapshot).toBeTruthy();
      });
    });

    describe('UpdateCurrentStepImageAction', () => {
      it('should change image', function () {
        store.dispatch(new UpdateCurrentStepImageAction('image'));
        const imageName = store.selectSnapshot(StepFlowState.currentStepImage);
        expect(imageName).toEqual('image');
      });
    });

    describe('GoToStepAction', () => {
      it('should jump to the step with key', function () {
        store.dispatch(new GoToFinalStepAction());
        store.dispatch(new GoToStepAction('step1'));
        const result = store.selectSnapshot(StepFlowState.currentStep);
        expect(result?.key).toBe('step1');
      });
    });

    describe('UpdateStepAction', () => {
      it('should update the current step', function () {
        expect(store.selectSnapshot(StepFlowState.steps)[1].image).toEqual('imagePath');
        store.dispatch(new UpdateStepAction(StepBuilder.builder('step2').withImage('imageChanged').build()));
        const steps = store.selectSnapshot(StepFlowState.steps);
        expect(steps[1].image).toEqual('imageChanged');
      });
    });

    describe('SetStepsEnabledState', () => {
      it('should put enable to true', function () {
        expect(store.selectSnapshot(StepFlowState.steps)[1].isEnabled).toBe(true);
        store.dispatch(
          new SetStepsEnabledState([
            {
              state: false,
              stepKey: 'step2',
            },
          ])
        );
        expect(store.selectSnapshot(StepFlowState.steps)[1].isEnabled).toBe(false);
      });
    });

    describe('RemoveStepsWithStepKeysAction', () => {
      it('should remove step', function () {
        expect(store.selectSnapshot(StepFlowState.steps).length).toEqual(3);
        store.dispatch(new RemoveStepsWithStepKeysAction(['step2']));
        expect(store.selectSnapshot(StepFlowState.steps).length).toEqual(2);
      });
    });

    describe('containsStep', () => {
      it('should return', function () {
        expect(StepFlowState.containsStep('step2')).toBeTruthy();
      });
      it('should return', function () {
        expect(StepFlowState.containsStep('step-12')).toBeTruthy();
      });
    });

    describe('SetStepToEditAction', () => {
      it('should edit step', function () {
        expect(store.selectSnapshot(StepFlowState.currentStep)?.key).toEqual('step1');
        store.dispatch(new SetStepToEditAction('step2'));
        expect(store.selectSnapshot(StepFlowState.currentStep)?.key).toEqual('step2');
      });
    });

    describe('SetStepIncompleteAction', () => {
      it('should set step incomplete', function () {
        store.dispatch(new SetStepCompleteAction('step1'));
        expect(store.selectSnapshot(StepFlowState.currentStep)?.isCompleted).toBe(true);
        store.dispatch(new SetStepIncompleteAction('step1'));
        expect(store.selectSnapshot(StepFlowState.currentStep)?.isCompleted).toBe(false);
      });
    });

    describe('SetStepCompleteAction', () => {
      it('should set step1 on complete', function () {
        expect(store.selectSnapshot(StepFlowState.currentStep)?.isCompleted).toBe(false);
        store.dispatch(new SetStepCompleteAction('step1'));
        expect(store.selectSnapshot(StepFlowState.currentStep)?.isCompleted).toBe(true);
      });
    });

    describe('InsertStepsBeforeAction', () => {
      it('should add step before steps', function () {
        expect(store.selectSnapshot(StepFlowState.steps).length).toEqual(3);
        store.dispatch(new InsertStepsBeforeAction([StepBuilder.builder('step4').build()], 'step1'));
        const steps = store.selectSnapshot(StepFlowState.steps);
        expect(steps.length).toEqual(4);
        expect(steps[0].key).toEqual('step4');
      });
    });
  });

  describe('SetStepConfigurationAction', () => {
    it('should configure steps', function () {
      const stepFlowConfig = {
        key: 'step',
        steps: [
          {
            key: 'step-1',
            imagePath: 'imagePath',
            component: TestComponent,
          } as StepConfig,
          {
            key: 'step-2',
            imagePath: 'imagePath',
            component: TestComponent,
          } as StepConfig,
        ],
      };
      store.dispatch(new SetStepConfigurationAction(stepFlowConfig));
      const step = store.selectSnapshot(StepFlowState.currentStep);
      expect(step?.key).toEqual('step-1');
    });
  });

  describe('GoToStepAction', () => {
    it('should jump to the step with key', function () {
      const stepFlowConfig = {
        key: 'step',
        steps: [
          {
            key: 'step1',
            imagePath: 'imagePath',
            component: TestComponent,
          } as StepConfig,
          {
            key: 'step2',
            imagePath: 'imagePath',
            component: TestComponent,
          } as StepConfig,
        ],
      };
      store.dispatch(new SetStepConfigurationAction(stepFlowConfig));
      store.dispatch(new GoToFinalStepAction());
      store.dispatch(new GoToStepAction('step1'));
      const result = store.selectSnapshot(StepFlowState.currentStep);
      expect(result?.key).toBe('step1');
    });
  });

  describe('InsertStepsAfterAction', () => {
    it('should add step', function () {
      const stepFlowConfig = {
        key: 'step',
        steps: [
          {
            key: 'step-1',
            imagePath: 'imagePath',
            component: TestComponent,
          } as StepConfig,
          {
            key: 'step-2',
            imagePath: 'imagePath',
            component: TestComponent,
          } as StepConfig,
        ],
      };
      store.dispatch(new SetStepConfigurationAction(stepFlowConfig));
      expect(store.selectSnapshot(StepFlowState.steps).length).toEqual(2);
      store.dispatch(new InsertStepsAfterAction([StepBuilder.builder('step-3').build()], 'step'));
      expect(store.selectSnapshot(StepFlowState.steps).length).toEqual(3);
    });
  });

  describe('GoToPreviousStepAction', () => {
    beforeEach(() => {
      const steps = [
        StepBuilder.builder('step1').build(),
        StepBuilder.builder('step2').withImage('imagePath').build(),
        StepBuilder.builder('step3').build(),
      ];

      store.dispatch(new SetStepsAction(steps));
    });
    it('should go to previous step when current step is completed', function () {
      store.dispatch(new SetStepToEditAction('step2'));
      store.dispatch(new SetStepCompleteAction('step2'));
      expect(store.selectSnapshot(StepFlowState.currentStep)?.key).toEqual('step2');
      store.dispatch(new GoToPreviousStepAction());
      expect(store.selectSnapshot(StepFlowState.currentStep)?.key).toEqual('step1');
    });

    it('should go to previous step when current step not completed', function () {
      store.dispatch(new SetStepToEditAction('step2'));
      store.dispatch(new SetStepCompleteAction('step1'));
      expect(store.selectSnapshot(StepFlowState.currentStep)?.key).toEqual('step2');
      expect(store.selectSnapshot(StepFlowState.currentStep)?.isCompleted).toEqual(false);
      store.dispatch(new GoToPreviousStepAction());
      expect(store.selectSnapshot(StepFlowState.currentStep)?.key).toEqual('step1');
    });

    it('should not go to previous step when no step is enabled', function () {
      const steps = [
        StepBuilder.builder('step1').withEnabledState(false).build(),
        StepBuilder.builder('step2').withEnabledState(false).withImage('imagePath').build(),
        StepBuilder.builder('step3').withEnabledState(false).build(),
      ];

      store.dispatch(new SetStepsAction(steps));
      store.dispatch(new SetStepToEditAction('step2'));
      expect(store.selectSnapshot(StepFlowState.currentStep)?.key).toEqual('step2');
      store.dispatch(new GoToPreviousStepAction());
      expect(store.selectSnapshot(StepFlowState.currentStep)?.key).toEqual('step2');
    });

    it('should go to previous step', function () {
      store.dispatch(new SetStepToEditAction('step2'));
      store.dispatch(new SetStepIncompleteAction('step2'));
      expect(store.selectSnapshot(StepFlowState.currentStep)?.key).toEqual('step2');
      store.dispatch(new GoToPreviousStepAction());
      expect(store.selectSnapshot(StepFlowState.currentStep)?.key).toEqual('step1');
    });
  });
});
