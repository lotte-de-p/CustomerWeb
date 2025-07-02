import { LOCALE_ID, importProvidersFrom } from '@angular/core';
import { HardwareDiscountComponent } from '@discount/feat-hardware-discount';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Meta, applicationConfig } from '@storybook/angular';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { TgTelenetTestingModule } from '@telenet/ng-lib-shared';
import { DatePipe } from '@angular/common';

import hardwareDiscountInvoiceErrorsMock from '../../mock/hardware-discount-invoice-errors-mock.json';
import userDetailsMock from '../../mock/userdetails-mock.json';
import hardwareInvoiceMock from '../../mock/hardware-invoice-mock.json';
import hardwareInvoiceErrorMock from '../../mock/hardware-invoice-error-mock.json';

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
    mockData: [hardwareDiscountInvoiceErrorsMock, userDetailsMock, hardwareInvoiceMock, hardwareInvoiceErrorMock],
  },
} as Meta<HardwareDiscountComponent>;

export const HardwareInvoiceErrors = {
  render: (args: HardwareDiscountComponent) => ({
    props: args,
  }),
  args: {
    useDiscountLink: 'https://useDiscountLink.com',
    termsConditionsLink: 'https://termsConditionsLink.com',
    hardwareInvoicesLink: 'https://hardwareInvoicesLink',
  },
};
