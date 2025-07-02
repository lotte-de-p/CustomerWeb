import { applicationConfig, Meta, StoryObj } from '@storybook/angular';
import { PricingComponent } from './pricing.component';
import { TgTelenetTestingModule } from '@telenet/ng-lib-shared';
import { NgxsModule } from '@ngxs/store';
import { PricedCphState } from '../../../priced-customer-product-holding/state/priced-cph.state';
import { PricingService } from '../../service/pricing.service';
import { PricingConfig } from '../../model/pricing-config.model';
import { PricingData } from '../../model/pricing-data.model';
import { delay, Observable, of } from 'rxjs';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { importProvidersFrom } from '@angular/core';

const pricingServiceMock = {
  getPricing(_messageGroup: string, _pricingConfig: PricingConfig): Observable<PricingData> {
    return of({
      discountedPrice: '125',
      normalPrice: '450',
      duration: 3,
    }).pipe(delay(700));
  },
};
export default {
  title: 'Pricing/PricingComponent',
  component: PricingComponent,
  decorators: [
    applicationConfig({
      providers: [
        importProvidersFrom(TgTranslateTestingModule.forRoot()),
        importProvidersFrom(TgTelenetTestingModule.forRoot()),
        importProvidersFrom(NgxsModule.forRoot([PricedCphState])),
        { provide: PricingService, useValue: pricingServiceMock },
      ],
    }),
  ],
} as Meta<PricingComponent>;

type Story = StoryObj<PricingComponent>;

export const Primary: Story = {
  args: {
    productCategory: 'customProducts',
    productIds: ['40816'],
    optionIds: ['275'],
    optinIds: [],
    postalCode: '2800',
    campaignCode: '',
    shortestDuration: true,
    hideFrequency: false,
    startingFrom: true,
    isBusiness: false,
    enableNbo: false,
    theme: 'light-ui',
    alignment: 'start',
    isShoppingCart: false,
    customProduct: {
      price: '75.00',
      promoPrice: '50.00',
      duration: '8',
      startDate: '2021-08-18T00:00:00.000+02:00',
      endDate: '2021-08-20T00:00:00.000+02:00',
    },
  },
};
