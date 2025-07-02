import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { EventFacade } from '@sales/events/data-access';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { StepComponent } from '@sales/shared/data-access';
import { Observable, of } from 'rxjs';
import { AsyncPipe, NgClass, NgTemplateOutlet } from '@angular/common';
import { installationAddressStepLoaded } from '../events/installation-address-step-loaded.const';
import { FeatInstallationAddressComponent } from '@sales/order-configurator/feat-installation-address';
import { stepImagePath } from '../config/config';

@Component({
  selector: 'tg-sales-order-configurator-step-installation-address',
  standalone: true,
  imports: [TranslateModule, InlineSVGModule, AsyncPipe, NgClass, NgTemplateOutlet, FeatInstallationAddressComponent],
  templateUrl: './step-installation-address.component.html',
})
export class StepInstallationAddressComponent implements OnInit, StepComponent {
  constructor(private readonly eventFacade: EventFacade) {}

  ngOnInit() {
    this.eventFacade.triggerEvent(installationAddressStepLoaded);
  }

  onAddressSelected() {
    this.eventFacade.triggerAnalyticsClickEvent({ name: 'existing address selected' });
  }

  openAddressForm(asOverlay: boolean) {
    console.log('add/editing address with overlay ', asOverlay);
  }

  onNextStep(): Observable<boolean> {
    return of(true);
  }

  protected readonly stepImagePath = stepImagePath;
}
