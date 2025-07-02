import { applicationConfig, Meta, StoryObj } from '@storybook/angular';
import { BillPriceComponent } from './bill-price.component';
import { TgTelenetTestingModule } from '@telenet/ng-lib-shared';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { importProvidersFrom } from '@angular/core';

export default {
  title: 'PricedCustomerProductHolding/BillPriceComponent',
  component: BillPriceComponent,
  decorators: [
    applicationConfig({
      providers: [
        importProvidersFrom(TgTranslateTestingModule.forRoot()),
        importProvidersFrom(TgTelenetTestingModule.forRoot()),
      ],
    }),
  ],
} as Meta<BillPriceComponent>;

type Story = StoryObj<BillPriceComponent>;

export const Primary: Story = {
  args: {
    price: '',
  },
};
