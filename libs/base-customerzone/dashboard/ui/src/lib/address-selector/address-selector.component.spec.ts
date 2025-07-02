import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddressSelectorComponent } from './address-selector.component';
import { TranslateFakeLoader, TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { InternetLine } from '@mybase-dashboard/data-access';

describe('AddressSelectorComponent', () => {
  let component: AddressSelectorComponent;
  let fixture: ComponentFixture<AddressSelectorComponent>;

  const internetLine = {
    default: true,
    productIdentifier: 'BINT050006268',
    productName: 'Internet limited',
    address: {
      id: '91257569926662097',
      street: 'Darwin Loadteststraat',
      houseNumber: '2',
      municipality: 'Mechelen',
      postalCode: '2800',
      country: 'België',
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useValue: TranslateFakeLoader },
        }),
      ],
      providers: [TranslateService],
    });

    fixture = TestBed.createComponent(AddressSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    window.sessionStorage.removeItem(AddressSelectorComponent.SESSION_STORAGE_KEY);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('data sessionStorage', () => {
    it('should read address from session storage when present', () => {
      const storedAddress = '456';

      window.sessionStorage.setItem(AddressSelectorComponent.SESSION_STORAGE_KEY, storedAddress);
      component.data = [
        { default: true, productName: 'abc', productIdentifier: '123', address: {} as InternetLine['address'] },
        { default: false, productName: 'def', productIdentifier: '456', address: {} as InternetLine['address'] },
      ];
      window.sessionStorage.removeItem(AddressSelectorComponent.SESSION_STORAGE_KEY);

      expect(component.selectedInternetAddress).toEqual({
        default: false,
        productName: 'def',
        productIdentifier: '456',
        address: {} as InternetLine['address'],
        completeAddress: '',
      });
    });

    it('should ignore address from session storage when not present in lines', () => {
      const storedAddress = '789';

      window.sessionStorage.setItem(AddressSelectorComponent.SESSION_STORAGE_KEY, storedAddress);
      component.data = [
        { default: true, productName: 'abc', productIdentifier: '123', address: {} as InternetLine['address'] },
        { default: false, productName: 'def', productIdentifier: '456', address: {} as InternetLine['address'] },
      ];
      window.sessionStorage.removeItem(AddressSelectorComponent.SESSION_STORAGE_KEY);

      expect(component.selectedInternetAddress).toEqual({
        default: true,
        productName: 'abc',
        productIdentifier: '123',
        address: {} as InternetLine['address'],
        completeAddress: '',
      });
    });

    it('should proceed as usual if no line from session storage is present but still update session storage with default line', () => {
      component.data = [
        { default: false, productName: 'abc', productIdentifier: '123', address: {} as InternetLine['address'] },
        { default: true, productName: 'def', productIdentifier: '456', address: {} as InternetLine['address'] },
      ];

      expect(component.selectedInternetAddress).toEqual({
        default: true,
        productName: 'def',
        productIdentifier: '456',
        address: {} as InternetLine['address'],
        completeAddress: '',
      });
      expect(window.sessionStorage.getItem(AddressSelectorComponent.SESSION_STORAGE_KEY)).toEqual('456');
    });
  });

  describe('selectLine sessionStorage', () => {
    it('should update the sessionStorage when selected a line', () => {
      const line: InternetLine = {
        default: false,
        productName: 'ghi',
        productIdentifier: '789',
        address: {
          id: '91257569926662096',
        } as InternetLine['address'],
      };
      component.selectLine(line);
      expect(window.sessionStorage.getItem(AddressSelectorComponent.SESSION_STORAGE_KEY)).toEqual('789');
      expect(window.sessionStorage.getItem(AddressSelectorComponent.ADDRESS_SESSION_STORAGE_KEY)).toEqual(
        '91257569926662096'
      );
    });
  });

  it('should emit selected line and close', () => {
    component.selectedInternetAddress = {
      productIdentifier: '',
      productName: '',
      default: false,
      address: {},
    } as InternetLine;
    jest.spyOn(component.selectInternetAddress, 'emit');
    jest.spyOn(component, 'slideMenu');

    component.selectLine(internetLine);

    expect(component.selectedInternetAddress).toEqual(internetLine);
    expect(component.selectInternetAddress.emit).toHaveBeenCalledWith(internetLine);
    expect(component.slideMenu).toHaveBeenCalledWith(false);
  });

  it('should open or close menu', () => {
    component.showMenu = false;
    const event = new Event('click');
    jest.spyOn(event, 'stopPropagation');

    component.slideMenu(true, event);

    expect(event.stopPropagation).toHaveBeenCalled();
    expect(component.showMenu).toEqual(true);
  });
});
