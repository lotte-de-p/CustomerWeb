import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AddressFormFieldComponent } from '@sales/address-form-field/feat-address-form-field';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AddressFieldValue } from '@sales/address-form-field/data-access';

@Component({
  selector: 'tg-sales-installation-address-overlay-form',
  standalone: true,
  imports: [TranslateModule, AddressFormFieldComponent, ReactiveFormsModule],
  templateUrl: './installation-address-overlay-form.component.html',
})
export class InstallationAddressOverlayFormComponent {
  @Input() isAddressFormVisible = false;

  @Output() closeForm: EventEmitter<void> = new EventEmitter();
  @Output() submitForm: EventEmitter<AddressFieldValue> = new EventEmitter();

  addressForm: FormGroup = this.formBuilder.group({});

  constructor(private readonly formBuilder: FormBuilder) {
    this.addressForm.addControl('address', new FormControl(''));
  }

  onCloseForm(): void {
    this.closeForm.emit();
  }

  onSubmitForm(): void {
    if (this.addressForm.valid) {
      this.submitForm.emit(this.addressForm?.value.address);
    }
  }
}
