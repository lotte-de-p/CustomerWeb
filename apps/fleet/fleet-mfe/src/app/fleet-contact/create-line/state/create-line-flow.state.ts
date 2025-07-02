import { Injectable } from '@angular/core';
import { Action, State, StateContext, Store } from '@ngxs/store';
import { CreateFleetLineFlowActions } from './create-line-flow.actions';
import { CreateFleetLineFlowModel, defaultState } from './create-line-flow.model';
import { produce } from 'immer';
import { patch, updateItem } from '@ngxs/store/operators';
import { Category, StepCategoryData } from '../models/category.interface';
import { CreateFleetLineFlowUtil } from '../utils/create-line-flow.util';
import { StepUserInputInterface } from '../models/input.interface';
import { SetStepConfigurationAction } from '@telenet/ng-lib-step-flow';
import InitialiseCategories = CreateFleetLineFlowActions.InitialiseCategories;
import InitialiseCategoryConfigs = CreateFleetLineFlowActions.InitialiseCategoryConfigs;
import SetStepData = CreateFleetLineFlowActions.SetStepData;
import DeleteUserInputData = CreateFleetLineFlowActions.DeleteUserInputData;
import SetResetWarning = CreateFleetLineFlowActions.SetResetWarning;
import DeleteNextCategories = CreateFleetLineFlowActions.DeleteNextCategories;
import DeleteNextStepsFromStepCategory = CreateFleetLineFlowActions.DeleteNextStepsFromStepCategory;
import SetUserInputForStep = CreateFleetLineFlowActions.SetUserInputForStep;
import SetCurrentStepChanged = CreateFleetLineFlowActions.SetCurrentStepChanged;
import SetStepKeyToNavigate = CreateFleetLineFlowActions.SetStepKeyToNavigate;
import SetCategoryToggle = CreateFleetLineFlowActions.SetCategoryToggle;
import SetFeatureFlag = CreateFleetLineFlowActions.SetFeatureFlag;
import SetOrderSimUrl = CreateFleetLineFlowActions.SetOrderSimUrl;

import SetMaxFileSize = CreateFleetLineFlowActions.SetMaxFileSize;
import SetMaxFileAmount = CreateFleetLineFlowActions.SetMaxFileAmount;
import SetAllowedExtensions = CreateFleetLineFlowActions.SetAllowedExtensions;
import SetActivationInterval = CreateFleetLineFlowActions.SetActivationInterval;

@State<CreateFleetLineFlowModel>({
  name: 'createNewLine',
  defaults: defaultState,
})
@Injectable()
export class CreateFleetLineState {
  constructor(public store: Store) {}

  @Action(InitialiseCategoryConfigs)
  public async initialise(ctx: StateContext<CreateFleetLineFlowModel>, action: InitialiseCategoryConfigs) {
    ctx.setState(
      produce(ctx.getState(), (draft: CreateFleetLineFlowModel) => {
        draft.categoryConfigs = action.categoryConfigs;
      })
    );

    return this.store.dispatch(new SetStepConfigurationAction(action.stepFlowConfig));
  }

  @Action(InitialiseCategories)
  public async initialiseCategories(ctx: StateContext<CreateFleetLineFlowModel>, action: InitialiseCategories) {
    ctx.setState(
      produce(ctx.getState(), (draft: CreateFleetLineFlowModel) => {
        draft.categories = action.categories;
      })
    );
  }

  @Action(SetStepData)
  public async setStepData(ctx: StateContext<CreateFleetLineFlowModel>, action: SetStepData) {
    const stepCategory = CreateFleetLineFlowUtil.getCategoryOfStep(ctx.getState().categories, action.stepKey);

    ctx.setState(
      patch({
        categories: updateItem<Category>(
          (category: Category | undefined) => category!.key === stepCategory.key,
          patch({
            steps: updateItem<StepCategoryData>(
              (step: StepCategoryData | undefined) => step!.key === action.stepKey,
              patch({ stepData: action.stepData })
            ),
          })
        ),
      })
    );
  }

  @Action(DeleteUserInputData)
  public async deleteUserInputData(ctx: StateContext<CreateFleetLineFlowModel>, action: DeleteUserInputData) {
    const stepUserInputs = ctx.getState().stepUserInputs;

    ctx.setState(
      produce(ctx.getState(), (draft: CreateFleetLineFlowModel) => {
        draft.stepUserInputs = stepUserInputs.map((stepUserInput) => {
          return {
            stepKey: stepUserInput.stepKey,
            input: action.stepKeys.includes(stepUserInput.stepKey) ? {} : stepUserInput.input,
          };
        });
      })
    );
  }

  @Action(SetResetWarning)
  public async setResetWarning(ctx: StateContext<CreateFleetLineFlowModel>, action: SetResetWarning) {
    ctx.patchState(
      produce(ctx.getState(), (draft: CreateFleetLineFlowModel) => {
        draft.resetWarning = action.resetWarning;
      })
    );
  }

