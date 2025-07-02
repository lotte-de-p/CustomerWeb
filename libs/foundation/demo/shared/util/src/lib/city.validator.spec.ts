import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CityValidator } from './city.validator';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  template: `<form [formGroup]="testFormGroup">
    <input type="text" formControlName="city" tgDemoUtilAppCity />
  </form>`,
})
class TestComponent {
  testFormGroup = new FormGroup({
    city: new FormControl(),
  });
}
describe('CityValidator', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, CityValidator, ReactiveFormsModule, FormsModule],
      providers: [],
      declarations: [TestComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
  });

  it('should add error given wrong city', () => {
    component.testFormGroup.patchValue({ city: 'Brussels' });
    fixture.detectChanges();
    expect(component.testFormGroup.controls['city'].errors).toEqual({ appCity: true });
  });
  it('should have no errors given allowed city', () => {
    component.testFormGroup.patchValue({ city: 'Hamburg' });
    fixture.detectChanges();
    expect(component.testFormGroup.controls['city'].errors).toEqual(null);
  });
});
