import { applicationConfig, Meta, StoryObj } from '@storybook/angular';
import { SelectDiscountTypeComponent } from './select-discount-type.component';
import { TgTelenetTestingModule } from '@telenet/ng-lib-shared';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { importProvidersFrom } from '@angular/core';

export default {
  title: 'SelectDiscountTypeComponent',
  component: SelectDiscountTypeComponent,
  decorators: [
    applicationConfig({
      providers: [
        importProvidersFrom(TgTranslateTestingModule.forRoot()),
        importProvidersFrom(TgTelenetTestingModule.forRoot()),
      ],
    }),
  ],
} as Meta<SelectDiscountTypeComponent>;

type Story = StoryObj<SelectDiscountTypeComponent>;

export const Primary: Story = {
  args: {
    idx: 0,
  },
};
