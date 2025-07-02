import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';
import { AddressFormFieldFacade, addressFormFieldFeature } from '@sales/address-form-field/data-access';
import { StreetComponent } from './street.component';
import { of } from 'rxjs';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { MockProvider } from 'ng-mocks';
import { OcapiService } from '@telenet/ng-lib-ocapi';
import { AddressReverseProxyService } from '@sales/shared/address/data-access';

describe('StreetComponent', () => {
  const mainStreet = 'Main Street';
  const mockWindow = {};
  let component: StreetComponent;
  let fixture: ComponentFixture<StreetComponent>;
  let ocapiService: OcapiService;

  const facadeMock: Partial<AddressFormFieldFacade> = {
    selectedMunicipality$: of(undefined),
    availableStreets$: of([]),
    setSelectedStreet: jest.fn(),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(),
        StoreModule.forFeature(addressFormFieldFeature),
        HttpClientModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
        MatInputModule,
        TranslateModule.forRoot(),
        StreetComponent, // Importing the standalone component here
      ],
      providers: [
        AddressFormFieldFacade,
        {
          provide: AddressFormFieldFacade,
          useValue: facadeMock,
        },
        {
          provide: 'Window',
          useValue: mockWindow,
        },
        MockProvider(OcapiService),
        MockProvider(AddressReverseProxyService),
      ],
    }).compileComponents();

    ocapiService = TestBed.inject(OcapiService);
    jest.spyOn(ocapiService, 'doGet').mockReturnValue(of({}));

    fixture = TestBed.createComponent(StreetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  xit('should disable the control when no municipality is selected', () => {
    jest.spyOn(facadeMock, 'selectedMunicipality$', 'get').mockReturnValue(of(undefined));

    component.ngOnInit();
    fixture.detectChanges();
    expect(component.control.disabled).toBe(true);
  });

  xit('should enable the control when a municipality is selected', () => {
    jest.spyOn(facadeMock, 'selectedMunicipality$', 'get').mockReturnValue(
      of({
        postalCode: '12345',
        location: 'Test Municipality',
      })
    );

    component.ngOnInit();
    fixture.detectChanges();
    expect(component.control.enabled).toBe(true);
  });

  xit('should filter the street options based on user input', (done) => {
    const mockStreets = [mainStreet, 'Second Street', 'Third Street'];
    jest.spyOn(facadeMock, 'availableStreets$', 'get').mockReturnValue(of(mockStreets));

    component.ngOnInit();
    component.control.setValue('Main');
    fixture.detectChanges();

    component.filteredOptions.subscribe((options) => {
      expect(options).toEqual([mainStreet]);
      done();
    });
  });

  it('should call onChange when a street is selected', () => {
    const mockStreet = mainStreet;
    component.onChange = jest.fn();
    component.optionSelected(mockStreet);
    expect(component.onChange).toHaveBeenCalledWith(mockStreet);
  });

  it('should clear the selected option if onBlur is called with no match', () => {
    component.control.setValue('Non-existing Street');
    component.selectedOption = 'Existing Street';
    component.onBlur();

    expect(component.selectedOption).toBeNull();
    expect(component.control.value).toBeNull();
  });
});
