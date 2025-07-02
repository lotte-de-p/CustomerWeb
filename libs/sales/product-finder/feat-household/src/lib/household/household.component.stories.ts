import { applicationConfig, Meta, moduleMetadata } from '@storybook/angular';
import { HouseholdComponent } from './household.component';
import { StoreModule } from '@ngrx/store';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ProductFinderNgrxModule } from '@sales/product-finder/data-access';
import { CounterComponent } from '@sales/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { importProvidersFrom } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';

export default {
  title: 'sales/product-finder/feature-household/HouseholdComponent',
  component: HouseholdComponent,
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
} as Meta<HouseholdComponent>;

export const Primary = {
  render: (args: HouseholdComponent) => ({
    props: args,
  }),
  args: {},
};
