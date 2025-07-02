import { NgxsModule, Store } from '@ngxs/store';
import { CategoryConfig } from '../models/category.interface';
import { TestBed } from '@angular/core/testing';
import { CreateFleetLineState } from '../state/create-line-flow.state';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CategoryFactory } from './category.factory';
import { CreateFleetLineConstants } from '../constants/create-line.constants';
import { cloneDeep } from 'lodash-es';
import { StepFlowState } from '@telenet/ng-lib-step-flow';
import { expect } from '@jest/globals';
import { CreateFleetLineFlowSelectors } from '../state/create-line-flow.selectors';

const mockCategories = require('../../../../../../../../fixtures/http/fleet/create-fleet-line/categories.json');
const mockSteps = require('../../../../../../../../fixtures/http/fleet/create-fleet-line/steps.json');
describe('CategoryFactory', () => {
  let factory: CategoryFactory;
  let store: Store;

  const mockCategoryConfigs = [
    {
      key: 'categoryOne',
      stepConfigs: [{ key: 'categoryOneStepOne' }, { key: 'categoryOneStepTwo' }, { key: 'categoryOneStepThree' }],
    },
    {
      key: 'categoryTwo',
      stepConfigs: [{ key: 'categoryTwoStepOne' }, { key: 'categoryTwoStepTwo' }, { key: 'categoryTwoStepThree' }],
    },
    {
      key: 'categoryThree',
      stepConfigs: [],
    },
    {
      key: 'categoryThree',
      stepConfigs: [],
    },
  ] as CategoryConfig[];

  beforeAll(() => {
    TestBed.configureTestingModule({
      declarations: [],
      providers: [Store, CategoryFactory, { provide: 'Window', useValue: {} }],
      imports: [NgxsModule.forRoot([StepFlowState, CreateFleetLineState])],
      schemas: [NO_ERRORS_SCHEMA],
    });
    store = TestBed.inject(Store);
    factory = TestBed.inject(CategoryFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    it('should create categories for the first time, no obsolete categories yet', async () => {
      jest.spyOn(store, 'selectSnapshot').mockImplementation((param: object) => {
        if (param === CreateFleetLineFlowSelectors.categories) {
          return [];
        }
        if (param === StepFlowState.currentStep) {
          return mockSteps[0];
        }
        if (param === StepFlowState.steps) {
          return mockSteps;
        }
        if (param === CreateFleetLineFlowSelectors.categoryConfigs) {
          return mockCategoryConfigs;
        }
        return null;
      });

      const result = factory.create();
      const categoryOne = result[0];
      expect(categoryOne.display).toBeTruthy();
      expect(categoryOne.key).toBeDefined();
      expect(categoryOne.toggle).toBeTruthy();
      expect(categoryOne.class).toBe(CreateFleetLineConstants.CSS_CLASS_ACTIVE);

      const stepOne = categoryOne.steps[0];
      expect(stepOne.key).toBeDefined();
      expect(stepOne.class).toBe(CreateFleetLineConstants.CSS_CLASS_ACTIVE);
      expect(stepOne.display).toBeTruthy();
    });

    it('should create categories when current category is the first step', async () => {
      jest.spyOn(store, 'selectSnapshot').mockImplementation((param: object) => {
        if (param !== CreateFleetLineFlowSelectors.categories) {
          if (param === StepFlowState.currentStep) {
            return mockSteps[0];
          }
          if (param === StepFlowState.steps) {
            return mockSteps;
          }
          if (param === CreateFleetLineFlowSelectors.categoryConfigs) {
            return mockCategoryConfigs;
          }
          return null;
        } else {
          return mockCategories;
        }
      });

      const result = factory.create();

      const categoryOne = result[0];
      expect(categoryOne.display).toBeTruthy();
      expect(categoryOne.toggle).toBeTruthy();
      expect(categoryOne.class).toBe(CreateFleetLineConstants.CSS_CLASS_ACTIVE);
      expect(categoryOne.key).toBeDefined();

      const stepOne = categoryOne.steps[0];
      expect(stepOne.display).toBeTruthy();
      expect(stepOne.key).toBeDefined();
      expect(stepOne.class).toBe(CreateFleetLineConstants.CSS_CLASS_ACTIVE);

      const stepTwo = categoryOne.steps[1];
      expect(stepTwo.class).toBeUndefined();
      expect(stepTwo.display).toBeUndefined();
      expect(stepTwo.key).toBeDefined();

      const stepThree = categoryOne.steps[2];
      expect(stepThree.class).toBeUndefined();
      expect(stepThree.display).toBeUndefined();
      expect(stepThree.key).toBeDefined();
    });

    it('should create categories when current category is the second step', async () => {
      jest.spyOn(store, 'selectSnapshot').mockImplementation((param: object) => {
        if (param === CreateFleetLineFlowSelectors.categories) {
          const categories = cloneDeep(mockCategories);

          // @ts-ignore
          categories[0].steps[0].display = true;

          return categories;
        }
        if (param === StepFlowState.currentStep) {
          return mockSteps[1];
        }
        if (param === StepFlowState.steps) {
          return mockSteps;
        }
        if (param === CreateFleetLineFlowSelectors.categoryConfigs) {
          return mockCategoryConfigs;
        }
        return null;
      });

      const result = factory.create();

      const categoryOne = result[0];
      expect(categoryOne.display).toBeTruthy();
      expect(categoryOne.toggle).toBeTruthy();
      expect(categoryOne.key).toBeDefined();
      expect(categoryOne.class).toBe(CreateFleetLineConstants.CSS_CLASS_ACTIVE);

      const stepOne = categoryOne.steps[0];
      expect(stepOne.display).toBeTruthy();
      expect(stepOne.key).toBeDefined();
      expect(stepOne.class).toBe(CreateFleetLineConstants.CSS_CLASS_COMPLETED);

      const stepTwo = categoryOne.steps[1];
      expect(stepTwo.display).toBeTruthy();
      expect(stepTwo.key).toBeDefined();
      expect(stepTwo.class).toBe(CreateFleetLineConstants.CSS_CLASS_ACTIVE);

      const stepThree = categoryOne.steps[2];
      expect(stepThree.display).toBeUndefined();
      expect(stepThree.key).toBeDefined();
      expect(stepThree.class).toBeUndefined();
    });

    it('should create categories when current category step is first step from second category', async () => {
      jest.spyOn(store, 'selectSnapshot').mockImplementation((param: object) => {
        if (param === CreateFleetLineFlowSelectors.categories) {
          const categories = cloneDeep(mockCategories);

          // @ts-ignore
          categories[0].steps[0].display = true;
          // @ts-ignore
          categories[0].steps[1].display = true;
          // @ts-ignore
          categories[0].steps[2].display = true;

          return categories;
        }
        if (param === StepFlowState.currentStep) {
          return mockSteps[3];
        }
        if (param === StepFlowState.steps) {
          return mockSteps;
        }
        if (param === CreateFleetLineFlowSelectors.categoryConfigs) {
          return mockCategoryConfigs;
        }
        return null;
      });

      const result = factory.create();
      const categoryOne = result[0];
      expect(categoryOne.toggle).toBeFalsy();
      expect(categoryOne.display).toBeTruthy();
      expect(categoryOne.class).toBe(CreateFleetLineConstants.CSS_CLASS_COMPLETED);
      expect(categoryOne.key).toBeDefined();

      const stepOne = categoryOne.steps[0];
      expect(stepOne.key).toBeDefined();
      expect(stepOne.class).toBe(CreateFleetLineConstants.CSS_CLASS_COMPLETED);
      expect(stepOne.display).toBeTruthy();

      const stepTwo = categoryOne.steps[1];
      expect(stepTwo.display).toBeTruthy();
      expect(stepTwo.key).toBeDefined();
      expect(stepTwo.class).toBe(CreateFleetLineConstants.CSS_CLASS_COMPLETED);

      const categoryTwo = result[1];
      expect(categoryTwo.display).toBeTruthy();
      expect(categoryTwo.toggle).toBeTruthy();
      expect(categoryTwo.key).toBeDefined();
      expect(categoryTwo.class).toBe(CreateFleetLineConstants.CSS_CLASS_ACTIVE);

      const categoryTwoStepOne = categoryTwo.steps[0];
      expect(categoryTwoStepOne.display).toBeTruthy();
      expect(categoryTwoStepOne.key).toBeDefined();
      expect(categoryTwoStepOne.class).toBe(CreateFleetLineConstants.CSS_CLASS_ACTIVE);
    });
  });
});
