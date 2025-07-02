import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MobileActivationInProgressNotificationComponent } from './mobile-activation-in-progress-notification.component';

describe('MobileActivationInProgressNotificationComponent', () => {
  let component: MobileActivationInProgressNotificationComponent;
  let fixture: ComponentFixture<MobileActivationInProgressNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [CommonModule, TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileActivationInProgressNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
