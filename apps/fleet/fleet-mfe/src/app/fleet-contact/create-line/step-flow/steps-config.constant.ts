import { StepConfig } from '@telenet/ng-lib-step-flow';
import { CreateFleetLineStepEnum } from '../enums/create-line-step.enum';
import { SimNumberComponent } from '../steps/sim-number/sim-number.component';

export const SimNumberStep: StepConfig = {
  key: CreateFleetLineStepEnum.SIM_NUMBER,
  component: SimNumberComponent,
  analyticsOptions: {
    name: CreateFleetLineStepEnum.SIM_NUMBER,
  },
};
