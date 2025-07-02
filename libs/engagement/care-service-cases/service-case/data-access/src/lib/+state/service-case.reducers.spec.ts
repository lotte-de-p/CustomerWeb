import { initialState, serviceCaseFeature } from './service-case.reducers';
import {
  loadServiceCases,
  loadServiceCasesFailure,
  loadServiceCasesSuccess,
  selectServiceCase,
} from './service-case.actions';
import { Status, Type } from '../entitities/service-case.interface';

describe('service case reducer', () => {
  const serviceCases = [
    {
      id: '000001',
      type: Type.MOVE,
      status: Status.RESOLVED,
      creationDate: new Date(2023, 12, 4),
      productType: 'Internet, DTV, fixed line',
    },
    {
      id: '123456',
      type: Type.MOVE,
      status: Status.OPEN,
      creationDate: new Date(2023, 8, 18),
      productType: 'Internet, DTV, fixed line',
    },
    {
      id: '987654',
      type: Type.TAKEOVER,
      status: Status.OPEN,
      creationDate: new Date(2023, 3, 2),
      productType: 'Internet, DTV',
    },
  ];

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {
        type: 'Unknown',
      };

      const state = serviceCaseFeature.reducer(initialState, action);

      expect(state).toEqual(initialState);
    });
  });

  describe('loadServiceCases', () => {
    it('should set the loading flag to true', () => {
      const action = loadServiceCases();

      const state = serviceCaseFeature.reducer(initialState, action);

      expect(state).toEqual({
        ...initialState,
        loading: true,
      });
    });
  });

  describe('loadServiceCasesSuccess', () => {
    it('should save the new service cases in the state and select default, first open case', () => {
      const action = loadServiceCasesSuccess({
        serviceCases,
      });

      const state = serviceCaseFeature.reducer(
        {
          ...initialState,
          loadError: 'Error',
          loading: true,
        },
        action
      );

      expect(state).toEqual({
        selectedServiceCase: serviceCases[1],
        serviceCases,
        loadError: undefined,
        loading: false,
      });
    });

    it('should save the new service cases in the state and not select default', () => {
      const closedCases = serviceCases.map((sc) => ({
        ...sc,
        status: Status.RESOLVED,
      }));
      const action = loadServiceCasesSuccess({
        serviceCases: closedCases,
      });

      const state = serviceCaseFeature.reducer(initialState, action);

      expect(state).toEqual({
        selectedServiceCase: undefined,
        serviceCases: closedCases,
        loadError: undefined,
        loading: false,
      });
    });
  });

  describe('loadServiceCasesFailure', () => {
    it('should set the load error in the state', () => {
      const action = loadServiceCasesFailure({
        error: 'This is a test error',
      });

      const state = serviceCaseFeature.reducer(
        {
          ...initialState,
          serviceCases,
          loading: true,
        },
        action
      );

      expect(state).toEqual({
        ...initialState,
        serviceCases,
        loadError: 'This is a test error',
        loading: false,
      });
    });
  });

  describe('selectServiceCase', () => {
    it('should select a service case', () => {
      const action = selectServiceCase({
        selectedServiceCase: serviceCases[1],
      });

      const state = serviceCaseFeature.reducer(initialState, action);

      expect(state).toEqual({
        selectedServiceCase: serviceCases[1],
        serviceCases: [],
        loadError: undefined,
        loading: false,
      });
    });
  });
});
