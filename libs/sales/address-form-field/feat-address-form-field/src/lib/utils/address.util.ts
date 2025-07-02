import { map } from 'rxjs/operators';
import { AddressFormFieldFacade } from '@sales/address-form-field/data-access';
import { AddressUnit, Municipality } from '@sales/shared/address/data-access';

export class AddressUtil {
  static getFilteredMunicipalities(filterValue: string, addressFormFieldFacade: AddressFormFieldFacade) {
    return addressFormFieldFacade.availableMunicipalities$.pipe(
      map((response: Municipality[]) => {
        return response.filter((municipality) => {
          const municipalityString = `${municipality.postalCode.toLowerCase()} - ${municipality.location.toLowerCase()}`;
          return municipalityString.indexOf(filterValue.toLowerCase()) === 0;
        });
      })
    );
  }

  static getMunicipalityValue(postalCode: string, addressUnit?: AddressUnit): Municipality | null {
    const municipality = this.getAddressValueFromAddressChain('Municipality', addressUnit);
    if (municipality?.name) {
      return {
        location: municipality.name,
        postalCode: postalCode,
      };
    }
    throw new Error('AddressFormField could not retrieve municipality');
  }

  private static getAddressValueFromAddressChain(value: string, addressUnit?: AddressUnit): AddressUnit | null {
    const foundValue = addressUnit?.addressUnitChain?.find(
      (addressUnit) => addressUnit.type.toLowerCase() === value.toLowerCase()
    );
    return foundValue ? foundValue : null;
  }
}
