import * as udl from 'udl';

export interface DataLayerAttributes {
  stepId?: string;
  itemName?: string;
  itemGroup?: string;
  itemIdentifier?: string;
  intent?: string;
  itemData?: string;
  flowType?: string;
  cart?: udl.Cart;
  source?: string;
  onsiteSearchFilter?: string;
  onsiteSearchResults?: string;
  onsiteSearchTerm?: string;
  onsiteSearchOrigination?: string;
  onsiteSearchResultsID?: string;
  cardId?: string;
  destinationURL?: string;
  product?: udl.Item[];
  storeName?: string;
  flowCategory?: string;
  stockAvailability?: string;
  total?: string;
  additionalSMSSent?: string;
  paymentMethod?: string;
  productPurchaseType?: string;
}
