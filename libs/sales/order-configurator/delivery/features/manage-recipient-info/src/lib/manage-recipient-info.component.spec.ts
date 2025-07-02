import { ManageRecipientInfoComponent } from './manage-recipient-info.component';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { RecipientAddress, RecipientDetails } from '@sales/order-configurator/delivery/domain';
import { recipientAddress, recipientDetails } from '@sales/order-configurator/delivery/state';

describe('ManageRecipientInfoComponent', () => {
  let component: ManageRecipientInfoComponent;
  let mockStore: Partial<Store>;
  let mockRecipientDetails$: Observable<RecipientDetails>;
  let mockRecipientAddress$: Observable<RecipientAddress>;

  const mockRecipientDetails: RecipientDetails = {
    firstname: 'John',
    lastname: 'Doe',
    email: 'john.doe@example.com',
    mobile: '1234567890',
  };

  const mockRecipientAddress: RecipientAddress = {
    countryCode: 'BE',
    country: 'Belgium',
    postalCode: '1000',
    municipality: 'Brussels',
    street: 'Main Street',
    houseNumber: '123',
    subHouseNumber: 'A',
    box: 'Box 1',
    addressUnit: {
      addressUnitTypeId: '1',
      externalId: '1',
      href: 'link',
      id: '1',
      name: 'addressName',
      type: 'addressType',
    },
  };

  beforeEach(() => {
    // Create mock observables
    mockRecipientDetails$ = of(mockRecipientDetails);
    mockRecipientAddress$ = of(mockRecipientAddress);

    // Mock the Store
    mockStore = {
      select: jest.fn().mockImplementation((selector) => {
        if (selector === recipientDetails) {
          return mockRecipientDetails$;
        } else if (selector === recipientAddress) {
          return mockRecipientAddress$;
        }
        return of();
      }),
    };

    // Instantiate the component with the mock store
    component = new ManageRecipientInfoComponent(mockStore as Store);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have recipientDetails$ observable emitting correct value', (done) => {
    component.recipientDetails$.subscribe((details) => {
      expect(details).toEqual(mockRecipientDetails);
      done();
    });
  });

  it('should have recipientAddress$ observable emitting correct value', (done) => {
    component.recipientAddress$.subscribe((address) => {
      expect(address).toEqual(mockRecipientAddress);
      done();
    });
  });

  it('should emit openOverlay event when openRecipientDetailsForm is called', () => {
    jest.spyOn(component.openOverlay, 'emit');

    component.openRecipientDetailsForm();

    expect(component.openOverlay.emit).toHaveBeenCalled();
  });
});
