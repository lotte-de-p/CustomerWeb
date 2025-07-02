import { CommonModule } from '@angular/common';
import { applicationConfig, Meta, moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom, isDevMode } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { provideHttpClient } from '@angular/common/http';
import { BillingOverviewSkeletonComponent } from './skeleton.component';

const localhost = 'http://localhost:8080';

window['Config'] = {
  'ocapi-url': localhost,
  'openid-auth-url': localhost,
  'openid-url': localhost,
  'openid-client-id': 'ocapi',
};

export default {
  title: 'BillingOverview/feature/overview',
  component: BillingOverviewSkeletonComponent,
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
} as Meta<BillingOverviewSkeletonComponent>;

export const BillingOverviewSkeleton = {
  render: (args: BillingOverviewSkeletonComponent) => ({
    props: args,
  }),
};
