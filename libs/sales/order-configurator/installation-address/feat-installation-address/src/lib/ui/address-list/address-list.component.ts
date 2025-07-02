import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InstallationAddressComponent } from '../installation-address/installation-address.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgClass } from '@angular/common';
import { InstallationAddress } from '@sales/order-configurator/domain-installation-address';

@Component({
  selector: 'tg-sales-address-list',
  standalone: true,
  imports: [InstallationAddressComponent, TranslateModule, NgClass],
  templateUrl: './address-list.component.html',
})
export class AddressListComponent {
  @Input() addresses: InstallationAddress[] = [];
  @Input() isNewInstallationAddress: boolean | undefined;
  @Input() selectedAddress: InstallationAddress | undefined | null;

  @Output() addressSelected = new EventEmitter<InstallationAddress>();

  showAddress = true;

  onAddressSelected(address: InstallationAddress): void {
    this.addressSelected.emit(address);
  }
}
