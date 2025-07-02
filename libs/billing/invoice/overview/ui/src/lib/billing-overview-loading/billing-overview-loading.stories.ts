import { CommonModule } from '@angular/common';
import { applicationConfig, Meta, moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom, isDevMode } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { provideHttpClient } from '@angular/common/http';
import { BillingOverviewLoadingComponent } from './billing-overview-loading.component';

export default {
  title: 'BillingOverview/ui',
  component: BillingOverviewLoadingComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, BrowserAnimationsModule],
    }),
    applicationConfig({
      providers: [
        importProvidersFrom(
          StoreDevtoolsModule.instrument({
            maxAge: 25, // Retains last 25 states
            logOnly: !isDevMode(),
            traceLimit: 75,
          })
        ),
        provideHttpClient(),
        { provide: 'Window', useValue: window },
      ],
    }),
  ],
  backgrounds: {
    default: 'grey',
    values: [
      { name: 'grey', value: '#f5f5f5' },
      { name: 'white', value: '#ffffff' },
    ],
  },
} as Meta<BillingOverviewLoadingComponent>;

export const Loading = {
  render: (args: BillingOverviewLoadingComponent) => ({
    props: args,
  }),
};
