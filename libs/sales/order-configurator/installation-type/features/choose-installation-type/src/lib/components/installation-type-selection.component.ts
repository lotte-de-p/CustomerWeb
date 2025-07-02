import { Component } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ViewModel } from './view-model.interface';
import { Store } from '@ngrx/store';
import {
  installationTypes,
  selectedDeliveryMethod,
  setDeliveryMethod,
} from '@sales/order-configurator/installation-type/state';
import { AsyncPipe, NgClass } from '@angular/common';
import { InstallationTypeCardComponent } from '@sales/order-configurator/installation-type/ui';
import { tap } from 'rxjs';
import {
  createDeliveryMethod,
  DeliveryMethod,
  rawInstallationTypeOptionPickupTestFactory,
} from '@sales/order-configurator/installation-type/domain';

@Component({
  selector: 'tg-sales-order-configurator-installation-type-feat-installation-type-selection',
  standalone: true,
  imports: [AsyncPipe, InstallationTypeCardComponent, NgClass],
  templateUrl: './installation-type-selection.component.html',
})
@UntilDestroy()
export class InstallationTypeSelectionComponent {
  viewModel: ViewModel | undefined;

  constructor(private readonly store: Store) {
    this.viewModel = {
      installationTypes: this.store.select(installationTypes),
      selectedInstallationTypeOption: this.store.select(selectedDeliveryMethod),
    };
    this.store
      .select(selectedDeliveryMethod)
      .pipe(
        untilDestroyed(this),
        tap((selectedDeliveryMethod) => {
          if (selectedDeliveryMethod === undefined) {
            this.store.dispatch(
              setDeliveryMethod({
                deliveryMethod: createDeliveryMethod(rawInstallationTypeOptionPickupTestFactory.build()),
              })
            );
          }
        })
      )
      .subscribe();
  }

  onDeliveryMethodSelectedEvent(deliveryMethod: DeliveryMethod) {
    this.store.dispatch(setDeliveryMethod({ deliveryMethod: deliveryMethod }));
  }
}
