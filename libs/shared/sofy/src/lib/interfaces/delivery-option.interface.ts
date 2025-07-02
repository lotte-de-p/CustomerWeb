import { SelfInstallTypeEnum } from '../enums/self-install-type.enum';

export interface DeliveryOptionInterface {
  specurl: string;
  omapiid: string;
  mutuallyexclusive: string;
  requiredoption: boolean;
  selected: boolean;
  description: SelfInstallTypeEnum;
  price: number;
  promos: [];
  priceexclvat: number;
  originalprice: number;
  originalpriceexclvat: number;
}
