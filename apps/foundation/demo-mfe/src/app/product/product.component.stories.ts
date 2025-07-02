import { applicationConfig, Meta } from '@storybook/angular';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { importProvidersFrom, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { ProductBundleDetailComponent } from '@demo/product/detail';
import { provideHttpClientTesting } from '@angular/common/http/testing';

export default {
  title: 'ProductBundleDetailComponent',
  component: ProductBundleDetailComponent,
  declareComponent: false,
  decorators: [
    applicationConfig({
      providers: [
        importProvidersFrom(StoreModule.forRoot()),
        importProvidersFrom(EffectsModule.forRoot()),
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
} as Meta<ProductBundleDetailComponent>;

export const Primary = {
  render: (args: ProductBundleDetailComponent) => ({
    props: args,
  }),
  args: {},
};
