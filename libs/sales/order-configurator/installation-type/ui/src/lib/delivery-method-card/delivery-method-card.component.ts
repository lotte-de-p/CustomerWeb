import { Component, Input, OnInit } from '@angular/core';
import {
  DeliveryMethod,
  DeliveryMethodTypeEnum,
  InstallationTypeEnum,
} from '@sales/order-configurator/installation-type/domain';
import { NgClass } from '@angular/common';
import { ImagePathPipe } from '../pipes/image-path.pipe';
import { LabelKeyPipe } from '../pipes/label-key.pipe';
import { TranslateModule } from '@ngx-translate/core';
import { DeliveryMethodPriceComponent } from '../delivery-method-price/delivery-method-price.component';

@Component({
  selector: 'tg-sales-order-configurator-installation-type-ui-delivery-method-card',
  standalone: true,
  imports: [NgClass, ImagePathPipe, LabelKeyPipe, TranslateModule, DeliveryMethodPriceComponent],
  templateUrl: './delivery-method-card.component.html',
})
export class DeliveryMethodCardComponent implements OnInit {
  @Input() deliveryMethod: DeliveryMethod;
  @Input() installationType: InstallationTypeEnum;
  @Input() isSelected: boolean;

  deliveryMethodTypeEnum = DeliveryMethodTypeEnum;
  brand = 'TELENET';
  descriptionCount: Array<unknown>;

  ngOnInit() {
    switch (this.deliveryMethod.type) {
      case DeliveryMethodTypeEnum.PICKUP_DELIVERY:
        this.descriptionCount = Array(2);
        break;
      case DeliveryMethodTypeEnum.SELF_INSTALL_AT_HOME:
      case DeliveryMethodTypeEnum.INSTALLATION_TYPE_MODEM_COMPATIBILITY:
        this.descriptionCount = Array(1);
        break;
      case DeliveryMethodTypeEnum.COMFORT:
      case DeliveryMethodTypeEnum.HOME:
      case DeliveryMethodTypeEnum.BUSINESS:
      default:
        this.descriptionCount = Array(3);
    }
  }
}
