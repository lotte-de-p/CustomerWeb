import { applicationConfig, Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddressCheckerComponent } from './address-checker.component';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { of } from 'rxjs';
import { RecaptchaService } from '@telenet/ng-lib-shared';
import { importProvidersFrom } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { FiberAddressCheckerComponent } from '@address-checker/feat-address-checker';

const citySuggestionsMock = require('../mock/city-suggestion-mock.json');
const numberSuggestionsMock = require('../mock/number-suggestion-mock.json');
const streetSuggestionsMock = require('../mock/street-suggestion-mock.json');
const productSubscriptionsMock = require('../mock/product-subscriptions-mock.json');
const contactAddressPlannedMock = require('../mock/contact-address-planned-mock.json');
const contactAddressReadyMock = require('../mock/contact-address-ready-mock.json');
const leadCaptationMock = require('../mock/lead-captation-mock.json');
const userDetailsMock = require('../mock/userdetails-mock.json');

const enableUserDetailsMock = false;

function fiberEligibilityMock() {
  return {
    url: 'http://localhost:8080/address/v1/fiber/eligible?geoId=123',
    method: 'GET',
    status: 200,
    // @ts-ignore
    response: (request) => {
      const { searchParams } = request;
      return {
        eligible: searchParams.geoId === '5d587b3d-b278-70bc-e053-579c000a0533' ? 'READY' : 'PLANNED',
      };
    },
  };
}

function addressGeoIdMock() {
  return {
    url: 'http://localhost:8080/address/v1/geoId?zipCode=4000&streetName=Gent%20Street&houseNumber=1234',
    method: 'GET',
    status: 200,
    // @ts-ignore
    response: (request) => {
      return {
        geoId:
          request.searchParams.houseNumber === '5796'
            ? '5d587b3d-b278-70bc-e053-579c000a0533'
            : '5d587b3d-b278-70bc-e053-579c000a0534',
      };
    },
  };
}

export default {
  title: 'AddressCheckerComponent',
  component: AddressCheckerComponent,
  decorators: [
    moduleMetadata({
      imports: [BrowserAnimationsModule, FiberAddressCheckerComponent],
    }),
    applicationConfig({
      providers: [
        importProvidersFrom(StoreModule.forRoot()),
        importProvidersFrom(EffectsModule.forRoot()),
        importProvidersFrom(TgTranslateTestingModule.forRoot()),
        provideHttpClient(),
        {
          provide: RecaptchaService,
          useValue: {
            getRecaptchaToken: () => of('test_token'),
          },
        },
      ],
    }),
  ],
  parameters: {
    mockData: [
      fiberEligibilityMock(),
      addressGeoIdMock(),
      citySuggestionsMock,
      streetSuggestionsMock,
      numberSuggestionsMock,
      productSubscriptionsMock,
      contactAddressPlannedMock,
      contactAddressReadyMock,
      leadCaptationMock,
      ...(enableUserDetailsMock ? [userDetailsMock] : []),
    ],
  },
} as Meta<AddressCheckerComponent>;

type Story = StoryObj<AddressCheckerComponent>;

export const Primary: Story = {
  args: {
    urlToProductPage: '',
    urlToInfoPage: '',
    urlRequestSubscription: '',
  },
};
