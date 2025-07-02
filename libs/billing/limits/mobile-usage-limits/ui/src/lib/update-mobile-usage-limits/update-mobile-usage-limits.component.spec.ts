import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateMobileUsageLimitsComponent } from './update-mobile-usage-limits.component';

describe('UpdateMobileUsageLimitsComponent', () => {
  let component: UpdateMobileUsageLimitsComponent;
  let fixture: ComponentFixture<UpdateMobileUsageLimitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [CommonModule, TranslateModule.forRoot(), ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMobileUsageLimitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should emit true when submit is called', () => {
    let emittedValue: boolean | undefined;
    component.clickEvent.subscribe((value) => {
      emittedValue = value;
    });
    component.submit();
    expect(emittedValue).toBe(true);
  });
});
