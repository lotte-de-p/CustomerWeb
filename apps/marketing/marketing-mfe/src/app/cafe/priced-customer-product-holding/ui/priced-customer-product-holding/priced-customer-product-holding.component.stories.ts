import { applicationConfig, Meta, StoryObj } from '@storybook/angular';
import { PricedCustomerProductHoldingComponent } from './priced-customer-product-holding.component';
import { TgTelenetTestingModule } from '@telenet/ng-lib-shared';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { importProvidersFrom } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { PricedCphState } from '../../state/priced-cph.state';

export default {
  title: 'PricedCustomerProductHolding',
  component: PricedCustomerProductHoldingComponent,
  decorators: [
    applicationConfig({
      providers: [
        importProvidersFrom(TgTranslateTestingModule.forRoot()),
        importProvidersFrom(TgTelenetTestingModule.forRoot()),
        importProvidersFrom(NgxsModule.forRoot([PricedCphState])),
      ],
    }),
  ],
} as Meta<PricedCustomerProductHoldingComponent>;

type Story = StoryObj<PricedCustomerProductHoldingComponent>;

export const Primary: Story = {
  args: {},
};
