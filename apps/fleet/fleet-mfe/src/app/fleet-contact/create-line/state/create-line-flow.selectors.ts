import { Selector } from '@ngxs/store';
import { CreateFleetLineState } from './create-line-flow.state';
import { flatMap } from 'lodash-es';
import { Category, CategoryConfig, StepCategoryData } from '../models/category.interface';
import { StepUserInputInterface } from '../models/input.interface';
import { WarningInterface } from '../models/warning.interface';
import { CreateFleetLineFlowModel } from './create-line-flow.model';

export class CreateFleetLineFlowSelectors {
  @Selector([CreateFleetLineState])
  public static categoryConfigs(state: CreateFleetLineFlowModel): CategoryConfig[] {
    return state.categoryConfigs;
  }

  @Selector([CreateFleetLineState])
  public static categories(state: CreateFleetLineFlowModel): Category[] {
    return state.categories;
  }

  @Selector([CreateFleetLineState])
  public static stepUserInputs(state: CreateFleetLineFlowModel): StepUserInputInterface[] {
    return state.stepUserInputs;
  }

  @Selector([CreateFleetLineState])
  public static resetWarning(state: CreateFleetLineFlowModel): boolean {
    return state.resetWarning;
  }

  @Selector([CreateFleetLineState])
  public static editWarning(state: CreateFleetLineFlowModel): WarningInterface {
    return state.editWarning;
  }

  @Selector([CreateFleetLineState])
  public static lastActiveStep(state: CreateFleetLineFlowModel): StepCategoryData {
    return flatMap(state.categories, (category) => category.steps)
      .reverse()
      .find((step) => step.display)!;
  }

  @Selector([CreateFleetLineState])
  public static featureFlag(state: CreateFleetLineFlowModel): boolean {
    return state.featureFlag;
  }

  @Selector([CreateFleetLineState])
  public static orderSimUrl(state: CreateFleetLineFlowModel): string {
    return state.orderSimUrl;
  }

  @Selector([CreateFleetLineState])
  public static maxFileSize(state: CreateFleetLineFlowModel): number {
    return state.maxFileSize;
  }

  @Selector([CreateFleetLineState])
  public static maxFileAmount(state: CreateFleetLineFlowModel): number {
    return state.maxFileAmount;
  }

  @Selector([CreateFleetLineState])
  public static fileExtensionList(state: CreateFleetLineFlowModel): string[] {
    return state.fileExtensionList;
  }

  @Selector([CreateFleetLineState])
  public static activationInterval(state: CreateFleetLineFlowModel): number {
    return state.activationInterval;
  }
}
