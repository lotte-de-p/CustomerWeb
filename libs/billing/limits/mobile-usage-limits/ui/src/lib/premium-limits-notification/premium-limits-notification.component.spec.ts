import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { PremiumLimitsNotificationComponent } from '../premium-limits-notification/premium-limits-notification.component';

describe('PremiumLimitsNotification', () => {
  let component: PremiumLimitsNotificationComponent;
  let fixture: ComponentFixture<PremiumLimitsNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [CommonModule, TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiumLimitsNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
