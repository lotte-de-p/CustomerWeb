import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { InstallationAddressFormComponent } from './installation-address-form.component';
import { AddressFormFieldComponent } from '@sales/address-form-field/feat-address-form-field';
import { StoreModule } from '@ngrx/store';

describe('InstallationAddressOverlayFormComponent', () => {
  let component: InstallationAddressFormComponent;
  let fixture: ComponentFixture<InstallationAddressFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [
        TranslateModule.forRoot(),
        StoreModule.forRoot({}),
        ReactiveFormsModule,
        AddressFormFieldComponent,
        InstallationAddressFormComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(InstallationAddressFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with the address control', () => {
    const addressControl = component.addressForm.get('address');
    expect(addressControl).toBeTruthy();
  });

  it('should emit closeForm when onCloseForm is called', () => {
    jest.spyOn(component.closeForm, 'emit');

    component.onCloseForm();

    expect(component.closeForm.emit).toHaveBeenCalled();
  });

  it('should emit submitForm with address value when onSubmitForm is called', () => {
    jest.spyOn(component.submitForm, 'emit');

    const mockAddressValue = { street: 'Main Street', city: 'Somewhere' };
    component.addressForm.get('address')?.setValue(mockAddressValue);

    component.onSubmitForm();

    expect(component.submitForm.emit).toHaveBeenCalledWith(mockAddressValue);
  });
});
