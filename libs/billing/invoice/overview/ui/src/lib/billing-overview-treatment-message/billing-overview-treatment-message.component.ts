import { Component, Input } from '@angular/core';
import { WinkNotification, WinkParagraph, WinkTitle } from '@telenet/wink-ng';
import { CollectionsTreatmentMessage } from '@billing/invoice-overview/data-access';
import { NgIf } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  selector: 'tg-billing-overview-treatment-message',
  template: `<wink-notification
    *ngIf="message"
    appearance="error"
    has-close-icon="false"
    data-testid="billing-overview-treatment-message">
    <wink-title slot="heading" html-tag="h6" spacing-y="bottom" text="{{ message | translate }}"></wink-title>
  </wink-notification>`,
  imports: [NgIf, TranslateModule, WinkNotification, WinkTitle, WinkParagraph],
})
export class TreatmentMessageComponent {
  @Input() collectionsTreatmentMessage?: CollectionsTreatmentMessage;

  get message() {
    switch (this.collectionsTreatmentMessage) {
      case CollectionsTreatmentMessage.AVOID_EXTRA_COSTS:
        return 'ng.billing-overview.lbl.treatment-message-avoid-extra-costs';
      case CollectionsTreatmentMessage.RESUME_SUSPENDED_SERVICES:
        return 'ng.billing-overview.lbl.treatment-message-resume-suspended-services';
      case CollectionsTreatmentMessage.AVOID_SUSPENDED_SERVICES:
        return 'ng.billing-overview.lbl.treatment-message-avoid-suspended-services';
      default:
        return '';
    }
  }
}
