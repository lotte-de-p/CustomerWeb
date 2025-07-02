import { NgxsModule, Store } from '@ngxs/store';
import { StepConfig, StepFlowConfig, StepFlowState } from '@telenet/ng-lib-step-flow';
import { CategoryConfig } from '../models/category.interface';
import { CreateFleetLineFlowModel } from './create-line-flow.model';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { TranslateFakeLoader, TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';
import { CreateFleetLineState } from './create-line-flow.state';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CreateFleetLineFlowSelectors } from './create-line-flow.selectors';
import { CreateFleetLineFlowActions } from './create-line-flow.actions';
import InitialiseCategoryConfigs = CreateFleetLineFlowActions.InitialiseCategoryConfigs;
import { expect } from '@jest/globals';
import InitialiseCategories = CreateFleetLineFlowActions.InitialiseCategories;
import { CategoryFactory } from '../factories/category.factory';
import SetStepData = CreateFleetLineFlowActions.SetStepData;
import { CreateFleetLineFlowUtil } from '../utils/create-line-flow.util';
import DeleteUserInputData = CreateFleetLineFlowActions.DeleteUserInputData;
import SetUserInputForStep = CreateFleetLineFlowActions.SetUserInputForStep;
import { InputInterface } from '../models/input.interface';
import SetResetWarning = CreateFleetLineFlowActions.SetResetWarning;
import DeleteNextCategories = CreateFleetLineFlowActions.DeleteNextCategories;
import DeleteNextStepsFromStepCategory = CreateFleetLineFlowActions.DeleteNextStepsFromStepCategory;
import SetStepKeyToNavigate = CreateFleetLineFlowActions.SetStepKeyToNavigate;
import SetCurrentStepChanged = CreateFleetLineFlowActions.SetCurrentStepChanged;

import SetCategoryToggle = CreateFleetLineFlowActions.SetCategoryToggle;
import SetFeatureFlag = CreateFleetLineFlowActions.SetFeatureFlag;
import SetOrderSimUrl = CreateFleetLineFlowActions.SetOrderSimUrl;
import SetMaxFileSize = CreateFleetLineFlowActions.SetMaxFileSize;
import SetAllowedExtensions = CreateFleetLineFlowActions.SetAllowedExtensions;
import SetActivationInterval = CreateFleetLineFlowActions.SetActivationInterval;
import SetMaxFileAmount = CreateFleetLineFlowActions.SetMaxFileAmount;

