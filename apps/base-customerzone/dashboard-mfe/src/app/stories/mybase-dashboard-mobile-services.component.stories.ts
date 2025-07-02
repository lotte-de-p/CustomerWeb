import { importProvidersFrom, LOCALE_ID } from '@angular/core';
import { ServiceType } from '@mybase-dashboard/data-access';
import { MyBaseServicesCardsComponent } from '@mybase-dashboard/ui';
import { applicationConfig, componentWrapperDecorator, Meta } from '@storybook/angular';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { TgTelenetTestingModule } from '@telenet/ng-lib-shared';

export default {
  title: 'MyBase Dashboard/Level 2 - Mobile/Services',
  component: MyBaseServicesCardsComponent,
  decorators: [
    componentWrapperDecorator((story) => `${story}`),
    applicationConfig({
      providers: [
        importProvidersFrom(TgTelenetTestingModule.forRoot()),
        importProvidersFrom(TgTranslateTestingModule.forRoot()),
        { provide: LOCALE_ID, useValue: 'en' },
      ],
    }),
  ],
} as Meta<MyBaseServicesCardsComponent>;

export const AllCardsVisible = {
  render: (args: MyBaseServicesCardsComponent) => ({
    props: args,
  }),
  args: {
    data: [ServiceType.PAYBYMOBILE, ServiceType.BUY_HARDWARE_DISCOUNT],
    type: 'mobile',
    payByMobileUrl: 'https://paybymobile',
    buyHardwareDiscountUrl: 'https://buy-hardware-discount',
  },
};

export const SomeCardsVisible = {
  render: (args: MyBaseServicesCardsComponent) => ({
    props: args,
  }),
  args: {
    data: [ServiceType.BUY_HARDWARE_DISCOUNT],
    type: 'mobile',
    payByMobileUrl: 'https://paybymobile',
    buyHardwareDiscountUrl: 'https://buy-hardware-discount',
  },
};
