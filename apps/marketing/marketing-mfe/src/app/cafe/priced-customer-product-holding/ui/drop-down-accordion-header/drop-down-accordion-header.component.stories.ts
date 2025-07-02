import { applicationConfig, Meta, StoryObj } from '@storybook/angular';
import { DropDownAccordionHeaderComponent } from './drop-down-accordion-header.component';
import { TgTelenetTestingModule } from '@telenet/ng-lib-shared';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { importProvidersFrom } from '@angular/core';

export default {
  title: 'PricedCustomerProductHolding/DropDownAccordionHeaderComponent',
  component: DropDownAccordionHeaderComponent,
  decorators: [
    applicationConfig({
      providers: [
        importProvidersFrom(TgTranslateTestingModule.forRoot()),
        importProvidersFrom(TgTelenetTestingModule.forRoot()),
      ],
    }),
  ],
} as Meta<DropDownAccordionHeaderComponent>;

type Story = StoryObj<DropDownAccordionHeaderComponent>;

export const Primary: Story = {
  args: {},
};