  @Action(DeleteNextCategories)
  public async deleteNextCategories(ctx: StateContext<CreateFleetLineFlowModel>, action: DeleteNextCategories) {
    const categories = ctx.getState().categories;
    const previousCategories = CreateFleetLineFlowUtil.findAllPreviousCategoriesStepKey(categories, action.stepKey);

    ctx.setState(
      produce(ctx.getState(), (draft: CreateFleetLineFlowModel) => {
        draft.categories = previousCategories;
      })
    );
  }

  @Action(DeleteNextStepsFromStepCategory)
  public async deleteNextStepsFromCategory(
    ctx: StateContext<CreateFleetLineFlowModel>,
    action: DeleteNextStepsFromStepCategory
  ) {
    const categories = ctx.getState().categories;
    const currentCategory = CreateFleetLineFlowUtil.getCategoryOfStep(categories, action.stepKey);
    const currentStepIndex = CreateFleetLineFlowUtil.getIndexOfStep(currentCategory.steps, action.stepKey);
    const filteredSteps = currentCategory.steps.filter(
      (step) => CreateFleetLineFlowUtil.getIndexOfStep(currentCategory.steps, step.key!) <= currentStepIndex
    );

    ctx.setState(
      patch({
        categories: updateItem<Category>(
          (category) => category?.key === currentCategory.key,
          patch({
            steps: filteredSteps,
          })
        ),
      })
    );
  }

  @Action(SetUserInputForStep)
  public async setUserInputForStep(ctx: StateContext<CreateFleetLineFlowModel>, action: SetUserInputForStep) {
    ctx.setState(
      patch({
        stepUserInputs: updateItem<StepUserInputInterface>(
          (stepUserInput: StepUserInputInterface | undefined) => action.stepKey === stepUserInput!.stepKey,
          patch({
            input: action.input,
          })
        ),
      })
    );
  }

  @Action(SetCurrentStepChanged)
  public async setCurrentStepChanged(ctx: StateContext<CreateFleetLineFlowModel>, action: SetCurrentStepChanged) {
    ctx.patchState(
      produce(ctx.getState(), (draft: CreateFleetLineFlowModel) => {
        draft.editWarning.currentStepChanged = action.currentStepChanged;
      })
    );
  }

  @Action(SetStepKeyToNavigate)
  public async setStepKeyToNavigate(ctx: StateContext<CreateFleetLineFlowModel>, action: SetStepKeyToNavigate) {
    ctx.patchState(
      produce(ctx.getState(), (draft: CreateFleetLineFlowModel) => {
        draft.editWarning.stepKeyToNavigateAt = action.stepKeyToNavigateAt!;
      })
    );
  }

  @Action(SetCategoryToggle)
  public async setCategoryToggle(ctx: StateContext<CreateFleetLineFlowModel>, action: SetCategoryToggle) {
    ctx.setState(
      patch({
        categories: updateItem<Category>(
          (category: Category | undefined) => category!.key === action.categoryKey,
          patch({ toggle: action.toggle })
        ),
      })
    );
  }

  @Action(SetFeatureFlag)
  public async setFeatureFlag(ctx: StateContext<CreateFleetLineFlowModel>, action: SetFeatureFlag) {
    ctx.patchState(
      produce(ctx.getState(), (draft: CreateFleetLineFlowModel) => {
        draft.featureFlag = action.featureFlag;
      })
    );
  }

  @Action(SetOrderSimUrl)
  public async SetOrderSimUrl(ctx: StateContext<CreateFleetLineFlowModel>, action: SetOrderSimUrl) {
    ctx.patchState(
      produce(ctx.getState(), (draft: CreateFleetLineFlowModel) => {
        draft.orderSimUrl = action.orderSimUrl;
      })
    );
  }

  @Action(SetMaxFileSize)
  public async setMaxFileSize(ctx: StateContext<CreateFleetLineFlowModel>, action: SetMaxFileSize) {
    ctx.patchState(
      produce(ctx.getState(), (draft: CreateFleetLineFlowModel) => {
        draft.maxFileSize = action.maxFileSize;
      })
    );
  }

  @Action(SetMaxFileAmount)
  public async setMaxFileAmount(ctx: StateContext<CreateFleetLineFlowModel>, action: SetMaxFileAmount) {
    ctx.patchState(
      produce(ctx.getState(), (draft: CreateFleetLineFlowModel) => {
        draft.maxFileAmount = action.maxFileAmount;
      })
    );
  }

  @Action(SetAllowedExtensions)
  public async setAllowedExtensions(ctx: StateContext<CreateFleetLineFlowModel>, action: SetAllowedExtensions) {
    ctx.patchState(
      produce(ctx.getState(), (draft: CreateFleetLineFlowModel) => {
        draft.fileExtensionList = action.fileExtensionList;
      })
    );
  }

  @Action(SetActivationInterval)
  public async SetActivationInterval(ctx: StateContext<CreateFleetLineFlowModel>, action: SetActivationInterval) {
    ctx.patchState(
      produce(ctx.getState(), (draft: CreateFleetLineFlowModel) => {
        draft.activationInterval = action.activationInterval;
      })
    );
  }
}
