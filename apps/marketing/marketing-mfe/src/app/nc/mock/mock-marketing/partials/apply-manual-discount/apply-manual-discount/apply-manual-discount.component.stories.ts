import { applicationConfig, Meta, StoryObj } from '@storybook/angular';
import { ApplyManualDiscountComponent } from './apply-manual-discount.component';
import { TgTelenetTestingModule } from '@telenet/ng-lib-shared';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { importProvidersFrom } from '@angular/core';

export default {
  title: 'ApplyManualDiscountComponent',
  component: ApplyManualDiscountComponent,
  decorators: [
    applicationConfig({
      providers: [
        importProvidersFrom(TgTranslateTestingModule.forRoot()),
        importProvidersFrom(TgTelenetTestingModule.forRoot()),
      ],
    }),
  ],
} as Meta<ApplyManualDiscountComponent>;

type Story = StoryObj<ApplyManualDiscountComponent>;

export const Primary: Story = {
  args: {
    idx: 0,
    productType: '',
    sku: '',
  },
};
