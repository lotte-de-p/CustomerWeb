import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { InstallationAddress } from '@sales/order-configurator/domain-installation-address';

@Component({
  selector: 'tg-sales-installation-address',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './installation-address.component.html',
})
export class InstallationAddressComponent {
  @Input() address: InstallationAddress | undefined;
  @Input() selectedAddress: InstallationAddress | undefined | null;
  @Input() isNewInstallationAddress: boolean | undefined;

  @Input() index = 0;

  @Output() addressSelected = new EventEmitter<InstallationAddress>();

  onSelect() {
    this.addressSelected.emit(this.address);
  }
}
