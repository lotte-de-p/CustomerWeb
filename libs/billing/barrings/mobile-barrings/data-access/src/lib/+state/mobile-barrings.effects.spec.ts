import { TestBed } from '@angular/core/testing';
import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { MockProvider } from 'ng-mocks';
import { provideMockStore } from '@ngrx/store/testing';
import { MobileBarringsEffects } from './mobile-barrings.effects';
import { MobileBarringsService } from '../services/mobile-barrings.service';
import { of } from 'rxjs';

const MOBILE_BARRINGS_RESPONSE = {
  productName: 'BASE 29',
  updatable: true,
  productStatus: 'ACTIVE',
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
  ],
};

describe('mobile barrings effects', () => {
  let actions$: Actions;
  let effects: MobileBarringsEffects;
  let service: MobileBarringsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MobileBarringsEffects,
        provideMockStore({}),
        MockProvider(MobileBarringsService),
        provideMockActions(() => actions$),
      ],
    });
    effects = TestBed.inject(MobileBarringsEffects);
    service = TestBed.inject(MobileBarringsService);
  });

  describe('fetchMobileBarrings', () => {
    it('should trigger fetchMobileBarringsSuccess', (done) => {
      jest.spyOn(service, 'getMobileBarrings').mockReturnValue(of(MOBILE_BARRINGS_RESPONSE));
      effects['facade'].selectMobileBarringSelectedMobileLine$ = of({
        msisdn: '0499887766',
        name: '',
        isDataOnly: false,
      });
      actions$ = of({ type: '[mobile-barrings] setSelectedMobileLine' });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      effects.loadMobileBarrings$.subscribe((action: any) => {
        expect(action.type).toBe('[mobile-barrings] fetchMobileBarringsSuccess');
        expect(action.mobileBarringObject.barringGroups).toEqual([
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
        ]);
        done();
      });
    });
  });
});
