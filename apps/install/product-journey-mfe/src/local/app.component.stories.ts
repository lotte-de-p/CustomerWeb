import { applicationConfig, Meta, moduleMetadata } from '@storybook/angular';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { importProvidersFrom } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { appRoutes } from './app.routes';
import { RouterModule } from '@angular/router';

export default {
  title: 'ProductJourneyComponent',
  component: AppComponent,
  declareComponent: false,
  decorators: [
    moduleMetadata({
      imports: [RouterModule],
    }),
    applicationConfig({
      providers: [
        importProvidersFrom(StoreModule.forRoot()),
        importProvidersFrom(EffectsModule.forRoot()),
        importProvidersFrom(TgTranslateTestingModule.forRoot()),
        importProvidersFrom(HttpClientTestingModule),
        importProvidersFrom(RouterTestingModule.withRoutes(appRoutes)),
      ],
    }),
  ],
} as Meta<AppComponent>;

export const Primary = {
  render: (args: AppComponent) => ({
    props: args,
  }),
  args: {},
};
