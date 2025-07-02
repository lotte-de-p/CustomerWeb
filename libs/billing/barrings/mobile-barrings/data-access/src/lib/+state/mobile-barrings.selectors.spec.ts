import { initialState } from './mobile-barrings.reducers';
import {
  selectLoadingState,
  selectMobileBarringGroups,
  selectMobileBarringSelectedMobileLine,
} from './mobile-barrings.selectors';

describe('mobile barrings selectors', () => {
  it('should select msisdn that has been selected', () => {
    const result = selectMobileBarringSelectedMobileLine.projector(initialState);

    expect(result).toEqual(initialState.selectedMobileLine);
  });

  it('should select mobile barring groups', () => {
    const result = selectMobileBarringGroups.projector({
      ...initialState,
      barringGroups: [
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
      ],
    });

    expect(result).toEqual([
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
    ]);
  });

  it('should select loading state', () => {
    const result = selectLoadingState.projector({ ...initialState, loading: true });

    expect(result).toEqual(true);
  });
});
