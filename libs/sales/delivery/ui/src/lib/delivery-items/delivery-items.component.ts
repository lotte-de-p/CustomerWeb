import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryItem } from '@sales/delivery/data-access';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'tg-sales-delivery-items',
  templateUrl: './delivery-items.component.html',
})
export class DeliveryItemsComponent {
  @Input() deliveryItems: DeliveryItem[] | null | undefined;
}
