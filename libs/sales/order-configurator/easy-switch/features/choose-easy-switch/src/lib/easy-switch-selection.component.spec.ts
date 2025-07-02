import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { EasySwitchSelectionComponent } from './easy-switch-selection.component';
import { TranslateModule } from '@ngx-translate/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('EasySwitchSelectionComponent', () => {
  let component: EasySwitchSelectionComponent;
  let fixture: ComponentFixture<EasySwitchSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        TranslateModule.forRoot(),
        EasySwitchSelectionComponent, // Import the standalone component
      ],
      schemas: [NO_ERRORS_SCHEMA], // Ignore unknown elements and attributes
    }).compileComponents();

    fixture = TestBed.createComponent(EasySwitchSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the EasySwitchSelectionComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with null value for easySwitchSelection', () => {
    expect(component.easySwitchForm.get('easySwitchSelection')?.value).toBeNull();
  });

  it('should have submitted as false initially', () => {
    expect(component.submitted).toBe(false);
  });

  it('should have showTipNotification as false initially', () => {
    expect(component.showTipNotification).toBe(false);
  });

  it('should mark form as invalid if easySwitchSelection is not selected', () => {
    expect(component.isFormValid()).toBeFalsy();
  });

  it('should mark form as valid when easySwitchSelection is set to a valid value', () => {
    component.easySwitchForm.get('easySwitchSelection')?.setValue('yes');
    expect(component.isFormValid()).toBeTruthy();
  });

  it('should set submitted to true when markFormAsSubmitted is called', () => {
    component.markFormAsSubmitted();
    expect(component.submitted).toBeTruthy();
  });

  it('should show tip notification when easySwitchSelection is set to "no"', () => {
    component.easySwitchForm.get('easySwitchSelection')?.setValue('no');
    expect(component.showTipNotification).toBeTruthy();
  });

  it('should not show tip notification when easySwitchSelection is set to "yes"', () => {
    component.easySwitchForm.get('easySwitchSelection')?.setValue('yes');
    expect(component.showTipNotification).toBeFalsy();
  });

  it('should update showTipNotification based on value changes', () => {
    const easySwitchSelectionControl = component.easySwitchForm.get('easySwitchSelection');

    easySwitchSelectionControl?.setValue('no');
    expect(component.showTipNotification).toBeTruthy();

    easySwitchSelectionControl?.setValue('yes');
    expect(component.showTipNotification).toBeFalsy();
  });

  it('should return true for easySwitchSelectionValue when selection is "yes"', () => {
    component.easySwitchForm.get('easySwitchSelection')?.setValue('yes');
    expect(component.easySwitchSelectionValue).toBe(true);
  });

  it('should return false for easySwitchSelectionValue when selection is "no"', () => {
    component.easySwitchForm.get('easySwitchSelection')?.setValue('no');
    expect(component.easySwitchSelectionValue).toBe(false);
  });

  it('should return false for easySwitchSelectionValue when selection is null', () => {
    component.easySwitchForm.get('easySwitchSelection')?.setValue(null);
    expect(component.easySwitchSelectionValue).toBe(false);
  });
});
