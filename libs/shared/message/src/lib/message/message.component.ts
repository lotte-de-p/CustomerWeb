import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from '../message.service';
import { AbstractMessage } from '../model';
import { DomService } from '@telenet/ng-lib-shared';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
})
export class MessageComponent {
  @Input() messageGroupName = '';
  private scrollCheck = false;

  constructor(
    private readonly messageService: MessageService,
    private readonly translateService: TranslateService,
    private readonly domService: DomService
  ) {}

  getMessages(): AbstractMessage[] {
    const messages = this.messageService.getMessagesByGroupName(this.messageGroupName);
    if (messages.length > 0) {
      this.scrollToTop();
      return [messages[0]];
    } else {
      this.scrollCheck = false;
      return [];
    }
  }

  getTranslatedLabel(message: AbstractMessage): string {
    const translatedLabel = this.translateService.instant(message.getMessageLabel(), message.interpolateParams);
    if (translatedLabel === '' || translatedLabel === message.getMessageLabel()) {
      return this.translateService.instant('ng.' + message.getMessageSuffix(), message.interpolateParams);
    }
    return translatedLabel;
  }

  private scrollToTop(): void {
    if (!this.scrollCheck) {
      this.domService.scrollToTop();
      this.scrollCheck = true;
    }
  }
}
