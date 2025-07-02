import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InstallationAddressInterface } from '@sales/address/data-access';
import { InstallationAddressComponent } from '../installation-address/installation-address.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'tg-sales-address-list',
  standalone: true,
  imports: [InstallationAddressComponent, TranslateModule, NgClass],
  templateUrl: './address-list.component.html',
})
export class AddressListComponent {
  @Input() addresses: InstallationAddressInterface[] = [];

  @Output() addressSelected = new EventEmitter<InstallationAddressInterface>();

  showAddress = true;

  onAddressSelected(address: InstallationAddressInterface): void {
    this.addressSelected.emit(address);
  }
}
