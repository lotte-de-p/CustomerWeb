import { applicationConfig, Meta, StoryObj } from '@storybook/angular';
import { DropDownAccordionComponent } from './drop-down-accordion.component';
import { TgTelenetTestingModule } from '@telenet/ng-lib-shared';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { importProvidersFrom } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { PricedCphState } from '../../state/priced-cph.state';

export default {
  title: 'PricedCustomerProductHolding/DropDownAccordionComponent',
  component: DropDownAccordionComponent,
  decorators: [
    applicationConfig({
      providers: [
        importProvidersFrom(TgTranslateTestingModule.forRoot()),
        importProvidersFrom(TgTelenetTestingModule.forRoot()),
        importProvidersFrom(NgxsModule.forRoot([PricedCphState])),
      ],
    }),
  ],
} as Meta<DropDownAccordionComponent>;

type Story = StoryObj<DropDownAccordionComponent>;

export const Primary: Story = {
  args: {},
};
