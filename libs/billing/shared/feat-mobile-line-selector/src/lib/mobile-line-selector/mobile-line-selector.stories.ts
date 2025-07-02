import { CommonModule } from '@angular/common';
import { applicationConfig, Meta, moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { MobileLineSelectorComponent } from './mobile-line-selector.component';

import mobileLinesMock from '../../mock/mobile-lines.json';
import oneMobileLineMock from '../../mock/one-mobile-line.json';
import userDetailsMock from '../../mock/userdetails-mock.json';
import noMobileLineMock from '../../mock/no-mobile-line.json';
import mobileLineInProgress from '../../mock/mobile-line-activation-in-progress.json';
import mobileLineError from '../../mock/mobile-line-error.json';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom, isDevMode } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

const localhost = 'http://localhost:8080';

window['Config'] = {
  'ocapi-url': localhost,
  'openid-auth-url': localhost,
  'openid-url': localhost,
  'openid-client-id': 'ocapi',
};

export default {
  title: 'Shared/feat/Mobile Line Selector',
  component: MobileLineSelectorComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        BrowserAnimationsModule,
        TgTranslateTestingModule.forRoot({
          language: 'en',
          translations: {
            'ng.mobile-line-selector.lbl.data-sim': 'data sim',
            'ng.mobile-line-selector.lbl.title': 'Select a phone number',
            'ng.mobile-line-selector.lbl.change-line': 'Change line',
            'ng.mobile-line-selector.no-lines': "You don't have any active mobile line.",
            'ng.mobile-line-selector.activation-in-progress-label':
              'Hang on there! Your mobile line is not yet activated.',
            'ng.mobile-line-selector.activation-in-progress-description':
              "We're trying our best to activate your mobile line as soon as possible. We will inform you when your line is going to be active",
            'ng.mobile-line-selector.lbl.error-description':
              "Due to a technical issue on our end we couldn't retrieve your data.",
            'ng.mobile-line-selector.lbl.error-label': "Oops! We couldn't retrieve your product",
          },
        }),
      ],
    }),
    applicationConfig({
      providers: [
        provideHttpClient(),
        { provide: 'Window', useValue: window },
        importProvidersFrom(StoreModule.forRoot()),
        importProvidersFrom(EffectsModule.forRoot()),
        importProvidersFrom(
          StoreDevtoolsModule.instrument({
            maxAge: 25, // Retains last 25 states
            logOnly: !isDevMode(),
            traceLimit: 75,
          })
        ),
      ],
    }),
  ],
} as Meta<MobileLineSelectorComponent>;

export const Primary = {
  render: (args: MobileLineSelectorComponent) => ({
    props: args,
  }),
  parameters: {
    mockData: [userDetailsMock, mobileLinesMock],
    query: { msisdn: '123456789' },
  },
};

export const WithOneLine = {
  render: (args: MobileLineSelectorComponent) => ({
    props: args,
  }),
  parameters: {
    mockData: [userDetailsMock, oneMobileLineMock],
  },
};

export const WithNoMobileLine = {
  render: (args: MobileLineSelectorComponent) => ({
    props: args,
  }),
  parameters: {
    mockData: [userDetailsMock, noMobileLineMock],
  },
};

export const WithMobileLineActivationInProgress = {
  render: (args: MobileLineSelectorComponent) => ({
    props: args,
  }),
  parameters: {
    mockData: [userDetailsMock, mobileLineInProgress],
  },
};

export const WithMobileLineFetchError = {
  render: (args: MobileLineSelectorComponent) => ({
    props: args,
  }),
  parameters: {
    mockData: [userDetailsMock, mobileLineError],
  },
};
