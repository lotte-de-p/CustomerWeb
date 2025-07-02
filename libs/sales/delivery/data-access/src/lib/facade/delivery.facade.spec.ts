import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { DeliveryFacade } from './delivery.facade';
import { deliveryStateTestfactory } from '../+state/delivery-state.testfactory';

describe('DeliveryFacade', () => {
  let facade: DeliveryFacade;
  let store$: MockStore;
  const mockState = deliveryStateTestfactory.build();

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore()],
    });

    store$ = TestBed.inject(MockStore);
    facade = TestBed.inject(DeliveryFacade);
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  describe('delivery address', () => {
    it('should select delivery address from store', () => {
      jest.spyOn(store$, 'select').mockReturnValue(of(mockState.deliveryAddress));

      facade.deliveryAddress$.subscribe((result) => {
        expect(result).toEqual(mockState.deliveryAddress);
      });
    });
  });

  describe('delivery items', () => {
    it('should select delivery items from store', () => {
      jest.spyOn(store$, 'select').mockReturnValue(of(mockState.deliveryItems));

      facade.deliveryItems$.subscribe((result) => {
        expect(result).toEqual(mockState.deliveryItems);
      });
    });
  });

  describe('personal info', () => {
    it('should select personal info from store', () => {
      jest.spyOn(store$, 'select').mockReturnValue(of(mockState.personalInfo));

      facade.personalInfo$.subscribe((result) => {
        expect(result).toEqual(mockState.personalInfo);
      });
    });
  });

  describe('notifications', () => {
    it('should select personal info from store', () => {
      jest.spyOn(store$, 'select').mockReturnValue(of(mockState.notifications));

      facade.notifications$.subscribe((result) => {
        expect(result).toEqual(mockState.notifications);
      });
    });
  });
});
