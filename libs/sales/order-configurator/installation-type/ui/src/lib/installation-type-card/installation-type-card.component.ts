import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { DeliveryMethod, InstallationType } from '@sales/order-configurator/installation-type/domain';
import { TranslateModule } from '@ngx-translate/core';
import { NgClass } from '@angular/common';
import { LabelKeyPipe } from '../pipes/label-key.pipe';
import { DeliveryMethodCardComponent } from '../delivery-method-card/delivery-method-card.component';

@Component({
  selector: 'tg-sales-order-configurator-installation-type-ui-installation-type-card',
  standalone: true,
  imports: [TranslateModule, NgClass, LabelKeyPipe, DeliveryMethodCardComponent],
  templateUrl: './installation-type-card.component.html',
})
@UntilDestroy()
export class InstallationTypeCardComponent {
  @Input() installationType: InstallationType;
  @Input() selectedDeliveryMethod: DeliveryMethod | undefined | null;

  @Output() deliveryMethodSelected = new EventEmitter<DeliveryMethod>();

  onDeliveryMethodSelectedEvent(deliveryMethod: DeliveryMethod) {
    this.deliveryMethodSelected.next(deliveryMethod);
  }
}
