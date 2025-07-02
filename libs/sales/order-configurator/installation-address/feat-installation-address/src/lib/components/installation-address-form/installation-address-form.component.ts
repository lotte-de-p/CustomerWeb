import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AddressFormFieldComponent } from '@sales/address-form-field/feat-address-form-field';
import { AddressFieldValue } from '@sales/address-form-field/data-access';

@Component({
  selector: 'tg-sales-installation-address-form',
  standalone: true,
  imports: [TranslateModule, ReactiveFormsModule, AddressFormFieldComponent],
  templateUrl: './installation-address-form.component.html',
})
export class InstallationAddressFormComponent {
  @Input() isAddressFormVisible = false;

  @Output() submitForm: EventEmitter<AddressFieldValue> = new EventEmitter();
  @Output() closeForm: EventEmitter<void> = new EventEmitter();

  addressForm: FormGroup = this.formBuilder.group({});

  constructor(private readonly formBuilder: FormBuilder) {
    this.addressForm.addControl('address', new FormControl(''));
  }

  onSubmitForm(): void {
    if (this.addressForm.valid) {
      this.submitForm.emit(this.addressForm?.value.address);
    }
  }

  onCloseForm(): void {
    this.closeForm.emit();
  }
}
