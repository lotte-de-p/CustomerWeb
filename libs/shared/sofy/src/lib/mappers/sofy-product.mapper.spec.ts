import { SofyProductMapper } from './sofy-product.mapper';
import { OmapiProduct } from '@telenet/ng-lib-omapi';

describe('SofyProductMapper', (): void => {
  const sofyProductMapper = new SofyProductMapper();
  describe('mapSelectedProductToSofyProduct', (): void => {
    it('should map correctly', (): void => {
      const actualProduct = sofyProductMapper.mapSelectedProductToSofyProduct(
        {
          productId: '123',
        } as OmapiProduct,
        {
          addressId: '222',
          municipality: 'Mechelen',
          postalCode: '2800',
          street: 'telenetStraat',
          houseNumber: '1',
          type: 'address',
          boxNumber: 'B',
          subHouseNumber: '',
          streetId: '',
        },
        'self-install'
      );
      const { installationaddress, ...productWithoutAddress } = actualProduct[0];
      expect({ ...installationaddress }).toEqual({
        addressid: '222',
        municipality: 'Mechelen',
        postalcode: '2800',
        street: 'telenetStraat',
        housenr: '1',
      });
      expect(productWithoutAddress).toEqual({
        omapiid: '123',
        options: [],
        needscableinstallation: true,
        installtype: 'self-install',
        isnewline: false,
        move: false,
      });
    });
  });
});
