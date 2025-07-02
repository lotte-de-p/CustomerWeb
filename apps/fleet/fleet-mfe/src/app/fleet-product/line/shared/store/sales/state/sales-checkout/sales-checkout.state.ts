import { Address } from '../../../../models/address.model';
import { Offer } from '../../../../interfaces/offer.interface';
export interface MoveInfoInterface {
  isInitiated: boolean;
  oldAddress: Address;
  newAddress: Address;
  showMoveJourney: boolean;
}

export interface SalesCheckout {
  moveInfo: MoveInfoInterface;
  streamingServiceOffer: Offer;
  requiresInstallation: boolean;
}

export const defaultState: SalesCheckout = {
  moveInfo: {
    isInitiated: false,
    oldAddress: null,
    newAddress: null,
    showMoveJourney: false,
  },
  streamingServiceOffer: null,
  requiresInstallation: false,
};
