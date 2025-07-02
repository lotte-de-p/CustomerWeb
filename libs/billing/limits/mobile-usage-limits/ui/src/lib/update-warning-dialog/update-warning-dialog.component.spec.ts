import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { UpdateWarningDialogComponent } from './update-warning-dialog.component';

describe('UpdateWarningDialogComponent', () => {
  let component: UpdateWarningDialogComponent;
  let fixture: ComponentFixture<UpdateWarningDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [CommonModule, TranslateModule.forRoot()],
    }).compileComponents();
    fixture = TestBed.createComponent(UpdateWarningDialogComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should emit true when onConfirm is called', () => {
    let emittedValue: boolean | undefined;
    component.clickEvent.subscribe((value) => {
      emittedValue = value;
    });
    component.onConfirm();
    expect(emittedValue).toBe(true);
  });

  it('should emit false when onCancel is called', () => {
    let emittedValue: boolean | undefined;
    component.clickEvent.subscribe((value) => {
      emittedValue = value;
    });
    component.onCancel();
    expect(emittedValue).toBe(false);
  });
});
