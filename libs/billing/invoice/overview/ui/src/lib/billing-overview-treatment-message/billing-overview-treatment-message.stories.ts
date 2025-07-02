import { CommonModule } from '@angular/common';
import { applicationConfig, Meta, moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { importProvidersFrom, isDevMode } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { provideHttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TreatmentMessageComponent } from './billing-overview-treatment-message.component';

export default {
  title: 'BillingOverview/ui/Treatment Message',
  component: TreatmentMessageComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        BrowserAnimationsModule,
        TgTranslateTestingModule.forRoot({
          translations: {
            'ng.billing-overview.lbl.treatment-message-avoid-extra-costs':
              'Betaal zo snel mogelijk om extra kosten te vermijden.',
            'ng.billing-overview.lbl.treatment-message-avoid-suspended-services':
              'Als je je openstaand saldo niet betaalt, moeten we je diensten blokkeren.',
            'ng.billing-overview.lbl.treatment-message-resume-suspended-services':
              'Helaas bleef je saldo onbetaald. We hebben daarom je diensten geblokkeerd. Betaal je saldo om ze weer te gebruiken.',
          },
        }),
      ],
    }),
    applicationConfig({
      providers: [
        importProvidersFrom(RouterModule.forRoot([])),
        importProvidersFrom(
          StoreDevtoolsModule.instrument({
            maxAge: 25, // Retains last 25 states
            logOnly: !isDevMode(),
            traceLimit: 75,
          })
        ),
        provideHttpClient(),
        { provide: 'Window', useValue: window },
      ],
    }),
  ],
} as Meta<TreatmentMessageComponent>;

export const TreatmentMessage = {
  render: (args: TreatmentMessageComponent) => ({
    props: args,
  }),
  args: {
    collectionsTreatmentMessage: 'AVOID_SUSPENDED_SERVICES',
  },
};