const mockCategories = require('../../../../../../../../fixtures/http/fleet/create-fleet-line/categories.json');
describe('CreateFleetLineState', () => {
  let store: Store;
  let categoryFactory: CategoryFactory;
  const stepOneKey = 'test-step-1';
  const stepTwoKey = 'test-step-2';
  const testStepOneInputInterface = { stepOneFlag: true } as InputInterface;
  const testStepTwoInputInterface = { stepTwoText: 'second step test data input value' } as InputInterface;
  const StepOne = { key: stepOneKey } as StepConfig;
  const StepTwo = { key: stepTwoKey } as StepConfig;
  const mockCreateFleetLineStepFlowRes: StepFlowConfig = {
    key: 'create-fleet-line-step-flow',
    steps: [StepOne, StepTwo],
  };
  const mockNumberOptionsCategoryConfig: CategoryConfig = {
    key: 'test-category-config',
    stepConfigs: [StepOne, StepTwo],
  };
  const mockCreateFleetLineCategoryConfigFlowRes: CategoryConfig[] = [mockNumberOptionsCategoryConfig];

  const defaultState: CreateFleetLineFlowModel = {
    categoryConfigs: [],
    categories: [],
    featureFlag: false,
    orderSimUrl: '',
    maxFileAmount: 0,
    maxFileSize: 0,
    activationInterval: 0,
    fileExtensionList: [],
    stepUserInputs: [
      { stepKey: stepOneKey, input: {} },
      { stepKey: stepTwoKey, input: {} },
    ],
    resetWarning: false,
    editWarning: {
      currentStepChanged: false,
      stepKeyToNavigateAt: '',
    },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      providers: [HttpClient, HttpHandler, TranslateService, CookieService, { provide: 'Window', useValue: {} }],
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        NgxsModule.forRoot([StepFlowState, CreateFleetLineState]),
      ],
      schemas: [NO_ERRORS_SCHEMA],
    });
    store = TestBed.inject(Store);
    categoryFactory = TestBed.inject(CategoryFactory);

    store.reset({
      ...store.snapshot(),
      createNewLine: defaultState,
    });
  });

  describe('initialise', () => {
    it('should initialize the category configs and trigger initialization for step config', async () => {
      store.dispatch(
        new InitialiseCategoryConfigs(mockCreateFleetLineStepFlowRes, mockCreateFleetLineCategoryConfigFlowRes)
      );

      expect(store.selectSnapshot(CreateFleetLineFlowSelectors.categoryConfigs)).toBeDefined();
    });
  });

  describe('initialiseCategories', () => {
    it('should initialise categories', async () => {
      jest.spyOn(categoryFactory, 'create').mockReturnValue(mockCategories);

      store.dispatch(new InitialiseCategories(mockCategories));

      expect(store.selectSnapshot(CreateFleetLineFlowSelectors.categories)).toBe(mockCategories);
    });
  });

  describe('setStepData', () => {
    beforeEach(() => {
      store.dispatch(
        new InitialiseCategoryConfigs(mockCreateFleetLineStepFlowRes, mockCreateFleetLineCategoryConfigFlowRes)
      );
    });

    it('should set step data to the right step by the given step key', async () => {
      const expectedStepData = 'test';
      const stepToModify = 'categoryOneStepTwo';
      jest.spyOn(categoryFactory, 'create').mockReturnValue(mockCategories);

      store.dispatch(new InitialiseCategories(mockCategories));
      store.dispatch(new SetStepData(stepToModify, expectedStepData));

      const categoryOfStep = store
        .selectSnapshot(CreateFleetLineFlowSelectors.categories)
        .find((category) => category.key === 'categoryOne');
      const updatedStep = categoryOfStep!.steps.find((step) => step.key === stepToModify);

      expect(updatedStep!.stepData).toBe(expectedStepData);
    });
  });

  describe('deleteUserInputData', () => {
    beforeEach(() => {
      store.dispatch(new SetUserInputForStep(stepOneKey, testStepOneInputInterface));
      store.dispatch(new SetUserInputForStep(stepTwoKey, testStepTwoInputInterface));
    });

    it('should delete user input data for one step key', async () => {
      store.dispatch(new DeleteUserInputData([stepTwoKey]));

      const storeStepUserInputs = store.selectSnapshot(CreateFleetLineFlowSelectors.stepUserInputs);
      const inputStepOne = CreateFleetLineFlowUtil.getInputDataForStep(storeStepUserInputs, stepOneKey);
      const inputStepTwo = CreateFleetLineFlowUtil.getInputDataForStep(storeStepUserInputs, stepTwoKey);

      expect(inputStepOne).toEqual(testStepOneInputInterface);
      expect(inputStepTwo).toEqual({});
    });

    it('should delete user input data for two step keys', async () => {
      const cleanInputStepDataForSteps = [stepOneKey, stepTwoKey];

      store.dispatch(new DeleteUserInputData(cleanInputStepDataForSteps));

      const storeStepUserInputs = store.selectSnapshot(CreateFleetLineFlowSelectors.stepUserInputs);
      const inputStepOne = CreateFleetLineFlowUtil.getInputDataForStep(storeStepUserInputs, stepOneKey);
      const inputStepTwo = CreateFleetLineFlowUtil.getInputDataForStep(storeStepUserInputs, stepTwoKey);

      expect(inputStepOne).toEqual({});
      expect(inputStepTwo).toEqual({});
    });
  });

  describe('setResetWarning', () => {
    it('should set Reset Warning to true', async () => {
      store.dispatch(new SetResetWarning(true));

      const result = store.selectSnapshot(CreateFleetLineFlowSelectors.resetWarning);
      expect(result).toBeTruthy();
    });

    it('should set Reset Warning to false', async () => {
      store.dispatch(new SetResetWarning(false));

      const result = store.selectSnapshot(CreateFleetLineFlowSelectors.resetWarning);
      expect(result).toBeFalsy();
    });
  });

  describe('deleteNextCategories', () => {
    beforeEach(() => {
      jest.spyOn(categoryFactory, 'create').mockReturnValue(mockCategories);
      store.dispatch(new InitialiseCategories(mockCategories));
    });

    it('should delete the upcoming categories', async () => {
      const categoryOne = mockCategories[0];
      const categoryOneStepTwoKey = categoryOne.steps[1].key;

      store.dispatch(new DeleteNextCategories(categoryOneStepTwoKey!));

      const result = store.selectSnapshot(CreateFleetLineFlowSelectors.categories);

      expect(result).toEqual([categoryOne]);
    });
  });

  describe('deleteNextStepsFromCurrentCategory', () => {
    beforeEach(() => {
      jest.spyOn(categoryFactory, 'create').mockReturnValue(mockCategories);
      store.dispatch(new InitialiseCategories(mockCategories));
    });

    it('should delete next steps besides first step from current category', async () => {
      const categoryOne = mockCategories[0];
      const categoryOneStepOneKey = categoryOne.steps[0].key;

      store.dispatch(new DeleteNextStepsFromStepCategory(categoryOneStepOneKey!));

      const storeCategories = store.selectSnapshot(CreateFleetLineFlowSelectors.categories);
      const categoryOfStep = CreateFleetLineFlowUtil.getCategoryOfStep(storeCategories, categoryOneStepOneKey!);

      expect(categoryOfStep.steps).toEqual([categoryOne.steps[0]]);
    });

    it('should delete next steps besides first and second step from current category', async () => {
      const categoryOne = mockCategories[0];
      const categoryOneStepTwoKey = categoryOne.steps[1].key;

      store.dispatch(new DeleteNextStepsFromStepCategory(categoryOneStepTwoKey!));

      const storeCategories = store.selectSnapshot(CreateFleetLineFlowSelectors.categories);
      const categoryOfStep = CreateFleetLineFlowUtil.getCategoryOfStep(storeCategories, categoryOneStepTwoKey!);
      expect(categoryOfStep.steps).toEqual([categoryOne.steps[0], categoryOne.steps[1]]);
    });
  });

  describe('setUserInputForStep', () => {
    beforeEach(() => {
      store.dispatch(new SetUserInputForStep(stepOneKey, testStepOneInputInterface));
      store.dispatch(new SetUserInputForStep(stepTwoKey, testStepTwoInputInterface));
    });

    it('should set User Input Only For Given Step', async () => {
      const expectedResult = { stepOneFlag: false } as InputInterface;

      store.dispatch(new SetUserInputForStep(stepOneKey, expectedResult));

      const storeStepUserInputs = store.selectSnapshot(CreateFleetLineFlowSelectors.stepUserInputs);
      const inputStepOne = CreateFleetLineFlowUtil.getInputDataForStep(storeStepUserInputs, stepOneKey);
      const inputStepTwo = CreateFleetLineFlowUtil.getInputDataForStep(storeStepUserInputs, stepTwoKey);

      expect(inputStepOne).toEqual(expectedResult);
      expect(inputStepTwo).toEqual(testStepTwoInputInterface);
    });
  });

  describe('SetCurrentStepChanged', () => {
    it('should set current step changed for edit warning to true', async () => {
      store.dispatch(new SetCurrentStepChanged(true));

      const editWarning = store.selectSnapshot(CreateFleetLineFlowSelectors.editWarning);
      expect(editWarning.currentStepChanged).toBeTruthy();
    });
  });

  describe('setStepKeyToNavigate', () => {
    it('should set step key to navigate for edit warning', async () => {
      const expectedResult = 'stepTwo';

      store.dispatch(new SetStepKeyToNavigate(expectedResult));

      const editWarning = store.selectSnapshot(CreateFleetLineFlowSelectors.editWarning);
      expect(editWarning.stepKeyToNavigateAt).toBe(expectedResult);
    });
  });

  describe('SetCategoryToggle', () => {
    it('uknown category toggle does nothing', async () => {
      store.dispatch(new SetCategoryToggle('someCategory', true));

      const categories = store.selectSnapshot(CreateFleetLineFlowSelectors.categories);
      expect(categories).toStrictEqual([]);
    });
  });

  describe('SetFeatureFlag', () => {
    it('enable feature flag', async () => {
      store.dispatch(new SetFeatureFlag(true));

      const featureFlag = store.selectSnapshot(CreateFleetLineFlowSelectors.featureFlag);
      expect(featureFlag).toBe(true);
    });
  });

  describe('SetOrderSimUrl', () => {
    it('should set order sim url', async () => {
      const expected = 'someUrl';
      store.dispatch(new SetOrderSimUrl(expected));

      const url = store.selectSnapshot(CreateFleetLineFlowSelectors.orderSimUrl);
      expect(url).toBe(expected);
    });
  });

  describe('SetMaxFileSize', () => {
    it('should set max file size', async () => {
      const expected = 50;
      store.dispatch(new SetMaxFileSize(expected));

      const url = store.selectSnapshot(CreateFleetLineFlowSelectors.maxFileSize);
      expect(url).toBe(expected);
    });
  });

  describe('SetAllowedExtensions', () => {
    it('should set allowed extensions', async () => {
      const expected = ['.jpg', '.png'];
      store.dispatch(new SetAllowedExtensions(expected));

      const actual = store.selectSnapshot(CreateFleetLineFlowSelectors.fileExtensionList);
      expect(actual).toBe(expected);
    });
  });

  describe('SetActivationInterval', () => {
    it('should set activation interval', waitForAsync(() => {
      const expected = 10;
      store.dispatch(new SetActivationInterval(expected));

      const actual = store.selectSnapshot(CreateFleetLineFlowSelectors.activationInterval);
      expect(actual).toBe(expected);
    }));
  });

  describe('SetMaxFileAmount', () => {
    it('should set max file amount', async () => {
      const expected = 10;
      store.dispatch(new SetMaxFileAmount(expected));

      const actual = store.selectSnapshot(CreateFleetLineFlowSelectors.maxFileAmount);
      expect(actual).toBe(expected);
    });
  });
});
