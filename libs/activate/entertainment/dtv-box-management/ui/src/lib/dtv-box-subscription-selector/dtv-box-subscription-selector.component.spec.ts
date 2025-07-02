import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { DtvBoxSubscriptionSelectorComponent } from './dtv-box-subscription-selector.component';

describe('DtvBoxSubscriptionSelectorComponent', () => {
  let component: DtvBoxSubscriptionSelectorComponent;
  let fixture: ComponentFixture<DtvBoxSubscriptionSelectorComponent>;

  const mockAddresses = [
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
    fixture = TestBed.createComponent(DtvBoxSubscriptionSelectorComponent);
    component = fixture.componentInstance;
    component.addresses = mockAddresses;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set selectedAddress and emit addressLineSelected when selectAddressLine is called', () => {
    jest.spyOn(component.addressLineSelected, 'emit');
    component.selectAddressLine(mockAddresses[0]);
    expect(component.selectedAddress).toBe(mockAddresses[0]);
    expect(component.addressLineSelected.emit).toHaveBeenCalledWith(mockAddresses[0]);
  });

  it('should set showMenu to true when openAddressSelection is called', () => {
    component.openAddressSelection();
    expect(component.showMenu).toBeTruthy();
  });

  it('should set showMenu to false when close is called', () => {
    component.showMenu = true; // Set to true to test the close method
    component.close();
    expect(component.showMenu).toBeFalsy();
  });
});
