import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Address } from '@entertainment/dtv-box-management/data-access';
import { AddressPipe } from './pipe/address.pipe';
import { DtvBoxSlideMenuComponent } from '../dtv-box-slide-menu/dtv-box-slide-menu.component';

@Component({
  selector: 'tg-entertainment-dtv-box-subscription-selector',
  standalone: true,
  imports: [CommonModule, TranslateModule, NgIf, NgFor, AddressPipe, DtvBoxSlideMenuComponent],
  templateUrl: './dtv-box-subscription-selector.component.html',
  styleUrl: './dtv-box-subscription-selector.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DtvBoxSubscriptionSelectorComponent {
  @Input() addresses?: Address[];
  @Input() selectedAddress: Address | undefined;
  @Input() isBaseCustomer: boolean | undefined;
  @Output() addressLineSelected = new EventEmitter<Address>();
  showMenu = false;

  selectAddressLine(addressLine: Address) {
    this.selectedAddress = addressLine;
    this.addressLineSelected.emit(addressLine);
    this.close();
  }

  openAddressSelection() {
    this.showMenu = true;
  }

  close(): void {
    this.showMenu = false;
  }
}
