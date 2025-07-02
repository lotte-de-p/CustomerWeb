import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { EventFacade } from '@sales/events/data-access';
import { StepComponent } from '@sales/shared/data-access';
import { Observable, of } from 'rxjs';
import { stepLoaded } from '../events/step-loaded.const';
import { InstallationTypeSelectionComponent } from '@sales/order-configurator/installation-type/feat-choose-installation-type';

@Component({
  selector: 'tg-sales-order-configurator-step-installation-type',
  standalone: true,
  imports: [TranslateModule, InstallationTypeSelectionComponent],
  templateUrl: './step-installation-type.component.html',
})
export class StepInstallationTypeComponent implements OnInit, StepComponent {
  constructor(private readonly eventFacade: EventFacade) {}

  ngOnInit() {
    this.eventFacade.triggerEvent(stepLoaded);
  }

  onNextStep(): Observable<boolean> {
    return of(true);
  }
}
