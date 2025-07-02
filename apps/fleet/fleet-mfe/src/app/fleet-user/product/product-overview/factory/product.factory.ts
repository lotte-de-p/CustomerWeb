import {
  OmapiProduct,
  RateInterface,
  ServiceInterface,
  SpecificationInterface,
  SubCategoryInterface,
} from '@telenet/ng-lib-omapi';
import { Product } from '../../../../shared/common/models/product.model';
import { ProductOverviewConstants } from '../../../../shared/common/constants/product-overview.constant';
import { SimTypeEnum } from '../../../../shared/common/enums/sim-type.enum';

export class ProductFactory {
  public static product(props: Partial<Product>): Product {
    const LOGO_URL = 'https://customerzone.prd.base.be/content/dam/www-base-be/img/self-service/products/base-15.png';

    return {
      children: [],
      productInfo: {
        internalCategory: 'POST-PAID-MOBILE',
        productId: 'BOYO0001',
        isYupProduct: false,
        externalProductCode: 'BOYO0001',
        productType: 'MOBILE',
        categories: ['for-5-discount', 'based-on-you-plans', 'post-paid-mobile'],
        customerCategories: ['residential', 'eventdemo', 'production-test'],
        subCategory: {} as SubCategoryInterface,
        labelKey: 'BASE 15',
        visible: false,
        weight: 30,
        services: this.getServices(),
        apps: [],
        localizedContent: [
          {
            locale: 'en',
            name: 'BASE 15',
            logo: 'OGO_URL',
          },
          {
            locale: 'nl',
            name: 'BASE 15',
            logo: 'OGO_URL',
          },
          {
            locale: 'fr',
            name: 'BASE 15',
            logo: 'OGO_URL',
          },
        ],
        shortDescription: {
          localizedContent: {
            locale: 'nl',
            name: "Onbeperkt bellen en sms'en en 6 GB mobiel internet. Wat je niet verbruikt, neem je mee naar volgende maand.",
          },
        },
        rates: [
          {
            type: 'mobile-data',
            unit: 'MB',
            cost: '0.0024414',
            currency: 'EUR',
          } as RateInterface,
          {
            type: 'call-to-other-networks',
            unit: 'MIN',
            cost: '0',
            currency: 'EUR',
          } as RateInterface,
        ],
        visibilityRules: {
          conditionalVisibility: false,
        },
        unlimited: false,
        eligibleForDiscount: false,
        priceType: 'Recurrent Charge',
        characteristics: {
          productGroup: 'OTHER',
          productSubGroup: '',
          productSegment: 'RMD',
          priceInclVat: 15,
          recipientsMandatory: false,
          esimAvailable: false,
        },
        usageBasedRatePlan: false,
        requiresInstallation: false,
        isExternalContentPack: 'false',
        isEligibleForSettinglimits: false,
        isEligibleForAutoPause: false,
        isEligibleForPauseProfile: false,
        isFPBProduct: false,
        name: 'BASE 15',
        logo: LOGO_URL,
      } as OmapiProduct,
      handsets: [],
      productType: 'mobile',
      addressId: '9150308812813941360',
      identifier: '0480007985',
      hasIncludedOptions: false,
      options: [],
      hasExtraOptions: false,
      accountNumber: 501260983,
      label: 'BASE 15',
      specUrl: 'https://api.int.base.be/omapi/public/product/BOYO0001',
      status: 'ACTIVE',
      price: {
        currency: 'EUR',
        recurrentTotal: '15,00',
        recurrentDiscounted: '15,00',
        recurrentDiscount: '0,00',
        taxInclPrices: {
          currency: 'EUR',
          recurrentTotal: '15,00',
          recurrentDiscounted: '15,00',
          recurrentDiscount: '0,00',
        },
      },
      isUnderMove: false,
      ...props,

      isProductActive(): boolean {
        return this.status === 'ACTIVE';
      },

      isProductSuspended(): boolean {
        return ProductOverviewConstants.SUSPEND_PRODUCT_STATUSES.includes(this.status);
      },

      isProductModificationInProgress(): boolean {
        return ProductOverviewConstants.MODIFICATION_PRODUCT_STATUSES.includes(this.status);
      },

      isProductDisconnectionInProgress(): boolean {
        return ProductOverviewConstants.DISCONNECTION_PRODUCT_STATUSES.includes(this.status);
      },

      isProductActivationInProgress(): boolean {
        return ProductOverviewConstants.ACTIVATION_PRODUCT_STATUSES.includes(this.status);
      },

      isC5Bundle(): boolean {
        return this.bundleType === Product.BUNDLE_TYPE_C5 || !!this.bundleType?.match(Product.BUNDLE_TYPE_KLIK);
      },

      hasValidPrice(price?: string) {
        return price && price !== '0' && price !== '0,0' && price !== '0,00' && price !== '0.0' && price !== '0.00';
      },

      isESim(): boolean {
        return this.simCardType === SimTypeEnum.E_SIM;
      },

      isPhysicalSim(): boolean {
        return this.simCardType === SimTypeEnum.PHYSICAL_SIM;
      },
    };
  }

  static products(): Product[] {
    return [
      this.product({}),
      this.product({
        addressId: '9150308812813941360',
        identifier: '0480007984',
        hasIncludedOptions: false,
        options: [],
        hasExtraOptions: false,
        accountNumber: 501260983,
        label: 'BASE 20',
        specUrl: 'https://api.int.base.be/omapi/public/product/BOYO0021',
        status: 'ACTIVE',
        price: {
          currency: 'EUR',
          recurrentTotal: '20,00',
          recurrentDiscounted: '20,00',
          recurrentDiscount: '0,00',
          taxInclPrices: {
            currency: 'EUR',
            recurrentTotal: '20,00',
            recurrentDiscounted: '20,00',
            recurrentDiscount: '0,00',
          },
        },
        isUnderMove: false,
      }),
    ];
  }

  private static getServices(): ServiceInterface[] {
    return [
      {
        serviceType: 'MOBILE_MONETARY',
        specifications: [
          {
            labelKey: '15-boyunlcalls-monthly-allowance',
            unit: 'EUR',
            value: '15',
            visible: true,
            weight: '10',
            localizedContent: {
              locale: 'nl',
              name: 'Maandelijks bedrag',
            },
          } as SpecificationInterface,
        ],
        experience: {
          experienceType: 'GENERAL',
        },
      },
      {
        serviceType: 'MOBILE_INTERNET',
        specifications: [
          {
            labelKey: 'base-15-limited-edition---national-and-eu-data',
            unit: 'GB',
            value: '6',
            visible: true,
            weight: '20',
            localizedContent: {
              locale: 'nl',
              name: ' data',
            },
          } as SpecificationInterface,
        ],
        experience: {
          experienceType: 'SURF',
        },
      },
      {
        serviceType: 'MOBILE_CALLING',
        specifications: [
          {
            labelKey: 'base-15-limited-edition---national-and-eu-calls',
            unit: 'minutes',
            value: 'Unlimited',
            visible: true,
            weight: '30',
            localizedContent: {
              locale: 'nl',
              name: 'bellen',
            },
          } as SpecificationInterface,
          {
            labelKey: 'base-15-limited-edition---national-and-eu-sms',
            unit: 'number',
            value: 'Unlimited',
            visible: true,
            weight: '40',
            localizedContent: {
              locale: 'nl',
              name: 'sms’en',
            },
          } as SpecificationInterface,
        ],
        experience: {
          experienceType: 'CALL',
        },
      },
    ];
  }
}
