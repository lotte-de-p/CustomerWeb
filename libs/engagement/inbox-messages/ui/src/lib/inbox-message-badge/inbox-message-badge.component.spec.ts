import { TestBed, ComponentFixture } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { InboxMessageBadgeComponent } from './inbox-message-badge.component';
import { BadgeType } from '@inbox-messages/data-access';

describe('InboxMessageBadgeComponent', () => {
  let component: InboxMessageBadgeComponent;
  let fixture: ComponentFixture<InboxMessageBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot(), InboxMessageBadgeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InboxMessageBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should set default background class for badgeType New', () => {
    jest.spyOn(component, 'badgeType').mockReturnValue(BadgeType.New);
    fixture.detectChanges();
    expect(component.backgroundClass).toBe('background-olivine_40');
  });

  it('should set default background class for unknown badgeType', () => {
    jest.spyOn(component, 'badgeType').mockReturnValue({} as BadgeType);
    fixture.detectChanges();
    expect(component.backgroundClass).toBe('background-olivine_40');
  });
});
