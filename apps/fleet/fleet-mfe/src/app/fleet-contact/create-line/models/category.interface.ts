import { StepConfig } from '@telenet/ng-lib-step-flow';

export interface Category extends CategoryData {
  steps: StepCategoryData[];
}

export interface StepCategoryData extends CategoryData {
  stepData?: string;
}

export interface CategoryData {
  key?: string;
  toggle?: boolean;
  class?: string;
  display?: boolean;
}

export interface CategoryConfig {
  key: string;
  stepConfigs: StepConfig[];
}
