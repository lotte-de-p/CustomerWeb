import { OmapiProduct } from '@telenet/ng-lib-omapi';
import { Factory } from 'fishery';

export enum OfferItemType {
  INTERNET = 'Internet',
  OPTION = 'OPTION',
}

export interface Offer {
  offerItems: OfferItem[];
  omapiProducts: OmapiProduct[];

  requiresInstallation(): boolean;
}

export interface OfferItem {
  id?: string;
  itemCode?: string;
  type: string;
  offers?: OfferItem[];
}

export const offerItemTestFactory = Factory.define<OfferItem>(() => {
  return {
    type: OfferItemType.INTERNET,
    id: '1',
    offers: [],
  };
});

export function createOffer(offerItems: OfferItem[], omapiProducts: OmapiProduct[]): Offer {
  return {
    offerItems,
    omapiProducts,
    requiresInstallation(): boolean {
      return this.omapiProducts.some((product) => product.requiresInstallation);
    },
  };
}
