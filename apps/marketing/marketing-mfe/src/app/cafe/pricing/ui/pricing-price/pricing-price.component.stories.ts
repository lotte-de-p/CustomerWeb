import { applicationConfig, Meta, StoryObj } from '@storybook/angular';
import { PricingPriceComponent } from './pricing-price.component';
import { TgTelenetTestingModule } from '@telenet/ng-lib-shared';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { importProvidersFrom } from '@angular/core';

export default {
  title: 'Pricing/PricingPriceComponent',
  component: PricingPriceComponent,
  decorators: [
    applicationConfig({
      providers: [
        importProvidersFrom(TgTranslateTestingModule.forRoot()),
        importProvidersFrom(TgTelenetTestingModule.forRoot()),
      ],
    }),
  ],
} as Meta<PricingPriceComponent>;

type Story = StoryObj<PricingPriceComponent>;

export const Primary: Story = {
  args: {
    rendition: 'large',
    amount: '',
    applyBaseSingleDigitStyle: false,
  },
};
