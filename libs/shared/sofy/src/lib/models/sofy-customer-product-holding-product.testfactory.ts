import * as Factory from 'factory.ts';
import { SofyAddress } from './sofy-address';
import { SofyCustomerProductHoldingProduct } from './sofy-customer-product-holding-product';

export const sofyAddressFactory = Factory.Sync.makeFactory<SofyAddress>({
  addressid: 'adress-id',
  municipality: 'Merksplas',
  postalcode: '2330',
  street: 'Steenweg op Beerse',
  housenr: '123',
  country: 'Belgie',
});

export const sofyCustomerProductHoldingProductFactory = Factory.Sync.makeFactory<SofyCustomerProductHoldingProduct>({
  specurl: '568',
  address: sofyAddressFactory.build(),
  identifier: '123',
  products: [],
  options: [],
});
