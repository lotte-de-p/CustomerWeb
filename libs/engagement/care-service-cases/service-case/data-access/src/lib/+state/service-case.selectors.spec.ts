import { initialState } from './service-case.reducers';
import {
  selectClosedServiceCases,
  selectLoadError,
  selectLoading,
  selectOpenServiceCases,
  selectSelectedServiceCase,
  selectServiceCases,
} from './service-case.selectors';
import { Status, Type } from '../entitities/service-case.interface';

describe('selectors', () => {
  const PRODUCT_TYPE_1 = 'Internet, DTV, fixed line';
  const PRODUCT_TYPE_2 = 'Internet, DTV';

  it('should select service cases from the Store', () => {
    const result = selectServiceCases.projector(initialState);

    expect(result).toEqual(initialState.serviceCases);
  });

  it('should select open service cases from the Store', () => {
    const result = selectOpenServiceCases.projector({
      ...initialState,
      serviceCases: [
        {
          id: '123456',
          type: Type.MOVE,
          status: Status.OPEN,
          creationDate: new Date(2023, 8, 18),
          productType: PRODUCT_TYPE_1,
        },
        {
          id: '987654',
          type: Type.TAKEOVER,
          status: Status.RESOLVED,
          creationDate: new Date(2023, 3, 2),
          productType: PRODUCT_TYPE_2,
        },
      ],
    });

    expect(result).toEqual([
      {
        id: '123456',
        type: Type.MOVE,
        status: Status.OPEN,
        creationDate: new Date(2023, 8, 18),
        productType: PRODUCT_TYPE_1,
      },
    ]);
  });

  it('should select closed service cases from the Store', () => {
    const result = selectClosedServiceCases.projector({
      ...initialState,
      serviceCases: [
        {
          id: '123456',
          type: Type.MOVE,
          status: Status.OPEN,
          creationDate: new Date(2023, 8, 18),
          productType: PRODUCT_TYPE_1,
        },
        {
          id: '987654',
          type: Type.TAKEOVER,
          status: Status.RESOLVED,
          creationDate: new Date(2023, 3, 2),
          productType: PRODUCT_TYPE_2,
        },
      ],
    });

    expect(result).toEqual([
      {
        id: '987654',
        type: Type.TAKEOVER,
        status: Status.RESOLVED,
        creationDate: new Date(2023, 3, 2),
        productType: PRODUCT_TYPE_2,
      },
    ]);
  });

  it('should select service cases from the Store', () => {
    const result = selectSelectedServiceCase.projector({
      ...initialState,
      selectedServiceCase: {
        id: '123456',
        type: Type.MOVE,
        status: Status.OPEN,
        creationDate: new Date(2023, 8, 18),
        productType: PRODUCT_TYPE_1,
      },
    });

    expect(result).toEqual({
      id: '123456',
      type: Type.MOVE,
      status: Status.OPEN,
      creationDate: new Date(2023, 8, 18),
      productType: PRODUCT_TYPE_1,
    });
  });

  it('should select the load error', () => {
    const result = selectLoadError.projector({
      ...initialState,
      loadError: 'This is a load error',
    });

    expect(result).toEqual('This is a load error');
  });

  it('should select the loading flag', () => {
    const result = selectLoading.projector({
      ...initialState,
      loading: true,
    });

    expect(result).toBe(true);
  });
});
