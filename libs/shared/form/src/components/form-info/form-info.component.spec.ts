import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, FormControl } from '@angular/forms';
import { FormInfoComponent } from '../index';

describe('FormInfoComponent', () => {
  let component: FormInfoComponent;
  let fixture: ComponentFixture<FormInfoComponent>;
  let formGroup: FormGroup;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormInfoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormInfoComponent);
    component = fixture.componentInstance;

    formGroup = new FormGroup({
      control1: new FormControl('value1'),
    });

    component.formGroup = formGroup;
    fixture.detectChanges();
  });

  it('should display form details', () => {
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('pre').textContent).toContain(
      'formValue: ' + JSON.stringify(formGroup.value, null, 2)
    );
    expect(compiled.querySelector('div').textContent).toContain('valid: ' + formGroup.valid);
    expect(compiled.querySelectorAll('div')[2].textContent).toContain('touched: ' + formGroup.touched);
    expect(compiled.querySelectorAll('div')[3].textContent).toContain('pristine: ' + formGroup.pristine);
    expect(compiled.querySelectorAll('div')[4].textContent).toContain('errors: ' + JSON.stringify(formGroup.errors));
  });

  it('should call extractFormDetails function with formGroup', () => {
    const spy = jest.spyOn(component, 'extractFormDetails');
    component.extractFormDetails(component.formGroup);
    expect(spy).toHaveBeenCalledWith(formGroup);
  });
});
