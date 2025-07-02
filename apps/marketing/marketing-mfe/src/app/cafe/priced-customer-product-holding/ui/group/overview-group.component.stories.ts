import { applicationConfig, Meta, StoryObj } from '@storybook/angular';
import { OverviewGroupComponent } from './overview-group.component';
import { TgTelenetTestingModule } from '@telenet/ng-lib-shared';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { importProvidersFrom } from '@angular/core';

export default {
  title: 'PricedCustomerProductHolding/OverviewGroup',
  component: OverviewGroupComponent,
  decorators: [
    applicationConfig({
      providers: [
        importProvidersFrom(TgTranslateTestingModule.forRoot()),
        importProvidersFrom(TgTelenetTestingModule.forRoot()),
      ],
    }),
  ],
} as Meta<OverviewGroupComponent>;

type Story = StoryObj<OverviewGroupComponent>;

export const Primary: Story = {
  args: {},
};
