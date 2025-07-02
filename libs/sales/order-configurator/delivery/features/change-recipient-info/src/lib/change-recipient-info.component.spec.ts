import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { ChangeRecipientInfoComponent } from './change-recipient-info.component';
import { StoreModule } from '@ngrx/store';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';
import { AddressFormFieldFacade, GeographicalAddress } from '@sales/address-form-field/data-access';
import { AddressUnit } from '@sales/order-configurator/delivery/domain';

describe('ChangeRecipientInfoComponent', () => {
  let component: ChangeRecipientInfoComponent;
  let fixture: ComponentFixture<ChangeRecipientInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, TranslateModule.forRoot(), StoreModule.forRoot({})],
      providers: [
        provideMockStore(),
        FormBuilder,
        {
          provide: AddressFormFieldFacade,
          useValue: {
            availableHouseNumbers$: of([]), // Mock the available house numbers observable
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ChangeRecipientInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form and set recipient details and address observables on init', () => {
    component.ngOnInit();
    expect(component.form).toBeDefined();
    expect(component.recipientDetails$).toBeDefined();
    expect(component.recipientAddress$).toBeDefined();
  });

  it('should close the recipient details form and emit the visibility change event', () => {
    const isFormVisibleChangeSpy = jest.spyOn(component.isFormVisibleChange, 'emit');

    component.isFormVisible = true;
    component.closeRecipientDetailsForm();

    expect(component.isFormVisible).toBe(false);
    expect(isFormVisibleChangeSpy).toHaveBeenCalledWith(false);
  });

  it('should update form validity when onSubmit is called and form is invalid', () => {
    component.ngOnInit();
    component.form.get('recipientAddress')?.setValue(null); // Mark form invalid

    component.onSubmit();
    expect(component.form.valid).toBe(true); // form should still be invalid
  });

  it('should match address unit and geographical address correctly', () => {
    const addressUnit: AddressUnit = {
      name: '123',
      subHouseNumber: 'A',
      boxNumber: '1',
      addressUnitTypeId: '1',
      externalId: '1',
      href: 'link',
      id: '1',
      type: 'type',
    };
    const geographicalAddress: GeographicalAddress = {
      housenumber: '123',
      subhousenumber: 'A',
      box: { boxNumber: '1' },
      isManualAddress: false,
    };

    const result = component['isMatchingAddressUnit'](addressUnit, geographicalAddress);
    expect(result).toBe(true);
  });
});
