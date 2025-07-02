import { SofyCustomerProductHoldingProductMapper } from './sofy-customer-product-holding-product.mapper';
import {
  CafeRawCustomerproductholdingModel,
  CafeRawCustomerproductholdingRawomapiModel,
} from '../models/cafe-raw-customerproductholding.model';
import { sofyAddressFactory } from '../models/sofy-customer-product-holding-product.testfactory';

describe('SofyCustomerProductHoldingProductMapper', (): void => {
  const customerProductHoldingProductMapper = new SofyCustomerProductHoldingProductMapper();

  describe('mapToSofyCustomerProductHoldingProduct', (): void => {
    it('should map the customer product holding', (): void => {
      const sofyAddress = sofyAddressFactory.build();
      const sofyCustomerProductHoldingProduct =
        customerProductHoldingProductMapper.mapToSofyCustomerProductHoldingProduct([
          {
            identifier: 'someIdentifier',
            customerproductid: '123',
            accountnumber: '5464',
            label: 'sup',
            products: [],
            options: [],
            address: sofyAddress,
            rateclassid: 'someRateClass',
            rateclassdescription: 'someRateClass',
            isProductTypeBundle: () => false,
            specurl: 'http_url',
            rawOmapi: { product: {} as CafeRawCustomerproductholdingRawomapiModel },
          } as CafeRawCustomerproductholdingModel,
        ]);
      const { address, ...customerProductHolding } = sofyCustomerProductHoldingProduct[0];
      expect(customerProductHolding).toEqual({
        identifier: 'someIdentifier',
        specurl: 'http_url',
        products: [],
        options: [],
      });
      expect(address).toEqual(sofyAddress);
    });
  });
});
