import { Component, effect, input } from '@angular/core';
import { BadgeType } from '@inbox-messages/data-access';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  templateUrl: './inbox-message-badge.component.html',
  selector: 'tg-inbox-message-badge',
  imports: [TranslateModule],
})
export class InboxMessageBadgeComponent {
  badgeType = input<BadgeType>(BadgeType.New);
  backgroundClass: string;

  constructor() {
    effect(() => {
      this.backgroundClass = this.getBackgroundClass(this.badgeType());
    });
  }

  private getBackgroundClass(badgeType: BadgeType): string {
    switch (badgeType) {
      case BadgeType.New:
        return 'background-olivine_40';
      case BadgeType.Info:
        return 'background-emerald_40';
      default:
        return 'background-olivine_40';
    }
  }
}
