import { applicationConfig, Meta } from '@storybook/angular';
import { ProductFinderComponent } from './product-finder.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { TranslateService } from '@ngx-translate/core';
import { importProvidersFrom } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

export default {
  title: 'ProductFinderComponent',
  component: ProductFinderComponent,
  decorators: [
    applicationConfig({
      providers: [
        importProvidersFrom(StoreModule.forRoot()),
        importProvidersFrom(EffectsModule.forRoot()),
        importProvidersFrom(TgTranslateTestingModule.forRoot()),
        importProvidersFrom(HttpClientTestingModule),
        { provide: 'Window', useValue: window },
        TranslateService,
      ],
    }),
  ],
} as Meta<ProductFinderComponent>;

export const Primary = {
  render: (args: ProductFinderComponent) => ({
    props: args,
  }),
  args: {},
};
