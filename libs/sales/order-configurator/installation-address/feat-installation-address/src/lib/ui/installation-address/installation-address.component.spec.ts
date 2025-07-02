import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InstallationAddressComponent } from './installation-address.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { provideMockStore } from '@ngrx/store/testing';
import { EventFacade } from '@sales/events/data-access';
import { MockWindow } from '@stencil/core/mock-doc';

describe('InstallationAddressComponent', () => {
  let component: InstallationAddressComponent;
  let fixture: ComponentFixture<InstallationAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        TranslateModule.forRoot(), // Ensure necessary modules are imported
      ],
      providers: [
        { provide: 'Window', useValue: MockWindow },
        provideMockStore(),
        { provide: EventFacade, useValue: { triggerEvent: jest.fn() } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(InstallationAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the address when onSelect is called', () => {
    const spy = jest.spyOn(component.addressSelected, 'emit');
    const mockAddress = {
      id: '123',
      country: 'Belgium',
      postalCode: '1000',
      municipality: 'Brussels',
      street: 'Main St',
      houseNumber: '123',
      subHouseNumber: '1A',
      box: 'Box 3',
      floor: '2',
      selected: true,
      isNew: false,
    };
    component.address = mockAddress;
    component.onSelect();

    expect(spy).toHaveBeenCalledWith(mockAddress);
  });

  it('should handle index input changes', () => {
    component.index = 5;
    expect(component.index).toBe(5);
  });
});
