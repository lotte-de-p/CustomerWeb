import { LOCALE_ID, importProvidersFrom } from '@angular/core';
import { HardwareDiscountComponent } from '@discount/feat-hardware-discount';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Meta, applicationConfig } from '@storybook/angular';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { TgTelenetTestingModule } from '@telenet/ng-lib-shared';
import { DatePipe } from '@angular/common';

import hardwareDiscountBadPayerMock from '../../mock/hardware-discount-bad-payer.json';
import userDetailsMock from '../../mock/userdetails-mock.json';

const localhost = 'http://localhost:8080';

window['Config'] = {
  'ocapi-url': localhost,
  'openid-auth-url': localhost,
  'openid-url': localhost,
  'openid-client-id': 'ocapi',
};

export default {
  title: 'Hardware Discount',
  component: HardwareDiscountComponent,
  decorators: [
    applicationConfig({
      providers: [
        importProvidersFrom(StoreModule.forRoot()),
        importProvidersFrom(EffectsModule.forRoot()),
        importProvidersFrom(TgTelenetTestingModule.forRoot()),
        importProvidersFrom(TgTranslateTestingModule.forRoot()),
        DatePipe,
        { provide: LOCALE_ID, useValue: 'en' },
      ],
    }),
  ],
  parameters: {
    mockData: [hardwareDiscountBadPayerMock, userDetailsMock],
  },
} as Meta<HardwareDiscountComponent>;

export const BadPayer = {
  render: (args: HardwareDiscountComponent) => ({
    props: args,
  }),
  args: {
    useDiscountLink: 'https://useDiscountLink.com',
    termsConditionsLink: 'https://termsConditionsLink.com',
    hardwareInvoicesLink: 'https://hardwareInvoicesLink',
  },
};
