import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarringSelectorComponent } from '@billing/barrings/mobile-barrings/ui';
import {
  MobileBarringGroup,
  MobileBarringSettings,
  MobileBarringsDatalayer,
} from '@billing/barrings/mobile-barrings/data-access';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'tg-barring',
  standalone: true,
  imports: [CommonModule, BarringSelectorComponent, TranslateModule],
  templateUrl: './barring.component.html',
})
export class BarringComponent {
  private readonly translateService = inject(TranslateService);
  @Input() set barringGroup(data: { group: MobileBarringGroup; savedBarring: boolean }) {
    if (data?.group) {
      this.barringGroupData = data.group;
      if (data.savedBarring) {
        this.activeBarrings = data.group.barringSettings.reduce((setting: string[], item) => {
          if (item.isBarred) {
            setting.push(this.translateService.instant(`ng.mobile-barrings.barring-name.${item.code}`));
          }
          return setting;
        }, []);
      }
      if (data.group.disabledByFraud) {
        const analyticsEvent: MobileBarringsDatalayer = {
          eventName: 'message banner',
          eventType: 'view-banner',
          attributeName: 'fraud ban',
          attributeData: 'info',
          attributeGroup: data.group.code,
        };
        this.addAnalyticsEvent.emit(analyticsEvent);
      }
    }
  }
  @Input() isReadOnly = false;
  @Input() globalBarringEnabled = false;
  @Input() bannerLinkClicked = false;
  @Input() suspendedNumber = false;
  @Input() originalValueOfGeneralBarring!: boolean;

  @Output() saveBarrings = new EventEmitter();
  @Output() toggleBarring = new EventEmitter<{ setting: MobileBarringSettings; groupCode: string }>();
  @Output() cancel = new EventEmitter();
  @Output() addAnalyticsEvent = new EventEmitter<MobileBarringsDatalayer>();

  activeBarrings: string[] = [];
  barringGroupData!: MobileBarringGroup;

  switchBarring(setting: MobileBarringSettings) {
    this.toggleBarring.emit({ setting, groupCode: this.barringGroupData.code });
  }
}
