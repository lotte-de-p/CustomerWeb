import { Address } from './address.model';

describe('AddressModel', () => {
  describe('getDisplayAddress', () => {
    it('should get the full address', () => {
      const address = new Address();

      address.addressType = 'Legal Address';
      address.addressId = '9876568899876';
      address.streetId = '21321';
      address.tinaLocationId = '2';
      address.country = 'Belgium';
      address.type = 'type';
      address.houseNumber = '10';
      address.boxNumber = '06';
      address.subHouseNumber = 'B';
      address.street = 'olivetenvest';
      address.postalCode = '2800';
      address.municipality = 'Mechelen';
      address.countryCode = '32';
      address.floorNumber = '10';

      const displayAddress = address.getDisplayAddress(false, false);

      expect(displayAddress.addressId).toBe('9876568899876');
      expect(displayAddress.country).toBe('Belgium');
      expect(displayAddress.address).toBe('olivetenvest 10/B/06');
      expect(displayAddress.houseNrSubHouseNr).toBe('10/B');
      expect(displayAddress.zipMunicipality).toBe('2800 Mechelen');
    });

    it('should get the full address on a single line', () => {
      const address = new Address();

      address.addressType = 'Installation Address';
      address.addressId = '987656889976';
      address.streetId = '2132';
      address.tinaLocationId = '2';
      address.country = 'Belgium';
      address.houseNumber = '10';
      address.boxNumber = '06';
      address.subHouseNumber = 'B';
      address.street = 'tiensesteenweg';
      address.postalCode = '3000';
      address.municipality = 'Leuven';
      address.countryCode = '32';
      address.floorNumber = '10';

      const displayAddress = address.getDisplayAddress(true, true);

      expect(displayAddress.address).toBe('tiensesteenweg 10/B/06, 3000 Leuven');
    });
  });
});
