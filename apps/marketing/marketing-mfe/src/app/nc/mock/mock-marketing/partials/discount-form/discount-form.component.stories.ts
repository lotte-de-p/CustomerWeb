import { applicationConfig, Meta, StoryObj } from '@storybook/angular';
import { DiscountFormComponent } from './discount-form.component';
import { TgTelenetTestingModule } from '@telenet/ng-lib-shared';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { importProvidersFrom } from '@angular/core';

export default {
  title: 'DiscountFormComponent',
  component: DiscountFormComponent,
  decorators: [
    applicationConfig({
      providers: [
        importProvidersFrom(TgTranslateTestingModule.forRoot()),
        importProvidersFrom(TgTelenetTestingModule.forRoot()),
      ],
    }),
  ],
} as Meta<DiscountFormComponent>;

type Story = StoryObj<DiscountFormComponent>;

export const Secondary: Story = {
  args: {
    idx: 0,
  },
};
