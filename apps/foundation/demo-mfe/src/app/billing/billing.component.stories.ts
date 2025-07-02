import { applicationConfig, Meta } from '@storybook/angular';
import { BillingOverviewComponent } from '@demo/billing/overview';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { importProvidersFrom, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideHttpClientTesting } from '@angular/common/http/testing';

export default {
  title: 'BillingOverviewComponent',
  component: BillingOverviewComponent,
  declareComponent: false,
  decorators: [
    applicationConfig({
      providers: [
        importProvidersFrom(StoreModule.forRoot()),
        importProvidersFrom(EffectsModule.forRoot()),
        importProvidersFrom(BrowserAnimationsModule),
        importProvidersFrom(
          StoreDevtoolsModule.instrument({
            maxAge: 25, // Retains last 25 states
            logOnly: !isDevMode(),
            traceLimit: 75,
          })
        ),
        provideHttpClientTesting(),
        provideRouter([]),
        { provide: 'Window', useValue: window },
      ],
    }),
  ],
} as Meta<BillingOverviewComponent>;

export const Primary = {
  render: (args: BillingOverviewComponent) => ({
    props: args,
  }),
  args: {},
};
