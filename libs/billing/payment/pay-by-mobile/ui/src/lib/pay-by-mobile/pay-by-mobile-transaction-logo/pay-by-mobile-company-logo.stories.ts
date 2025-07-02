import { CommonModule } from '@angular/common';
import { applicationConfig, Meta, moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';

import { PayByMobileCompanyLogoComponent } from './pay-by-mobile-company-logo.component';

export default {
  title: 'PayByMobile/dumb/ui/CompanyLogo',
  component: PayByMobileCompanyLogoComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, BrowserAnimationsModule],
    }),
    applicationConfig({
      providers: [{ provide: 'Window', useValue: window }, provideHttpClient()],
    }),
  ],
  parameters: {},
} as Meta<PayByMobileCompanyLogoComponent>;

export const CompanyLogo = {
  render: (args: { company: string }) => ({
    props: {
      serviceName: args.company,
    },
  }),
  argTypes: {
    company: {
      options: [
        'applestore',
        'googleplay',
        'huaweistore',
        'playstation',
        'netflix',
        'blizzardgames',
        'riotgames',
        'bm4411',
        'badoo',
        'bumble',
      ],
      control: { type: 'radio' },
    },
  },
  args: {
    company: 'applestore',
  },
};

export const Other = {
  render: () => ({
    props: {
      serviceName: 'other',
    },
  }),
};
