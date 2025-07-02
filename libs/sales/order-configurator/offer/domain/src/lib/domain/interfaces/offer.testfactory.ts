import { Factory } from 'fishery';
import { Offer } from './offer.interface';

export const offerTestFactory = Factory.define<Offer>(() => {
  return {
    offerItems: [
      {
        id: '1',
        type: 'Internet',
        offers: [
          {
            id: '2',
            type: 'OPTION',
          },
        ],
      },
    ],
    omapiProducts: [],
    requiresInstallation() {
      return true;
    },
  };
});
