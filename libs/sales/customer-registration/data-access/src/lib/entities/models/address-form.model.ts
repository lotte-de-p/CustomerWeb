import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddressFields } from './address.enum';
import { AddressRequestInterface } from '../interfaces/address-request.interface';
import { Municipality } from '../interfaces/municipality.interface';
import { Input } from '@angular/core';

export class AddressForm extends FormGroup {
  constructor(input: Input) {
    super(input);
  }

  static build(): AddressForm {
    const addressForm = new AddressForm({});

    addressForm.addControl(AddressFields.ZIP_CODE, new FormControl('', [Validators.required]));
    addressForm.addControl(
      AddressFields.STREET,
      new FormControl(
        {
          value: '',
          disabled: true,
        },
        [Validators.required]
      )
    );
    addressForm.addControl(
      AddressFields.HOUSE_NUMBER,
      new FormControl({ value: '', disabled: true }, [Validators.required, Validators.pattern('[A-Za-z0-9]{0,6}')])
    );
    addressForm.addControl(
      AddressFields.SUB_HOUSE,
      new FormControl({ value: '', disabled: true }, [Validators.pattern('[A-Za-z0-9]{0,6}')])
    );
    addressForm.addControl(
      AddressFields.BOX_NUMBER,
      new FormControl(
        {
          value: '',
          disabled: true,
        },
        [Validators.pattern('[[A-Za-z0-9]+(/?)+([A-Za-z0-9]{0,4})]{0,6}')]
      )
    );

    return addressForm;
  }

  get zipCode(): Municipality {
    return this.get(AddressFields.ZIP_CODE)?.value || ({} as Municipality);
  }

  set zipCode(value: Municipality) {
    this.get(AddressFields.ZIP_CODE)?.setValue(value);
  }

  get street(): string {
    return this.get(AddressFields.STREET)?.value || '';
  }

  set street(value: string) {
    this.get(AddressFields.STREET)?.setValue(value);
  }

  get houseNumber(): string {
    return this.get(AddressFields.HOUSE_NUMBER)?.value || '';
  }

  set houseNumber(value: string) {
    this.get(AddressFields.HOUSE_NUMBER)?.setValue(value);
  }

  get subHouseNumber(): string {
    return this.get(AddressFields.SUB_HOUSE)?.value || '';
  }

  set subHouseNumber(value: string) {
    this.get(AddressFields.SUB_HOUSE)?.setValue(value);
  }

  get boxNumber(): string {
    return this.get(AddressFields.BOX_NUMBER)?.value || '';
  }

  set boxNumber(value: string) {
    this.get(AddressFields.BOX_NUMBER)?.setValue(value);
  }

  public markAsInvalid(fieldName: AddressFields): void {
    const field = this.get(fieldName);
    if (null !== field) {
      const existingErrors = field.errors || {};
      if (field.value) {
        existingErrors['invalid'] = true;
      }
      field.setErrors(existingErrors);
    }
  }

  public resetFromField(start: AddressFields, enableField: boolean): void {
    const formFields: string[] = Object.values(AddressFields);
    const fieldIndex = formFields.indexOf(start);
    this.resetAndDisableSubsequentFields(formFields, fieldIndex);
    if (enableField) {
      this.get(start)?.enable({ onlySelf: false, emitEvent: false });
    }
  }

  private resetAndDisableSubsequentFields(formFields: string[], fieldIndex: number) {
    formFields.slice(fieldIndex, formFields.length).forEach((field: string) => {
      this.get(field)?.reset('', { onlySelf: false, emitEvent: false });
      this.get(field)?.disable({ onlySelf: false, emitEvent: false });
    });
  }

  public createSearchAddressRequest(): AddressRequestInterface {
    const addressRequest = {} as AddressRequestInterface;
    addressRequest.municipality = this.zipCode.location + '';
    addressRequest.postalCode = this.zipCode.postalCode + '';
    addressRequest.street = this.street.replace('[', '(').replace(']', ')');
    addressRequest.houseNumber = this.houseNumber;
    addressRequest.customHeaders = { range: '300' };
    return addressRequest;
  }

  public createInternalSearchAddressRequest(): AddressRequestInterface {
    const addressData = {} as AddressRequestInterface;
    addressData.houseNumber = this.houseNumber;
    addressData.subHouseNumber = this.subHouseNumber ? this.subHouseNumber : undefined;
    addressData.boxNumber = this.boxNumber ? this.boxNumber : undefined;

    return addressData;
  }
}
