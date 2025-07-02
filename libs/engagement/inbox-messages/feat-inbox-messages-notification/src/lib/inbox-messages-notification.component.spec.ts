import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { InboxMessagesNotificationComponent } from './inbox-messages-notification.component';
import { InboxMessagesFacade } from '@inbox-messages/data-access';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TranslateModule } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';
import { UrlService, windowFactory } from '@telenet/ng-lib-page';

describe('InboxMessagesNotificationComponent', () => {
  let component: InboxMessagesNotificationComponent;
  let fixture: ComponentFixture<InboxMessagesNotificationComponent>;
  let inboxMessagesFacade: InboxMessagesFacade;
  let cookieService: CookieService;
  let urlService: UrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        InboxMessagesNotificationComponent,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        HttpClientTestingModule,
        TranslateModule.forRoot(),
      ],
      providers: [InboxMessagesFacade, { provide: 'Window', useValue: windowFactory() }, CookieService, UrlService],
    });

    fixture = TestBed.createComponent(InboxMessagesNotificationComponent);
    inboxMessagesFacade = TestBed.inject(InboxMessagesFacade);
    cookieService = TestBed.inject(CookieService);
    urlService = TestBed.inject(UrlService);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize unreadInboxMessagesCount$ if user is logged in', () => {
    jest.spyOn(inboxMessagesFacade, 'loadUnreadInboxMessagesCount');
    jest.spyOn(cookieService, 'get').mockReturnValue('LOGGED_IN');

    fixture.detectChanges();

    expect(inboxMessagesFacade.loadUnreadInboxMessagesCount).toHaveBeenCalled();
  });

  it('should not initialize unreadInboxMessagesCount$ if user is not logged in', () => {
    jest.spyOn(inboxMessagesFacade, 'loadUnreadInboxMessagesCount');
    jest.spyOn(cookieService, 'get').mockReturnValue('');

    fixture.detectChanges();

    expect(inboxMessagesFacade.loadUnreadInboxMessagesCount).not.toHaveBeenCalled();
  });

  it('should send notification clicked event', () => {
    jest.spyOn(inboxMessagesFacade, 'sendNotificationClickedEvent');
    jest.spyOn(urlService, 'redirectTo');

    component.handleNotificationClick('testUrl');

    expect(inboxMessagesFacade.sendNotificationClickedEvent).toHaveBeenCalledWith('testUrl');
    expect(urlService.redirectTo).toHaveBeenCalledWith('testUrl');
  });
});
