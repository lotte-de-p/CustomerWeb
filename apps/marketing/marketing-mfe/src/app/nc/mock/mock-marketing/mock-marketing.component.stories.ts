import { applicationConfig, Meta, StoryObj } from '@storybook/angular';
import { MockMarketingComponent } from './mock-marketing.component';
import { TgTelenetTestingModule } from '@telenet/ng-lib-shared';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { importProvidersFrom } from '@angular/core';

export default {
  title: 'Mock/MockMarketingComponent',
  component: MockMarketingComponent,
  decorators: [
    applicationConfig({
      providers: [
        importProvidersFrom(TgTranslateTestingModule.forRoot()),
        importProvidersFrom(TgTelenetTestingModule.forRoot()),
      ],
    }),
  ],
} as Meta<MockMarketingComponent>;

type Story = StoryObj<MockMarketingComponent>;

export const Primary: Story = {
  args: {
    title: 'Choose any product form the below list',
    salesUrl: 'http://www.int.telenet.be/residential/en/sales.html',
    productConfiguratorUrl: 'http://www.int.telenet.be/residential/en/mock-product-configurator.html',
    productListJSONString: [
      {
        sku: 'EQUI0259',
        title: 'SAMSUNG A20e GALAXY BLK 32GB',
        price: '',
        type: 'smartphone',
        addOns: [],
      },
      {
        sku: 'EQUI0138',
        title: 'APPLE iPHONE XS GRY 4G 64GB',
        price: '',
        type: 'smartphone',
        addOns: [],
      },
      {
        sku: 'EQUI0250',
        title: 'SAMSUNG A10 GALAXY BLK 32GB',
        price: '',
        type: 'smartphone',
        addOns: [],
      },
      {
        sku: 'BOYO0040',
        title: 'BASE Unlimited + SAMSUNG A10 GALAXY BLK 32GB',
        price: '',
        type: 'mobile-plan',
        addOns: [
          {
            sku: 'EQUI0250',
            title: 'SAMSUNG A10 GALAXY BLK 32GB',
            price: '',
            type: 'smartphone',
          },
        ],
      },
    ],
  },
};
