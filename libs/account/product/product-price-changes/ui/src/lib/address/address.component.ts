import { Component, Input } from '@angular/core';
import { Address } from '@product/product-price-changes/data-access';
import { NgIf } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'product-price-changes-address',
  standalone: true,
  templateUrl: './address.component.html',
  imports: [NgIf, TranslateModule],
})
export class AddressComponent {
  @Input() address!: Address;
}
