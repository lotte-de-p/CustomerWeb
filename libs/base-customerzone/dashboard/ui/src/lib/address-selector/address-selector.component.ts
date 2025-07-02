import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideMenuComponent } from '../slide-menu/slide-menu.component';
import { TranslateModule } from '@ngx-translate/core';
import {
  InternetLine,
  MyBaseDashboardDatalayer,
  MyBaseDashboardDatalayerAttributeName,
  MyBaseDashboardDatalayerEventName,
  MyBaseDashboardDatalayerEventType,
  Address,
} from '@mybase-dashboard/data-access';

@Component({
  selector: 'tg-address-selector',
  standalone: true,
  imports: [CommonModule, SlideMenuComponent, TranslateModule],
  templateUrl: './address-selector.component.html',
  styleUrl: './address-selector.component.scss',
})
export class AddressSelectorComponent {
  @Output() selectInternetAddress = new EventEmitter<InternetLine>();
  @Output() analyticsData = new EventEmitter<MyBaseDashboardDatalayer>();

  @Input() set data(internetLines: InternetLine[]) {
    if (internetLines.length !== 0) {
      this.internetLines = internetLines.map((line) => ({
        ...line,
        completeAddress: this.getCompleteAddress(line.address),
      }));
      this.selectedInternetAddress = this.internetLines.find((line) => line.default) || this.internetLines[0];

      const storedProductIdentifier = window.sessionStorage.getItem(AddressSelectorComponent.SESSION_STORAGE_KEY);
      if (storedProductIdentifier) {
        const matchingLine = this.internetLines.find((line) => line.productIdentifier === storedProductIdentifier);
        if (matchingLine) {
          this.selectedInternetAddress = matchingLine;
        }
      } else {
        window.sessionStorage.setItem(
          AddressSelectorComponent.SESSION_STORAGE_KEY,
          this.selectedInternetAddress.productIdentifier
        );
        window.sessionStorage.setItem(
          AddressSelectorComponent.ADDRESS_SESSION_STORAGE_KEY,
          this.selectedInternetAddress.address.id
        );
      }

      this.selectInternetAddress.emit(this.selectedInternetAddress);
    }
  }

  selectedInternetAddress: InternetLine | undefined;
  internetLines: InternetLine[] = [];
  showMenu = false;
  static readonly SESSION_STORAGE_KEY = 'internet-line-selector';
  static readonly ADDRESS_SESSION_STORAGE_KEY = 'address-line-selector';

  selectLine(line: InternetLine) {
    if (line.productIdentifier !== this.selectedInternetAddress?.productIdentifier) {
      this.sendAnalyticsEvent();
      this.selectedInternetAddress = line;
      this.selectInternetAddress.emit(line);
      this.slideMenu(false);
      window.sessionStorage.setItem(AddressSelectorComponent.SESSION_STORAGE_KEY, line.productIdentifier);
      window.sessionStorage.setItem(AddressSelectorComponent.ADDRESS_SESSION_STORAGE_KEY, line.address.id);
    }
  }

  slideMenu(open: boolean, event?: Event) {
    event?.stopPropagation();
    this.showMenu = open;
    if (open) {
      document.body?.classList.add('position--fixed');
    } else {
      document.body?.classList.remove('position--fixed');
    }
  }
  sendAnalyticsEvent(): void {
    const analyticsEvent: MyBaseDashboardDatalayer = {
      eventName: MyBaseDashboardDatalayerEventName.BUTTON_CLICKED,
      eventType: MyBaseDashboardDatalayerEventType.CLICK,
      attributeName: MyBaseDashboardDatalayerAttributeName.CHANGE_ADDRESS,
    };
    this.analyticsData.emit(analyticsEvent);
  }

  getCompleteAddress(address: Address): string {
    if (!address.street || !address.houseNumber) {
      return '';
    }

    let completeAddress = address.street.concat(' ').concat(address.houseNumber);

    if (address.subHouseNumber) {
      completeAddress = completeAddress.concat(' ', address.subHouseNumber);
    }
    if (address.boxNumber) {
      completeAddress = completeAddress.concat('/', address.boxNumber);
    }
    if (address.postalCode) {
      completeAddress = completeAddress.concat(', ', address.postalCode);
    }
    if (address.municipality) {
      completeAddress = completeAddress.concat(' ', address.municipality);
    }
    return completeAddress;
  }
}
