export interface Offer {
  id: string;
  action: OfferAction;
  type: string;
}

export type OfferAction = 'ADD' | 'DISCONNECT';
