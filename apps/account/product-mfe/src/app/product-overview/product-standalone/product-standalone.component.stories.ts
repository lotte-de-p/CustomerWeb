import { applicationConfig, Meta, moduleMetadata } from '@storybook/angular';
import { Product } from '../models/product.model';
import { ProductStandaloneComponent } from './product-standalone.component';
import { SpecificationInterface } from '@telenet/ng-lib-omapi';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { importProvidersFrom } from '@angular/core';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { PhoneNumberPipe } from '../pipes/phone-number.pipe';
import { ProductSpecificationsComponent } from '../product-specifications/product-specifications.component';
import { ProductIncludedOptionsComponent } from '../product-included-options/product-included-options.component';
import { ProductOptionsSpecificationsComponent } from '../product-options-specifications/product-options-specifications.component';
import { ProductLevelSpecificationsComponent } from '../product-level-specifications/product-level-specifications.component';
import { MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
const productsMock = require('../../../mock/standalone-products-mock.json');
const productInfoSpecifications = require('../../../mock/product-info-specifications.json');

export default {
  title: 'Products/Standalone',
  component: ProductStandaloneComponent,
  declareComponent: false,
  decorators: [
    moduleMetadata({
      imports: [
        PhoneNumberPipe,
        ProductSpecificationsComponent,
        ProductIncludedOptionsComponent,
        ProductOptionsSpecificationsComponent,
        ProductLevelSpecificationsComponent,
        BrowserAnimationsModule,
        CommonModule,
        TgTranslateTestingModule.forRoot({ translations: require('../../../assets/i18n/nl.json') }),
      ],
    }),
    applicationConfig({
      providers: [
        importProvidersFrom(TranslateModule.forRoot()),
        { provide: 'Window', useValue: window },
        importProvidersFrom(StoreModule.forRoot()),
        importProvidersFrom(EffectsModule.forRoot()),
        {
          provide: MatDialogRef,
          useValue: {},
        },
      ],
    }),
  ],
} as Meta<ProductStandaloneComponent>;

function getStubbedProducts() {
  return [
    {
      ...productsMock[0],
      productInfo: {
        ...productsMock[0].productInfo,
        hasCategory(): boolean {
          return false;
        },
        isShowRates(): boolean {
          return false;
        },
        getSortedSpecifications(): SpecificationInterface[] {
          return productInfoSpecifications as SpecificationInterface[];
        },
      },
      isC5Bundle(): boolean {
        return false;
      },
      isProductActivationInProgress(): boolean {
        return false;
      },
      isProductDisconnectionInProgress(): boolean {
        return false;
      },
      isProductModificationInProgress(): boolean {
        return false;
      },
      isProductSuspended(): boolean {
        return false;
      },
      isProductActive(): boolean {
        return true;
      },
    },
  ] as Product[];
}

export const Primary = {
  render: (args: ProductStandaloneComponent) => ({
    props: args,
  }),
  args: {
    standAloneProducts: getStubbedProducts(),
    hasSalesScope: false,
    canManageProductHolding: false,
    changeTariffPlanUrl: '',
    manageOptionUrl: '',
    componentInstanceID: '',
    showStreamingSection: false,
  },
};

export const SocialDiscountTariff = {
  render: (args: ProductStandaloneComponent) => ({
    props: args,
  }),
  args: {
    standAloneProducts: socialDiscountProducts(),
    hasSalesScope: false,
    canManageProductHolding: false,
    changeTariffPlanUrl: '',
    manageOptionUrl: '',
    componentInstanceID: '',
    showStreamingSection: false,
  },
};

function socialDiscountProducts() {
  return [
    {
      ...productsMock[0],
      hasOldSocialTariffDiscount: true,
      productInfo: {
        ...productsMock[0].productInfo,
        hasCategory(): boolean {
          return false;
        },
        isShowRates(): boolean {
          return false;
        },
        getSortedSpecifications(): SpecificationInterface[] {
          return productInfoSpecifications as SpecificationInterface[];
        },
      },
      isC5Bundle(): boolean {
        return false;
      },
      isProductActivationInProgress(): boolean {
        return false;
      },
      isProductDisconnectionInProgress(): boolean {
        return false;
      },
      isProductModificationInProgress(): boolean {
        return false;
      },
      isProductSuspended(): boolean {
        return false;
      },
      isProductActive(): boolean {
        return true;
      },
    },
  ] as Product[];
}
