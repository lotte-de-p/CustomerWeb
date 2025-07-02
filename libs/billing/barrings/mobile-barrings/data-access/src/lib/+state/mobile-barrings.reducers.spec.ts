import { MobileBarrings } from '../entities/mobile-barrings.interface';
import {
  fetchMobileBarringsFailure,
  fetchMobileBarringsSuccess,
  setSelectedMobileLine,
  triggerLoading,
} from './mobile-barrings.actions';
import { initialState, mobileBarringsFeature } from './mobile-barrings.reducers';

describe('mobile barrings reducer', () => {
  const barringGroups = [
    {
      code: 'general',
      barringSettings: [
        {
          id: '9145817036413694123',
          code: 'outgoing-calls',
          isBarred: false,
          mutualExclusiveBarringIds: [
            '9148574133765183805',
            '9148574133765183807',
            '9148574133765183808',
            '9147986090113628517',
            '9145816944513694015',
            '9148574133765183809',
            '9145817118313694305',
          ],
          isSetByFraudManager: false,
        },
        {
          id: '9145817118313694305',
          code: 'bar-outgoing-texts',
          isBarred: true,
          mutualExclusiveBarringIds: [
            '9149714240065296387',
            '9149714240065296388',
            '9149714239965296385',
            '9149714240065296386',
          ],
          isSetByFraudManager: false,
        },
      ],
    },
    {
      code: 'premium-sms',
      barringSettings: [
        {
          id: '9149714239965296385',
          code: 'texts-for-games-etc',
          isBarred: false,
          mutualExclusiveBarringIds: ['9145817118313694305'],
          isSetByFraudManager: false,
        },
      ],
    },
  ];
  it('should set the loading ', () => {
    const action = triggerLoading({ value: true });

    const state = mobileBarringsFeature.reducer(initialState, action);

    expect(state).toEqual({ ...initialState, loading: true });
  });

  it('should set the mobile barring', () => {
    const obj: MobileBarrings = {
      barringGroups,
      updatable: false,
      productStatus: 'ACTIVE',
      productName: 'product name',
    };
    const action = fetchMobileBarringsSuccess({ mobileBarringObject: obj });

    const state = mobileBarringsFeature.reducer({ ...initialState }, action);

    expect(state).toEqual({
      ...initialState,
      barringGroups: barringGroups,
      productName: 'product name',
      productStatus: 'ACTIVE',
      readOnly: true,
    });
  });

  it('should set the error ', () => {
    const action = fetchMobileBarringsFailure({ error: 'this is an error' });

    const state = mobileBarringsFeature.reducer({ ...initialState, loadError: undefined, loading: true }, action);

    expect(state).toEqual({ ...initialState, loading: false, loadError: 'this is an error' });
  });

  it('should set the msisdn ', () => {
    const action = setSelectedMobileLine({ selectedMobileLine: { msisdn: '0488776655', name: '', isDataOnly: false } });

    const state = mobileBarringsFeature.reducer({ ...initialState }, action);

    expect(state).toEqual({
      ...initialState,
      selectedMobileLine: { msisdn: '0488776655', name: '', isDataOnly: false },
      loading: true,
    });
  });
});
