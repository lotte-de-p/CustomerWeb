import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { AddressListComponent } from '@sales/address/ui';
import { EventFacade } from '@sales/events/data-access';
import { ViewModel } from './interfaces/view-model.interface';
import { InstallationAddressFacade } from '@sales/address/data-access';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { StepComponent } from '@sales/shared/data-access';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'tg-sales-feat-installation-address',
  standalone: true,
  imports: [CommonModule, TranslateModule, AddressListComponent, InlineSVGModule],
  templateUrl: './feat-installation-address.component.html',
})
export class FeatInstallationAddressComponent implements StepComponent {
  viewModel: ViewModel | undefined;

  constructor(
    private readonly installationAddressFacade: InstallationAddressFacade,
    private readonly eventFacade: EventFacade
  ) {
    this.viewModel = {
      addresses: this.installationAddressFacade.addresses$,
      editableAddress: this.installationAddressFacade.editableAddress$,
    };
  }

  onAddressSelected() {
    this.eventFacade.triggerAnalyticsClickEvent({ name: 'existing address selected' });
  }

  openAddressForm(asOverlay: boolean) {
    console.log('add/editing address with overlay ', asOverlay);
  }

  onNextStep(): Observable<boolean> {
    return of(false);
  }
}
