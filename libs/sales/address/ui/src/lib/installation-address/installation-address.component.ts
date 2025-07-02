import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InstallationAddressInterface } from '@sales/address/data-access';
import { TranslateModule } from '@ngx-translate/core';
import { StepComponent } from '@sales/shared/data-access';
import { Observable, of } from 'rxjs';
import { EventFacade } from '@sales/events/data-access';
import { installationAddressStepFinished } from '../events/installation-address-step-finished.const';

@Component({
  selector: 'tg-sales-installation-address',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './installation-address.component.html',
})
export class InstallationAddressComponent implements StepComponent {
  @Input() address: InstallationAddressInterface | undefined;

  @Input() index = 0;

  @Output() addressSelected = new EventEmitter<InstallationAddressInterface>();

  constructor(private readonly eventFacade: EventFacade) {}

  onSelect() {
    this.addressSelected.emit(this.address);
  }

  onNextStep(): Observable<boolean> {
    this.eventFacade.triggerEvent(installationAddressStepFinished);
    return of(false);
  }
}
