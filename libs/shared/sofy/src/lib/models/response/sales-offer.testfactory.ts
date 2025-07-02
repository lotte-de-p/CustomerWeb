import * as Factory from 'factory.ts';
import { OmapiProduct } from '@telenet/ng-lib-omapi';
import { SalesOfferPromoPeriod } from './sales-offer-promo-period.model';
import { SalesOfferPromo } from './sales-offer-promo.model';
import { SalesOfferProductOption } from './sales-offer-product-option.model';
import { SalesOfferProductOptin } from './sales-offer-product-optin.model';
import { SalesOfferSetupModel } from './sales-offer-setup.model';
import { SalesOfferProductInstallType } from './sales-offer-product-install-type';
import { SalesOfferCost } from '../salesOfferCost';
import { SalesOfferProduct } from './sales-offer-product.model';
import { SalesOffer } from './sales-offer.model';
import { InstallTypeEnum } from '../../enums/ocapi-move-order.enum';
import { SalesOfferProductStreamingService } from './sales-offer-product-streaming-service.model';

export const salesOfferPromoPeriodFactory = Factory.Sync.makeFactory<SalesOfferPromoPeriod>({
  startDate: '12/01/2020',
  endDate: '12/03/2020',
});

export const salesOfferPromoFactory = Factory.Sync.makeFactory<SalesOfferPromo>({
  backendid: 123,
  duration: 3,
  legalid: 'legal-id',
  name: 'promo-one',
  period: salesOfferPromoPeriodFactory.build(),
  price: -5,
  priceexclvat: -3,
  puk: '1234',
  tags: [],
  legalInformation: undefined,
});

export const salesOfferProductOptionFactory = Factory.Sync.makeFactory<SalesOfferProductOption>({
  specurl: 'url/100',
  omapiid: '100',
  mutuallyexclusive: 'none',
  mutuallyexclusivelist: [],
  selected: true,
  description: 'description',
  price: 20,
  priceexclvat: 18,
  originalprice: 15,
  productInfo: {} as OmapiProduct,
  promos: [salesOfferPromoFactory.build()],
});
export const salesOfferProductStreamingServiceFactory = Factory.Sync.makeFactory<SalesOfferProductStreamingService>({
  options: [salesOfferProductOptionFactory.build()],
  specurl: 'url/100',
  omapiid: '100',
  mutuallyexclusive: 'none',
  mutuallyexclusivelist: [],
  selected: true,
  description: 'description',
  price: 20,
  priceexclvat: 18,
  originalprice: 15,
  productInfo: {} as OmapiProduct,
  promos: [salesOfferPromoFactory.build()],
});
export const salesOfferProductOptinFactory = Factory.Sync.makeFactory<SalesOfferProductOptin>({
  specurl: 'url/100',
  omapiid: '100',
  mutuallyexclusive: 'none',
  selected: true,
  description: 'description',
  price: 0,
  priceexclvat: 0,
  originalprice: 15,
  productInfo: {
    hasServiceType(_: string): boolean {
      return false;
    },
  } as OmapiProduct,
  promos: [],
});
export const SalesOfferSetupModelFactory = Factory.Sync.makeFactory<SalesOfferSetupModel>({
  easyswitcheligible: true,
});

export const salesOfferProductPreInstallTypeFactory = Factory.Sync.makeFactory<SalesOfferProductInstallType>({
  description: InstallTypeEnum.PRE_INSTALL,
  price: 0,
  mutuallyexclusive: '',
  priceexclvat: 0,
  selected: false,
  promos: [],
});

export const salesOfferProductComfortInstallTypeFactory = Factory.Sync.makeFactory<SalesOfferProductInstallType>({
  description: InstallTypeEnum.COMFORT_INSTALL,
  price: 85,
  mutuallyexclusive: '',
  priceexclvat: 70.25,
  selected: false,
  promos: [],
});

export const salesOfferProductSelfInstallTypeFactory = Factory.Sync.makeFactory<SalesOfferProductInstallType>({
  description: InstallTypeEnum.SELF_INSTALL,
  price: 0,
  mutuallyexclusive: '',
  priceexclvat: 0,
  selected: false,
  promos: [],
});

export const salesOfferCostFactory = Factory.Sync.makeFactory<SalesOfferCost>({
  name: 'cable-installation',
  price: 50,
  priceexclvat: 45,
  promotions: [],
  recurring: 0,
});

export const salesOfferProductFactory = Factory.Sync.makeFactory<SalesOfferProduct>({
  omapiid: '87',
  correlationid: 'id',
  specurl: 'url/123',
  description: 'description',
  price: 100,
  priceexclvat: 89,
  options: [salesOfferProductOptionFactory.build()],
  optinproducts: [salesOfferProductOptinFactory.build()],
  productInfo: {} as OmapiProduct,
  promos: [],
  installtypes: [salesOfferProductComfortInstallTypeFactory.build(), salesOfferProductSelfInstallTypeFactory.build()],
  costs: [salesOfferCostFactory.build()],
  streamingservices: [],
});

export const salesOfferStandaloneOptionsFactory = Factory.Sync.makeFactory<SalesOfferProduct>({
  omapiid: '100',
  correlationid: 'id',
  specurl: 'url/100',
  description: 'description',
  price: 100,
  priceexclvat: 89,
  options: [],
  optinproducts: [salesOfferProductOptinFactory.build()],
  productInfo: {} as OmapiProduct,
  promos: [salesOfferPromoFactory.build()],
  installtypes: [salesOfferProductComfortInstallTypeFactory.build(), salesOfferProductSelfInstallTypeFactory.build()],
  costs: [salesOfferCostFactory.build()],
  streamingservices: [],
});

export const salesOfferTestFactory = Factory.Sync.makeFactory<SalesOffer>({
  products: [salesOfferProductFactory.build()],
  setup: SalesOfferSetupModelFactory.build(),
  standaloneoptions: [],
});

export const salesOfferTestStandaloneOptionsFactory = Factory.Sync.makeFactory<SalesOffer>({
  products: [],
  setup: SalesOfferSetupModelFactory.build(),
  standaloneoptions: [salesOfferStandaloneOptionsFactory.build()],
});

export const salesOfferError = { error: { type: 'error' } };
