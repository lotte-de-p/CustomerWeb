import { applicationConfig, Meta, StoryObj } from '@storybook/angular';
import { OptionsContentpackComponent } from './options-contentpack.component';
import { TgTelenetTestingModule } from '@telenet/ng-lib-shared';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { importProvidersFrom } from '@angular/core';

export default {
  title: 'OptionsContentpackComponent',
  component: OptionsContentpackComponent,
  decorators: [
    applicationConfig({
      providers: [
        importProvidersFrom(TgTranslateTestingModule.forRoot()),
        importProvidersFrom(TgTelenetTestingModule.forRoot()),
      ],
    }),
  ],
} as Meta<OptionsContentpackComponent>;

type Story = StoryObj<OptionsContentpackComponent>;

export const Primary: Story = {
  args: {
    idx: 0,
    epc: '',
    productType: '',
  },
};
