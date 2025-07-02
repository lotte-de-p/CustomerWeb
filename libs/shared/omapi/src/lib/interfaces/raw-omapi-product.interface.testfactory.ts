import { Sync } from 'factory.ts';
import { RawOmapiProductInterfaceData } from './raw-omapi-product.interface';

export const rawOmapiProductTestFactory = Sync.makeFactory<RawOmapiProductInterfaceData>({
  category: [],
  unlimited: false,
  priceType: 'Non Recurrent Charge',
  requiresInstallation: false,
  usageBasedRatePlan: false,
  productid: '9155501914465272430',
  labelkey: 'Discount Telenet Customer Price',
  salesofferingid: 'test',
  externalProductCode: 'test',
  producttype: 'test',
  weight: 1,
  apps: [],
  services: [],
  customercategories: [
    'All',
    'Residential',
    'Production Test Business',
    'Internal',
    'Production Test',
    'Event/Demo',
    'Business',
  ],
  visible: false,
  localizedcontent: [
    {
      locale: 'nl',
      name: 'Korting Telenet Klantenprijs',
      logo: 'https://customerzone.prd.base.be/content/dam/www-base-be/img/self-service/products/discount-telenet-customer-price1.png',
    },
    {
      locale: 'fr',
      name: 'Réduction Prix Client Telenet',
      logo: 'https://customerzone.prd.base.be/content/dam/www-base-be/img/self-service/products/discount-telenet-customer-price2.png',
    },
    {
      locale: 'en',
      name: 'Discount Telenet Customer Price',
      logo: 'https://customerzone.prd.base.be/content/dam/www-base-be/img/self-service/products/discount-telenet-customer-price3.png',
    },
  ],
  isYupProduct: false,
  isEligibleForPauseProfile: false,
  isEligibleForAutoPause: false,
  isEligibleForSettinglimits: false,
  isFPBProduct: false,
});
