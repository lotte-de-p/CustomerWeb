import { BillingOverviewComponent } from './billing-overview.component';
import { applicationConfig, Meta, StoryObj } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { importProvidersFrom } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';

export default {
  title: 'demo/Billing overview',
  component: BillingOverviewComponent,
  decorators: [
    applicationConfig({
      providers: [
        importProvidersFrom(StoreModule.forRoot()),
        importProvidersFrom(EffectsModule.forRoot()),
        importProvidersFrom(BrowserAnimationsModule),
        importProvidersFrom(
          TgTranslateTestingModule.forRoot({
            language: 'en',
            translations: {
              'ng.billing-overview.lbl.open': 'Open',
              'ng.billing-overview.lbl.paid': 'Paid',
              'ng.billing-overview.lbl.overdue': 'Overdue',
              'ng.billing-overview.lbl.open-file': 'Open',
              'ng.billing-overview.lbl.pay-now': 'Pay',
              'ng.billing-overview.lbl.reception-date': 'Invoice date',
              'ng.billing-overview.lbl.sort-status': 'Status',
              'ng.billing-overview.lbl.sort-amount': 'Amount excl. VAT',
              'ng.billing-overview.lbl.sort-id': 'Invoice number',
              'ng.billing-overview.lbl.sort-expiration-date': 'Expiry date',
            },
          })
        ),
      ],
    }),
  ],
  parameters: {},
} as Meta<BillingOverviewComponent>;

type Story = StoryObj<BillingOverviewComponent>;

export const Primary: Story = {};
