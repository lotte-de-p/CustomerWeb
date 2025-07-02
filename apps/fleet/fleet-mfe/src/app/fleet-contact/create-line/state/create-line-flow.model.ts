import { SimNumberInterface, StepUserInputInterface } from '../models/input.interface';
import { Category, CategoryConfig } from '../models/category.interface';
import { CreateFleetLineStepEnum } from '../enums/create-line-step.enum';
import { WarningInterface } from '../models/warning.interface';

export interface CreateFleetLineFlowModel {
  categoryConfigs: CategoryConfig[];
  categories: Category[];
  stepUserInputs: StepUserInputInterface[];
  resetWarning: boolean;
  editWarning: WarningInterface;
  featureFlag: boolean;
  orderSimUrl: string;
  maxFileSize: number;
  maxFileAmount: number;
  fileExtensionList: string[];
  activationInterval: number;
}

export const defaultState: CreateFleetLineFlowModel = {
  categoryConfigs: [],
  categories: [],
  stepUserInputs: [{ stepKey: CreateFleetLineStepEnum.SIM_NUMBER, input: {} as SimNumberInterface }],
  resetWarning: false,
  editWarning: {
    currentStepChanged: false,
    stepKeyToNavigateAt: '',
  },
  featureFlag: false,
  orderSimUrl: '',
  maxFileSize: 5,
  maxFileAmount: 2,
  fileExtensionList: ['png', 'jpg', 'pdf'],
  activationInterval: 1,
};
