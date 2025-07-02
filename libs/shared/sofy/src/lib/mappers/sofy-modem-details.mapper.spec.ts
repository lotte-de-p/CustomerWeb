import { SofyModemDetailsMapper } from './sofy-modem-details.mapper';
import { CafeModemDetailsModel } from '../models/cafe-modem-details.model';

describe('SofyModemDetailsMapper', (): void => {
  const sofyModemDetailsMapper = new SofyModemDetailsMapper();

  describe('mapSofyModemDetails', (): void => {
    it('should map the modemDetails', (): void => {
      const sofyModemDetails = sofyModemDetailsMapper.mapSofyModemDetails({
        modemDetails: [
          {
            macAddress: '45dd54w5c6',
            modemType: 'new',
            hardwareType: 'old',
            cableRouterName: 'someName',
            internetLineIdentifier: 'ew1354',
            installationAddress: {
              houseNumber: '12',
              streetId: '11',
              street: 'telenetStraat',
              addressId: 'someId',
              country: 'BE',
              municipality: 'Mechelen',
              postalCode: '2800',
            },
          },
        ],
      } as CafeModemDetailsModel);
      const { installationaddress, ...modemDetail } = sofyModemDetails[0];
      expect(modemDetail).toEqual({
        macaddress: '45dd54w5c6',
        cableroutername: 'someName',
        hardware: 'old',
        internetlineidentifier: 'ew1354',
        modemtype: 'new',
      });

      expect({ ...installationaddress }).toEqual({
        housenr: '12',
        street: 'telenetStraat',
        postalcode: '2800',
        municipality: 'Mechelen',
        addressid: 'someId',
        country: 'BE',
      });
    });
  });
});
