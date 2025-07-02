import { applicationConfig, Meta, StoryObj } from '@storybook/angular';
import { DisclaimerComponent } from './disclaimer.component';
import { TgTelenetTestingModule } from '@telenet/ng-lib-shared';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { importProvidersFrom } from '@angular/core';

export default {
  title: 'PricedCustomerProductHolding/DisclaimerComponent',
  component: DisclaimerComponent,
  decorators: [
    applicationConfig({
      providers: [
        importProvidersFrom(TgTranslateTestingModule.forRoot()),
        importProvidersFrom(TgTelenetTestingModule.forRoot()),
      ],
    }),
  ],
} as Meta<DisclaimerComponent>;

type Story = StoryObj<DisclaimerComponent>;
export const Primary: Story = {
  args: {},
};
