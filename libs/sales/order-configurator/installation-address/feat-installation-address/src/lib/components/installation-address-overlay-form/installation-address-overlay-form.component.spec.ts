import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { InstallationAddressOverlayFormComponent } from './installation-address-overlay-form.component';
import { AddressFormFieldComponent } from '@sales/address-form-field/feat-address-form-field';
import { StoreModule } from '@ngrx/store';

describe('InstallationAddressOverlayFormComponent', () => {
  let component: InstallationAddressOverlayFormComponent;
  let fixture: ComponentFixture<InstallationAddressOverlayFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [
        TranslateModule.forRoot(),
        StoreModule.forRoot({}),
        ReactiveFormsModule,
        AddressFormFieldComponent,
        InstallationAddressOverlayFormComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(InstallationAddressOverlayFormComponent);
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
});
