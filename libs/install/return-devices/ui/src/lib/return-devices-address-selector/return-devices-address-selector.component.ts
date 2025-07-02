import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { AddressSelectorModel } from '@return-devices/data-access';
import { ReturnDevicesAddressSelectorPipe } from './return-devices-address-selector.pipe';
import { SlideMenuComponent } from '../slide-menu/slide-menu.component';

@Component({
  selector: 'tg-return-devices-address-selector',
  standalone: true,
  imports: [CommonModule, TranslateModule, NgIf, NgFor, ReturnDevicesAddressSelectorPipe, SlideMenuComponent],
  templateUrl: './return-devices-address-selector.component.html',
  styleUrl: './return-devices-address-selector.component.scss',
})
export class ReturnDevicesAddressSelectorComponent {
  @Input() returnDevicesAddressLines: AddressSelectorModel[];
  @Input() selectedAddressLine: AddressSelectorModel | null;
  @Input() isBaseCustomer: boolean;
  @Input() showMenu = false;
  @Output() addressLineSelected = new EventEmitter<AddressSelectorModel>();
  @Output() closeMenu = new EventEmitter<void>();

  selectAddressLine(addressLine: AddressSelectorModel) {
    this.selectedAddressLine = addressLine;
    this.addressLineSelected.emit(addressLine);
    this.close();
  }

  close(): void {
    this.showMenu = false;
    this.closeMenu.emit();
  }
}
