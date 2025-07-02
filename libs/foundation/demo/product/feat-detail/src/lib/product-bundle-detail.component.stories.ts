import { applicationConfig, Meta, StoryObj } from '@storybook/angular';
import { EffectsModule } from '@ngrx/effects';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { BrowserAnimationsModule, provideNoopAnimations } from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ProductBundleDetailComponent } from './product-bundle-detail.component';
import { OmapiProduct } from '@telenet/ng-lib-omapi';
import { importProvidersFrom } from '@angular/core';
import { Action, StoreModule } from '@ngrx/store';
import { ProductState, productReducer, Product } from '@demo/product/data-access';

const productInfo = new OmapiProduct();
const price = {
  currency: 'Euro',
  recurrentDiscounted: '0',
  recurrentTotal: '0',
  recurrentDiscount: '0',
  taxInclPrices: {
    currency: 'Euro',
    recurrentDiscounted: '0',
    recurrentTotal: '0',
    recurrentDiscount: '0',
  },
};
const option = {
  productInfo,
  status: 'ACTIVE',
  productType: '',
  label: 'foo',
  price,
  activeOptions: '',
};
const product = new Product();
product.status = 'ACTIVE';
product.productInfo = new OmapiProduct();
product.identifier = '0486335533';
product.productType = 'mobile';
product.isMultipleDTV = false;
product.options = [option];
product.productInfo.rates = [
  {
    cost: '123',
    unit: 'm',
    currency: 'Euro',
    isTypeData: true,
    isTypeVoice: false,
    type: 'DATA',
  },
];

product.handsets = [
  {
    identifier: '45464646565',
    msisdn: '4554666',
    accountNumber: '44666',
    handsetName: 'iPhone',
    productInfo: { products: [], totalProducts: 0 },
    contract: {
      obligationEndDate: '2011-10-05T14:48:00.000Z',
      duration: 5,
    },
  },
];

product.children = [product];
const mockReducer = (state: ProductState = { products: [product] }, action: Action): ProductState =>
  productReducer(state, action);
export default {
  title: 'demo/ProductBundleDetail',
  component: ProductBundleDetailComponent,
  decorators: [
    applicationConfig({
      providers: [
        importProvidersFrom(StoreModule.forRoot({ productsFeature: mockReducer })),
        importProvidersFrom(EffectsModule.forRoot([])),
        importProvidersFrom(BrowserAnimationsModule),
        importProvidersFrom(StoreDevtoolsModule.instrument()),
        provideNoopAnimations(),
        importProvidersFrom(TgTranslateTestingModule.forRoot()),
      ],
    }),
  ],
  parameters: {},
} as Meta<ProductBundleDetailComponent>;

type Story = StoryObj<ProductBundleDetailComponent>;

export const Primary: Story = {};
