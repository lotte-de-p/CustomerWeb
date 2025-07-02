import { TestBed } from '@angular/core/testing';
import { deliveryStateTestfactory } from './delivery.testfactory';
import { deliveryReducer } from './delivery.reducer';
import { setRecipientAddress, setRecipientDetails } from './delivery.actions';
import {
  addressUnitTestFactory,
  RecipientAddress,
  recipientAddressTestfactory,
  RecipientDetails,
  recipientDetailsTestfactory,
} from '@sales/order-configurator/delivery/domain';

describe('customer registration reducer', () => {
  const initialState = deliveryStateTestfactory.build();
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: 'Window', useValue: {} }],
    });
  });

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {
        type: 'Unknown',
      };

      const state = deliveryReducer(initialState, action);

      expect(state).toBe(initialState);
    });
  });

  describe('setRecipientDetails action', () => {
    it('should save recipient details to delivery state', () => {
      const recipientDetails: RecipientDetails = {
        firstname: 'John',
        lastname: 'Wayne',
        mobile: '0484567890',
        email: 'john.wayne@telenet.be',
      };

      const action = setRecipientDetails({ recipientDetails: recipientDetails });

      const state = deliveryReducer(initialState, action);

      const predictedState = recipientDetailsTestfactory.build({
        firstname: 'John',
        lastname: 'Wayne',
        mobile: '0484567890',
        email: 'john.wayne@telenet.be',
      });

      expect(state.recipientDetails.firstname).toEqual(predictedState.firstname);
      expect(state.recipientDetails.lastname).toEqual(predictedState.lastname);
      expect(state.recipientDetails.mobile).toEqual(predictedState.mobile);
      expect(state.recipientDetails.email).toEqual(predictedState.email);
      expect(state).not.toBe(initialState);
    });
  });

  describe('setRecipientAddress action', () => {
    it('should save recipient address to delivery state', () => {
      const recipientAddress: RecipientAddress = {
        addressUnit: addressUnitTestFactory.build(),
        country: 'Belgium',
        houseNumber: '7',
        municipality: 'Geel',
        postalCode: '2440',
        street: 'Aardseweg',
      };

      const action = setRecipientAddress({ recipientAddress: recipientAddress });

      const state = deliveryReducer(initialState, action);

      const predictedState = recipientAddressTestfactory.build({
        country: 'Belgium',
        houseNumber: '7',
        municipality: 'Geel',
        postalCode: '2440',
        street: 'Aardseweg',
      });

      expect(state.recipientAddress.country).toEqual(predictedState.country);
      expect(state.recipientAddress.houseNumber).toEqual(predictedState.houseNumber);
      expect(state.recipientAddress.municipality).toEqual(predictedState.municipality);
      expect(state.recipientAddress.postalCode).toEqual(predictedState.postalCode);
      expect(state.recipientAddress.street).toEqual(predictedState.street);
      expect(state).not.toBe(initialState);
    });
  });
});
