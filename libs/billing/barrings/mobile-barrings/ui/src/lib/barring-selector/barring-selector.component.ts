import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideMenuComponent } from '@billing/shared/ui';
import { TranslateModule } from '@ngx-translate/core';
import {
  ALL_INCOMING_AND_OUTGOING,
  ALL_INCOMING_AND_OUTGOING_GROUP,
  MobileBarringGroup,
  MobileBarringSettings,
  MobileBarringsDatalayer,
} from '@billing/barrings/mobile-barrings/data-access';
import { AbstractBaseComponent } from '@telenet/ng-lib-page';

@Component({
  selector: 'tg-barring-selector',
  standalone: true,
  imports: [CommonModule, SlideMenuComponent, TranslateModule],
  templateUrl: './barring-selector.component.html',
  styleUrl: './barring-selector.component.scss',
})
export class BarringSelectorComponent extends AbstractBaseComponent {
  @Input() set barringSettings(mobileBarGroup: MobileBarringGroup) {
    if (mobileBarGroup) {
      this.barSettings = JSON.parse(JSON.stringify(mobileBarGroup.barringSettings));
      this.groupCode = mobileBarGroup.code;
      this.disabledByFraud = mobileBarGroup.disabledByFraud ?? false;
    }
  }
  @Input() isReadOnly = false;
  @Input() globalBarringEnabled = false;
  @Input() suspendedNumber = false;
  @Input() originalValueOfGeneralBarring!: boolean;
  @Input() set bannerLinkIsClicked(bannerLinkClicked: boolean) {
    if (bannerLinkClicked && this.globalBarringEnabled && this.groupCode === this.ALL_INCOMING_AND_OUTGOING_GROUP) {
      this.slideMenu(true);
    }
  }

  @Output() saveBarrings = new EventEmitter();
  @Output() toggleBarring = new EventEmitter<MobileBarringSettings>();
  @Output() cancel = new EventEmitter();
  @Output() addAnalyticsEvent = new EventEmitter<MobileBarringsDatalayer>();

  disabledByFraud = false;
  showMenu = false;
  showWarningScreen = false;
  ALL_INCOMING_AND_OUTGOING = ALL_INCOMING_AND_OUTGOING;
  ALL_INCOMING_AND_OUTGOING_GROUP = ALL_INCOMING_AND_OUTGOING_GROUP;
  barSettings!: MobileBarringSettings[];
  groupCode!: string;

  slideMenu(open: boolean, event?: Event) {
    event?.stopPropagation();
    this.showMenu = open;
    if (open) {
      document.body?.classList.add('overflow--hidden');
    } else {
      document.body?.classList.remove('overflow--hidden');
    }
  }

  activateBarring(setting: MobileBarringSettings) {
    this.toggleBarring.emit(setting);
  }

  save() {
    if (this.globalBarringEnabled !== this.originalValueOfGeneralBarring) {
      this.showWarningScreen = true;
    } else {
      const analyticsEvent: MobileBarringsDatalayer = {
        eventName: 'barring settings changed',
        eventType: 'change-mobile-service-settings',
        attributeName: this.groupCode,
      };
      this.addAnalyticsEvent.emit(analyticsEvent);
      this.saveBarrings.emit();
      this.slideMenu(false);
    }
  }

  cancelWarning(event: Event) {
    event.stopPropagation();
    this.showWarningScreen = false;
  }

  saveWarning(event: Event) {
    event.stopPropagation();
    this.showWarningScreen = false;
    this.saveBarrings.emit();
    this.slideMenu(false);
  }

  cancelAction() {
    if (!this.showWarningScreen) {
      this.slideMenu(false);
      this.cancel.emit();
    }
  }
}
