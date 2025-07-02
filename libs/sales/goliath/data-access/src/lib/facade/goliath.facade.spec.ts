import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { GoliathFacade } from './goliath.facade';
import { goliathStateTestfactory } from '../+state/goliath-state.testfactory';

describe('GoliathFacade', () => {
  let facade: GoliathFacade;
  let store$: MockStore;
  const mockState = goliathStateTestfactory.build(); // Assumed to be similar to deliveryStateTestfactory

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore({ initialState: mockState })],
    });

    store$ = TestBed.inject(MockStore);
    facade = TestBed.inject(GoliathFacade);
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  describe('flows$', () => {
    it('should select flows from store', () => {
      jest.spyOn(store$, 'select').mockReturnValue(of(mockState.flows));

      facade.flows$.subscribe((result) => {
        expect(result).toEqual(mockState.flows);
      });
    });
  });

  describe('steps$', () => {
    it('should select steps from store', () => {
      jest.spyOn(store$, 'select').mockReturnValue(of(mockState.steps));

      facade.steps$.subscribe((result) => {
        expect(result).toEqual(mockState.steps);
      });
    });
  });

  describe('stateActions$', () => {
    it('should select state actions from store', () => {
      jest.spyOn(store$, 'select').mockReturnValue(of(mockState.stateActions));

      facade.stateActions$.subscribe((result) => {
        expect(result).toEqual(mockState.stateActions);
      });
    });
  });

  describe('currentState$', () => {
    it('should select the current state from store', () => {
      jest.spyOn(store$, 'select').mockReturnValue(of(mockState.currentState));

      facade.currentState$.subscribe((result) => {
        expect(result).toEqual(mockState.currentState);
      });
    });
  });
});
