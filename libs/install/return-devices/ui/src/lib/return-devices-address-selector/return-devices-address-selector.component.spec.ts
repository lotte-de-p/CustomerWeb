import { ReturnDevicesAddressSelectorComponent } from './return-devices-address-selector.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

describe('ReturnDevicesAddressSelectorComponent', () => {
  let component: ReturnDevicesAddressSelectorComponent;
  let fixture: ComponentFixture<ReturnDevicesAddressSelectorComponent>;

  const mockReturnDevicesAddressSelectorList = [
    {
      id: '9165639325413885482',
      country: 'België',
      countryCode: 'BE',
      city: 'Mechelen',
      postalCode: '2800',
      street: 'Darwin Loadteststraat',
      houseNumber: '7606',
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        {
          provide: 'Window',
          useValue: {},
        },
      ],
      imports: [TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnDevicesAddressSelectorComponent);
    component = fixture.componentInstance;
    component.returnDevicesAddressLines = mockReturnDevicesAddressSelectorList;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize inputs', () => {
    component.returnDevicesAddressLines = mockReturnDevicesAddressSelectorList;
    component.selectedAddressLine = mockReturnDevicesAddressSelectorList[0];
    fixture.detectChanges();

    expect(component.returnDevicesAddressLines).toEqual(mockReturnDevicesAddressSelectorList);
    expect(component.selectedAddressLine).toEqual(mockReturnDevicesAddressSelectorList[0]);
  });

  it('should select an address line and emit event and close ', () => {
    jest.spyOn(component.addressLineSelected, 'emit');

    component.selectAddressLine(mockReturnDevicesAddressSelectorList[0]);
    fixture.detectChanges();

    expect(component.selectedAddressLine).toEqual(mockReturnDevicesAddressSelectorList[0]);
    expect(component.showMenu).toBeFalsy();
    expect(component.addressLineSelected.emit).toHaveBeenCalledWith(mockReturnDevicesAddressSelectorList[0]);
  });

  it('should close the menu and emit close event', () => {
    jest.spyOn(component.closeMenu, 'emit');

    component.close();
    fixture.detectChanges();

    expect(component.showMenu).toBeFalsy();
    expect(component.closeMenu.emit).toHaveBeenCalled();
  });
});
