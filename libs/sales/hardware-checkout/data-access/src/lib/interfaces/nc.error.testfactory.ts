import { makeFactory } from 'factory.ts';
import { NcError } from './nc.error';

export const ncErrorTestfactory = makeFactory<NcError>({
  errorCode: 'OE-0100',
  errorMessage: 'Product not active',
  errorType: 'Error',
});
