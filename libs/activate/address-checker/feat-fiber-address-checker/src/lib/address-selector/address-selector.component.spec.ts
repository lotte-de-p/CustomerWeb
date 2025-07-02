import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddressSelectorComponent } from './address-selector.component';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { FormBuilder, FormsModule } from '@angular/forms';

describe('AddressSelectorComponent', () => {
  let component: AddressSelectorComponent;
  let fixture: ComponentFixture<AddressSelectorComponent>;

  const addresses = require('../../data/addresses.json');

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateFakeLoader,
          },
        }),
      ],
      providers: [FormBuilder, { provide: 'Window', useValue: {} }],
    }).compileComponents();

    fixture = TestBed.createComponent(AddressSelectorComponent);
    component = fixture.componentInstance;
    component.adresses = addresses;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOninit, ngAfterViewInit', () => {
    beforeEach(() => {
      component.ngOnInit();
    });

    it('should populate options', () => {
      expect(component.addressOptions).toHaveLength(2);
    });

    it('should select the first option', waitForAsync(() => {
      jest.spyOn(component.radioIconList, 'registerOnChange');
      jest.spyOn(component.radioIconList, 'registerOnTouched');
      jest.spyOn(component.radioIconList, 'selectOption');

      component.ngAfterViewInit();
      fixture.whenStable().then(() => {
        expect(component.radioIconList.registerOnChange).toHaveBeenCalled();
        expect(component.radioIconList.registerOnTouched).toHaveBeenCalled();
        expect(component.radioIconList.selectOption).toHaveBeenCalled();
      });
    }));
  });

  describe('select addres', () => {
    it('should emit an event when an option is selected', () => {
      jest.spyOn(component.addressSelectedEvent, 'emit');
      const selectedOption = component.addressOptions[0];
      component.radioIconList.selectOption(selectedOption);
      expect(component.addressSelectedEvent.emit).toHaveBeenCalledWith(addresses[0]);
    });
  });
});
