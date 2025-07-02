import * as Factory from 'factory.ts';
import { SalesDataOffer, SalesDataType } from '../../../../sales';

export const productTestFactory = Factory.Sync.makeFactory<SalesDataOffer>({
  id: '36860',
  offers: [],
  type: SalesDataType.TYPE_PRODUCT,
});
