import { createAddressUtil } from './address.util';
import { LanguageEnum } from '@telenet/ng-lib-page';
import { AddressUnit } from '../interfaces/address-unit.interface';
import { addressUnitTestfactory } from '../interfaces/address-unit.testfactory';

describe('createAddressUtil', () => {
  let addressUnit: AddressUnit;
  let addressUtil: ReturnType<typeof createAddressUtil>;

  beforeEach(() => {
    addressUnit = addressUnitTestfactory.build({ subHouseNumber: 'a', boxNumber: '101', floor: '1' });

    addressUtil = createAddressUtil(addressUnit);
  });

  it('should get house number', () => {
    expect(addressUtil.getHouseNumber()).toEqual('17767');
  });

  it('should get postal code', () => {
    expect(addressUtil.getPostalCode()).toEqual('3000');
  });

  it('should get sub house number', () => {
    expect(addressUtil.getSubHouseNumber()).toEqual('a');
  });

  it('should get box number', () => {
    expect(addressUtil.getBoxNumber()).toEqual('101');
  });

  it('should get floor', () => {
    expect(addressUtil.getFloor()).toEqual('1');
  });

  it('should get street name in Dutch', () => {
    expect(addressUtil.getStreet()).toEqual('Darwin Loadteststraat');
  });

  it('should get municipality name in Dutch', () => {
    expect(addressUtil.getMunicipality()).toEqual('Leuven');
  });

  it('should get country name in Dutch', () => {
    expect(addressUtil.getCountry()).toEqual('België');
  });

  it('should get id', () => {
    expect(addressUtil.getId()).toEqual('9165656989113844238');
  });

  describe('when language is French', () => {
    beforeEach(() => {
      addressUtil = createAddressUtil(addressUnit, LanguageEnum.FR);
    });

    it('should get street name in French', () => {
      expect(addressUtil.getStreet()).toEqual('Darwin Loadteststraat FR');
    });

    it('should get municipality name in French', () => {
      expect(addressUtil.getMunicipality()).toEqual('Louvain');
    });

    it('should get country name in French', () => {
      expect(addressUtil.getCountry()).toEqual('Belgique');
    });
  });

  describe('when language is English', () => {
    beforeEach(() => {
      addressUtil = createAddressUtil(addressUnit, LanguageEnum.EN);
    });

    it('should get street name in English', () => {
      expect(addressUtil.getStreet()).toEqual('Darwin Loadteststraat');
    });

    it('should get municipality name in English', () => {
      expect(addressUtil.getMunicipality()).toEqual('Leuven');
    });

    it('should get country name in English', () => {
      expect(addressUtil.getCountry()).toEqual('België');
    });
  });
});
