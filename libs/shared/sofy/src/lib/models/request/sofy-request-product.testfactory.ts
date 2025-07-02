import * as Factory from 'factory.ts';
import { SofyRequestAddress } from './sofy-request-address';
import { SofyRequestProduct } from './sofy-request-product';

export const sofyRequestAddressBuilder = Factory.Sync.makeFactory<SofyRequestAddress>({
  addressid: 'adress-id',
  municipality: 'Merksplas',
  postalcode: '2330',
  street: 'Steenweg op Beerse',
  housenr: '123',
  country: 'Belgie',
});

export const sofyRequestProductFactory = Factory.Sync.makeFactory<SofyRequestProduct>({
  correlationid: '1',
  omapiid: '568',
  options: [],
  streamingservices: [],
  optinproducts: [],
  installationaddress: sofyRequestAddressBuilder.build(),
});
