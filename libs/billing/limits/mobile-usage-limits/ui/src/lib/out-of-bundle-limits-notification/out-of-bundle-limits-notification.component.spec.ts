import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { OutOfBundleLimitsNotificationComponent } from './out-of-bundle-limits-notification.component';

describe('OutOfBundleLimitsMemberNotificationComponent', () => {
  let component: OutOfBundleLimitsNotificationComponent;
  let fixture: ComponentFixture<OutOfBundleLimitsNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [CommonModule, TranslateModule.forRoot(), ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutOfBundleLimitsNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should set isOutOfBundleNoLimits to false when currentOutOfBundleLimit is undefined', () => {
    component.currentOutOfBundleLimit = undefined;
    component.ngOnInit();
    expect(component.isOutOfBundleNoLimits).toBe(false);
  });

  it('should set isOutOfBundleNoLimits to true when currentOutOfBundleLimit has limit.enabled set to false', () => {
    component.currentOutOfBundleLimit = { currentUsage: 10, limit: { enabled: false, value: 50 } };
    component.ngOnInit();
    expect(component.isOutOfBundleNoLimits).toBe(true);
  });

  it('should set outOfBundleLimitValue to null when currentOutOfBundleLimit is undefined', () => {
    component.currentOutOfBundleLimit = undefined;
    component.ngOnInit();
    expect(component.outOfBundleLimitValue).toBeUndefined();
  });

  it('should set outOfBundleLimitValue to the value from currentOutOfBundleLimit.limit.value', () => {
    const limitValue = 100; // Example value
    component.currentOutOfBundleLimit = { currentUsage: 10, limit: { enabled: true, value: limitValue } };
    component.ngOnInit();
    expect(component.outOfBundleLimitValue).toBe(limitValue);
  });
});
