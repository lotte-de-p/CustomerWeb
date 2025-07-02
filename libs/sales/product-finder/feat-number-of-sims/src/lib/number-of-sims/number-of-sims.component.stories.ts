import { applicationConfig, Meta, moduleMetadata } from '@storybook/angular';
import { StoreModule } from '@ngrx/store';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ProductFinderNgrxModule } from '@sales/product-finder/data-access';
import { CounterComponent } from '@sales/shared/ui';
import { NumberOfSimsComponent } from './number-of-sims.component';
import { EffectsModule } from '@ngrx/effects';
import { importProvidersFrom } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';

export default {
  title: 'sales/product-finder/feature-number-of-sims/NumberOfSimsComponent',
  component: NumberOfSimsComponent,
  decorators: [
    moduleMetadata({
      imports: [ProductFinderNgrxModule, CounterComponent],
    }),
    applicationConfig({
      providers: [
        importProvidersFrom(TgTranslateTestingModule.forRoot()),
        importProvidersFrom(StoreModule.forRoot()),
        importProvidersFrom(EffectsModule.forRoot()),
        importProvidersFrom(StoreDevtoolsModule.instrument()),
        provideHttpClient(),
      ],
    }),
  ],
} as Meta<NumberOfSimsComponent>;

export const Primary = {
  render: (args: NumberOfSimsComponent) => ({
    props: args,
  }),
  args: {},
};
