import { LoginDetailsMapper } from '../mappers';
import { OcapiCallConfig } from './ocapi-call.model';

describe('OcapiCallConfig', () => {
  describe('getEndpoint', () => {
    const messageGroupName = 'someMessageGroup';
    it('should retrieve the default endpoint given useAdaptor false and an ocapi public endpoint', () => {
      const ocapiCallConfig = new OcapiCallConfig(
        messageGroupName,
        'ocapi/public/?p=customerproductholding',
        new LoginDetailsMapper(),
        undefined,
        undefined,
        undefined,
        undefined,
        false
      );

      expect(ocapiCallConfig.getEndpoint()).toEqual('ocapi/public/?p=customerproductholding');
    });
    it('should retrieve the default endpoint given only an ocapi public endpoint', () => {
      const ocapiCallConfig = new OcapiCallConfig(
        messageGroupName,
        'ocapi/public/?p=accounts',
        new LoginDetailsMapper()
      );

      expect(ocapiCallConfig.getEndpoint()).toEqual('ocapi/public/?p=accounts');
    });
    it('should retrieve the adaptor endpoint given useAdaptor true and an ocapi public endpoint', () => {
      const ocapiCallConfig = new OcapiCallConfig(
        messageGroupName,
        'ocapi/public/?p=mobilesubscriptiondetails',
        new LoginDetailsMapper(),
        undefined,
        undefined,
        undefined,
        undefined,
        true
      );

      expect(ocapiCallConfig.getEndpoint()).toEqual('ocapi-adaptor/public/?p=mobilesubscriptiondetails');
    });
    it('should retrieve the default endpoint given useAdaptor false and a random endpoint', () => {
      const ocapiCallConfig = new OcapiCallConfig(
        messageGroupName,
        'omapi/public/?p=profiledetails',
        new LoginDetailsMapper(),
        undefined,
        undefined,
        undefined,
        undefined,
        false
      );

      expect(ocapiCallConfig.getEndpoint()).toEqual('omapi/public/?p=profiledetails');
    });
  });
});
