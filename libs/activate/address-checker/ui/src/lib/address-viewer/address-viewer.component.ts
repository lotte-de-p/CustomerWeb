import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { AddressInterface } from '@address-checker/data-access';

@Component({
  selector: 'tg-address-viewer',
  templateUrl: 'address-viewer.component.html',
  standalone: true,
  imports: [CommonModule, TranslateModule],
})
export class AddressViewerComponent {
  @Input() address: AddressInterface;
  @Input() messageGroupName: string;
  @Output() edit = new EventEmitter<string>();

  editAddress() {
    this.edit.emit(this.address.addressGeoId);
  }
}
