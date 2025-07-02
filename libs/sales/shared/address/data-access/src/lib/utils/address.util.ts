import { LanguageEnum } from '@telenet/ng-lib-page';
import { AddressUnit } from '../interfaces/address-unit.interface';

export function createAddressUtil(addressUnit: AddressUnit, language: LanguageEnum = LanguageEnum.NL) {
  const _addressUnit = addressUnit;
  const _language = language;

  function getHouseNumber(): string {
    return _addressUnit.name;
  }

  function getPostalCode(): string | undefined {
    return _addressUnit.postalCode;
  }

  function getSubHouseNumber(): string | undefined {
    return _addressUnit.subHouseNumber;
  }

  function getBoxNumber(): string | undefined {
    return _addressUnit.boxNumber;
  }

  function getFloor(): string | undefined {
    return _addressUnit.floor;
  }

  function getStreet(): string {
    return getAddressUnitName('Street');
  }

  function getMunicipality(): string {
    return getAddressUnitName('Municipality');
  }

  function getCountry(): string {
    return getAddressUnitName('Country');
  }

  function getAddressUnitName(type: string): string {
    const addressItem = getAddressUnitOfType(type);
    return addressItem ? extractNameInLanguage(addressItem) : '';
  }

  function getAddressUnitOfType(type: string): AddressUnit | undefined {
    return _addressUnit.addressUnitChain?.find((addressUnit) => addressUnit.type === type);
  }

  function extractNameInLanguage(address: AddressUnit): string {
    switch (_language) {
      case LanguageEnum.FR:
        return address.nameFR || '';
      case LanguageEnum.EN:
        return address.name || '';
      case LanguageEnum.NL:
      default:
        return address.nameDU || '';
    }
  }

  return {
    getHouseNumber,
    getPostalCode,
    getSubHouseNumber,
    getBoxNumber,
    getFloor,
    getStreet,
    getMunicipality,
    getCountry,
    getId: () => _addressUnit.id,
  };
}
