import { TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { StepFactory } from './step.factory';
import { StepConfig } from '../interfaces/step-config.interface';
import { StepFlowConfig } from '../interfaces/step-flow-config.interface';
import { StepDecision, StepDecisionType } from '../interfaces/step-decision.interface';
import { TemplateFactory } from './template.factory';
import { StepFlowState } from '../store/step-flow.state';

const testDecisionA = 'test-decision-A';
const testStepB = 'test-step-B';
const testStepA = 'test-step-A';
const testComponent = 'testComponent';
const testDecisionB = 'test-decision-B';
const testDecisionFlowConfig = 'test-decision-flow-config';
const spyOn = jest.spyOn;

function createDecisionFunction(decision: string) {
  return (_store: Store, possibleResults: StepFlowConfig[], _currentDecision: StepFlowConfig): StepFlowConfig => {
    if (possibleResults) {
      const stepFlowConfig = possibleResults.find((result) => {
        return result.key === decision;
      });

      return stepFlowConfig ? stepFlowConfig : ({} as StepFlowConfig);
    }
    return {} as StepFlowConfig;
  };
}

describe('StepFactory', () => {
  let store: Store;
  let stepFactory: StepFactory;
  let stepConfig: StepConfig;
  let stepConfigDecisionA: StepConfig;
  let stepConfigDecisionB: StepConfig;
  let stepDecision: StepDecision;
  let stepFlowConfig: StepFlowConfig;

  beforeAll(() => {
    TestBed.configureTestingModule({
      providers: [StepFactory, TemplateFactory],
      imports: [NgxsModule.forRoot([StepFlowState], { developmentMode: false })],
    });
    store = TestBed.inject(Store);
    stepFactory = TestBed.inject(StepFactory);
  });

  describe('createFlow', () => {
    beforeEach(() => {
      stepConfig = {
        key: 'test-step',
        component: testComponent,
      };
      stepFlowConfig = {
        key: 'test-flow-config',
        steps: [stepConfig],
      };
    });
    it('should add a final state if one is specified', function () {
      stepConfig.isFinalState = true;
      const steps = stepFactory.createFlow(store, stepFlowConfig);
      expect(steps[0].isFinal()).toBe(true);
    });
  });

  describe('decideFlow', () => {
    beforeEach(() => {
      stepConfigDecisionA = {
        key: testStepA,
        component: testComponent,
      };
      stepConfigDecisionB = {
        key: testStepB,
        component: testComponent,
      };
      stepDecision = {
        decisionFunction: createDecisionFunction(testDecisionA) as StepDecisionType,
        currentDecision: {
          key: 'sup',
          steps: [],
        },
        possibleResults: [
          {
            key: testDecisionA,
            steps: [stepConfigDecisionA],
          },
          {
            key: testDecisionB,
            steps: [stepConfigDecisionB],
          },
        ],
      };
      stepFlowConfig = {
        key: testDecisionFlowConfig,
        steps: [stepDecision],
      };
    });

    it('should return Step A', function () {
      const steps = stepFactory.createFlow(store, stepFlowConfig);
      expect(steps[0].key).toEqual(testStepA);
    });

    it('should return Step B', function () {
      stepDecision.decisionFunction = createDecisionFunction(testDecisionB) as StepDecisionType;
      stepDecision = {
        decisionFunction: createDecisionFunction(testDecisionA) as StepDecisionType,
        currentDecision: {
          key: 'sup',
          steps: [],
        },
        possibleResults: [
          {
            key: testDecisionA,
            steps: [stepConfigDecisionA],
          },
          {
            key: testDecisionB,
            steps: [stepConfigDecisionB],
          },
        ],
      };
      const steps = stepFactory.createFlow(store, stepFlowConfig);
      expect(steps[0].key).toEqual(testStepB);
    });

    it('initFlowAction', function () {
      const decisionA = {
        key: testDecisionA,
        steps: [stepConfigDecisionA],
        initFlowAction: function (_store: Store) {
          // nothing
        },
      };
      stepDecision = {
        decisionFunction: createDecisionFunction(testDecisionA) as StepDecisionType,
        possibleResults: [
          decisionA,
          {
            key: testDecisionB,
            steps: [stepConfigDecisionB],
          },
        ],
        currentDecision: {
          key: testDecisionB,
          steps: [stepConfigDecisionB],
        },
      };
      spyOn(decisionA, 'initFlowAction');
      const steps = stepFactory.decideFlow(store, stepDecision);
      expect(steps[0].key).toEqual(testStepA);
      expect(decisionA.initFlowAction).toHaveBeenCalled();
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
