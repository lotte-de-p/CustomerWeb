import { applicationConfig, moduleMetadata } from '@storybook/angular';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { GrandFatheringSocialTariffNotificationComponent } from './grand-fathering-social-tariff-notification.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export default {
  title: 'Products/grandfathering social tariff notification',
  component: GrandFatheringSocialTariffNotificationComponent,
  declareComponent: false,
  decorators: [
    moduleMetadata({
      imports: [TgTranslateTestingModule.forRoot({ translations: require('../../../assets/i18n/nl.json') })],
    }),
    applicationConfig({
      providers: [
        { provide: 'Window', useValue: window },
        {
          provide: MatDialogRef,
          useValue: {},
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: {},
        },
      ],
    }),
  ],
  parameters: {},
};

export const Primary = {
  render: (args: GrandFatheringSocialTariffNotificationComponent) => ({
    props: args,
  }),
  args: {},
};
