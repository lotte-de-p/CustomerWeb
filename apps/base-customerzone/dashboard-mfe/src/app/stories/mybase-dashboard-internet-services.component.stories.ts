import { importProvidersFrom, LOCALE_ID } from '@angular/core';
import { ServiceType } from '@mybase-dashboard/data-access';
import { MyBaseServicesCardsComponent } from '@mybase-dashboard/ui';
import { applicationConfig, componentWrapperDecorator, Meta } from '@storybook/angular';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { TgTelenetTestingModule } from '@telenet/ng-lib-shared';

export default {
  title: 'MyBase Dashboard/Level 2 - Internet/Services',
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
    data: [ServiceType.EASY_SWITCH, ServiceType.BEST_TARIFF, ServiceType.RETURN_DEVICE],
    type: 'internet',
    easySwitchUrl: 'https://easySwitch',
    bestTariffUrl: 'https://bestTariff',
    returnDeviceUrl: 'https://return-device',
  },
};

export const SomeCardsVisible = {
  render: (args: MyBaseServicesCardsComponent) => ({
    props: args,
  }),
  args: {
    data: [ServiceType.EASY_SWITCH],
    type: 'internet',
    easySwitchUrl: 'https://easySwitch',
    bestTariffUrl: 'https://bestTariff',
    returnDeviceUrl: 'https://return-device',
  },
};
