import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  MobileLine,
  MyBaseDashboardDatalayer,
  MyBaseDashboardDatalayerAttributeName,
  MyBaseDashboardDatalayerEventName,
  MyBaseDashboardDatalayerEventType,
} from '@mybase-dashboard/data-access';
import { SlideMenuComponent } from '../slide-menu/slide-menu.component';
import { TranslateModule } from '@ngx-translate/core';
import { PhoneNumberPipe } from '../phone-number/phone-number.pipe';

@Component({
  selector: 'tg-line-selector',
  standalone: true,
  imports: [CommonModule, SlideMenuComponent, TranslateModule, PhoneNumberPipe],
  templateUrl: './line-selector.component.html',
  styleUrl: './line-selector.component.scss',
})
export class LineSelectorComponent {
  @Output() selectMsisdn = new EventEmitter<MobileLine>();
  @Output() analyticsData = new EventEmitter<MyBaseDashboardDatalayer>();

  @Input() set data(mobileLines: MobileLine[]) {
    if (mobileLines.length !== 0) {
      this.mobileLines = mobileLines;
      this.selectedMsisdn = mobileLines.find((line) => line.default) || mobileLines[0];

      const storedMsisdn = window.sessionStorage.getItem(LineSelectorComponent.SESSION_STORAGE_KEY);
      if (storedMsisdn) {
        const matchingLine = mobileLines.find((line) => line.msisdn === storedMsisdn);
        if (matchingLine) {
          this.selectedMsisdn = matchingLine;
        }
      } else {
        window.sessionStorage.setItem(LineSelectorComponent.SESSION_STORAGE_KEY, this.selectedMsisdn.msisdn);
        window.sessionStorage.setItem(LineSelectorComponent.ADDRESS_SESSION_STORAGE_KEY, this.selectedMsisdn.addressId);
      }

      this.selectMsisdn.emit(this.selectedMsisdn);
    }
  }

  selectedMsisdn: MobileLine | undefined;
  mobileLines: MobileLine[] = [];
  showMenu = false;
  static readonly SESSION_STORAGE_KEY = 'mobile-line-selector';
  static readonly ADDRESS_SESSION_STORAGE_KEY = 'address-line-selector';

  selectLine(line: MobileLine) {
    if (line.msisdn !== this.selectedMsisdn?.msisdn) {
      this.sendAnalyticsEvent();
      this.selectedMsisdn = line;
      this.selectMsisdn.emit(line);
      this.slideMenu(false);
      window.sessionStorage.setItem(LineSelectorComponent.SESSION_STORAGE_KEY, line.msisdn);
      window.sessionStorage.setItem(LineSelectorComponent.ADDRESS_SESSION_STORAGE_KEY, line.addressId);
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
      attributeName: MyBaseDashboardDatalayerAttributeName.CHANGE_LINE,
    };
    this.analyticsData.emit(analyticsEvent);
  }
}
