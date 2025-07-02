import { Category, CategoryConfig } from '../models/category.interface';
import { InputInterface } from '../models/input.interface';
import { StepFlowConfig } from '@telenet/ng-lib-step-flow';

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace CreateFleetLineFlowActions {
  export class InitialiseCategoryConfigs {
    public static readonly type = '[CreateFleetLine] Initialise the flow for category configs';

    constructor(
      public stepFlowConfig: StepFlowConfig,
      public categoryConfigs: CategoryConfig[]
    ) {}
  }

  export class InitialiseCategories {
    public static readonly type = '[CreateFleetLine] Initialise categories';

    constructor(public categories: Category[]) {}
  }

  export class SetStepData {
    public static readonly type = '[CreateFleetLine] Set step data';

    constructor(
      public stepKey: string,
      public stepData: string
    ) {}
  }

  export class SetCategoryToggle {
    public static readonly type = '[CreateFleetLine] Set category toggle';

    constructor(
      public categoryKey: string,
      public toggle: boolean
    ) {}
  }

  export class SetUserInputForStep {
    public static readonly type = '[CreateFleetLine] Set user input for step';

    constructor(
      public stepKey: string,
      public input: InputInterface
    ) {}
  }

  export class SetResetWarning {
    public static readonly type = '[CreateFleetLine] Set reset warning';

    constructor(public resetWarning: boolean) {}
  }

  export class DeleteNextCategories {
    public static readonly type = '[CreateFleetLine] Delete next categories';

    constructor(public stepKey: string) {}
  }

  export class DeleteNextStepsFromStepCategory {
    public static readonly type = '[CreateFleetLine] Delete next steps from current category';

    constructor(public stepKey: string) {}
  }

  export class DeleteUserInputData {
    public static readonly type = '[CreateFleetLine] Delete user input data';

    constructor(public stepKeys: string[]) {}
  }

  export class SetCurrentStepChanged {
    public static readonly type = '[CreateFleetLine] Set current step changed for show edit warning flag';

    constructor(public currentStepChanged: boolean) {}
  }

  export class SetStepKeyToNavigate {
    public static readonly type = '[CreateFleetLine] Set step key to navigate for edit warning';

    constructor(public stepKeyToNavigateAt?: string) {}
  }

  export class SetFeatureFlag {
    public static readonly type = '[CreateFleetLine] Set feature flag';

    constructor(public featureFlag: boolean) {}
  }

  export class SetOrderSimUrl {
    public static readonly type = '[CreateFleetLine] Set the order sim url';

    constructor(public orderSimUrl: string) {}
  }

  export class SetMaxFileSize {
    public static readonly type = '[CreateFleetLine] Set maximum file size to upload';

    constructor(public maxFileSize: number) {}
  }

  export class SetMaxFileAmount {
    public static readonly type = '[CreateFleetLine] Set how many files can be uploaded';

    constructor(public maxFileAmount: number) {}
  }

  export class SetAllowedExtensions {
    public static readonly type = '[CreateFleetLine] Set which kind of files can be uploaded';

    constructor(public fileExtensionList: string[]) {}
  }

  export class SetActivationInterval {
    public static readonly type = '[CreateFleetLine] Set the activation intervals';

    constructor(public activationInterval: number) {}
  }
}
