import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessibilitySpanComponent } from './accessibility-span.component';

describe('AccessibilitySpanComponent', () => {
  let component: AccessibilitySpanComponent;
  let fixture: ComponentFixture<AccessibilitySpanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessibilitySpanComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AccessibilitySpanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
