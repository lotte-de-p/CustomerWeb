import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'tg-sales-customer-registration-address-toggle',
  templateUrl: './address-toggle.component.html',
  imports: [TranslateModule],
  standalone: true,
})
export class AddressToggleComponent {
  @Output() isChecked: EventEmitter<{ checked: boolean; type: string }> = new EventEmitter();
  @Input() addressType = '';
  @Input() showBillingAddressToggle = false;
  @Input() showInstallationAddressToggle = false;

  onAddressToggle(event: Event, addressType: string): void {
    const inputElement = event.target as HTMLInputElement;
    this.isChecked.emit({ checked: inputElement.checked, type: addressType });
  }
}
