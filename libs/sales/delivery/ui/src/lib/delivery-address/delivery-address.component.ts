import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryAddress } from '@sales/delivery/data-access';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'tg-sales-delivery-delivery-address',
  templateUrl: './delivery-address.component.html',
})
export class DeliveryAddressComponent {
  @Input() deliveryAddress: DeliveryAddress | null | undefined;
}
