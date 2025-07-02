import { applicationConfig, Meta, StoryObj } from '@storybook/angular';
import { DomainNameComponent } from './domain-name.component';
import { TgTelenetTestingModule } from '@telenet/ng-lib-shared';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { importProvidersFrom } from '@angular/core';

export default {
  title: 'DomainNameComponent',
  component: DomainNameComponent,
  decorators: [
    applicationConfig({
      providers: [
        importProvidersFrom(TgTranslateTestingModule.forRoot()),
        importProvidersFrom(TgTelenetTestingModule.forRoot()),
      ],
    }),
  ],
} as Meta<DomainNameComponent>;

type Story = StoryObj<DomainNameComponent>;

export const Primary: Story = {
  args: {
    idx: 0,
  },
};
