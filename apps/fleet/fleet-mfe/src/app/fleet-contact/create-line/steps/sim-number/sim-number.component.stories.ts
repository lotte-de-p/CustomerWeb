import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { SimNumberComponent } from './sim-number.component';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { HttpClientModule } from '@angular/common/http';
import { CreateFleetLineStepEnum } from '../../enums/create-line-step.enum';
import { SimNumberInterface } from '../../models/input.interface';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';

export default {
  title: 'Create Fleet Line/Sim Number Step',
  component: SimNumberComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, NgxsModule.forRoot(), HttpClientModule, TgTranslateTestingModule.forRoot()],
      declarations: [],
    }),
  ],
} as Meta<SimNumberComponent>;

type Story = StoryObj<SimNumberComponent>;

export const Default: Story = {
  storyName: 'Default CFL Sim Number',
  args: {
    store: {
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
    },
  },
};
