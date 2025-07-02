import { applicationConfig, Meta, moduleMetadata } from '@storybook/angular';
import { provideHttpClient } from '@angular/common/http';
import { ProductPriceChangesComponent } from '@product/product-price-changes/feat-product-price-changes';
import { importProvidersFrom, isDevMode, LOCALE_ID } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import userDetailsMock from '../../mock/userdetails-mock.json';
import unAuthorizedMock from '../../mock/userdetails-unauthorized-mock.json';
import productPriceChangesMock from '../../mock/product-price-changes-mock.json';
import noProductPriceChangesMock from '../../mock/no-product-price-changes-mock.json';
import priceAccordingToConsumptionProductPriceChangeMock from '../../mock/one-product-price-change-mock.json';
import unauthorizedProductPriceChangeMock from '../../mock/product-price-changes-unauthorized-mock.json';
import loginMock from '../../mock/login-mock.json';
import wrongLoginMock from '../../mock/wrong-login-mock.json';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';

const localhost = 'http://localhost:8080';
window['Config'] = {
  'ocapi-url': localhost,
  'openid-auth-url': localhost,
  'openid-url': localhost,
  'openid-client-id': 'ocapi',
};
export default {
  title: 'Product Price Changes',
  component: ProductPriceChangesComponent,
  declareComponent: false,
  decorators: [
    moduleMetadata({
      imports: [TgTranslateTestingModule.forRoot({ translations: require('../../assets/i18n/en.json') })],
    }),
    applicationConfig({
      providers: [
        importProvidersFrom(StoreModule.forRoot()),
        importProvidersFrom(EffectsModule.forRoot()),
        provideHttpClient(),
        { provide: LOCALE_ID, useValue: 'en' },
        { provide: 'Window', useValue: window },
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
  parameters: {
    mockData: [productPriceChangesMock, userDetailsMock, loginMock],
  },
  args: {
    clientNumberInformationUrl: 'https://google.com',
  },
} as Meta<ProductPriceChangesComponent>;

export const LoggedIn = {
  name: 'Authenticated User',
  render: (args: ProductPriceChangesComponent) => ({
    props: args,
  }),
};

export const NotLoggedIn = {
  name: 'Unauthenticated User',
  render: (args: ProductPriceChangesComponent) => ({
    props: args,
  }),
  parameters: {
    mockData: [productPriceChangesMock, unAuthorizedMock, loginMock],
  },
};

export const Unauthorized = {
  name: 'Unauthorized user',
  render: (args: ProductPriceChangesComponent) => ({
    props: args,
  }),
  parameters: {
    mockData: [unauthorizedProductPriceChangeMock, userDetailsMock, loginMock],
  },
};

export const WrongCredentials = {
  name: 'Wrong Credentials',
  render: (args: ProductPriceChangesComponent) => ({
    props: args,
  }),
  parameters: {
    mockData: [productPriceChangesMock, unAuthorizedMock, wrongLoginMock],
  },
};

export const PriceAccordingToConsumptionPriceChange = {
  name: 'Price According To Consumption',
  render: (args: ProductPriceChangesComponent) => ({
    props: args,
  }),
  parameters: {
    mockData: [priceAccordingToConsumptionProductPriceChangeMock, userDetailsMock, loginMock],
  },
};

export const NoPriceChanges = {
  name: 'No Price Changes',
  render: (args: ProductPriceChangesComponent) => ({
    props: args,
  }),
  parameters: {
    mockData: [noProductPriceChangesMock, userDetailsMock, loginMock],
  },
};
