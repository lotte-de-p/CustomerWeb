import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InboxMessageNotificationIconComponent } from './inbox-message-notification-icon.component';
import { TranslateModule } from '@ngx-translate/core';
import { SimpleChanges, SimpleChange } from '@angular/core';

describe('InboxMessageNotificationIconComponent', () => {
  let component: InboxMessageNotificationIconComponent;
  let fixture: ComponentFixture<InboxMessageNotificationIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [InboxMessageNotificationIconComponent, TranslateModule.forRoot()],
    });

    fixture = TestBed.createComponent(InboxMessageNotificationIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit notificationClicked event on handleNotificationClick', () => {
    const url = 'testUrl';
    const event = new MouseEvent('click');

    jest.spyOn(component.notificationClicked, 'emit');
    jest.spyOn(event, 'preventDefault');

    component.handleNotificationClick(event, url);

    expect(event.preventDefault).toHaveBeenCalled();
    expect(component.notificationClicked.emit).toHaveBeenCalledWith(url);
  });

  it('should emit unreadMessagesChange event with false when unreadMessages is null', () => {
    jest.spyOn(component.unreadMessagesChange, 'emit');

    const changes: SimpleChanges = {
      unreadMessages: new SimpleChange(5, null, false),
    };

    component.ngOnChanges(changes);

    expect(component.unreadMessagesChange.emit).toHaveBeenCalledWith(false);
  });
});
