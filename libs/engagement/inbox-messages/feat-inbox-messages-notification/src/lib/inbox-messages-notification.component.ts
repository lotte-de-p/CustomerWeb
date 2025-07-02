import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { InboxMessagesFacade, InboxMessagesNgrxModule } from '@inbox-messages/data-access';
import { InboxMessageNotificationIconComponent } from '@inbox-messages/ui';
import { CookieService } from 'ngx-cookie-service';

const LOGIN_STATUS_COOKIE = 'loginStatus';
const LOGGED_IN_STATUS = 'LOGGED_IN';

@Component({
  standalone: true,
  imports: [CommonModule, InboxMessagesNgrxModule, AsyncPipe, InboxMessageNotificationIconComponent],
  selector: 'tg-inbox-messages-notification',
  templateUrl: './inbox-messages-notification.component.html',
})
export class InboxMessagesNotificationComponent implements AfterViewInit {
  constructor(
    private readonly inboxMessagesFacade: InboxMessagesFacade,
    private readonly cookieService: CookieService
  ) {
    this.inboxMessagesFacade.initDataLayer();
  }

  @Input() inboxOverviewPageUrl!: string;
  @Input() hideIconLabel!: boolean;
  @Output() lazyLoadingOutputEvent = new EventEmitter();
  scopes = [];

  unreadInboxMessagesCount$ = this.inboxMessagesFacade.unreadInboxMessagesCount$;

  ngAfterViewInit() {
    if (this.isLoggedIn) {
      this.inboxMessagesFacade.loadUnreadInboxMessagesCount();
    }
  }

  handleNotificationClick(url: string): void {
    this.inboxMessagesFacade.sendNotificationClickedEvent(url);
  }

  private get isLoggedIn(): boolean {
    const loginStatus = this.cookieService.get(LOGIN_STATUS_COOKIE);
    return loginStatus === LOGGED_IN_STATUS;
  }
}
