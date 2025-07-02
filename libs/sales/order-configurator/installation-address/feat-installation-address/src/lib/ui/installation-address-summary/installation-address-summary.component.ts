import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { InstallationAddress } from '@sales/order-configurator/domain-installation-address';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectedAddress } from '../../+state/address.selectors';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'tg-sales-ui-installation-address-summary',
  standalone: true,
  imports: [TranslateModule, AsyncPipe, NgIf],
  templateUrl: './installation-address-summary.component.html',
})
export class InstallationAddressSummaryComponent {
  address$: Observable<InstallationAddress | undefined> = this.store.select(selectedAddress);

  constructor(private readonly store: Store) {}
}
