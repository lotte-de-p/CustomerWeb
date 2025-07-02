import { applicationConfig, Meta, StoryObj } from '@storybook/angular';
import { DropDownAccordionPanelComponent } from './drop-down-accordion-panel.component';
import { TgTelenetTestingModule } from '@telenet/ng-lib-shared';
import { NgxsModule } from '@ngxs/store';
import { PricedCphState } from '../../state/priced-cph.state';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { importProvidersFrom } from '@angular/core';

export default {
  title: 'PricedCustomerProductHolding/DropDownAccordionPanelComponent',
  component: DropDownAccordionPanelComponent,
  decorators: [
    applicationConfig({
      providers: [
        importProvidersFrom(TgTranslateTestingModule.forRoot()),
        importProvidersFrom(TgTelenetTestingModule.forRoot()),
        importProvidersFrom(NgxsModule.forRoot([PricedCphState])),
      ],
    }),
  ],
} as Meta<DropDownAccordionPanelComponent>;

type Story = StoryObj<DropDownAccordionPanelComponent>;

export const Primary: Story = {
  args: {},
};
